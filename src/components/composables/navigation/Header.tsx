"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

/**
 * Componente Header - Encabezado simplificado de la página
 */

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface HeaderProps {
  items?: NavItem[];
  logo?: React.ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  items = [
    { label: "Inicio", href: "/" },
    { label: "Tu problema", href: "#problema" },
    { label: "Por qué elegirnos", href: "#servicios" },
  ],
  logo,
  className = ''
})=> {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { ref } = useScrollAnimation({ delay: 100 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      ref={ref}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      } ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            {logo}
          </div>          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-6">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`px-2 py-1 text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    item.isActive 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          
          {/* Spacer div for balance */}
          <div className="w-[100px]"></div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-3 bg-white border-t mt-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
