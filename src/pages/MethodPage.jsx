import {
  Container,
  Eyebrow,
  PageIntro,
  PrimaryCTA,
} from '../components/primitives.jsx';
import DataBoundaryDiagram from '../components/DataBoundaryDiagram.jsx';

const STEPS = [
  [
    '01',
    'Start with the commercial question',
    'We map the actual decision a team has to make — who makes it, on what evidence, and what goes wrong today. Software comes after.',
  ],
  [
    '02',
    'Stay inside the boundary',
    'Data stays under the client’s control. No prompt context leaves for a third-party model. Proprietary engines do the work in-place.',
  ],
  [
    '03',
    'Use AI deliberately',
    'Extraction, classification, scoring, routing — where AI removes tedious review work. Not a chat interface bolted onto a workflow.',
  ],
  [
    '04',
    'Encode the rules',
    'Thresholds, categories, escalation paths, and exceptions sit as visible, editable rules inside the system — not inside a prompt.',
  ],
  [
    '05',
    'Leave a record',
    'Every decision keeps a record of what was reviewed, which rule was applied, what changed, and who made the final call.',
  ],
];

const PRINCIPLES = [
  [
    'No third-party LLM exposure',
    'Sensitive operational data should not become prompt context for somebody else’s model.',
  ],
  [
    'No black boxes',
    'Every output is tied to the evidence and rules that produced it.',
  ],
  [
    'No one-shot recommenders',
    'We build review workflows. The decision stays with the human.',
  ],
  [
    'No free-text prompts',
    'Operational review is structured work. We treat it that way.',
  ],
];

export default function MethodPage({ navigate }) {
  return (
    <main className="page-in">
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <PageIntro
            eyebrow="METHOD"
            title={
              <>
                Narrow engines.
                <br />
                Client-controlled boundary.
              </>
            }
            intro="Sensitive operational data should not become prompt context for somebody else’s model. Ten Fish Labs builds narrow engines around the commercial question: extract, classify, score, route, and report inside a controlled data boundary."
          />
        </Container>
      </section>

      {/* Data boundary diagram */}
      <section className="py-16 md:py-20 border-t border-rule">
        <Container>
          <div className="grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 md:col-span-4">
              <Eyebrow className="mb-6">ARCHITECTURE</Eyebrow>
              <h2 className="display text-[28px] md:text-[36px] leading-[1.05]">
                The data boundary stays with the client.
              </h2>
              <p className="body-lead mt-6 max-w-sm">
                Inputs, the engine, and outputs all live inside a client-controlled
                perimeter. Third-party LLM services sit outside it and stay there.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="bg-panel p-6 md:p-10 border border-rule">
                <DataBoundaryDiagram />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Copy block */}
      <section className="py-20 md:py-28 border-t border-rule">
        <Container>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-5">
              <Eyebrow className="mb-6">PRINCIPLE</Eyebrow>
              <h2 className="display text-[28px] md:text-[36px] leading-[1.05]">
                Remove noise. Keep judgement.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7 space-y-6">
              <p className="body-lead">
                Where AI methodologies are useful, we use them deliberately. The goal is
                not to add a chat interface. The goal is to remove noisy, tedious review
                work while keeping evidence, rules, and human judgement intact.
              </p>
              <p className="body-lead">
                Every system should leave a record: what was reviewed, which rule was
                applied, what changed, and who made the final decision.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 border-t border-rule">
        <Container>
          <Eyebrow className="mb-8">PROCESS</Eyebrow>
          <div className="grid grid-cols-12 gap-8">
            {STEPS.map(([n, t, d]) => (
              <div
                key={n}
                className="col-span-12 md:col-span-6 lg:col-span-4 border-t border-ink pt-6"
              >
                <div className="eyebrow mb-4">STEP · {n}</div>
                <div className="display text-[22px] md:text-[24px] mb-3">{t}</div>
                <p className="body-muted max-w-sm">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-20 md:py-28 border-t border-rule">
        <Container>
          <Eyebrow className="mb-8">PRINCIPLES</Eyebrow>
          <div className="grid grid-cols-12 gap-8">
            {PRINCIPLES.map(([t, d]) => (
              <div
                key={t}
                className="col-span-12 md:col-span-6 border-t border-ink pt-6"
              >
                <div className="display text-[22px] md:text-[24px] mb-3">{t}</div>
                <p className="body-muted max-w-md">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <PrimaryCTA navigate={navigate} />
          </div>
        </Container>
      </section>
    </main>
  );
}
