/**
 * 🧪 Hero Section with A/B Testing - COPY ONLY
 * 
 * Same exact design as original HeroSection, but with A/B tested copy variants.
 * NO style changes, NO design changes, ONLY text changes.
 * 
 * @features
 * - Identical visual design to original
 * - Only headline/subheadline/CTA text changes
 * - Simple 50/50 A/B test between two copy approaches
 * - Automatic analytics tracking
 * 
 * @author Apex React Synthesis Engine
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Shield, Star, ArrowRight, Sparkles } from 'lucide-react';
import { useABTest } from '@/hooks/useABTest';

// ===== COPY VARIANTS - ONLY TEXT CHANGES =====

const COPY_VARIANTS = {
  control: {
    headline: 'Tu Empresa en Perú Funcionando en 30 Días',
    subheadline: 'Lo Hacemos TODO Por Ti',
    ctaText: 'Empezar Mi Empresa AHORA',
  },
  treatment: {
    headline: 'Últimas 47 Empresas Creadas Este Mes',
    subheadline: 'Tu Competencia Ya Está Aquí - ¿Esperas Más?',
    ctaText: 'QUIERO MI EMPRESA YA',
  },
};

// ===== INTERFACES =====

interface HeroSectionABProps {
  /** Callback function to open contact modal */
  readonly onModalOpen: () => void;
}

// ===== ANIMATION VARIANTS - SAME AS ORIGINAL =====

const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
} as const;

// ===== MAIN COMPONENT =====

/**
 * Hero Section with A/B Testing for copy only
 * Identical design to original, only text varies
 */
export const HeroSectionAB: React.FC<HeroSectionABProps> = ({ onModalOpen }) => {
  // ===== A/B TEST - COPY ONLY =====
  
  const { variant, trackConversion } = useABTest({
    testName: 'hero_copy_simple',
    variants: COPY_VARIANTS,
    trafficSplit: [50, 50],
    persistVariant: true,
  });

  // ===== EVENT HANDLERS =====

  const handleCTAClick = () => {
    trackConversion('cta_click', 1);
    onModalOpen();
  };

  // ===== RENDER - EXACT SAME LAYOUT AS ORIGINAL =====

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white overflow-hidden">
      {/* Background Effects - SAME AS ORIGINAL */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      {/* Floating Elements - SAME AS ORIGINAL */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse opacity-70" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-red-400 rounded-full animate-bounce opacity-60" />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-50" />

      {/* Main Content Container - SAME AS ORIGINAL */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            
            {/* Main Headline - A/B TESTED TEXT */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={animationVariants.slideUp}
            >
              {variant.headline}
            </motion.h1>
            
            {/* Subheadline - A/B TESTED TEXT */}
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl text-blue-200 font-semibold"
              variants={animationVariants.slideUp}
            >
              {variant.subheadline}
            </motion.h2>
            
            {/* Description - SAME AS ORIGINAL */}
            <motion.p 
              className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl"
              variants={animationVariants.slideUp}
            >
              Nos encargamos de cada paso: registro empresarial, permisos, cuentas bancarias, contabilidad, marketing digital y más. Solo focus en tu producto.
            </motion.p>

            {/* Benefits List - SAME AS ORIGINAL */}
            <motion.div 
              className="space-y-4"
              variants={animationVariants.slideUp}
            >
              {[
                '✅ Registro completo en 7-14 días',
                '✅ Cuenta bancaria corporativa incluida', 
                '✅ Sistema contable desde día 1',
                '✅ Marketing digital profesional',
                '✅ Soporte legal permanente'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-green-900 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-base md:text-lg text-gray-200">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button - A/B TESTED TEXT */}
            <motion.div 
              className="pt-6"
              variants={animationVariants.slideUp}
            >
              <button
                onClick={handleCTAClick}
                className="group bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                {variant.ctaText}
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={24} />
              </button>
            </motion.div>

          </motion.div>

          {/* Right Column - Visual Elements - SAME AS ORIGINAL */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            
            {/* Stats Grid - SAME AS ORIGINAL */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              
              {/* Stat 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">30</div>
                <div className="text-sm text-gray-300">Días funcionando</div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">100%</div>
                <div className="text-sm text-gray-300">Success rate</div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">24/7</div>
                <div className="text-sm text-gray-300">Soporte</div>
              </div>

              {/* Stat 4 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-pink-300 mb-2">TODO</div>
                <div className="text-sm text-gray-300">Incluido</div>
              </div>

            </div>

            {/* Status Indicator - SAME AS ORIGINAL */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 px-4 py-2 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Sistema activo</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Development Debug - Show which variant is active */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 left-4 bg-black/80 text-white p-2 rounded text-xs z-50">
          Hero Copy Test: <strong>{variant === COPY_VARIANTS.control ? 'Control' : 'Treatment'}</strong>
        </div>
      )}

    </section>
  );
};

export default HeroSectionAB;
