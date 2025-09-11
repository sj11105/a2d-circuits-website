import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import ProductPageTemplate from '@/components/ProductPageTemplate';
import { Product } from '@/types/product';
import productsData from '../../data/products.json';

interface ProductDetailPageProps {
  product: Product | null;
}

const ProductDetailPage = ({ product }: ProductDetailPageProps) => {
  const router = useRouter();

  const handleInquiry = () => {
    console.log('Inquiry about product:', product?.name);
  };

  const handleAddToQuote = () => {
    if (!product) return;
    
    // Navigate to contact page with product details
    router.push({
      pathname: '/contact',
      query: {
        inquiryType: 'quote',
        product: product.name,
        code: product.model,
        price: product.price
      }
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-warm-white)] pt-24">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">📦</div>
          <h1 className="text-2xl font-bold text-[var(--color-black)] mb-4">Product Not Found</h1>
          <p className="text-[var(--color-charcoal-gray)] mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
          <div className="space-x-4">
            <button
              onClick={() => router.back()}
              className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={() => router.push('/products')}
              className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Browse Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ProductPageTemplate
      product={product}
      onInquiry={handleInquiry}
      onAddToQuote={handleAddToQuote}
    />
  );
};

// Transform raw product data to match our Product interface
const transformProduct = (rawProduct: any, index: number): Product => {
  // Image mapping based on product names to actual files
  const imageMap: { [key: string]: string } = {
    'FULLTECH Metal Axial Fan': '/FULLTECH Metal Axial Fan.png',
    'Three-Phase Motor Control Module': '/THREE-PHASE MOTOR CONTROL MODULE.png',
    '14.2 mm (0.56 inch) Seven Segment Display': '/14 mm - Seven Segment Displays.png',
    'Arduino UNO R3': '/Arduino UNO R3.jpeg',
    'Control Techniques Commander SE AC Drive': '/Commander SE.png',
    'Delta DC Brushless Blower Fan': '/Delta BFB1012UH DC Brushless Blower Fan.png',
    'SERVO DC Brushless Cooling Fan': '/SERVO CNDC12Z7P-028 DC Brushless Cooling Fan.png',
    'SUNON DC Cooling Fan': '/SUNON GM0502PFV1-8 2510 5V DC FAN.png',
    'MOOSL DC Silent Blower': '/MOOSL D49X-101 DC Silent Blower.png',
    'Edwards EST Genesis Audible Fire Alarm': '/Edwards EST GCF-S7 Genesis.jpg'
  };

  const imageSrc = imageMap[rawProduct.name] || '/hero.jpg';

  return {
    id: (index + 1).toString(),
    name: rawProduct.name,
    model: rawProduct.model,
    partNumber: rawProduct.model,
    description: rawProduct.description,
    price: rawProduct.price,
    availability: 'In Stock' as const,
    category: 'Electronics',
    sku: `SKU-${(index + 1).toString().padStart(3, '0')}`,
    tags: ['electronics', 'components'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    images: [{
      src: imageSrc,
      alt: rawProduct.name,
      title: rawProduct.name
    }],
    specifications: [
      {
        name: 'Model',
        value: rawProduct.model
      },
      {
        name: 'Description',
        value: rawProduct.description
      }
    ]
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for all products
  const paths = productsData.map((_, index) => ({
    params: { id: (index + 1).toString() }
  }));

  return {
    paths,
    fallback: false // Set to false since we're generating all paths at build time
  };
};

export const getStaticProps: GetStaticProps<ProductDetailPageProps> = async ({ params }) => {
  const id = params?.id as string;
  const productIndex = parseInt(id) - 1;

  if (productIndex < 0 || productIndex >= productsData.length) {
    return {
      props: {
        product: null
      }
    };
  }

  const rawProduct = productsData[productIndex];
  const product = transformProduct(rawProduct, productIndex);

  return {
    props: {
      product
    }
  };
};

export default ProductDetailPage;
