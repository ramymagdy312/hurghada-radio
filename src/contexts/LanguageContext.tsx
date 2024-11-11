import React, { createContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  isArabic: boolean;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  isArabic: true,
  toggleLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [isArabic, setIsArabic] = useState(true);

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
  };

  return (
    <LanguageContext.Provider value={{ isArabic, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}