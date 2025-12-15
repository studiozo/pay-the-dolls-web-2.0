import React, { useState } from 'react';
import { ProductPage } from './components/ProductPage';
import { BrandsIndex } from './components/BrandsIndex';
import { StudioZoPage } from './components/StudioZoPage';
import { HomePage } from './components/HomePage';

type ViewState = 'home' | 'product' | 'brands' | 'brand-studio-zo' | 'mission' | 'submit';

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
          <button onClick={() => navigate('product')} className={`hover:text-brand-neon transition-colors duration-200 bg-transparent border-none cursor-pointer ${currentView === 'product' ? 'text-brand-dark' : 'text-brand-dark'}`}>
            SHOP
          </button>
          <button onClick={() => navigate('brands')} className={`hover:text-brand-neon transition-colors duration-200 bg-transparent border-none cursor-pointer ${currentView === 'brands' ? 'text-brand-neon' : 'text-brand-dark'}`}>
            BRANDS
          </button>

          <button onClick={() => navigate('mission')} className="bg-transparent border-none cursor-pointer text-brand-dark hover:text-brand-neon transition-colors duration-200 no-underline">
            VERSE
          </button>
          <button onClick={() => navigate('submit')} className="bg-transparent border-none cursor-pointer text-brand-dark hover:text-brand-neon transition-colors duration-200 no-underline">
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
        {currentView === 'product' && <ProductPage />}
        {currentView === 'brands' && <BrandsIndex onNavigate={(view) => navigate(view as ViewState)} />}
        {currentView === 'brand-studio-zo' && <StudioZoPage />}
        {currentView === 'mission' && (
          <div className="py-24 px-12 text-center">
            <h1 className="text-4xl font-bold mb-4">VERSE CAPITAL</h1>
            <p className="text-lg text-gray-600">Protocol details coming soon.</p>
          </div>
        )}
        {currentView === 'submit' && (
          <div className="py-24 px-12 text-center">
            <h1 className="text-4xl font-bold mb-4">SUBMIT</h1>
            <p className="text-lg text-gray-600">Submission portal opening soon.</p>
          </div>
        )}
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