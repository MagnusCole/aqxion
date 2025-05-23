// components/macros/Navbar.tsx
import React from 'react'
import Link from 'next/link'

/**
 * Componente Navbar - Barra de navegación optimizada
 * Utiliza variables CSS de tokens para una mejor consistencia y mantenibilidad
 */

export interface NavItem {
  label: string
  href: string
  isActive?: boolean
}

export interface NavbarProps {
  items?: NavItem[]
  logo?: React.ReactNode
  rightItems?: React.ReactNode
  className?: string
}

export const Navbar = ({
  items = [],
  logo,
  rightItems,
  className = '',
}: NavbarProps) => {
  return (
    <nav className={`bg-gray-900 text-white py-[var(--spacing-3)] px-[var(--spacing-4)] border-b border-gray-800 ${className}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-[var(--spacing-10)]">
          {logo ? (
            <div>{logo}</div>
          ) : (
            <Link href="/" className="text-[var(--font-size-xl)] font-semibold text-white">AQXION</Link>
          )}
          
          <div className="hidden md:flex items-center space-x-[var(--spacing-6)]">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-[var(--font-size-sm)] font-medium ${item.isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}