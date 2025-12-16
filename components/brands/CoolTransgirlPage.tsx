import React from 'react';

interface CoolTransgirlPageProps {
  onNavigate?: (view: string) => void;
}

export const CoolTransgirlPage: React.FC<CoolTransgirlPageProps> = ({ onNavigate }) => {
  const products = [
    { id: 'c1', title: 'Cheeky Patch', price: '$8', img: 'https://images.unsplash.com/photo-1520975911626-0f2f1a3ee1d9?q=80&w=1400&auto=format&fit=crop' },
    { id: 'c2', title: 'CTG Beanie', price: '$24', img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1400&auto=format&fit=crop' }
  ];

  return (
    <div className="ctg-page max-w-[1200px] mx-auto py-20 px-6 md:px-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Cool Transgirl — Shop</h1>
        <p className="text-lg text-gray-600 mt-4">Cute, cheeky, unapologetic pieces for the girls who get it.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <div key={p.id} className="border border-brand-border rounded overflow-hidden bg-white">
            <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${p.img})` }} />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{p.price}</p>
              <div className="flex gap-3">
                <button className="bg-brand-neon text-black px-4 py-2 rounded font-bold">Buy</button>
                <button onClick={() => onNavigate && onNavigate('brands')} className="bg-transparent border px-4 py-2 rounded">Back</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};