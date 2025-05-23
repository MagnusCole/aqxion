"use client";
import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[color:var(--color-bg)] border-b border-gray-200 transition-all shadow-sm h-[80px]">
      <Container>
        <div className="flex items-center justify-between h-[80px] px-[80px]">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-xl tracking-tight text-[color:var(--color-text)]">AQXION</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#thesis" 
              className="text-[color:var(--color-text)] hover:text-[color:var(--color-accent-blue)] font-medium transition-colors"
            >
              Thesis
            </Link>
            <Link 
              href="#criteria" 
              className="text-[color:var(--color-text)] hover:text-[color:var(--color-accent-blue)] font-medium transition-colors"
            >
              Criteria
            </Link>
            <Link 
              href="#refer" 
              className="text-[color:var(--color-text)] hover:text-[color:var(--color-accent-blue)] font-medium transition-colors"
            >
              Refer
            </Link>
            <Link 
              href="#connect" 
              className="text-[color:var(--color-text)] hover:text-[color:var(--color-accent-blue)] font-medium transition-colors"
            >
              Connect
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-[color:var(--color-text)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
}