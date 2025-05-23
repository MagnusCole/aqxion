// sections/FooterSection.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Interfaces para parametrización de FooterSection
 */
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSectionProps {
  links?: FooterLink[];
  disclaimer?: string;
  copyright?: string;
  className?: string;
}

/**
 * Sección Footer - Con fondo claro y disclaimer prominente
 */
export const FooterSection: React.FC<FooterSectionProps> = ({
  links = [],
  disclaimer,
  copyright,
  className = ""
}) => {
  // Enlaces predeterminados
  const defaultFooterLinks: FooterLink[] = [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre Nosotros', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  // Texto de descargo predeterminado
  const defaultDisclaimer = 'AQXION es un proyecto de adquisición estratégica actualmente en proceso de constitución formal. La información presentada refleja la visión, valores y trayectoria del equipo fundador, con un historial verificable en transacciones M&A y transformación de empresas.';
  
  // Usar valores proporcionados o predeterminados
  const footerLinks = links.length > 0 ? links : defaultFooterLinks;
  const footerDisclaimer = disclaimer || defaultDisclaimer;
  
  return (
    <footer className={`bg-gray-50 py-8 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Main footer row - Horizontal layout */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo and brand */}
          <div className="flex items-center gap-2">
              <Image 
                src="/assets/logo/aqxion_logo.svg" 
                alt="AQXION" 
                width={250} 
                height={250} 
                priority
                className="w-8 h-auto sm:w-10 md:w-12"
              />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl md:text-2xl">
                <span className="font-bold">AQXION</span>.com
              </span>
            </div>
          </div>

          {/* Center Navigation */}
          <nav className="flex items-center space-x-8 my-4 md:my-0">
            {footerLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <a 
            href="mailto:deals@aqxion.com"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            deals@aqxion.com
          </a>
        </div>

        {/* Disclaimer and copyright in a more compact format */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-600 mb-4 max-w-3xl mx-auto text-center">
            {footerDisclaimer}
          </p>
          <p className="text-sm text-gray-500 text-center">
            {copyright || `© ${new Date().getFullYear()} AQXION. Todos los derechos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  );
};