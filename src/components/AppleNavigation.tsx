'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function AppleNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    },
    visible: { 
      opacity: 1, 
      height: "auto" as const,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-lg' 
          : 'bg-white/80 backdrop-blur-xl border-b border-slate-200/30'
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          
          {/* Enhanced Logo with animation */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="/" className="group flex items-center gap-3">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  rotate: 5,
                  boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.4)"
                }}
              >
                <motion.span 
                  className="text-white font-bold text-lg"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  A
                </motion.span>
              </motion.div>
              <motion.span 
                className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors duration-300"
                whileHover={{ x: 2 }}
              >
                MyPerú
              </motion.span>
            </a>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            
            {/* Navigation links with hover effects */}
            <div className="flex items-center gap-8">
              <motion.a 
                href="#preview" 
                className="relative text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300 text-sm tracking-wide group"
                whileHover={{ y: -1 }}
              >
                Soluciones
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.a 
                href="/empezar" 
                className="relative text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300 text-sm tracking-wide group"
                whileHover={{ y: -1 }}
              >
                Recursos
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
            
            {/* Enhanced CTA Button */}
            <motion.a 
              href="/empezar" 
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2.5 text-sm font-medium rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Empezar
                <motion.div
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-slate-100/80 hover:bg-slate-200/80 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-5 h-5 text-slate-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-5 h-5 text-slate-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-xl"
            >
              <div className="px-4 py-6 space-y-4">
                <motion.a
                  href="#preview"
                  className="block text-slate-700 hover:text-emerald-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 4 }}
                >
                  Soluciones
                </motion.a>
                <motion.a
                  href="/empezar"
                  className="block text-slate-700 hover:text-emerald-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 4 }}
                >
                  Recursos
                </motion.a>
                <motion.a
                  href="/empezar"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-medium mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Sparkles className="w-4 h-4" />
                  Empezar Ahora
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
