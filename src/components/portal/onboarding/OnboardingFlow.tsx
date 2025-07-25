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
    onboardingStatus, 
    loading, 
    updating, 
    isFirstLogin, 
    needsOnboarding,
    updateOnboardingStep 
  } = useOnboarding()
  
  const [showWelcome, setShowWelcome] = useState(false)
  const [showBusinessForm, setShowBusinessForm] = useState(false)

  // ✅ MOSTRAR MODALES SEGÚN EL ESTADO
  useEffect(() => {
    if (!loading && onboardingStatus) {
      // Si es primer login, mostrar bienvenida
      if (isFirstLogin && !onboardingStatus.onboardingCompleted) {
        setShowWelcome(true)
      }
      // Si ya pasó la bienvenida pero falta info del negocio
      else if (!onboardingStatus.userProfile.hasBusinessInfo && !onboardingStatus.onboardingCompleted) {
        setShowBusinessForm(true)
      }
    }
  }, [loading, onboardingStatus, isFirstLogin])

  // ✅ COMPLETAR BIENVENIDA
  const handleWelcomeComplete = () => {
    setShowWelcome(false)
    
    // Si no tiene info del negocio, mostrar el formulario
    if (!onboardingStatus?.userProfile.hasBusinessInfo) {
      setShowBusinessForm(true)
    }
  }

  // ✅ COMPLETAR INFORMACIÓN DEL NEGOCIO
  const handleBusinessInfoComplete = async (businessData: any) => {
    const result = await updateOnboardingStep({
      businessName: businessData.businessName,
      businessType: businessData.businessType,
      whatsappNumber: businessData.whatsappNumber,
      website: businessData.website,
      step: 'business-info'
    })

    if (result.success) {
      setShowBusinessForm(false)
      
      // Continuar con otros pasos o completar onboarding
      await updateOnboardingStep({
        businessName: '',
        businessType: '',
        step: 'complete'
      })
    }
  }

  if (loading) {
    return null // El loading se maneja en el portal principal
  }

  return (
    <>
      {/* Modal de Bienvenida */}
      <WelcomeModal
        isOpen={showWelcome}
        onClose={handleWelcomeComplete}
        userName={userName}
        businessName={onboardingStatus?.userInfo.businessName || undefined}
      />

      {/* Formulario de Información del Negocio */}
      <BusinessInfoForm
        isOpen={showBusinessForm}
        onClose={() => setShowBusinessForm(false)}
        onComplete={handleBusinessInfoComplete}
        loading={updating}
        initialData={{
          businessName: onboardingStatus?.userInfo.businessName || '',
          businessType: onboardingStatus?.userInfo.businessType || '',
          whatsappNumber: onboardingStatus?.userInfo.whatsappNumber || '',
          website: ''
        }}
      />
    </>
  )
}
