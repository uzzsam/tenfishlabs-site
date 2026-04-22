import { handleLinkClick, buildHref } from '../lib/router.js';
import { trackEvent, EVENTS } from '../lib/events.js';

export const Eyebrow = ({ children, className = '', muted = false }) => (
  <div className={`${muted ? 'eyebrow-muted' : 'eyebrow'} ${className}`}>{children}</div>
);

export const Rule = ({ className = '' }) => <div className={`hairline ${className}`}></div>;

export const Container = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16 ${className}`}>
    {children}
  </div>
);

export const TFLMark = ({ size = 18, fill = '#111' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    {[0, 1, 2, 3, 4].map((c) =>
      [0, 1].map((r) => (
        <circle key={`${c}-${r}`} cx={3 + c * 3.5} cy={5 + r * 9} r="1.3" fill={fill} />
      ))
    )}
  </svg>
);

export const RouterLink = ({
  to,
  hash,
  query,
  navigate,
  className = '',
  children,
  onClick,
  ...rest
}) => {
  const href = buildHref(to, { hash, query });
  const clickHandler = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;
    handleLinkClick(navigate, to, { hash, query })(e);
  };
  return (
    <a href={href} onClick={clickHandler} className={className} {...rest}>
      {children}
    </a>
  );
};

export const NavLink = ({ to, active, navigate, children }) => (
  <RouterLink
    to={to}
    navigate={navigate}
    className={`spec text-[11px] transition-colors ${
      active ? 'text-ink' : 'text-muted hover:text-ink'
    }`}
  >
    {children}
  </RouterLink>
);

export const GhostLink = ({
  to,
  hash,
  query,
  navigate,
  onDark = false,
  className = '',
  children,
  onClick,
}) => (
  <RouterLink
    to={to}
    hash={hash}
    query={query}
    navigate={navigate}
    onClick={onClick}
    className={`btn-ghost ${onDark ? 'on-dark' : ''} ${className}`}
  >
    {children}
  </RouterLink>
);

export const SolidLink = ({
  to,
  hash,
  query,
  navigate,
  className = '',
  children,
  onClick,
}) => (
  <RouterLink
    to={to}
    hash={hash}
    query={query}
    navigate={navigate}
    onClick={onClick}
    className={`btn-solid ${className}`}
  >
    {children}
  </RouterLink>
);

const ctaClickHandler = (productSlug, source) => () => {
  trackEvent(EVENTS.CTA_CLICK, {
    product: productSlug || undefined,
    source: source || 'primary-cta',
    href: '/contact',
  });
};

export const PrimaryCTA = ({ navigate, productSlug, source, className = '' }) => (
  <SolidLink
    to="/contact"
    navigate={navigate}
    query={productSlug ? { product: productSlug } : undefined}
    className={className}
    onClick={ctaClickHandler(productSlug, source)}
  >
    Start a conversation <span aria-hidden>→</span>
  </SolidLink>
);

export const PrimaryCTAGhost = ({
  navigate,
  productSlug,
  source,
  onDark = false,
  className = '',
}) => (
  <GhostLink
    to="/contact"
    navigate={navigate}
    query={productSlug ? { product: productSlug } : undefined}
    onDark={onDark}
    className={className}
    onClick={ctaClickHandler(productSlug, source)}
  >
    Start a conversation <span aria-hidden>→</span>
  </GhostLink>
);

export const PageIntro = ({ eyebrow, title, intro }) => (
  <div className="max-w-4xl">
    {eyebrow && <Eyebrow className="mb-8">{eyebrow}</Eyebrow>}
    <h1 className="display text-[40px] md:text-[64px] lg:text-[76px] text-ink">{title}</h1>
    {intro && (
      <p className="mt-8 body-lead max-w-2xl text-[15px] md:text-[16px]">{intro}</p>
    )}
  </div>
);

export const SectionHeader = ({ eyebrow, title, intro, center = false }) => (
  <div className={`${center ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
    {eyebrow && <Eyebrow className="mb-6">{eyebrow}</Eyebrow>}
    <h2 className="display text-[32px] md:text-[48px] lg:text-[56px] text-ink leading-[1.05]">
      {title}
    </h2>
    {intro && <p className="mt-6 body-lead text-[15px] md:text-[16px]">{intro}</p>}
  </div>
);
