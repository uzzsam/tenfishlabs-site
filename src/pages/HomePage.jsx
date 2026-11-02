import {
  Container,
  Eyebrow,
  SectionHeader,
  PrimaryCTA,
  PrimaryCTAGhost,
  RouterLink,
} from '../components/primitives.jsx';
import Capabilities from '../components/Capabilities.jsx';
import DataBoundaryDiagram from '../components/DataBoundaryDiagram.jsx';
import { PRODUCTS } from '../data/products.js';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];

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
  productiveq: [
    ['Input', 'Functions, workflows, roles, documents and systems'],
    ['Review', 'Process capture, ownership, handovers and versions'],
    ['Output', 'Connected process maps and improvement context'],
  ],
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
  'schaaq-ma': [
    ['Input', 'Structural database metadata only'],
    ['Review', 'Architecture risk, anonymisation, confidence scoring'],
    ['Output', 'VDR-ready diligence reports and appendices'],
  ],
  949: [
    ['Input', 'Real-estate paperwork and document packs'],
    ['Review', 'Classification, rule checks, flags, human approval'],
    ['Output', 'REX preparation, audit trail, dashboard visibility'],
  ],
};

const NOT_CHATBOT = [
  {
    title: 'Defined workflows',
    body: 'Users should not have to invent the workflow every time they ask a question.',
  },
  {
    title: 'Visible reasoning',
    body: 'Classifications and recommendations need visible rules, source evidence, and review paths.',
  },
  {
    title: 'Domain-specific delivery',
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
  {
    name: 'Hemkrit Ragoonath (Hans)',
    role: 'Developer',
    portfolio: 'AI, Web & Mobile Systems',
  },
];

export default function HomePage({ navigate }) {
  return (
    <main className="page-in">
      <section className="border-b border-rule hero-surface">
        <Container className="py-16 md:py-24 lg:py-28">
          <div className="grid grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="col-span-12 lg:col-span-7">
              <Eyebrow className="mb-7">TEN FISH LABS · PERTH, WESTERN AUSTRALIA</Eyebrow>
              <h1 className="display text-[42px] sm:text-[56px] md:text-[68px] lg:text-[76px] leading-[1.02] tracking-[-0.035em] max-w-3xl">Clearer processes.<br />Better decisions.<br /><span className="text-muted">Measurable value.</span></h1>
              <p className="mt-7 body-lead max-w-xl text-[17px] md:text-[18px]">We are a Perth-based AI product studio building practical systems for financial and operational work, from data diagnostics to process mapping and controlled automation.</p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <PrimaryCTA navigate={navigate} />
                <RouterLink to="/products" navigate={navigate} className="spec underline underline-offset-4">Explore our work →</RouterLink>
              </div>
              <p className="mt-6 body-muted max-w-lg">Domain knowledge, source evidence and human oversight shape the work. Data handling is defined for each implementation.</p>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="bg-night text-white p-7 md:p-10 hero-process">
                <p className="spec text-white/70 mb-10">FROM COMPLEXITY TO CLARITY</p>
                {[
                  ['01', 'Understand', 'Map the work, data and decisions.'],
                  ['02', 'Build', 'Connect rules, evidence and review.'],
                  ['03', 'Measure', 'Test efficiency and commercial value.'],
                ].map(([n, title, body]) => <div key={n} className="border-t border-white/20 py-6"><span className="spec text-white/60">{n}</span><h2 className="display text-[30px] mt-3">{title}</h2><p className="text-[15px] text-white/75 mt-3 leading-relaxed">{body}</p></div>)}
                <p className="spec text-white/60 pt-5 border-t border-white/20">PRODUCT · PROCESS · EVIDENCE</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Capabilities navigate={navigate} />

      {/* 2. Where we fit */}
      <section className="py-24 md:py-32 border-b border-rule">
        <Container>
          <SectionHeader
            eyebrow="WHERE WE FIT"
            title={<>Built around the way your business works.</>}
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
                Defined workflows. Controlled data. Human judgement.
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
                For sensitive-data review systems, we design a client-controlled boundary.
                Any external processing must be assessed and agreed for the specific
                data, provider and intended use.
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
            title={<>Purpose-built products. Shared foundations.</>}
            intro="Explore our product streams alongside ProductiveQ’s process mapping and value measurement work. Each starts with a defined commercial problem; development-stage products are identified separately."
          />

          <div className="mt-16 grid grid-cols-12 gap-6 md:gap-8">
            {PRODUCTS.map((p, i) => (
              <RouterLink
                key={p.slug}
                to={`/products/${p.slug}`}
                navigate={navigate}
                className="col-span-12 md:col-span-6 lg:col-span-4 group block portfolio-card border border-rule hover:border-ink transition-colors"
              >
                <div className="aspect-[4/3] bg-panel overflow-hidden border-b border-rule">
                  <img
                    src={p.fallbackImg}
                    alt={p.screenshotAlt || p.title}
                    className="w-full h-full"
                    style={{ objectFit: p.screenshotAlt ? 'contain' : 'cover', objectPosition: 'left top' }}
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
          </div>
        </Container>
      </section>

      {/* 5. Not a chatbot */}
      <section className="py-24 md:py-32 border-b border-rule">
        <Container>
          <SectionHeader
            eyebrow="DELIVERY PRINCIPLES"
            title={<>A clear path from evidence to action.</>}
            intro="We design around defined inputs, visible rules, source evidence, permissions and review paths, with outputs the business can use."
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
