'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';

// Interfaces para el onboarding
interface OnboardingState {
  isFirstTime: boolean;
  completedSteps: number[];
  showWizard: boolean;
  lastCompletedAt: string | null;
  currentStep: number;
  onboardingCompleted: boolean;
}

interface OnboardingData {
  businessName: string;
  businessType: string;
  whatsappNumber?: string;
  website?: string;
  step: 'business-info' | 'whatsapp' | 'goals' | 'complete';
}

interface UserProfile {
  hasBusinessInfo: boolean;
  hasWhatsApp: boolean;
  hasWebsiteGoals: boolean;
}

interface OnboardingReturn {
  // Estado actual
  isFirstTime: boolean;
  completedSteps: number[];
  showWizard: boolean;
  lastCompletedAt: string | null;
  currentStep: number;
  onboardingCompleted: boolean;
  
  // Funciones
  markStepCompleted: (stepId: number) => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
  closeWizard: () => void;
  openWizard: () => void;
  
  // Computed values
  completionPercentage: number;
  isFirstLogin: boolean;
  needsOnboarding: boolean;
  userProfile: UserProfile;
}

/**
 * Hook para gestionar el estado del onboarding del usuario.
 * Maneja la persistencia en localStorage y proporciona funciones para actualizar el estado.
 */
export function useOnboarding(): OnboardingReturn {
  const { user } = useAuth();
  
  const [onboardingState, setOnboardingState] = useState<OnboardingState>({
    isFirstTime: true,
    completedSteps: [],
    showWizard: false,
    lastCompletedAt: null,
    currentStep: 1,
    onboardingCompleted: false
  });

  // Generar clave de localStorage para el usuario
  const getStorageKey = useCallback(() => {
    return `onboarding_${user?.id || user?.email || 'guest'}`;
  }, [user]);

  // Cargar estado desde localStorage
  useEffect(() => {
    if (!user) return;

    const storageKey = getStorageKey();
    const savedState = localStorage.getItem(storageKey);
    
    if (savedState) {
      try {
        const parsed: OnboardingState = JSON.parse(savedState);
        setOnboardingState(parsed);
        
        // Mostrar wizard solo si es primera vez y no ha completado onboarding
        if (parsed.isFirstTime && !parsed.onboardingCompleted) {
          setOnboardingState(prev => ({ ...prev, showWizard: true }));
        }
      } catch (error) {
        console.error('Error parsing onboarding state:', error);
        // Reset al estado inicial si hay error
        setOnboardingState(prev => ({ 
          ...prev, 
          showWizard: true,
          isFirstTime: true
        }));
      }
    } else {
      // Primera vez del usuario - mostrar wizard
      setOnboardingState(prev => ({ 
        ...prev, 
        showWizard: true,
        isFirstTime: true
      }));
    }
  }, [user, getStorageKey]);

  // Guardar estado en localStorage
  const saveState = useCallback((newState: OnboardingState) => {
    if (!user) return;
    
    try {
      const storageKey = getStorageKey();
      localStorage.setItem(storageKey, JSON.stringify(newState));
    } catch (error) {
      console.error('Error saving onboarding state:', error);
    }
  }, [user, getStorageKey]);

  // Marcar paso como completado
  const markStepCompleted = useCallback((stepId: number) => {
    setOnboardingState(prev => {
      const newState: OnboardingState = {
        ...prev,
        completedSteps: [...new Set([...prev.completedSteps, stepId])],
        currentStep: Math.min(stepId + 1, 6),
        lastCompletedAt: new Date().toISOString()
      };
      
      saveState(newState);
      return newState;
    });
  }, [saveState]);

  // Completar onboarding
  const completeOnboarding = useCallback(() => {
    const newState: OnboardingState = {
      isFirstTime: false,
      completedSteps: [1, 2, 3, 4, 5, 6],
      showWizard: false,
      lastCompletedAt: new Date().toISOString(),
      currentStep: 6,
      onboardingCompleted: true
    };

    setOnboardingState(newState);
    saveState(newState);
  }, [saveState]);

  // Reset onboarding
  const resetOnboarding = useCallback(() => {
    const newState: OnboardingState = {
      isFirstTime: true,
      completedSteps: [],
      showWizard: true,
      lastCompletedAt: null,
      currentStep: 1,
      onboardingCompleted: false
    };

    setOnboardingState(newState);
    
    // Limpiar localStorage
    if (user) {
      try {
        const storageKey = getStorageKey();
        localStorage.removeItem(storageKey);
      } catch (error) {
        console.error('Error removing onboarding state:', error);
      }
    }
  }, [user, getStorageKey]);

  // Cerrar wizard
  const closeWizard = useCallback(() => {
    setOnboardingState(prev => {
      const newState = { ...prev, showWizard: false };
      saveState(newState);
      return newState;
    });
  }, [saveState]);

  // Abrir wizard
  const openWizard = useCallback(() => {
    setOnboardingState(prev => {
      const newState = { ...prev, showWizard: true };
      saveState(newState);
      return newState;
    });
  }, [saveState]);

  // Computed values
  const completionPercentage = Math.round((onboardingState.completedSteps.length / 6) * 100);
  
  const userProfile: UserProfile = {
    hasBusinessInfo: onboardingState.completedSteps.includes(3),
    hasWhatsApp: onboardingState.completedSteps.includes(4),
    hasWebsiteGoals: onboardingState.completedSteps.includes(5)
  };

  return {
    // Estado actual
    ...onboardingState,
    
    // Funciones
    markStepCompleted,
    completeOnboarding,
    resetOnboarding,
    closeWizard,
    openWizard,
    
    // Computed values
    completionPercentage,
    isFirstLogin: onboardingState.isFirstTime,
    needsOnboarding: !onboardingState.onboardingCompleted,
    userProfile
  };
}
