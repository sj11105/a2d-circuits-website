import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-[var(--color-warm-white)] text-[var(--color-charcoal-gray)] min-h-screen">
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}
