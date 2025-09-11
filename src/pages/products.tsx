import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const products = [
  {
    id: "fulltech-axial-fan",
    name: "FULLTECH Metal Axial Fan",
    code: "UF-250BMB23H1C2A",
    price: "₹1,999/Piece",
    image: "/FULLTECH Metal Axial Fan.png",
    alt: "FULLTECH Metal Axial Fan",
    description: "A 280x280x80mm metal axial cooling fan designed for industrial use, operating at 230V AC. It delivers an airflow of approximately 1921 m³/h at 2550/2700 RPM.",
  },
  {
    id: "three-phase-motor",
    name: "Three-Phase Motor Control Module",
    code: "HFS21",
    price: "₹9,839 (approx)",
    image: "/THREE-PHASE MOTOR CONTROL MODULE.png",
    alt: "Three-Phase Motor Control Module",
    description: "A power control module for three-phase motor forward and reverse operation. It includes logic interlock, delay turn-on circuits, and internal snubbers to protect the motor and system during switching. Features photo isolation, zero-cross switching, and a dual-color LED for status indication.",
  },
  {
    id: "seven-segment-display",
    name: "14.2 mm (0.56 inch) Seven Segment Display",
    code: "Industry Standard 0.56 inch",
    price: "₹9/Piece",
    image: "/14 mm - Seven Segment Displays.png",
    alt: "Seven Segment Display",
    description: "A 14.2mm (0.56 inch) seven-segment LED display designed for viewing distances up to 7 meters. It uses an industry-standard package and pinout, is available in multiple colors, and comes in either common anode or common cathode configurations.",
  },
  {
    id: "arduino-uno",
    name: "Arduino UNO R3",
    code: "UNO R3",
    price: "₹310",
    image: "/Arduino UNO R3.jpeg",
    alt: "Arduino UNO R3",
    description: "A versatile development board for learning electronics and coding, equipped with the ATmega328P processor (32kB Flash, 2kB SRAM) and an ATMega16U2 for USB communication. It features a wide range of peripherals including timers, USART, SPI, I2C, and PWM channels.",
  },
  {
    id: "commander-se",
    name: "Control Techniques Commander SE AC Drive",
    code: "SE23400150",
    price: "₹18,960",
    image: "/Commander SE.png",
    alt: "Commander SE AC Drive",
    description: "A 1.5 kW (2 HP) Commander SE series AC drive for three-phase 380-480 VAC systems. It offers precise motor control, an integrated braking transistor, and standard RS485 communications, making it ideal for applications like conveyors, pumps, and fans.",
  },
  {
    id: "delta-blower",
    name: "Delta DC Brushless Blower Fan",
    code: "BFB1012UH",
    price: "₹781",
    image: "/Delta BFB1012UH DC Brushless Blower Fan.png",
    alt: "Delta DC Brushless Blower Fan",
    description: "A high-performance 12V DC air cooling blower fan operating at 6.00A. It features a dual ball bearing, reaches speeds over 8300 RPM, and is known for its powerful airflow, making it suitable for demanding cooling applications.",
  },
  {
    id: "servo-fan",
    name: "SERVO DC Brushless Cooling Fan",
    code: "CNDC12Z7P-028",
    price: "₹150/Piece",
    image: "/SERVO CNDC12Z7P-028 DC Brushless Cooling Fan.png",
    alt: "SERVO DC Brushless Cooling Fan",
    description: "A 120x120x38mm axial DC fan from Japan Servo Co. operating at 12V and 0.71A. It is designed for high performance, delivering an airflow of approximately 124 CFM at a speed of 3200 RPM.",
  },
  {
    id: "sunon-fan",
    name: "SUNON DC Cooling Fan",
    code: "GM0502PFV1-8",
    price: "₹272.58",
    image: "/SUNON GM0502PFV1-8 2510 5V DC FAN.png",
    alt: "SUNON DC Cooling Fan",
    description: "A 25x25x10mm DC brushless axial fan operating at 5V and 0.6W. It utilizes a Vapo-Bearing (MagLev) system for quiet operation and spins at 13000 RPM to deliver 3.5 CFM of airflow, featuring a speed sensor for monitoring.",
  },
  {
    id: "moosl-blower",
    name: "MOOSL DC Silent Blower",
    code: "D49X-101",
    price: "Call for Quote",
    image: "/MOOSL D49X-101 DC Silent Blower.png",
    alt: "MOOSL DC Silent Blower",
    description: "A 97x94.5x33mm DC silent blower fan operating at 12V. It runs at 3700 RPM to deliver 26.5 CFM of airflow and includes a speed sensor for monitoring.",
  },
  {
    id: "edwards-alarm",
    name: "Edwards EST Genesis Audible Fire Alarm",
    code: "GCF-S7",
    price: "₹1,850/piece",
    image: "/Edwards EST GCF-S7 Genesis.jpg",
    alt: "Edwards EST Genesis Fire Alarm",
    description: "A high-fidelity audible fire alarm (ceiling speaker) that operates at 70 Vrms. It features selectable wattage taps (¼W, ½W, 1W, 2W), a 400 to 4,000 Hz frequency response, and a low-profile design for indoor ceiling or wall mounting.",
  },
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const router = useRouter();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToQuote = (product: typeof products[0]) => {
    // Navigate to contact page with product details as query parameters
    router.push({
      pathname: '/contact',
      query: {
        product: product.name,
        code: product.code,
        price: product.price,
        inquiryType: 'quote'
      }
    });
  };

  const toggleDescription = (productId: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  return (
    <>
      <Head>
        <title>Products - a2d Circuits</title>
        <meta name="description" content="Browse our extensive collection of unique and obsolete circuit components." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-[var(--color-warm-white)] min-h-screen pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--color-black)]">All Products</h1>
            <p className="mt-2 text-lg text-[var(--color-charcoal-gray)]">Browse our extensive collection of unique and obsolete circuit components.</p>
          </header>

          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex-1 max-w-md">
                <input
                  type="search"
                  placeholder="Search products by name or code..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-full border-gray-300 bg-white px-4 py-2 text-base text-[var(--color-black)] placeholder:text-gray-400 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] transition-colors"
                />
              </div>
              
              {/* Results counter */}
              <div className="text-sm text-[var(--color-charcoal-gray)]">
                {searchTerm ? (
                  <span>
                    {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} found
                    {filteredProducts.length > 0 && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="ml-2 text-[var(--color-primary)] hover:underline"
                      >
                        Clear search
                      </button>
                    )}
                  </span>
                ) : (
                  <span>Showing all {products.length} products</span>
                )}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-[var(--color-black)] mb-2">
                No products found
              </h3>
              <p className="text-[var(--color-charcoal-gray)] mb-4">
                We couldn&apos;t find any products matching &quot;{searchTerm}&quot;. Try adjusting your search terms.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="rounded-full bg-[var(--color-primary)] text-white px-6 py-2 hover:bg-opacity-90 transition-colors"
              >
                View All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => {
                const isExpanded = expandedCards.has(product.id);
                const descriptionWords = product.description.split(' ');
                const shouldTruncate = descriptionWords.length > 20;
                const displayDescription = shouldTruncate && !isExpanded 
                  ? descriptionWords.slice(0, 20).join(' ') + '...'
                  : product.description;

                return (
                  <div key={product.id} className="group flex flex-col h-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                    {/* Product Image - Fixed height */}
                    <div className="relative h-48 w-full bg-gray-100">
                      <img
                        alt={product.alt}
                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        src={product.image}
                      />
                    </div>
                    
                    {/* Product Content - Flexible height with consistent spacing */}
                    <div className="flex flex-col flex-grow p-4">
                      {/* Product Name - Fixed height with line clamping */}
                      <h3 className="text-lg font-semibold text-[var(--color-black)] line-clamp-2 min-h-[3.5rem] mb-2">
                        {product.name}
                      </h3>
                      
                      {/* Product Code */}
                      <p className="text-sm text-[var(--color-charcoal-gray)] mb-3">
                        <span className="font-medium">Code:</span> {product.code}
                      </p>
                      
                      {/* Product Description - Expandable */}
                      <div className="flex-grow mb-4">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {displayDescription}
                        </p>
                        {shouldTruncate && (
                          <button
                            onClick={() => toggleDescription(product.id)}
                            className="text-[var(--color-primary)] text-sm font-medium hover:underline mt-1"
                          >
                            {isExpanded ? 'Show Less' : 'Read More'}
                          </button>
                        )}
                      </div>
                      
                      {/* Price and Button - Always at bottom */}
                      <div className="mt-auto">
                        <p className="text-base font-bold text-[var(--color-black)] mb-3">
                          {product.price}
                        </p>
                        <button 
                          onClick={() => handleAddToQuote(product)}
                          className="w-full rounded-full bg-[var(--color-primary)] py-2.5 px-5 text-sm font-semibold text-white hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
                        >
                          Add to Quote
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
