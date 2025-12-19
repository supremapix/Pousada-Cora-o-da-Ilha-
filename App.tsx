
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShortVideoSection from './components/ShortVideoSection';
import About from './components/About';
import Experience from './components/Experience';
import IslandHistory from './components/IslandHistory'; // Importação adicionada
import VideoPresentation from './components/VideoPresentation';
import IslandGuide from './components/IslandGuide';
import Accommodations from './components/Accommodations';
import Testimonials from './components/Testimonials';
import Policies from './components/Policies';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ShortVideoSection />
        <About />
        <VideoPresentation />
        <Experience />
        <IslandHistory /> {/* Nova seção inserida aqui */}
        <IslandGuide />
        <Accommodations />
        <Testimonials />
        <Policies />
        <BookingForm />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
};

export default App;
