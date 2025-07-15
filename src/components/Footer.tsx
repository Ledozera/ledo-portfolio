import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 mb-2">
            © {new Date().getFullYear()} Eduardo Ledo. {t('footer.rights')}
          </p>
          <p className="text-gray-500 flex items-center justify-center space-x-2">
            <span className="text-purple-400">{t('footer.madeBy')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};