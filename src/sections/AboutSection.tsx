// sections/AboutSection.tsx
"use client"

import React, { useEffect, useRef } from 'react'
import { Section } from '../components/composables/layout/Section'
import { Container } from '../components/composables/layout/Container'
import { Heading } from '../components/atoms/Heading'
import { Text } from '../components/atoms/Text'
import { AboutFeatureCard, type AboutFeatureCardProps } from '../components/composables/data-display/AboutFeatureCard'

export type AboutFeatureItem = Pick<AboutFeatureCardProps, 'text' | 'icon' | 'iconClassName'>;

export interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: React.ReactNode | string;
  secondaryDescription?: React.ReactNode | string;
  features?: AboutFeatureItem[];
  useAnimation?: boolean;
  className?: string;
}

/**
 * Sección About - Refactorizada y optimizada
 * Implementa estructura modular y parametrizable con animaciones
 */
export const AboutSection: React.FC<AboutSectionProps> = ({
  title = "Sobre AQXION",
  subtitle = "Nuestra misión",
  description = "AQXION es una plataforma de adquisición estratégica enfocada en comprar, mejorar y escalar empresas de servicios en Latinoamérica.",
  secondaryDescription = "Con más de 120 años de experiencia conjunta y transacciones por más de $500 millones, nuestro equipo aporta capital paciente y una visión de largo plazo. Nos especializamos en empresas de servicios B2B con flujos de caja estables y potencial de digitalización.",
  features = [],
  useAnimation = true,
  className = ""
}) => {
  // Referencias para animaciones
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  // Efecto para animaciones de entrada
  useEffect(() => {
    if (!useAnimation) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [textContentRef.current, cardsGridRef.current];
    elements.forEach((el) => el && observer.observe(el));

    return () => elements.forEach((el) => el && observer.unobserve(el));
  }, [useAnimation]);
  // Datos de características por defecto si no se proporcionan
  const defaultAboutItems: AboutFeatureItem[] = [
    {
      text: 'Adquirimos empresas de servicios rentables en LATAM',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      text: 'Mejoramos operaciones con tecnología y excelencia operativa',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      )
    },
    {
      text: 'Escalamos negocios con capital estratégico y experiencia',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
          <line x1="12" y1="20" x2="12" y2="10"></line>
          <line x1="18" y1="20" x2="18" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="16"></line>
        </svg>
      )
    },
    {
      text: 'Preservamos el legado mientras impulsamos el crecimiento',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
          <path d="M12 2v8L7 5"></path>
          <path d="M12 2v8L17 5"></path>
          <path d="M2 9l10 5 10-5"></path>
          <path d="M2 14l10 5 10-5"></path>
          <path d="M2 19l10 5 10-5"></path>
        </svg>
      )
    }
  ]

  // Usar las características proporcionadas o las predeterminadas
  const aboutItems = features.length > 0 ? features : defaultAboutItems;

  return (
    <Section 
      variant="white" 
      padding="xl" 
      data-anim-scroll-group="about-section" 
      data-analytics-section-engagement="name:about"
      className={`relative overflow-hidden ${className}`}
      ref={sectionRef}
    >
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8f9fa] to-[#f5f5f7] opacity-70"></div>
      
      <Container size="lg" className="relative z-10">
        <header className="section-header-row">
          <Heading className="section-header-headline">
            {title}
          </Heading>
          <Text variant="subheading" size="lg">
            {subtitle}
          </Text>
        </header>
      </Container>

      <Container size="lg" className="relative z-10">
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,4vw,3rem)]">
            <div 
              className={useAnimation ? "opacity-0 transform translate-y-4 transition-all duration-700 ease-out" : ""}
              ref={textContentRef}
            >
              <Text 
                variant="subheading" 
                size="xl" 
                className="section-subtitle mb-[clamp(1.5rem,3vw,2rem)] text-[color:var(--color-text-secondary)]"
              >
                {description}
              </Text>
              <Text 
                variant="body" 
                size="lg"
                className="text-[color:var(--color-text-secondary)]"
              >
                {secondaryDescription}
              </Text>
            </div>

            <div 
              className={useAnimation ? "grid grid-cols-1 sm:grid-cols-2 gap-6 opacity-0 transform translate-y-4 transition-all duration-700 ease-out delay-300" : "grid grid-cols-1 sm:grid-cols-2 gap-6"}
              ref={cardsGridRef}
            >
              {aboutItems.map((item, index) => (
                <AboutFeatureCard
                  key={index}
                  text={item.text}
                  icon={item.icon}
                  variant="light"
                  className="hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-5px]"
                  iconClassName={item.iconClassName || "text-4xl mb-4 transition-transform duration-300 transform group-hover:scale-110"}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Estilos para las animaciones */}
      {useAnimation && (
        <style jsx global>{`
          .fade-in-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}</style>
      )}
    </Section>
  )
}