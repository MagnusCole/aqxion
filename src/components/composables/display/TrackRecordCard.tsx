"use client"

import React from 'react'
import { FeatureIcon } from '../data-display/FeatureIcon'
import { cva, type VariantProps } from 'class-variance-authority'

const trackRecordCardVariants = cva(
  "h-full flex flex-col justify-between rounded-[32px] overflow-hidden shadow-lg transition-all duration-400 hover:scale-[1.025] hover:shadow-xl p-8 md:p-10 lg:p-12 backdrop-blur-sm",
  {
    variants: {
      variant: {
        dark: "bg-zinc-900",
        blue: "bg-gradient-to-b from-blue-900 to-blue-950",
        emerald: "bg-gradient-to-b from-emerald-900 to-emerald-950",
        purple: "bg-gradient-to-b from-purple-900 to-purple-950",
        amber: "bg-gradient-to-b from-amber-900 to-amber-950",
        red: "bg-gradient-to-b from-red-900 to-red-950",
        custom: ""
      },
      size: {
        sm: "min-w-[280px] h-[360px]",
        md: "min-w-[320px] md:min-w-[400px] lg:min-w-[480px] h-[400px] md:h-[480px] lg:h-[540px]",
        lg: "min-w-[360px] md:min-w-[480px] lg:min-w-[560px] h-[480px] md:h-[560px] lg:h-[620px]"
      }
    },
    defaultVariants: {
      variant: "dark",
      size: "md"
    }
  }
)

export interface TrackRecordCardProps extends VariantProps<typeof trackRecordCardVariants> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconType?: 'intelligence' | 'global' | 'investment' | 'software' | 'finance' | 'marketing';
  className?: string;
  bgClass?: string;
  iconClassName?: string;
}

/**
 * Componente TrackRecordCard - Tarjeta para mostrar elementos de trayectoria y resultados
 */
export const TrackRecordCard: React.FC<TrackRecordCardProps> = ({
  title,
  description,
  icon,
  iconType,
  variant = "dark",
  size = "md",
  className = "",
  bgClass = "",
  iconClassName = "text-white"
}) => {
  const displayIcon = icon || (iconType ? <FeatureIcon type={iconType} className={iconClassName} /> : null);
  
  return (
    <div 
      className={trackRecordCardVariants({ variant, size, className: `${bgClass} ${className}` })}
    >
      <div className="flex justify-start items-center">
        {displayIcon && (
          <div className="text-6xl md:text-7xl" style={{ filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.2))' }}>
            {displayIcon}
          </div>
        )}
      </div>
      
      <div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.2] text-white">
          {title}
        </h3>
        <p className="text-base md:text-lg lg:text-xl text-white/80 mt-4 leading-[1.6] max-w-[40ch]">
          {description}
        </p>
      </div>
    </div>
  )
}
