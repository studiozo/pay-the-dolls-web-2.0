import React from 'react';
import { Product } from '../types';
import { ProductGallery } from './ProductGallery';
import { ProductForm } from './ProductForm';

// MOCK DATA matching the HTML provided
const MOCK_PRODUCT: Product = {
  id: "RP0002",
  title: "Classic Stripe Trim Basketball Shorts",
  vendor: "STuDiØ ZØ",
  type: "Apparel",
  price: 38.00,
  currency: "USD",
  // The 'description' field here handles the simple text, but we'll use custom rendering for the specific layout
  description: "Basketball shorts that actually understand the assignment.",
  featured_image: {
    id: "img_01",
    url: "https://paythedolls.com/cdn/shop/files/79dc1ab5c42b45f3aec4dacb4dc071f0.png?v=1765779185&width=1200",
    alt: "Classic Stripe Trim Basketball Shorts"
  },
  images: [
    { id: "img_01", url: "https://paythedolls.com/cdn/shop/files/79dc1ab5c42b45f3aec4dacb4dc071f0.png?v=1765779185&width=1200", alt: "View 1" },
    { id: "img_02", url: "https://paythedolls.com/cdn/shop/files/88505ee8ba4744a9a0a5b69d36586a45.png?v=1765779185&width=1200", alt: "View 2" },
    // Fillers for grid visualization
    { id: "img_03", url: "https://paythedolls.com/cdn/shop/files/79dc1ab5c42b45f3aec4dacb4dc071f0.png?v=1765779185&width=1200", alt: "View 3" },
    { id: "img_04", url: "https://paythedolls.com/cdn/shop/files/88505ee8ba4744a9a0a5b69d36586a45.png?v=1765779185&width=1200", alt: "View 4" },
  ],
  options: [
    { name: "Color", values: ["Black"] },
    { name: "Size", values: ["S", "M", "L", "XL", "2XL", "3XL"] }
  ],
  available: true
};

