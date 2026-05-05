import {
  Container,
  Eyebrow,
  PageIntro,
  PrimaryCTA,
} from '../components/primitives.jsx';
import DataBoundaryDiagram from '../components/DataBoundaryDiagram.jsx';

const OPERATING_PATTERN = [
  [
    'Inputs',
    'Operational records, documents, claims, candidates, submissions, ERP exports, service notes, or other client-held data.',
  ],
  [
    'Rules',
    'Thresholds, criteria, policy terms, defect definitions, scoring models, escalation paths, and exceptions.',
  ],
  [
    'Engine',
    'Extraction, classification, scoring, routing, completeness checks, commercial-impact ranking, and reporting.',
  ],
  [
    'Review surface',
    'A controlled interface where the team sees evidence, exceptions, reasoning, and the next action.',
  ],
  [
    'Record',
    'A durable trail of what was reviewed, which rule applied, what changed, and who made the final decision.',
  ],
];

const BOUNDARY = [
  [
    'Inside the boundary',
    [
      'Operational data',
      'Rules',
      'Evidence',
      'Outputs',
      'Review history',
      'Permissions',
      'Audit trail',
    ],
  ],
  [
    'Outside the boundary',
    [
      'Public AI tools',
      'Generic model interfaces',
      'Third-party prompt retention risk',
      'Uncontrolled copy/paste workflows',
    ],
  ],
];

const WHY_NARROW = [
  [
    'Specific inputs',
    'The system knows what kind of data it is reviewing and what fields matter.',
  ],
  [
    'Visible rules',
    'The logic can be inspected, tuned, versioned, and explained.',
  ],
  [
    'Defensible outputs',
    'The team gets records it can use in audit, governance, operations, or commercial review.',
  ],
];

const STEPS = [
  [
    '01',
    'Map the decision',
    'Identify the decision, owner, data, rules, exceptions, and required record.',
  ],
  [
    '02',
    'Hold the boundary',
    'Design the system so sensitive data stays under client control.',
  ],
  [
    '03',
    'Encode the rules',
    'Turn criteria, policy, thresholds, and escalation paths into visible system logic.',
  ],
  [
    '04',
    'Build the review surface',
    'Give users a structured place to review evidence, exceptions, scores, routes, and approvals.',
  ],
  [
    '05',
    'Leave the record',
    'Capture what happened, what changed, which rule applied, and who made the call.',
  ],
];

const FIT = [
  [
    'Good fit',
    [
      'High-volume review work',
      'Sensitive data',
      'Repeated decisions',
      'Evidence requirements',
      'Manual classification/routing/scoring',
      'Compliance, governance, or audit pressure',
    ],
  ],
  [
    'Bad fit',
    [
      'Generic AI content generation',
      'One-off scripts',
      'Cosmetic dashboards',
      'Workflows with no repeatable rules',
      'Anything requiring users to paste confidential records into public AI tools',
    ],
  ],
];

const List = ({ items }) => (
  <ul>
    {items.map((item, i) => (
      <li
        key={item}
        className="flex items-baseline gap-5 py-3 border-t border-rule last:border-b"
      >
        <span className="spec text-muted w-6 shrink-0">
          {String(i + 1).padStart(2, '0')}
        </span>
        <span className="text-[15px] md:text-[16px]">{item}</span>
      </li>
    ))}
  </ul>
);

export default function MethodPage({ navigate }) {
  return (
    <main className="page-in">
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <PageIntro
            eyebrow="METHOD"
            title="Review engines, not chatbots."
            intro="Operational review work is not an open-ended conversation. It is a repeated decision process: inputs, rules, exceptions, evidence, routing, approval, and record. Ten Fish Labs turns that process into a bounded commercial system inside the client’s data boundary."
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
                Inputs, rules, review surfaces, and records sit inside a
                client-controlled perimeter. Third-party LLM services sit outside it.
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

      {/* Operating pattern */}
      <section className="py-20 md:py-28 border-t border-rule">
        <Container>
          <Eyebrow className="mb-8">THE OPERATING PATTERN</Eyebrow>
          <h2 className="display text-[28px] md:text-[40px] leading-[1.05] mb-12">
            Five parts every Ten Fish Labs system has.
          </h2>
          <div className="grid grid-cols-12 gap-8">
            {OPERATING_PATTERN.map(([t, d], i) => (
              <div
                key={t}
                className="col-span-12 md:col-span-6 lg:col-span-4 border-t border-ink pt-6"
              >
                <div className="eyebrow mb-4">
                  PART · {String(i + 1).padStart(2, '0')}
                </div>
                <div className="display text-[22px] md:text-[24px] mb-3">{t}</div>
                <p className="body-muted max-w-md">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Client boundary */}
      <section className="py-20 md:py-28 border-t border-rule bg-panel">
        <Container>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-5">
              <Eyebrow className="mb-6">CLIENT BOUNDARY</Eyebrow>
              <h2 className="display text-[28px] md:text-[40px] leading-[1.05]">
                The useful work happens inside the client’s perimeter.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7 space-y-8">
              <p className="body-lead">
                Ten Fish Labs systems are designed so sensitive operational data remains
                under the client’s control. The system can use AI methodologies without
                turning confidential data into third-party prompt context.
              </p>
              <div className="grid grid-cols-12 gap-8">
                {BOUNDARY.map(([label, items]) => (
                  <div key={label} className="col-span-12 md:col-span-6">
                    <div className="border-t border-ink pt-5">
                      <div className="eyebrow mb-4">{label.toUpperCase()}</div>
                      <List items={items} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why narrow beats general */}
      <section className="py-20 md:py-28 border-t border-rule">
        <Container>
          <Eyebrow className="mb-8">WHY NARROW BEATS GENERAL</Eyebrow>
          <h2 className="display text-[28px] md:text-[40px] leading-[1.05] mb-12">
            A narrow engine is easier to trust.
          </h2>
          <div className="grid grid-cols-12 gap-8">
            {WHY_NARROW.map(([t, d]) => (
              <div
                key={t}
                className="col-span-12 md:col-span-4 border-t border-ink pt-6"
              >
                <div className="display text-[22px] md:text-[24px] mb-3">{t}</div>
                <p className="body-muted max-w-md">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
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

      {/* Fit */}
      <section className="py-20 md:py-28 border-t border-rule bg-panel">
        <Container>
          <div className="grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 md:col-span-4">
              <Eyebrow className="mb-6">FIT</Eyebrow>
              <h2 className="display text-[28px] md:text-[36px] leading-[1.05]">
                Good fit / Bad fit.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-12 gap-8">
                {FIT.map(([label, items]) => (
                  <div key={label} className="col-span-12 md:col-span-6">
                    <div className="border-t border-ink pt-5">
                      <div className="eyebrow mb-4">{label.toUpperCase()}</div>
                      <List items={items} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-rule">
        <Container>
          <PrimaryCTA navigate={navigate} />
        </Container>
      </section>
    </main>
  );
}
