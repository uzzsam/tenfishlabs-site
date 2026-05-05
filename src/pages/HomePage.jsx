import {
  Container,
  Eyebrow,
  SectionHeader,
  PrimaryCTA,
  PrimaryCTAGhost,
  RouterLink,
} from '../components/primitives.jsx';
import HeroMedia from '../components/HeroMedia.jsx';
import DataBoundaryDiagram from '../components/DataBoundaryDiagram.jsx';
import { PRODUCTS } from '../data/products.js';

const ROMAN = ['I', 'II', 'III'];

const WHERE_WE_FIT = [
  {
    title: 'Sensitive operational data',
    body: 'Financial records, candidate material, claims evidence, service records, ERP exports, and other data that should stay inside the client’s boundary.',
  },
  {
    title: 'Repeated review decisions',
    body: 'Workflows where people classify, compare, approve, reject, escalate, or prioritise using the same rules again and again.',
  },
  {
    title: 'Evidence matters',
    body: 'Every output needs a reason: the source data, the rule applied, the exception found, and the person who made the final call.',
  },
  {
    title: 'Generic tools fail',
    body: 'Chatbots, spreadsheets, dashboards, and off-the-shelf SaaS do not encode the workflow tightly enough to make the decision defensible.',
  },
];

const PRODUCT_CARD_DETAILS = {
  schaaq: [
    ['Input', 'Operational and financial data'],
    ['Review', 'Data defects, severity, ownership, commercial impact'],
    ['Output', 'Cost-ranked defect register with evidence'],
  ],
  lnyrd: [
    ['Input', 'Candidates, submissions, criteria, notes, scores'],
    ['Review', 'Structured comparison and panel decision workflow'],
    ['Output', 'Shortlist, review log, approval trail'],
  ],
  'warranty-triage': [
    ['Input', 'Claims, product data, defect codes, evidence'],
    ['Review', 'Policy, completeness, routing, escalation'],
    ['Output', 'Categorised claim queue and claim-book reporting'],
  ],
};

const NOT_CHATBOT = [
  {
    title: 'Not open-ended prompting',
    body: 'Users should not have to invent the workflow every time they ask a question.',
  },
  {
    title: 'Not black-box scoring',
    body: 'Classifications and recommendations need visible rules, source evidence, and review paths.',
  },
  {
    title: 'Not generic automation',
    body: 'Each system is shaped to the client’s workflow, terminology, data sources, and commercial decision.',
  },
];

const TEAM_PREVIEW = [
  {
    name: 'Uzy Samorali',
    role: 'Principal Engineer',
    portfolio: 'Product, Architecture & Commercial Systems',
  },
  {
    name: 'Julia Samorali',
    role: 'Operations Lead',
    portfolio: 'Operations & Product Experience',
  },
  { name: 'Brad Stein', role: 'Commercial Lead', portfolio: 'Commercial Strategy & Governance' },
  {
    name: 'Ishay Katz',
    role: 'Advisory Board',
    portfolio: 'Partnerships, Innovation & Community Building',
  },
  {
    name: 'Sam Nelson',
    role: 'Advisory Board',
    portfolio: 'Data, ESG & Regulatory Systems',
  },
];

