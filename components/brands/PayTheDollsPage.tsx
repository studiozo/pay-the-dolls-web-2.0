import React from 'react';

interface PayTheDollsPageProps {
  onNavigate?: (view: string) => void;
}

export const PayTheDollsPage: React.FC<PayTheDollsPageProps> = ({ onNavigate }) => {
  const products = [
    { id: '1', title: 'PTD Logo Tee', price: '$28', image: 'https://images.unsplash.com/photo-1520975911626-0f2f1a3ee1d9?q=80&w=1400&auto=format&fit=crop' },
    { id: '2', title: 'PTD Tote Bag', price: '$18', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop' },
    { id: '3', title: 'Neon Logo Patch', price: '$6', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop' }
  ];

  return (
    <div className="ptd-page max-w-[1200px] mx-auto py-20 px-6 md:px-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">PAY THE DØLLS™ — Merch</h1>
        <p className="text-lg text-gray-600 mt-4">The house brand shop. Support creators.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <div key={p.id} className="border border-brand-border rounded overflow-hidden bg-white">
            <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
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

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Sub-brands</h2>
        <p className="text-gray-600">This area can list merch lines or smaller sub-brands within Pay The DØlls.</p>
      </section>
    </div>
  );
};