import React from 'react';

interface MissionPageProps {
  onNavigate: (view: string) => void;
}

export const MissionPage: React.FC<MissionPageProps> = ({ onNavigate }) => {
  return (
    <div className="mission-page min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white">
      {/* Logo/Brand */}
      <h1 className="text-[clamp(48px,8vw,96px)] font-extrabold tracking-[-2px] leading-[0.9] mb-16 bg-gradient-to-br from-brand-dark via-[#00d070] to-brand-neon bg-clip-text text-transparent text-center">
        PAY THE DØLLS™
      </h1>

      {/* Mission Statement Label */}
      <p className="text-sm font-semibold text-brand-dark uppercase tracking-[2px] mb-6">
        Our Mission Statement
      </p>

      {/* The Mission */}
      <p className="text-[clamp(32px,5vw,64px)] font-light italic text-center max-w-4xl mb-20 leading-[1.2] text-black">
        To pay the dolls.
      </p>

      {/* Next Question */}
      <p className="text-2xl md:text-3xl font-medium text-black mb-12">
        Next question?
      </p>

      {/* CTA */}
      <button
        onClick={() => onNavigate('product')}
        className="bg-brand-neon text-black px-12 py-6 text-sm font-bold tracking-[1.5px] uppercase rounded-sm transition-all duration-300 hover:bg-[#00dd77] hover:-translate-y-1 shadow-neon hover:shadow-neon-hover"
      >
        Shop Now
      </button>
    </div>
  );
};