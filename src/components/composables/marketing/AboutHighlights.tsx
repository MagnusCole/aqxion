// components/macros/AboutHighlights.tsx
import React from 'react'
import { AboutItem, AboutItemProps } from './AboutItem'

/**
 * Componente AboutHighlights - Destacados optimizados
 * Utiliza variables CSS de tokens para una mejor consistencia y mantenibilidad
 */

export interface AboutHighlightsProps {
  items: Omit<AboutItemProps, 'className'>[]
  className?: string
}

export const AboutHighlights = ({ items, className = '' }: AboutHighlightsProps) => {
  return (
    <div className={`space-y-[var(--spacing-4)] ${className}`}>
      {items.map((item, index) => (
        <AboutItem
          key={index}
          text={item.text}
          icon={item.icon}
          className="mb-[var(--spacing-2)]"
        />
      ))}
    </div>
  )
}