import { useEffect, useRef } from 'react';

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js';

function ensureScript() {
  if (typeof document === 'undefined') return Promise.resolve(null);
  if (window.turnstile) return Promise.resolve(window.turnstile);

  let script = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
  if (!script) {
    script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }
  return new Promise((resolve) => {
    if (window.turnstile) return resolve(window.turnstile);
    script.addEventListener('load', () => resolve(window.turnstile || null), {
      once: true,
    });
    script.addEventListener('error', () => resolve(null), { once: true });
  });
}

export default function TurnstileWidget({ siteKey, onToken }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onTokenRef = useRef(onToken);

  // Keep latest onToken without re-registering widget.
  useEffect(() => {
    onTokenRef.current = onToken;
  }, [onToken]);

  useEffect(() => {
    if (!siteKey) return;
    let cancelled = false;

    ensureScript().then((turnstile) => {
      if (cancelled || !turnstile || !containerRef.current) return;
      if (widgetIdRef.current !== null) return;
      widgetIdRef.current = turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme: 'light',
        size: 'normal',
        callback: (token) => onTokenRef.current && onTokenRef.current(token),
        'error-callback': () =>
          onTokenRef.current && onTokenRef.current(''),
        'expired-callback': () =>
          onTokenRef.current && onTokenRef.current(''),
        'timeout-callback': () =>
          onTokenRef.current && onTokenRef.current(''),
      });
    });

    return () => {
      cancelled = true;
      if (widgetIdRef.current !== null && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // ignore
        }
      }
      widgetIdRef.current = null;
    };
  }, [siteKey]);

  if (!siteKey) return null;

  return (
    <div className="mt-6">
      <div className="spec text-muted mb-3">VERIFICATION</div>
      <div ref={containerRef} />
    </div>
  );
}
