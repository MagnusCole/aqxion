'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Edit3, Save, X, Plus, TrendingUp, TrendingDown } from 'lucide-react';

interface EditableMetric {
  value: number;
  label: string;
  previousValue?: number;
}

interface EditableMetrics {
  websiteVisits: EditableMetric;
  newLeads: EditableMetric;
  whatsappChats: EditableMetric;
  conversions: EditableMetric;
}

interface EditableMetricsCardProps {
  initialMetrics?: Partial<EditableMetrics>;
  onSave?: (metrics: EditableMetrics) => void;
}

export default function EditableMetricsCard({ initialMetrics, onSave }: EditableMetricsCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [metrics, setMetrics] = useState<EditableMetrics>({
    websiteVisits: { value: 0, label: 'Visitas Web', previousValue: 0 },
    newLeads: { value: 0, label: 'Nuevos Leads', previousValue: 0 },
    whatsappChats: { value: 0, label: 'Chats WhatsApp', previousValue: 0 },
    conversions: { value: 0, label: 'Conversiones', previousValue: 0 },
  });

  // Cargar métricas del localStorage
  useEffect(() => {
    const savedMetrics = localStorage.getItem('aqxion_user_metrics');
    if (savedMetrics) {
      try {
        const parsed = JSON.parse(savedMetrics);
        setMetrics(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Error loading metrics:', error);
      }
    }
  }, []);

  const handleSave = () => {
    // Guardar en localStorage
    localStorage.setItem('aqxion_user_metrics', JSON.stringify(metrics));
    
    // Llamar callback si existe
    if (onSave) {
      onSave(metrics);
    }
    
    setIsEditing(false);
  };

  const handleMetricChange = (key: keyof EditableMetrics, value: number) => {
    setMetrics(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        previousValue: prev[key].value,
        value: value
      }
    }));
  };

  const calculateGrowth = (current: number, previous: number) => {
    if (previous === 0) return 0;
    return Math.round(((current - previous) / previous) * 100);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-900">Métricas de tu Negocio</h3>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-2 rounded-xl hover:bg-gray-50 transition-colors"
        >
          {isEditing ? (
            <X className="w-4 h-4 text-gray-500" />
          ) : (
            <Edit3 className="w-4 h-4 text-gray-500" />
          )}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            key="editing"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="text-sm text-gray-500 mb-3">
              Actualiza tus métricas reales:
            </div>
            
            {Object.entries(metrics).map(([key, metric]) => (
              <div key={key} className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  {metric.label}:
                </label>
                <input
                  type="number"
                  value={metric.value}
                  onChange={(e) => handleMetricChange(key as keyof EditableMetrics, parseInt(e.target.value) || 0)}
                  className="w-20 px-2 py-1 border border-gray-200 rounded-lg text-right focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  min="0"
                />
              </div>
            ))}

            <div className="flex gap-2 mt-4">
              <button
                onClick={handleSave}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                Guardar
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-3 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="viewing"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-2 gap-3"
          >
            {Object.entries(metrics).map(([key, metric]) => {
              const growth = calculateGrowth(metric.value, metric.previousValue || 0);
              const isPositive = growth > 0;
              const isNegative = growth < 0;

              return (
                <div key={key} className="bg-gray-50 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500">{metric.label}</span>
                    {growth !== 0 && (
                      <div className={`flex items-center gap-1 text-xs ${
                        isPositive ? 'text-green-600' : isNegative ? 'text-red-600' : 'text-gray-500'
                      }`}>
                        {isPositive ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : isNegative ? (
                          <TrendingDown className="w-3 h-3" />
                        ) : null}
                        {Math.abs(growth)}%
                      </div>
                    )}
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {formatNumber(metric.value)}
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {!isEditing && metrics.websiteVisits.value === 0 && (
        <div className="mt-4 p-3 bg-blue-50 rounded-xl">
          <div className="flex items-start gap-2">
            <Plus className="w-4 h-4 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-900">
                Agrega tus métricas reales
              </p>
              <p className="text-xs text-blue-700 mt-1">
                Haz clic en el ícono de editar para ingresar los datos de tu negocio
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
