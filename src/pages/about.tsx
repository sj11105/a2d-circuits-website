import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - a2d Circuits</title>
        <meta
          name="description"
          content="Learn about a2d Circuits - founded in 2005, we are your trusted partner for rare and obsolete electronic components."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className=" min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-white via-blue-50 to-blue-100">
          <div className="mx-auto max-w-4xl text-center rounded-2xl shadow-xl p-8 md:p-14 bg-white/80">
            <h1 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-blue-900">
              About a2d Circuits
            </h1>

            <p className="mt-6 text-lg md:text-xl text-[var(--color-charcoal-gray)] leading-relaxed">
              Founded in 2005 by electronics enthusiast Alex Johnson, a2d
              Circuits was born from a vision to provide access to rare and
              obsolete electronic components. What started as a small workshop
              has blossomed into a globally trusted source for engineers,
              hobbyists, and businesses. Our unwavering commitment to quality
              and customer satisfaction remains the cornerstone of our success.
            </p>
          </div>
        </section>

       

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-[var(--color-black)]">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div
                  className="mx-auto mb-4 h-32 w-32 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHGQbeqVqIaLL8zvmS--5P0M9iQayOv78_RbSTQmpW6wAwhshs9Vx9hzW4Cp3-2oXu9t3OxL3snFsbntDPdxpFnZ9MmH1EH_E03uE2nyd4-038n9miPfQbriN08VEkpQw57k_9UacR2ArFQkWuF4cOBTKMfYafAK5lR6noxYYP3pfz3eY3alJca03zKktYm7uds3zCK6HONU6nXOj_YlxrN20Wh1R3Fc-Zr-wyPrh9OUCtKkvhz_tyiQ60EKlySXyVO1TpOycBXP4")`,
                  }}
                />
                <h3 className="text-lg font-bold text-[var(--color-black)]">
                  Alex Johnson
                </h3>
                <p className="text-[var(--color-charcoal-gray)]">
                  Founder & CEO
                </p>
              </div>
              <div className="text-center">
                <div
                  className="mx-auto mb-4 h-32 w-32 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMaqCVbfhxdwiFpFlboGDaTQ4thdvuy90QyHsraPEZieQnu3xPtNjyDTKKrAGU6OcEKZXAqMpJhkewU6WUOnNclGet_KFfhMY_QK7LD0MyVw0ujyF1nr15va6LtSyuWbQLfT9gw9YUVNJgBWpuTxw9zZr4ca64sl-7AIn2aVcrp7hCDrx9q7UWnU8O7EwNUjXdiq7PvI0BXcBHOqfzKLZGIcIyuXj0s3Fz9jBcwSY0R_qJU6QjixqexcDbq31045z2FGiD6H1Hcok")`,
                  }}
                />
                <h3 className="text-lg font-bold text-[var(--color-black)]">
                  Sarah Lee
                </h3>
                <p className="text-[var(--color-charcoal-gray)]">
                  Operations Manager
                </p>
              </div>
              <div className="text-center">
                <div
                  className="mx-auto mb-4 h-32 w-32 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwYbWeOXVB3coCliBCwr8lJxfqRvoHaF_vZtfhZSV8ItBnbch-gPuMJ9EbQ_EC-tufxLP_yaMLr37jY_E4HWlTrsU3OavMMeDMbom_L35XtmfHGGClF_i0HGjOBH-tP4bMggHq1FhE0wddSpgFPaGUNu5gEnnw75WgDEbhp7sfU0tzTX80g3twUHWLCniDCBMjwmBHyn1q8fRiArH2eoyxXyJisOh3iHEv5E_JXIufmF_4WI3X1qXdsXEOtggdx5qUMleLU8-v6nw")`,
                  }}
                />
                <h3 className="text-lg font-bold text-[var(--color-black)]">
                  Mark Davis
                </h3>
                <p className="text-[var(--color-charcoal-gray)]">
                  Technical Specialist
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[var(--color-primary)] py-24 px-4 text-center sm:px-8 lg:px-20">
          <div className="mx-auto max-w-2xl rounded-2xl bg-white/5 shadow-xl p-10">
            <h2 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl mb-4">
              Ready to find your components?
            </h2>
            <p className="mt-4 text-lg text-white/80 mb-8">
              Get in touch with our team or explore our extensive product
              catalog.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="btn btn-primary bg-white text-[var(--color-primary)] font-semibold px-7 py-3 rounded-full shadow-md hover:bg-gray-100 transition-all focus:ring-2 focus:ring-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
