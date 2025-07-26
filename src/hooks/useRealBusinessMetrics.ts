// 🎯 Real Business Metrics Hook - MyPerú MYPE Portal
// Hook para métricas reales conectado a Supabase

'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';

// 📊 Real Metrics Interface
export interface RealBusinessMetrics {
  totalContacts: number;
  newContactsToday: number;
  newContactsThisWeek: number;
  newContactsThisMonth: number;
  whatsappMessages: number;
  emailsSent: number;
  callsMade: number;
  tasksCompleted: number;
  tasksTotal: number;
  tasksCompletedToday: number;
  monthlyRevenue: number;
  pendingPayments: number;
  clientsServedThisMonth: number;
  websiteVisits: number;
  socialMediaFollowers: number;
  reviewsReceived: number;
  lastUpdated: string;
  lastActivityDate: string;
}

export function useRealBusinessMetrics() {
  const { user } = useAuth();
  const [metrics, setMetrics] = useState<RealBusinessMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔄 Cargar métricas desde Supabase (fallback a localStorage temporalmente)
  const loadMetrics = useCallback(async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Por ahora, saltar la API y usar directamente localStorage
      // TODO: Habilitar cuando la autenticación de API esté lista
      // const response = await fetch('/api/portal/metrics');
      console.log('Usando localStorage para métricas (API de desarrollo en pausa)');

      // Fallback: usar localStorage mientras la API no esté lista
      const storageKey = `real_business_metrics_${user.id || user.email || 'guest'}`;
      const savedMetrics = localStorage.getItem(storageKey);

      if (savedMetrics) {
        const parsedMetrics = JSON.parse(savedMetrics);
        setMetrics({
          ...parsedMetrics,
          lastUpdated: new Date().toISOString()
        });
      } else {
        // Datos iniciales
        const initialMetrics: RealBusinessMetrics = {
          totalContacts: 0,
          newContactsToday: 0,
          newContactsThisWeek: 0,
          newContactsThisMonth: 0,
          whatsappMessages: 0,
          emailsSent: 0,
          callsMade: 0,
          tasksCompleted: 0,
          tasksTotal: 0,
          tasksCompletedToday: 0,
          monthlyRevenue: 0,
          pendingPayments: 0,
          clientsServedThisMonth: 0,
          websiteVisits: 0,
          socialMediaFollowers: 0,
          reviewsReceived: 0,
          lastUpdated: new Date().toISOString(),
          lastActivityDate: new Date().toISOString()
        };
        
        setMetrics(initialMetrics);
        localStorage.setItem(storageKey, JSON.stringify(initialMetrics));
      }

    } catch (err) {
      console.error('Error loading metrics:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [user]);

  // 🔄 Actualizar métrica específica
  const updateMetric = useCallback(async (updates: Partial<RealBusinessMetrics>) => {
    if (!user || !metrics) return false;

    try {
      const updatedMetrics = {
        ...metrics,
        ...updates,
        lastUpdated: new Date().toISOString(),
        lastActivityDate: new Date().toISOString()
      };

      // Por ahora, saltar llamadas a API y usar localStorage
      // TODO: Habilitar cuando la autenticación esté configurada
      // try {
      //   for (const [key, value] of Object.entries(updates)) {
      //     if (typeof value === 'number') {
      //       await fetch('/api/portal/metrics', {
      //         method: 'POST', 
      //         headers: { 'Content-Type': 'application/json' },
      //         body: JSON.stringify({
      //           metricType: key,
      //           value,
      //           note: 'Updated from dashboard'
      //         })
      //       });
      //     }
      //   }
      // } catch (apiError) {
      //   console.log('API update failed, using localStorage:', apiError);
      // }
      
      console.log('Actualizando métricas en localStorage (API en desarrollo)');

      // Actualizar localStorage como backup
      const storageKey = `real_business_metrics_${user.id || user.email || 'guest'}`;
      localStorage.setItem(storageKey, JSON.stringify(updatedMetrics));
      
      setMetrics(updatedMetrics);
      return true;

    } catch (err) {
      console.error('Error updating metrics:', err);
      setError(err instanceof Error ? err.message : 'Failed to update metrics');
      return false;
    }
  }, [user, metrics]);

  // 🎯 Métodos de conveniencia
  const addContact = useCallback(() => {
    if (!metrics) return;
    updateMetric({
      totalContacts: metrics.totalContacts + 1,
      newContactsToday: metrics.newContactsToday + 1,
      newContactsThisWeek: metrics.newContactsThisWeek + 1,
      newContactsThisMonth: metrics.newContactsThisMonth + 1
    });
  }, [updateMetric, metrics]);

  const addWhatsappMessage = useCallback(() => {
    if (!metrics) return;
    updateMetric({
      whatsappMessages: metrics.whatsappMessages + 1
    });
  }, [updateMetric, metrics]);

  const updateRevenue = useCallback((amount: number) => {
    updateMetric({ monthlyRevenue: amount });
  }, [updateMetric]);

  const updateWebsiteVisits = useCallback((visits: number) => {
    updateMetric({ websiteVisits: visits });
  }, [updateMetric]);

  const completeTask = useCallback(() => {
    if (!metrics) return;
    updateMetric({
      tasksCompleted: metrics.tasksCompleted + 1,
      tasksCompletedToday: metrics.tasksCompletedToday + 1
    });
  }, [updateMetric, metrics]);

  // 📊 Calcular progreso y crecimiento
  const getMetricGrowth = useCallback((current: number, previous: number = 0) => {
    if (previous === 0) return 0;
    return Math.round(((current - previous) / previous) * 100);
  }, []);

  const getCompletionPercentage = useCallback(() => {
    if (!metrics || metrics.tasksTotal === 0) return 0;
    return Math.round((metrics.tasksCompleted / metrics.tasksTotal) * 100);
  }, [metrics]);

  // Estado calculado para compatibilidad con componentes existentes
  const isNewBusiness = metrics ? metrics.totalContacts < 5 : true;
  const needsAttention = metrics ? metrics.tasksTotal > 0 && getCompletionPercentage() < 30 : false;

  // Cargar métricas al montar
  useEffect(() => {
    loadMetrics();
  }, [loadMetrics]);

  return {
    metrics,
    loading,
    error,
    
    // Métodos de carga y actualización
    loadMetrics,
    updateMetric,
    
    // Métodos de conveniencia
    addContact,
    addWhatsappMessage,
    updateRevenue,
    updateWebsiteVisits,
    completeTask,
    
    // Utilidades de cálculo
    getMetricGrowth,
    getCompletionPercentage,
    
    // Estado del hook
    isLoaded: !loading && metrics !== null,
    hasError: error !== null,
    
    // Estados calculados para compatibilidad
    isNewBusiness,
    needsAttention
  };
}
