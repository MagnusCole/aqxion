// components/compounds/AboutItem.tsx
import React from 'react'
import { Text } from '../../atoms/Text'
import { Icon } from '../../atoms/Icon'

export interface AboutItemProps {
  text: string
  icon?: string
  className?: string
}

export const AboutItem = ({ text, icon, className = '' }: AboutItemProps) => {
  return (
    <div className={`flex items-start space-x-[var(--spacing-3)] ${className}`}>
      {icon && (
        <div className="flex-shrink-0 mt-[var(--spacing-1)]">
          <Icon name={icon} className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
      )}
      <div>
        <Text 
          variant="body" 
          size="base"
          className="text-[color:var(--color-text-secondary)] dark:text-[color:var(--color-dark-text-secondary)]"
        >
          {text}
        </Text>
      </div>
    </div>
  )
}