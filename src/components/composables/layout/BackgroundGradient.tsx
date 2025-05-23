// components/composables/layout/BackgroundGradient.tsx
"use client"

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const backgroundGradientVariants = cva(
  "absolute inset-0",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-br from-[#f8f9fa] via-[#f5f5f7] to-[#e6e6e9] opacity-70",
        secondary: "bg-gradient-to-tr from-[#f0f2f5] via-[#fafafa] to-[#f5f5f7] opacity-70",
        blue: "bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50 opacity-40",
        purple: "bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 opacity-40",
        dark: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-95",
      },
      blur: {
        none: "",
        sm: "backdrop-blur-sm",
        md: "backdrop-blur-md",
        lg: "backdrop-blur-lg"
      }
    },
    defaultVariants: {
      variant: "primary",
      blur: "none"
    }
  }
)

export interface BackgroundGradientProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof backgroundGradientVariants> {
  children?: React.ReactNode
  zIndex?: number
}

/**
 * Componente BackgroundGradient - Para fondos con gradientes
 */
export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  variant,
  blur,
  children,
  className = '',
  zIndex = 0,
  ...props
}) => {
  return (
    <div
      className={backgroundGradientVariants({ variant, blur, className })}
      style={{ zIndex }}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * Componente ParallaxBlob - Para efectos de parallax con formas orgánicas
 */
export const ParallaxBlob: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  colors: string
  delay?: number
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}> = ({
  position,
  colors,
  delay = 0,
  size = 'lg',
  className = ''
}) => {
  const positionClasses = {
    'top-left': '-top-20 -left-20',
    'top-right': '-top-20 -right-20',
    'bottom-left': '-bottom-20 -left-20',
    'bottom-right': '-bottom-20 -right-20'
  }
  
  const sizeClasses = {
    sm: 'w-64 h-64',
    md: 'w-96 h-96',
    lg: 'w-[30rem] h-[30rem]',
    xl: 'w-[40rem] h-[40rem]'
  }
  
  const animationClass = delay ? `parallax-${delay % 2 === 0 ? 'fast' : 'slow'}` : 'parallax-slow'
  
  return (
    <div 
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} ${colors} rounded-full blur-3xl opacity-20 transform translate-y-0 transition-transform duration-1000 ease-in-out ${animationClass} ${className}`}
      aria-hidden="true"
    />
  )
}
