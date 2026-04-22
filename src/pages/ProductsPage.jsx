import { useEffect } from 'react';
import {
  Container,
  Eyebrow,
  CenteredIntro,
  FullBleedBand,
  GhostBtn,
  SolidBtn,
} from '../components/primitives.jsx';
import { ProductShot } from '../components/visuals.jsx';

const ProductDetail = ({
  id,
  number,
  name,
  band,
  bandCaption,
  bandTone,
  headline,
  lead,
  uses,
  note,
  shot1,
  shot2,
  shot3,
  go,
}) => (
  <div id={id}>
    <FullBleedBand tone={bandTone} title={band} caption={bandCaption}>
      {id === 'schaaq' && (
        <img
          src="/assets/schaaq.png"
          alt={name}
          className="w-full h-full"
          style={{ objectFit: 'cover', objectPosition: 'top', opacity: 0.95 }}
        />
      )}
      {id === 'lnyrd' && (
        <>
          <img
            src="/assets/lnyrd-dashboard.png"
            alt={name}
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
        </>
      )}
      {id === 'warranty' && (
        <>
          <img
            src="/assets/triage-home.png"
            alt={name}
            className="w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'top', opacity: 0.55 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(270deg, #0A0A0A 0%, rgba(10,10,10,0.2) 50%, rgba(10,10,10,0.5) 100%)',
            }}
          />
        </>
      )}
    </FullBleedBand>

    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 md:col-span-5">
            <Eyebrow className="mb-5">
              {number} · {name.toUpperCase()}
            </Eyebrow>
            <h2 className="display text-[36px] md:text-[52px] leading-[1.05]">{headline}</h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 pt-2">
            <p className="body-lead">{lead}</p>
            {note && <p className="body-muted mt-5 italic">{note}</p>}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-12">
            <div className="aspect-[16/8] overflow-hidden">{shot1}</div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="aspect-[4/3] overflow-hidden">{shot2}</div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="aspect-[4/3] overflow-hidden">{shot3}</div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4">
            <Eyebrow className="mb-5">USES</Eyebrow>
            <h3 className="display text-[28px] md:text-[36px]">What {name} is used for.</h3>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <ul>
              {uses.map((u, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-6 py-4 border-t border-rule last:border-b"
                >
                  <span className="spec text-muted w-8 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[17px] md:text-[19px] leading-[1.4]">{u}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <GhostBtn onClick={() => go('contact')}>Enquire about {name}</GhostBtn>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </div>
);

export default function ProductsPage({ go, anchor }) {
  useEffect(() => {
    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [anchor]);

  return (
    <main className="page-in">
      <section className="pt-24 pb-20 md:pt-36 md:pb-28">
        <Container>
          <CenteredIntro
            eyebrow="PRODUCTS"
            title={
              <>
                Three products.
                <br />
                One discipline.
              </>
            }
            intro="Each Ten Fish Labs product is a dedicated review workflow for a specific operational problem. Different domains, same approach: structured evidence, encoded rules, and human judgement on the decisions that matter."
          />
        </Container>
      </section>

      <ProductDetail
        id="schaaq"
        number="I"
        name="Schaaq"
        band="SCHAAQ"
        bandCaption="Data architecture review."
        bandTone="tan"
        headline="Data architecture assessment software."
        lead="Schaaq reviews a data architecture against the operational load it has to carry. It identifies structural risk — missing indexes, denormalisation debt, referential gaps, orphan tables — and assembles a single diagnostic report a team can share."
        uses={[
          'M&A data due diligence',
          'Pre-migration architecture audit',
          'Schema review for operational load',
          'Reporting and BI readiness',
          'White-label diagnostic product',
        ]}
        note="Available as a hosted subscription, a private deployment, or white-labelled inside a consultancy's own diagnostic product."
        shot1={
          <ProductShot src="/assets/schaaq.png" alt="Schaaq workspace" tone="dark" objectPosition="top" />
        }
        shot2={
          <ProductShot
            src="/assets/schaaq-ma.png"
            alt="Schaaq M&A diagnostic"
            tone="dark"
            objectPosition="top"
          />
        }
        shot3={
          <ProductShot src="/assets/schaaq-report.png" alt="Schaaq report" tone="dark" objectPosition="top" />
        }
        go={go}
      />

      <ProductDetail
        id="lnyrd"
        number="II"
        name="LNYRD"
        band="LNYRD"
        bandCaption="Defensible candidate review for TA teams."
        bandTone="dark"
        headline="Candidate review. Structured. Defensible."
        lead="LNYRD structures the review of every candidate against every requirement for a role. It pulls signal from resumes and notes, maps it to the role's actual requirements, and leaves a record of why each candidate advanced — or didn't."
        uses={[
          'Structured screening for open roles',
          'Requirement-by-requirement evaluation',
          'Evidence-linked hiring recommendations',
          'Audit trail for every decision',
          'White-label for agencies',
        ]}
        note="Used by TA teams that need a defensible record of how every candidate was evaluated, not a one-shot AI recommendation."
        shot1={
          <ProductShot
            src="/assets/lnyrd-dashboard.png"
            alt="LNYRD dashboard"
            tone="light"
            objectPosition="top"
          />
        }
        shot2={
          <ProductShot
            src="/assets/lnyrd-candidates.png"
            alt="LNYRD candidates"
            tone="light"
            objectPosition="top"
          />
        }
        shot3={
          <ProductShot
            src="/assets/lnyrd-reviews.png"
            alt="LNYRD reviews"
            tone="light"
            objectPosition="top"
          />
        }
        go={go}
      />

      <ProductDetail
        id="warranty"
        number="III"
        name="Warranty Triage"
        band="Triage"
        bandCaption="Warranty and aftersales claim review."
        bandTone="dark"
        headline="Warranty claim review that scales."
        lead="Warranty Triage structures claim intake, identifies missing evidence, categorises claims against policy, and routes each case to the right reviewer. It turns a stream of warranty claims into an ordered queue of decisions."
        uses={[
          'Warranty claim intake',
          'Policy categorisation',
          'Missing-evidence detection',
          'Escalation routing',
          'White-label for OEMs and retailers',
        ]}
        note="Available as a direct subscription, a private deployment inside an OEM or retailer, or white-labelled under a partner's brand."
        shot1={
          <ProductShot src="/assets/triage-home.png" alt="Triage home" tone="teal" objectPosition="top" />
        }
        shot2={
          <ProductShot src="/assets/triage-rive.png" alt="Start review" tone="teal" objectPosition="top" />
        }
        shot3={
          <ProductShot src="/assets/triage-home.png" alt="Triage overview" tone="teal" objectPosition="top" />
        }
        go={go}
      />

      <section className="py-24 md:py-32">
        <Container>
          <CenteredIntro
            eyebrow="NEXT"
            title={<>Discuss a deployment</>}
            intro="For subscriptions, private deployments, licensing, or a white-label discussion, contact the Ten Fish Labs team."
          />
          <div className="text-center mt-10">
            <SolidBtn onClick={() => go('contact')}>Contact Ten Fish Labs</SolidBtn>
          </div>
        </Container>
      </section>
    </main>
  );
}
