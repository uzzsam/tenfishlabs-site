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

const PORTFOLIO = [
  {
    to: '/products',
    hash: 'schaaq',
    eyebrow: 'I · SCHAAQ',
    name: 'Schaaq',
    line: 'Data architecture review for teams that carry the operational load of a schema.',
    img: '/assets/schaaq.png',
  },
  {
    to: '/products',
    hash: 'lnyrd',
    eyebrow: 'II · LNYRD',
    name: 'LNYRD',
    line: 'Structured candidate review with a defensible record of every decision.',
    img: '/assets/lnyrd-dashboard.png',
  },
  {
    to: '/products',
    hash: 'warranty',
    eyebrow: 'III · WARRANTY TRIAGE',
    name: 'Warranty Triage',
    line: 'Claim intake, categorisation, and routing — structured, consistent, auditable.',
    img: '/assets/triage-home.png',
  },
];

const TEAM_PREVIEW = [
  { name: 'Uzy Samorali', role: 'Managing Director', img: '/images/team/uzy.jpg' },
  { name: 'Julia Samorali', role: 'Director', img: '/images/team/julia.jpg' },
  { name: 'Brad Stein', role: 'Director', img: '/images/team/brad.jpg' },
  { name: 'Ishay Katz', role: 'Advisory Board', img: '/images/team/ishay.jpg' },
  { name: 'Sam Nelson', role: 'Advisory Board', img: '/images/team/sam.jpg' },
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
                Software that turns messy operational data into defensible decisions.
              </h1>
              <p className="mt-8 body-lead max-w-xl text-[16px] md:text-[17px]">
                Ten Fish Labs builds purpose-specific commercial systems using AI
                methodologies and deep domain expertise — without exposing sensitive data
                to third-party LLMs.
              </p>
              <div className="mt-10">
                <PrimaryCTA navigate={navigate} />
              </div>

              <dl className="mt-14 grid grid-cols-3 gap-6 max-w-xl border-t border-rule pt-6">
                <div>
                  <dt className="spec text-muted">LIVE</dt>
                  <dd className="display text-[28px] md:text-[32px] mt-2">3</dd>
                  <div className="body-muted mt-1">systems in production</div>
                </div>
                <div>
                  <dt className="spec text-muted">DOMAINS</dt>
                  <dd className="display text-[28px] md:text-[32px] mt-2">
                    Data · TA · Claims
                  </dd>
                </div>
                <div>
                  <dt className="spec text-muted">BOUNDARY</dt>
                  <dd className="display text-[28px] md:text-[32px] mt-2">Client-held</dd>
                </div>
              </dl>
            </Container>
          </div>
          <div className="col-span-12 md:col-span-5 bg-night">
            <HeroMedia />
          </div>
        </div>
      </section>

      {/* 2. Method summary with data-boundary diagram */}
      <section className="py-24 md:py-32 border-b border-rule">
        <Container>
          <div className="grid grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="col-span-12 md:col-span-5">
              <Eyebrow className="mb-6">METHOD</Eyebrow>
              <h2 className="display text-[32px] md:text-[44px] leading-[1.05] text-ink">
                Narrow engines inside a client-controlled boundary.
              </h2>
              <p className="body-lead mt-6 max-w-md">
                Sensitive operational data should not become prompt context for somebody
                else's model. Our systems extract, classify, score, route, and report on
                data that never leaves the client's boundary.
              </p>
              <p className="body-lead mt-5 max-w-md">
                AI methodologies are used where they remove tedious review work — not to
                replace the decision. Evidence, rules, and the record stay with the team.
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

      {/* 3. Product portfolio */}
      <section className="py-24 md:py-32 border-b border-rule">
        <Container>
          <SectionHeader
            eyebrow="PORTFOLIO"
            title={<>Three systems live. More in build.</>}
            intro="Each system is purpose-built around a commercial problem where existing tools leave too much tedious review work to humans."
          />

          <div className="mt-16 grid grid-cols-12 gap-6 md:gap-8">
            {PORTFOLIO.map((p) => (
              <RouterLink
                key={p.hash}
                to={p.to}
                hash={p.hash}
                navigate={navigate}
                className="col-span-12 md:col-span-6 lg:col-span-3 group block border border-rule hover:border-ink transition-colors"
              >
                <div className="aspect-[4/3] bg-panel overflow-hidden border-b border-rule">
                  <img
                    src={p.img}
                    alt=""
                    className="w-full h-full"
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <div className="p-6">
                  <div className="eyebrow-muted mb-3">{p.eyebrow}</div>
                  <div className="display text-[22px] mb-2">{p.name}</div>
                  <p className="body-muted">{p.line}</p>
                </div>
              </RouterLink>
            ))}
            {/* In development — no image, dashed card */}
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
                  Data quality, operational review, ESG/regulatory data, and commercial
                  workflow automation.
                </p>
              </div>
            </RouterLink>
          </div>
        </Container>
      </section>

      {/* 4. Team preview */}
      <section className="py-24 md:py-32 border-b border-rule">
        <Container>
          <div className="grid grid-cols-12 gap-10 items-end">
            <div className="col-span-12 md:col-span-7">
              <Eyebrow className="mb-6">TEAM</Eyebrow>
              <h2 className="display text-[32px] md:text-[44px] leading-[1.05]">
                Operators who have shipped commercial systems.
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

          <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {TEAM_PREVIEW.map((t) => (
              <figure key={t.name} className="block">
                <div className="aspect-[3/4] bg-panel overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      filter: 'grayscale(1) contrast(1.02)',
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <figcaption className="mt-4">
                  <div className="text-[15px] font-medium tracking-[-0.01em]">
                    {t.name}
                  </div>
                  <div className="body-muted mt-1 text-[13px]">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Final CTA */}
      <section className="py-28 md:py-36 bg-night text-white">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow className="mb-8 text-white">NEXT</Eyebrow>
            <h2 className="display text-[36px] md:text-[56px] leading-[1.02]">
              If your problem lives in data and current tools are too noisy, we'd like to
              hear about it.
            </h2>
            <div className="mt-12">
              <PrimaryCTAGhost navigate={navigate} onDark />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
