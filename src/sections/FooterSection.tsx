// sections/FooterSection.tsx
"use client";

import React from 'react';
import Link from 'next/link';

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
    <footer className={`bg-gray-50 py-[1.618rem] * 5 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Navigation - espaciado áureo */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-[1.618rem] * 4 space-y-[1.618rem] md:space-y-0">
          <div className="text-2xl font-bold text-gray-900">AQXION</div>
          <nav className="flex flex-wrap justify-center gap-x-[1.618rem] gap-y-[0.618rem]">
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
        </div>
        
        {/* Disclaimer prominente con fondo claro para mejor legibilidad */}
        <div className="border-t border-gray-200 pt-[1.618rem] mt-[1.618rem] text-center">
          {/* Disclaimer con borde y fondo para destacarlo */}
          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-300 mb-[1.618rem]">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Aviso importante</h3>
            <p className="text-gray-700 leading-[1.618] text-base">
              {footerDisclaimer}
            </p>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center">
            {copyright || `© ${new Date().getFullYear()} AQXION. Todos los derechos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  );
};