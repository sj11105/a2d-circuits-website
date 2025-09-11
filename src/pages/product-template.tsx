import React from 'react';
import ProductPage from '../components/ProductPage';
import Head from 'next/head';

const sampleProduct = {
  name: 'A2D High Precision Circuit',
  model: 'A2D-HP-2025',
  description:
    'A2D High Precision Circuit is designed for industrial applications requiring high accuracy and reliability. Features advanced signal processing and robust build.',
  price: '$199.99',
  availability: 'In Stock',
  images: [
    { src: '/a2d-logo.png', alt: 'A2D Logo' },
    { src: '/circuit-bg.jpg', alt: 'Circuit Background' },
  ],
};

const handleInquiry = () => {
  window.location.href = '/contact';
};

const ProductTemplatePage = () => (
  <>
    <Head>
      <title>{sampleProduct.name} | A2D Circuits</title>
      <meta name="description" content={sampleProduct.description} />
      <meta property="og:title" content={sampleProduct.name} />
      <meta property="og:description" content={sampleProduct.description} />
      <meta property="og:image" content={sampleProduct.images[0].src} />
      <meta name="robots" content="index, follow" />
    </Head>
    <ProductPage {...sampleProduct} onInquiry={handleInquiry} />
  </>
);

export default ProductTemplatePage;
