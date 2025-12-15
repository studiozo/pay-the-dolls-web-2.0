import React, { useState } from 'react';
import { ProductImage } from '../types';

interface ProductGalleryProps {
  images: ProductImage[];
  featuredImage: ProductImage;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, featuredImage }) => {
  const [activeImage, setActiveImage] = useState<string>(featuredImage.url);

  return (
    <div className="product-images flex flex-col gap-4 sticky top-[120px]">
      <div className="main-image w-full aspect-square bg-brand-light border border-brand-border rounded overflow-hidden mb-4">
        <img
          src={activeImage}
          alt="Product Main"
          id="MainImage"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="thumbnail-grid grid grid-cols-4 gap-3">
        {images.map((image) => (
          <button
            key={image.id}
            className={`thumbnail aspect-square bg-brand-light border rounded overflow-hidden transition-all duration-300 ${
              activeImage === image.url 
                ? 'border-brand-neon' 
                : 'border-brand-border hover:border-brand-neon'
            }`}
            onClick={() => setActiveImage(image.url)}
            aria-label={`View image ${image.id}`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
        {/* Fillers to match the look if needed, or just standard grid */}
      </div>
    </div>
  );
};