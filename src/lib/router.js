import { useEffect, useState, useCallback } from 'react';

export const ROUTES = ['/', '/products', '/method', '/team', '/contact'];

function currentLocation() {
  return {
    path: window.location.pathname,
    hash: window.location.hash.replace(/^#/, ''),
  };
}

export function useRouter() {
  const [loc, setLoc] = useState(currentLocation);

  useEffect(() => {
    const onPop = () => setLoc(currentLocation());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((path, { hash, replace = false } = {}) => {
    const full = hash ? `${path}#${hash}` : path;
    const here =
      window.location.pathname + (window.location.hash || '');
    if (full !== here) {
      if (replace) window.history.replaceState({}, '', full);
      else window.history.pushState({}, '', full);
    }
    setLoc({ path, hash: hash || '' });
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return { path: loc.path, hash: loc.hash, navigate };
}

export function handleLinkClick(navigate, path, hash) {
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
    navigate(path, { hash });
  };
}
