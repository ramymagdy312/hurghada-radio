import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { MapPin } from 'lucide-react';

export function WhatWeAre() {
  const { t } = useTranslation();

  return (
    <section className="py-8 md:py-12 bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1596273312120-c5a63336f0ff?w=800&auto=format&fit=crop&q=60" 
              alt="Hurghada cityscape" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5" />
                <span>{t.location}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.whatWeAreTitle}</h2>
          <p className="text-gray-300 mb-6">{t.whatWeAreDesc}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold mb-2">{t.onlineTitle}</h4>
              <p className="text-gray-300 text-sm">{t.onlineDesc}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold mb-2">{t.localTitle}</h4>
              <p className="text-gray-300 text-sm">{t.localDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}