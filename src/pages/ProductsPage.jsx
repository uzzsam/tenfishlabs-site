import { useEffect } from 'react';
import {
  Container,
  Eyebrow,
  PageIntro,
  PrimaryCTA,
  RouterLink,
} from '../components/primitives.jsx';

const ProductSection = ({
  id,
  number,
  name,
  headline,
  lead,
  uses,
  note,
  heroImg,
  detailImg,
  navigate,
}) => (
  <section id={id} className="py-20 md:py-28 border-t border-rule scroll-mt-24">
    <Container>
      <div className="grid grid-cols-12 gap-10 items-start">
        <div className="col-span-12 md:col-span-5">
          <Eyebrow className="mb-5">
            {number} · {name.toUpperCase()}
          </Eyebrow>
          <h2 className="display text-[32px] md:text-[48px] leading-[1.02]">
            {headline}
          </h2>
          <p className="body-lead mt-6 max-w-md">{lead}</p>
          {note && <p className="body-muted mt-5 max-w-md italic">{note}</p>}

          <ul className="mt-10">
            {uses.map((u, i) => (
              <li
                key={i}
                className="flex items-baseline gap-5 py-3 border-t border-rule last:border-b"
              >
                <span className="spec text-muted w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[15px] md:text-[16px]">{u}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <PrimaryCTA navigate={navigate} />
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 md:sticky md:top-24">
          <div className="grid grid-cols-1 gap-4">
            <div className="aspect-[16/10] bg-panel overflow-hidden border border-rule">
              <img
                src={heroImg}
                alt={`${name} — primary screen`}
                className="w-full h-full"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <div className="aspect-[16/10] bg-panel overflow-hidden border border-rule">
              <img
                src={detailImg}
                alt={`${name} — detail`}
                className="w-full h-full"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default function ProductsPage({ navigate, hash }) {
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return (
    <main className="page-in">
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <PageIntro
            eyebrow="PRODUCTS"
            title={<>Commercial systems, not a fixed product set.</>}
            intro="Three are live. More are being built. Each one addresses a specific commercial problem where existing tools leave too much tedious review work to humans."
          />
          <nav className="mt-14 grid grid-cols-12 gap-6">
            {[
              { hash: 'schaaq', label: 'I · Schaaq' },
              { hash: 'lnyrd', label: 'II · LNYRD' },
              { hash: 'warranty', label: 'III · Warranty Triage' },
              { hash: 'in-development', label: 'IV · In development' },
            ].map((j) => (
              <RouterLink
                key={j.hash}
                to="/products"
                hash={j.hash}
                navigate={navigate}
                className="col-span-6 md:col-span-3 spec text-muted hover:text-ink border-t border-ink pt-4"
              >
                {j.label}
              </RouterLink>
            ))}
          </nav>
        </Container>
      </section>

      <ProductSection
        id="schaaq"
        number="I"
        name="Schaaq"
        headline="Data architecture assessment software."
        lead="Schaaq reviews a data architecture against the operational load it has to carry. It identifies structural risk — missing indexes, denormalisation debt, referential gaps, orphan tables — and assembles a single diagnostic report a team can share."
        uses={[
          'M&A data due diligence',
          'Pre-migration architecture audit',
          'Schema review for operational load',
          'Reporting and BI readiness',
          'White-label diagnostic product',
        ]}
        note="Hosted, private deployment, or white-labelled inside a consultancy's diagnostic product."
        heroImg="/assets/schaaq.png"
        detailImg="/assets/schaaq-ma.png"
        navigate={navigate}
      />

      <ProductSection
        id="lnyrd"
        number="II"
        name="LNYRD"
        headline="Candidate review. Structured. Defensible."
        lead="LNYRD structures the review of every candidate against every requirement for a role. It pulls signal from resumes and notes, maps it to the role's actual requirements, and leaves a record of why each candidate advanced — or didn't."
        uses={[
          'Structured screening for open roles',
          'Requirement-by-requirement evaluation',
          'Evidence-linked hiring recommendations',
          'Audit trail for every decision',
          'White-label for agencies',
        ]}
        note="For TA teams that need a defensible record of every decision, not a one-shot AI recommendation."
        heroImg="/assets/lnyrd-dashboard.png"
        detailImg="/assets/lnyrd-candidates.png"
        navigate={navigate}
      />

      <ProductSection
        id="warranty"
        number="III"
        name="Warranty Triage"
        headline="Warranty claim review that scales."
        lead="Warranty Triage structures claim intake, identifies missing evidence, categorises claims against policy, and routes each case to the right reviewer. It turns a stream of warranty claims into an ordered queue of decisions."
        uses={[
          'Warranty claim intake',
          'Policy categorisation',
          'Missing-evidence detection',
          'Escalation routing',
          'White-label for OEMs and retailers',
        ]}
        note="Direct subscription, private deployment inside an OEM or retailer, or white-labelled under a partner's brand."
        heroImg="/assets/triage-home.png"
        detailImg="/assets/triage-rive.png"
        navigate={navigate}
      />

      {/* In development card — no screenshots, single column */}
      <section
        id="in-development"
        className="py-20 md:py-28 border-t border-rule scroll-mt-24"
      >
        <Container>
          <div className="grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 md:col-span-5">
              <Eyebrow className="mb-5">IV · IN DEVELOPMENT</Eyebrow>
              <h2 className="display text-[32px] md:text-[48px] leading-[1.02]">
                In development
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7">
              <p className="body-lead max-w-xl">
                We are building more systems across data quality, operational review,
                ESG/regulatory data, and commercial workflow automation. If your problem
                lives in data and current tools are too noisy, start a conversation.
              </p>
              <div className="mt-10 border border-dashed border-ruleStrong p-8 md:p-10 grid grid-cols-2 gap-6">
                {[
                  'Data quality',
                  'Operational review',
                  'ESG / regulatory data',
                  'Commercial workflow automation',
                ].map((x) => (
                  <div key={x} className="flex items-baseline gap-3">
                    <span className="spec text-muted">—</span>
                    <span className="text-[15px] md:text-[16px]">{x}</span>
                  </div>
                ))}
              </div>
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
