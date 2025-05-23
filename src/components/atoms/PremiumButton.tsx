"use client";

import React from 'react';

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const PremiumButton: React.FC<PremiumButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  ...props
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center
    font-semibold tracking-tight
    transition-all duration-300 ease-out
    transform-gpu will-change-transform
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50
    overflow-hidden group
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-blue-600 to-blue-700
      text-white shadow-lg
      hover:from-blue-700 hover:to-blue-800
      hover:shadow-xl hover:shadow-blue-500/25
      active:scale-95
      focus-visible:ring-blue-500
    `,
    secondary: `
      bg-white/10 backdrop-blur-xl
      text-gray-900 border border-white/20
      hover:bg-white/20
      active:scale-95
      focus-visible:ring-gray-500
    `,
    ghost: `
      bg-transparent text-gray-700
      hover:bg-gray-100/80 hover:text-gray-900
      active:scale-95
      focus-visible:ring-gray-500
    `,
    gradient: `
      bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600
      text-white shadow-lg
      hover:shadow-xl hover:shadow-purple-500/25
      active:scale-95
      focus-visible:ring-purple-500
    `,
    glass: `
      bg-white/10 backdrop-blur-xl
      text-white border border-white/20
      hover:bg-white/20
      active:scale-95
      focus-visible:ring-white
    `
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
    xl: 'px-10 py-5 text-xl rounded-2xl'
  };

  const widthClasses = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClasses} ${className}`}
      disabled={loading}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {leftIcon && !loading && leftIcon}
        {children}
        {rightIcon && !loading && rightIcon}
      </span>
    </button>
  );
};
