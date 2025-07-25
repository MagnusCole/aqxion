'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, User, LogOut, BarChart3 } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

interface HeaderProps {
  onModalOpen?: () => void;
}

export const Header = ({ onModalOpen }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm' 
            : 'bg-white/80 backdrop-blur-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo - Peruano */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-white font-bold text-lg sm:text-xl">A</span>
              </motion.div>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">
                  AQXION
                </h1>
                <p className="text-xs text-red-600 hidden sm:block font-medium">Impulsa tu MYPE</p>
              </div>
            </Link>

            {/* Navigation Links - Desktop */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <motion.button
                onClick={() => scrollToSection('problema')}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors text-sm xl:text-base relative group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Problema
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('solucion')}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors text-sm xl:text-base relative group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Solución
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('oferta')}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors text-sm xl:text-base relative group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Oferta
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            </nav>

            {/* Auth Section */}
            <div className="flex items-center gap-2 sm:gap-3">
              {status === 'loading' ? (
                <div className="hidden sm:flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ) : session ? (
                // Usuario logueado - Portal OCULTO (solo para clientes que paguen)
                <div className="hidden lg:flex items-center gap-3">
                  <motion.div 
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 max-w-24 truncate">
                      {session.user?.name?.split(' ')[0] || 'Usuario'}
                    </span>
                  </motion.div>
                  
                  <motion.button
                    onClick={handleSignOut}
                    className="p-2.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Cerrar sesión"
                  >
                    <LogOut className="w-4 h-4" />
                  </motion.button>
                </div>
              ) : (
                // Usuario no logueado
                <div className="hidden lg:flex items-center gap-3">
                  <Link href="/auth/signin">
                    <motion.button
                      className="text-gray-700 hover:text-red-600 font-medium transition-colors px-4 py-2.5 text-sm"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      Iniciar Sesión
                    </motion.button>
                  </Link>
                  
                  <Link href="/auth/signup">
                    <motion.button
                      className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2.5 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 font-medium shadow-lg text-sm flex items-center gap-2"
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Empezar Ahora
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              )}

              {/* Mobile: Primary Action + Menu */}
              <div className="lg:hidden flex items-center gap-2">
                {session ? (
                  // Sin acceso al portal en móvil tampoco
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Hola, {session.user?.name?.split(' ')[0]}</span>
                  </div>
                ) : (
                  <Link href="/auth/signup">
                    <motion.button
                      className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 font-medium shadow-lg text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Empezar
                    </motion.button>
                  </Link>
                )}
                
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-gray-700 hover:text-red-600 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
              <nav className="space-y-4">
                {/* Navigation Links */}
                <motion.button
                  onClick={() => scrollToSection('problema')}
                  className="block w-full text-left text-gray-700 hover:text-red-600 font-medium transition-colors py-3 px-2 rounded-lg hover:bg-red-50"
                  whileTap={{ scale: 0.98 }}
                >
                  Problema
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('solucion')}
                  className="block w-full text-left text-gray-700 hover:text-red-600 font-medium transition-colors py-3 px-2 rounded-lg hover:bg-red-50"
                  whileTap={{ scale: 0.98 }}
                >
                  Solución
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('oferta')}
                  className="block w-full text-left text-gray-700 hover:text-red-600 font-medium transition-colors py-3 px-2 rounded-lg hover:bg-red-50"
                  whileTap={{ scale: 0.98 }}
                >
                  Oferta
                </motion.button>

                {/* Divider */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Auth Actions */}
                {status === 'loading' ? (
                  <div className="space-y-3">
                    <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                  </div>
                ) : session ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{session.user?.name}</p>
                        <p className="text-sm text-gray-600">{session.user?.email}</p>
                      </div>
                    </div>
                    
                    {/* Portal oculto - solo para clientes que paguen */}
                    
                    <motion.button
                      onClick={handleSignOut}
                      className="block w-full text-red-600 hover:bg-red-50 px-4 py-3 rounded-lg transition-all duration-200 font-medium text-center"
                      whileTap={{ scale: 0.98 }}
                    >
                      Cerrar Sesión
                    </motion.button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link href="/auth/signin">
                      <motion.button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full text-gray-700 hover:bg-gray-50 px-4 py-3 rounded-lg transition-all duration-200 font-medium text-center border border-gray-300"
                        whileTap={{ scale: 0.98 }}
                      >
                        Iniciar Sesión
                      </motion.button>
                    </Link>
                    
                    <Link href="/auth/signup">
                      <motion.button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 font-medium shadow-lg text-center"
                        whileTap={{ scale: 0.98 }}
                      >
                        Empezar Ahora
                      </motion.button>
                    </Link>
                  </div>
                )}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
