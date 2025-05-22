// components/macros/HeroContent.tsx
import React from 'react'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'
import { Button } from '../../atoms/Button'

/**
 * Componente HeroContent - Contenido principal optimizado
 * Utiliza variables CSS de tokens para una mejor consistencia y mantenibilidad
 */

export interface HeroContentProps {
  title: string
  subtitle?: string
  description?: string
  ctaLabel?: string
  onCtaClick?: () => void
  secondaryCtaLabel?: string
  onSecondaryCtaClick?: () => void
}

export const HeroContent = ({
  title,
  subtitle,
  description,
  ctaLabel = 'Get Started',
  onCtaClick,
  secondaryCtaLabel,
  onSecondaryCtaClick,
}: HeroContentProps) => {
  return (
    <div>
      {subtitle && (
        <Text variant="subheading" align="center" size="xl" className="text-[color:var(--color-primary)] mx-[6%]">
          {subtitle}
        </Text>
      )}
      <Heading level="h1" size="8xl" align="center" className="text-[color:var(--color-text-primary)] mx-[6%]">
        {title}
      </Heading>
      {description && (
        <Text size="xl" align="center" className="text-[color:var(--color-text-secondary)] max-w-3xl mx-[6%] ">
          {description}
        </Text>
      )}
      <div className="flex flex-wrap justify-center gap-4 pt-6 pb-6 md:flex-row flex-col md:gap-4 mx-[6%]">
        {ctaLabel && (
          <Button 
            size="lg" 
            variant="primary" 
            onClick={onCtaClick}
            className="h-12 min-w-[120px] rounded-[12px] uppercase font-bold text-base active:scale-95 transition-transform duration-300 active:duration-100 focus-visible:ring-2 focus-visible:ring-offset-2"
            aria-label="Vende tu negocio ahora"
          >
            {ctaLabel}
          </Button>
        )}
        {secondaryCtaLabel && (
          <Button 
            size="lg" 
            variant="secondary" 
            onClick={onSecondaryCtaClick}
            className="h-10 min-w-[100px] rounded-[12px] font-bold text-base border border-solid  active:scale-95 transition-transform duration-300 active:duration-100 focus-visible:ring-2 focus-visible:ring-offset-2"
            aria-label="Agenda una llamada con nosotros"
          >
            {secondaryCtaLabel}
          </Button>
        )}
      </div>
    </div>
  )
}

export default HeroContent
