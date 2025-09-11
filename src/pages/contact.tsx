import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle product quote parameters
  useEffect(() => {
    if (router.isReady) {
      const { product, code, price, inquiryType } = router.query;
      
      if (inquiryType === 'quote' && product) {
        setFormData(prev => ({
          ...prev,
          subject: `Quote Request - ${product}`,
          message: `Hello,

I would like to request a quote for the following product:

Product: ${product}
Code: ${code}
Listed Price: ${price}

Please provide me with:
- Current availability
- Bulk pricing options
- Lead time
- Shipping details

Thank you for your time.

Best regards,`
        }));
      }
    }
  }, [router.isReady, router.query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`
Dear a2d Circuits Team,

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent through the a2d Circuits website contact form.
    `);
    
    // Create mailto link
    const mailtoLink = `mailto:a2dcircuits123@gmail.com?subject=${subject}&body=${body}`;
    
    // Try to open the user's email client
    try {
      window.location.href = mailtoLink;
      
      // Show success message
      alert("Your email client should have opened with a pre-filled message. Please send the email from your email client.");
      
      // Optional: Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error opening email client:", error);
      alert("Unable to open email client. Please manually send an email to: a2dcircuits123@gmail.com");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Head>
        <title>Contact Us - a2d Circuits</title>
        <meta
          name="description"
          content="Get in touch with a2d Circuits. We're here to help with your electronic component needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-[var(--color-warm-white)] min-h-screen pt-24">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-black)] sm:text-5xl">
                  Get in Touch
                </h1>
                <p className="mt-4 text-lg text-[var(--color-charcoal-gray)]">
                  We&apos;re here to help! Whether you have a question about our
                  products, need assistance with an order, or just want to say
                  hello, we&apos;d love to hear from you.
                </p>
              </div>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label 
                    className="block text-sm font-medium text-[var(--color-black)]" 
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      className="block w-full rounded-full border-gray-300 bg-white py-3 px-4 shadow-sm focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    className="block text-sm font-medium text-[var(--color-black)]" 
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      className="block w-full rounded-full border-gray-300 bg-white py-3 px-4 shadow-sm focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    className="block text-sm font-medium text-[var(--color-black)]" 
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      className="block w-full rounded-full border-gray-300 bg-white py-3 px-4 shadow-sm focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                      id="subject"
                      name="subject"
                      placeholder="Inquiry about..."
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    className="block text-sm font-medium text-[var(--color-black)]" 
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      className="block w-full rounded-2xl border-gray-300 bg-white py-3 px-4 shadow-sm focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <button
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-[var(--color-primary)] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] transition-all duration-300 hover:scale-105"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-[var(--color-black)] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4 text-[var(--color-charcoal-gray)]">
                  <p className="flex items-center">
                    <span className="font-semibold text-[var(--color-black)] w-24">
                      Phone:
                    </span>
                    (+91)90603 15590 <br></br>
                    (+91)97398 80388
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold text-[var(--color-black)] w-24">
                      Email:
                    </span>
                    a2dcircuits123@gmail.com
                  </p>
                  <p className="flex items-start ">
                    <span className="font-semibold text-[var(--color-black)] w-24 ">
                      Address:
                    </span>
                    a2d circuits, # 51/1 , Shree Krishna Kunj Central street btw
                    8, 9th Cross Road, near bwssb office, Kumara Park West,
                    Bengaluru, Karnataka 560020
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-[var(--color-black)] mb-6">
                  Business Hours
                </h2>
                <div className="space-y-2 text-[var(--color-charcoal-gray)]">
                  <p>
                    <span className="font-semibold text-[var(--color-black)] w-30 inline">
                      Monday - Thursday:
                    </span> 
                    10 AM - 6 PM
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--color-black)] w-32 inline-block">
                      Saturday:
                    </span> 
                    10 AM - 6 PM
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--color-black)] w-32 inline-block">
                      Sunday:
                    </span> 
                    Closed
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-[var(--color-black)] mb-6">
                  Quick Support
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                      <svg 
                        className="w-4 h-4 text-[var(--color-primary)]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-black)] text-sm">
                        Technical Support
                      </h3>
                      <p className="text-sm text-[var(--color-charcoal-gray)]">
                        Need help with component specifications? Our experts are
                        here to assist.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                      <svg 
                        className="w-4 h-4 text-[var(--color-primary)]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-black)] text-sm">
                        Order Support
                      </h3>
                      <p className="text-sm text-[var(--color-charcoal-gray)]">
                        Questions about your order? We&apos;ll track it down and
                        keep you updated.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                      <svg 
                        className="w-4 h-4 text-[var(--color-primary)]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-black)] text-sm">
                        Component Search
                      </h3>
                      <p className="text-sm text-[var(--color-charcoal-gray)]">
                        Can&apos;t find what you need? Let us source that
                        hard-to-find component for you.
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
