import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function PrimaryButton({ href, children, className = '' }: ButtonProps) {
  return (
    <Link 
      href={href}
      className={`inline-block bg-[color:var(--color-accent-blue)] text-white px-6 py-3 rounded-[var(--border-radius)] font-medium hover:brightness-90 transition-all shadow-md ${className}`}
    >
      {children}
    </Link>
  );
}

export function OutlineButton({ href, children, className = '' }: ButtonProps) {
  return (
    <Link 
      href={href}
      className={`inline-block border border-[color:var(--color-accent-blue)] text-[color:var(--color-text)] px-6 py-3 rounded-[var(--border-radius)] font-medium hover:brightness-90 transition-all ${className}`}
    >
      {children}
    </Link>
  );
}