// components/composables/layout/Hero.tsx
"use client"

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Section, type SectionProps } from './Section'
import { Container } from './Container'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'
import { Button, buttonVariants } from '../../atoms/Button'
import { ButtonLink } from '../navigation/ButtonLink'

const heroVariants = cva(
  "relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "min-h-[80vh] md:min-h-[90vh] flex items-center",
        compact: "py-16 md:py-24",
        centered: "min-h-[70vh] flex items-center justify-center text-center",
        split: "min-h-[70vh] grid md:grid-cols-2 gap-8 items-center"
      },
      align: {
        center: "text-center mx-auto",
        left: "text-left",
        right: "text-right ml-auto"
      }
    },
    defaultVariants: {
      variant: "default",
      align: "center"
    }
  }
)

export interface HeroCTAButton {
  label: string
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link"
  className?: string
}

export interface HeroProps
  extends Omit<SectionProps, 'variant' | 'children'>,
    VariantProps<typeof heroVariants> {
  title: string
  subtitle?: string
  description?: string
  titleClassName?: string
  subtitleClassName?: string
  descriptionClassName?: string
  ctaButtons?: HeroCTAButton[]
  stats?: Array<{
    value: string | number
    label: string
    prefix?: string
    suffix?: string
  }>
  backgroundElement?: React.ReactNode
  maxWidth?: string
  contentClassName?: string
  children?: React.ReactNode
}

/**
 * Componente Hero - Implementación modular y parametrizable para secciones hero
 */
export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  titleClassName = '',
  subtitleClassName = '',
  descriptionClassName = '',
  ctaButtons = [],
  stats = [],
  backgroundElement,
  maxWidth = 'max-w-4xl',
  contentClassName = '',
  variant,
  align,
  className = '',
  children,
  ...sectionProps
}) => {
  return (
    <Section
      {...sectionProps}
      className={heroVariants({ variant, align, className })}
    >
      {backgroundElement && backgroundElement}
      
      <Container className={`relative z-10 ${maxWidth} ${contentClassName}`}>
        <div className={`space-y-6 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
          {subtitle && (
            <Text
              variant="subheading"
              className={`text-base md:text-lg ${subtitleClassName}`}
            >
              {subtitle}
            </Text>
          )}
          
          <Heading
            level="h1"
            className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${titleClassName}`}
          >
            {title}
          </Heading>
          
          {description && (
            <Text
              variant="body"
              className={`text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${descriptionClassName}`}
            >
              {description}
            </Text>
          )}            {ctaButtons.length > 0 && (
            <div className={`flex flex-wrap gap-4 mt-8 ${align === 'center' ? 'justify-center' : ''}`}>
              {ctaButtons.map((button, index) => {
                // Si el botón tiene un href, usamos ButtonLink
                if (button.href) {
                  return (
                    <ButtonLink
                      key={index}
                      href={button.href}
                      variant={button.variant || (index === 0 ? 'primary' : 'secondary')}
                      className={button.className}
                      onClick={button.onClick}
                    >
                      {button.label}
                    </ButtonLink>
                  )
                }
                
                // Si no tiene href, usamos Button normal
                return (
                  <Button
                    key={index}
                    variant={button.variant || (index === 0 ? 'primary' : 'secondary')}
                    onClick={button.onClick}
                    className={button.className}
                  >
                    {button.label}
                  </Button>
                )
              })}
            </div>
          )}
          
          {stats.length > 0 && (
            <div className={`grid grid-cols-2 md:grid-cols-${Math.min(stats.length, 4)} gap-8 mt-12`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold">{stat.prefix}{stat.value}{stat.suffix}</p>
                  <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
          
          {children}
        </div>
      </Container>
    </Section>
  )
}
