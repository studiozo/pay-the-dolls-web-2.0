import React, { useState } from 'react';
import { ProductPage } from './components/ProductPage';
import { BrandsIndex } from './components/BrandsIndex';
import { StudioZoPage } from './components/StudioZoPage';
import { CoolTransGirlPage } from './components/CoolTransGirlPage';
import { HomePage } from './components/HomePage';
import { VersePage } from './components/VersePage';
import { SubmitPage } from './components/SubmitPage';
import { MissionPage } from './components/MissionPage';
import { CollectionPage } from './components/CollectionPage';
import { AboutPage } from './components/AboutPage';

type ViewState = 'home' | 'shop' | 'product' | 'brands' | 'brand-studio-zo' | 'brand-cooltransgirl' | 'verse' | 'mission' | 'about' | 'submit';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Navigation Logic
  const navigate = (view: ViewState) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
  };

  return (
    <div className="app-root min-h-screen flex flex-col font-sans">
      {/* Nav - Sticky, Blur, Specific Links */}
      <nav className="sticky top-0 bg-white/98 backdrop-blur-md border-b border-[#E5E5E5] px-6 py-6 md:px-12 md:py-6 flex justify-between items-center z-[1000] transition-all">
        <button
          onClick={() => navigate('home')}
          className="text-xl font-bold tracking-[0.02em] text-brand-dark no-underline bg-transparent border-none cursor-pointer"
        >
          PAY THE DØLLS™
        </button>

        <div className="hidden md:flex gap-8 text-[13px] font-medium tracking-[0.05em]">
          <button onClick={() => navigate('shop')} className={`hover:text-brand-neon transition-colors duration-200 bg-transparent border-none cursor-pointer ${currentView === 'shop' || currentView === 'product' ? 'text-brand-dark' : 'text-brand-dark'}`}>
            SHOP
          </button>
          <button onClick={() => navigate('brands')} className={`hover:text-brand-neon transition-colors duration-200 bg-transparent border-none cursor-pointer ${currentView === 'brands' ? 'text-brand-neon' : 'text-brand-dark'}`}>
            BRANDS
          </button>

          <button onClick={() => navigate('verse')} className={`bg-transparent border-none cursor-pointer hover:text-brand-neon transition-colors duration-200 no-underline ${currentView === 'verse' ? 'text-brand-neon' : 'text-brand-dark'}`}>
            VERSE
          </button>
          <button onClick={() => navigate('mission')} className={`bg-transparent border-none cursor-pointer hover:text-brand-neon transition-colors duration-200 no-underline ${currentView === 'mission' ? 'text-brand-neon' : 'text-brand-dark'}`}>
            MISSION
          </button>
          <button onClick={() => navigate('about')} className={`bg-transparent border-none cursor-pointer hover:text-brand-neon transition-colors duration-200 no-underline ${currentView === 'about' ? 'text-brand-neon' : 'text-brand-dark'}`}>
            ABOUT
          </button>
          <button onClick={() => navigate('submit')} className={`bg-transparent border-none cursor-pointer hover:text-brand-neon transition-colors duration-200 no-underline ${currentView === 'submit' ? 'text-brand-neon' : 'text-brand-dark'}`}>
            SUBMIT
          </button>
        </div>

        <div className="text-[13px] text-brand-dark flex gap-4">
          {currentView === 'brand-studio-zo' && (
            <span className="text-xs border border-black px-2 py-1 rounded-full flex items-center">
              <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
              ZO ACTIVE
            </span>
          )}
          <a href="/cart" className="no-underline hover:text-brand-neon transition-colors">
            Cart (0)
          </a>
        </div>
      </nav>

      <main className="flex-grow animate-in fade-in duration-500">
        {currentView === 'home' && <HomePage onNavigate={(view) => navigate(view as ViewState)} />}
        {currentView === 'shop' && <CollectionPage onNavigate={(view) => navigate(view as ViewState)} />}
        {currentView === 'product' && <ProductPage onNavigate={(view) => navigate(view as ViewState)} />}
        {currentView === 'brands' && <BrandsIndex onNavigate={(view) => navigate(view as ViewState)} />}
        {currentView === 'brand-studio-zo' && <StudioZoPage />}
        {currentView === 'brand-cooltransgirl' && <CoolTransGirlPage />}
        {currentView === 'verse' && <VersePage />}
        {currentView === 'mission' && <MissionPage onNavigate={(view) => navigate(view as ViewState)} />}
        {currentView === 'about' && <AboutPage onNavigate={(view) => navigate(view as ViewState)} />}
        {currentView === 'submit' && <SubmitPage />}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-16 px-12 text-center mt-auto">
        <p className="text-sm font-light opacity-70 mb-4">© PAY THE DØLLS™</p>
        <p className="text-sm font-light opacity-70 mb-4">Like Amazon, But For DØLLs</p>
        <p className="text-sm font-light opacity-70">A STuDiØ ZØ Project · Powered by Verse Capital</p>
      </footer>
    </div>
  );
};

export default App;