export default function HomePage({ navigate }) {
  return (
    <main className="page-in">
      {/* 1. Hero */}
      <section className="relative">
        <div className="grid grid-cols-12 gap-0 border-b border-rule">
          <div className="col-span-12 md:col-span-7 bg-page">
            <Container className="py-20 md:py-28 lg:py-32">
              <Eyebrow className="mb-8">TEN FISH LABS · PERTH, WA</Eyebrow>
              <h1 className="display text-[40px] md:text-[64px] lg:text-[80px] leading-[0.98] tracking-[-0.03em]">
                Operational review systems for decisions that need evidence.
              </h1>
              <p className="mt-8 body-lead max-w-xl text-[16px] md:text-[17px]">
                Ten Fish Labs builds narrow AI-assisted systems that scan, classify, score,
                route, and report on sensitive operational data — without pushing client
                records into third-party LLMs.
              </p>
              <div className="mt-10">
                <PrimaryCTA navigate={navigate} />
              </div>
              <p className="mt-5 body-muted max-w-xl">
                Built for messy data, repeated review work, and decisions a team may need to
                defend later.
              </p>

              <dl className="mt-14 grid grid-cols-3 gap-6 max-w-xl border-t border-rule pt-6">
                <div>
                  <dt className="spec text-muted">LIVE</dt>
                  <dd className="display text-[28px] md:text-[32px] mt-2">3 systems</dd>
                </div>
                <div>
                  <dt className="spec text-muted">REVIEW WORK</dt>
                  <dd className="display text-[28px] md:text-[32px] mt-2">
                    Data · Talent · Claims
                  </dd>
                </div>
                <div>
                  <dt className="spec text-muted">BOUNDARY</dt>
                  <dd className="display text-[28px] md:text-[32px] mt-2">
                    Client-controlled
                  </dd>
                </div>
              </dl>
            </Container>
          </div>
          <div className="col-span-12 md:col-span-5 bg-night">
            <HeroMedia
              video="/video/tenfish-systems-loop.mp4"
              poster="/images/tenfish-systems-poster.jpg"
              fallbackImg="/assets/schaaq.png"
            />
          </div>
        </div>
      </section>

      {/* 2. Where we fit */}
      <section className="py-24 md:py-32 border-b border-rule">
        <Container>
          <SectionHeader
            eyebrow="WHERE WE FIT"
            title={<>When the work is too specific for SaaS and too sensitive for generic AI.</>}
            intro="Ten Fish Labs fits where teams already have the data, rules, and domain knowledge — but the review process is still slow, noisy, manual, or hard to defend."
          />

          <div className="mt-14 grid grid-cols-12 gap-0 border-t border-ink">
            {WHERE_WE_FIT.map((item, i) => (
              <div
                key={item.title}
                className="col-span-12 md:col-span-6 border-b border-rule py-8 pr-6"
              >
                <div className="spec text-muted mb-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="display text-[22px] md:text-[26px]">{item.title}</h3>
                <p className="body-muted mt-4 max-w-md">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Method summary */}
      <section className="py-24 md:py-32 border-b border-rule">
        <Container>
          <div className="grid grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="col-span-12 md:col-span-5">
              <Eyebrow className="mb-6">METHOD</Eyebrow>
              <h2 className="display text-[32px] md:text-[44px] leading-[1.05] text-ink">
                Narrow engines. Client-held data. Human judgement.
              </h2>
              <p className="body-lead mt-6 max-w-md">
                We build systems around the commercial question first: what needs to be
                reviewed, which rules apply, who decides, and what record must exist
                afterwards.
              </p>
              <p className="body-lead mt-5 max-w-md">
                AI methodologies are used for extraction, classification, scoring, routing,
                and reporting where they remove tedious review work. The decision remains
                with the team.
              </p>
              <p className="body-lead mt-5 max-w-md">
                Sensitive records stay inside the client-controlled boundary. Third-party
                LLM services sit outside that perimeter.
              </p>
              <div className="mt-8">
                <RouterLink
                  to="/method"
                  navigate={navigate}
                  className="spec text-ink border-b border-ink pb-1 hover:opacity-70"
                >
                  Read the method →
                </RouterLink>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="bg-panel p-6 md:p-10 border border-rule">
                <DataBoundaryDiagram />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Product portfolio */}
      <section className="py-24 md:py-32 border-b border-rule">
        <Container>
          <SectionHeader
            eyebrow="PORTFOLIO"
            title={<>Three live systems. One operating pattern.</>}
            intro="Each Ten Fish Labs system starts with a specific commercial review problem. The pattern is consistent: bring the data in, apply rules, surface exceptions, route the work, and leave an evidence-backed record."
          />

          <div className="mt-16 grid grid-cols-12 gap-6 md:gap-8">
            {PRODUCTS.map((p, i) => (
              <RouterLink
                key={p.slug}
                to={`/products/${p.slug}`}
                navigate={navigate}
                className="col-span-12 md:col-span-6 lg:col-span-3 group block border border-rule hover:border-ink transition-colors"
              >
                <div className="aspect-[4/3] bg-panel overflow-hidden border-b border-rule">
                  <img
                    src={p.fallbackImg}
                    alt={p.title}
                    className="w-full h-full"
                    style={{ objectFit: 'cover', objectPosition: 'left top' }}
                  />
                </div>
                <div className="p-6">
                  <div className="eyebrow-muted mb-3">
                    {ROMAN[i]} · {p.title.toUpperCase()}
                  </div>
                  <div className="display text-[22px] mb-2">{p.title}</div>
                  <div className="body-muted">
                    {PRODUCT_CARD_DETAILS[p.slug].map(([label, text]) => (
                      <p key={label} className="mt-2 first:mt-0">
                        <span className="spec text-ink">{label}:</span> {text}
                      </p>
                    ))}
                  </div>
                </div>
              </RouterLink>
            ))}
            <RouterLink
              to="/products"
              hash="in-development"
              navigate={navigate}
              className="col-span-12 md:col-span-6 lg:col-span-3 group block border border-dashed border-ruleStrong hover:border-ink transition-colors"
            >
              <div className="aspect-[4/3] bg-page border-b border-dashed border-ruleStrong flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="spec text-muted mb-3">IN BUILD</div>
                  <div className="display text-[32px] text-ink">IV · · ·</div>
                </div>
              </div>
              <div className="p-6">
                <div className="eyebrow-muted mb-3">IV · IN DEVELOPMENT</div>
                <div className="display text-[22px] mb-2">More commercial systems</div>
                <p className="body-muted">
                  Data quality, operational review, ESG and regulatory data, and
                  commercial workflow automation.
                </p>
              </div>
            </RouterLink>
          </div>
        </Container>
      </section>

      {/* 5. Not a chatbot */}
      <section className="py-24 md:py-32 border-b border-rule">
        <Container>
          <SectionHeader
            eyebrow="WHAT THIS IS NOT"
            title={<>Not a chatbot bolted onto a workflow.</>}
            intro="Ten Fish Labs does not build loose prompt interfaces for sensitive operational work. We build bounded systems with defined inputs, visible rules, evidence records, permissions, and outputs the business can use."
          />

          <div className="mt-14 grid grid-cols-12 gap-0 border-t border-ink">
            {NOT_CHATBOT.map((item, i) => (
              <div
                key={item.title}
                className="col-span-12 md:col-span-4 border-b border-rule py-8 pr-6"
              >
                <div className="spec text-muted mb-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="display text-[20px] md:text-[24px]">{item.title}</h3>
                <p className="body-muted mt-4 max-w-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Team preview - no individual portraits */}
      <section className="py-20 md:py-24 border-b border-rule">
        <Container>
          <div className="grid grid-cols-12 gap-10 items-end">
            <div className="col-span-12 md:col-span-7">
              <Eyebrow className="mb-6">TEAM</Eyebrow>
              <h2 className="display text-[32px] md:text-[44px] leading-[1.05]">
                A small senior team for product, data, design, governance, and commercial
                systems.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:text-right">
              <RouterLink
                to="/team"
                navigate={navigate}
                className="spec text-ink border-b border-ink pb-1 hover:opacity-70"
              >
                Meet the team →
              </RouterLink>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-12 gap-0 border-t border-ink">
            {TEAM_PREVIEW.map((t, i) => (
              <div
                key={t.name}
                className="col-span-12 md:col-span-6 lg:col-span-4 border-b border-rule py-6 pr-6"
              >
                <div className="spec text-muted mb-3">
                  {String(i + 1).padStart(2, '0')} · {t.role.toUpperCase()}
                </div>
                <div className="display text-[20px] md:text-[22px]">{t.name}</div>
                <div className="body-muted mt-1">{t.portfolio}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Final CTA */}
      <section className="py-28 md:py-36 bg-night text-white">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow className="mb-8 text-white">NEXT</Eyebrow>
            <h2 className="display text-[36px] md:text-[56px] leading-[1.02]">
              Bring us the review process your current tools cannot handle.
            </h2>
            <p className="body-lead mt-8 max-w-2xl text-white">
              Tell us what is being reviewed, what data is involved, and what decision
              needs a defensible record.
            </p>
            <div className="mt-12">
              <PrimaryCTAGhost navigate={navigate} onDark />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
