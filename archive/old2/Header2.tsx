"use client";
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState, useRef, JSX } from 'react';
import clsx from 'clsx';
import Logo from '../ui/Logo';
import MobileMenuPortal from './MobileMenuPortal';

// Custom easeOutBack function (consistent with Hero)
const easeOutBack = (t: number): number => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

// Animation variants for consistent styling with Hero
const logoVariants = {
  initial: { opacity: 0, scale: 0.8, y: -10 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: easeOutBack,
      delay: 0.1 
    } 
  },
};

const navItemVariants = {
  initial: { opacity: 0, y: -15 },
  animate: (i: number) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: easeOutBack,
      delay: 0.2 + (i * 0.08) 
    } 
  }),
};

const hamburgerVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: { delay: 0.4, duration: 0.5, ease: easeOutBack } 
  }
};

// Nav items with enriched metadata
const navItems = [
  { label: 'Why AQXION', href: '#why', icon: 'strategy' },
  { label: 'Investment Thesis', href: '#thesis', icon: 'chart' },
  { label: 'Who We Buy', href: '#criteria', icon: 'target' },
  { label: 'Join the Team →', href: '#careers', icon: 'team', highlight: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const headerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect for header background
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 8]);
  const springHeaderOpacity = useSpring(headerOpacity, { stiffness: 100, damping: 30 });
  const springHeaderBlur = useSpring(headerBlur, { stiffness: 100, damping: 30 });

  // Track scroll position for nav highlighting and header effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body overflow for mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // SVG icon components for nav items
  const getNavIcon = (iconName: string): JSX.Element | null => {
    switch(iconName) {
      case 'strategy':
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16V21M12 16L7 11M12 16L17 11M5 5H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'chart':
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 9V15M12 5V15M16 12V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 19H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'target':
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
          </svg>
        );
      case 'team':
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23 21V19C22.9986 17.1771 21.7079 15.5857 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 3.13C17.7105 3.58385 19.0031 5.17973 19.0031 7.005C19.0031 8.83028 17.7105 10.4262 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  // Hamburger button animation
  const hamburgerLineVariants = {
    closed: () => ({
      rotate: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }
    }),
    open: (i: number) => ({
      rotate: i === 1 ? 45 : i === 3 ? -45 : 0,
      y: i === 1 ? 8 : i === 3 ? -8 : 0,
      opacity: i === 2 ? 0 : 1,
      transition: { duration: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }
    })
  };

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0, transition: { duration: 0.6, ease: easeOutBack } }}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Dynamic Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          opacity: springHeaderOpacity,
          backdropFilter: `blur(${springHeaderBlur.get()}px)`,
          background: "linear-gradient(to bottom, rgba(26, 38, 62, 0.95), rgba(10, 10, 10, 0.8))",
          boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.15)" : "none" 
        }}
      />

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 lg:px-12 lg:py-6 relative z-10">
        {/* Logo */}
        <motion.div variants={logoVariants} initial="initial" animate="animate">
          <Link href="/" className="text-white hover:opacity-80 transition-opacity relative group">
            <Logo className="w-24 h-auto" />
            {/* Gold underline animation */}
            <motion.div 
              className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 0, opacity: 0 }}
              whileHover={{ width: "100%", opacity: 0.7, transition: { duration: 0.3 } }}
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 items-center">
          {navItems.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              variants={navItemVariants}
              initial="initial"
              animate="animate"
            >
              <Link
                href={item.href}
                className={clsx(
                  "text-sm font-sans uppercase tracking-widest font-medium flex items-center gap-2 relative py-2",
                  item.highlight 
                    ? "text-[#d4af37] hover:text-[#e5c34b]" 
                    : "text-white hover:text-opacity-80",
                  activeSection === item.href.replace('#', '') && "text-[#d4af37]"
                )}
              >
                {getNavIcon(item.icon)}
                <span>{item.label}</span>
                
                {/* Animated underline for active section */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-px bg-[#d4af37]"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: activeSection === item.href.replace('#', '') ? "100%" : "0%",
                    opacity: activeSection === item.href.replace('#', '') ? 0.7 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover underline animation */}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: "100%", opacity: 0.7, transition: { duration: 0.3 } }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <motion.button
          className="md:hidden text-white focus:outline-none relative z-20"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          variants={hamburgerVariants}
          initial="initial"
          animate="animate"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-8 h-8 flex flex-col justify-center items-center">
            {[1, 2, 3].map(i => (
              <motion.span
                key={i}
                className="w-6 h-0.5 bg-white my-0.5 block rounded-full"
                variants={hamburgerLineVariants}
                animate={menuOpen ? "open" : "closed"}
                custom={i}
              />
            ))}
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu with Advanced Animation */}
      <AnimatePresence>
        {menuOpen && (
          <MobileMenuPortal 
            navItems={navItems.map(item => ({ ...item, icon: getNavIcon(item.icon) }))} 
            onClose={() => setMenuOpen(false)} 
            activeSection={activeSection}
          />
        )}
      </AnimatePresence>

      {/* Gradient divider at bottom of header when scrolled */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ 
          background: "linear-gradient(to right, rgba(212, 175, 55, 0), rgba(212, 175, 55, 0.6), rgba(212, 175, 55, 0))",
          opacity: springHeaderOpacity,
        }}
      />
    </motion.header>
  );
}