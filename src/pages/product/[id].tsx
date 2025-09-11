import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductPageTemplate from '@/components/ProductPageTemplate';
import { apiService } from '@/services/api';
import { transformBackendProduct } from '@/utils/productTransform';
import { Product } from '@/types/product';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      try {
        setLoading(true);
        let productData = null;
        
        // Try using our API service
        try {
          const apiResponse = await apiService.getProduct(Number(id));
          if (apiResponse.error) {
            throw new Error(apiResponse.error);
          }
          if (apiResponse.data) {
            productData = apiResponse.data;
          }
        } catch (apiError) {
          console.error('API service error:', apiError);
          
          // Fallback to direct fetch
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/products/${id}`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            productData = await response.json();
          } catch (directError) {
            console.error('Direct fetch error:', directError);
            
            // Try the Next.js API proxy as last resort
            try {
              const proxyResponse = await fetch(`/api/products/${id}`);
              if (!proxyResponse.ok) {
                throw new Error(`HTTP error! status: ${proxyResponse.status}`);
              }
              productData = await proxyResponse.json();
            } catch (proxyError) {
              console.error('Proxy API error:', proxyError);
              throw new Error('Failed to fetch product after multiple attempts');
            }
          }
        }

        if (productData) {
          console.log('Product data before transform:', productData);
          const transformedProduct = transformBackendProduct(productData);
          console.log('Transformed product:', transformedProduct);
          setProduct(transformedProduct);
          setError(null);
        } else {
          throw new Error('No product data returned');
        }
      } catch (err: any) {
        console.error('Product fetch error:', err);
        setError(err.message || 'Failed to load product. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  const handleInquiry = () => {
    if (product) {
      // Navigate to contact page with product information
      router.push({
        pathname: '/contact',
        query: {
          product: product.name,
          model: product.model,
          partNumber: product.partNumber,
        },
      });
    }
  };

  const handleAddToQuote = () => {
    if (product) {
      // In a real application, this would add the product to a quote/cart system
      alert(`${product.name} added to quote! This would normally integrate with your quote management system.`);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-warm-white)] pt-24">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary)] mx-auto"></div>
          <p className="mt-4 text-lg text-[var(--color-charcoal-gray)]">Loading product...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-warm-white)] pt-24">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-[var(--color-black)] mb-4">Failed to Load Product</h1>
          <p className="text-[var(--color-charcoal-gray)] mb-8">{error}</p>
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

  // Product not found
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-warm-white)] pt-24">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">📦</div>
          <h1 className="text-2xl font-bold text-[var(--color-black)] mb-4">Product Not Found</h1>
          <p className="text-[var(--color-charcoal-gray)] mb-8">The product you're looking for doesn't exist.</p>
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

export default ProductDetailPage;
