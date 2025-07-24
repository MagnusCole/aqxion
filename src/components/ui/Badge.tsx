import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'warning';
}

export const Badge = ({ 
  className = '', 
  variant = 'default', 
  children, 
  ...props 
}: BadgeProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'destructive':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'outline':
        return 'bg-transparent text-gray-700 border-gray-300';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div 
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${getVariantClasses()} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
