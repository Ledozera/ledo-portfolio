import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'pt' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
  isAnimating: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.skills': 'Skills',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.role': 'Desenvolvedor Bubble',
    'hero.description': 'Especialista em desenvolvimento no-code/low-code com foco em soluções empresariais escaláveis e automações inteligentes.',
    'hero.cta': 'Vamos conversar',
    
    // About
    'about.title': 'Sobre mim',
    'about.description': 'Sou um desenvolvedor apaixonado por tecnologia e inovação, especializado em criar soluções digitais robustas usando Bubble. Com experiência em UX/UI Design, APIs e automações, transformo ideias em produtos funcionais e escaláveis.',
    
    // Skills
    'skills.title': 'Minhas Skills',
    'skills.primary': 'Principais',
    'skills.secondary': 'Complementares',
    
    // Projects
    'projects.title': 'Projetos',
    'projects.sistema-financeiro.title': 'Sistema Financeiro/CRM',
    'projects.sistema-financeiro.description': 'Sistema completo de gestão financeira e CRM desenvolvido com Bubble, incluindo dashboards, relatórios e automações.',
    'projects.crm-imobiliario.title': 'CRM Imobiliário',
    'projects.crm-imobiliario.description': 'Plataforma especializada para gestão imobiliária com funcionalidades avançadas de acompanhamento de leads e propriedades.',
    'projects.automacoes.title': 'Automações Imobiliárias',
    'projects.automacoes.description': 'Sistema de automações integradas usando N8N + Evolution API + CRM Imobiliário para otimizar processos.',
    'projects.anaprev.title': 'ANAPREV',
    'projects.anaprev.description': 'Sistema que faz controle de demandas de planilhamentos e planilhamentos para analise de risco de empresas, foi feito para uma empresa focada nessas analises.',
    'projects.leadex.title': 'Leadex',
    'projects.leadex.description': 'Um CRM em desenvolvimento, com cadastros e relatórios de Tasks, Contacts, Deals, Services, Projects e os logs dos usuários.',
    'projects.websites.title': 'Sites WordPress',
    'projects.websites.adnan.description': 'O site oficial do Grupo ADN, um conglomerado de empresas especializadas em engenharia, consultoria técnica e imobiliária, e topografia. Uma plataforma completa que reflete a expertise e a abrangência dos serviços oferecidos.',
    'projects.websites.adnimobiliaria.description': 'A plataforma digital da imobiliária do Grupo ADN, oferecendo soluções completas para compra, venda e aluguel de imóveis. Design intuitivo e funcionalidades que facilitam a busca pelo imóvel ideal.',
    'projects.websites.netspheretec.description': 'Site da Netsphere, uma empresa de tecnologia inovadora com foco em soluções de hardware, desenvolvimento de software, consultoria estratégica e serviços de TI. Apresenta um portfólio diversificado e a visão de futuro da empresa.',
    'projects.websites.title': 'Sites WordPress',
    'projects.websites.description': 'Desenvolvimento de sites institucionais e corporativos com WordPress.',
    'projects.view': 'Ver projeto',
    
    // Contact
    'contact.title': 'Vamos trabalhar juntos',
    'contact.description': 'Tem um projeto em mente? Vamos conversar sobre como posso ajudar a transformar sua ideia em realidade.',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar mensagem',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.made': 'Feito com',
    'footer.madeBy': 'Feito por mim',
    
    // About cards
    'about.development': 'Desenvolvimento',
    'about.development.desc': 'Especialista em Bubble e tecnologias no-code',
    'about.automation': 'Automação',
    'about.automation.desc': 'Integração de sistemas e APIs para otimizar processos',
    'about.passion': 'Paixão',
    'about.passion.desc': 'Transformar ideias em soluções digitais funcionais',
    
    // Contact placeholders
    'contact.name.placeholder': 'Seu nome',
    'contact.email.placeholder': 'seu@email.com',
    'contact.message.placeholder': 'Conte-me sobre seu projeto...',    'contact.social': 'Redes Sociais',
    'contact.phone': 'Telefone',
    'contact.phone.placeholder': 'Seu telefone'
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.role': 'Bubble Developer',
    'hero.description': 'No-code/low-code development specialist focused on scalable business solutions and intelligent automations.',
    'hero.cta': 'Let\'s talk',
    
    // About
    'about.title': 'About me',
    'about.description': 'I\'m a developer passionate about technology and innovation, specialized in creating robust digital solutions using Bubble. With experience in UX/UI Design, APIs and automations, I transform ideas into functional and scalable products.',
    
    // Skills
    'skills.title': 'My Skills',
    'skills.primary': 'Primary',
    'skills.secondary': 'Secondary',
    
    // Projects
    'projects.title': 'Projects',
    'projects.sistema-financeiro.title': 'Financial System/CRM',
    'projects.sistema-financeiro.description': 'Complete financial management and CRM system developed with Bubble, including dashboards, reports and automations.',
    'projects.crm-imobiliario.title': 'Real Estate CRM',
    'projects.crm-imobiliario.description': 'Specialized platform for real estate management with advanced lead and property tracking features.',
    'projects.automacoes.title': 'Real Estate Automations',
    'projects.automacoes.description': 'Integrated automation system using N8N + Evolution API + Real Estate CRM to optimize processes.',
    'projects.anaprev.title': 'ANAPREV',
    'projects.anaprev.description': 'A system that controls the demands of spreadsheets and spreadsheets for risk analysis of companies, made for a company focused on these analyses.',
    'projects.leadex.title': 'Leadex',
    'projects.leadex.description': 'A CRM under development, with registrations and reports of Tasks, Contacts, Deals, Services, Projects and user logs.',
    'projects.websites.title': 'WordPress Sites',
    'projects.websites.adnan.description': 'The official website of the ADN Group, a conglomerate of companies specializing in engineering, technical and real estate consulting, and topography. A comprehensive platform that reflects the expertise and breadth of services offered.',
    'projects.websites.adnimobiliaria.description': 'The digital platform of the ADN Group is real estate agency, offering complete solutions for buying, selling, and renting properties. Intuitive design and functionalities that facilitate the search for the ideal property.',
    'projects.websites.netspheretec.description': 'Netsphere is website, an innovative technology company focused on hardware solutions, software development, strategic consulting, and IT services. It showcases a diverse portfolio and the company\'s future vision.',
    'projects.websites.title': 'WordPress Sites',
    'projects.websites.description': 'Development of institutional and corporate websites with WordPress.',
    'projects.view': 'View project',
    
    // Contact
    'contact.title': 'Let\'s work together',
    'contact.description': 'Have a project in mind? Let\'s talk about how I can help transform your idea into reality.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Made with',
    'footer.madeBy': 'Made by me',
    
    // About cards
    'about.development': 'Development',
    'about.development.desc': 'Bubble and no-code technologies specialist',
    'about.automation': 'Automation',
    'about.automation.desc': 'System integration and APIs to optimize processes',
    'about.passion': 'Passion',
    'about.passion.desc': 'Transform ideas into functional digital solutions',
    
    // Contact placeholders
    'contact.name.placeholder': 'Your name',
    'contact.email.placeholder': 'your@email.com',
    'contact.message.placeholder': 'Tell me about your project...',
    'contact.social': 'Social Media',
    'contact.phone': 'Phone',
    'contact.phone.placeholder': 'Your phone'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleLanguage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
      setIsAnimating(false);
    }, 300); // Match animation duration
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isAnimating }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};