import React from 'react';
import { Product } from '../types';

interface CollectionsPageProps {
  onSelectProduct: (product: Product) => void;
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: 'RP0002',
    title: 'Classic Stripe Trim Basketball Shorts',
    vendor: 'STuDiØ ZØ',
    type: 'Apparel',
    price: 38.0,
    currency: 'USD',
    description: 'Basketball shorts that actually understand the assignment.',
    featured_image: {
      id: 'img_01',
      url: 'https://paythedolls.com/cdn/shop/files/79dc1ab5c42b45f3aec4dacb4dc071f0.png?v=1765779185&width=1200',
      alt: 'Classic Stripe Trim Basketball Shorts'
    },
    images: [
      { id: 'img_01', url: 'https://paythedolls.com/cdn/shop/files/79dc1ab5c42b45f3aec4dacb4dc071f0.png?v=1765779185&width=1200', alt: 'View 1' },
      { id: 'img_02', url: 'https://paythedolls.com/cdn/shop/files/88505ee8ba4744a9a0a5b69d36586a45.png?v=1765779185&width=1200', alt: 'View 2' }
    ],
    options: [
      { name: 'Color', values: ['Black'] },
      { name: 'Size', values: ['S', 'M', 'L', 'XL'] }
    ],
    available: true
  },
  {
    id: 'RP0003',
    title: 'Rezoed Canvas Tote',
    vendor: 'Wildcard Magic Items',
    type: 'Accessory',
    price: 22.0,
    currency: 'USD',
    description: 'A sturdy tote, printed with whatever we felt like printing that day.',
    featured_image: {
      id: 'img_11',
      url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
      alt: 'Canvas Tote'
    },
    images: [],
    options: [],
    available: true
  }
];

export const CollectionsPage: React.FC<CollectionsPageProps> = ({ onSelectProduct }) => {
  return (
    <div className="collections max-w-[1400px] mx-auto py-20 px-6 md:px-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">SHOP</h1>
        <p className="text-brand-dark/60">Browse all products — like /collections on the live site.</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {MOCK_PRODUCTS.map((p) => (
          <div
            key={p.id}
            className="product-card bg-white border border-brand-border rounded overflow-hidden cursor-pointer hover:shadow-neon transition-all"
            onClick={() => onSelectProduct(p)}
          >
            <div className="aspect-[4/3] bg-brand-light">
              <img src={p.featured_image.url} alt={p.featured_image.alt} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
              <div className="text-sm text-[#666] mb-2">{p.vendor}</div>
              <div className="text-base font-bold">{p.price.toLocaleString('en-US', { style: 'currency', currency: p.currency })}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
