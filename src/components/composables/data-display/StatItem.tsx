// components/composables/data-display/StatItem.tsx
"use client"

import React from 'react'
import { Text } from '../../atoms/Text'
import { cva, type VariantProps } from 'class-variance-authority'

const statItemVariants = cva(
  "flex flex-col",
  {
    variants: {
      align: {
        center: "items-center text-center",
        left: "items-start text-left",
        right: "items-end text-right"
      },
      spacing: {
        sm: "space-y-1",
        md: "space-y-2",
        lg: "space-y-3"
      }
    },
    defaultVariants: {
      align: "center",
      spacing: "md"
    }
  }
)

export interface StatItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statItemVariants> {
  value: string | number
  label: string
  prefix?: string
  suffix?: string
  valueClassName?: string
  labelClassName?: string
}

/**
 * Componente StatItem - Para mostrar estadísticas con valor y etiqueta
 */
export const StatItem: React.FC<StatItemProps> = ({
  value,
  label,
  prefix = '',
  suffix = '',
  valueClassName = '',
  labelClassName = '',
  align,
  spacing,
  className = '',
  ...props
}) => {
  return (
    <div
      className={statItemVariants({ align, spacing, className })}
      {...props}
    >
      <Text 
        variant="metric"
        className={`text-2xl font-bold ${valueClassName}`}
      >
        {prefix}{value}{suffix}
      </Text>
      <Text 
        variant="body"
        className={`text-sm ${labelClassName}`}
      >
        {label}
      </Text>
    </div>
  )
}
