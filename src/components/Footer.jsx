import { Container, Eyebrow, TFLMarkInverted } from './primitives.jsx';

export default function Footer({ go }) {
  return (
    <footer className="mt-0">
      <div className="bg-panel border-t border-ruleStrong">
        <Container className="py-20">
          <div className="grid grid-cols-12 gap-8 md:gap-10">
            <div className="col-span-12 md:col-span-4">
              <Eyebrow className="mb-5">TEN FISH LABS</Eyebrow>
              <p className="body-lead max-w-sm">
                Ten Fish Labs builds operational review software. We design products that make
                structured human review faster, clearer, and defensible — across data
                architecture, recruiting, and warranty claims.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4">
              <Eyebrow className="mb-5">VISION &amp; MISSION</Eyebrow>
              <p className="body-lead max-w-sm">
                The work that runs companies is review work — of schemas, of candidates, of
                claims, of evidence. We believe the right software should narrow this work to the
                decisions humans actually need to make, and leave a clear record of why each
                decision was reached.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4">
              <Eyebrow className="mb-5">COMMERCIAL MODELS</Eyebrow>
              <p className="body-lead max-w-sm">
                Ten Fish Labs products are available as direct subscriptions, private deployments
                within an organisation, or as white-labelled products sold under a partner's
                brand. For licensing and partnership enquiries, contact the Ten Fish Labs team.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-night text-white">
        <Container className="py-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6 md:col-span-3">
              <div className="eyebrow text-white mb-5">PRODUCTS</div>
              <ul className="space-y-3 text-[14px]">
                <li>
                  <button
                    onClick={() => go('products', 'schaaq')}
                    className="hover:text-white/70"
                  >
                    Schaaq
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => go('products', 'lnyrd')}
                    className="hover:text-white/70"
                  >
                    LNYRD
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => go('products', 'warranty')}
                    className="hover:text-white/70"
                  >
                    Warranty Triage
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3">
              <div className="eyebrow text-white mb-5">COMPANY</div>
              <ul className="space-y-3 text-[14px]">
                <li>
                  <button onClick={() => go('how')} className="hover:text-white/70">
                    How we build
                  </button>
                </li>
                <li>
                  <button onClick={() => go('about')} className="hover:text-white/70">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => go('contact')} className="hover:text-white/70">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3">
              <div className="eyebrow text-white mb-5">LEGAL</div>
              <ul className="space-y-3 text-[14px]">
                <li>
                  <a href="#" className="hover:text-white/70">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white/70">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white/70">
                    Data protection
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3">
              <div className="eyebrow text-white mb-5">CONTACT</div>
              <a
                href="mailto:hello@tenfishlabs.com"
                className="text-[14px] hover:text-white/70"
              >
                hello@tenfishlabs.com
              </a>
              <div className="mt-6 text-[12px] text-white/50 leading-[1.6]">
                Ten Fish Pty Ltd
                <br />
                Ten Fish Labs
              </div>
            </div>
          </div>
          <div className="hairline mt-14 mb-6" style={{ background: '#222' }} />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <TFLMarkInverted />
              <span className="text-[13px] tracking-[-0.01em] font-medium">TEN FISH LABS</span>
            </div>
            <div className="text-[11px] tracking-[0.22em] uppercase text-white/50">
              © Ten Fish Pty Ltd · Operational review software
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
