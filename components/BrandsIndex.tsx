import React from 'react';
import { Brand } from '../types';

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
      name: 'STuDiØ ZØ',
      slug: 'studio-zo',
      tagline: 'Art. Design. Entropy.',
      description: 'Paintings, Rezoed works, and Fine Art Prints.',
      logoText: 'ZØ',
      heroImage: 'https://images.unsplash.com/photo-1544211086-635e957388d0?q=80&w=2787&auto=format&fit=crop',
      aesthetic: 'minimal'
    },
    {
      id: 'cooltransgirl',
      name: 'Cool Trans Girl',
      slug: 'cool-trans-girl',
      tagline: 'The Baddie Baseline',
      description: 'Digital resources and lifestyle guidance by Aria.',
      logoText: 'CTG',
      heroImage: 'https://images.unsplash.com/photo-1599693976690-09384777a28e?q=80&w=2000&auto=format&fit=crop',
      aesthetic: 'wild'
    },
    {
      id: 'xenolith',
      name: 'XENOLITH™',
      slug: 'xenolith',
      tagline: 'Hyper-Structure Apparel',
      description: 'Clothing for the post-anthropocene.',
      logoText: 'XEN',
      heroImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2583&auto=format&fit=crop',
      aesthetic: 'minimal'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-black">
      <div className="brands-index max-w-[1400px] mx-auto py-32 px-6 md:px-12">
        <header className="mb-24 text-center">
          <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tight mb-6">
            THE CØLLECTIVE
          </h1>
          <p className="text-[#666] max-w-2xl mx-auto text-lg font-light">
            A federation of independent creative houses operating under the Pay The DØLLS protocol.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-brand-border">
          {brands.map((brand) => (
            <div 
              key={brand.id}
              onClick={() => {
                if (brand.id === 'studio-zo') onNavigate('brand-studio-zo');
                else if (brand.id === 'cooltransgirl') onNavigate('brand-cooltransgirl');
                else if (brand.id === 'ptd') onNavigate('product'); 
                else alert('Coming Soon');
              }}
              className="group cursor-pointer relative aspect-[3/4] overflow-hidden border-r border-b border-brand-border bg-white transition-all duration-300 hover:shadow-xl"
            >
              {/* Background Image - Fades IN on hover */}
              <div className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-0 group-hover:opacity-100"
                   style={{ backgroundImage: `url(${brand.heroImage})` }}
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 transition-colors duration-300 group-hover:text-white">
                <div className="text-xl font-bold tracking-widest border-b border-current pb-2 w-fit">
                  {brand.logoText}
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h2 className="text-2xl font-bold mb-2 uppercase tracking-tighter">{brand.name}</h2>
                  <p className="text-xs font-mono opacity-70 mb-4 group-hover:opacity-90">{brand.tagline}</p>
                  <span className="inline-block px-4 py-2 border border-current text-[10px] tracking-widest uppercase transition-colors hover:bg-white hover:text-black">
                    Enter Shop
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};