import { useEffect, useState, useCallback } from 'react';

export const ROUTES = ['/', '/products', '/method', '/team', '/contact'];

function parseQuery(search) {
  const out = {};
  const sp = new URLSearchParams(search);
  for (const [k, v] of sp.entries()) out[k] = v;
  return out;
}

function serialiseQuery(query) {
  if (!query) return '';
  const sp = new URLSearchParams();
  for (const [k, v] of Object.entries(query)) {
    if (v !== undefined && v !== null && v !== '') sp.set(k, String(v));
  }
  const s = sp.toString();
  return s ? `?${s}` : '';
}

function currentLocation() {
  return {
    path: window.location.pathname,
    hash: window.location.hash.replace(/^#/, ''),
    query: parseQuery(window.location.search),
  };
}

export function useRouter() {
  const [loc, setLoc] = useState(currentLocation);

  useEffect(() => {
    const onPop = () => setLoc(currentLocation());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback(
    (path, { hash, query, replace = false, scroll = true } = {}) => {
      const search = serialiseQuery(query);
      const full = `${path}${search}${hash ? `#${hash}` : ''}`;
      const here =
        window.location.pathname +
        (window.location.search || '') +
        (window.location.hash || '');
      if (full !== here) {
        if (replace) window.history.replaceState({}, '', full);
        else window.history.pushState({}, '', full);
      }
      setLoc({ path, hash: hash || '', query: query || {} });
      if (hash) {
        requestAnimationFrame(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      } else if (scroll) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    },
    []
  );

  return { path: loc.path, hash: loc.hash, query: loc.query, navigate };
}

export function handleLinkClick(navigate, path, { hash, query } = {}) {
  return (e) => {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    )
      return;
    e.preventDefault();
    navigate(path, { hash, query });
  };
}

export function buildHref(path, { hash, query } = {}) {
  const search = serialiseQuery(query);
  return `${path}${search}${hash ? `#${hash}` : ''}`;
}
