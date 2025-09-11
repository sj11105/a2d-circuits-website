export interface ProductImage {
  src: string;
  alt: string;
  title?: string;
}

export interface ProductSpecification {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  model: string;
  partNumber: string;
  description: string;
  detailedDescription?: string;
  price: string;
  originalPrice?: string;
  availability: 'In Stock' | 'Out of Stock' | 'Limited Stock' | 'Pre-Order';
  category: string;
  manufacturer?: string;
  specifications?: ProductSpecification[];
  images: ProductImage[];
  features?: string[];
  compatibleWith?: string[];
  dimensions?: string;
  weight?: string;
  warranty?: string;
  datasheet?: string;
  sku: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
