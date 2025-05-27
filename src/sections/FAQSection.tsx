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
  subtitle = "Todo lo que necesitas saber sobre nuestros servicios de marketing digital",
  items = [],
  className = ""
}) => {
  // Estado para controlar qué pregunta está expandida
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  // Preguntas frecuentes predeterminadas
  const defaultFAQItems = [    {
      question: '¿Cuánto tiempo toma ver resultados?',
      answer: 'Depende del servicio. Con publicidad digital (Google Ads), puedes ver los primeros resultados en 2-4 semanas. Para SEO y posicionamiento orgánico, generalmente toma entre 2-6 meses.'
    },
    {
      question: '¿Cómo sé si esto funcionará para mi negocio?',
      answer: 'En la consulta gratuita analizamos tu situación específica y te explicamos qué estrategias podrían funcionar mejor para tu tipo de negocio y mercado local.'
    },    {
      question: '¿Cuánto cuesta y hay contratos largos?',
      answer: 'Los costos varían según las necesidades de cada negocio. No manejamos contratos anuales obligatorios. Discutimos las opciones en la consulta inicial.'
    },    {
      question: '¿Trabajan con todos los tipos de negocio?',
      answer: 'Nos especializamos en negocios locales: consultorios, talleres, restaurantes, salones, constructoras, etc. Si atiendes clientes en tu área local, probablemente podemos ayudarte.'
    },
    {
      question: '¿Necesito entender de marketing para trabajar con ustedes?',
      answer: 'No necesitas saber nada de marketing. Nosotros manejamos la parte técnica y te explicamos todo en términos simples. Tu enfoque debe seguir siendo tu negocio.'
    },
    {
      question: '¿Qué los diferencia de otras agencias?',
      answer: 'Somos directos, accesibles y nos enfocamos en resultados reales para tu negocio. Trabajamos con un número limitado de clientes para dar mejor atención personalizada.'
    }
  ];

  // Usar elementos proporcionados o predeterminados
  const faqItems = items.length > 0 ? items : defaultFAQItems;

  // Función para manejar el clic en una pregunta
  const handleQuestionClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <section id="preguntas" className={`py-16 md:py-24 bg-gray-50 ${className}`}>
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