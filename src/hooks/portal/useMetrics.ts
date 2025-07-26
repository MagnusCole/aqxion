import { useState, useEffect, useCallback } from 'react';
import { Metrics } from '@/types/portal/dashboard';

/**
 * Custom hook for metrics management
 * Handles state, persistence, and validation
 */
export function useMetrics() {
  const [metrics, setMetrics] = useState<Metrics>({
    webVisits: 247,
    newLeads: 12,
    whatsappChats: 38,
    conversions: 5
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('myperu-metrics');
      if (saved) {
        const parsed = JSON.parse(saved);
        setMetrics(parsed);
      }
    } catch (err) {
      setError('Error loading metrics');
      console.error('Failed to load metrics:', err);
    }
  }, []);

  // Persist to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem('myperu-metrics', JSON.stringify(metrics));
      setError(null);
    } catch (err) {
      setError('Error saving metrics');
      console.error('Failed to save metrics:', err);
    }
  }, [metrics]);

  const updateMetric = useCallback((key: keyof Metrics, value: number) => {
    if (value < 0) {
      setError('Value cannot be negative');
      return false;
    }
    
    setMetrics(prev => ({
      ...prev,
      [key]: value
    }));
    
    setError(null);
    return true;
  }, []);

  const resetMetrics = useCallback(() => {
    setMetrics({
      webVisits: 0,
      newLeads: 0,
      whatsappChats: 0,
      conversions: 0
    });
  }, []);

  return {
    metrics,
    loading,
    error,
    updateMetric,
    resetMetrics
  };
}
