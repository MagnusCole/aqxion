// sections/FAQSection.tsx
"use client"

import React, { useState } from 'react'
import { Section } from '../components/composables/layout/Section'
import { Container } from '../components/composables/layout/Container'
import { Text } from '../components/atoms/Text'
import { Heading } from '../components/atoms/Heading'
import { FAQItem } from '../components/composables/data-display/FAQItem'

/**
 * Interfaces para parametrización de FAQSection
 */
export interface FAQItemType {
  question: string;
  answer: string | React.ReactNode;
}

export interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items?: FAQItemType[];
  defaultExpandedIndex?: number | null;
  allowMultipleExpanded?: boolean;
  className?: string;
}

/**
 * Sección FAQ - Refactorizada y optimizada para parametrización
 * Implementa correctamente los tokens de tipografía, espaciado y estructura visual
 */
export const FAQSection: React.FC<FAQSectionProps> = ({
  title = "FAQs",
  subtitle = "Preguntas frecuentes",
  items = [],
  defaultExpandedIndex = null,
  allowMultipleExpanded = false,
  className = ""
}) => {
  // Estado para controlar qué pregunta está expandida
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>(
    defaultExpandedIndex !== null ? [defaultExpandedIndex] : []
  )

  // Preguntas difíciles sobre la empresa por defecto
  const defaultFAQItems = [
    {
      question: '¿Por qué debería confiar en una firma que aún no está legalmente constituida?',
      answer: 'Entendemos el escepticismo. AQXION está en proceso de constitución formal, pero nuestro equipo fundador y asesores tienen un historial comprobado en adquisiciones y transformaciones empresariales. Ofrecemos total transparencia: podemos compartir casos de éxito específicos, referencias verificables y estructurar acuerdos con garantías legales que protejan a todas las partes involucradas hasta que la entidad esté completamente formalizada.'
    },
    {
      question: '¿Cómo garantizan que no desmantelarán mi empresa después de adquirirla?',
      answer: 'Nuestro modelo se basa en preservar y potenciar, no en desmantelar. Documentamos contractualmente nuestros compromisos sobre la continuidad del personal clave, la marca y los valores de la empresa. Además, estructuramos acuerdos donde parte del pago está condicionado al desempeño futuro, alineando nuestros intereses con la preservación del valor del negocio. Nuestro historial demuestra que hemos mantenido y fortalecido las empresas adquiridas, no desmantelado.'
    },
    {
      question: '¿Qué evidencia concreta tienen de haber generado el crecimiento que afirman?',
      answer: 'Podemos proporcionar métricas auditadas de crecimiento para cada caso mencionado en nuestro historial, incluyendo estados financieros comparativos, testimonios de clientes y fundadores originales, y análisis detallados de las mejoras operativas implementadas. En una reunión confidencial, compartiremos documentación específica que valida cada porcentaje de crecimiento y reducción de costos mencionado, con referencias verificables.'
    },
    {
      question: '¿Qué sucede si la transformación digital o tecnológica que proponen fracasa?',
      answer: 'Implementamos transformaciones en fases medibles con objetivos claros, lo que nos permite detectar y corregir problemas tempranamente. Contamos con planes de contingencia para cada iniciativa y mantenemos siempre la capacidad de revertir cambios si no producen los resultados esperados. Además, asumimos el riesgo financiero de las transformaciones tecnológicas, estableciendo métricas de éxito acordadas previamente y garantías de rendimiento.'
    },
    {
      question: '¿Cómo justifican su valoración si aún no tienen una entidad legal establecida?',
      answer: 'Nuestra valoración se basa en tres pilares verificables: 1) El historial comprobado de creación de valor de nuestro equipo en adquisiciones previas, 2) Los activos tangibles e intangibles que aportamos (metodologías, tecnología propietaria, red de contactos), y 3) El capital comprometido por nuestros inversores para futuras adquisiciones. Ofrecemos total transparencia sobre estos elementos y estamos abiertos a estructurar acuerdos que reflejen el valor real demostrado, no especulativo.'
    }
  ]

  // Usar elementos proporcionados o predeterminados
  const faqItems = items.length > 0 ? items : defaultFAQItems;

  // Función para alternar la expansión de una pregunta
  const toggleQuestion = (index: number) => {
    if (allowMultipleExpanded) {
      setExpandedIndexes(prevIndexes => 
        prevIndexes.includes(index)
          ? prevIndexes.filter(i => i !== index)
          : [...prevIndexes, index]
      );
    } else {
      setExpandedIndexes(prevIndexes => 
        prevIndexes.includes(index) ? [] : [index]
      );
    }
  }

  return (
    <Section 
      variant="white" 
      padding="xl" 
      data-anim-scroll-group="faq-section" 
      data-analytics-section-engagement="name:faq"
      className={className}
    >
      <Container size="lg">
        <header className="section-header-row">
          <Heading className="section-header-headline">
            {title}
          </Heading>
          <Text variant="subheading" size="lg">
            {subtitle}
          </Text>
        </header>
      </Container>
      <Container size="lg">
        <div className="section-content">
          <div className="mx-auto w-full max-w-3xl">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isExpanded={expandedIndexes.includes(index)}
                onToggle={() => toggleQuestion(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}