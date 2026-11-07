
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShortVideoSection from './components/ShortVideoSection';
import About from './components/About';
import Experience from './components/Experience';
import IslandHistory from './components/IslandHistory';
import VideoPresentation from './components/VideoPresentation';
import IslandGuide from './components/IslandGuide';
import TravelTips from './components/TravelTips';
import NotFound from './components/pages/NotFound';
import Accommodations from './components/Accommodations';
import Testimonials from './components/Testimonials';
import Policies from './components/Policies';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingActions';
import QuemSomos from './components/pages/QuemSomos';
import Contato from './components/pages/Contato';
import PoliticaPrivacidade from './components/pages/PoliticaPrivacidade';
import PoliticaDevolucao from './components/pages/PoliticaDevolucao';
import MapaSite from './components/pages/MapaSite';
import GuiaIlha from './components/pages/GuiaIlha';
import Blog from './components/pages/Blog';
import BlogPost from './components/pages/BlogPost';
import { getPostBySlug } from './data/blogPosts';
import { useSEO } from './utils/seo';
import { PAGE_SEO } from './utils/pageSeo';

function getPage(): string {
  return window.location.pathname.replace(/\/$/, '') || '/';
}

const HomePage: React.FC = () => {
  useSEO(PAGE_SEO.home);

  return (
    <main id="conteudo" tabIndex={-1} className="flex-grow">
      <Hero />
      <ShortVideoSection />
      <About />
      <VideoPresentation />
      <Experience />
      <IslandHistory />
      <IslandGuide />
      <TravelTips />
      <Accommodations />
      <Testimonials />
      <Policies />
      <BookingForm />
    </main>
  );
};

const App: React.FC<{ initialPath?: string }> = ({ initialPath }) => {
  const [page, setPage] = useState(() => initialPath ?? getPage());

  useEffect(() => {
    const onPopState = () => setPage(getPage());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const renderPage = () => {
    if (page === '/blog') return <Blog onNavigate={setPage} />;
    if (page.startsWith('/blog/')) {
      const slug = page.replace('/blog/', '');
      const post = getPostBySlug(slug);
      if (post) return <BlogPost post={post} onNavigate={setPage} />;
      return <NotFound />;
    }

    switch (page) {
      case '/quem-somos': return <QuemSomos />;
      case '/contato': return <Contato />;
      case '/politica-privacidade': return <PoliticaPrivacidade />;
      case '/politica-devolucao': return <PoliticaDevolucao />;
      case '/mapa-do-site': return <MapaSite />;
      case '/guia-ilha-do-mel': return <GuiaIlha onNavigate={setPage} />;
      case '/': return <HomePage />;
      default: return <NotFound />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Navbar currentPage={page} onNavigate={setPage} />
      {renderPage()}
      <Footer onNavigate={setPage} />
      <FloatingWidgets page={page} />
    </div>
  );
};

export default App;
