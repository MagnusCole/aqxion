'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, DollarSign, Users, TrendingUp, Play } from 'lucide-react';
import { SimpleLargeButton, StepProgress, HelpTooltip } from '../ui';
import type { UserGoal } from '../../../types/portal';

interface SimpleDashboardOverviewProps {
  userGoal: UserGoal;
}

/**
 * Simple Dashboard Overview - iOS Native Feel
 * Clean, minimal, <200 lines
 * Single responsibility: Main dashboard overview
 */
const SimpleDashboardOverview: React.FC<SimpleDashboardOverviewProps> = ({ userGoal }) => {
  const progressPercentage = Math.round((userGoal.current / userGoal.amount) * 100);
  
  // iOS-style program steps - minimal and clean
  const programSteps = [
    { id: 'meta', number: 1, title: 'Define Tu Meta', description: 'Establece tu objetivo', status: 'completed' as const },
    { id: 'nicho', number: 2, title: 'Encuentra Tu Nicho', description: 'Descubre tu mercado', status: 'current' as const },
    { id: 'oferta', number: 3, title: 'Crea Tu Oferta', description: 'Diseña tu propuesta', status: 'upcoming' as const },
    { id: 'marketing', number: 4, title: 'Lanza Tu Marketing', description: 'Atrae clientes', status: 'upcoming' as const }
  ];

  // Main actions - iOS style
  const mainActions = [
    {
      icon: Target,
      label: 'Mi Nicho',
      description: 'Encuentra tu mercado ideal',
      color: 'warning' as const
    },
    {
      icon: DollarSign,
      label: 'Mis Ingresos',
      description: 'Revisa tus ganancias',
      color: 'success' as const
    },
    {
      icon: Users,
      label: 'Mis Clientes',
      description: 'Gestiona tu cartera',
      color: 'info' as const
    },
    {
      icon: Play,
      label: 'Siguiente Paso',
      description: 'Continúa tu progreso',
      color: 'primary' as const
    }
  ];

  return (
    <div className="space-y-6">
      {/* iOS-style progress card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Tu Meta</h2>
              <p className="text-sm text-gray-500">S/ {userGoal.amount.toLocaleString()} {userGoal.period}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-500">{progressPercentage}%</div>
            <div className="text-xs text-gray-500">completado</div>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 rounded-full h-2 transition-all duration-1000" 
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          />
        </div>
        
        <div className="flex justify-between mt-3 text-sm">
          <span className="text-gray-600">S/ {userGoal.current.toLocaleString()}</span>
          <span className="text-gray-400">S/ {userGoal.amount.toLocaleString()}</span>
        </div>
      </motion.div>

      {/* Progress steps - iOS minimal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tu Progreso</h3>
        <StepProgress steps={programSteps} currentStep={1} />
      </motion.div>

      {/* Main actions grid - iOS style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-4"
      >
        {mainActions.map((action, index) => {
          const ActionIcon = action.icon;
          
          return (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              <SimpleLargeButton
                icon={ActionIcon}
                label={action.label}
                description={action.description}
                color={action.color}
                onClick={() => console.log(`Navigate to ${action.label}`)}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Quick stats - iOS minimal cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 gap-4"
      >
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-green-500 mb-1">S/ 12,450</div>
          <div className="text-sm text-gray-500">Este mes</div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-blue-500 mb-1">48</div>
          <div className="text-sm text-gray-500">Clientes</div>
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(SimpleDashboardOverview);
