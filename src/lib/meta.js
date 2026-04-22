// Per-route metadata. Client-side head updates for SPA routing.
//
// Crawlers that execute JS (Google, Bing) will pick these up.
// OG/social scrapers that don't execute JS fall back to the defaults baked
// into index.html. When a custom domain is wired, update the siteUrl default
// below and the canonical in public/sitemap.xml.

const DEFAULT_TITLE = 'Ten Fish Labs';
const DEFAULT_DESCRIPTION =
  'Ten Fish Labs builds purpose-specific commercial systems using AI methodologies and deep domain expertise, inside a client-controlled data boundary.';

export const SITE_NAME = 'Ten Fish Labs';

const META = {
  '/': {
    title: 'Ten Fish Labs — Commercial systems for sensitive data',
    description:
      'Purpose-specific commercial systems using AI methodologies and deep domain expertise, inside a client-controlled data boundary. Never exposes sensitive data to third-party LLMs.',
  },
  '/products': {
    title: 'Products — Ten Fish Labs',
    description:
      'A growing portfolio of commercial systems. Schaaq for data defects, LNYRD for structured candidate review, Warranty Triage for claim routing — plus new systems in development.',
  },
  '/method': {
    title: 'Method — Narrow engines inside a client-controlled boundary | Ten Fish Labs',
    description:
      'How Ten Fish Labs builds commercial systems around the review work that matters — without exposing sensitive data to third-party LLMs. Evidence, rules, and a record for every decision.',
  },
  '/team': {
    title: 'Team — Ten Fish Labs',
    description:
      'A small senior team in Perth, Western Australia building commercial systems from product, data, design, governance, and domain expertise.',
  },
  '/contact': {
    title: 'Contact — Start a conversation | Ten Fish Labs',
    description:
      'Tell us what you are trying to measure or improve, and the shape of the data you are working with. Response within two business days.',
  },
};

const PRODUCT_META = {
  schaaq: {
    title:
      'Schaaq — Find the data defects costing the business money | Ten Fish Labs',
    description:
      'Schaaq scans operational and financial data, classifies defects, and turns data quality problems into commercial impact. Built for CFOs, CIOs, data governance, and audit teams.',
  },
  lnyrd: {
    title:
      'LNYRD — Structured candidate and review workflows | Ten Fish Labs',
    description:
      'LNYRD helps recruitment, HR, and assessment teams evaluate candidates and submissions against structured criteria, with an audit trail for every decision.',
  },
  'warranty-triage': {
    title:
      'Warranty Triage — Route warranty claims faster, with clearer evidence | Ten Fish Labs',
    description:
      'Warranty Triage helps manufacturers, retailers, service networks, and insurers intake, classify, route, and report warranty claims with consistent evidence and escalation control.',
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
