"use client";
import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[color:var(--color-gray-light)] py-8" id="connect">
      <Container>
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="font-bold text-xl tracking-tight text-[color:var(--color-text)]">
            AQXION
          </div>
          
          <div className="text-[14px] text-[color:var(--color-gray-mid)]">
            <Link href="/privacy" className="hover:text-[color:var(--color-accent-blue)] transition-colors">Privacy</Link>
            <span className="mx-2">·</span>
            <Link href="/legal" className="hover:text-[color:var(--color-accent-blue)] transition-colors">Legal</Link>
            <span className="mx-2">·</span>
            <a href="mailto:careers@aqxion.com" className="hover:text-[color:var(--color-accent-blue)] transition-colors">careers@aqxion.com</a>
          </div>
          
          <div className="text-sm text-[color:var(--color-muted)]">
            © {new Date().getFullYear()} AQXION. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}