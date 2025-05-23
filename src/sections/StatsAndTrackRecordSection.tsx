// sections/StatsAndTrackRecordSection.tsx
"use client";

import React from 'react';
import { Section } from '../components/composables/layout/Section';
import { Container } from '../components/composables/layout/Container';
import { Text } from '../components/atoms/Text';
import { Heading } from '../components/atoms/Heading';
import { FeatureIcon } from '../components/composables/data-display/FeatureIcon';
import { FeatureCardCarousel } from '../components/composables/display/FeatureCardCarousel';
import { FeatureCardProps } from '../components/composables/data-display/FeatureCard';

/**
 * Interfaces para parametrización de StatsAndTrackRecordSection
 */
export interface StatsAndTrackRecordSectionProps {
  title?: string;
  subtitle?: string;
  featuredItems?: FeatureCardProps[];
  showIndicators?: boolean;
  showArrows?: boolean;
  cardSize?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Sección combinada de Stats y TrackRecord - Refactorizada y optimizada
 * Implementa módulos para tarjetas y carrusel con parametrización completa
 */
export const StatsAndTrackRecordSection: React.FC<StatsAndTrackRecordSectionProps> = ({
  title = "Trayectoria y Resultados",
  subtitle = "Conoce nuestro impacto y los resultados que hemos logrado a través de nuestra experiencia",
  featuredItems = [],
  showIndicators = true,
  showArrows = true,
  cardSize = 'md',
  className = ""
}) => {
  // Datos predeterminados si no se proporcionan
  const defaultFeatures: FeatureCardProps[] = [
    {
      title: 'Inteligencia Empresarial',
      description: 'Adquisición y optimización de 15+ empresas con un crecimiento promedio del 40%.',
      icon: <FeatureIcon type="intelligence" className="text-white" />,
      variant: 'dark'
    },
    {
      title: 'Alcance Internacional',
      description: 'Presencia en 5 países con un equipo de más de 50 profesionales especializados.',
      icon: <FeatureIcon type="global" className="text-white" />,
      variant: 'blue'
    },
    {
      title: 'Inversión Estratégica',
      description: 'Más de $25M de capital invertido y 20+ años de experiencia acumulada.',
      icon: <FeatureIcon type="investment" className="text-white" />,
      variant: 'emerald'
    },
    {
      title: 'Software B2B',
      description: 'Adquisición y mejora de infraestructura tecnológica con expansión de clientes del 40% en 12 meses.',
      icon: <FeatureIcon type="software" className="text-white" />,
      variant: 'purple'
    },
    {
      title: 'Servicios Financieros',
      description: 'Transformación digital que redujo costos operativos en un 30% mediante soluciones tecnológicas.',
      icon: <FeatureIcon type="finance" className="text-white" />,
      variant: 'amber'
    },
    {
      title: 'Marketing Digital',
      description: 'Escalamiento mediante procesos automatizados y expansión a nuevos mercados en LATAM.',
      icon: <FeatureIcon type="marketing" className="text-white" />,
      variant: 'red'
    }
  ];

  // Usar elementos proporcionados o predeterminados
  const features = featuredItems.length > 0 ? featuredItems : defaultFeatures;

  return (
    <Section 
      padding="xl" 
      data-anim-scroll-group="get to know gallery" 
      data-analytics-gallery-id="get to know gallery"
      className={`overflow-hidden px-0 ${className}`}
    >
      <Container size="lg" className="px-6 md:px-8 lg:px-12">
        <header className="section-header-row mb-12 md:mb-16 lg:mb-24">
          <Heading className="section-header-headline text-4xl md:text-5xl lg:text-[48px] mb-4 md:mb-6 font-bold tracking-tight leading-[1.2]">
            {title}
          </Heading>
          <Text variant="subheading" size="lg" className="text-lg md:text-xl lg:text-2xl opacity-80 max-w-[65ch] leading-[1.6]">
            {subtitle}
          </Text>
        </header>
      </Container>
      
      <div className="relative w-full px-0 md:px-0 mt-8 md:mt-12 lg:mt-16">
        <FeatureCardCarousel
          items={features}
          cardSize={cardSize}
          showIndicators={showIndicators}
          showArrows={showArrows}
        />
      </div>
    </Section>
  );
};