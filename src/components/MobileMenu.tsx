'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Navigation Button */}
      <div className="md:hidden flex items-center space-x-2">
        <a href="/empezar" className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-green-700 transition-all duration-200 shadow-md">
          Empezar
        </a>
        <button 
          type="button" 
          className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-600 hover:text-green-600 hover:bg-green-50 transition-all duration-200"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Abrir menú</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="pb-4 pt-2 space-y-1 border-t border-neutral-100">
          <a 
            href="/guias" 
            className="block px-3 py-3 text-base font-medium text-neutral-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            📚 Guías
          </a>
          <a 
            href="/recursos" 
            className="block px-3 py-3 text-base font-medium text-neutral-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            🛠️ Recursos
          </a>
          <a 
            href="/cursos" 
            className="block px-3 py-3 text-base font-medium text-neutral-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            🎓 Cursos
          </a>
          <div className="pt-2">
            <a 
              href="/empezar" 
              className="block w-full bg-green-600 text-white px-4 py-3 rounded-lg text-base font-semibold hover:bg-green-700 transition-all duration-200 text-center shadow-md"
              onClick={() => setIsOpen(false)}
            >
              🚀 Empezar Ahora
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
