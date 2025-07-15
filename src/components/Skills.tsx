import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Skills: React.FC = () => {
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

  const primarySkills = [
    { name: 'Bubble', level: 95, color: 'from-purple-500 to-purple-600' },
    { name: 'UX/UI Design', level: 90, color: 'from-pink-500 to-pink-600' },
    { name: 'APIs', level: 85, color: 'from-blue-500 to-blue-600' },
    { name: 'N8N', level: 80, color: 'from-green-500 to-green-600' }
  ];

  const secondarySkills = [
    { name: 'Figma', level: 85, color: 'from-purple-400 to-pink-400' },
    { name: 'JavaScript', level: 75, color: 'from-yellow-500 to-orange-500' },
    { name: 'Python', level: 70, color: 'from-blue-400 to-blue-500' },
    { name: 'AWS', level: 65, color: 'from-orange-500 to-red-500' },
    { name: 'React', level: 75, color: 'from-cyan-500 to-blue-500' },
    { name: 'PostgreSQL', level: 70, color: 'from-indigo-500 to-purple-500' }
  ];

  const SkillBar = ({ skill, index }: { skill: typeof primarySkills[0]; index: number }) => (
    <div className={`transition-all duration-1000 delay-${index * 100} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-purple-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full"></div>
        <div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 delay-${index * 100} shadow-lg`}
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        >
          <div className="h-full bg-white/20 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-purple-900/5 to-pink-900/5"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t('skills.title')}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Primary Skills */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">{t('skills.primary')}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto lg:mx-0 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {primarySkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            {/* Secondary Skills */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">{t('skills.secondary')}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto lg:mx-0 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {secondarySkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};