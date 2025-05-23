// sections/FAQSection.tsx
"use client"

import React, { useState } from 'react';

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
  className?: string;
}

/**
 * Sección FAQ - Simplificada
 */
export const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Preguntas Frecuentes",
  subtitle = "Respuestas transparentes a las preguntas más importantes",
  items = [],
  className = ""
}) => {
  // Estado para controlar qué pregunta está expandida
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  // Preguntas frecuentes predeterminadas
  const defaultFAQItems = [
    {
      question: '¿Por qué elegir AQXION sobre otras opciones de venta tradicionales?',
      answer: 'A diferencia de compradores financieros que suelen desmantelar operaciones o fusionarlas, nuestro modelo se centra en preservar y potenciar lo que ha construido. Documentamos contractualmente compromisos sobre la continuidad del personal clave, la marca y los valores de la empresa.'
    },
    {
      question: '¿Qué evidencia concreta tienen de haber generado el crecimiento que afirman?',
      answer: 'Proporcionamos métricas auditadas de crecimiento para cada caso de nuestro historial, incluyendo estados financieros comparativos, testimonios de clientes y fundadores originales, y análisis detallados de las mejoras implementadas.'
    },
    {
      question: '¿Cómo garantizan que mi empresa seguirá creciendo después de la adquisición?',
      answer: 'Implementamos un enfoque sistemático: 1) Período de transición donde trabajamos junto a usted para entender a fondo la operación, 2) Plan de crecimiento consensuado con objetivos medibles a 12, 24 y 36 meses, 3) Inversión en tecnología, talento y marketing con métricas claras de retorno.'
    },
    {
      question: '¿Qué sucede con mi equipo y cultura empresarial tras la adquisición?',
      answer: 'La preservación del talento clave es fundamental en nuestro enfoque. Mantenemos al 90% del equipo original y ofrecemos programas de incentivos para retener el conocimiento institucional. Aunque implementamos mejoras en procesos y tecnología, respetamos la cultura que hizo exitosa a su empresa.'
    },
    {
      question: '¿Cómo se estructura el proceso de venta y cuánto tiempo toma?',
      answer: 'Nuestro proceso está optimizado para ser eficiente y respetuoso con su tiempo: 1) Conversación inicial y acuerdo de confidencialidad (1 semana), 2) Análisis preliminar y propuesta no vinculante (2-3 semanas), 3) Due diligence simplificado (4-6 semanas), 4) Estructuración final y cierre (2-3 semanas).'
    }
  ];

  // Usar elementos proporcionados o predeterminados
  const faqItems = items.length > 0 ? items : defaultFAQItems;

  // Función para manejar el clic en una pregunta
  const handleQuestionClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`py-16 md:py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        {/* Encabezado con proporción áurea */}
        <header className="text-center mb-[1.618rem] * 1.618">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-[0.618rem] tracking-tight leading-[1.2]">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-[61.8%] mx-auto leading-relaxed">
            {subtitle}
          </p>
        </header>
        
        {/* FAQs con espaciado basado en proporción áurea */}
        <div className="max-w-[61.8%] mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-[0.618rem] border-b border-gray-200 pb-[0.618rem]"
            >
              <button
                className="flex justify-between items-center w-full text-left py-[0.618rem]"
                onClick={() => handleQuestionClick(index)}
                aria-expanded={expandedIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-medium text-gray-900 pr-4">{item.question}</h3>
                <span className="ml-6 flex-shrink-0">
                  {expandedIndex === index ? (
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              <div 
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 overflow-hidden ${expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="py-[0.618rem] text-base text-gray-600 leading-[1.618]">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};