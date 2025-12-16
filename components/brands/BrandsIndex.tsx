import React from 'react';

interface Brand {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  logoText: string;
  heroImage: string;
  aesthetic: 'neon' | 'minimal' | 'wild';
  externalUrl?: string;
}

interface BrandsIndexProps {
  onNavigate: (view: string) => void;
}

export const BrandsIndex: React.FC<BrandsIndexProps> = ({ onNavigate }) => {
  const brands: Brand[] = [
    {
      id: 'ptd',
      name: 'PAY THE DØLLS™',
      slug: 'pay-the-dolls',
      tagline: 'Cultural Commerce Platform',
      description: 'The house brand. Essentials for the girls, by the girls.',
      logoText: 'PTD™',
      heroImage: 'https://paythedolls.com/cdn/shop/files/79dc1ab5c42b45f3aec4dacb4dc071f0.png?v=1765779185&width=800',
      aesthetic: 'neon'
    },
    {
      id: 'studio-zo',
      name: 'STuDiØ ZØ Print Lab',
      slug: 'studio-zo',
      tagline: "We're Printing Money",
      description: 'Art prints, merch, and limited drops from the lab.',
      logoText: 'ZØ',
      heroImage: 'https://images.unsplash.com/photo-1544211086-635e957388d0?q=80&w=2787&auto=format&fit=crop',
      aesthetic: 'minimal'
    },
    {
      id: 'cool-transgirl',
      name: 'Cool Transgirl',
      slug: 'cool-transgirl',
      tagline: 'Cute, Cheeky, Unapologetic',
      description: 'Apparel and accessories for the girls who get it.',
      logoText: 'CTG',
      heroImage: 'https://images.unsplash.com/photo-1485518882345-15568b28e4f3?q=80&w=2787&auto=format&fit=crop',
      aesthetic: 'neon',
      externalUrl: 'https://cooltransgirl.com'
    },
    {
      id: 'wildcard',
      name: 'Wildcard Magic Items',
      slug: 'wildcard',
      tagline: 'Artifacts for the Digital Age',
      description: 'Objects of power, curiosity, and indeterminate function.',
      logoText: 'WMI',
      heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
      aesthetic: 'wild'
    }
  ];

  const handleBrandClick = (brand: Brand) => {
    // Prefer internal brand pages where available
    if (brand.id === 'studio-zo') {
      onNavigate('brand-studio-zo');
    } else if (brand.id === 'ptd') {
      onNavigate('brand-ptd');
    } else if (brand.id === 'cool-transgirl') {
      onNavigate('brand-cooltransgirl');
    } else if (brand.id === 'wildcard') {
      onNavigate('brand-wildcard');
    } else if (brand.externalUrl) {
      window.open(brand.externalUrl, '_blank');
    } else {
      alert('Coming Soon');
    }
  };

  return (
    <div className="brands-index max-w-[1400px] mx-auto py-20 px-6 md:px-12">
      <header className="mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">THE CØLLECTIVE</h1>
        <p className="text-brand-dark/60 max-w-2xl mx-auto text-lg font-light">
          A federation of independent creative houses operating under the Pay The DØLLS protocol.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {brands.map((brand) => (
          <div 
            key={brand.id}
            onClick={() => handleBrandClick(brand)}
            className="group cursor-pointer relative aspect-[3/4] overflow-hidden border border-brand-border bg-brand-light transition-all hover:shadow-neon duration-500"
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-90"
                 style={{ backgroundImage: `url(${brand.heroImage})` }}
            />
            
            {/* Overlay */}
            <div className={`absolute inset-0 transition-opacity duration-300 opacity-20 group-hover:opacity-10 
              ${brand.aesthetic === 'neon' ? 'bg-brand-neon' : 'bg-black'}
            `}></div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent">
              <div className="text-xl font-bold tracking-widest border-b border-white/20 pb-2 w-fit">
                {brand.logoText}
              </div>
              
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h2 className="text-3xl font-bold mb-2">{brand.name}</h2>
                <p className="text-sm font-light opacity-90 mb-4">{brand.tagline}</p>
                <span className="inline-block px-4 py-2 border border-white/40 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
                  {brand.externalUrl ? 'Visit Site' : 'Enter Shop'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};