import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black/50 backdrop-blur-lg py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-right">
            <h3 className="font-bold mb-2">{t.radioName}</h3>
            <p className="text-gray-400 text-sm md:text-base">{t.footerDesc}</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-400 transition">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}