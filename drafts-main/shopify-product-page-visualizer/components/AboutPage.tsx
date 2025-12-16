import React from 'react';

interface AboutPageProps {
  onNavigate?: (view: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="about-page bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-white to-brand-light py-20 px-6 text-center border-b border-brand-border">
        <p className="text-sm font-semibold text-brand-dark uppercase tracking-[2px] mb-4">The Founders</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">About PAY THE DØLLS™</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          PAY THE DØLLS™ was founded by <strong>Zoe Touloupis</strong> and <strong>Aria Brooks</strong> to create a marketplace that funds transgender artists, creators, and entrepreneurs.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-800 mb-8">
          We believe creative labor deserves real infrastructure—not charity, not grants, not waiting for permission.
        </p>
        <p className="text-lg text-gray-600">
          PAY THE DØLLS™ is a platform where trans and queer creators own their work, keep most of their revenue, and build sustainable businesses.
        </p>
      </div>

      {/* Founders Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">The Yin & Yang</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Two contrasting aesthetics, one shared mission. Our differences make us stronger.</p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Aria */}
          <div className="founder-card group">
            <div className="aspect-[3/4] overflow-hidden rounded-lg mb-6 bg-gray-100 relative">
              <img src="/images/aria.jpg" alt="Aria Brooks" className="w-full h-full object-cover transition-all duration-500" />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-900/90 to-transparent p-6">
                <p className="text-white text-sm font-bold uppercase tracking-widest">West Village Girl</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">Aria Brooks</h3>
            <p className="text-pink-600 font-semibold mb-3 uppercase text-sm tracking-wide">Co-Founder / Operations Lead</p>

            <p className="text-gray-700 leading-relaxed mb-4">Aria brings the polish. Soft pastels, thoughtful curation, and systems that actually work. Think: vintage boutiques, handwritten notes, editorial layouts, and making sure the infrastructure holds everything together beautifully.</p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wide rounded">Brutalist</span>
              <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wide rounded">Warehouse</span>
              <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wide rounded">Neon</span>
              <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wide rounded">DIY</span>
            </div>
          </div>

          {/* Zoe */}
          <div className="founder-card group">
            <div className="aspect-[3/4] overflow-hidden rounded-lg mb-6 bg-gray-100 relative">
              <img src="/images/zoe.jpg" alt="Zoe Touloupis" className="w-full h-full object-cover transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <p className="text-white text-sm font-bold uppercase tracking-widest">Warehouse Raves in Bushwick</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">Zoe Touloupis</h3>
            <p className="text-brand-dark font-semibold mb-3 uppercase text-sm tracking-wide">Co-Founder / Creative Director</p>

            <p className="text-gray-700 leading-relaxed mb-4">Zoe brings the edge. Industrial aesthetics, raw energy, and a refusal to play by the rules. Think: underground art installations, brutalist design, neon-lit chaos, and making things happen through sheer force of will.</p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-pink-500 text-white text-xs font-bold uppercase tracking-wide rounded">Soft</span>
              <span className="px-3 py-1 bg-pink-500 text-white text-xs font-bold uppercase tracking-wide rounded">Editorial</span>
              <span className="px-3 py-1 bg-pink-500 text-white text-xs font-bold uppercase tracking-wide rounded">Curated</span>
              <span className="px-3 py-1 bg-pink-500 text-white text-xs font-bold uppercase tracking-wide rounded">Precise</span>
            </div>
          </div>
        </div>

        {/* Contrast Statement */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-xl font-medium text-gray-800 mb-4">Zoe's warehouse raves meet Aria's West Village brunch spots.</p>
          <p className="text-lg text-gray-600">The contrast isn't just aesthetic—it's operational. One builds the chaos, the other builds the structure. Together, we build a platform that works.</p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-brand-light py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="font-bold text-lg mb-2">Creator-First</h3>
              <p className="text-gray-600 text-sm">70-80% revenue goes directly to creators. No exploitation, no extraction.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="font-bold text-lg mb-2">Capital Circulation</h3>
              <p className="text-gray-600 text-sm">20-30% flows to Verse Capital to fund the next creator. The ecosystem funds itself.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="font-bold text-lg mb-2">Infrastructure</h3>
              <p className="text-gray-600 text-sm">Not charity. Not grants. Real platforms, real revenue, real ownership.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-16 px-6">
        <p className="text-2xl font-medium mb-8">Want to be part of it?</p>
        <div className="flex gap-4 justify-center flex-wrap">
          {onNavigate && (
            <>
              <button onClick={() => onNavigate('submit')} className="bg-brand-neon text-black px-8 py-4 text-sm font-bold tracking-[1.5px] uppercase rounded transition-all duration-300 hover:bg-[#00dd77] hover:-translate-y-0.5 shadow-neon">Submit an Idea</button>
              <button onClick={() => onNavigate('product')} className="bg-transparent text-brand-dark border-2 border-brand-dark px-8 py-4 text-sm font-bold tracking-[1.5px] uppercase rounded transition-all duration-300 hover:bg-brand-dark hover:text-white">Shop the Platform</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};