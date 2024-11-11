import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Award, Heart, Globe } from 'lucide-react';

export function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-purple-900/50 to-black/50 rounded-2xl p-4 md:p-8 mb-8 md:mb-12">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.whyChooseUsTitle}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto px-4">{t.whyChooseUsDesc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition">
          <Award className="w-8 h-8 text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t.excellence}</h3>
          <p className="text-gray-300">{t.excellenceDesc}</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition">
          <Heart className="w-8 h-8 text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t.community}</h3>
          <p className="text-gray-300">{t.communityDesc}</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition">
          <Globe className="w-8 h-8 text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t.accessibility}</h3>
          <p className="text-gray-300">{t.accessibilityDesc}</p>
        </div>
      </div>
    </section>
  );
}