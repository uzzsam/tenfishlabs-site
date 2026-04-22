import { Container, Eyebrow, CenteredIntro, FullBleedBand } from '../components/primitives.jsx';
import ContactSection from './ContactSection.jsx';

export default function AboutPage({ go }) {
  return (
    <main className="page-in">
      <section className="pt-24 pb-20 md:pt-36 md:pb-28">
        <Container>
          <CenteredIntro
            eyebrow="ABOUT"
            title={<>Ten Fish Labs</>}
            intro="Ten Fish Labs is the software brand owned by Ten Fish Pty Ltd. We build operational review software for teams that carry the weight of important decisions — schemas that have to scale, candidates who have to be evaluated fairly, claims that have to be resolved consistently."
          />
        </Container>
      </section>

      <FullBleedBand
        tone="tan"
        title="Studio"
        caption="Ten Fish Labs is a small, product-led studio. We build what we'd want to use."
        height="medium"
      >
        <img
          src="/assets/schaaq.png"
          alt=""
          className="w-full h-full"
          style={{ objectFit: 'cover', objectPosition: 'top', opacity: 0.95 }}
        />
      </FullBleedBand>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 md:col-span-5">
              <Eyebrow className="mb-5">STUDIO</Eyebrow>
              <h2 className="display text-[36px] md:text-[52px] leading-[1.05]">
                A small studio building in-depth products.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 pt-2 space-y-6">
              <p className="body-lead">
                Ten Fish Labs is a small studio. We build each product alongside a team that does
                the review work every day, and we use those products ourselves.
              </p>
              <p className="body-lead">
                Each Ten Fish Labs product is released under its own name — Schaaq, LNYRD,
                Warranty Triage — with the Ten Fish Labs brand signalling the underlying
                approach: structured review, encoded rules, human judgement.
              </p>
              <p className="body-lead">
                Ten Fish Labs is owned by Ten Fish Pty Ltd. Products can be sold directly,
                deployed privately, or white-labelled under a partner's brand.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-rule py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <Eyebrow>COMPANY DETAILS</Eyebrow>
            </div>
            <div className="col-span-12 md:col-span-9">
              <dl>
                {[
                  ['Legal entity', 'Ten Fish Pty Ltd'],
                  ['Brand', 'Ten Fish Labs'],
                  ['ABN', '[ Insert ABN if you want it public ]'],
                  ['Location', '[ Insert location ]'],
                  ['Contact', 'hello@tenfishlabs.com'],
                ].map(([k, v], i) => (
                  <div
                    key={k}
                    className={`grid grid-cols-12 py-4 ${
                      i === 0 ? 'border-t border-ruleStrong' : 'border-t border-rule'
                    } ${i === 4 ? 'border-b border-ruleStrong' : ''}`}
                  >
                    <dt className="col-span-4 md:col-span-3 spec text-muted">{k}</dt>
                    <dd className="col-span-8 md:col-span-9 text-[17px]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <ContactSection go={go} />
    </main>
  );
}
