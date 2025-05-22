// components/composables/data-display/FeatureCardGrid.tsx
"use client"

import React, { ReactNode } from 'react'
import { FeatureCard } from './FeatureCard'

interface FeatureItem {
  title: string
  description?: string
  icon?: ReactNode
}

interface FeatureCardGridProps {
  items: FeatureItem[]
  columns?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'light' | 'dark' | 'gradient'
  className?: string
}

/**
 * Componente FeatureCardGrid - Implementa una cuadrícula de tarjetas de características estilo Apple
 * Proporciona una estructura consistente para mostrar múltiples características en toda la aplicación
 */
export const FeatureCardGrid: React.FC<FeatureCardGridProps> = ({
  items,
  columns = 3,
  gap = 'lg',
  variant = 'light',
  className = ''
}) => {
  // Mapeo de valores de columnas a clases de Tailwind
  const columnsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  }

  // Mapeo de valores de espaciado a clases de Tailwind
  const gapMap = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-[clamp(2rem,4vw,3rem)]'
  }

  return (
    <div className={`grid ${columnsMap[columns]} ${gapMap[gap]} ${className}`}>
      {items.map((item, index) => (
        <FeatureCard
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
          variant={variant}
        />
      ))}
    </div>
  )
}