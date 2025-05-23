// sections/HeroSection.tsx
"use client"

import React, { useEffect, useRef } from 'react'
import { Hero, HeroCTAButton } from '../components/composables/layout/Hero'
import { BackgroundGradient, ParallaxBlob } from '../components/composables/layout/BackgroundGradient'

/**
 * Interfaces para parametrización de HeroSection
 */
export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaButtons?: HeroCTAButton[];
  stats?: Array<{
    value: string | number;
    label: string;
    prefix?: string;
    suffix?: string;
  }>;
  useAnimation?: boolean;
}

/**
 * Sección Hero - Optimizada y parametrizada
 * Implementa correctamente los tokens de tipografía, espaciado y estructura visual
 * Mejorada con animaciones, gradientes y jerarquía visual clara
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "¿Quieres vender tu empresa y que siga creciendo?",
  subtitle = "Nuestro equipo ha cerrado más de $500 millones en ventas con más de 120 años de experiencia conjunta.",
  description,
  ctaButtons = [
    { label: "Empezar ahora", variant: "primary", onClick: () => console.log('Primary CTA Clicked') },
    { label: "Hablar 15 minutos", variant: "secondary", onClick: () => console.log('Secondary CTA Clicked') }
  ],
  stats = [],
  useAnimation = true
}) => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Efecto para animaciones de entrada
  useEffect(() => {
    if (!useAnimation) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [useAnimation]);

  const HeroBackground = (
    <>
      <BackgroundGradient variant="primary" />
      <ParallaxBlob position="top-right" colors="bg-gradient-to-br from-blue-100 to-purple-100" size="md" />
      <ParallaxBlob position="bottom-left" colors="bg-gradient-to-tr from-indigo-100 to-pink-100" delay={1} />
    </>
  );

  return (
    <div ref={heroRef} className={useAnimation ? 'opacity-0 transition-all duration-700 ease-out' : ''}>
      <Hero
        variant="default"
        align="center"
        title={title}
        subtitle={subtitle}
        description={description}
        ctaButtons={ctaButtons.map(btn => ({
          label: btn.label,
          variant: btn.variant,
          onClick: btn.onClick,
          className: btn.variant === 'primary' ? 
            'relative overflow-hidden group transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl py-4 px-8 text-lg h-auto min-w-[180px]' : 
            'transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] border-2 py-4 px-8 text-lg h-auto min-w-[180px]'
        }))}
        stats={stats}
        backgroundElement={HeroBackground}
        padding="xl"
        data-anim-scroll-group="consider" 
        data-analytics-section-engagement="name:hero"
        className="relative overflow-hidden min-h-[80vh] md:min-h-[100vh] flex items-center"
        contentClassName={useAnimation ? 'animate-in opacity-0 transform translate-y-4 transition-all duration-700 ease-out delay-100' : ''}
        maxWidth="max-w-[60%]"
        titleClassName="section-header-headline text-[32px] md:text-[40px] lg:text-[48px] font-[var(--font-weight-bold)] tracking-tight leading-[1.2]"
        subtitleClassName="section-subtitle text-[color:var(--color-text-secondary)] mb-12 md:mb-16 text-lg md:text-xl lg:text-2xl leading-[1.6] max-w-[65ch]"
      />

      {/* Estilos para las animaciones - Optimizados con Golden Ratio */}
      <style jsx global>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .parallax-slow {
          animation: float-slow 13s ease-in-out infinite alternate;
        }
        
        .parallax-fast {
          animation: float-fast 8s ease-in-out infinite alternate;
        }
        
        @keyframes float-slow {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(-32px) translateX(16px); }
        }
        
        @keyframes float-fast {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(24px) translateX(-24px); }
        }
        
        /* Mejoras de tipografía según Golden Ratio */
        .section-header-headline {
          letter-spacing: -0.02em;
        }
        
        .section-subtitle {
          letter-spacing: -0.01em;
        }
      `}</style>
    </div>
  )
}
