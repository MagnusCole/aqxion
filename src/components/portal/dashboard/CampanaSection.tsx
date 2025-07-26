'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Target, Users, TrendingUp, Play } from 'lucide-react';

/**
 * Campaign Creation Component
 * Single responsibility: Guide user through campaign setup
 * Mobile-first with step-by-step process
 */

const CampanaSection: React.FC = () => {
  const campaignSteps = [
    {
      title: 'Configurar Audiencia',
      description: 'Define tu cliente ideal',
      status: 'completed',
      icon: Users,
      progress: 100
    },
    {
      title: 'Crear Contenido',
      description: 'Genera posts automáticamente',
      status: 'in-progress',
      icon: Megaphone,
      progress: 60
    },
    {
      title: 'Lanzar Campaña',
      description: 'Activar generación de leads',
      status: 'pending',
      icon: Play,
      progress: 0
    }
  ];

  const metrics = [
    { label: 'Alcance Estimado', value: '2,500', change: '+15%' },
    { label: 'Leads Esperados', value: '45', change: '+8%' },
    { label: 'Costo por Lead', value: 'S/ 12', change: '-5%' },
    { label: 'ROI Proyectado', value: '320%', change: '+12%' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Megaphone className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Mi Campaña de Marketing</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Sistema automatizado para generar leads cualificados 24/7
        </p>
      </motion.div>

      {/* Campaign Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-6 border border-gray-100"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Progreso de Configuración</h3>
        
        <div className="space-y-4">
          {campaignSteps.map((step, index) => {
            const Icon = step.icon;
            const statusColor = {
              'completed': 'bg-green-500 text-white',
              'in-progress': 'bg-blue-500 text-white',
              'pending': 'bg-gray-200 text-gray-600'
            }[step.status];

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${statusColor}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-blue-500 rounded-full h-2 transition-all duration-500"
                      style={{ width: `${step.progress}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-500">{step.progress}%</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Projected Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white"
      >
        <h3 className="text-lg font-bold mb-4">Resultados Proyectados</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div key={metric.label} className="text-center">
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="text-sm opacity-90">{metric.label}</div>
              <div className="text-xs bg-white/20 px-2 py-1 rounded-full mt-1 inline-block">
                {metric.change}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        <button className="bg-blue-500 text-white p-6 rounded-2xl text-left hover:scale-105 active:scale-95 transition-transform">
          <Target className="w-8 h-8 mb-3" />
          <h4 className="font-semibold mb-2">Configurar Audiencia</h4>
          <p className="text-sm opacity-90">Define tu cliente ideal con IA</p>
        </button>
        
        <button className="bg-purple-500 text-white p-6 rounded-2xl text-left hover:scale-105 active:scale-95 transition-transform">
          <TrendingUp className="w-8 h-8 mb-3" />
          <h4 className="font-semibold mb-2">Ver Analytics</h4>
          <p className="text-sm opacity-90">Monitorea el rendimiento en tiempo real</p>
        </button>
      </motion.div>
    </div>
  );
};

export default React.memo(CampanaSection);
