import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <title>
          a2d Circuits - Reviving Rare Circuits, Powering Innovation
        </title>
        <meta
          name="description"
          content="We specialize in unique and obsolete electronic circuit components, fueling the future of technology."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </div>

      {/* Hero Section */}
      <header className="relative h-full min-h-[650px] text-white sm:pt-4 pt-20">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat blur-[2px]"
          style={{
            backgroundImage: `url("./hero.jpg")`,
          }}
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex-grow flex items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <div className="relative sm:h-[300px] sm:w-[300px] h-32 w-32 mx-auto sm:-mb-20 -mb-8">
                <Image
                  src="/a2d-logo.png"
                  alt="a2d Circuits Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-wide uppercase">
                Obsolete? Rare? Hard-to-find?,{" "}
                <span className="text-[var(--color-primary)]">
                  We make them easy to get
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[var(--color-light-gray)]">
                We specialize in unique and obsolete electronic circuit
                components, fueling the future of technology.
              </p>
              <Link
                href="/products"
                className="btn btn-primary mt-10 inline-block"
              >
                Explore Our Collection
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Featured Products Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[var(--color-black)]">
            Featured Products
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[var(--color-charcoal-gray)]">
            Discover our curated selection of premium, hard-to-find components.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative">
                <img
                  alt="High-performance circuit board"
                  className="w-full h-56 object-cover"
                  src="/fire alarm.jpg"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[var(--color-black)]">
                  Fire Alarm Sounder
                </h3>
                <p className="mt-2 text-[var(--color-charcoal-gray)]">
                  A ceiling or wall-mounted fire alarm sounder that produces an
                  audible alert during an emergency. It is a common component in
                  building fire safety systems
                </p>
                <div className="mt-4 flex justify-end">
                  <Link
                    href="/products/product-a"
                    className="btn btn-outline text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative">
                <img
                  alt="Rare electronic component"
                  className="w-full h-56 object-cover"
                  src="/rspro.jpg"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[var(--color-black)]">
                  RS PRO Lithium-Ion Rechargeable Battery Pack
                </h3>
                <p className="mt-2 text-[var(--color-charcoal-gray)]">
                  A 14.4V, 3.5Ah rechargeable Li-ion battery pack designed for
                  use in various electronic devices and custom projects
                </p>
                <div className="mt-4 flex justify-end">
                  <Link
                    href="/products/product-b"
                    className="btn btn-outline text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative">
                <img
                  alt="Obsolete circuit board"
                  className="w-full h-56 object-cover"
                  src="./siemens indicator.jpg"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[var(--color-black)]">
                  Siemens Indicator Light Module
                </h3>
                <p className="mt-2 text-[var(--color-charcoal-gray)]">
                  A 24V DC LED indicator light module for industrial control
                  panels. It provides visual status indication for machinery and
                  processes.
                </p>
                <div className="mt-4 flex justify-end">
                  <Link
                    href="/products/product-c"
                    className="btn btn-outline text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-24 bg-white p-8 md:p-12 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white/70 rounded-xl shadow-lg p-8 md:p-12 max-w-lg mx-auto">
              <h2 className="text-3xl font-bold text-[var(--color-black)] mb-2">
                Get in Touch
              </h2>
              <p className="mb-6 text-[var(--color-charcoal-gray)]">
                Have questions or a specific component need? We are here to
                help.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    className="w-full bg-[var(--color-light-gray)]/60 border border-gray-200 rounded-lg py-3 px-4 focus:ring-2 focus:ring-[var(--color-primary)] focus:bg-white text-[var(--color-black)] transition"
                    placeholder="Name"
                    type="text"
                    required
                  />
                  <input
                    className="w-full bg-[var(--color-light-gray)]/60 border border-gray-200 rounded-lg py-3 px-4 focus:ring-2 focus:ring-[var(--color-primary)] focus:bg-white text-[var(--color-black)] transition"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </div>
                <input
                  className="w-full bg-[var(--color-light-gray)]/60 border border-gray-200 rounded-lg py-3 px-4 focus:ring-2 focus:ring-[var(--color-primary)] focus:bg-white text-[var(--color-black)] transition"
                  placeholder="Subject"
                  type="text"
                  required
                />
                <textarea
                  className="w-full bg-[var(--color-light-gray)]/60 border border-gray-200 rounded-lg py-3 px-4 focus:ring-2 focus:ring-[var(--color-primary)] focus:bg-white text-[var(--color-black)] transition"
                  placeholder="Message"
                  rows={5}
                  required
                />
                <div className="text-right">
                  <button
                    className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg shadow transition focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="flex flex-col h-full">
              {/* Interactive Map */}
              <div className="h-80 w-full rounded-lg overflow-hidden shadow-md mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.613158537003!2d77.579118!3d12.9945009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150ebb9fb58b%3A0xd2489f780c6a2866!2sa2d%20circuits!5e0!3m2!1sen!2sin!4v1693821384825!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="a2d Circuits Location"
                />
              </div>

              {/* Contact Information */}
              <div className="bg-[var(--color-warm-white)] rounded-lg p-6 flex-1">
                <h3 className="text-lg font-semibold text-[var(--color-black)] mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <svg
                        className="w-5 h-5 text-[var(--color-primary)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-black)]">
                        Phone
                      </p>
                      <p className="text-[var(--color-charcoal-gray)]">
                        (+91)9060315590
                      </p>
                      <p className="text-[var(--color-charcoal-gray)]">
                        (+91)9739880388
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <svg
                        className="w-5 h-5 text-[var(--color-primary)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-black)]">
                        Email
                      </p>
                      <p className="text-[var(--color-charcoal-gray)]">
                        a2dcircuits123@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <svg
                        className="w-5 h-5 text-[var(--color-primary)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-black)]">
                        Business Hours
                      </p>
                      <p className="text-[var(--color-charcoal-gray)]">
                        Mon-Thu, 10am-6pm PST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <svg
                        className="w-5 h-5 text-[var(--color-primary)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-black)]">
                        Address
                      </p>
                      <p className="text-[var(--color-charcoal-gray)]">
                        a2d circuits, # 51/1 , Shree Krishna Kunj Central street
                        btw 8,
                        <br />
                        Techville, CA 91234
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
