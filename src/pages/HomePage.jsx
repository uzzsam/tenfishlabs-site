import {
  Container,
  Eyebrow,
  CenteredIntro,
  FullBleedBand,
  GhostBtn,
  SolidBtn,
} from '../components/primitives.jsx';
import { CraftMosaic, HeroTripleShot } from '../components/visuals.jsx';

export default function HomePage({ go }) {
  return (
    <main className="page-in">
      <section className="pt-24 pb-20 md:pt-36 md:pb-28">
        <Container>
          <CenteredIntro
            eyebrow="VISION"
            title={<>Our vision</>}
            intro="Ten Fish Labs builds software for the review work that runs companies. Our products take operational review — of schemas, candidates, and warranty claims — and narrow it to the decisions humans actually need to make, with evidence attached and a record of why."
          />
        </Container>
      </section>

      <FullBleedBand
        tone="tan"
        title="Schaaq"
        caption="Data architecture review for the teams that carry the operational load of a schema."
      >
        <img
          src="/assets/schaaq.png"
          alt="Schaaq"
          className="w-full h-full"
          style={{ objectFit: 'cover', objectPosition: 'top', opacity: 0.95 }}
        />
      </FullBleedBand>

      <section className="py-24 md:py-32">
        <Container>
          <CenteredIntro
            eyebrow="APPROACH"
            title={<>Built in the work</>}
            intro="Ten Fish Labs products are built alongside the teams who use them. We start from the actual review the team does every day — the inputs, the evidence, the rules, the exceptions — before we design a single screen."
          />
          <div className="mt-20 grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <div className="aspect-[16/6] bg-panel overflow-hidden">
                <CraftMosaic />
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
              <div className="aspect-[4/3] bg-panel overflow-hidden">
                <img
                  src="/assets/lnyrd-dashboard.png"
                  alt="LNYRD in use"
                  className="w-full h-full"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <div className="text-center mt-6">
                <div className="display text-[20px] md:text-[22px] mb-2">LNYRD, in a TA team</div>
                <p className="body-muted max-w-md mx-auto">
                  Built with a talent-acquisition team that needed a defensible record of how each
                  candidate was evaluated against the role requirements.
                </p>
                <div className="mt-5">
                  <GhostBtn onClick={() => go('products', 'lnyrd')}>Learn more</GhostBtn>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="aspect-[4/3] bg-panel overflow-hidden">
                <img
                  src="/assets/triage-home.png"
                  alt="Warranty Triage in use"
                  className="w-full h-full"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <div className="text-center mt-6">
                <div className="display text-[20px] md:text-[22px] mb-2">
                  Warranty Triage, in a claims team
                </div>
                <p className="body-muted max-w-md mx-auto">
                  Built with a warranty operations team that needed consistent claim
                  categorisation, evidence checks, and escalation routing.
                </p>
                <div className="mt-5">
                  <GhostBtn onClick={() => go('products', 'warranty')}>Learn more</GhostBtn>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FullBleedBand
        tone="dark"
        title="LNYRD"
        caption="Defensible shortlists for TA teams. A 360° record of how every candidate was evaluated."
        imageSide="right"
      >
        <img
          src="/assets/lnyrd-dashboard.png"
          alt="LNYRD"
          className="w-full h-full"
          style={{ objectFit: 'cover', objectPosition: 'top', opacity: 0.55 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, #0A0A0A 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.6) 100%)',
          }}
        />
      </FullBleedBand>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="col-span-12 md:col-span-5">
              <Eyebrow className="mb-6">PRIORITY</Eyebrow>
              <h2 className="display text-[36px] md:text-[52px] mb-6">Our priority.</h2>
              <p className="body-lead max-w-md">
                Operational review is not a prompt. It's the structured judgement that decides
                whether a schema ships, a candidate advances, or a claim is paid. Our products
                protect that work with the evidence, the rules, and the record it needs.
              </p>
              <p className="body-lead max-w-md mt-5">
                AI handles the messy parts: extraction, matching, classification. The workflow,
                the rules, and the decision stay with the team.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="aspect-[4/3] bg-panel overflow-hidden">
                <img
                  src="/assets/triage-rive.png"
                  alt="Product detail"
                  className="w-full h-full"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-12 gap-8">
            {[
              {
                title: 'Evidence',
                body: 'Inputs, documents, schemas, candidate material, claim notes, and supporting context are structured for review — not pasted into a prompt.',
                img: '/assets/schaaq-ma.png',
              },
              {
                title: 'Rules',
                body: 'Eligibility, thresholds, categories, constraints, and escalation paths are encoded directly into the product — visible, auditable, editable.',
                img: '/assets/lnyrd-candidates.png',
              },
              {
                title: 'Record',
                body: 'Every decision leaves a full record of the evidence reviewed, the rules applied, and the human who made the call.',
                img: '/assets/triage-home.png',
              },
            ].map((f, i) => (
              <div key={i} className="col-span-12 md:col-span-4 text-center">
                <div className="aspect-[4/3] bg-panel overflow-hidden mb-6">
                  <img
                    src={f.img}
                    alt=""
                    className="w-full h-full"
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <div className="display text-[22px] md:text-[24px] mb-3">{f.title}</div>
                <p className="body-muted max-w-xs mx-auto">{f.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FullBleedBand
        tone="dark"
        title="Triage"
        caption="Warranty claim review that is structured, consistent, and auditable."
      >
        <img
          src="/assets/triage-home.png"
          alt="Warranty Triage"
          className="w-full h-full"
          style={{ objectFit: 'cover', objectPosition: 'top', opacity: 0.6 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(270deg, #0A0A0A 0%, rgba(10,10,10,0.2) 50%, rgba(10,10,10,0.5) 100%)',
          }}
        />
      </FullBleedBand>

      <section className="py-24 md:py-32">
        <Container>
          <CenteredIntro
            eyebrow="COMMERCIAL"
            title={<>Three ways to deploy</>}
            intro="Ten Fish Labs products are sold as direct subscriptions, deployed privately inside an organisation, or white-labelled under a partner's brand."
          />
          <div className="mt-20 grid grid-cols-12 gap-8 md:gap-10 text-center">
            {[
              {
                mark: 'A',
                label: 'Direct subscription',
                desc: 'For teams that want to use a Ten Fish Labs product directly, with hosted access and regular updates.',
              },
              {
                mark: 'B',
                label: 'Private deployment',
                desc: 'For organisations that need a controlled deployment for their own operations, in their own environment.',
              },
              {
                mark: 'C',
                label: 'White-label',
                desc: "For companies that want to offer a Ten Fish Labs product under their own brand, with the underlying IP retained by Ten Fish Labs.",
              },
            ].map((m, i) => (
              <div key={i} className="col-span-12 md:col-span-4">
                <div className="eyebrow-muted mb-4">MODEL · {m.mark}</div>
                <div className="display text-[22px] md:text-[24px] mb-3">{m.label}</div>
                <p className="body-muted max-w-xs mx-auto">{m.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FullBleedBand
        tone="light"
        title="Intelligence"
        caption="AI used where the input is messy. Workflow where the decision matters."
      >
        <HeroTripleShot />
      </FullBleedBand>

      <section className="py-24 md:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <p className="body-lead">
              Our products are built to be intuitive to use. They benefit from a wide range of
              on-board intelligence — extraction, categorisation, matching — supported by an
              interface that narrows the review to the decisions that actually require human
              judgement.
            </p>
            <p className="body-lead mt-6">
              Regular product updates extend what can be reviewed, what can be extracted, and
              which exceptions are surfaced. The commitment to improvement never stops.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-6">
              <div className="aspect-[4/3] bg-panel overflow-hidden">
                <img
                  src="/assets/schaaq-report.png"
                  alt="Schaaq report"
                  className="w-full h-full"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <div className="text-center mt-6">
                <div className="display text-[20px] md:text-[22px] mb-3">
                  Structured review reports
                </div>
                <p className="body-muted max-w-sm mx-auto">
                  Findings, evidence, rules applied, severity, and owner — captured in a single
                  structured report, ready to share with the team or the board.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="aspect-[4/3] bg-panel overflow-hidden">
                <img
                  src="/assets/lnyrd-reviews.png"
                  alt="LNYRD review queue"
                  className="w-full h-full"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <div className="text-center mt-6">
                <div className="display text-[20px] md:text-[22px] mb-3">
                  Review queues, with evidence
                </div>
                <p className="body-muted max-w-sm mx-auto">
                  Each review is a structured queue — candidates, claims, schemas — with the
                  evidence and the rules attached to every item, not a free-text prompt.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <SolidBtn onClick={() => go('contact')}>Discuss a deployment</SolidBtn>
          </div>
        </Container>
      </section>
    </main>
  );
}
