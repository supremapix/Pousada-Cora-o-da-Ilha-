
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShortVideoSection from './components/ShortVideoSection';
import About from './components/About';
import Experience from './components/Experience';
import IslandHistory from './components/IslandHistory';
import VideoPresentation from './components/VideoPresentation';
import IslandGuide from './components/IslandGuide';
import Accommodations from './components/Accommodations';
import Testimonials from './components/Testimonials';
import Policies from './components/Policies';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import QuemSomos from './components/pages/QuemSomos';
import Contato from './components/pages/Contato';
import PoliticaPrivacidade from './components/pages/PoliticaPrivacidade';
import PoliticaDevolucao from './components/pages/PoliticaDevolucao';
import MapaSite from './components/pages/MapaSite';
import GuiaIlha from './components/pages/GuiaIlha';

function getPage(): string {
  return window.location.pathname.replace(/\/$/, '') || '/';
}

const HomePage: React.FC = () => (
  <main className="flex-grow">
    <Hero />
    <ShortVideoSection />
    <About />
    <VideoPresentation />
    <Experience />
    <IslandHistory />
    <IslandGuide />
    <Accommodations />
    <Testimonials />
    <Policies />
    <BookingForm />
  </main>
);

const App: React.FC = () => {
  const [page, setPage] = useState(getPage());

  useEffect(() => {
    const onPopState = () => setPage(getPage());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const renderPage = () => {
    switch (page) {
      case '/quem-somos': return <QuemSomos />;
      case '/contato': return <Contato />;
      case '/politica-privacidade': return <PoliticaPrivacidade />;
      case '/politica-devolucao': return <PoliticaDevolucao />;
      case '/mapa-do-site': return <MapaSite />;
      case '/guia-ilha-do-mel': return <GuiaIlha onNavigate={setPage} />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={page} onNavigate={setPage} />
      {renderPage()}
      <Footer onNavigate={setPage} />
      <FloatingWidgets />
    </div>
  );
};

export default App;
