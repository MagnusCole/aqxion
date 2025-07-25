'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

interface OnboardingStatus {
  isFirstLogin: boolean
  onboardingCompleted: boolean
  completedSteps: number
  currentStep: number
  userProfile: {
    hasBusinessInfo: boolean
    hasWhatsApp: boolean
    hasWebsiteGoals: boolean
  }
  userInfo: {
    businessName: string | null
    businessType: string | null
    phone: string | null
    whatsappNumber: string | null
  }
}

interface OnboardingData {
  businessName: string
  businessType: string
  whatsappNumber?: string
  website?: string
  step: 'business-info' | 'whatsapp' | 'goals' | 'complete'
}

export function useOnboarding() {
  const { data: session, status } = useSession()
  const [onboardingStatus, setOnboardingStatus] = useState<OnboardingStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // ✅ CARGAR ESTADO DE ONBOARDING
  const fetchOnboardingStatus = async () => {
    if (status !== 'authenticated' || !session?.user?.email) return
    
    try {
      setLoading(true)
      const response = await fetch('/api/portal/onboarding-status')
      
      if (!response.ok) {
        throw new Error('Error al cargar estado de onboarding')
      }
      
      const data = await response.json()
      setOnboardingStatus(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }

  // ✅ ACTUALIZAR PASO DE ONBOARDING
  const updateOnboardingStep = async (data: OnboardingData) => {
    try {
      setUpdating(true)
      setError(null)
      
      const response = await fetch('/api/portal/onboarding', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      if (!response.ok) {
        throw new Error('Error al actualizar onboarding')
      }
      
      const result = await response.json()
      
      // Recargar estado después de actualizar
      await fetchOnboardingStatus()
      
      return { success: true, message: result.message }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'Error desconocido'
      setError(error)
      return { success: false, error }
    } finally {
      setUpdating(false)
    }
  }

  // ✅ MARCAR ONBOARDING COMO COMPLETADO
  const completeOnboarding = async () => {
    return await updateOnboardingStep({
      businessName: '',
      businessType: '',
      step: 'complete'
    })
  }

  // ✅ CARGAR AL MONTAR Y CUANDO CAMBIE LA SESIÓN
  useEffect(() => {
    fetchOnboardingStatus()
  }, [session, status])

  return {
    // Estados
    onboardingStatus,
    loading,
    updating,
    error,
    
    // Computed values
    isFirstLogin: onboardingStatus?.isFirstLogin ?? false,
    needsOnboarding: !onboardingStatus?.onboardingCompleted,
    progressPercentage: onboardingStatus ? (onboardingStatus.completedSteps / 5) * 100 : 0,
    
    // Funciones
    updateOnboardingStep,
    completeOnboarding,
    refetchStatus: fetchOnboardingStatus
  }
}
