import React from 'react';
import { Music2 } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export function Player() {
  const { t } = useTranslation();

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12">
      <div className="flex items-center gap-4 mb-6">
        <Music2 className="w-12 h-12 text-purple-400" />
        <div>
          <h2 className="text-2xl font-bold">{t.listenLive}</h2>
          <p className="text-gray-300">{t.listenDesc}</p>
        </div>
      </div>
      
      <div className="iframe rounded-lg overflow-hidden shadow-2xl">
        <iframe
          src="https://a7.asurahosting.com/public/hurghada_radio/embed"
          allow="autoplay"
          className="w-full min-h-[150px] border-0 bg-white p-4"
        />
      </div>
    </div>
  );
}