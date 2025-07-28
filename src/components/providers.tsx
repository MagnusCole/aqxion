'use client'

import { ReactNode } from 'react'
// A/B Testing imports ready for production
// import { ABTestProvider } from '@/components/ABTestProvider'
// import { AB_TEST_CONFIG } from '@/config/abTesting'

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  // A/B Testing ready for production - uncomment when needed:
  /*
  return (
    <ABTestProvider 
      config={AB_TEST_CONFIG}
      debug={process.env.NODE_ENV === 'development'}
    >
      {children}
    </ABTestProvider>
  )
  */
  
  // Current: Original version without A/B testing
  return (
    <>
      {children}
    </>
  )
}
