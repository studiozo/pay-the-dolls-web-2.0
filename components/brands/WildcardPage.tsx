import React from 'react';

interface WildcardPageProps {
  onNavigate?: (view: string) => void;
}

export const WildcardPage: React.FC<WildcardPageProps> = ({ onNavigate }) => {
  const items = [
    { id: 'w1', title: 'Lucky Charm', price: '$42', img: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1400&auto=format&fit=crop' },
    { id: 'w2', title: 'Mystery Box', price: '$99', img: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=1400&auto=format&fit=crop' }
  ];

  return (
    <div className="wildcard-page max-w-[1200px] mx-auto py-20 px-6 md:px-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Wildcard Magic Items</h1>
        <p className="text-lg text-gray-600 mt-4">Artifacts for the digital age — curious, strange, delightful.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((it) => (
          <div key={it.id} className="border border-brand-border rounded overflow-hidden bg-white">
            <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${it.img})` }} />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{it.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{it.price}</p>
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