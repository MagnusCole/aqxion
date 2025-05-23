// components/composables/data-display/AboutFeatureCard.tsx
"use client"

import React, { ReactNode } from 'react'
import { Text } from '../../atoms/Text'

export interface AboutFeatureCardProps {
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
 * Mejorado con efectos hover y transiciones suaves
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
      container: 'bg-[#f5f5f7] p-6 rounded-xl border border-transparent',
      text: 'text-[color:var(--color-text-primary)]'
    },
    dark: {
      container: 'bg-[#1d1d1f] p-6 rounded-xl border border-transparent',
      text: 'text-white'
    }
  }

  const styles = variantStyles[variant]

  return (
    <div className={`${styles.container} ${className} group transition-all duration-300 hover:border-gray-200`}>
      <div className={`${iconClassName} transition-all duration-300`}>{icon}</div>
      <Text 
        variant="subheading" 
        size="lg"
        className={`${styles.text} ${textClassName} transition-all duration-300`}
      >
        {text}
      </Text>
    </div>
  )
}