import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export function NowPlaying() {
  const { t } = useTranslation();

  return (
    <div className="bg-white/5 rounded-xl p-6 mb-12">
      <h3 className="text-xl font-bold mb-4">{t.nowPlaying}</h3>
      <div className="flex items-center gap-4">
        <img 
          src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&auto=format&fit=crop&q=60"
          alt="Album cover"
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div>
          <h4 className="font-semibold">{t.showName}</h4>
          <p className="text-gray-400">{t.host}</p>
        </div>
      </div>
    </div>
  );
}