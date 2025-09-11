import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Product } from '@/types/product';
import ProductImageGallery from './ProductImageGallery';

interface ProductPageTemplateProps {
  product: Product;
  onInquiry: () => void;
  onAddToQuote?: () => void;
}

const ProductPageTemplate: React.FC<ProductPageTemplateProps> = ({
  product,
  onInquiry,
  onAddToQuote,
}) => {
  const {
    name,
    model,
    partNumber,
    description,
    detailedDescription,
    price,
    originalPrice,
    availability,
    category,
    manufacturer,
    specifications,
    images,
    features,
    compatibleWith,
    dimensions,
    weight,
    warranty,
    datasheet,
    sku,
    tags,
  } = product;

  const availabilityColor = {
    'In Stock': 'bg-green-100 text-green-700 border-green-200',
    'Out of Stock': 'bg-red-100 text-red-700 border-red-200',
    'Limited Stock': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'Pre-Order': 'bg-blue-100 text-blue-700 border-blue-200',
  };

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: category, href: `/products?category=${encodeURIComponent(category)}` },
    { label: name, href: '', current: true },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    sku,
    mpn: partNumber,
    brand: {
      '@type': 'Brand',
      name: manufacturer || 'A2D Circuits',
    },
    category,
    image: images.map(img => img.src),
    offers: {
      '@type': 'Offer',
      price: price.replace('$', ''),
      priceCurrency: 'USD',
      availability: availability === 'In Stock' 
        ? 'https://schema.org/InStock' 
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'A2D Circuits',
      },
    },
  };

  return (
    <>
      <Head>
        <title>{`${name} - ${partNumber} | A2D Circuits`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${name}, ${partNumber}, ${model}, ${category}, ${tags.join(', ')}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${name} - ${partNumber}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={images[0]?.src} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://a2dcircuits.com/product/${product.id}`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
                {/* Twitter Card */}
        <meta name="twitter:title" content={`${name} - ${partNumber}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={images[0]?.src} />
        
        {/* Product specific meta */}
        <meta name="robots" content="index, follow" />
        <meta name="product:brand" content={manufacturer || 'A2D Circuits'} />
        <meta name="product:availability" content={availability} />
        <meta name="product:condition" content="new" />
        <meta name="product:price:amount" content={price.replace('$', '')} />
        <meta name="product:price:currency" content="USD" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className="bg-[var(--color-warm-white)] min-h-screen pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <svg
                      className="w-4 h-4 text-gray-400 mx-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {crumb.current ? (
                    <span className="text-[var(--color-charcoal-gray)] font-medium">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="text-gray-500 hover:text-[var(--color-primary)] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Product Details */}
          <div
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            itemScope
            itemType="https://schema.org/Product"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Product Images */}
              <ProductImageGallery images={images} productName={name} />

              {/* Product Information */}
              <div className="flex flex-col">
                {/* Product Header */}
                <div className="mb-6">
                  <h1 className="text-3xl lg:text-4xl font-bold text-[var(--color-black)] mb-2" itemProp="name">
                    {name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <span itemProp="model">Model: {model}</span>
                    <span>•</span>
                    <span itemProp="mpn">Part #: {partNumber}</span>
                    <span>•</span>
                    <span>SKU: {sku}</span>
                  </div>
                  {manufacturer && (
                    <p className="text-gray-600 mb-4" itemProp="brand">
                      Manufacturer: <span className="font-medium">{manufacturer}</span>
                    </p>
                  )}
                </div>

                {/* Price and Availability */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      {originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {originalPrice}
                        </span>
                      )}
                      <span className="text-3xl font-bold text-[var(--color-primary)]" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                        <meta itemProp="priceCurrency" content="USD" />
                        <span itemProp="price" content={price.replace('$', '')}>{price}</span>
                      </span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${availabilityColor[availability]}`}
                      itemProp="availability"
                      content={availability === 'In Stock' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'}
                    >
                      {availability}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-lg text-gray-700 leading-relaxed" itemProp="description">
                    {description}
                  </p>
                  {detailedDescription && (
                    <div className="mt-4 text-gray-600">
                      <h3 className="font-semibold mb-2">Detailed Description</h3>
                      <p className="leading-relaxed">{detailedDescription}</p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <button
                    onClick={onInquiry}
                    className="flex-1 bg-[var(--color-primary)] hover:bg-opacity-90 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)] focus:ring-opacity-50"
                    aria-label={`Inquire about ${name}`}
                  >
                    📞 Call for Inquiry
                  </button>
                  {onAddToQuote && (
                    <button
                      onClick={onAddToQuote}
                      className="flex-1 bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-bold py-4 px-6 rounded-lg transition-all duration-300"
                      aria-label={`Add ${name} to quote`}
                    >
                      💼 Add to Quote
                    </button>
                  )}
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 text-sm border-t pt-6">
                  {dimensions && (
                    <div>
                      <span className="text-gray-500">Dimensions:</span>
                      <p className="font-medium">{dimensions}</p>
                    </div>
                  )}
                  {weight && (
                    <div>
                      <span className="text-gray-500">Weight:</span>
                      <p className="font-medium">{weight}</p>
                    </div>
                  )}
                  {warranty && (
                    <div>
                      <span className="text-gray-500">Warranty:</span>
                      <p className="font-medium">{warranty}</p>
                    </div>
                  )}
                  {datasheet && (
                    <div>
                      <span className="text-gray-500">Documentation:</span>
                      <a href={datasheet} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline font-medium">
                        View Datasheet
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Product Information */}
            <div className="border-t bg-gray-50 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {/* Features */}
                {features && features.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[var(--color-primary)] mr-2">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Specifications */}
                {specifications && specifications.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">
                      Specifications
                    </h3>
                    <div className="space-y-2">
                      {specifications.map((spec, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-gray-600">{spec.name}:</span>
                          <span className="font-medium text-gray-900">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Compatibility */}
                {compatibleWith && compatibleWith.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">
                      Compatible With
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {compatibleWith.map((item, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="border-t px-8 py-6">
                <h3 className="text-lg font-semibold text-[var(--color-black)] mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Back to Products */}
          <div className="mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Products
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductPageTemplate;
