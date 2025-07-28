/**
 * Header Component - Mobile-First Design for AQXION
 * Solo branding de la empresa y CTA button optimizado para mobile
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  onModalOpen: () => void;
}

/**
 * Header Component - Clean branding with single CTA, mobile-first
 */
export const Header: React.FC<HeaderProps> = ({ onModalOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection optimizado - passive listener para performance
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur border-b shadow-sm' : 'bg-transparent'
      }`}
      role="banner"
    >
      {/* Mobile-first container */}
      <div className="w-full px-3 sm:px-4 lg:px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          
          {/* Logo/Brand - Solo AQXION - Mobile-first */}
          <Link 
            href="/" 
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
            aria-label="AQXION"
          >
            {/* Logo AQXION con fondo rojo */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-peru-red rounded-lg flex items-center justify-center p-1.5 sm:p-2">
              <Image
                src="/logo-white.svg"
                alt="AQXION Logo"
                width={24}
                height={24}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            
            {/* Text branding - Solo AQXION */}
            <div className="flex items-center">
              <span className="text-peru-red font-bold text-lg sm:text-xl lg:text-2xl">AQXION</span>
            </div>
          </Link>

          {/* Single CTA Button - Mobile-first */}
          <button
            onClick={onModalOpen}
            className="bg-peru-red hover:bg-red-700 text-white px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 rounded-lg font-semibold text-xs sm:text-sm lg:text-base transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
            aria-label="Hablemos de tu negocio"
          >
            <span className="hidden sm:inline">Hablemos de tu negocio</span>
            <span className="sm:hidden">Hablemos</span>
          </button>
        </div>
      </div>
    </header>
  );
};