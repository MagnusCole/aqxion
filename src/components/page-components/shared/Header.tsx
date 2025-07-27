/**
 * Header Component - Mobile-First Navigation Optimizado
 * Diseño minimalista con máximo impacto para MYPEs peruanas
 * 
 * Principios aplicados:
 * - Mobile-first responsive design
 * - Clarity: Jerarquía visual clara
 * - Performance: <200MB RAM, sin dependencias pesadas
 * - Accessibility: ARIA labels, navegación por teclado
 * - Copy: Optimizado para MYPEs peruanas
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {
  onModalOpen: () => void;
}

/**
 * Navigation items - Copy optimizado para MYPEs peruanas
 * Enfoque persuasivo: Problema → Solución → Oportunidad
 */
const navigationItems = [
  { href: '/#problema', label: 'El Problema' },
  { href: '/#solucion', label: 'La Solución' },
  { href: '/#oferta', label: 'Tu Oportunidad' },
] as const;

/**
 * Header Component - Ultra-optimizado para <200MB RAM
 * Mobile-first, accesible, con branding MyPerú/Luis Noriega
 */
export const Header: React.FC<HeaderProps> = ({ onModalOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection optimizado - passive listener para performance
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleContactClick = () => {
    closeMobileMenu();
    onModalOpen();
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur border-b shadow-sm' : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo/Brand - Mobile-First con identidad peruana */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-xl sm:text-2xl font-bold text-gray-900 hover:text-red-600 transition-colors"
            aria-label="MyPerú - Impulsa tu MYPE"
          >
            <span className="text-red-600" role="img" aria-label="Bandera del Perú">🇵🇪</span>
            <span>MyPerú</span>
          </Link>

          {/* Desktop Navigation - Clean & Direct */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Navegación principal">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-red-600 font-medium text-sm lg:text-base transition-colors relative group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            
            {/* CTA Principal - Copy optimizado para conversion */}
            <button
              onClick={onModalOpen}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm lg:text-base transition-colors shadow-md hover:shadow-lg"
              aria-label="Agenda tu sesión estratégica"
            >
              Agenda tu Sesión
            </button>
          </nav>

          {/* Mobile Menu Button - Accesible */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-red-600 transition-colors"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              // X Icon - Cerrar
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon - Abrir
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - Simple & Effective */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden border-t bg-white shadow-lg"
            role="navigation"
            aria-label="Navegación móvil"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile CTA - Emphasis with emoji for warmth */}
              <button
                onClick={handleContactClick}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors shadow-md hover:shadow-lg"
                aria-label="Agenda tu sesión estratégica"
              >
                🚀 Agenda tu Sesión Estratégica
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};