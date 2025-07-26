'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, TrendingUp, Calendar } from 'lucide-react';
import { MetricCard } from '../ui';

// Types
interface UserGoal {
  amount: number;
  period: 'mensuales' | 'anuales';
  description: string;
  current: number;
}

interface DashboardOverviewProps {
  userGoal: UserGoal;
}

/**
 * Dashboard Overview Component
 * Single responsibility: Display key business metrics with custom goals
 * Mobile-first design with staggered animations
 */

const DashboardOverview: React.FC<DashboardOverviewProps> = ({ userGoal }) => {
  const progressPercentage = Math.round((userGoal.current / userGoal.amount) * 100);
  
  const metrics = [
    {
      title: 'Ingresos Mensuales',
      value: 'S/ 12,450',
      icon: DollarSign,
      color: 'bg-gradient-to-r from-green-500 to-emerald-600',
      trend: { value: 23, label: 'vs mes anterior', isPositive: true }
    },
    {
      title: 'Clientes Activos',
      value: '48',
      icon: Users,
      color: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      trend: { value: 12, label: 'nuevos este mes', isPositive: true }
    },
    {
      title: 'Tasa Conversión',
      value: '3.2%',
      icon: TrendingUp,
      color: 'bg-gradient-to-r from-purple-500 to-pink-600',
      trend: { value: 8, label: 'mejora continua', isPositive: true }
    },
    {
      title: 'Días Activo',
      value: '45',
      icon: Calendar,
      color: 'bg-gradient-to-r from-orange-500 to-red-600',
      trend: { value: 15, label: 'racha actual', isPositive: true }
    }
  ];

  return (
    <div className="space-y-6">
      {/* Progress Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-4 lg:p-6 text-white"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg lg:text-xl font-bold">Mi Progreso Personal</h3>
          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{progressPercentage}% completado</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2 lg:h-3 mb-2">
          <div 
            className="bg-white rounded-full h-2 lg:h-3 transition-all duration-500" 
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          ></div>
        </div>
        <p className="text-sm opacity-90">S/ {userGoal.current.toLocaleString()} de S/ {userGoal.amount.toLocaleString()} meta {userGoal.period}</p>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {metrics.map((metric, index) => (
          <MetricCard
            key={metric.title}
            {...metric}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-100"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: 'Generar Leads', color: 'bg-blue-500' },
            { label: 'Crear Contenido', color: 'bg-purple-500' },
            { label: 'Revisar Métricas', color: 'bg-emerald-500' },
            { label: 'Contactar Clientes', color: 'bg-orange-500' }
          ].map((action) => (
            <button
              key={action.label}
              className={`${action.color} text-white p-3 rounded-xl text-sm font-medium hover:scale-105 active:scale-95 transition-transform`}
            >
              {action.label}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(DashboardOverview);
