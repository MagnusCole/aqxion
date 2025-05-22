// sections/FooterSection.tsx
"use client"

import React from 'react'
import { Footer } from '../components/composables/navigation/Footer'

/**
 * Sección Footer - Optimizada con variables CSS de tokens
 * Implementa correctamente los tokens de tipografía, espaciado y breakpoints
 */
export const FooterSection = () => {
  const footerLinks = [
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

  const disclaimer = 'La información presentada aquí refleja la visión, valores y trayectoria del equipo fundador de AQXION. Actualmente no operamos como firma legalmente constituida, pero trabajamos con total transparencia y respaldo de advisors con experiencia probada. No es una oferta vinculante ni representación institucional.'

  return (
      <Footer 
        disclaimer={disclaimer}
        links={footerLinks}
        className="w-full"
      />
  )
}