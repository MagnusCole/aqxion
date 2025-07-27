/**
 * Header Component - Navigation & Brand Identity
 * 
 * Responsive header component with sticky navigation, brand logo,
 * mobile-first design, and accessibility compliance. Features smooth
 * animations and optimized performance.
 * 
 * @features
 * - Sticky header with backdrop blur on scroll
 * - Responsive mobile menu with smooth animations
 * - Brand logo with hover effects and proper contrast
 * - Accessible navigation with keyboard support
 * - Performance optimized with React.memo and useCallback
 * - Semantic HTML with proper ARIA attributes
 * 
 * @example
 * ```tsx
 * <Header onModalOpen={() => setContactModalOpen(true)} />
 * ```
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import type { HeaderProps } from '@/types/components';

/**
 * Navigation items configuration
 */
const navigationItems = [
  { href: '/#problema', label: 'Problema', 'aria-label': 'Ver sección del problema' },
  { href: '/#solucion', label: 'Solución', 'aria-label': 'Ver nuestra solución' },
  { href: '/#oferta', label: 'Oferta', 'aria-label': 'Ver nuestra oferta' },
] as const;

/**
 * Header animation variants
 */
const headerVariants = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0 },
};

const mobileMenuVariants = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: 'auto' },
};

const menuItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: index * 0.1 },
  }),
};

/**
 * Header Component
 * 
 * Main navigation header with responsive design, smooth animations,
 * and comprehensive accessibility support.
 */
