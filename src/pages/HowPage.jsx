import { Container, CenteredIntro, FullBleedBand } from '../components/primitives.jsx';

export default function HowPage() {
  return (
    <main className="page-in">
      <section className="pt-24 pb-20 md:pt-36 md:pb-28">
        <Container>
          <CenteredIntro
            eyebrow="HOW WE BUILD"
            title={
              <>
                Workflow first.
                <br />
                AI where it earns its place.
              </>
            }
            intro="Ten Fish Labs products are designed around the review work itself — the inputs, the evidence, the rules, the exceptions, and the decision. AI is used to clean up what is messy; the workflow, the rules, and the decision stay with the team."
          />
        </Container>
      </section>

      <FullBleedBand
        tone="dark"
        title="Workflow"
        caption="We design the review before we design the software."
        imageSide="right"
        height="medium"
      >
        <img
          src="/assets/schaaq.png"
          alt=""
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
          <div className="grid grid-cols-12 gap-8">
            {[
              [
                '01',
                'Start with the review',
                'We map how the review is actually done today — who does it, what they look at, what they decide, and what goes wrong.',
              ],
              [
                '02',
                'Structure the evidence',
                'Inputs, documents, schemas, candidate material, claim notes, and supporting context are brought into one structured review flow.',
              ],
              [
                '03',
                'Encode the rules',
                'Eligibility, thresholds, categories, constraints, and escalation paths are encoded directly into the product — visible and editable.',
              ],
              [
                '04',
                'Use AI where it helps',
                'AI is used for extraction, matching, summarisation, and classification. It does not replace the workflow or the decision.',
              ],
              [
                '05',
                'Leave a record',
                'Every decision leaves a full record of the evidence reviewed, the rules applied, and the human who made the call.',
              ],
            ].map(([n, t, d]) => (
              <div key={n} className="col-span-12 md:col-span-4">
                <div className="eyebrow-muted mb-4">STEP · {n}</div>
                <div className="display text-[24px] md:text-[28px] mb-3">{t}</div>
                <p className="body-muted max-w-sm">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FullBleedBand
        tone="light"
        title="Evidence"
        caption="Every decision in a Ten Fish Labs product is backed by evidence."
        height="medium"
      >
        <img
          src="/assets/lnyrd-candidates.png"
          alt=""
          className="w-full h-full"
          style={{ objectFit: 'cover', objectPosition: 'top', opacity: 0.9 }}
        />
      </FullBleedBand>

      <section className="py-24 md:py-32">
        <Container>
          <CenteredIntro
            eyebrow="PRINCIPLES"
            title={<>What we don't do</>}
            intro="Ten Fish Labs does not build one-shot AI recommenders. We don't sell a chat interface and call it a workflow. We don't pretend every case is clean. And we don't hide how a decision was reached."
          />
          <div className="mt-20 grid grid-cols-12 gap-8">
            {[
              [
                'No black boxes',
                'Every decision in a Ten Fish Labs product is tied to the evidence and rules that produced it.',
              ],
              [
                'No one-shot recommenders',
                'We build review workflows, not single-shot AI recommendations.',
              ],
              [
                'No free-text prompts',
                'Operational review is structured work. We treat it that way.',
              ],
              [
                'No AI replacing judgement',
                'AI cleans up messy inputs. The decision remains with the human.',
              ],
            ].map(([t, d], i) => (
              <div key={i} className="col-span-12 md:col-span-6 lg:col-span-3">
                <div className="display text-[20px] md:text-[22px] mb-3">{t}</div>
                <p className="body-muted">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
