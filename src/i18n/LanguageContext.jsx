import React, { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext(null);

export const copy = {
  en: {
    switchLabel: 'العربية',
    switchAria: 'Switch to Egyptian Arabic',
  },
  ar: {
    switchLabel: 'English',
    switchAria: 'التبديل إلى اللغة الإنجليزية',
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('site-language') || 'en');

  useEffect(() => {
    const isArabic = language === 'ar';
    document.documentElement.lang = isArabic ? 'ar-EG' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.classList.toggle('arabic', isArabic);
    document.title = isArabic
      ? 'مدرسة السويدي الدولية | التكنولوجيا التطبيقية والبرمجيات'
      : 'El Sewedy International School | Applied Technology and Software';
    localStorage.setItem('site-language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, isArabic: language === 'ar', setLanguage, copy: copy[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
