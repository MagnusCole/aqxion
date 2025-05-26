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
  const defaultFAQItems = [
    {
      question: '¿Cuánto tiempo toma ver resultados?',
      answer: 'Los primeros resultados los verás en las primeras 2-4 semanas con campañas de Google Ads. Para SEO y redes sociales, los resultados sostenidos aparecen entre 30-90 días. Te damos reportes semanales para que veas el progreso.'
    },
    {
      question: '¿Qué sucede si no veo resultados?',
      answer: 'Simple: seguimos trabajando gratis hasta que los veas. Nuestra garantía de satisfacción significa que si en los primeros 90 días no incrementas tus clientes, continuamos sin costo adicional hasta lograrlo.'
    },
    {
      question: '¿Cuánto cuesta y hay contratos largos?',
      answer: 'Nuestros planes empiezan desde $800 USD/mes sin contratos anuales. Puedes cancelar con 30 días de aviso. Preferimos clientes satisfechos que se queden por los resultados, no por contratos que los aten.'
    },
    {
      question: '¿Trabajan con todos los tipos de negocio?',
      answer: 'Nos especializamos en negocios locales de servicios: consultorios médicos, talleres mecánicos, restaurantes, salones de belleza, constructoras, etc. Si atiendes clientes en tu ciudad o región, podemos ayudarte.'
    },
    {
      question: '¿Necesito entender de marketing para trabajar con ustedes?',
      answer: 'Para nada. Nosotros nos encargamos de toda la parte técnica. Tu trabajo es seguir atendiendo a tus clientes mientras nosotros nos encargamos de que lleguen más. Te explicamos todo en términos simples.'
    },
    {
      question: '¿Qué diferencia tienen de otras agencias?',
      answer: 'Tres cosas: 1) Garantizamos resultados o no cobramos, 2) Somos locales y accesibles (no bots), 3) Solo trabajamos con clientes seleccionados para dar mejor servicio. Preferimos menos clientes pero mejores resultados.'
    }
  ];

  // Usar elementos proporcionados o predeterminados
  const faqItems = items.length > 0 ? items : defaultFAQItems;

  // Función para manejar el clic en una pregunta
  const handleQuestionClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <section id="preguntas" className={`py-16 md:py-24 bg-white ${className}`}>
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