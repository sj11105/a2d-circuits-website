import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductImageGalleryProps {
  images: Product['images'];
  productName: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
  productName,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex-1">
        <div className="aspect-square w-full bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">No image available</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      {/* Main Image */}
      <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={images[selectedImageIndex]?.src}
          alt={images[selectedImageIndex]?.alt || productName}
          width={600}
          height={600}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          priority
          itemProp="image"
        />
      </div>

      {/* Thumbnail Images */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                index === selectedImageIndex
                  ? 'border-[var(--color-primary)] ring-2 ring-[var(--color-primary)] ring-opacity-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              aria-label={`View image ${index + 1} of ${productName}`}
            >
              <Image
                src={image.src}
                alt={image.alt || `${productName} view ${index + 1}`}
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;
