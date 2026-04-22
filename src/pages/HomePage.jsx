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
            <HeroMedia
              video="/video/tenfish-systems-loop.mp4"
              poster="/images/tenfish-systems-poster.jpg"
              fallbackImg="/assets/schaaq.png"
            />
          </div>
        </div>
      </section>

      {/* 2. Method summary */}
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
                else’s model. Our systems extract, classify, score, route, and report on
                data that never leaves the client’s boundary.
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
            title={<>A growing portfolio of commercial systems.</>}
            intro="Three are live. More are in development. Each system starts with a specific commercial problem and is built so the useful parts can be adapted for similar problems later."
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
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <div className="p-6">
                  <div className="eyebrow-muted mb-3">
                    {ROMAN[i]} · {p.title.toUpperCase()}
                  </div>
                  <div className="display text-[22px] mb-2">{p.title}</div>
                  <p className="body-muted">{p.summary}</p>
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

      {/* 4. Team preview — no individual portraits */}
      <section className="py-24 md:py-32 border-b border-rule">
        <Container>
          <div className="grid grid-cols-12 gap-10 items-end">
            <div className="col-span-12 md:col-span-7">
              <Eyebrow className="mb-6">TEAM</Eyebrow>
              <h2 className="display text-[32px] md:text-[44px] leading-[1.05]">
                A small senior team building commercial systems from product, data,
                design, governance, and domain expertise.
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

          <div className="mt-14 grid grid-cols-12 gap-0 border-t border-ink">
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

      {/* 5. Final CTA */}
      <section className="py-28 md:py-36 bg-night text-white">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow className="mb-8 text-white">NEXT</Eyebrow>
            <h2 className="display text-[36px] md:text-[56px] leading-[1.02]">
              If your problem lives in data and current tools are too noisy, we’d like to
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
