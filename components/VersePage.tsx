import React from 'react';

export const VersePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-black font-sans">
      {/* Header */}
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-[1200px] mx-auto border-b border-brand-border">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#999] block mb-4">Protocol V3.0</span>
        
        {/* Updated Typography to 'Thesis Font' (Outlined Black on White) */}
        <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tight text-transparent text-outline-black leading-[0.8] mb-8">
          VERSE CAPITAL
        </h1>
        
        <p className="text-xl md:text-2xl leading-relaxed max-w-2xl text-[#333]">
          We will provide autonomous grants, inventory financing, and cultural underwriting for creators.
        </p>
      </div>

      {/* Stats Grid - Stripped Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-brand-border">
        <div className="p-12 border-b md:border-b-0 md:border-r border-brand-border min-h-[200px] flex flex-col justify-between">
          <span className="block text-xs font-mono uppercase text-[#666]">Total Volume</span>
          {/* STRIPPED */}
          <span className="text-4xl font-mono font-bold text-brand-dark opacity-10">// ---</span>
        </div>
        <div className="p-12 border-b md:border-b-0 md:border-r border-brand-border min-h-[200px] flex flex-col justify-between">
          <span className="block text-xs font-mono uppercase text-[#666]">Active Grants</span>
          {/* STRIPPED */}
          <span className="text-4xl font-mono font-bold text-brand-dark opacity-10">// ---</span>
        </div>
        <div className="p-12 min-h-[200px] flex flex-col justify-between">
          <span className="block text-xs font-mono uppercase text-[#666]">First Filing</span>
          <span className="text-3xl font-mono font-bold text-brand-dark">Q1 / 2026, allegedly.</span>
        </div>
      </div>

      {/* Manifesto / Portfolio - BLANK / STRUCTURAL ONLY */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
        <div className="bg-brand-dark text-white p-12 md:p-24 flex flex-col justify-start">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-6 border-b border-white/20 pb-4 inline-block w-full">The Thesis</h2>
          {/* Blank space for 'Antigravity' feel */}
          <div className="flex-grow flex items-end opacity-50 font-mono text-xs">
             // [REDACTED]
          </div>
        </div>
        <div className="p-12 md:p-24 bg-[#F5F5F5] flex flex-col justify-start">
           <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-8 text-[#999] border-b border-black/10 pb-4">Portfolio (STILL PRE-OP)</h3>
           {/* Blank space for 'Antigravity' feel */}
           <div className="flex-grow flex items-end opacity-50 font-mono text-xs">
             // [AWAITING_DEPLOYMENT]
           </div>
        </div>
      </div>
    </div>
  );
};