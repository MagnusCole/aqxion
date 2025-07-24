'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface HeaderProps {
  onModalOpen: () => void;
}

export const Header = ({ onModalOpen }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función de scroll suave mejorada
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Espacio para el header fijo
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-red-100 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo real de AQXION con fondo rojo y bordes redondeados */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-12 h-12 bg-peru-red rounded-lg flex items-center justify-center shadow-md">
              <img 
                src="/logo-white.svg" 
                alt="AQXION Logo" 
                className="w-8 h-8"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-red-700">
                AQXION
              </h1>
              <p className="text-xs text-red-600">Impulsa tu MYPE</p>
            </div>
          </motion.div>

          {/* Navigation Links - scroll suave mejorado */}
          <nav className="hidden md:flex items-center gap-8">
            <motion.button
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              ¿Cómo Funciona?
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('precios')}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Oferta
            </motion.button>
          </nav>

          {/* CTAs con colores sólidos peruanos */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={onModalOpen}
              className="bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 transition-all duration-200 font-medium shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Conversemos
            </motion.button>
            <motion.a
              href="/portal"
              className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-200 font-medium shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Acceder Portal
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
