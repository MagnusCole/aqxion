// components/composables/layout/SectionHeader.tsx
"use client"

import React, { ReactNode } from 'react'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  titleClassName?: string
  subtitleClassName?: string
  className?: string
  titleProps?: Record<string, any>
  subtitleProps?: Record<string, any>
}

/**
 * Componente SectionHeader - Implementa el patrón de encabezado de sección estilo Apple
 * Proporciona una estructura consistente para los encabezados de sección en toda la aplicación
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  titleClassName = 'section-header-headline',
  subtitleClassName = '',
  className = 'section-header-row',
  titleProps = {},
  subtitleProps = {}
}) => {
  return (
    <header className={className}>
      <Heading 
        level="h2" 
        className={titleClassName}
        data-staggered-anchor 
        data-staggered-before-item
        {...titleProps}
      >
        {title}
      </Heading>
      {subtitle && (
        <div className="section-header-aside">
          <Text 
            variant="subheading" 
            size="lg"
            className={subtitleClassName}
            {...subtitleProps}
          >
            {subtitle}
          </Text>
        </div>
      )}
    </header>
  )
}