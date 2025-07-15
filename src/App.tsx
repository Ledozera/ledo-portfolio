import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useLanguage, LanguageProvider } from './contexts/LanguageContext';
import { ParticleBackground } from './components/ParticleBackground';

function AppContent() {
  const { isAnimating } = useLanguage();

  return (
    <>
      <Toaster />
      <div className={`min-h-screen bg-black text-white overflow-x-hidden ${isAnimating ? 'fade-out' : 'fade-in'}`}>
        <ParticleBackground />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-purple-400 text-xl font-semibold animate-pulse">
            Carregando...
          </div>
        </div>
      </div>
    );
  }

  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;