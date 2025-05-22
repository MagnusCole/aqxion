// components/compounds/FeatureCard.tsx
import React from 'react'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'

export interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}

export const FeatureCard = ({
  title,
  description,
  icon,
  className = '',
}: FeatureCardProps) => {
  return (
    <div className={`bg-[#1d1d1f] text-white p-[var(--spacing-6)] rounded-[var(--radius-lg)] shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      <div className="flex flex-col h-full">
        {icon && (
          <div className="mb-[var(--spacing-4)] text-4xl">
            {icon}
          </div>
        )}
        <Heading 
          level="h3" 
          size="md" 
          className="text-white mb-[var(--spacing-3)] font-bold"
        >
          {title}
        </Heading>
        <Text 
          variant="body" 
          size="md" 
          className="text-gray-300"
        >
          {description}
        </Text>
      </div>
    </div>
  )
}