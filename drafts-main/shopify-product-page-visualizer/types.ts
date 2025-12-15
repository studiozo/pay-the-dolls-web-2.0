export interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

export interface ProductOption {
  name: string;
  values: string[];
}

export interface Product {
  id: string;
  title: string;
  vendor: string;
  type: string;
  price: number;
  currency: string;
  description: string;
  featured_image: ProductImage;
  images: ProductImage[];
  options: ProductOption[];
  available: boolean;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  logoText: string;
  heroImage: string;
  aesthetic: 'neon' | 'minimal' | 'wild';
}
