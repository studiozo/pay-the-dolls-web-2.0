import React from 'react';

export const SubmitPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="max-w-2xl mx-auto py-24 px-6">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">SUBMIT YOUR BRAND</h1>
          <p className="text-[#666] leading-relaxed">
            The DØLLS ecosystem is invite-only, but we are always watching. <br/>
            Drop a link. If we like it, we will find you.
          </p>
        </header>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-[1px] text-brand-dark">Brand Name</label>
              <input type="text" className="w-full border-b border-[#ccc] py-3 text-lg outline-none focus:border-brand-neon bg-transparent transition-colors" placeholder="Enter name" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-[1px] text-brand-dark">Website / IG</label>
              <input type="text" className="w-full border-b border-[#ccc] py-3 text-lg outline-none focus:border-brand-neon bg-transparent transition-colors" placeholder="@handle" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-[1px] text-brand-dark">The Pitch (140 Characters)</label>
            <textarea className="w-full border-b border-[#ccc] py-3 text-lg outline-none focus:border-brand-neon bg-transparent transition-colors min-h-[100px] resize-none" placeholder="What makes it cultural infrastructure?"></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-[1px] text-brand-dark">Aesthetic Category</label>
            <div className="flex gap-4 mt-2">
               {['Neon', 'Minimal', 'Wild', 'Gothic'].map(cat => (
                 <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                   <input type="radio" name="aesthetic" className="accent-brand-dark" />
                   <span className="text-sm text-[#666] group-hover:text-black transition-colors">{cat}</span>
                 </label>
               ))}
            </div>
          </div>

          <div className="pt-8 text-center">
            <button className="bg-black text-white px-12 py-5 text-sm font-bold uppercase tracking-[2px] hover:bg-brand-neon hover:text-black transition-all duration-300">
              Transmit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};