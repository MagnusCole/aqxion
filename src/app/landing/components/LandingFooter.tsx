import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const LandingFooter: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Image 
              src="/assets/logo/aqxion_logo.svg" 
              alt="AQXION" 
              width={32} 
              height={32} 
              className="w-8 h-auto"
            />
            <span className="text-lg font-bold text-gray-900">AQXION</span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <Link 
              href="/" 
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Inicio
            </Link>
            <Link 
              href="/contacto" 
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Contacto
            </Link>
            <Link 
              href="/terminos-privacidad" 
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Términos y Privacidad
            </Link>
          </div>

          {/* Contact */}
          <div className="text-sm text-gray-600">
            <a 
              href="mailto:deal@aqxion.com" 
              className="hover:text-blue-600 transition-colors duration-200"
            >
              deal@aqxion.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AQXION. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
