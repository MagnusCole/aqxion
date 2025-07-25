import { useState, useEffect } from 'react';

export interface UserProgress {
  setupCompleted: boolean;
  googleMyBusinessConnected: boolean;
  googleAdsConnected: boolean;
  metaAdsConnected: boolean;
  whatsappConfigured: boolean;
  onboardingCompleted: boolean;
  progressPercentage: number;
}

export const useUserProgress = () => {
  const [progress, setProgress] = useState<UserProgress>({
    setupCompleted: false,
    googleMyBusinessConnected: false,
    googleAdsConnected: false,
    metaAdsConnected: false,
    whatsappConfigured: false,
    onboardingCompleted: false,
    progressPercentage: 0
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // En producción: obtener progreso real del usuario desde la base de datos
    const fetchUserProgress = async () => {
      try {
        // Simulando datos para DEMO - en producción sería una API call
        // const response = await fetch('/api/user/progress');
        // const data = await response.json();
        
        // Para DEMO, simulamos un usuario que está empezando
        const mockProgress: UserProgress = {
          setupCompleted: false,
          googleMyBusinessConnected: false,
          googleAdsConnected: false,
          metaAdsConnected: false,
          whatsappConfigured: false,
          onboardingCompleted: true, // El onboarding ya está completo
          progressPercentage: 15 // Solo el onboarding está hecho
        };

        setProgress(mockProgress);
      } catch (error) {
        console.error('Error fetching user progress:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProgress();
  }, []);

  const updateProgress = (updates: Partial<UserProgress>) => {
    setProgress(prev => {
      const newProgress = { ...prev, ...updates };
      
      // Calcular porcentaje automáticamente
      const totalSteps = 5; // onboarding, setup, google my business, google ads, meta ads
      let completedSteps = 0;
      
      if (newProgress.onboardingCompleted) completedSteps++;
      if (newProgress.setupCompleted) completedSteps++;
      if (newProgress.googleMyBusinessConnected) completedSteps++;
      if (newProgress.googleAdsConnected) completedSteps++;
      if (newProgress.metaAdsConnected) completedSteps++;
      
      newProgress.progressPercentage = Math.round((completedSteps / totalSteps) * 100);
      
      return newProgress;
    });
  };

  // Determinar qué páginas están disponibles según el progreso
  const getAvailablePages = () => {
    const pages = {
      dashboard: true, // Siempre disponible
      setup: true, // Siempre disponible para configurar
      calendario: progress.setupCompleted, // Solo después del setup
      crm: progress.setupCompleted, // Solo después del setup
      whatsapp: progress.setupCompleted, // Solo después del setup
      recursos: progress.onboardingCompleted, // Después del onboarding
      soporte: true, // Siempre disponible
      resultados: progress.setupCompleted // Solo después del setup
    };

    return pages;
  };

  return {
    progress,
    loading,
    updateProgress,
    getAvailablePages
  };
};
