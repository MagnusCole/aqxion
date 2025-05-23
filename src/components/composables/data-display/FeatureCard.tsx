// components/compounds/FeatureCard.tsx
"use client"

import React from 'react'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'
import { cva, type VariantProps } from 'class-variance-authority'

const featureCardVariants = cva(
  `
    card card-interactive
    p-[var(--spacing-6)]
    transition-all duration-[var(--duration-300)] ease-[var(--ease-default)]
  `,
  {
    variants: {
      variant: {
        dark: `
          bg-[color:var(--color-dark-bg-elevated)]
          text-[color:var(--color-dark-text)]
          border-[color:var(--color-dark-border)]
        `,
        primary: `
          bg-gradient-to-br
          from-[color:var(--color-primary-600)]
          to-[color:var(--color-primary-700)]
          text-white
          border-[color:var(--color-primary-700)]
        `,
        secondary: `
          bg-gradient-to-br
          from-[color:var(--color-secondary-600)]
          to-[color:var(--color-secondary-700)]
          text-white
          border-[color:var(--color-secondary-700)]
        `,
        success: `
          bg-gradient-to-br
          from-[color:var(--color-success-600)]
          to-[color:var(--color-success-700)]
          text-white
          border-[color:var(--color-success-700)]
        `,
        light: `
          bg-[color:var(--color-bg-elevated)]
          text-[color:var(--color-text-primary)]
          border-[color:var(--color-border)]
        `,
        glass: `
          bg-[color:var(--color-bg-elevated)]/80
          backdrop-blur-md
          border-[color:var(--color-border)]/50
          text-[color:var(--color-text-primary)]
        `,
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

export interface FeatureCardProps extends VariantProps<typeof featureCardVariants> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  onClick?: () => void;
  className?: string;
}

export const FeatureCard = ({
  title,
  description,
  icon,
  variant = "dark",
  size,
  iconClassName = "mb-[var(--spacing-4)] text-4xl",
  titleClassName = "text-white mb-[var(--spacing-3)] font-bold",
  descriptionClassName = "text-gray-300",
  onClick,
  className = '',
}: FeatureCardProps) => {
  const hasClickHandler = typeof onClick === 'function';
  
  const CardContainer = hasClickHandler
    ? ({ children }: { children: React.ReactNode }) => (
        <button 
          onClick={onClick}
          className={`text-left ${featureCardVariants({ variant, size, className })}`}
        >
          {children}
        </button>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <div className={featureCardVariants({ variant, size, className })}>
          {children}
        </div>
      );
  
  return (
    <CardContainer>
      <div className="flex flex-col h-full">
        {icon && (
          <div className={iconClassName}>
            {icon}
          </div>
        )}        <Heading 
          level="h3" 
          size="xl" 
          className={titleClassName}
        >
          {title}
        </Heading><Text 
          variant="body" 
          size="base" 
          className={descriptionClassName}
        >
          {description}
        </Text>
      </div>
    </CardContainer>  )
}