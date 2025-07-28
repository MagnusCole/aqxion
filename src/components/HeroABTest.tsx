/**
 * 🧪 HeroABTest - A/B Testing for Hero Section
 * 
 * Tests different psychological approaches to maximize conversion:
 * - Control: Original "Lo Hacemos TODO Por Ti" approach
 * - Treatment: Enhanced urgency + social proof approach
 * 
 * @features
 * - Zero-flicker variant switching
 * - Psychological optimization
 * - Conversion tracking
 * - Mobile-first responsive design
 * 
 * @author Apex React Synthesis Engine
 */

'use client';

import React from 'react';
import { useABTest } from '@/hooks/useABTest';
import type { CopyVariant } from '@/types/abTesting';

// ===== VARIANT CONFIGURATIONS =====

/**
 * Hero copy variants for A/B testing
 */
const HERO_VARIANTS: Record<string, CopyVariant> = {
  control: {
    headline: 'Tu Empresa en Perú Funcionando en 30 Días',
    subheadline: 'Lo Hacemos TODO Por Ti',
    description: 'Nos encargamos de cada paso: registro empresarial, permisos, cuentas bancarias, contabilidad, marketing digital y más. Solo focus en tu producto.',
    ctaText: 'Empezar Mi Empresa AHORA',
    benefits: [
      '✅ Registro completo en 7-14 días',
      '✅ Cuenta bancaria corporativa incluida',
      '✅ Sistema contable desde día 1',
      '✅ Marketing digital profesional',
      '✅ Soporte legal permanente'
    ],
  },
  
  treatment: {
    headline: 'Últimas 47 Empresas Creadas Este Mes 🔥',
    subheadline: 'Tu Competencia Ya Está Aquí - ¿Esperas Más?',
    description: 'Mientras dudas, otros ya están vendiendo en Perú. Nosotros te ponemos operativo en 30 días con TODO incluido: empresa, permisos, banco, contabilidad, marketing.',
    ctaText: 'QUIERO MI EMPRESA YA →',
    benefits: [
      '🚀 Elena (España): €50K primer trimestre',
      '💰 Carlos (Chile): $80K en 6 meses',  
      '📈 Ana (México): 300% ROI primer año',
      '⚡ Luis (Colombia): Break-even mes 2',
      '🎯 + 847 empresarios ya operativos'
    ],
  },
};

// ===== COMPONENT INTERFACES =====

interface HeroABTestProps {
  /** Additional CSS classes */
  className?: string;
  /** Override variant for testing */
  forceVariant?: keyof typeof HERO_VARIANTS;
  /** Callback function to open contact modal */
  onModalOpen?: () => void;
}

// ===== MAIN COMPONENT =====

/**
 * A/B tested Hero section component
 */
