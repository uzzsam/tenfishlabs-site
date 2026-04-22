import { useEffect, useState } from 'react';
import { Container, Eyebrow, PageIntro } from '../components/primitives.jsx';
import { getProduct } from '../data/products.js';
import { trackEvent, EVENTS } from '../lib/events.js';

const Field = ({ label, hint, className = '', children }) => (
  <label className={`block ${className}`}>
    <div className="eyebrow-muted mb-2">{label}</div>
    {children}
    {hint && <div className="body-muted mt-2 text-[12px]">{hint}</div>}
  </label>
);

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

export default function ContactPage({ query }) {
  const productSlug = query?.product || '';
  const product = productSlug ? getProduct(productSlug) : null;

  const [form, setForm] = useState({ problem: '', data: '', email: '' });
  // Honeypot — real users never touch this
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [state, setState] = useState({ sending: false, ok: null, error: '' });
  const [clientErr, setClientErr] = useState({});

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
    window.location.href = `mailto:hello@tenfishlabs.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    trackEvent(EVENTS.CONTACT_SUBMIT_ATTEMPT, {
      product: productSlug || undefined,
    });

    // Honeypot — if filled, show the success UI but never POST.
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
    setState({ sending: true, ok: null, error: '' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          ...form,
          product: productSlug || undefined,
          company_website: companyWebsite || undefined,
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
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <Container>
          <PageIntro
            eyebrow="CONTACT"
            title={<>Start a conversation.</>}
            intro="Tell us what you are trying to measure or improve, and the shape of the data you are working with. We will get back to you within two business days."
          />
          {product && (
            <div className="mt-8 inline-flex items-center gap-3 border border-ink px-4 py-2">
              <span className="spec">CONTEXT</span>
              <span className="text-[14px]">{product.title}</span>
            </div>
          )}
        </Container>
      </section>

      <section className="pb-24 md:pb-32 border-t border-rule">
        <Container className="pt-16 md:pt-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-4">
              <Eyebrow className="mb-6">DIRECT</Eyebrow>
              <div className="flex justify-between border-t border-ruleStrong py-3">
                <span className="spec text-muted">EMAIL</span>
                <a
                  className="text-[14px] hover:text-muted"
                  href="mailto:hello@tenfishlabs.com"
                >
                  hello@tenfishlabs.com
                </a>
              </div>
              <div className="flex justify-between border-t border-rule py-3">
                <span className="spec text-muted">RESPONSE</span>
                <span className="text-[14px]">Within 2 business days</span>
              </div>
              <div className="flex justify-between border-t border-b border-rule py-3">
                <span className="spec text-muted">LOCATION</span>
                <span className="text-[14px]">Perth, Western Australia</span>
              </div>
            </div>

            <div className="col-span-12 md:col-span-8">
              <form onSubmit={onSubmit} noValidate>
                <div className="flex items-baseline justify-between mb-8">
                  <Eyebrow>ENQUIRY</Eyebrow>
                  <span className="spec text-muted">TFL · FORM · 01</span>
                </div>

                {/* Hidden product context — shipped in POST body */}
                <input type="hidden" name="product" value={productSlug} readOnly />

                {/* Honeypot — off-screen; real users never see or tab into this */}
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

                <Field label="01 · What are you trying to measure or improve?" className="mb-8">
                  <textarea
                    rows={4}
                    value={form.problem}
                    onChange={update('problem')}
                    className="w-full bg-transparent border-b border-ruleStrong py-2 outline-none focus:border-ink resize-none"
                    placeholder="e.g. we want to cut candidate screening time without losing audit trail"
                  />
                  {clientErr.problem && (
                    <div className="spec text-[11px] mt-1 text-ink">
                      — {clientErr.problem}
                    </div>
                  )}
                </Field>

                <Field
                  label="02 · What data are you working with?"
                  hint="Describe data types only. Do not paste confidential records, customer data, passwords, commercial secrets, or live operational data into this form."
                  className="mb-8"
                >
                  <textarea
                    rows={4}
                    value={form.data}
                    onChange={update('data')}
                    className="w-full bg-transparent border-b border-ruleStrong py-2 outline-none focus:border-ink resize-none"
                    placeholder="e.g. ATS exports, resumes, role scorecards — structured + unstructured"
                  />
                  {clientErr.data && (
                    <div className="spec text-[11px] mt-1 text-ink">
                      — {clientErr.data}
                    </div>
                  )}
                </Field>

                <Field label="03 · Email" className="mb-8">
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={update('email')}
                    className="w-full bg-transparent border-b border-ruleStrong py-2 outline-none focus:border-ink"
                    placeholder="name@company.com"
                  />
                  {clientErr.email && (
                    <div className="spec text-[11px] mt-1 text-ink">
                      — {clientErr.email}
                    </div>
                  )}
                </Field>

                <p className="body-muted text-[12px] mb-8">
                  We use this information only to assess whether the problem is a fit
                  for Ten Fish Labs.
                </p>

                <div className="flex items-center justify-between gap-4 flex-wrap border-t border-rule pt-6">
                  <div className="spec text-muted">
                    {state.sending && 'Sending…'}
                    {state.ok === true && 'Received. We will be in touch.'}
                    {state.ok === false && (state.error || 'Send failed.')}
                    {state.ok === null && !state.sending && 'Posts to /api/contact'}
                  </div>
                  <button type="submit" className="btn-solid" disabled={state.sending}>
                    Start a conversation <span aria-hidden>→</span>
                  </button>
                </div>

                {state.ok === false && (
                  <div className="mt-4 text-[13px]">
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
          </div>
        </Container>
      </section>
    </main>
  );
}
