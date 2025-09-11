import { Product } from '@/types/product';
import { BackendProduct } from '@/services/api';

/**
 * Transform a backend product to frontend product format
 */
export function transformBackendProduct(backendProduct: BackendProduct): Product {
  if (!backendProduct) {
    throw new Error('Invalid backend product data: Product is null or undefined');
  }
  
  // Safe string conversion for ID
  const id = backendProduct.id != null ? String(backendProduct.id) : '0';
  
  return {
    id: id,
    name: backendProduct.name || 'Unknown Product',
    model: `MODEL-${id}`, // Generate model number from ID
    partNumber: `PN-${id.padStart(4, '0')}`, // Generate part number
    description: backendProduct.description || 'No description available',
    detailedDescription: backendProduct.description || 'No description available', // Use same description for now
    price: backendProduct.price != null ? `$${Number(backendProduct.price).toFixed(2)}` : '$0.00',
    originalPrice: undefined, // Not available from backend
    availability: 'In Stock' as const, // Default availability
    category: 'Electronics', // Default category
    manufacturer: 'A2D Circuits', // Default manufacturer
    sku: `SKU-${id}`,
    specifications: [], // Could be extended in backend later
    images: backendProduct.image 
      ? [{ 
          src: backendProduct.image, 
          alt: backendProduct.name,
          title: backendProduct.name 
        }]
      : [{ 
          src: '/a2d-logo.png', 
          alt: backendProduct.name,
          title: backendProduct.name 
        }], // Default image if none provided
    features: [], // Could be extended in backend later
    compatibleWith: [], // Could be extended in backend later
    dimensions: undefined,
    weight: undefined,
    warranty: '1 year', // Default warranty
    datasheet: undefined,
    tags: [], // Could be extended in backend later
    createdAt: new Date().toISOString(), // Use current date as placeholder
    updatedAt: new Date().toISOString(), // Use current date as placeholder
  };
}

/**
 * Transform multiple backend products to frontend format
 */
export function transformBackendProducts(backendProducts: BackendProduct[]): Product[] {
  console.log('transformBackendProducts: Transforming backend products', backendProducts);
  if (!backendProducts || !Array.isArray(backendProducts)) {
    console.error('transformBackendProducts: Invalid backend products data', backendProducts);
    return [];
  }
  return backendProducts.map(product => {
    try {
      return transformBackendProduct(product);
    } catch (error) {
      console.error('Error transforming product:', product, error);
      // Return a default product in case of transformation error
      return {
        id: product.id?.toString() || '0',
        name: product.name || 'Unknown Product',
        model: 'ERROR',
        partNumber: 'ERROR',
        description: 'Error transforming product data',
        detailedDescription: 'Error transforming product data',
        price: '$0.00',
        availability: 'Out of Stock' as const,
        category: 'Unknown',
        manufacturer: 'Unknown',
        sku: 'ERROR',
        specifications: [],
        images: [{ src: '/a2d-logo.png', alt: 'Error', title: 'Error' }],
        features: [],
        compatibleWith: [],
        warranty: 'None',
        tags: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    }
  });
}

/**
 * Transform frontend product to backend format for API calls
 */
export function transformToBackendProduct(product: Product): Omit<BackendProduct, 'id'> {
  return {
    name: product.name,
    description: product.description,
    price: parseFloat(product.price.replace('$', '')),
    image: product.images[0]?.src || null,
  };
}
