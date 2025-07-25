import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, MessageCircle, Target } from 'lucide-react';
import type { Metrics } from '@/types/portal/dashboard';

interface MetricsGridProps {
  metrics: Metrics;
  onMetricClick?: (key: keyof Metrics) => void;
  loading?: boolean;
}

/**
 * MetricsGrid - Pure UI Component
 * Displays metrics in iOS-style cards
 * Single responsibility: Visual presentation only
 */
export const MetricsGrid: React.FC<MetricsGridProps> = ({
  metrics,
  onMetricClick,
  loading = false
}) => {
  const metricsData = [
    { 
      key: 'webVisits' as const, 
      title: 'Visitantes', 
      value: metrics.webVisits, 
      icon: TrendingUp, 
      color: 'blue' 
    },
    { 
      key: 'newLeads' as const, 
      title: 'Leads', 
      value: metrics.newLeads, 
      icon: Users, 
      color: 'green' 
    },
    { 
      key: 'whatsappChats' as const, 
      title: 'Chats', 
      value: metrics.whatsappChats, 
      icon: MessageCircle, 
      color: 'purple' 
    },
    { 
      key: 'conversions' as const, 
      title: 'Ventas', 
      value: metrics.conversions, 
      icon: Target, 
      color: 'orange' 
    }
  ];

  if (loading) {
    return (
      <section className="px-4 mb-8">
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div 
              key={i}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 animate-pulse"
            >
              <div className="w-8 h-8 bg-gray-200 rounded-lg mb-2" />
              <div className="h-8 bg-gray-200 rounded mb-1" />
              <div className="h-3 bg-gray-200 rounded w-16" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 mb-8" role="region" aria-label="Métricas del negocio">
      <div className="grid grid-cols-2 gap-3">
        {metricsData.map((metric) => (
          <motion.button
            key={metric.key}
            whileTap={{ scale: 0.95 }}
            onClick={() => onMetricClick?.(metric.key)}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-left
              focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
              transition-all duration-200"
            aria-label={`${metric.title}: ${metric.value.toLocaleString()}`}
          >
            <div className="flex items-center justify-between mb-2">
              <div 
                className={`w-8 h-8 rounded-lg bg-${metric.color}-100 flex items-center justify-center`}
                aria-hidden="true"
              >
                <metric.icon className={`w-4 h-4 text-${metric.color}-600`} />
              </div>
            </div>
            
            <motion.div 
              className="text-2xl font-bold text-gray-900 mb-1"
              key={metric.value}
              initial={{ scale: 1.1, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {metric.value.toLocaleString()}
            </motion.div>
            
            <div className="text-xs text-gray-500 font-medium">
              {metric.title}
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
};
