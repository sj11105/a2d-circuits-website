import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductPageTemplate from '@/components/ProductPageTemplate';
import { sampleProducts } from '@/data/sampleProducts';

// Mock Next.js modules
jest.mock('next/head', () => {
  return function Head({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  };
});

jest.mock('next/link', () => {
  return function Link({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>;
  };
});

jest.mock('next/image', () => {
  return function Image({ src, alt, ...props }: any) {
    return <img src={src} alt={alt} {...props} />;
  };
});

describe('ProductPageTemplate', () => {
  const mockProduct = sampleProducts[0];
  const mockOnInquiry = jest.fn();
  const mockOnAddToQuote = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders product information correctly', () => {
    render(
      <ProductPageTemplate
        product={mockProduct}
        onInquiry={mockOnInquiry}
        onAddToQuote={mockOnAddToQuote}
      />
    );

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`Model: ${mockProduct.model}`)).toBeInTheDocument();
    expect(screen.getByText(`Part #: ${mockProduct.partNumber}`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.price)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.availability)).toBeInTheDocument();
  });

  it('displays product specifications when available', () => {
    render(
      <ProductPageTemplate
        product={mockProduct}
        onInquiry={mockOnInquiry}
        onAddToQuote={mockOnAddToQuote}
      />
    );

    if (mockProduct.specifications) {
      mockProduct.specifications.forEach(spec => {
        expect(screen.getByText(`${spec.name}:`)).toBeInTheDocument();
        expect(screen.getByText(spec.value)).toBeInTheDocument();
      });
    }
  });

  it('displays product features when available', () => {
    render(
      <ProductPageTemplate
        product={mockProduct}
        onInquiry={mockOnInquiry}
        onAddToQuote={mockOnAddToQuote}
      />
    );

    if (mockProduct.features) {
      mockProduct.features.forEach(feature => {
        expect(screen.getByText(feature)).toBeInTheDocument();
      });
    }
  });

  it('calls onInquiry when inquiry button is clicked', () => {
    render(
      <ProductPageTemplate
        product={mockProduct}
        onInquiry={mockOnInquiry}
        onAddToQuote={mockOnAddToQuote}
      />
    );

    const inquiryButton = screen.getByRole('button', { name: /call for inquiry/i });
    fireEvent.click(inquiryButton);

    expect(mockOnInquiry).toHaveBeenCalledTimes(1);
  });

  it('calls onAddToQuote when add to quote button is clicked', () => {
    render(
      <ProductPageTemplate
        product={mockProduct}
        onInquiry={mockOnInquiry}
        onAddToQuote={mockOnAddToQuote}
      />
    );

    const addToQuoteButton = screen.getByRole('button', { name: /add.*to quote/i });
    fireEvent.click(addToQuoteButton);

    expect(mockOnAddToQuote).toHaveBeenCalledTimes(1);
  });

  it('renders breadcrumb navigation correctly', () => {
    render(
      <ProductPageTemplate
        product={mockProduct}
        onInquiry={mockOnInquiry}
        onAddToQuote={mockOnAddToQuote}
      />
    );

    expect(screen.getByLabelText(/breadcrumb/i)).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
  });

  it('displays correct availability styling', () => {
    const inStockProduct = { ...mockProduct, availability: 'In Stock' as const };
    render(
      <ProductPageTemplate
        product={inStockProduct}
        onInquiry={mockOnInquiry}
        onAddToQuote={mockOnAddToQuote}
      />
    );

    const availabilityElement = screen.getByText('In Stock');
    expect(availabilityElement).toHaveClass('bg-green-100', 'text-green-700');
  });

  it('renders product tags when available', () => {
    render(
      <ProductPageTemplate
        product={mockProduct}
        onInquiry={mockOnInquiry}
        onAddToQuote={mockOnAddToQuote}
      />
    );

    if (mockProduct.tags && mockProduct.tags.length > 0) {
      expect(screen.getByText('Tags')).toBeInTheDocument();
      mockProduct.tags.forEach(tag => {
        expect(screen.getByText(`#${tag}`)).toBeInTheDocument();
      });
    }
  });

  it('has proper SEO structure with itemProp attributes', () => {
    render(
      <ProductPageTemplate
        product={mockProduct}
        onInquiry={mockOnInquiry}
        onAddToQuote={mockOnAddToQuote}
      />
    );

    const productContainer = document.querySelector('[itemscope][itemtype*="Product"]');
    expect(productContainer).toBeInTheDocument();

    const nameElement = document.querySelector('[itemprop="name"]');
    expect(nameElement).toBeInTheDocument();

    const descriptionElement = document.querySelector('[itemprop="description"]');
    expect(descriptionElement).toBeInTheDocument();
  });
});
