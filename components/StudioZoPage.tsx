import React, { useState } from 'react';

// Mock data for Studio Zo
const ARTWORKS = {
  paintings: [
    { id: 1, title: 'Entropy No. 5', price: 1200, img: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, title: 'Static Noise', price: 950, img: 'https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1000&auto=format&fit=crop' },
    { id: 3, title: 'The Void Stares Back', price: 2400, img: 'https://images.unsplash.com/photo-1515405295579-ba7f9f92f413?q=80&w=1000&auto=format&fit=crop' },
  ],
  rezoed: [
    { id: 4, title: 'Glitch Portrait 01', price: 450, img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop' },
    { id: 5, title: 'Data Decay', price: 450, img: 'https://images.unsplash.com/photo-1614850523060-8da1d56e37ad?q=80&w=1000&auto=format&fit=crop' },
  ],
  prints: [
    { id: 6, title: 'Structure A (Print)', price: 85, img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop' },
    { id: 7, title: 'Structure B (Print)', price: 85, img: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=1000&auto=format&fit=crop' },
    { id: 8, title: 'Untitled 04 (Print)', price: 120, img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop' },
    { id: 9, title: 'Untitled 05 (Print)', price: 120, img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1000&auto=format&fit=crop' },
  ]
};

export const StudioZoPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'paintings' | 'rezoed' | 'prints'>('paintings');

  return (
    <div className="bg-white text-black min-h-screen relative font-serif">
      
      {/* CSS-based Noise Overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03] z-50 mix-blend-multiply"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Brand Hero - Minimalist & Large */}
      <div className="pt-32 pb-16 px-6 md:px-12 text-center border-b border-gray-100 relative overflow-hidden">
        <h1 className="text-7xl md:text-9xl font-light mb-6 tracking-tighter mix-blend-exclusion">STuDiØ ZØ</h1>
        <p className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-gray-500 max-w-lg mx-auto leading-loose">
          Visual Artifacts & Contemporary Decay
        </p>
      </div>

      {/* Sticky Navigation Tabs */}
      <div className="sticky top-[73px] bg-white/90 backdrop-blur-sm z-40 border-b border-gray-100 flex justify-center gap-8 md:gap-20 py-5 transition-all">
        {['paintings', 'rezoed', 'prints'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`text-xs md:text-sm font-mono uppercase tracking-[2px] transition-all duration-300 relative group ${
              activeTab === tab 
                ? 'text-black opacity-100' 
                : 'text-gray-400 hover:text-black opacity-70'
            }`}
          >
            {tab}
            {/* Active underline indicator */}
            <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-black transform transition-transform duration-300 ${activeTab === tab ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="max-w-[1800px] mx-auto px-4 md:px-12 py-12 min-h-[60vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {ARTWORKS[activeTab].map((work) => (
            <div key={work.id} className="group cursor-pointer relative">
              <div className="aspect-[4/5] overflow-hidden bg-gray-50 mb-4 relative shadow-sm">
                <img 
                  src={work.img} 
                  alt={work.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                />
                
                {/* Hover UI */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur flex justify-between items-center border-t border-gray-100">
                   <span className="font-mono text-xs uppercase tracking-widest">Quick Look</span>
                   <span className="font-mono text-xs">+</span>
                </div>
              </div>
              
              <div className="flex justify-between items-start border-t border-gray-100 pt-3 opacity-80 group-hover:opacity-100 transition-opacity">
                <h3 className="font-serif text-xl italic leading-none">{work.title}</h3>
                <span className="font-mono text-xs font-bold tracking-tight">${work.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#0a0a0a] text-white py-24 px-6 text-center mt-20 border-t border-gray-200">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif italic mb-6">"Chaos is the only true structure."</h2>
          <p className="text-xs font-mono text-gray-500 leading-relaxed mb-10 max-w-md mx-auto">
            Studio ZØ represents the intersection of digital noise and analog texture. 
            All works are authenticated via Verse Capital protocol.
          </p>
          <div className="flex gap-4 justify-center">
             <button className="border border-white/20 px-8 py-3 text-[10px] font-mono uppercase tracking-[3px] hover:bg-white hover:text-black transition-colors">
               Contact Studio
             </button>
             <button className="border border-white/20 px-8 py-3 text-[10px] font-mono uppercase tracking-[3px] hover:bg-white hover:text-black transition-colors">
               Instagram
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
