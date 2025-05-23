// sections/FooterSection.tsx
"use client"

import React from 'react'
import { Footer, FooterLink } from '../components/composables/navigation/Footer'

/**
 * Interfaces para parametrización de FooterSection
 */
export interface FooterSectionProps {
  links?: FooterLink[];
  disclaimer?: string;
  socialLinks?: {
    platform: string;
    url: string;
    icon?: React.ReactNode;
  }[];
  showLogo?: boolean;
  copyright?: string;
  className?: string;
}

/**
 * Sección Footer - Refactorizada y optimizada para parametrización
 * Implementa correctamente los tokens de tipografía, espaciado y breakpoints
 */
export const FooterSection: React.FC<FooterSectionProps> = ({
  links = [],
  disclaimer,
  socialLinks,
  showLogo = true,
  copyright,
  className = "w-full"
}) => {
  // Enlaces predeterminados si no se proporcionan
  const defaultFooterLinks: FooterLink[] = [
    {
      label: 'Inicio',
      href: '#'
    },
    {
      label: 'Sobre Nosotros',
      href: '#about'
    },
    {
      label: 'Historial',
      href: '#track-record'
    },
    {
      label: 'Contacto',
      href: '#contact'
    },
    {
      label: 'Política de Privacidad',
      href: '/privacy'
    },
    {
      label: 'Términos y Condiciones',
      href: '/terms'
    }
  ]

  // Texto de descargo predeterminado si no se proporciona
  const defaultDisclaimer = 'La información presentada aquí refleja la visión, valores y trayectoria del equipo fundador de AQXION. Actualmente no operamos como firma legalmente constituida, pero trabajamos con total transparencia y respaldo de advisors con experiencia probada. No es una oferta vinculante ni representación institucional.'

  // Usar valores proporcionados o predeterminados
  const footerLinks = links.length > 0 ? links : defaultFooterLinks;
  const footerDisclaimer = disclaimer || defaultDisclaimer;
  return (
      <Footer 
        disclaimer={footerDisclaimer}
        links={footerLinks}
        copyright={copyright}
        className={className}
      />
  )
}