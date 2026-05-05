import {
  Container,
  Eyebrow,
  PageIntro,
  RouterLink,
} from '../components/primitives.jsx';
import { PRODUCTS } from '../data/products.js';

const ROMAN = ['I', 'II', 'III', 'IV', 'V'];

export default function ProductsPage({ navigate }) {
  return (
    <main className="page-in">
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <PageIntro
            eyebrow="PRODUCTS"
            title={<>A growing portfolio of commercial systems.</>}
            intro="Three are live. Two are in build or discovery. Each system starts with a specific commercial problem and is built so the useful parts can be adapted for similar problems later."
          />
        </Container>
      </section>

      <section className="pb-24 md:pb-32 border-t border-rule">
        <Container className="pt-16 md:pt-20">
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            {PRODUCTS.map((p, i) => (
              <RouterLink
                key={p.slug}
                to={`/products/${p.slug}`}
                navigate={navigate}
                className="col-span-12 md:col-span-6 lg:col-span-4 group block border border-rule hover:border-ink transition-colors"
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
                  <div className="display text-[24px] mb-3">{p.headline}</div>
                  <p className="body-muted">{p.summary}</p>
                  <div className="mt-6 spec text-ink">Open {p.title} →</div>
                </div>
              </RouterLink>
            ))}

          </div>

          <div className="mt-20 md:mt-24 border-t border-rule pt-16 md:pt-20 grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-5">
              <Eyebrow className="mb-6">HOW WE SELL</Eyebrow>
              <h2 className="display text-[28px] md:text-[36px] leading-[1.05]">
                Three deployment shapes.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7 space-y-6 body-lead">
              <p>
                Direct subscription for teams that want a Ten Fish Labs system as a
                hosted product.
              </p>
              <p>
                Private deployment for organisations that need the system running
                inside their own environment and data boundary.
              </p>
              <p>
                White-label for partners who want to sell the system under their own
                brand, with the underlying IP retained by Ten Fish Labs.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
