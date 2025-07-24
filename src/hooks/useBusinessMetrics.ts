import { useState, useEffect } from 'react';
import type { BusinessMetrics } from '@/types';
import { ApiService } from '@/services/api';

export function useBusinessMetrics() {
  const [metrics, setMetrics] = useState<BusinessMetrics>({
    newClients: 12,
    weeklyGrowth: 25,
    activeAds: 3,
    whatsappLeads: 8
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setIsLoading(true);
        const data = await ApiService.getBusinessMetrics();
        setMetrics(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar métricas');
        // Mantener valores por defecto en caso de error
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  const updateMetrics = (newMetrics: Partial<BusinessMetrics>) => {
    setMetrics(prev => ({ ...prev, ...newMetrics }));
  };

  return {
    metrics,
    isLoading,
    error,
    updateMetrics
  };
}
