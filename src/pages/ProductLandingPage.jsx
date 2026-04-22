import { useEffect } from 'react';
import {
  Container,
  Eyebrow,
  PrimaryCTA,
  PrimaryCTAGhost,
  RouterLink,
} from '../components/primitives.jsx';
import HeroMedia from '../components/HeroMedia.jsx';
import DataBoundaryDiagram from '../components/DataBoundaryDiagram.jsx';
import { PRODUCTS } from '../data/products.js';
import { trackEvent, EVENTS } from '../lib/events.js';

const ROMAN = { schaaq: 'I', lnyrd: 'II', 'warranty-triage': 'III' };

const CommercialSummary = ({ summary }) => {
  if (!summary) return null;
  const items = [
    ['Built for', summary.builtFor],
    ['Works with', summary.worksWith],
    ['Improves', summary.improves],
    ['Customisable', summary.customisable],
  ].filter(([, v]) => v);
  return (
    <section className="border-b border-rule bg-page">
      <Container className="py-10 md:py-12">
        <div className="grid grid-cols-12 gap-x-10 gap-y-8">
          {items.map(([label, value]) => (
            <div
              key={label}
              className="col-span-12 md:col-span-6 lg:col-span-3 border-t border-ink pt-4"
            >
              <div className="eyebrow mb-3">{label.toUpperCase()}</div>
              <p className="text-[14px] md:text-[15px] leading-[1.55]">{value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const SiblingNav = ({ currentSlug, navigate }) => (
  <nav className="flex items-center gap-6 flex-wrap spec text-muted">
    {PRODUCTS.filter((p) => p.slug !== currentSlug).map((p) => (
      <RouterLink
        key={p.slug}
        to={`/products/${p.slug}`}
        navigate={navigate}
        className="hover:text-ink"
      >
        {p.title} →
      </RouterLink>
    ))}
    <RouterLink
      to="/products"
      navigate={navigate}
      className="hover:text-ink border-l border-rule pl-6"
    >
      All products
    </RouterLink>
  </nav>
);

const List = ({ items }) => (
  <ul>
    {items.map((u, i) => (
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
);

export default function ProductLandingPage({ product, navigate }) {
  const numeral = ROMAN[product.slug] || '';

  useEffect(() => {
    trackEvent(EVENTS.PRODUCT_PAGE_VIEW, { product: product.slug });
  }, [product.slug]);

  return (
    <main className="page-in">
      {/* 1. Hero */}
      <section className="relative border-b border-rule">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12 md:col-span-7 bg-page">
            <Container className="py-20 md:py-28 lg:py-32">
              <Eyebrow className="mb-6">
                {numeral} · {product.title.toUpperCase()}
              </Eyebrow>
              <h1 className="display text-[40px] md:text-[60px] lg:text-[72px] leading-[0.98] tracking-[-0.03em]">
                {product.headline}
              </h1>
              <p className="mt-8 body-lead max-w-xl text-[16px] md:text-[17px]">
                {product.summary}
              </p>
              <div className="mt-10 flex items-center gap-4 flex-wrap">
                <PrimaryCTA navigate={navigate} productSlug={product.ctaSource} />
              </div>
              <div className="mt-10 pt-6 border-t border-rule">
                <SiblingNav currentSlug={product.slug} navigate={navigate} />
              </div>
            </Container>
          </div>
          <div className="col-span-12 md:col-span-5 bg-night">
            <HeroMedia
              video={product.media}
              poster={product.poster}
              fallbackImg={product.fallbackImg}
            />
          </div>
        </div>
      </section>

      {/* 1b. Commercial summary — compact */}
      <CommercialSummary summary={product.commercialSummary} />

      {/* 2. What it does */}
      <section className="py-20 md:py-28 border-b border-rule">
        <Container>
          <div className="grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 md:col-span-5">
              <Eyebrow className="mb-5">WHAT IT DOES</Eyebrow>
              <h2 className="display text-[28px] md:text-[36px] leading-[1.05]">
                The work {product.title} takes off the team.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7">
              <List items={product.whatItDoes} />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Who it is for */}
      <section className="py-20 md:py-28 border-b border-rule">
        <Container>
          <div className="grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 md:col-span-5">
              <Eyebrow className="mb-5">WHO IT IS FOR</Eyebrow>
              <h2 className="display text-[28px] md:text-[36px] leading-[1.05]">
                Built for the teams carrying this weight today.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {product.whoItIsFor.map((w) => (
                  <div
                    key={w}
                    className="flex items-baseline gap-3 border-t border-rule pt-3"
                  >
                    <span className="spec text-muted">—</span>
                    <span className="text-[15px] md:text-[16px]">{w}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. What we customise */}
      <section className="py-20 md:py-28 border-b border-rule bg-panel">
        <Container>
          <div className="grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 md:col-span-5">
              <Eyebrow className="mb-5">WHAT WE CUSTOMISE</Eyebrow>
              <h2 className="display text-[28px] md:text-[36px] leading-[1.05]">
                {product.title} is shaped to the commercial context.
              </h2>
              <p className="body-lead mt-5 max-w-md">
                The system is deployed with the client’s rules, terminology, and
                integrations baked in — not as a generic tool the team has to bend to.
              </p>
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
                {product.customisation.map((c) => (
                  <div
                    key={c}
                    className="border-t border-ruleStrong pt-3 text-[15px] md:text-[16px]"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. How it works */}
      <section className="py-20 md:py-28 border-b border-rule">
        <Container>
          <div className="grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 md:col-span-4">
              <Eyebrow className="mb-5">HOW IT WORKS</Eyebrow>
              <h2 className="display text-[28px] md:text-[36px] leading-[1.05]">
                Five stages, one record.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-12 gap-6">
                {product.workflow.map(([n, t, d]) => (
                  <div
                    key={n}
                    className="col-span-12 md:col-span-6 border-t border-ink pt-5"
                  >
                    <div className="eyebrow mb-3">STEP · {n}</div>
                    <div className="display text-[20px] md:text-[22px] mb-2">{t}</div>
                    <p className="body-muted max-w-sm">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Data boundary */}
      <section className="py-20 md:py-28 border-b border-rule">
        <Container>
          <div className="grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 md:col-span-5">
              <Eyebrow className="mb-5">DATA BOUNDARY</Eyebrow>
              <h2 className="display text-[28px] md:text-[36px] leading-[1.05]">
                Your data stays on your side of the line.
              </h2>
              <p className="body-lead mt-5 max-w-md">{product.dataBoundaryNote}</p>
              <div className="mt-6">
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

      {/* 7. Outputs */}
      <section className="py-20 md:py-28 border-b border-rule">
        <Container>
          <div className="grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 md:col-span-5">
              <Eyebrow className="mb-5">OUTPUTS</Eyebrow>
              <h2 className="display text-[28px] md:text-[36px] leading-[1.05]">
                What {product.title} leaves with the team.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7">
              <List items={product.outputs} />
            </div>
          </div>
        </Container>
      </section>

      {/* 8. CTA */}
      <section className="py-24 md:py-32 bg-night text-white">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow className="mb-8 text-white">NEXT</Eyebrow>
            <h2 className="display text-[32px] md:text-[52px] leading-[1.02]">
              Bring a specific {product.title} use-case and we’ll map it with you.
            </h2>
            <div className="mt-10">
              <PrimaryCTAGhost
                navigate={navigate}
                productSlug={product.ctaSource}
                onDark
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
