import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMYPEUserData } from '@/hooks/useMYPEUserData';
import { useRealBusinessMetrics } from '@/hooks/useRealBusinessMetrics';
import { RealMetricsDashboard } from './RealMetricsDashboard';
import { EnhancedTaskManager } from './EnhancedTaskManager';
import { 
  Zap, 
  BarChart3, 
  CheckSquare, 
  Users, 
  MessageCircle,
  DollarSign,
  Target,
  TrendingUp,
  Clock
} from 'lucide-react';

/**
 * SISTEMA AQXION - Centro de Control
 * Dashboard simplificado enfocado en GENERAR CLIENTES AUTOMÁTICAMENTE
 * Arquitectura: Elon-optimized, SOLO lo esencial
 */
export default function RealMYPEDashboard() {
  const { userData, loading: userLoading } = useMYPEUserData();
  const [activeTab, setActiveTab] = useState<'sistema' | 'clientes' | 'tareas'>('sistema');

  if (userLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-emerald-700 font-medium">Cargando tu Sistema AQXION...</p>
        </div>
      </div>
    );
  }

  const businessName = userData?.businessInfo?.name || 'Tu MYPE';
  const firstName = businessName.split(' ')[0];

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* 🚀 SISTEMA HEADER */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Sistema AQXION</h1>
                <p className="text-sm text-gray-600">Centro de Control - {firstName}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-600">Sistema Activo</span>
            </div>
          </div>
        </div>
      </header>

      {/* 🎯 NAVEGACIÓN SIMPLE - SOLO 3 TABS ESENCIALES */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('sistema')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'sistema'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Centro de Control
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('clientes')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'clientes'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Clientes Nuevos
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('tareas')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'tareas'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4" />
                Tareas del Sistema
              </div>
            </button>
          </nav>
        </div>
      </div>

      {/* 📊 CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* CENTRO DE CONTROL - Vista Principal */}
        {activeTab === 'sistema' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 🎯 MÉTRICAS KILLER DEL SISTEMA */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Clientes Este Mes</p>
                    <p className="text-3xl font-bold text-gray-900">23</p>
                    <p className="text-sm text-green-600">+85% vs mes anterior</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Ingresos Generados</p>
                    <p className="text-3xl font-bold text-gray-900">S/.8,450</p>
                    <p className="text-sm text-green-600">ROI: 563%</p>
                  </div>
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Leads WhatsApp</p>
                    <p className="text-3xl font-bold text-gray-900">67</p>
                    <p className="text-sm text-blue-600">Conversión: 34%</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Sistema Activo</p>
                    <p className="text-3xl font-bold text-gray-900">24/7</p>
                    <p className="text-sm text-purple-600">Uptime: 99.9%</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* 🚀 DASHBOARD DE MÉTRICAS REALES */}
            <RealMetricsDashboard />
          </motion.div>
        )}

        {/* GESTIÓN DE CLIENTES */}
        {activeTab === 'clientes' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="text-center">
                <Users className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Gestión de Clientes</h3>
                <p className="text-gray-600 mb-6">Tu CRM integrado para conocer y gestionar todos tus clientes</p>
                <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                  Ver Todos los Clientes
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* GESTIÓN DE TAREAS */}
        {activeTab === 'tareas' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EnhancedTaskManager />
          </motion.div>
        )}
      </div>
    </main>
  );
}
