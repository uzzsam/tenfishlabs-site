import {
  Container,
  Eyebrow,
  PageIntro,
  PrimaryCTA,
} from '../components/primitives.jsx';

const TEAM = [
  {
    name: 'Uzy Samorali',
    role: 'Managing Director',
    portfolio: 'Product, Architecture & Commercial Systems',
    img: '/images/team/uzy.jpg',
    bio: 'Builds Ten Fish Labs’ commercial systems end-to-end — from the data architecture underneath to the review workflow on top. Works directly with client teams to ship production software.',
  },
  {
    name: 'Julia Samorali',
    role: 'Director',
    portfolio: 'Operations & Product Experience',
    img: '/images/team/julia.jpg',
    bio: 'Leads operations and product experience. Responsible for how teams actually use Ten Fish Labs systems day-to-day — intake, onboarding, documentation, and the review surface users see.',
  },
  {
    name: 'Brad Stein',
    role: 'Director',
    portfolio: 'Commercial Strategy & Governance',
    img: '/images/team/brad.jpg',
    bio: 'Covers commercial strategy and governance — deployment models, licensing, and the contractual shape of how systems are sold directly, deployed privately, or white-labelled.',
  },
  {
    name: 'Ishay Katz',
    role: 'Advisory Board',
    portfolio: 'Strategic Partnerships & Innovation Ecosystems',
    img: '/images/team/ishay.jpg',
    bio: 'Advises on strategic partnerships and how Ten Fish Labs works inside broader innovation ecosystems — where a narrow commercial system slots into a larger ecosystem of partners and distribution.',
  },
  {
    name: 'Sam Nelson',
    role: 'Advisory Board',
    portfolio: 'Data, ESG & Regulatory Systems',
    img: '/images/team/sam.jpg',
    bio: 'Advises on data, ESG, and regulatory systems. Helps shape how Ten Fish Labs approaches sensitive data workflows, regulatory context, and the evidence trail each system produces.',
  },
];

export default function TeamPage({ navigate }) {
  return (
    <main className="page-in">
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <PageIntro
            eyebrow="TEAM"
            title={<>The people behind Ten Fish Labs.</>}
            intro="A small operator-led team based in Perth, Western Australia. We build commercial systems alongside the teams that will use them."
          />
        </Container>
      </section>

      <section className="pb-24 md:pb-32 border-t border-rule">
        <Container className="pt-16 md:pt-20">
          <div className="grid grid-cols-12 gap-10 md:gap-12">
            {TEAM.map((m, i) => (
              <article
                key={m.name}
                className={`col-span-12 md:col-span-6 ${
                  i % 2 === 1 ? 'md:mt-16' : ''
                }`}
              >
                <div className="aspect-[4/5] bg-panel overflow-hidden border border-rule">
                  <img
                    src={m.img}
                    alt={m.name}
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
                <div className="mt-6">
                  <Eyebrow className="mb-3">
                    {String(i + 1).padStart(2, '0')} · {m.role.toUpperCase()}
                  </Eyebrow>
                  <div className="display text-[24px] md:text-[28px]">{m.name}</div>
                  <div className="body-muted mt-1">{m.portfolio}</div>
                  <p className="body-lead mt-5 max-w-md">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

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
