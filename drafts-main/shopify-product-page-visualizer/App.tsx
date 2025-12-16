import React, { useState } from 'react';
import { ProductPage } from './components/ProductPage';
import { BrandsIndex } from './components/BrandsIndex';
import { StudioZoPage } from './components/StudioZoPage';
import { HomePage } from './components/HomePage';
import { CollectionsPage } from './components/CollectionsPage';
import { MissionPage } from './components/MissionPage';
import { VersePage } from './components/VersePage';
import { SubmitPage } from './components/SubmitPage';
import { WireframePage } from './components/WireframePage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { MobileMenu } from './components/MobileMenu';
import { PayTheDollsPage } from './components/PayTheDollsPage';
import { WildcardPage } from './components/WildcardPage';
import { CoolTransgirlPage } from './components/CoolTransgirlPage';

type ViewState = 'home' | 'collections' | 'product' | 'brands' | 'brand-studio-zo' | 'brand-ptd' | 'wireframe' | 'mission' | 'verse' | 'submit' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<import('./types').Product | null>(null);

  // Navigation Logic
  const navigate = (view: ViewState) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
    // close mobile menu on navigate
    setMobileMenuOpen(false);
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

        <div className="hidden md:flex gap-6 md:gap-8 text-[13px] font-medium tracking-[0.05em]">
          <button onClick={() => navigate('collections')} className={`hover:text-brand-neon transition-colors duration-200 bg-transparent border-none cursor-pointer ${currentView === 'collections' ? 'text-brand-neon' : 'text-brand-dark'}`}>
            Shop
          </button>
          <button onClick={() => navigate('brands')} className={`hover:text-brand-neon transition-colors duration-200 bg-transparent border-none cursor-pointer ${currentView === 'brands' ? 'text-brand-neon' : 'text-brand-dark'}`}>
            Brands
          </button>
          <button onClick={() => navigate('verse')} className="bg-transparent border-none cursor-pointer text-brand-dark hover:text-brand-neon transition-colors duration-200 no-underline">
            Verse
          </button>
          <button onClick={() => navigate('mission')} className="bg-transparent border-none cursor-pointer text-brand-dark hover:text-brand-neon transition-colors duration-200 no-underline">
            Mission
          </button>
          <button onClick={() => navigate('submit')} className="bg-transparent border-none cursor-pointer text-brand-dark hover:text-brand-neon transition-colors duration-200 no-underline">
            Submit
          </button>
          <button onClick={() => navigate('about')} className="bg-transparent border-none cursor-pointer text-brand-dark hover:text-brand-neon transition-colors duration-200 no-underline">
            About
          </button>
          <button onClick={() => navigate('contact')} className="bg-transparent border-none cursor-pointer text-brand-dark hover:text-brand-neon transition-colors duration-200 no-underline">
            Contact
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-[13px] text-brand-dark hidden md:block mr-4">
            {currentView === 'brand-studio-zo' && (
              <span className="text-xs border border-black px-2 py-1 rounded-full flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                ZO ACTIVE
              </span>
            )}
          </div>

          <a href="/cart" className="no-underline hover:text-brand-neon transition-colors hidden md:inline-block">
            Cart (0)
          </a>

          {/* Mobile hamburger */}
          <button aria-label="Open menu" onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 rounded border">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} navigate={(v: any) => navigate(v)} currentView={currentView} />      </nav>

      <main className="flex-grow animate-in fade-in duration-500">
        {currentView === 'home' && <HomePage onNavigate={(view) => navigate(view as ViewState)} />}
        {currentView === 'collections' && <CollectionsPage onSelectProduct={(p) => { setSelectedProduct(p); navigate('product'); }} />}
        {currentView === 'product' && <ProductPage product={selectedProduct} />}
        {currentView === 'brands' && <BrandsIndex onNavigate={(view) => navigate(view as ViewState)} />}
        {currentView === 'brand-studio-zo' && <StudioZoPage />}
        {currentView === 'brand-ptd' && <PayTheDollsPage onNavigate={(view) => navigate(view as ViewState)} />}
        {currentView === 'about' && <AboutPage onNavigate={(view) => navigate(view as ViewState)} />}
        {currentView === 'mission' && <MissionPage />}
        {currentView === 'verse' && <VersePage />}
        {currentView === 'contact' && <ContactPage />}
        {currentView === 'submit' && <SubmitPage />}
        {currentView === 'wireframe' && <WireframePage /> }
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