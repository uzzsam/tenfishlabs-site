// Per-route metadata. Client-side head updates for SPA routing.
//
// Crawlers that execute JS (Google, Bing) will pick these up.
// OG/social scrapers that don't execute JS fall back to the defaults baked
// into index.html. When a custom domain is wired, update the siteUrl default
// below and the canonical in public/sitemap.xml.

const DEFAULT_TITLE = 'Ten Fish Labs';
const DEFAULT_DESCRIPTION =
  'Ten Fish Labs builds narrow AI-assisted commercial systems for sensitive operational review work inside a client-controlled data boundary.';

export const SITE_NAME = 'Ten Fish Labs';

const META = {
  '/': {
    title: 'Ten Fish Labs — Operational review systems for sensitive data',
    description:
      'Narrow AI-assisted systems for data defects, structured review workflows, and warranty claim triage — built around evidence, rules, routing, and client-controlled data.',
  },
  '/products': {
    title: 'Products — Ten Fish Labs operational review systems',
    description:
      'Schaaq, LNYRD, and Warranty Triage turn sensitive data, repeated review work, and manual routing into evidence-backed commercial systems.',
  },
  '/method': {
    title: 'Method — Review engines, not chatbots | Ten Fish Labs',
    description:
      'How Ten Fish Labs builds narrow review engines around inputs, rules, evidence, routing, human judgement, and client-controlled data boundaries.',
  },
  '/team': {
    title: 'Team — Ten Fish Labs',
    description:
      'A small senior team in Perth building commercial systems for sensitive data, operational review, governance, and evidence-backed decision workflows.',
  },
  '/contact': {
    title: 'Contact — Map a review workflow | Ten Fish Labs',
    description:
      'Tell Ten Fish Labs what is being reviewed, what data is involved, and what decision needs a clearer evidence record.',
  },
};

const PRODUCT_META = {
  schaaq: {
    title:
      'Schaaq — Data defect review engine | Ten Fish Labs',
    description:
      'Schaaq reviews operational and financial data for defects, ranks commercial impact, and produces evidence-backed remediation records.',
  },
  lnyrd: {
    title:
      'LNYRD — Structured review and decision engine | Ten Fish Labs',
    description:
      'LNYRD turns candidate, submission, and option reviews into structured decisions with criteria, reviewer evidence, approvals, and decision records.',
  },
  'warranty-triage': {
    title:
      'Warranty Triage — Claim triage and evidence routing | Ten Fish Labs',
    description:
      'Warranty Triage intakes, classifies, evidence-checks, routes, and reports warranty claims while keeping sensitive claim data inside the client boundary.',
  },
};

function setTagByAttr(attr, attrValue, content) {
  if (typeof document === 'undefined') return;
  let tag = document.head.querySelector(`meta[${attr}="${attrValue}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(href) {
  if (typeof document === 'undefined') return;
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function entryForPath(path) {
  if (META[path]) return META[path];
  if (path.startsWith('/products/')) {
    const slug = path.slice('/products/'.length).replace(/\/+$/, '');
    if (PRODUCT_META[slug]) return PRODUCT_META[slug];
    return META['/products'];
  }
  return { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION };
}

export function applyMeta(path) {
  const entry = entryForPath(path);
  const title = entry.title || DEFAULT_TITLE;
  const description = entry.description || DEFAULT_DESCRIPTION;

  if (typeof document !== 'undefined') {
    document.title = title;
  }

  const url =
    typeof window !== 'undefined' && window.location
      ? window.location.origin + path
      : path;

  setTagByAttr('name', 'description', description);
  setTagByAttr('property', 'og:site_name', SITE_NAME);
  setTagByAttr('property', 'og:title', title);
  setTagByAttr('property', 'og:description', description);
  setTagByAttr('property', 'og:url', url);
  setTagByAttr('property', 'og:type', 'website');
  setTagByAttr('name', 'twitter:card', 'summary_large_image');
  setTagByAttr('name', 'twitter:title', title);
  setTagByAttr('name', 'twitter:description', description);
  setCanonical(url);
}
