'use client';

import { useState, useEffect } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('[data-mobile-menu]')) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Navigation Button */}
      <div className="md:hidden flex items-center space-x-2" data-mobile-menu>
        <a 
          href="/empezar" 
          className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Empezar
        </a>
        <button 
          type="button" 
          className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-600 hover:text-green-600 hover:bg-green-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={toggleMenu}
        >
          {!isOpen ? (
            // Hamburger icon
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          ) : (
            // Close icon
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 md:hidden"
          data-mobile-menu
        >
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-neutral-100">
                <a 
                  href="/" 
                  className="text-xl font-bold text-neutral-900 hover:text-green-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  AQXION
                </a>
                <button 
                  type="button"
                  className="p-2 rounded-lg text-neutral-600 hover:text-green-600 hover:bg-green-50 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                  aria-label="Cerrar menú"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 py-6 px-4 space-y-2">
                {/* No navigation links - direct to CTA */}
              </div>

              {/* Bottom CTA */}
              <div className="p-4 border-t border-neutral-100">
                <a 
                  href="/empezar" 
                  className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>🚀</span>
                    <span>Empezar Ahora</span>
                  </div>
                  <div className="text-sm text-green-100 mt-1">Gratis y sin compromiso</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
