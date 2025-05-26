// sections/FooterSectionSimple.tsx
"use client";

import React from 'react';
import Link from 'next/link';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSectionSimpleProps {
  links?: FooterLink[];
  disclaimer?: string;
  copyright?: string;
  className?: string;
}

/**
 * Sección Footer Simplificada - Optimizada para marketing digital
 */
export const FooterSectionSimple: React.FC<FooterSectionSimpleProps> = ({
  links = [
    { label: 'Inicio', href: '#' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Por qué elegirnos', href: '#solucion' },
    { label: 'El problema', href: '#problema' },
    { label: 'Contacto', href: '#contacto' },
  ],
  disclaimer = 'Resultados pueden variar según el mercado, industria y nivel de implementación. Ofrecemos garantía de satisfacción: si no ves resultados en 90 días, seguimos trabajando sin costo adicional hasta lograrlo.',
  copyright = `© ${new Date().getFullYear()} AQXION. Todos los derechos reservados.`,
  className = ""
}) => {
  return (
    <section className={`bg-gray-50 pt-16 pb-8 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo y descripción */}
          <div>
            <div className="mb-4 text-2xl text-gray-800">
              <span className="font-bold">AQXION</span>
              <span className="font-normal">.com</span>
            </div>
            <p className="text-gray-600 mb-6">
              Transformamos negocios locales en líderes digitales con estrategias personalizadas que generan clientes reales y resultados medibles.
            </p>
            <div className="flex">
              <a href="https://linkedin.com/company/aqxion" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-blue-600">✉️</span>
                <a href="mailto:deals@aqxion.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  deals@aqxion.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600">🕒</span>
                <span className="text-gray-600">Disponibles 24/7</span>
              </li>
            </ul>
            <div className="mt-6">
              <button
                onClick={() => window.open('https://calendly.com/luis-aqxion/30min', '_blank')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm"
              >
                Agenda una consulta gratuita
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-200 pt-8 pb-6">
          <p className="text-gray-600 text-sm text-center max-w-4xl mx-auto">
            {disclaimer}
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            {copyright}
          </p>
          <div className="flex space-x-4">
            <Link href="/privacidad" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
