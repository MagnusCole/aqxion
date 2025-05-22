// sections/AboutSection.tsx
"use client"

import React from 'react'
import { Section } from '../components/composables/layout/Section'
import { Container } from '../components/composables/layout/Container'
import { SectionHeader } from '../components/composables/layout/SectionHeader'
import { SectionContent } from '../components/composables/layout/SectionContent'
import { Heading } from '../components/atoms/Heading'
import { Text } from '../components/atoms/Text'
import { AboutFeatureCard } from '../components/composables/data-display/AboutFeatureCard'

/**
 * Sección About - Optimizada con estructura de clases estilo Apple
 * Implementa correctamente los tokens de tipografía, espaciado y estructura visual
 */
export const AboutSection = () => {
  // Datos de características sobre AQXION
  const aboutItems = [
    {
      text: 'Adquirimos empresas de servicios rentables en LATAM',
      icon: '🏢'
    },
    {
      text: 'Mejoramos operaciones con tecnología y excelencia operativa',
      icon: '⚙️'
    },
    {
      text: 'Escalamos negocios con capital estratégico y experiencia',
      icon: '📈'
    },
    {
      text: 'Preservamos el legado mientras impulsamos el crecimiento',
      icon: '🌱'
    }
  ]

  return (
    <Section 
      variant="white" 
      padding="xl" 
      data-anim-scroll-group="about-section" 
      data-analytics-section-engagement="name:about"
    >
      <Container size="lg">
        <header className="section-header-row">
          <Heading className="section-header-headline">
            Sobre AQXION
          </Heading>
          <Text variant="subheading" size="lg">
            Nuestra misión
          </Text>
        </header>
      </Container>
      <Container size="lg">
        <div className="section-content">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,4vw,3rem)]">
            <div>
              <Text 
                variant="subheading" 
                size="xl" 
                className="section-subtitle mb-[clamp(1.5rem,3vw,2rem)]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra sit amet odio ut maximus. Sed et leo pharetra, accumsan risus id, pretium diam.
              </Text>
              <Text 
                variant="body" 
                size="lg" 
                className="mb-[clamp(1rem,2vw,1.5rem)]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra sit amet odio ut maximus. Sed et leo pharetra, accumsan risus id, pretium diam. Aliquam eleifend venenatis aliquet. Maecenas quis ligula posuere, accumsan lectus a, consequat enim. Maecenas nec nibh dui. Nullam dignissim nibh id nulla scelerisque, ac pulvinar justo fermentum.
              </Text>
              <Text 
                variant="body" 
                size="lg"
              >
                Nullam nec massa vitae nibh interdum suscipit ut convallis augue. Etiam aliquet dui quis odio eleifend blandit. Nulla rhoncus efficitur elit, at luctus lectus cursus cursus. Morbi sollicitudin congue dolor, id vehicula ante vehicula lacinia.
              </Text>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutItems.map((item, index) => (
                <AboutFeatureCard
                  key={index}
                  text={item.text}
                  icon={item.icon}
                  variant="light"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}