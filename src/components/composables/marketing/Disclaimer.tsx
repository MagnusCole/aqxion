// components/compounds/Disclaimer.tsx
import React from 'react'
import { Text } from '../../atoms/Text'

export interface DisclaimerProps {
  text: string
  className?: string
}

export const Disclaimer = ({ text, className = '' }: DisclaimerProps) => {
  return (
    <div className={`bg-gray-900 p-[var(--spacing-4)] rounded-[var(--radius-md)] border border-gray-800 ${className}`}>
      <Text 
        variant="body" 
        size="xs"
        className="text-gray-300 italic"
      >
        {text}
      </Text>
    </div>
  )
}