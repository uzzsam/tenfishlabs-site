import { useState } from 'react';
import {
  Container,
  NavLink,
  TFLMark,
  PrimaryCTA,
  RouterLink,
} from './primitives.jsx';

const NAV_ITEMS = [
  { to: '/products', label: 'Products' },
  { to: '/method', label: 'Method' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav({ path, navigate }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-page/95 backdrop-blur-sm border-b border-rule">
      <Container className="grid grid-cols-2 md:grid-cols-3 items-center h-16">
        <RouterLink
          to="/"
          navigate={navigate}
          className="flex items-center gap-3 justify-self-start"
        >
          <TFLMark />
          <span className="text-[15px] tracking-[-0.01em] font-medium">TEN FISH LABS</span>
        </RouterLink>

        <nav className="hidden md:flex items-center justify-center gap-10">
          {NAV_ITEMS.slice(0, 3).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              active={path === item.to || path.startsWith(item.to + '/')}
              navigate={navigate}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex justify-self-end">
          <PrimaryCTA navigate={navigate} />
        </div>

        <button
          className="md:hidden spec text-[11px] justify-self-end"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          {open ? 'CLOSE' : 'MENU'}
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-rule bg-page">
          <Container className="py-5 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                active={path === item.to}
                navigate={(p, opts) => {
                  navigate(p, opts);
                  setOpen(false);
                }}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2">
              <PrimaryCTA
                navigate={(p, opts) => {
                  navigate(p, opts);
                  setOpen(false);
                }}
              />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
