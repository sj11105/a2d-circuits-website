import React from 'react';
import ProductPageTemplate from '@/components/ProductPageTemplate';
import { sampleProducts } from '@/data/sampleProducts';

const ProductExamplePage = () => {
  // Use the first sample product for demonstration
  const product = sampleProducts[0];

  const handleInquiry = () => {
    // Redirect to contact page
    window.location.href = '/contact';
  };

  const handleAddToQuote = () => {
    alert('Product added to quote! This is a demo - in a real application, this would integrate with your quote management system.');
  };

  return (
    <ProductPageTemplate
      product={product}
      onInquiry={handleInquiry}
      onAddToQuote={handleAddToQuote}
    />
  );
};

export default ProductExamplePage;
