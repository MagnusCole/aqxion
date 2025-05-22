// components/composables/data-display/FAQItem.tsx
"use client"

import React from 'react'
import { Text } from '../../atoms/Text'

interface FAQItemProps {
  question: string
  answer: string
  isExpanded: boolean
  onToggle: () => void
  className?: string
}

/**
 * Componente FAQItem - Implementa el patrón de elemento de preguntas frecuentes estilo Apple
 * Proporciona una estructura consistente para mostrar preguntas y respuestas
 */
export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isExpanded,
  onToggle,
  className = ''
}) => {
  return (
    <div 
      className={`border-b border-gray-200 py-5 ${className}`}
      data-analytics-click="prop:faq-item"
    >
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <Text 
          variant="subheading" 
          size="lg"
          className="text-[color:var(--color-text-primary)]"
        >
          {question}
        </Text>
        <span className="ml-4 flex-shrink-0">
          <svg 
            className={`h-5 w-5 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isExpanded && (
        <div className="mt-3 pr-12">
          <Text 
            variant="body" 
            size="md"
            className="text-[color:var(--color-text-secondary)] leading-[var(--line-height-relaxed)]"
          >
            {answer}
          </Text>
        </div>
      )}
    </div>
  )
}