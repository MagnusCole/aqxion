// components/composables/data-display/AboutFeatureCard.tsx
"use client"

import React, { ReactNode } from 'react'
import { Text } from '../../atoms/Text'

interface AboutFeatureCardProps {
  text: string
  icon: ReactNode
  className?: string
  iconClassName?: string
  textClassName?: string
  variant?: 'light' | 'dark'
}

/**
 * Componente AboutFeatureCard - Implementa el patrón de tarjeta de características para la sección About
 * Proporciona una estructura consistente para mostrar características con iconos
 */
export const AboutFeatureCard: React.FC<AboutFeatureCardProps> = ({
  text,
  icon,
  className = '',
  iconClassName = 'text-4xl mb-3',
  textClassName = '',
  variant = 'light'
}) => {
  // Configuración de estilos según la variante
  const variantStyles = {
    light: {
      container: 'bg-[#f5f5f7] p-6 rounded-xl',
      text: 'text-[color:var(--color-text-primary)]'
    },
    dark: {
      container: 'bg-[#1d1d1f] p-6 rounded-xl',
      text: 'text-white'
    }
  }

  const styles = variantStyles[variant]

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={iconClassName}>{icon}</div>
      <Text 
        variant="subheading" 
        size="lg"
        className={`${styles.text} ${textClassName}`}
      >
        {text}
      </Text>
    </div>
  )
}