import React from "react";

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductPageProps {
  name: string;
  model: string;
  description: string;
  price: string;
  availability: string;
  images: ProductImage[];
  onInquiry: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({
  name,
  model,
  description,
  price,
  availability,
  images,
  onInquiry,
}) => {
  return (
    <main
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8"
      itemScope
      itemType="http://schema.org/Product"
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Gallery */}
        <section className="flex-1" aria-label="Product images">
          <div className="mb-4">
            <img
              src={images[0]?.src}
              alt={images[0]?.alt || name}
              className="w-full h-72 object-contain rounded-lg border"
              loading="eager"
              itemProp="image"
            />
          </div>
          <div
            className="flex gap-2 overflow-x-auto"
            aria-label="Product thumbnails"
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className="w-20 h-20 object-contain rounded border hover:ring-2 hover:ring-blue-400 cursor-pointer"
                loading="lazy"
                itemProp="image"
              />
            ))}
          </div>
        </section>
        {/* Product Info */}
        <section
          className="flex-1 flex flex-col justify-between"
          aria-label="Product information"
        >
          <div>
            <h1 className="text-3xl font-bold mb-2" itemProp="name">
              {name}
            </h1>
            <p className="text-gray-500 mb-2" itemProp="model">
              Model: {model}
            </p>
            <p className="text-lg text-gray-700 mb-4" itemProp="description">
              {description}
            </p>
            <div className="flex items-center gap-4 mb-4">
              <span
                className="text-2xl font-semibold text-green-600"
                itemProp="offers"
                itemScope
                itemType="http://schema.org/Offer"
              >
                <meta itemProp="priceCurrency" content="USD" />
                <span itemProp="price">{price}</span>
              </span>
              <span
                className={`px-2 py-1 rounded text-sm ${
                  availability === "In Stock"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
                itemProp="availability"
                content={
                  availability === "In Stock"
                    ? "http://schema.org/InStock"
                    : "http://schema.org/OutOfStock"
                }
              >
                {availability}
              </span>
            </div>
          </div>
          <button
            onClick={onInquiry}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            aria-label="Inquire about this product"
          >
            Call for Inquiry
          </button>
        </section>
      </div>
    </main>
  );
};

export default ProductPage;
