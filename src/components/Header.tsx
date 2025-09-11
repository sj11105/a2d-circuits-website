import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0  z-50 bg-white px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-16 w-16  ">
            <Image
              src="/a2d-logo.png"
              alt="a2d Circuits Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/products"
            className="hover:text-[var(--color-primary)] transition-colors text-black"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="hover:text-[var(--color-primary)] transition-colors text-black"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="hover:text-[var(--color-primary)] transition-colors text-black"
          >
            Contact
          </Link>
        </div>
        
        <button
          className="md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="black"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm">
          <div className="container mx-auto px-8 py-4 flex flex-col gap-4">
            <Link
              href="/products"
              className="hover:text-[var(--color-primary)] transition-colors text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="hover:text-[var(--color-primary)] transition-colors text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-[var(--color-primary)] transition-colors text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
