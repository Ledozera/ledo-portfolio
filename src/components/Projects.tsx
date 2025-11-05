import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Code, Zap, Globe, Database } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Projects: React.FC = () => {
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

  const projects = [
    {
      title: t('projects.sistema-financeiro.title'),
      description: t('projects.sistema-financeiro.description'),
      icon: <Database className="w-6 h-6" />,
      tech: ['Bubble', 'APIs', 'Dashboards'],
      gradient: 'from-purple-600 to-blue-600',
      link: 'https://financeiro-etel-89910.bubbleapps.io'
    },
    {
      title: t('projects.crm-imobiliario.title'),
      description: t('projects.crm-imobiliario.description'),
      icon: <Code className="w-6 h-6" />,
      tech: ['Bubble', 'CRM', 'Lead Management'],
      gradient: 'from-pink-600 to-purple-600',
      link: 'https://engifinance.app.br'
    },
    {
      title: t('projects.automacoes.title'),
      description: t('projects.automacoes.description'),
      icon: <Zap className="w-6 h-6" />,
      tech: ['N8N', 'Evolution API', 'Automations'],
      gradient: 'from-green-600 to-blue-600',
      link: '#'
<<<<<<< HEAD
    },
    {
      title: t('projects.anaprev.title'),
      description: t('projects.anaprev.description'),
      icon: <Database className="w-6 h-6" />,
      tech: ['Bubble', 'Javascript', 'Kanban', 'APIs'],
      gradient: 'from-cyan-600 to-teal-600',
      link: 'https://bubble.io/page?id=anaprev'
    },
    {
      title: t('projects.leadex.title'),
      description: t('projects.leadex.description'),
      icon: <Code className="w-6 h-6" />,
      tech: ['Bubble', 'CRM', 'In Development'],
      gradient: 'from-rose-600 to-fuchsia-600',
      link: 'https://bubble.io/page?id=leadex-15922'
=======
>>>>>>> 7c07e3348d05e36b7f319a15dd44e6b0154a5895
    }
  ];

  const websites = [
    {
      name: 'adnan.com.br',
      url: 'https://adnan.com.br',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      name: 'adnimobiliaria.com.br',
      url: 'https://adnimobiliaria.com.br',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'netspheretec.com.br',
      url: 'https://netspheretec.com.br',
      gradient: 'from-pink-500 to-red-500'
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t('projects.title')}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.gradient} mb-4`}>
                    {project.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                    >
                      <span>{t('projects.view')}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* WordPress Sites */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t('projects.websites.title')}
              </span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {websites.map((website, index) => (
                <a
                  key={index}
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${(index + 3) * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${website.gradient} mb-4`}>
                      <Globe className="w-6 h-6" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-2">{website.name}</h4>
<<<<<<< HEAD
                    <p className="text-gray-400 text-sm mb-4">
                      {website.name === 'adnan.com.br' && t('projects.websites.adnan.description')}
                      {website.name === 'adnimobiliaria.com.br' && t('projects.websites.adnimobiliaria.description')}
                      {website.name === 'netspheretec.com.br' && t('projects.websites.netspheretec.description')}
                    </p>
=======
                    <p className="text-gray-400 text-sm mb-4">{t('projects.websites.description')}</p>
>>>>>>> 7c07e3348d05e36b7f319a15dd44e6b0154a5895
                    
                    <div className="inline-flex items-center space-x-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-200">
                      <span>Visit site</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};