import { useState } from 'react';
import { Container, NavLink, TFLMark } from './primitives.jsx';

export default function Nav({ route, go }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-page/95 backdrop-blur-sm border-b border-rule">
      <Container className="grid grid-cols-3 items-center h-16">
        <button
          onClick={() => go('home')}
          className="flex items-center gap-3 justify-self-start group"
        >
          <TFLMark />
          <span className="text-[15px] tracking-[-0.01em] font-medium">TEN FISH LABS</span>
        </button>
        <nav className="hidden md:flex items-center justify-center gap-10">
          <NavLink active={route === 'products'} onClick={() => go('products')}>
            Products
          </NavLink>
          <NavLink active={route === 'how'} onClick={() => go('how')}>
            How we build
          </NavLink>
          <NavLink active={route === 'about'} onClick={() => go('about')}>
            About
          </NavLink>
        </nav>
        <div className="hidden md:flex justify-self-end">
          <NavLink active={route === 'contact'} onClick={() => go('contact')}>
            Contact →
          </NavLink>
        </div>
        <button
          className="md:hidden spec text-[11px] justify-self-end col-start-3"
          onClick={() => setOpen(!open)}
        >
          {open ? 'CLOSE' : 'MENU'}
        </button>
      </Container>
      {open && (
        <div className="md:hidden border-t border-rule bg-page">
          <Container className="py-5 flex flex-col gap-4">
            <NavLink
              onClick={() => {
                go('products');
                setOpen(false);
              }}
            >
              Products
            </NavLink>
            <NavLink
              onClick={() => {
                go('how');
                setOpen(false);
              }}
            >
              How we build
            </NavLink>
            <NavLink
              onClick={() => {
                go('about');
                setOpen(false);
              }}
            >
              About
            </NavLink>
            <NavLink
              onClick={() => {
                go('contact');
                setOpen(false);
              }}
            >
              Contact
            </NavLink>
          </Container>
        </div>
      )}
    </header>
  );
}
