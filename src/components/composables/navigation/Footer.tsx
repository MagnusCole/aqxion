// components/macros/Footer.tsx
import React from 'react'
import { Link } from '../../atoms/Link'
import { Text } from '../../atoms/Text'
import { Divider } from '../layout/Divider'
import { Disclaimer } from '../marketing/Disclaimer'

/**
 * Componente Footer - Pie de página optimizado
 * Utiliza variables CSS de tokens para una mejor consistencia y mantenibilidad
 */

export interface FooterLink {
  label: string
  href: string
}

export interface FooterProps {
  disclaimer?: string
  links?: FooterLink[]
  copyright?: string
  className?: string
}

export const Footer = ({
  disclaimer,
  links = [],
  copyright = `© ${new Date().getFullYear()} AQXION. Todos los derechos reservados.`,
  className = '',
}: FooterProps) => {
  return (
    <footer className={`bg-black text-white py-[var(--spacing-8)] w-full ${className}`}>
      <div className="container mx-auto px-[var(--spacing-6)]">
        {disclaimer && (
          <div className="mb-[var(--spacing-6)]">
            <Disclaimer text={disclaimer} className="text-white" />
          </div>
        )}
        
        {links.length > 0 && (
          <div className="flex flex-wrap gap-[var(--spacing-6)] mb-[var(--spacing-6)]">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-[var(--font-size-sm)] text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
        
        <Divider className="my-[var(--spacing-6)] border-gray-700" />
        
        <Text
          variant="body"
          size="xs"
          className="text-gray-400"
        >
          {copyright}
        </Text>
      </div>
    </footer>
  )
}