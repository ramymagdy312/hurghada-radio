import React, { useContext } from 'react';
import { Header } from './components/Header';
import { Player } from './components/Player';
import { About } from './components/About';
import { WhatWeDo } from './components/WhatWeDo';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WhatWeAre } from './components/WhatWeAre';
import { Footer } from './components/Footer';
import { LanguageContext } from './contexts/LanguageContext';

function App() {
  const { isArabic, toggleLanguage } = useContext(LanguageContext);

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      <Header toggleLanguage={toggleLanguage} isArabic={isArabic} />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Player />
          <About />
          <WhatWeDo />
          <WhyChooseUs />
          <WhatWeAre />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;