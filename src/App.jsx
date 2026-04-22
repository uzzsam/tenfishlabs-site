import { useState, useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import HowPage from './pages/HowPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const TITLES = {
  home: 'Ten Fish Labs — Software for operational review work',
  products: 'Products — Ten Fish Labs',
  how: 'How we build — Ten Fish Labs',
  about: 'About — Ten Fish Labs',
  contact: 'Contact — Ten Fish Labs',
};

export default function App() {
  const [route, setRoute] = useState(() => {
    try {
      return localStorage.getItem('tfl_route') || 'home';
    } catch {
      return 'home';
    }
  });
  const [focus, setFocus] = useState(null);

  const go = (r, f = null) => {
    setRoute(r);
    setFocus(f);
    try {
      localStorage.setItem('tfl_route', r);
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    document.title = TITLES[route] || 'Ten Fish Labs';
  }, [route]);

  let page = null;
  if (route === 'home') page = <HomePage go={go} />;
  else if (route === 'products') page = <ProductsPage go={go} anchor={focus} />;
  else if (route === 'how') page = <HowPage go={go} />;
  else if (route === 'about') page = <AboutPage go={go} />;
  else if (route === 'contact') page = <ContactPage go={go} />;

  return (
    <div data-screen-label={route} className="min-h-screen flex flex-col">
      <Nav route={route} go={go} />
      <div className="flex-1">{page}</div>
      <Footer go={go} />
    </div>
  );
}
