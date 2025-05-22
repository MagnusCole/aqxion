// sections/ExampleSection.tsx
"use client"

import React from 'react'
import { Section } from '../components/composables/layout/Section'
import { Container } from '../components/composables/layout/Container'
import { SectionHeader } from '../components/composables/layout/SectionHeader'
import { Text } from '../components/atoms/Text'
import { Heading } from '../components/atoms/Heading'

/**
 * Sección de Ejemplo - Implementando estructura estilo Apple
 * Siguiendo el patrón recomendado con clases bien definidas y ordenadas
 */
export const ExampleSection = () => {
  return (
    <Section 
      variant="light" 
      padding="xl" 
      data-anim-scroll-group="example-section" 
      data-analytics-section-engagement="name:example"
    >
      {/* Container para el header de sección - siguiendo patrón Apple */}
      <Container size="lg">
        <div className="section-header-row">
          <Heading 
            level="h2" 
            className="section-header-headline"
            data-staggered-anchor 
            data-staggered-before-item
          >
            Diseño estilo Apple
          </Heading>
          <div className="section-header-aside">
            <Text 
              variant="subheading" 
              size="lg"
            >
              Estructura visual optimizada
            </Text>
          </div>
        </div>
      </Container>
      
      {/* Container separado para el contenido - siguiendo patrón Apple */}
      <Container size="lg">
        <div className="section-content">
          <Text 
            variant="subheading" 
            size="xl" 
            className="section-subtitle mb-[clamp(1.5rem,3vw,2rem)]"
          >
            Esta sección implementa la estructura recomendada con márgenes laterales responsivos, 
            padding vertical fluido y headings con tipografía adaptativa que nunca desbordan.
          </Text>
          
          <div className="section-flex-row">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Heading 
                level="h3" 
                size="sm"
                className="mb-3"
              >
                Márgenes Responsivos
              </Heading>
              <Text 
                variant="body" 
                size="md"
                className="text-[color:var(--color-text-secondary)]"
              >
                Espaciado lateral fluido que se adapta desde móviles hasta pantallas grandes.
              </Text>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Heading 
                level="h3" 
                size="sm"
                className="mb-3"
              >
                Tipografía Fluida
              </Heading>
              <Text 
                variant="body" 
                size="md"
                className="text-[color:var(--color-text-secondary)]"
              >
                Tamaños de texto que se ajustan automáticamente según el viewport.
              </Text>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Heading 
                level="h3" 
                size="sm"
                className="mb-3"
              >
                Estructura Coherente
              </Heading>
              <Text 
                variant="body" 
                size="md"
                className="text-[color:var(--color-text-secondary)]"
              >
                Clases bien definidas y ordenadas siguiendo el estándar de Apple.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}