export const ProductPage: React.FC = () => {
  const product = MOCK_PRODUCT;

  return (
    <div className="product-container max-w-[1400px] mx-auto my-20 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[100px]">
      
      {/* Left Column: Images */}
      <div className="w-full">
        <ProductGallery images={product.images} featuredImage={product.featured_image} />
      </div>

      {/* Right Column: Product Info */}
      <div className="product-info pt-5">
        {/* Breadcrumb */}
        <div className="breadcrumb text-xs text-[#666] mb-6 tracking-[0.5px]">
          <a href="/" className="text-brand-dark no-underline hover:text-brand-neon">Home</a> / <a href="/collections" className="text-brand-dark no-underline hover:text-brand-neon">Shop</a> / <a href="/collections/apparel" className="text-brand-dark no-underline hover:text-brand-neon">Apparel</a> / {product.title}
        </div>

        <h1 className="product-title text-[32px] md:text-[42px] font-semibold text-black mb-5 tracking-[-0.02em] leading-[1.1]">
          {product.title}
        </h1>

        {/* Creator Attribution */}
        <div className="creator-badge inline-flex items-center gap-2 px-4 py-2.5 mb-8 rounded bg-[rgba(0,255,136,0.08)] border border-[rgba(0,255,136,0.2)] text-sm font-medium cursor-pointer hover:bg-[rgba(0,255,136,0.12)] hover:border-[rgba(0,255,136,0.3)] transition-all">
          <span className="text-black">Created by</span>
          <span className="creator-name text-brand-dark font-semibold">{product.vendor}</span>
        </div>

        {/* Price */}
        <div className="price text-[32px] font-semibold text-black mb-8">
          {product.price.toLocaleString('en-US', { style: 'currency', currency: product.currency })}
        </div>

        {/* Product Tagline (Description) */}
        <div className="product-tagline mb-10 p-6 bg-brand-light border-l-[3px] border-brand-neon rounded text-[15px] leading-[1.8] text-[#333]">
          <p>Basketball shorts that actually understand the assignment. Loose enough to move, tight enough at the waist to hold your phone while you're ignoring texts from your ex. Side stripes for visual interest. Drawstring because we're not animals. Polyester that breathes. Unisex sizing that makes sense.</p>
          <p className="mt-4">Wear them to the gym, the bodega, or to brunch when you're too tired to pretend you tried. They work everywhere because caring is exhausting.</p>
        </div>

        {/* Product Form Component */}
        <ProductForm product={product} />

        {/* Product Details Section */}
        <div className="product-description border-t border-brand-border pt-10">
          
          <div className="description-section mb-8">
            <h3 className="text-base font-semibold text-brand-dark mb-4 uppercase tracking-[1px]">Details</h3>
            <ul className="list-none p-0 text-[15px] leading-[1.8] text-[#555]">
              <li className="py-1"><strong>Item Number:</strong> RP0002</li>
              <li className="py-1"><strong>Fabric:</strong> 100% Polyester</li>
              <li className="py-1"><strong>Weight:</strong> 4.7 oz/yd² (160 g/m²)</li>
              <li className="py-1"><strong>Fit:</strong> Loose, relaxed</li>
              <li className="py-1"><strong>Features:</strong> Drawstring waist, side pockets</li>
            </ul>
          </div>

          <div className="description-section mb-8">
            <h3 className="text-base font-semibold text-brand-dark mb-4 uppercase tracking-[1px]">Care Instructions</h3>
            <ul className="list-none p-0 text-[15px] leading-[1.8] text-[#555]">
              <li className="py-1">Machine wash at 30°C (gentle cycle)</li>
              <li className="py-1">Do not bleach</li>
              <li className="py-1">Tumble dry low</li>
              <li className="py-1">Iron at low temperature, avoid ironing on print</li>
              <li className="py-1">Do not dry clean</li>
            </ul>
          </div>

          <div className="description-section mb-8">
            <h3 className="text-base font-semibold text-brand-dark mb-4 uppercase tracking-[1px]">Size Chart</h3>
            <div className="size-chart overflow-x-auto mt-6">
              <table className="w-full border-collapse text-[13px]">
                <thead>
                  <tr>
                    <th className="p-3 text-left border border-brand-border bg-brand-light font-semibold text-brand-dark">Size</th>
                    <th className="p-3 text-left border border-brand-border bg-brand-light font-semibold text-brand-dark">Length (in/cm)</th>
                    <th className="p-3 text-left border border-brand-border bg-brand-light font-semibold text-brand-dark">Waist (in/cm)</th>
                    <th className="p-3 text-left border border-brand-border bg-brand-light font-semibold text-brand-dark">Hip (in/cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: 'S', length: '18.1 / 46', waist: '11.8 / 30', hip: '20.5 / 52' },
                    { size: 'M', length: '18.9 / 48', waist: '12.2 / 31', hip: '21.3 / 54' },
                    { size: 'L', length: '19.7 / 50', waist: '12.6 / 32', hip: '22.0 / 56' },
                    { size: 'XL', length: '20.5 / 52', waist: '13.0 / 33', hip: '22.8 / 58' },
                    { size: '2XL', length: '21.3 / 54', waist: '13.4 / 34', hip: '23.6 / 60' },
                    { size: '3XL', length: '22.0 / 56', waist: '13.8 / 35', hip: '24.4 / 62' },
                  ].map((row) => (
                    <tr key={row.size}>
                      <td className="p-3 border border-brand-border text-[#555] font-bold">{row.size}</td>
                      <td className="p-3 border border-brand-border text-[#555]">{row.length}</td>
                      <td className="p-3 border border-brand-border text-[#555]">{row.waist}</td>
                      <td className="p-3 border border-brand-border text-[#555]">{row.hip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      {/* Invisible SEO Layer */}
      <div style={{ display: 'none' }} aria-hidden="true" className="agentic-seo-context">
        <h3>Product Context (For Indexing)</h3>
        <p><strong>PAY THE DØLLS™</strong> is a trans-owned, queer-led <strong>cultural commerce platform</strong>...</p>
      </div>
    </div>
  );
};