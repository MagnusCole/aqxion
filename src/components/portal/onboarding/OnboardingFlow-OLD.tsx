'use client'

import { useEffect, useState } from 'react'
import { useOnboarding } from '@/hooks/useOnboarding'
import { WelcomeModal } from './WelcomeModal'
import { BusinessInfoForm } from './BusinessInfoForm'

interface OnboardingFlowProps {
  userName?: string
}

export function OnboardingFlow({ userName }: OnboardingFlowProps) {
  const { 
    isFirstTime,
    completedSteps,
    showWizard,
    lastCompletedAt,
    currentStep,
    onboardingCompleted,
    markStepCompleted,
    completeOnboarding,
    resetOnboarding,
    closeWizard,
    openWizard,
    completionPercentage,
    isFirstLogin,
    needsOnboarding,
    userProfile
  } = useOnboarding()
  const [showWelcome, setShowWelcome] = useState(false)
  const [showBusinessForm, setShowBusinessForm] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  // ✅ MOSTRAR MODALES SEGÚN EL ESTADO
  useEffect(() => {
    // Si es primer login y no ha completado onboarding, mostrar bienvenida
    if (isFirstLogin && !onboardingCompleted) {
      setShowWelcome(true)
    }
    // Si ya pasó la bienvenida pero falta info del negocio
    else if (!userProfile.hasBusinessInfo && !onboardingCompleted) {
      setShowBusinessForm(true)
    }
  }, [isFirstLogin, onboardingCompleted, userProfile.hasBusinessInfo])

  // ✅ COMPLETAR BIENVENIDA
  const handleWelcomeComplete = () => {
    setShowWelcome(false)
    markStepCompleted(1) // Marcar paso de bienvenida como completado
    
    // Si no tiene info del negocio, mostrar el formulario
    if (!userProfile.hasBusinessInfo) {
      setShowBusinessForm(true)
    }
  }

  // ✅ COMPLETAR INFORMACIÓN DEL NEGOCIO
  const handleBusinessInfoComplete = async (businessData: any) => {
    setIsUpdating(true)
    
    try {
      // Simular guardado de datos del negocio
      // En una implementación real, aquí harías la llamada a la API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Marcar paso de información del negocio como completado
      markStepCompleted(3)
      
      setShowBusinessForm(false)
      
      // Si queremos completar todo el onboarding
      completeOnboarding()
    } catch (error) {
      console.error('Error updating business info:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  // Si no necesita onboarding, no mostrar nada
  if (!needsOnboarding) {
    return null
  }

  return (
    <>
      {/* Modal de Bienvenida */}
      <WelcomeModal
        isOpen={showWelcome}
        onClose={handleWelcomeComplete}
        userName={userName}
        businessName={undefined}
      />

      {/* Formulario de Información del Negocio */}
      <BusinessInfoForm
        isOpen={showBusinessForm}
        onClose={() => setShowBusinessForm(false)}
        onComplete={handleBusinessInfoComplete}
        loading={isUpdating}
        initialData={{
          businessName: '',
          businessType: '',
          whatsappNumber: '',
          website: ''
        }}
      />
    </>
  )
}