export const HeroABTest: React.FC<HeroABTestProps> = ({ 
  className = '',
  forceVariant,
  onModalOpen 
}) => {
  // ===== A/B TEST CONFIGURATION =====
  
  const { variant, variantKey, trackEvent, trackConversion } = useABTest({
    testName: 'hero_copy_v1',
    variants: HERO_VARIANTS,
    enabled: !forceVariant, // Disable A/B test if forcing variant
    trafficSplit: [50, 50], // 50/50 split
    audience: {
      include: ['new_visitors', 'returning_visitors'],
      device: ['mobile', 'desktop'],
      percentage: 100, // Include 100% of users
    },
    persistVariant: true, // Remember user's variant
  });

  // Use forced variant if specified, otherwise use A/B test result
  const currentVariant = forceVariant ? HERO_VARIANTS[forceVariant] : variant;
  const currentVariantKey = forceVariant || variantKey;

  // ===== EVENT HANDLERS =====

  /**
   * Handle CTA button click
   */
  const handleCTAClick = () => {
    trackConversion('cta_click', 1);
    trackEvent('hero_cta_clicked', {
      variant: currentVariantKey,
      button_text: currentVariant.ctaText,
      timestamp: Date.now(),
    });
    
    // Open contact modal if provided, otherwise scroll to contact section
    if (onModalOpen) {
      onModalOpen();
    } else {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  /**
   * Handle benefit item hover for engagement tracking
   */
  const handleBenefitHover = (benefitIndex: number, benefit: string) => {
    trackEvent('benefit_hover', {
      variant: currentVariantKey,
      benefit_index: benefitIndex,
      benefit_text: benefit,
    });
  };

  /**
   * Handle headline click (for engagement tracking)
   */
  const handleHeadlineClick = () => {
    trackEvent('headline_engagement', {
      variant: currentVariantKey,
      headline: currentVariant.headline,
    });
  };

  // ===== CONDITIONAL STYLING =====

  const isControlVariant = currentVariantKey === 'control';
  const isTreatmentVariant = currentVariantKey === 'treatment';

  // ===== RENDER =====

  return (
    <section 
      className={`relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-20 px-4 overflow-hidden ${className}`}
      data-testid={`hero-variant-${currentVariantKey}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Copy */}
          <div className="space-y-8">
            
            {/* Treatment variant urgency badge */}
            {isTreatmentVariant && (
              <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                🔥 ALTA DEMANDA - Solo quedan 3 cupos este mes
              </div>
            )}
            
            {/* Main Headline */}
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight cursor-pointer transition-transform hover:scale-105 ${
                isTreatmentVariant ? 'text-yellow-300' : 'text-white'
              }`}
              onClick={handleHeadlineClick}
            >
              {currentVariant.headline}
            </h1>
            
            {/* Subheadline */}
            <h2 className={`text-xl md:text-2xl lg:text-3xl font-semibold ${
              isTreatmentVariant ? 'text-red-300' : 'text-blue-200'
            }`}>
              {currentVariant.subheadline}
            </h2>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              {currentVariant.description}
            </p>
            
            {/* Benefits List */}
            <div className="space-y-3">
              {currentVariant.benefits?.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 group cursor-pointer"
                  onMouseEnter={() => handleBenefitHover(index, benefit)}
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-transform group-hover:scale-110 ${
                    isTreatmentVariant ? 'bg-yellow-400 text-black' : 'bg-green-400 text-white'
                  }`}>
                    {isTreatmentVariant ? (benefit.includes('€') || benefit.includes('$') || benefit.includes('%') ? '💰' : '🚀') : '✓'}
                  </div>
                  <span className={`text-base md:text-lg ${
                    isTreatmentVariant ? 'text-yellow-100 font-medium' : 'text-gray-200'
                  } group-hover:text-white transition-colors`}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="pt-6">
              <button
                onClick={handleCTAClick}
                className={`group relative px-8 py-4 text-lg md:text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 ${
                  isTreatmentVariant 
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-red-500/25' 
                    : 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-green-500/25'
                } shadow-lg`}
              >
                <span className="relative z-10">{currentVariant.ctaText}</span>
                <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
            
            {/* Social Proof for Treatment */}
            {isTreatmentVariant && (
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-300">
                  <span className="text-yellow-300 font-semibold">+847 empresarios</span> ya operativos
                </div>
              </div>
            )}
            
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            
            {/* Main Visual */}
            <div className={`relative bg-gradient-to-br ${
              isTreatmentVariant ? 'from-red-400/20 to-orange-400/20' : 'from-blue-400/20 to-green-400/20'
            } rounded-2xl p-8 backdrop-blur-sm border border-white/10`}>
              
              {/* Stats/Metrics Display */}
              <div className="grid grid-cols-2 gap-6">
                
                <div className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold ${
                    isTreatmentVariant ? 'text-yellow-300' : 'text-green-300'
                  }`}>
                    {isTreatmentVariant ? '47' : '30'}
                  </div>
                  <div className="text-sm text-gray-300">
                    {isTreatmentVariant ? 'Empresas este mes' : 'Días funcionando'}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold ${
                    isTreatmentVariant ? 'text-yellow-300' : 'text-blue-300'
                  }`}>
                    {isTreatmentVariant ? '€50K' : '100%'}
                  </div>
                  <div className="text-sm text-gray-300">
                    {isTreatmentVariant ? 'Promedio Q1' : 'Success rate'}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold ${
                    isTreatmentVariant ? 'text-yellow-300' : 'text-purple-300'
                  }`}>
                    {isTreatmentVariant ? '3' : '24/7'}
                  </div>
                  <div className="text-sm text-gray-300">
                    {isTreatmentVariant ? 'Cupos restantes' : 'Soporte'}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold ${
                    isTreatmentVariant ? 'text-yellow-300' : 'text-pink-300'
                  }`}>
                    {isTreatmentVariant ? '847' : 'TODO'}
                  </div>
                  <div className="text-sm text-gray-300">
                    {isTreatmentVariant ? 'Operativos' : 'Incluido'}
                  </div>
                </div>
                
              </div>
              
              {/* Additional Visual Element */}
              <div className="mt-8 text-center">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                  isTreatmentVariant ? 'bg-red-500/20 border border-red-400/30' : 'bg-green-500/20 border border-green-400/30'
                } backdrop-blur-sm`}>
                  <div className={`w-2 h-2 rounded-full ${
                    isTreatmentVariant ? 'bg-red-400' : 'bg-green-400'
                  } animate-pulse`} />
                  <span className="text-sm font-medium">
                    {isTreatmentVariant ? 'Alta demanda detectada' : 'Sistema activo'}
                  </span>
                </div>
              </div>
              
            </div>
            
          </div>
          
        </div>
      </div>
      
      {/* Development Debug Info */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 left-4 bg-black/80 text-white p-2 rounded text-xs z-50">
          Hero Variant: <strong>{currentVariantKey}</strong>
        </div>
      )}
      
    </section>
  );
};

export default HeroABTest;
