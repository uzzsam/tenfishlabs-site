import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import MethodPage from './pages/MethodPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { useRouter } from './lib/router.js';

const TITLES = {
  '/': 'Ten Fish Labs — Software for operational review work',
  '/products': 'Products — Ten Fish Labs',
  '/method': 'Method — Ten Fish Labs',
  '/team': 'Team — Ten Fish Labs',
  '/contact': 'Contact — Ten Fish Labs',
};

export default function App() {
  const { path, hash, navigate } = useRouter();

  useEffect(() => {
    document.title = TITLES[path] || 'Ten Fish Labs';
  }, [path]);

  let page = null;
  if (path === '/') page = <HomePage navigate={navigate} />;
  else if (path === '/products') page = <ProductsPage navigate={navigate} hash={hash} />;
  else if (path === '/method') page = <MethodPage navigate={navigate} />;
  else if (path === '/team') page = <TeamPage navigate={navigate} />;
  else if (path === '/contact') page = <ContactPage navigate={navigate} />;
  else page = <HomePage navigate={navigate} />;

  return (
    <div data-path={path} className="min-h-screen flex flex-col">
      <Nav path={path} navigate={navigate} />
      <div className="flex-1">{page}</div>
      <Footer navigate={navigate} />
    </div>
  );
}
