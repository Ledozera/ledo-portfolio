import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Greeting */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
            <span className="text-purple-400 font-medium text-lg">{t('hero.greeting')}</span>
          </div>

          {/* Name */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Eduardo Ledo
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300 mb-6">
            <span className="relative">
              {t('hero.role')}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-sm rounded-lg -z-10"></div>
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t('hero.description')}
          </p>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
          >
            <span className="relative z-10">{t('hero.cta')}</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </div>
    </section>
  );
};