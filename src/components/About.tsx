import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Radio, Music, Newspaper, Users } from 'lucide-react';

export function About() {
  const { t } = useTranslation();

  const features = [
    { icon: <Music className="w-6 h-6" />, title: t.musicTitle, description: t.musicDesc },
    { icon: <Radio className="w-6 h-6" />, title: t.entertainmentTitle, description: t.entertainmentDesc },
    { icon: <Newspaper className="w-6 h-6" />, title: t.newsTitle, description: t.newsDesc },
    { icon: <Users className="w-6 h-6" />, title: t.communityTitle, description: t.communityDesc }
  ];

  return (
    <section className="py-8 md:py-12">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.aboutTitle}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto px-4">{t.aboutDesc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-0">
        {features.map((feature, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/10 transition">
            <div className="flex items-start gap-4">
              <div className="text-purple-400 mt-1">{feature.icon}</div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm md:text-base">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}