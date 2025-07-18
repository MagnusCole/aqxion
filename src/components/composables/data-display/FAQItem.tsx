// components/composables/data-display/FAQItem.tsx
"use client"

import React, { useRef, useEffect } from 'react'
import { Text } from '../../atoms/Text'

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  className?: string;
}

/**
 * Componente FAQItem - Implementa el patrón de elemento de preguntas frecuentes estilo Apple
 * Proporciona una estructura consistente para mostrar preguntas y respuestas
 * Mejorado con animaciones fluidas, feedback visual claro y accesibilidad
 */
export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isExpanded,
  onToggle,
  className = ''
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = React.useState<number>(0);
  
  // Calcular la altura del contenido para animaciones
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded]);

  return (
    <div 
      className={`border-b border-gray-200 py-6 transition-all duration-300 hover:bg-[var(--color-bg-secondary)] ${isExpanded ? 'bg-[var(--color-bg-secondary)]' : ''} rounded-lg px-4 mb-2 ${className}`}
      data-analytics-click="prop:faq-item"
    >
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-md transition-all duration-300"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-label={`${isExpanded ? 'Contraer' : 'Expandir'} pregunta: ${question}`}
        aria-controls={`faq-content-${question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <Text 
          variant="subheading" 
          size="lg"
          className={`text-[color:var(--color-text-primary)] transition-all duration-300 ${isExpanded ? 'font-[var(--font-weight-semibold)]' : ''}`}
        >
          {question}
        </Text>
        <span className="ml-4 flex-shrink-0 bg-[#f2f2f7] rounded-full p-2 transition-all duration-300 transform hover:bg-[#e6e6eb]">
          <svg 
            className={`h-5 w-5 transition-transform duration-300 ease-in-out ${isExpanded ? 'transform rotate-180 text-blue-600' : 'text-gray-600'}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div 
        id={`faq-content-${question.replace(/\s+/g, '-').toLowerCase()}`}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: `${contentHeight}px` }}
        aria-hidden={!isExpanded}
      >
        <div ref={contentRef} className="pt-4 pb-2 pr-12">
          <Text 
            variant="body" 
            size="base"
            className="text-[color:var(--color-text-secondary)] leading-[var(--line-height-relaxed)]"
          >
            {answer}
          </Text>
        </div>
      </div>
    </div>
  )
}