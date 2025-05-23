// components/composables/navigation/ButtonLink.tsx
"use client"

import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '../../atoms/Button'
import type { ButtonProps } from '../../atoms/Button'

export interface ButtonLinkProps extends Omit<React.ComponentPropsWithoutRef<typeof Link>, 'className'> {
  href: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  fullWidth?: ButtonProps['fullWidth'];
}

/**
 * Componente ButtonLink - Un botón que actúa como un enlace
 */
export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  external = false,
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth,
  ...props
}) => {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Link
      href={href}
      className={buttonVariants({
        variant,
        size,
        fullWidth,
        className
      })}
      {...linkProps}
      {...props}
    >
      {children}
    </Link>
  )
}
