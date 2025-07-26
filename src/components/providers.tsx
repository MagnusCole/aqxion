'use client'

import { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  // Simplified providers - no authentication needed for landing page
  return (
    <>
      {children}
    </>
  )
}
