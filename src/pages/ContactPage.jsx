import { useState } from 'react';
import { Container, Eyebrow, PageIntro } from '../components/primitives.jsx';

const Field = ({ label, hint, className = '', children }) => (
  <label className={`block ${className}`}>
    <div className="eyebrow-muted mb-2">{label}</div>
    {children}
    {hint && <div className="body-muted mt-2 text-[12px]">{hint}</div>}
  </label>
);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const [form, setForm] = useState({ problem: '', data: '', email: '' });
  const [state, setState] = useState({ sending: false, ok: null, error: '' });
  const [clientErr, setClientErr] = useState({});

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
    const subject = 'Ten Fish Labs — new enquiry';
    const body =
      `What are you trying to measure or improve?\n${form.problem}\n\n` +
      `What data are you working with?\n${form.data}\n\n` +
      `From: ${form.email}`;
    window.location.href = `mailto:hello@tenfishlabs.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
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
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState({ sending: false, ok: true, error: '' });
        setForm({ problem: '', data: '', email: '' });
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
    } catch (err) {
      setState({
        sending: false,
        ok: false,
        error: 'Network error — try the mail client fallback below.',
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
              <div className="flex justify-between border-t border-b border-rule py-3">
                <span className="spec text-muted">RESPONSE</span>
                <span className="text-[14px]">Within 2 business days</span>
              </div>
              <div className="flex justify-between border-b border-rule py-3">
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
                  hint="Describe the data types only. Do not include confidential records, customer data, passwords, or live operational data."
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

                <Field label="03 · Email" className="mb-10">
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