export const Header: React.FC<HeaderProps> = React.memo(({ onModalOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

  /**
   * Handle scroll events for header styling
   */
  const handleScroll = React.useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 10);
  }, []);

  /**
   * Setup scroll listener
   */
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  /**
   * Toggle mobile menu with accessibility support
   */
  const toggleMobileMenu = React.useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  /**
   * Close mobile menu
   */
  const closeMobileMenu = React.useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  /**
   * Handle modal open with menu close
   */
  const handleModalOpen = React.useCallback(() => {
    closeMobileMenu();
    onModalOpen();
  }, [onModalOpen, closeMobileMenu]);

  /**
   * Handle keyboard navigation
   */
  const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && isMobileMenuOpen) {
      closeMobileMenu();
    }
  }, [isMobileMenuOpen, closeMobileMenu]);

  /**
   * Compute header classes
   */
  const headerClassName = React.useMemo(
    () =>
      `fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-2xl border-b border-black/5 shadow-lg shadow-black/5' 
          : 'bg-transparent'
      }`,
    [isScrolled]
  );

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="initial"
        animate="animate"
        className={headerClassName}
        onKeyDown={handleKeyDown}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div 
            className="flex items-center justify-between h-16 sm:h-20"
            style={{
              backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
            }}
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-shrink-0"
            >
              <Link 
                href="/" 
                className="group flex items-center gap-3"
                aria-label="MyPerú - Ir al inicio"
              >
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:from-red-600 group-hover:to-red-700">
                  <svg 
                    width="28" 
                    height="28" 
                    viewBox="0 0 1536 1536" 
                    fill="none"
                    className="text-white w-6 h-6 sm:w-7 sm:h-7"
                    aria-hidden="true"
                  >
                    <path 
                      d="M 748.5 315.449219 C 700.5 398.101562 595.5 577.648438 587.101562 591.300781 C 584.699219 595.351562 582.300781 598.5 581.851562 598.5 C 581.101562 598.5 560.398438 564.300781 545.25 538.050781 L 541.199219 531 L 442.949219 531 C 364.949219 531 344.851562 531.449219 345.449219 532.800781 C 345.75 533.851562 376.949219 586.050781 414.75 648.75 L 483.300781 762.75 L 480.148438 768.75 C 478.351562 772.050781 445.050781 828 405.898438 893.25 L 334.949219 1011.75 L 616.949219 1013.25 L 644.851562 1059 C 689.851562 1132.648438 715.800781 1175.398438 742.949219 1220.699219 C 763.5 1255.050781 768.75 1262.851562 770.25 1261.199219 C 771.300781 1260.148438 782.851562 1241.398438 796.199219 1219.5 C 809.398438 1197.601562 829.050781 1165.199219 839.851562 1147.5 C 850.648438 1129.800781 873.449219 1092.148438 890.398438 1063.800781 L 921.449219 1012.5 L 1062.300781 1012.5 C 1139.699219 1012.5 1203 1012.199219 1203 1011.75 C 1203 1010.550781 1188.148438 985.648438 1117.199219 867.148438 C 1079.699219 804.75 1055.101562 762.300781 1055.851562 761.25 C 1056.601562 760.5 1070.851562 737.101562 1087.5 709.5 C 1104.300781 681.898438 1135.351562 630.449219 1156.648438 595.050781 L 1195.5 531 L 997.800781 531 L 977.851562 564.75 C 966.75 583.351562 957.300781 598.5 956.851562 598.5 C 956.398438 598.5 949.5 587.550781 941.699219 574.050781 C 933.898438 560.699219 909.449219 519 887.398438 481.5 C 865.351562 444 830.25 384.148438 809.699219 348.75 C 789 313.199219 771.300781 283.5 770.398438 282.449219 C 769.199219 281.101562 763.648438 289.5 748.5 315.449219 Z M 791.398438 496.199219 C 803.101562 515.699219 822.898438 549.300781 835.5 570.75 C 848.101562 592.199219 873.148438 634.351562 891 664.5 C 923.550781 719.25 960.75 782.101562 1016.101562 875.550781 C 1032.300781 903 1045.5 925.800781 1045.5 926.25 C 1045.5 926.699219 1027.800781 927 1006.199219 927 L 966.75 927 L 947.25 894.300781 C 936.601562 876.449219 917.398438 843.898438 904.5 822 C 891.601562 800.101562 865.949219 756.601562 847.351562 725.25 C 828.898438 693.898438 803.851562 651.601562 792 631.199219 C 780 610.800781 769.949219 594 769.5 594.148438 C 769.050781 594.148438 761.699219 606 753.148438 620.699219 C 731.550781 657.601562 708.75 696.300781 676.5 750.75 C 661.351562 776.25 639.300781 813.75 627.300781 834 C 615.449219 854.25 598.050781 883.351562 588.449219 898.800781 L 571.199219 927 L 531.449219 927 C 509.699219 927 492.148438 926.550781 492.449219 925.800781 C 492.75 925.199219 508.5 898.800781 527.550781 867 C 546.601562 835.199219 573 790.648438 586.5 768 C 618.601562 713.851562 672.300781 623.550781 714 553.5 C 732.449219 522.601562 752.398438 489 758.101562 478.949219 C 763.949219 468.898438 769.050781 460.648438 769.5 460.648438 C 769.949219 460.5 779.851562 476.550781 791.398438 496.199219 Z M 831.75 864 C 853.949219 900.601562 867.300781 924 866.699219 925.351562 C 864.75 930.898438 769.949219 1084.050781 769.199219 1083.300781 C 768 1082.101562 762 1072.5 718.5 1001.25 C 675.300781 930.601562 671.699219 924.300781 672.300781 922.949219 C 673.800781 920.398438 765.449219 767.101562 767.550781 763.800781 C 769.5 760.5 770.550781 762 794.550781 802.050781 C 808.199219 825 825 852.898438 831.75 864 Z M 831.75 864"
                      fill="currentColor" 
                      fillRule="nonzero"
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 group-hover:text-red-600 transition-all duration-300">
                  MyPerú
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav 
              className="hidden lg:flex items-center space-x-10"
              role="navigation"
              aria-label="Navegación principal"
            >
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 relative group"
                    aria-label={item['aria-label']}
                  >
                    {item.label}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </motion.div>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleModalOpen}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 relative group"
                aria-label="Abrir modal de contacto"
              >
                Contacto
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={handleModalOpen}
                  className="group relative inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-2xl hover:bg-red-600 transition-all duration-500 shadow-lg hover:shadow-xl overflow-hidden"
                  aria-label="Contactar - Abrir formulario de contacto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative z-10">Contactar</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
                </button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 -mr-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                id="mobile-navigation"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="lg:hidden overflow-hidden"
                style={{ 
                  backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="px-4 py-6 space-y-6 border-t border-gray-200/50">
                  <nav className="space-y-4" role="navigation" aria-label="Navegación móvil">
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        custom={index}
                        variants={menuItemVariants}
                        initial="closed"
                        animate="open"
                      >
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block text-base font-medium text-gray-900 hover:text-red-600 transition-colors duration-300 py-2"
                          aria-label={item['aria-label']}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <motion.div
                    custom={navigationItems.length}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    className="pt-4 border-t border-gray-200/50"
                  >
                    <button
                      onClick={handleModalOpen}
                      className="w-full bg-gray-900 text-white text-base font-semibold py-4 px-6 rounded-2xl hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2"
                      aria-label="Contactar - Abrir formulario de contacto"
                    >
                      Contactar
                      <ArrowRight size={18} />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
});

Header.displayName = 'Header';