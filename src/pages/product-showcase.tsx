import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import ProductPageTemplate from '@/components/ProductPageTemplate';
import { sampleProducts } from '@/data/sampleProducts';
import { Product } from '@/types/product';

const ProductShowcasePage = () => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const selectedProduct = sampleProducts[selectedProductIndex];

  const handleInquiry = () => {
    // In a real application, this would integrate with your contact system
    const subject = encodeURIComponent(`Inquiry about ${selectedProduct.name} (${selectedProduct.partNumber})`);
    const body = encodeURIComponent(`Hello,\n\nI am interested in learning more about the ${selectedProduct.name} (Part #: ${selectedProduct.partNumber}).\n\nPlease provide more information about availability and pricing.\n\nThank you!`);
    
    // Try to open email client, fallback to contact page
    const emailLink = `mailto:info@a2dcircuits.com?subject=${subject}&body=${body}`;
    
    try {
      window.location.href = emailLink;
    } catch (error) {
      // Fallback to contact page if email client fails
      window.location.href = '/contact';
    }
  };

  const handleAddToQuote = () => {
    // In a real application, this would integrate with your quote/cart system
    alert(`${selectedProduct.name} added to quote!\n\nThis is a demo - in a real application, this would:\n• Add the item to your quote/cart system\n• Show a confirmation notification\n• Update the cart counter\n• Possibly redirect to quote page`);
  };

  return (
    <>
      <Head>
        <title>Product Template Showcase | A2D Circuits</title>
        <meta 
          name="description" 
          content="Explore our product page template with sample electronic components. See how products are displayed with detailed specifications, images, and inquiry options." 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="bg-[var(--color-warm-white)] min-h-screen pt-24">
        {/* Header Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[var(--color-black)] mb-4">
              Product Page Template Showcase
            </h1>
            <p className="text-lg text-[var(--color-charcoal-gray)] max-w-2xl mx-auto mb-6">
              This demo showcases the modular product page template with sample electronic components. 
              Switch between products to see how the template adapts to different product types and information.
            </p>
            
            {/* Product Selector */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {sampleProducts.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProductIndex(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    index === selectedProductIndex
                      ? 'bg-[var(--color-primary)] text-white shadow-lg'
                      : 'bg-white text-[var(--color-charcoal-gray)] hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {product.name}
                </button>
              ))}
            </div>

            {/* Demo Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 max-w-4xl mx-auto">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div className="text-left">
                  <h3 className="text-sm font-medium text-blue-800 mb-1">Demo Information</h3>
                  <p className="text-sm text-blue-700">
                    This is a demonstration page showcasing the product template capabilities. 
                    The "Call for Inquiry" button will open your email client, and the "Add to Quote" 
                    button shows a demo alert. In production, these would integrate with your actual 
                    contact and quote management systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link 
                href="/products" 
                className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View Products Catalog
              </Link>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Product Template */}
        <ProductPageTemplate
          product={selectedProduct}
          onInquiry={handleInquiry}
          onAddToQuote={handleAddToQuote}
        />

        {/* Features Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[var(--color-black)] mb-8 text-center">
              Template Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Multiple Images</h3>
                <p className="text-gray-600">Image gallery with thumbnails and main image display</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Complete Information</h3>
                <p className="text-gray-600">Product details, specifications, and technical data</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">SEO Optimized</h3>
                <p className="text-gray-600">Structured data, meta tags, and search-friendly markup</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
                <p className="text-gray-600">Mobile-first design that works on all devices</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Call for Inquiry</h3>
                <p className="text-gray-600">Easy contact integration for customer engagement</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Modular Template</h3>
                <p className="text-gray-600">Reusable components for easy product page creation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductShowcasePage;
