import React, { useState, useEffect } from 'react';

// Mock data for Studio Zo with 'Code' for the Print Lab aesthetic
const ARTWORKS = [
  { id: 1, code: 'PNT-001', title: 'Entropy No. 5', price: 1200, img: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop', category: 'paintings' },
  { id: 2, code: 'PNT-002', title: 'Static Noise', price: 950, img: 'https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1000&auto=format&fit=crop', category: 'paintings' },
  { id: 3, code: 'PNT-003', title: 'The Void', price: 2400, img: 'https://images.unsplash.com/photo-1515405295579-ba7f9f92f413?q=80&w=1000&auto=format&fit=crop', category: 'paintings' },
  { id: 4, code: 'RZO-001', title: 'Glitch Portrait', price: 450, img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop', category: 'rezoed' },
  { id: 5, code: 'RZO-002', title: 'Data Decay', price: 450, img: 'https://images.unsplash.com/photo-1614850523060-8da1d56e37ad?q=80&w=1000&auto=format&fit=crop', category: 'rezoed' },
  { id: 6, code: 'PRT-001', title: 'Structure A', price: 85, img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop', category: 'prints' },
  { id: 7, code: 'PRT-002', title: 'Structure B', price: 85, img: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=1000&auto=format&fit=crop', category: 'prints' },
  { id: 8, code: 'PRT-003', title: 'Untitled 04', price: 120, img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop', category: 'prints' },
  { id: 9, code: 'PRT-004', title: 'Untitled 05', price: 120, img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1000&auto=format&fit=crop', category: 'prints' },
];

export const StudioZoPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'paintings' | 'rezoed' | 'prints'>('paintings');
  const [time, setTime] = useState(new Date());

  // Clock for SYS.ONLINE
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 53); // irregular interval for tech feel
    return () => clearInterval(timer);
  }, []);

  const filteredItems = ARTWORKS.filter(item => item.category === activeTab);

  return (
    <div className="bg-[#050505] min-h-screen text-white font-mono relative selection:bg-[#CCFF00] selection:text-black pb-24">

      {/* Background Grid/Noise texture */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03] z-0"
        style={{ backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      {/* Top Bar */}
      <div className="relative z-10 flex justify-between items-start px-6 pt-6 md:px-12 text-[10px] md:text-[11px] tracking-[0.2em] text-[#666] font-bold">
        <div className="text-white italic text-lg tracking-tighter not-italic font-sans">
          ZØVIVAA
        </div>
        <div className="text-right flex flex-col items-end">
          <div className="mb-1 text-[#CCFF00]">SYS.ONLINE</div>
          <div className="font-mono tabular-nums text-white">
            {time.toLocaleTimeString('en-US', { hour12: false })}:{time.getMilliseconds().toString().padStart(3, '0')}
          </div>
          <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); /* Ideally navigate back to brands */ }}
            className="mt-6 border border-[#333] px-5 py-2 hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-all duration-300">
            [ RETURN TO DASHBOARD ]
          </a>
        </div>
      </div>

      {/* Hero Header */}
      <div className="relative z-10 px-6 md:px-12 mt-12 mb-20">
        <h1 className="text-[14vw] md:text-[160px] leading-[0.8] font-bold text-transparent text-outline-white tracking-tighter font-sans select-none">
          STuDiØ ZØ
        </h1>
        <div className="mt-6 flex items-center gap-4">
          {/* Gradient Line Accent */}
          <div className="h-[3px] w-32 bg-gradient-to-r from-[#FF3333] to-[#CCFF00]"></div>
          <span className="text-white font-bold tracking-[0.2em] uppercase text-sm md:text-base">
                // CØMMERCE
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="relative z-10 px-6 md:px-12 mb-12 flex gap-8 border-b border-[#222]">
        {['paintings', 'rezoed', 'prints'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${activeTab === tab
                ? 'text-[#CCFF00] border-b-2 border-[#CCFF00]'
                : 'text-[#555] hover:text-white'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="relative z-10 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16">
        {filteredItems.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            {/* Box */}
            <div className="aspect-square bg-[#111] border border-[#222] relative overflow-hidden transition-all duration-300 group-hover:border-[#CCFF00]">

              {/* ID Code */}
              <span className="absolute top-4 left-4 text-[#CCFF00] text-xs font-mono font-bold tracking-widest z-20">
                {item.code}
              </span>

              {/* Diagonal Watermark Text */}
              <div className="absolute inset-0 flex items-center justify-center z-10 opacity-100 group-hover:opacity-20 transition-opacity duration-300">
                <span className="text-4xl md:text-5xl font-black text-[#222] -rotate-45 whitespace-nowrap uppercase tracking-tighter select-none transform scale-125">
                  {item.title}
                </span>
              </div>

              {/* Image Reveal on Hover */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-normal z-0 grayscale group-hover:grayscale-0"
              />
            </div>

            {/* Meta Data */}
            <div className="flex justify-between items-baseline mt-4 border-b border-[#222] pb-2 group-hover:border-[#CCFF00] transition-colors duration-300">
              <h3 className="text-xl md:text-2xl font-bold uppercase text-white tracking-tight">{item.title}</h3>
              <span className="text-[#666] font-mono text-sm group-hover:text-[#CCFF00] transition-colors">${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};