import { CardHoverEffectDemo } from "@/components/ProductCard";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: "ic123",
    name: "Delta Electronics DC Brushless Blower Fan",
    code: "BFB1012UH3",
    price: "Approximately ₹2,000-₹4,500",
    image: "/public/electronics.jpg",
    alt: "Integrated Circuit",
  },
  {
    id: "tr456",
    name: "Siemens Indicator Light Module",
    code: "3SB14 04-2HZ26",
    price:
      "Price not readily available, may be a discontinued or specialized part.",
    image: "/public/siemens indicator.jpg",
    alt: "Transistor",
  },
  {
    id: "cp789",
    name: "Fire Alarm Sounder",
    code: "RE-24SS",
    price: "Approximately ₹400-₹600",
    image: "/public/fire alarm.jpg",
    alt: "Capacitor",
  },
  {
    id: "rs012",
    name: "RS PRO Lithium-Ion Rechargeable Battery Pack",
    code: "RS Stock No. 260-2990",
    price:
      "'P.O.A. (Price on Application), you must contact the supplier for a quote",
    image: "/public/rspro.jpg",
    alt: "Resistor",
  },
  {
    id: "dd345",
    name: "Diode - DD345",
    code: "DD345",
    price: "$1.29",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-BfJ99pOeazZMiJCnKR8SI53P-A6owNxPtY0CsY3zYWOxuQQTWvMOpf5DO671WFeWqjEDeZ5v3OZyDktLm7I-c8Cl9lXqd7SalFGtLVYlrgxP-dIXyWu0rKt8_pyGtYU4jVNFtc18YLG8wfNAts7LWZcWwi6UNxspzqB1bfjyVB-gNTsuk-VTDdP4rM6RJHcMr6urYV0G9t99B8a4DPK4Rw1TmWYv1T3xlilGeN2KFsSekAduuGh1ZgpmIYb8Y4ntXPLDP68Qb2Y",
    alt: "Diode",
  },
  {
    id: "in678",
    name: "Inductor - IN678",
    code: "IN678",
    price: "$3.79",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAAihZ6RwdszGqZK9sSpMQuUGEkTEGG38qidTnrxzV-sOd1KuBpnj-7fc6-qwEUjp_aG8oHrzWdhVb07Ld3wiREkw4WaPgNessVezrDuRgFxmijl3732qgsLbhZurHqkZcGnD3awp33jfBvAeQeTBefnhgfo_WERZAI-Vgn0uL-DOMk8TB_w1OIiuWohUyX5_GrUzF61vSVUzm5IKD4jOJRm4wldA7IFZ2oEoiO4ncagzSSKAu5uN01zSHZu-pul7W7CUbwBmQZTA",
    alt: "Inductor",
  },
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Products - a2d Circuits</title>
        <meta
          name="description"
          content="Browse our extensive collection of unique and obsolete circuit components."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-[var(--color-warm-white)] min-h-screen pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-gray-500 hover:text-[var(--color-black)]"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      fillRule="evenodd"
                    />
                  </svg>
                  <span className="ml-1 text-[var(--color-black)] font-medium">
                    All Products
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--color-black)]">
              All Products
            </h1>
            <p className="mt-2 text-lg text-[var(--color-charcoal-gray)]">
              Browse our extensive collection of unique and obsolete circuit components.
            </p>
          </header>

          {/* Search and Filters */}
          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1 max-w-md">
              <input
                type="search"
                placeholder="Search components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border-gray-300 bg-white px-4 py-2 text-base text-[var(--color-black)] placeholder:text-gray-400 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] transition-shadow"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-[var(--color-black)] hover:bg-gray-100 transition-colors">
                Category
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
              </button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-full border-gray-300 bg-white py-2 pl-4 pr-8 text-sm font-medium text-[var(--color-black)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="newest">Sort by: Newest</option>
                <option value="price-low">Sort by: Price (Low to High)</option>
                <option value="price-high">Sort by: Price (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    alt={product.alt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                    src={product.image}
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--color-black)]">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-charcoal-gray)]">
                  Code: {product.code}
                </p>
                <p className="mt-2 text-base font-bold text-[var(--color-black)]">
                  {product.price}
                </p>
                <button className="mt-4 w-full rounded-full bg-[var(--color-primary)] py-2.5 px-5 text-sm font-semibold text-white hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]">
                  Add to Quote
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <nav
            aria-label="Pagination"
            className="mt-12 flex items-center justify-center border-t border-gray-200 pt-8"
          >
            <button className="inline-flex items-center justify-center rounded-full h-10 w-10 text-gray-500 hover:bg-gray-100 transition-colors">
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            <button
              aria-current="page"
              className="inline-flex items-center justify-center rounded-full h-10 w-10 text-white bg-[var(--color-primary)] text-sm font-medium z-10 mx-1"
            >
              1
            </button>
            <button className="inline-flex items-center justify-center rounded-full h-10 w-10 text-gray-500 hover:bg-gray-100 transition-colors text-sm font-medium mx-1">
              2
            </button>
            <button className="hidden md:inline-flex items-center justify-center rounded-full h-10 w-10 text-gray-500 hover:bg-gray-100 transition-colors text-sm font-medium mx-1">
              3
            </button>
            <span className="hidden md:inline-flex items-center justify-center rounded-full h-10 w-10 text-gray-500 text-sm font-medium mx-1">
              ...
            </span>
            <button className="hidden md:inline-flex items-center justify-center rounded-full h-10 w-10 text-gray-500 hover:bg-gray-100 transition-colors text-sm font-medium mx-1">
              8
            </button>
            <button className="inline-flex items-center justify-center rounded-full h-10 w-10 text-gray-500 hover:bg-gray-100 transition-colors">
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
