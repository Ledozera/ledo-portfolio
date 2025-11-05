import React, { useEffect, useRef, useState } from 'react';
import { Code, Zap, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t('about.title')}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Avatar/Image */}
            <div className="relative">
              <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
                <img 
                  src="/perfil.JPEG"
                  alt="Eduardo Ledo"
                  className="relative w-full h-full object-cover rounded-full border-4 border-purple-500/30 shadow-lg"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.description')}
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20">
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <Code className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{t('about.development')}</h3>
                    <p className="text-gray-400">{t('about.development.desc')}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20">
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{t('about.automation')}</h3>
                    <p className="text-gray-400">{t('about.automation.desc')}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20">
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <Heart className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{t('about.passion')}</h3>
                    <p className="text-gray-400">{t('about.passion.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};