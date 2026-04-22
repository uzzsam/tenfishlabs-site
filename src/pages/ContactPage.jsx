import { useCallback, useEffect, useState } from 'react';
import { Container, Eyebrow } from '../components/primitives.jsx';
import TurnstileWidget from '../components/TurnstileWidget.jsx';
import { getProduct } from '../data/products.js';
import { trackEvent, EVENTS } from '../lib/events.js';

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '';

// Destination address is kept out of static HTML / JSX so simple scrapers
// can't harvest it. Decoded only inside click handlers on the client.
const CONTACT_ADDR_B64 = 'aGVsbG9AdGVuZmlzaGxhYnMuY29t';
const decodeContactAddress = () => {
  if (typeof atob === 'function') return atob(CONTACT_ADDR_B64);
  return Buffer.from(CONTACT_ADDR_B64, 'base64').toString('utf-8');
};

const HONEYPOT_STYLE = {
  position: 'absolute',
  left: '-9999px',
  top: 'auto',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  opacity: 0,
  pointerEvents: 'none',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FieldLabel = ({ number, children }) => (
  <div className="flex items-baseline gap-3 mb-3">
    <span className="spec text-muted shrink-0">{number}</span>
    <span className="text-[15px] md:text-[17px] font-medium text-ink leading-[1.35]">
      {children}
    </span>
  </div>
);

const inputCls =
  'w-full bg-page border border-ruleStrong px-4 py-3 text-[15px] md:text-[16px] outline-none focus:border-ink transition-colors';

const textareaCls = `${inputCls} resize-y min-h-[120px] md:min-h-[140px]`;

export default function ContactPage({ query }) {
  const productSlug = query?.product || '';
  const product = productSlug ? getProduct(productSlug) : null;

  const [form, setForm] = useState({ problem: '', data: '', email: '' });
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [state, setState] = useState({ sending: false, ok: null, error: '' });
  const [clientErr, setClientErr] = useState({});

  const handleTurnstile = useCallback((token) => {
    setTurnstileToken(token || '');
  }, []);

  useEffect(() => {
    if (product) {
      trackEvent(EVENTS.CONTACT_CONTEXT_LOADED, { product: product.slug });
    }
  }, [product]);

  const update = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value });
    if (clientErr[k]) setClientErr({ ...clientErr, [k]: '' });
  };

  const validate = () => {
    const errs = {};
    if (!form.problem.trim()) errs.problem = 'Required';
    if (!form.data.trim()) errs.data = 'Required';
    if (!EMAIL_RE.test(form.email.trim())) errs.email = 'Valid email required';
    return errs;
  };

  const mailtoFallback = () => {
    const subjectProduct = product ? ` (${product.title})` : '';
    const subject = `Ten Fish Labs — new enquiry${subjectProduct}`;
    const body =
      (product ? `Product context: ${product.title} (${product.slug})\n\n` : '') +
      `What are you trying to measure or improve?\n${form.problem}\n\n` +
      `What data are you working with?\n${form.data}\n\n` +
      `From: ${form.email}`;
    const to = decodeContactAddress();
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    trackEvent(EVENTS.CONTACT_SUBMIT_ATTEMPT, {
      product: productSlug || undefined,
    });

    if (companyWebsite.trim() !== '') {
      setState({ sending: false, ok: true, error: '' });
      setForm({ problem: '', data: '', email: '' });
      return;
    }

    const errs = validate();
    if (Object.keys(errs).length) {
      setClientErr(errs);
      return;
    }

    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setState({
        sending: false,
        ok: false,
        error: 'Please complete the verification before sending.',
      });
      return;
    }

    setState({ sending: true, ok: null, error: '' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          ...form,
          product: productSlug || undefined,
          company_website: companyWebsite || undefined,
          turnstileToken: turnstileToken || undefined,
        }),
      });
      if (res.ok) {
        setState({ sending: false, ok: true, error: '' });
        setForm({ problem: '', data: '', email: '' });
        trackEvent(EVENTS.CONTACT_SUBMIT_SUCCESS, {
          product: productSlug || undefined,
          status: res.status,
        });
        return;
      }
      let msg = 'Something went wrong.';
      try {
        const j = await res.json();
        if (j && j.error) msg = j.error;
      } catch {
        // ignore
      }
      setState({ sending: false, ok: false, error: msg });
      trackEvent(EVENTS.CONTACT_SUBMIT_ERROR, {
        product: productSlug || undefined,
        status: res.status,
      });
    } catch (err) {
      setState({
        sending: false,
        ok: false,
        error: 'Network error — try the mail client fallback below.',
      });
      trackEvent(EVENTS.CONTACT_SUBMIT_ERROR, {
        product: productSlug || undefined,
        errorCode: 'network',
      });
    }
  };

  return (
    <main className="page-in">
      {/* Short hero — form sits immediately below */}
      <section className="pt-16 pb-10 md:pt-24 md:pb-14">
        <Container>
          <Eyebrow className="mb-6">CONTACT</Eyebrow>
          <h1 className="display text-[36px] md:text-[56px] lg:text-[64px] leading-[1.02] tracking-[-0.03em] max-w-4xl">
            Start a conversation.
          </h1>
          <p className="mt-6 body-lead max-w-2xl text-[16px] md:text-[17px]">
            Tell us what you are trying to measure or improve, and the shape of the
            data you are working with. We reply within two business days.
          </p>
          {product && (
            <div className="mt-7 inline-flex items-center gap-3 border border-ink px-4 py-2">
              <span className="spec">CONTEXT</span>
              <span className="text-[14px]">{product.title}</span>
            </div>
          )}
        </Container>
      </section>

      {/* Form panel — obvious, bordered, on the page background */}
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="bg-panel border border-ruleStrong">
            {/* Top strip: direct contact (email removed for bot hygiene) */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-ruleStrong">
              <div className="px-6 md:px-8 py-5 border-b md:border-b-0 md:border-r border-ruleStrong">
                <div className="spec text-muted mb-1">CHANNEL</div>
                <div className="text-[15px] md:text-[16px]">
                  Form below
                </div>
              </div>
              <div className="px-6 md:px-8 py-5 border-b md:border-b-0 md:border-r border-ruleStrong">
                <div className="spec text-muted mb-1">RESPONSE</div>
                <div className="text-[15px] md:text-[16px]">
                  Within 2 business days
                </div>
              </div>
              <div className="px-6 md:px-8 py-5">
                <div className="spec text-muted mb-1">LOCATION</div>
                <div className="text-[15px] md:text-[16px]">
                  Perth, Western Australia
                </div>
              </div>
            </div>

            {/* Form body */}
            <form onSubmit={onSubmit} noValidate className="px-6 md:px-12 py-10 md:py-14">
              <div className="flex items-baseline justify-between mb-10">
                <div>
                  <Eyebrow className="mb-3">ENQUIRY FORM</Eyebrow>
                  <h2 className="display text-[24px] md:text-[32px] leading-[1.1]">
                    Three questions. One reply.
                  </h2>
                </div>
                <span className="spec text-muted hidden md:block">TFL · FORM · 01</span>
              </div>

              {/* Hidden product context */}
              <input
                type="hidden"
                name="product"
                value={productSlug}
                readOnly
              />

              {/* Honeypot */}
              <div aria-hidden="true" style={HONEYPOT_STYLE}>
                <label>
                  Company website
                  <input
                    type="text"
                    name="company_website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                  />
                </label>
              </div>

              {/* 01 */}
              <div className="mb-10">
                <FieldLabel number="01">
                  What are you trying to measure or improve?
                </FieldLabel>
                <textarea
                  rows={5}
                  value={form.problem}
                  onChange={update('problem')}
                  className={textareaCls}
                  placeholder="e.g. cut candidate screening time without losing audit trail"
                />
                {clientErr.problem && (
                  <div className="spec text-[11px] mt-2 text-ink">
                    — {clientErr.problem}
                  </div>
                )}
              </div>

              {/* 02 */}
              <div className="mb-10">
                <FieldLabel number="02">What data are you working with?</FieldLabel>
                <textarea
                  rows={5}
                  value={form.data}
                  onChange={update('data')}
                  className={textareaCls}
                  placeholder="e.g. ATS exports, resumes, role scorecards — structured + unstructured"
                />
                <div className="text-[13px] body-muted mt-3 max-w-2xl">
                  Describe data types only. Do not paste confidential records,
                  customer data, passwords, commercial secrets, or live operational
                  data into this form.
                </div>
                {clientErr.data && (
                  <div className="spec text-[11px] mt-2 text-ink">
                    — {clientErr.data}
                  </div>
                )}
              </div>

              {/* 03 */}
              <div className="mb-10">
                <FieldLabel number="03">Email</FieldLabel>
                <input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update('email')}
                  className={inputCls}
                  placeholder="name@company.com"
                />
                {clientErr.email && (
                  <div className="spec text-[11px] mt-2 text-ink">
                    — {clientErr.email}
                  </div>
                )}
              </div>

              <div className="text-[13px] body-muted mb-4 max-w-2xl">
                We use this information only to assess whether the problem is a fit
                for Ten Fish Labs.
              </div>

              <TurnstileWidget
                siteKey={TURNSTILE_SITE_KEY}
                onToken={handleTurnstile}
              />

              <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-ruleStrong pt-6">
                <div className="spec text-muted">
                  {state.sending && 'Sending…'}
                  {state.ok === true && 'Received. We will be in touch.'}
                  {state.ok === false && (state.error || 'Send failed.')}
                  {state.ok === null && !state.sending && 'Reply within 2 business days'}
                </div>
                <button
                  type="submit"
                  className="btn-solid w-full md:w-auto"
                  style={{ padding: '16px 36px', fontSize: 12, letterSpacing: '0.22em' }}
                  disabled={state.sending}
                >
                  Start a conversation <span aria-hidden>→</span>
                </button>
              </div>

              {state.ok === false && (
                <div className="mt-5 text-[13px]">
                  <button
                    type="button"
                    onClick={mailtoFallback}
                    className="spec text-ink border-b border-ink pb-1 hover:opacity-70"
                  >
                    Open in your mail client instead →
                  </button>
                </div>
              )}
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}
