// components/composables/layout/SectionContent.tsx
"use client"

import React, { ReactNode } from 'react'

interface SectionContentProps {
  children: ReactNode
  className?: string
  dataComponentList?: string
}

/**
 * Componente SectionContent - Implementa el patrón de contenido de sección estilo Apple
 * Proporciona una estructura consistente para el contenido de sección en toda la aplicación
 */
export const SectionContent: React.FC<SectionContentProps> = ({
  children,
  className = '',
  dataComponentList
}) => {
  return (
    <div 
      className={`section-content ${className}`}
      data-component-list={dataComponentList}
    >
      {children}
    </div>
  )
}