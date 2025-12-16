import React from 'react';

interface MissionPageProps {
  onNavigate: (view: string) => void;
}

export const MissionPage: React.FC<MissionPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="max-w-4xl mx-auto">
        <span className="block text-sm font-bold uppercase tracking-[0.3em] text-[#999] mb-12">
          Mission
        </span>
        
        <h1 className="text-2xl md:text-3xl font-medium text-brand-dark mb-8 tracking-wide">
          Our mission statement:
        </h1>

        <div className="mb-12">
          <p className="text-6xl md:text-[clamp(60px,10vw,120px)] font-black tracking-[-0.04em] leading-[0.9] text-black">
            TO PAY<br />
            THE DØLLS
          </p>
        </div>

        <p className="text-3xl md:text-4xl font-serif italic text-[#666] mb-20">
          next question
        </p>

        <button 
          onClick={() => onNavigate('shop')}
          className="group text-xl font-bold uppercase tracking-[0.2em] border-b-2 border-brand-neon pb-2 hover:text-brand-dark hover:border-brand-dark transition-all"
        >
          shop now <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
        </button>
      </div>
    </div>
  );
};