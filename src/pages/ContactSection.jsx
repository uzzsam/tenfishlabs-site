import { useState } from 'react';
import { Container, Eyebrow, SolidBtn } from '../components/primitives.jsx';

const Field = ({ label, className, children }) => (
  <label className={`block ${className}`}>
    <div className="eyebrow-muted mb-2">{label}</div>
    {children}
  </label>
);

export default function ContactSection({ standalone }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    interest: 'Schaaq',
    message: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = `Enquiry — ${form.interest}`;
    const body = `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:hello@tenfishlabs.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <section className={`${standalone ? '' : 'section-rule'} py-24 md:py-32`}>
      <Container>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <Eyebrow className="mb-6">CONTACT</Eyebrow>
            <h2 className="display text-[36px] md:text-[56px] leading-[1.05]">
              Discuss a product,
              <br />
              deployment,
              <br />
              or licensing model.
            </h2>
            <p className="mt-8 body-lead max-w-md">
              For subscription access, private deployments, or white-label licensing, contact the
              Ten Fish Labs team.
            </p>
            <div className="mt-10">
              <div className="flex justify-between border-t border-ruleStrong py-3">
                <span className="spec text-muted">EMAIL</span>
                <a className="text-[14px] hover:text-muted" href="mailto:hello@tenfishlabs.com">
                  hello@tenfishlabs.com
                </a>
              </div>
              <div className="flex justify-between border-t border-b border-rule py-3">
                <span className="spec text-muted">RESPONSE</span>
                <span className="text-[14px]">Within 2 business days</span>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <form onSubmit={onSubmit} className="bg-panel p-8 md:p-10">
              <div className="flex items-baseline justify-between mb-8">
                <Eyebrow>ENQUIRY FORM</Eyebrow>
                <span className="spec text-muted">TFL · ENQ</span>
              </div>
              <div className="grid grid-cols-12 gap-6">
                <Field label="Name" className="col-span-12 md:col-span-6">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-ruleStrong py-2 outline-none focus:border-ink"
                  />
                </Field>
                <Field label="Company" className="col-span-12 md:col-span-6">
                  <input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-transparent border-b border-ruleStrong py-2 outline-none focus:border-ink"
                  />
                </Field>
                <Field label="Email" className="col-span-12">
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-ruleStrong py-2 outline-none focus:border-ink"
                  />
                </Field>
                <Field label="Product interest" className="col-span-12">
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full bg-transparent border-b border-ruleStrong py-2 outline-none focus:border-ink"
                  >
                    <option>Schaaq</option>
                    <option>LNYRD</option>
                    <option>Warranty Triage</option>
                    <option>White-label / licensing</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Message" className="col-span-12">
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-ruleStrong py-2 outline-none focus:border-ink resize-none"
                  />
                </Field>
              </div>
              <div className="mt-10 flex items-center justify-between gap-4 flex-wrap">
                <div className="spec text-muted">
                  {sent ? 'Redirecting to mail client…' : 'Submits via your mail client'}
                </div>
                <SolidBtn>Send enquiry</SolidBtn>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
