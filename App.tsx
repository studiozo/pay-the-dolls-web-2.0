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

type ViewState = 'home' | 'shop' | 'product' | 'brands' | 'brand-studio-zo' | 'brand-cooltransgirl' | 'verse' | 'mission' | 'submit';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation Logic
  const navigate = (view: ViewState) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  return (
    <div className="app-root min-h-screen flex flex-col font-sans">
      {/* Header matching Shopify Liquid Snippet */}
      <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-[#E5E5E5] px-6 py-6 md:px-12 md:py-6 flex justify-between items-center transition-all bg-opacity-98">

        {/* Logo */}
        <button
          onClick={() => navigate('home')}
          className="text-xl font-bold tracking-[0.02em] text-brand-dark no-underline bg-transparent border-none cursor-pointer z-50 relative"
        >
          PAY THE DØLLS™
        </button>

        {/* Desktop Navigation - Hidden on Mobile, Flex on Desktop */}
        <nav className="hidden md:flex gap-8 text-[13px] font-medium tracking-[0.05em]">
          <button onClick={() => navigate('shop')} className={`uppercase bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-brand-neon ${currentView === 'shop' ? 'text-brand-dark' : 'text-brand-dark'}`}>
            Shop
          </button>
          <button onClick={() => navigate('brands')} className={`uppercase bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-brand-neon ${currentView === 'brands' ? 'text-brand-neon' : 'text-brand-dark'}`}>
            Brands
          </button>
          <button onClick={() => navigate('verse')} className={`uppercase bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-brand-neon ${currentView === 'verse' ? 'text-brand-neon' : 'text-brand-dark'}`}>
            Verse
          </button>
          <button onClick={() => navigate('mission')} className={`uppercase bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-brand-neon ${currentView === 'mission' ? 'text-brand-neon' : 'text-brand-dark'}`}>
            Mission
          </button>
          <button onClick={() => navigate('submit')} className={`uppercase bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-brand-neon ${currentView === 'submit' ? 'text-brand-neon' : 'text-brand-dark'}`}>
            Submit
          </button>
          <button className="uppercase bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-brand-neon text-brand-dark">
            About
          </button>
          <button className="uppercase bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-brand-neon text-brand-dark">
            Contact
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4 text-[13px] text-brand-dark">
          {/* ZO ACTIVE Pill */}
          {currentView === 'brand-studio-zo' && (
            <span className="text-xs border border-black px-2 py-1 rounded-full flex items-center hidden md:flex">
              <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
              ZO ACTIVE
            </span>
          )}

          {/* Cart */}
          <a href="/cart" className="no-underline hover:text-brand-neon transition-colors text-brand-dark font-medium">
            Cart (0)
          </a>

          {/* Mobile Menu Toggle (Hamburger) */}
          <button
            className="md:hidden z-50 relative bg-transparent border-none cursor-pointer p-0 ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span className={`w-full h-0.5 bg-black transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
              <span className={`w-full h-0.5 bg-black transition-all duration-300 origin-center ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-black transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden h-screen w-screen ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col items-center gap-8 text-center">
            <button onClick={() => navigate('shop')} className="text-2xl font-bold uppercase tracking-[0.05em] text-brand-dark bg-transparent border-none hover:text-brand-neon hover:scale-110 transition-transform">Shop</button>
            <button onClick={() => navigate('brands')} className="text-2xl font-bold uppercase tracking-[0.05em] text-brand-dark bg-transparent border-none hover:text-brand-neon hover:scale-110 transition-transform">Brands</button>
            <button onClick={() => navigate('verse')} className="text-2xl font-bold uppercase tracking-[0.05em] text-brand-dark bg-transparent border-none hover:text-brand-neon hover:scale-110 transition-transform">Verse</button>
            <button onClick={() => navigate('mission')} className="text-2xl font-bold uppercase tracking-[0.05em] text-brand-dark bg-transparent border-none hover:text-brand-neon hover:scale-110 transition-transform">Mission</button>
            <button onClick={() => navigate('submit')} className="text-2xl font-bold uppercase tracking-[0.05em] text-brand-dark bg-transparent border-none hover:text-brand-neon hover:scale-110 transition-transform">Submit</button>
            <button className="text-2xl font-bold uppercase tracking-[0.05em] text-brand-dark bg-transparent border-none hover:text-brand-neon hover:scale-110 transition-transform">About</button>
            <button className="text-2xl font-bold uppercase tracking-[0.05em] text-brand-dark bg-transparent border-none hover:text-brand-neon hover:scale-110 transition-transform">Contact</button>
          </nav>
        </div>

      </header>

      <main className="flex-grow animate-in fade-in duration-500">
        {currentView === 'home' && <HomePage onNavigate={navigate} />}
        {currentView === 'shop' && <CollectionPage onNavigate={navigate} />}
        {currentView === 'product' && <ProductPage onNavigate={navigate} />}
        {currentView === 'brands' && <BrandsIndex onNavigate={navigate} />}
        {currentView === 'brand-studio-zo' && <StudioZoPage />}
        {currentView === 'brand-cooltransgirl' && <CoolTransGirlPage />}
        {currentView === 'verse' && <VersePage />}
        {currentView === 'mission' && <MissionPage onNavigate={navigate} />}
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