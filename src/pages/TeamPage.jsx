import {
  Container,
  Eyebrow,
  PrimaryCTA,
} from '../components/primitives.jsx';

// Hero — live image, no colour filter so the warm-to-cold contrast reads.
const TEAM_HERO = '/images/team/team-hero.jpg';
// TODO-media: /images/team/tenfish-whiteboard.jpg
// TODO-media: /images/team/tenfish-session-detail.jpg
const TEAM_WHITEBOARD = '/images/team/tenfish-whiteboard.jpg';
const TEAM_SESSION = '/images/team/tenfish-session-detail.jpg';

const TEAM = [
  {
    name: 'Uzy Samorali',
    role: 'Principal Engineer',
    portfolio: 'Product, Architecture & Commercial Systems',
    bio: 'Builds Ten Fish Labs’ commercial systems end-to-end — from the data architecture underneath to the review workflow on top. Works directly with client teams to ship production software.',
  },
  {
    name: 'Julia Samorali',
    role: 'Operations Lead',
    portfolio: 'Operations & Product Experience',
    bio: 'Leads operations and product experience. Responsible for how teams actually use Ten Fish Labs systems day-to-day — intake, onboarding, documentation, and the review surface users see.',
  },
  {
    name: 'Brad Stein',
    role: 'Commercial Lead',
    portfolio: 'Commercial Strategy & Governance',
    bio: 'Covers commercial strategy and governance — deployment models, licensing, and the contractual shape of how systems are sold directly, deployed privately, or white-labelled.',
  },
  {
    name: 'Ishay Katz',
    role: 'Advisory Board',
    portfolio: 'Partnerships, Innovation & Community Building',
    bio: 'Advises on partnerships, innovation, and community building — connecting Ten Fish Labs into a broader ecosystem of partners, client relationships, and the innovation community.',
  },
  {
    name: 'Sam Nelson',
    role: 'Advisory Board',
    portfolio: 'Data, ESG & Regulatory Systems',
    bio: 'Advises on data, ESG, and regulatory systems. Helps shape how Ten Fish Labs approaches sensitive data workflows, regulatory context, and the evidence trail each system produces.',
  },
];

const HideOnError = ({ src, alt, className, style }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    style={{ objectFit: 'cover', objectPosition: 'center', ...style }}
    onError={(e) => {
      e.currentTarget.style.display = 'none';
    }}
  />
);

export default function TeamPage({ navigate }) {
  return (
    <main className="page-in">
      {/* 1. Group hero — full-bleed documentary image */}
      <section className="relative bg-panel">
        <div className="aspect-[16/9] md:aspect-[16/8] overflow-hidden bg-night">
          <HideOnError
            src={TEAM_HERO}
            alt="Fusion reactor interior — complex systems, precisely controlled"
            className="w-full h-full"
          />
        </div>
        <Container className="py-12 md:py-16">
          <Eyebrow className="mb-6">TEAM</Eyebrow>
          <h1 className="display text-[32px] md:text-[52px] lg:text-[64px] leading-[1.02] max-w-4xl">
            A small senior team building commercial systems from product, data,
            design, governance, and domain expertise.
          </h1>
        </Container>
      </section>

      {/* 2. Role cards (typographic, no portraits) */}
      <section className="py-20 md:py-28 border-t border-rule">
        <Container>
          <Eyebrow className="mb-10">ROLES</Eyebrow>
          <div className="grid grid-cols-12 gap-x-10 gap-y-6">
            {TEAM.map((m, i) => (
              <details
                key={m.name}
                className="col-span-12 md:col-span-6 group border-t border-ink pt-5"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                  <div>
                    <div className="spec text-muted mb-3">
                      {String(i + 1).padStart(2, '0')} · {m.role.toUpperCase()}
                    </div>
                    <div className="display text-[24px] md:text-[28px]">{m.name}</div>
                    <div className="body-muted mt-1">{m.portfolio}</div>
                  </div>
                  <span
                    aria-hidden
                    className="spec text-muted mt-1 group-open:rotate-45 transition-transform"
                  >
                    +
                  </span>
                </summary>
                <p className="body-lead mt-5 max-w-md">{m.bio}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Documentary strip — whiteboard + session detail */}
      <section className="border-t border-rule">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12 md:col-span-7 aspect-[4/3] md:aspect-auto md:h-[520px] bg-panel overflow-hidden">
            <HideOnError
              src={TEAM_WHITEBOARD}
              alt="Whiteboard session at Ten Fish Labs"
              className="w-full h-full"
              style={{ filter: 'grayscale(1) contrast(1.02)' }}
            />
          </div>
          <div className="col-span-12 md:col-span-5 aspect-[4/3] md:aspect-auto md:h-[520px] bg-panelAlt overflow-hidden">
            <HideOnError
              src={TEAM_SESSION}
              alt="Session detail at Ten Fish Labs"
              className="w-full h-full"
              style={{ filter: 'grayscale(1) contrast(1.02)' }}
            />
          </div>
        </div>
      </section>

      {/* 4. Company details */}
      <section className="section-rule py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <Eyebrow>COMPANY DETAILS</Eyebrow>
            </div>
            <div className="col-span-12 md:col-span-8">
              <dl>
                {[
                  ['Legal entity', 'Ten Fish Pty Ltd'],
                  ['Brand', 'Ten Fish Labs'],
                  ['Location', 'Perth, Western Australia'],
                  ['Contact', 'hello@tenfishlabs.com'],
                ].map(([k, v], i) => (
                  <div
                    key={k}
                    className={`grid grid-cols-12 py-4 ${
                      i === 0 ? 'border-t border-ruleStrong' : 'border-t border-rule'
                    } ${i === 3 ? 'border-b border-ruleStrong' : ''}`}
                  >
                    <dt className="col-span-4 md:col-span-3 spec text-muted">{k}</dt>
                    <dd className="col-span-8 md:col-span-9 text-[17px]">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <PrimaryCTA navigate={navigate} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
