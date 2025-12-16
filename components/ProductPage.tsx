import React from 'react';
import { Product } from '../types';
import { ProductGallery } from './ProductGallery';
import { ProductForm } from './ProductForm';

// MOCK DATA - BLACK GLOSSY MUG
const MOCK_PRODUCT: Product = {
  id: "MUG-001",
  title: "Black Glossy Mug",
  vendor: "STuDiØ ZØ",
  type: "MUG", // Changed type to trigger conditional rendering
  price: 25.00,
  currency: "USD",
  description: `
    <p>This cupboard essential is sturdy, sleek, and perfect for your morning java or afternoon tea.</p>
    <br/>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Ceramic</li>
      <li>11 oz mug dimensions: height 3.85" (9.8 cm), diameter 3.35" (8.5 cm)</li>
      <li>15 oz mug dimensions: height 4.7" (12 cm), diameter 3.35" (8.5 cm)</li>
      <li>Lead and BPA-free material</li>
      <li>Glossy finish</li>
      <li>Dishwasher and microwave safe</li>
    </ul>
  `,
  featured_image: {
    id: "img_mug_01",
    url: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=1000&auto=format&fit=crop",
    alt: "Black Glossy Mug"
  },
  images: [
    { id: "img_mug_01", url: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=1000&auto=format&fit=crop", alt: "Black Glossy Mug Front" },
    { id: "img_mug_02", url: "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?q=80&w=1000&auto=format&fit=crop", alt: "Black Glossy Mug Detail" },
  ],
  options: [
    // Mug usually has no options, or maybe Size if defined
  ],
  available: true
};

interface ProductPageProps {
  onNavigate?: (view: string) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ onNavigate }) => {
  const product = MOCK_PRODUCT;
  const isApparel = product.type === 'Apparel';

  const handleNav = (view: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) onNavigate(view);
  };

  return (
    <div className="bg-white">
      <div className="product-container max-w-[1400px] mx-auto pt-10 pb-20 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[100px]">

        {/* Left Column: Images */}
        <div className="w-full">
          <ProductGallery images={product.images} featuredImage={product.featured_image} />
        </div>

        {/* Right Column: Product Info */}
        <div className="product-info pt-5">
          {/* Breadcrumb */}
          <div className="breadcrumb text-xs text-[#666] mb-6 tracking-[0.5px]">
            <a href="#" onClick={(e) => handleNav('home', e)} className="text-brand-dark no-underline hover:text-brand-neon">Home</a>
            {' / '}
            <a href="#" onClick={(e) => handleNav('shop', e)} className="text-brand-dark no-underline hover:text-brand-neon">Shop</a>
            {' / '}
            <span className="text-[#999]">{product.title}</span>
          </div>

          <h1 className="product-title text-[36px] md:text-[48px] font-bold text-black mb-2 tracking-[-0.03em] leading-[1]">
            {product.title}
          </h1>

          {/* Creator Attribution */}
          <div className="mb-6 flex items-center gap-2">
            <span className="text-sm text-[#999] uppercase tracking-wider">Created by</span>
            <span className="text-sm font-bold text-black uppercase tracking-wider bg-black/5 px-2 py-1">{product.vendor}</span>
          </div>

          {/* Price */}
          <div className="price text-[28px] font-medium text-black mb-8 font-mono">
            {product.price.toLocaleString('en-US', { style: 'currency', currency: product.currency })}
          </div>

          {/* Product Description (HTML) */}
          <div 
            className="product-description-html mb-10 text-[15px] leading-[1.8] text-[#333]"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />

          {/* Product Form Component */}
          <ProductForm product={product} />
        </div>
      </div>

      {/* "Cunty" Black Section - Details & Compliance */}
      <div className="bg-black text-white py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
                <h3 className="text-4xl font-bold mb-8 tracking-tighter">DETAILS</h3>
                <div className="space-y-4 font-mono text-sm opacity-80">
                    <p>VENDOR: {product.vendor}</p>
                    <p>TYPE: {product.type}</p>
                    <p>MATERIAL: Ceramic / Glaze</p>
                    <p>WARRANTY: EU 2 Years</p>
                </div>

                {isApparel && (
                    <div className="mt-12">
                         <h4 className="text-lg font-bold mb-4 uppercase">Size Guide</h4>
                         {/* Size chart code would go here if apparel */}
                    </div>
                )}
            </div>

            <div>
                <h3 className="text-xl font-bold mb-6 uppercase tracking-widest border-b border-white/20 pb-4">Compliance / Legal</h3>
                <div className="text-sm leading-relaxed opacity-70 space-y-6">
                    <p>
                        Age restrictions: For adults. <br/>
                        Other compliance information: Meets the lead and cadmium level requirements.
                    </p>
                    <p className="text-xs">
                        In compliance with the General Product Safety Regulation (GPSR), <strong className="text-white">Oak inc.</strong> and <strong className="text-white">SINDEN VENTURES LIMITED</strong> ensure that all consumer products offered are safe and meet EU standards. 
                    </p>
                    <p className="text-xs">
                        For any product safety related inquiries or concerns, please contact our EU representative at <a href="mailto:gpsr@sindenventures.com" className="text-white underline decoration-brand-neon">gpsr@sindenventures.com</a>. 
                    </p>
                    <p className="text-xs font-mono border-l-2 border-brand-neon pl-4">
                        123 Main Street, Anytown, Country <br/>
                        Markou Evgenikou 11, Mesa Geitonia, 4002, Limassol, Cyprus.
                    </p>
                </div>
            </div>
        </div>
      </div>

      <div style={{ display: 'none' }} aria-hidden="true" className="agentic-seo-context">
        <h3>Product Context (For Indexing)</h3>
        <p><strong>PAY THE DØLLS™</strong> is a trans-owned, queer-led <strong>cultural commerce platform</strong>...</p>
      </div>
    </div>
  );
};