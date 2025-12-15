/**
 * File: App.tsx
 * Last Updated: Monday Dec 15th, 2025 5:53 pm ET
 * Author: Antigravity
 * Notes: Updated routing to pass navigation prop to ProductPage.
 */

import React, { useState } from 'react';
import { HomePage } from './components/HomePage';
import { ProductPage } from './components/ProductPage';
import { BrandsIndex } from './components/BrandsIndex';
import { StudioZoPage } from './components/StudioZoPage';

// Define the available views for the app
type ViewState = 'home' | 'product' | 'brands' | 'brand-studio-zo';

const App: React.FC = () => {
  // Default to 'home' to fix the "messed up" landing experience
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Navigation Logic
  const navigate = (view: ViewState) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
  };

  return (
    <div className="app-root min-h-screen flex flex-col font-sans">
      {/* Nav - Sticky with correct z-index to stay above content */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] px-6 py-6 md:px-12 md:py-6 flex justify-between items-center z-[100] transition-all">
        {/* Logo Click - Resets to Home */}
        <button
          onClick={() => navigate('home')}
          className="text-xl font-bold tracking-[0.02em] text-brand-dark no-underline bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity"
        >
          PAY THE DØLLS™
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 text-[13px] font-medium tracking-[0.05em]">
          <button
            onClick={() => navigate('product')}
            className={`hover:text-brand-neon transition-colors duration-200 bg-transparent border-none cursor-pointer ${currentView === 'product' ? 'text-brand-dark' : 'text-gray-500'}`}
          >
            SHOP
          </button>
          <button
            onClick={() => navigate('brands')}
            className={`hover:text-brand-neon transition-colors duration-200 bg-transparent border-none cursor-pointer ${currentView === 'brands' ? 'text-brand-neon' : 'text-gray-500'}`}
          >
            BRANDS
          </button>

          {['VERSE', 'MISSION', 'SUBMIT', 'ABOUT'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-500 hover:text-brand-neon transition-colors duration-200 no-underline"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right Side / Cart */}
        <div className="text-[13px] text-brand-dark flex gap-4 items-center">
          {currentView === 'brand-studio-zo' && (
            <span className="text-[10px] border border-black px-2 py-1 rounded-full flex items-center animate-pulse">
              <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
              ZO ACTIVE
            </span>
          )}
          <a href="/cart" className="no-underline hover:text-brand-neon transition-colors font-semibold">
            Cart (0)
          </a>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow animate-in fade-in duration-500">
        {currentView === 'home' && <HomePage onNavigate={(v) => navigate(v as ViewState)} />}
        {currentView === 'product' && <ProductPage onNavigate={(v) => navigate(v as ViewState)} />}
        {currentView === 'brands' && <BrandsIndex onNavigate={(view) => navigate(view as ViewState)} />}
        {currentView === 'brand-studio-zo' && <StudioZoPage />}
      </main>

      {/* Footer - Only show on main brand pages, Studio Zo has its own footer */}
      {currentView !== 'brand-studio-zo' && currentView !== 'home' && (
        <footer className="bg-brand-dark text-white py-16 px-12 text-center mt-auto border-t border-gray-800">
          <p className="text-sm font-light opacity-70 mb-4 tracking-widest">© PAY THE DØLLS™</p>
          <p className="text-sm font-light opacity-70 mb-4">Like Amazon, But For DØLLs</p>
          <p className="text-xs font-mono opacity-50">A STuDiØ ZØ Project · Powered by Verse Capital</p>
        </footer>
      )}
    </div>
  );
};

export default App;
