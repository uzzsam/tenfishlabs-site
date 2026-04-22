// Vercel serverless function — /api/contact
// Requires env vars:
//   CONTACT_TO_EMAIL        destination inbox (e.g. hello@tenfishlabs.com)
//   CONTACT_FROM_EMAIL      verified sender (e.g. hello@tenfishlabs.com)
//   RESEND_API_KEY          Resend API key (https://resend.com/)
// Optional env vars:
//   TURNSTILE_SECRET_KEY    Cloudflare Turnstile secret. When set, the
//                           endpoint verifies the client token before
//                           sending. Without it, Turnstile is skipped.
//
// Does not log submission content in production.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(res, status, body) {
  res.status(status).setHeader('content-type', 'application/json');
  res.send(JSON.stringify(body));
}

function sanitise(value, max = 4000) {
  if (typeof value !== 'string') return '';
  return value.replace(/\u0000/g, '').slice(0, max).trim();
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return json(res, 405, { error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return json(res, 400, { error: 'Invalid JSON' });
    }
  }
  if (!body || typeof body !== 'object') {
    return json(res, 400, { error: 'Missing body' });
  }

  // Honeypot — filled only by bots. Return success silently without sending.
  const honeypot = sanitise(body.company_website, 200);
  if (honeypot) {
    return json(res, 200, { ok: true });
  }

  const problem = sanitise(body.problem);
  const data = sanitise(body.data);
  const email = sanitise(body.email, 200);
  const product = sanitise(body.product, 64);
  const ALLOWED_PRODUCTS = ['schaaq', 'lnyrd', 'warranty-triage'];
  const productSlug = ALLOWED_PRODUCTS.includes(product) ? product : '';

  if (!problem) return json(res, 400, { error: 'Field 01 is required' });
  if (!data) return json(res, 400, { error: 'Field 02 is required' });
  if (!EMAIL_RE.test(email)) return json(res, 400, { error: 'Valid email required' });

  // Cloudflare Turnstile — only enforced if the secret is configured.
  const { TURNSTILE_SECRET_KEY } = process.env;
  if (TURNSTILE_SECRET_KEY) {
    const token = sanitise(body.turnstileToken, 4096);
    if (!token) {
      return json(res, 400, { error: 'Verification required' });
    }
    const params = new URLSearchParams();
    params.set('secret', TURNSTILE_SECRET_KEY);
    params.set('response', token);
    const fwd = req.headers['x-forwarded-for'];
    if (typeof fwd === 'string' && fwd) {
      params.set('remoteip', fwd.split(',')[0].trim());
    }
    try {
      const vr = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          body: params.toString(),
        }
      );
      const verdict = await vr.json().catch(() => ({ success: false }));
      if (!verdict || !verdict.success) {
        return json(res, 400, { error: 'Verification failed. Please retry.' });
      }
    } catch {
      return json(res, 502, { error: 'Verification service unreachable' });
    }
  }

  const { CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, RESEND_API_KEY } = process.env;
  if (!CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL || !RESEND_API_KEY) {
    return json(res, 500, {
      error:
        'Mail provider not configured on server. Use the mail client fallback for now.',
    });
  }

  const subject = productSlug
    ? `Ten Fish Labs — new enquiry (${productSlug})`
    : 'Ten Fish Labs — new enquiry';
  const productLine = productSlug ? `Product context: ${productSlug}\n\n` : '';
  const textBody =
    `${productLine}` +
    `What are you trying to measure or improve?\n${problem}\n\n` +
    `What data are you working with?\n${data}\n\n` +
    `From: ${email}`;

  const productHtml = productSlug
    ? `<p><strong>Product context:</strong> ${escapeHtml(productSlug)}</p>`
    : '';
  const htmlBody = `
    ${productHtml}
    <p><strong>What are you trying to measure or improve?</strong></p>
    <p>${escapeHtml(problem).replace(/\n/g, '<br/>')}</p>
    <p><strong>What data are you working with?</strong></p>
    <p>${escapeHtml(data).replace(/\n/g, '<br/>')}</p>
    <p><strong>From:</strong> ${escapeHtml(email)}</p>
  `;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!r.ok) {
      if (process.env.NODE_ENV !== 'production') {
        // Local dev only — never in production
        const raw = await r.text();
        console.error('[contact] resend error', r.status, raw);
      }
      return json(res, 502, { error: 'Mail provider rejected the request' });
    }
    return json(res, 200, { ok: true });
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[contact] network error', err?.message);
    }
    return json(res, 500, { error: 'Mail provider unreachable' });
  }
}
