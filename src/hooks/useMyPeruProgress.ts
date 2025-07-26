// 🇵🇪 MyPerú Progress Hook - Track UIT Journey
// Hook para trackear el progreso hacia 150 UIT anuales

'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export interface MyPeruProgressData {
  currentUIT: number;
  targetUIT: number;
  percentage: number;
  monthlyRevenue: number;
  clientsThisMonth: number;
  milestones: {
    amount: number;
    name: string;
    status: 'completed' | 'current' | 'pending';
    date?: string;
  }[];
  modules: {
    id: string;
    name: string;
    completed: boolean;
    progress: number;
    type: 'DFY' | 'DWY' | 'DIY';
  }[];
}

export function useMyPeruProgress() {
  const [progressData, setProgressData] = useState<MyPeruProgressData>({
    currentUIT: 12,
    targetUIT: 150,
    percentage: 8,
    monthlyRevenue: 8450,
    clientsThisMonth: 17,
    milestones: [
      { amount: 30, name: "Primera Meta", status: "completed", date: "Enero 2025" },
      { amount: 67, name: "Duplicación", status: "current" },
      { amount: 150, name: "150 UIT", status: "pending" }
    ],
    modules: [
      { id: 'nicho', name: 'Elección de Nicho', completed: false, progress: 0, type: 'DFY' },
      { id: 'oferta', name: 'Creación de Oferta', completed: false, progress: 0, type: 'DFY' },
      { id: 'campana', name: 'Lanzamiento Campaña', completed: false, progress: 0, type: 'DWY' },
      { id: 'conversion', name: 'Conversión Leads', completed: false, progress: 0, type: 'DWY' },
      { id: 'entrega', name: 'Entrega Servicio', completed: false, progress: 0, type: 'DIY' },
      { id: 'escalado', name: 'Escalado Sostenible', completed: false, progress: 0, type: 'DIY' }
    ]
  });
  
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  // Simular carga de datos del usuario
  useEffect(() => {
    if (user) {
      // En producción, esto vendría de Supabase
      const savedProgress = localStorage.getItem('myperu-progress');
      if (savedProgress) {
        try {
          setProgressData(JSON.parse(savedProgress));
        } catch (e) {
          console.error('Error loading MyPerú progress:', e);
        }
      }
    }
  }, [user]);

  const updateProgress = (newData: Partial<MyPeruProgressData>) => {
    const updated = { ...progressData, ...newData };
    setProgressData(updated);
    
    // Guardar en localStorage (en producción sería Supabase)
    localStorage.setItem('myperu-progress', JSON.stringify(updated));
  };

  const completeModule = (moduleId: string) => {
    const updatedModules = progressData.modules.map(module => 
      module.id === moduleId 
        ? { ...module, completed: true, progress: 100 }
        : module
    );
    
    updateProgress({ modules: updatedModules });
  };

  const updateModuleProgress = (moduleId: string, progress: number) => {
    const updatedModules = progressData.modules.map(module => 
      module.id === moduleId 
        ? { ...module, progress: Math.min(100, Math.max(0, progress)) }
        : module
    );
    
    updateProgress({ modules: updatedModules });
  };

  const getNextMilestone = () => {
    return progressData.milestones.find(m => m.status === 'current' || m.status === 'pending');
  };

  const getCompletedModulesCount = () => {
    return progressData.modules.filter(m => m.completed).length;
  };

  const getOverallProgress = () => {
    const totalModules = progressData.modules.length;
    const completedModules = getCompletedModulesCount();
    return totalModules > 0 ? (completedModules / totalModules) * 100 : 0;
  };

  return {
    progressData,
    loading,
    updateProgress,
    completeModule,
    updateModuleProgress,
    getNextMilestone,
    getCompletedModulesCount,
    getOverallProgress
  };
}
