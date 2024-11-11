import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../translations';

export function useTranslation() {
  const { isArabic } = useContext(LanguageContext);
  const t = isArabic ? translations.ar : translations.en;
  return { t };
}