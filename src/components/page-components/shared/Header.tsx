/**
 * 🍃 Header Component - INVISIBLE ELEGANCE
 * 
 * Minimalista como el aire: presente pero invisible.
 * Solo letras, acompaña sin robar atención.
 */

'use client';

import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  onModalOpen: () => void;
}

/**
 * Header Component - Elegancia invisible fija
 */
export const Header: React.FC<HeaderProps> = ({ onModalOpen }) => {

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      {/* Container minimalista */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-center h-12 sm:h-14">
          
          {/* Solo letras - Elegancia pura */}
          <Link 
            href="/" 
            className="text-lg sm:text-xl font-medium text-gray-900 hover:text-peru-red transition-colors duration-200"
          >
            AQXION
          </Link>

        </div>
      </div>
    </header>
  );
};