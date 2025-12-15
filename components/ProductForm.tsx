import React, { useState } from 'react';
import { Product } from '../types';

interface ProductFormProps {
  product: Product;
}

export const ProductForm: React.FC<ProductFormProps> = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    product.options.forEach(opt => {
      defaults[opt.name] = opt.values.find(v => opt.name === 'Size' ? v === 'M' : true) || opt.values[0];
    });
    return defaults;
  });

  const [quantity, setQuantity] = useState(1);

  const handleOptionSelect = (optionName: string, value: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionName]: value
    }));
  };

  const changeQty = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Added to Cart:\n${product.title}\n${Object.entries(selectedOptions).map(([k,v]) => `${k}: ${v}`).join(', ')}\nQty: ${quantity}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-0">
      {/* Product Options */}
      <div className="product-options mb-8">
        {product.options.map((option) => (
          <div key={option.name} className="option-group mb-6">
            <label className="option-label text-[13px] font-semibold text-brand-dark uppercase tracking-[1px] mb-3 block">
              {option.name}
            </label>
            <div className="option-buttons flex flex-wrap gap-2">
              {option.values.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleOptionSelect(option.name, value)}
                  className={`option-btn px-5 py-3 border text-sm font-medium transition-all duration-200 rounded 
                    ${
                      selectedOptions[option.name] === value
                        ? 'bg-brand-dark text-white border-brand-dark'
                        : 'bg-transparent text-brand-dark border-brand-border hover:border-brand-dark'
                    }
                  `}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quantity */}
      <div className="quantity-selector flex items-center gap-4 mb-8">
        <span className="quantity-label text-[13px] font-semibold text-brand-dark uppercase tracking-[1px]">Quantity</span>
        <div className="quantity-controls flex items-center border border-brand-border rounded overflow-hidden">
          <button
            type="button"
            className="qty-btn px-4 py-3 bg-transparent border-none text-lg font-semibold text-brand-dark hover:bg-brand-light transition-colors"
            onClick={() => changeQty(-1)}
          >
            −
          </button>
          <input
            type="number"
            className="qty-input w-12 text-center border-x border-brand-border py-3 text-base font-medium appearance-none focus:outline-none"
            value={quantity}
            readOnly
            min="1"
            id="Quantity"
          />
          <button
            type="button"
            className="qty-btn px-4 py-3 bg-transparent border-none text-lg font-semibold text-brand-dark hover:bg-brand-light transition-colors"
            onClick={() => changeQty(1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        type="submit"
        className="add-to-cart w-full p-5 bg-brand-neon text-brand-dark border-none rounded text-sm font-bold tracking-[1.5px] uppercase cursor-pointer transition-all duration-300 shadow-neon hover:bg-[#00dd77] hover:-translate-y-[2px] hover:shadow-neon-hover mb-10"
      >
        Add to Cart
      </button>
    </form>
  );
};