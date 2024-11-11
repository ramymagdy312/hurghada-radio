import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Radio, Mic, Headphones } from 'lucide-react';

export function WhatWeDo() {
  const { t } = useTranslation();

  return (
    <section className="py-8 md:py-12 bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-8 mb-8 md:mb-12">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.whatWeDoTitle}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto px-4">{t.whatWeDoDesc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="text-center p-4">
          <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Radio className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{t.uniqueExperience}</h3>
          <p className="text-gray-300">{t.uniqueExperienceDesc}</p>
        </div>
        <div className="text-center p-4">
          <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mic className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{t.diverseContent}</h3>
          <p className="text-gray-300">{t.diverseContentDesc}</p>
        </div>
        <div className="text-center p-4">
          <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Headphones className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{t.qualitySound}</h3>
          <p className="text-gray-300">{t.qualitySoundDesc}</p>
        </div>
      </div>
    </section>
  );
}