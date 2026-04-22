// Lightweight event hooks. No third-party analytics package — yet.
//
// Behaviour:
//   - No-op in production unless VITE_DEBUG_EVENTS is set to a truthy value.
//   - console.log in dev OR when VITE_DEBUG_EVENTS is on.
//
// Never log form message contents. Payloads are restricted to:
//   event name, product slug, route, timestamp, plus a small allow-list of
//   structural fields (status, errorCode, href). If a caller passes something
//   that smells like a message body, it is dropped here defensively.

const SAFE_KEYS = new Set([
  'product',
  'productSlug',
  'status',
  'errorCode',
  'href',
  'source',
  'location',
]);

const SCRUB_KEYS = new Set([
  'problem',
  'data',
  'email',
  'message',
  'name',
  'company',
  'phone',
  'body',
  'content',
  'notes',
]);

function isDebug() {
  const env = import.meta.env;
  if (env.DEV) return true;
  const flag = env.VITE_DEBUG_EVENTS;
  return flag === 'true' || flag === '1' || flag === true;
}

function filterPayload(payload) {
  const out = {};
  if (!payload || typeof payload !== 'object') return out;
  for (const [k, v] of Object.entries(payload)) {
    if (SCRUB_KEYS.has(k)) continue;
    if (!SAFE_KEYS.has(k)) continue;
    if (v === undefined || v === null || v === '') continue;
    out[k] = v;
  }
  return out;
}

export function trackEvent(name, payload = {}) {
  if (!isDebug()) return;
  const route =
    typeof window !== 'undefined' && window.location
      ? window.location.pathname
      : '';
  const data = {
    event: name,
    timestamp: new Date().toISOString(),
    route,
    ...filterPayload(payload),
  };
  // eslint-disable-next-line no-console
  console.log('[event]', data);
}

export const EVENTS = {
  PRODUCT_PAGE_VIEW: 'product_page_view',
  CONTACT_CONTEXT_LOADED: 'contact_context_loaded',
  CONTACT_SUBMIT_ATTEMPT: 'contact_form_submit_attempt',
  CONTACT_SUBMIT_SUCCESS: 'contact_form_submit_success',
  CONTACT_SUBMIT_ERROR: 'contact_form_submit_error',
  CTA_CLICK: 'cta_click',
};
