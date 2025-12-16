import React, { useState } from 'react';

interface CollectionPageProps {
  onNavigate: (view: string) => void;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  // Mock collection data
  const products = [
    {
      id: 'shorts-01',
      title: 'Classic Stripe Trim Basketball Shorts',
      price: '$38.00',
      image: 'https://paythedolls.com/cdn/shop/files/79dc1ab5c42b45f3aec4dacb4dc071f0.png?v=1765779185&width=800',
      tag: 'BESTSELLER',
      category: 'Apparel'
    },
    {
      id: 'mug-001',
      title: 'Black Glossy Mug',
      price: '$25.00',
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=1000&auto=format&fit=crop',
      tag: 'OBJECTS',
      category: 'Objects'
    },
    {
      id: 'top-02',
      title: 'System Crash Crop Top',
      price: '$45.00',
      image: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1000&auto=format&fit=crop',
      tag: 'NEW ARRIVAL',
      category: 'Apparel'
    },
    {
      id: 'art-01',
      title: 'Entropy No. 5',
      price: '$1,200.00',
      image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop',
      tag: 'ART',
      category: 'Art'
    }
  ];

  const categories = ['ALL', 'Apparel', 'Objects', 'Art', 'Wellness'];

  const filteredProducts = activeCategory === 'ALL' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="pt-32 px-6 md:px-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">THE CØLLECTION</h1>
        <p className="text-[#666] tracking-[1px] uppercase text-xs md:text-sm mb-12">Season 03 — "Liquidity"</p>
        
        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 border-t border-b border-brand-border py-6">
            {categories.map(cat => (
                <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs md:text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-300
                        ${activeCategory === cat ? 'text-brand-dark underline decoration-brand-neon decoration-2 underline-offset-4' : 'text-[#999] hover:text-black'}
                    `}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-brand-border">
        {filteredProducts.map((product, index) => (
          <div 
            key={product.id}
            onClick={() => onNavigate('product')} // For demo, all click to the main detail page
            className={`group cursor-pointer border-b md:border-b-0 border-brand-border p-6 relative flex flex-col
              ${index !== filteredProducts.length - 1 ? 'lg:border-r' : ''}
              ${index % 2 === 0 ? 'md:border-r' : ''}
            `}
          >
            <div className="aspect-[3/4] bg-[#f8f8f8] mb-6 overflow-hidden relative">
               <img 
                 src={product.image} 
                 alt={product.title}
                 className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
               />
               <span className="absolute top-4 left-4 bg-brand-dark text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                 {product.tag}
               </span>
            </div>

            <div className="mt-auto">
              <h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-brand-neon transition-colors">{product.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-sm font-mono text-[#666]">{product.price}</span>
                <span className="text-xs font-bold uppercase tracking-widest border-b border-black pb-0.5 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  View Item
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};