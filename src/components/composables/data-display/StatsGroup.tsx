// components/composables/data-display/StatsGroup.tsx
"use client"

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { StatItem, type StatItemProps } from './StatItem'

const statsGroupVariants = cva(
  "flex",
  {
    variants: {
      direction: {
        row: "flex-row",
        column: "flex-col"
      },
      layout: {
        flex: "flex",
        grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
        inline: "inline-flex"
      },
      spacing: {
        sm: "gap-4",
        md: "gap-8",
        lg: "gap-12"
      },
      align: {
        center: "justify-center",
        start: "justify-start",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      },
      responsive: {
        true: "flex-col sm:flex-row",
        false: ""
      },
      wrap: {
        true: "flex-wrap",
        false: "flex-nowrap"
      }
    },
    defaultVariants: {
      direction: "row",
      layout: "flex",
      spacing: "md",
      align: "center",
      responsive: false,
      wrap: false
    }
  }
)

export type StatItem = Omit<StatItemProps, 'className' | 'align' | 'spacing'>

export interface StatsGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statsGroupVariants> {
  stats: StatItem[]
  statItemProps?: Partial<StatItemProps>
}

/**
 * Componente StatsGroup - Para agrupar múltiples estadísticas
 */
export const StatsGroup: React.FC<StatsGroupProps> = ({
  stats,
  statItemProps,
  direction,
  layout,
  spacing,
  align,
  responsive,
  wrap,
  className = '',
  ...props
}) => {
  // Determinar si usar grid o flex según el layout
  const finalClassName = layout === 'grid' 
    ? statsGroupVariants({ layout, spacing, align, className: `${className}` })
    : statsGroupVariants({ direction, layout, spacing, align, responsive, wrap, className });
    
  return (
    <div
      className={finalClassName}
      {...props}
    >
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          value={stat.value}
          label={stat.label}
          prefix={stat.prefix}
          suffix={stat.suffix}
          {...statItemProps}
        />
      ))}
    </div>
  )
}
