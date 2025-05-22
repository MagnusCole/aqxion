'use client';

import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Props = {
  navItems: { label: string; href: string }[];
  onClose: () => void;
  activeSection?: string;
  accentColor?: string;
};

export default function MobileMenuPortal({ navItems, onClose, activeSection, accentColor = '#d4af37' }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full h-full z-[9999] bg-gradient-to-br from-[#0C1A33] to-[#0A0A0A] text-white flex flex-col items-center justify-center px-6 text-lg font-sans uppercase tracking-widest backdrop-blur-xl"
      >
        {/* Botón de cierre */}
        <motion.button
          onClick={onClose}
          aria-label="Close menu"
          className="absolute top-6 right-6 text-white text-3xl font-light leading-none hover:opacity-75 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ×
        </motion.button>

        {/* Navegación */}
        <div className="space-y-8 w-full max-w-sm text-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <motion.div
                key={item.label}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`block py-2 transition-opacity duration-300 ${
                    isActive ? 'text-[color:var(--color-accent)]' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
                <div
                  className="mx-auto mt-1 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 ease-out"
                  style={{
                    background: `linear-gradient(to right, transparent, ${accentColor}, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
