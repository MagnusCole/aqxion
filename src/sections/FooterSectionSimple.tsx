// sections/FooterSectionSimple.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { trackEmailClick } from '@/lib/analytics';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSectionSimpleProps {
  links?: FooterLink[];
  copyright?: string;
  className?: string;
}

/**
 * Sección Footer Minimalista - Enfoque conciso sin distracciones
 */
export const FooterSectionSimple: React.FC<FooterSectionSimpleProps> = ({  
  links = [],
  copyright = `© ${new Date().getFullYear()} AQXION. Todos los derechos reservados.`,
  className = ""
}) => {  return (
    <footer className={`bg-blue-50 py-8 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4 md:mb-0 md:w-1/4">
            <Image 
              src="/assets/logo/aqxion_logo.svg" 
              alt="AQXION" 
              width={120} 
              height={120} 
              priority
              className="w-8 h-auto"
            />
            <span className="text-lg">
              <span className="font-bold">AQXION</span>
            </span>
          </div>          {/* Enlaces centrados */}
          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0 md:w-2/4">
            {links.map((link, index) => (
              <Link key={index} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Contacto a la derecha */}
          <div className="md:w-1/4 flex justify-end">
            <a 
              href="mailto:deal@aqxion.com" 
              onClick={trackEmailClick}
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
            >
              deal@aqxion.com
            </a>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-200 pt-4 text-center">
          <p className="text-gray-500 text-xs">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
