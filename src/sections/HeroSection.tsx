// sections/HeroSection.tsx
"use client"

import React from 'react'
import { Section } from '../components/composables/layout/Section'
import { Container } from '../components/composables/layout/Container'
import { SectionHeader } from '../components/composables/layout/SectionHeader'
import { Text } from '../components/atoms/Text'
import { Button } from '../components/atoms/Button'
import { Heading } from '../components/atoms/Heading'

/**
 * Sección Hero - Optimizada con estructura de clases estilo Apple
 * Implementa correctamente los tokens de tipografía, espaciado y estructura visual
 */
export const HeroSection = () => {
  return (
    <Section 
      variant="white" 
      padding="xl" 
      data-anim-scroll-group="consider" 
      data-analytics-section-engagement="name:hero"
    >
      <Container size="lg">
        <header className="section-header-row">
          <Heading className="section-header-headline" >
            ¿Quieres vender tu empresa y que siga creciendo?
          </Heading>
        </header>
      </Container>
      <Container size="lg">
        <div className="section-content">
          <Text 
            variant="subheading" 
            size="xl" 
            className="section-subtitle"
          >
            Nuestro equipo ha cerrado más de $500 millones en ventas con más de 120 años de experiencia conjunta.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => console.log('Primary CTA Clicked')}
            >
              Empezar ahora
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => console.log('Secondary CTA Clicked')}
            >
              Hablar 15 minutos
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
