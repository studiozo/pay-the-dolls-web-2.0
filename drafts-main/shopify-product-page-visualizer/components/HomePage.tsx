import React from 'react';

interface HomePageProps {
  onNavigate: (view: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="homepage-v3">
      {/* HERO SECTION */}
      {/* Reverted background to clean white, removed mint gradients */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 md:px-12 bg-white relative">
        
        {/* Gradient Logo Headline: Dark Green -> Neon Green */}
        <h1 className="text-5xl md:text-[clamp(36px,5vw,72px)] font-extrabold tracking-[-1px] leading-[1.1] mb-6 bg-gradient-to-br from-brand-dark via-[#00d070] to-brand-neon bg-clip-text text-transparent pb-2 drop-shadow-sm">
          PAY THE DØLLS™
        </h1>
        
        <p className="text-2xl md:text-[clamp(22px,3.5vw,36px)] font-semibold text-brand-dark mb-4 tracking-[0.5px]">
          Like Amazon, but for DØLLs
        </p>
        <p className="text-base md:text-[clamp(15px,1.8vw,20px)] text-[#666] max-w-[680px] mx-auto mb-14 leading-[1.8]">
          Cultural commerce, routed correctly.
        </p>

        <div className="flex gap-4 flex-wrap justify-center relative z-10 w-full md:w-auto">
          <button
            onClick={() => onNavigate('product')}
            className="w-full md:w-auto bg-brand-neon text-black px-11 py-5 text-[13px] font-bold tracking-[1.5px] uppercase rounded-[2px] transition-all duration-300 hover:bg-[#00dd77] hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(0,255,136,0.2)] hover:shadow-[0_6px_28px_rgba(0,255,136,0.3)] border-none cursor-pointer"
          >
            Shop Now
          </button>
          <button
            onClick={() => onNavigate('brands')}
            className="w-full md:w-auto bg-transparent text-brand-dark border-[1.5px] border-brand-dark px-11 py-5 text-[13px] font-bold tracking-[1.5px] uppercase rounded-[2px] transition-all duration-300 hover:bg-brand-dark hover:text-white hover:-translate-y-0.5 cursor-pointer"
          >
            View Brands
          </button>
        </div>
      </section>

      {/* EXPLAINER SECTION */}
      <section className="py-24 px-12 text-center max-w-[900px] mx-auto">
        <h2 className="text-[clamp(24px,3vw,32px)] font-bold text-black mb-6">
          PAY THE DØLLS™ is a trans-owned cultural commerce platform.
        </h2>
        <p className="text-[clamp(18px,2vw,24px)] leading-[1.8] text-[#555]">
          We create products, objects, and brands that move capital directly to creators.
        </p>
        <p className="mt-6 text-[clamp(18px,2vw,24px)] leading-[1.8] text-[#555] font-semibold">
          Buy something. Participate.
        </p>
      </section>

      {/* QUICK INDEX GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[50vh] border-t border-brand-border">
        {[
          { title: 'SHOP', sub: 'Browse products', view: 'product' },
          { title: 'BRANDS', sub: 'View brand system', view: 'brands' },
          { title: 'VERSE CAP', sub: 'How capital flows', view: 'mission' },
          { title: 'SUBMIT', sub: 'Bring us ideas', view: 'submit' }
        ].map((item) => (
          <div
            key={item.title}
            onClick={() => onNavigate(item.view)}
            className="group flex flex-col justify-between p-10 border-b md:border-b-0 md:border-r border-brand-border transition-all duration-400 hover:bg-brand-light cursor-pointer relative"
          >
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-brand-dark">{item.title}</h3>
              <span className="text-sm text-[#666] tracking-wide uppercase">{item.sub}</span>
            </div>
            <div className="text-3xl font-light text-brand-dark mt-8 transition-transform duration-300 group-hover:translate-x-2">→</div>
          </div>
        ))}
      </section>
    </div>
  );
};