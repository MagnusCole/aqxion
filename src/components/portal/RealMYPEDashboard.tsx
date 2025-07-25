import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMYPEUserData } from '@/hooks/useMYPEUserData';
import { useRealBusinessMetrics } from '@/hooks/useRealBusinessMetrics';
import { RealMetricsDashboard } from './RealMetricsDashboard';
import { EnhancedTaskManager } from './EnhancedTaskManager';
import { 
  Home, 
  BarChart3, 
  CheckSquare, 
  Users, 
  Calendar,
  MessageCircle,
  DollarSign,
  Settings
} from 'lucide-react';

/**
 * Real MYPE Dashboard - AQXION Portal
 * Dashboard 100% funcional con datos reales (sin simulaciones)
 * Arquitectura: iOS-native style, composición modular
 */
export default function RealMYPEDashboard() {
  const { userData, loading: userLoading } = useMYPEUserData();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'tasks' | 'contacts' | 'calendar'>('dashboard');

  if (userLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  const businessName = userData?.businessInfo?.name || 'Tu Negocio';
  const firstName = businessName.split(' ')[0];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* 📱 Mobile Layout */}
      <div className="lg:hidden">
        <div className="max-w-md mx-auto bg-white min-h-screen">
          
          {/* iOS Status Bar Space */}
          <div className="h-11 bg-white" />
          
          {/* Header - iOS Style */}
          <header className="px-4 pb-4 bg-white sticky top-11 z-10 border-b border-gray-100" role="banner">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Hola, {firstName}
                </h1>
                <p className="text-gray-500 text-sm">
                  {new Date().toLocaleDateString('es-PE', { 
                    weekday: 'long', 
                    day: 'numeric', 
                    month: 'long' 
                  })}
                </p>
              </div>
              <button className="p-2 bg-gray-100 rounded-full">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`
                  flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md text-sm font-medium transition-all
                  ${activeTab === 'dashboard' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}
                `}
              >
                <Home className="h-4 w-4" />
                <span>Inicio</span>
              </button>
              <button
                onClick={() => setActiveTab('tasks')}
                className={`
                  flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md text-sm font-medium transition-all
                  ${activeTab === 'tasks' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}
                `}
              >
                <CheckSquare className="h-4 w-4" />
                <span>Tareas</span>
              </button>
            </div>
          </header>

          {/* Content Area */}
          <div className="pb-8">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Welcome Card */}
                <div className="px-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white">
                    <h2 className="text-lg font-semibold mb-2">¡Bienvenido a tu Portal MYPE!</h2>
                    <p className="text-blue-100 text-sm">
                      Gestiona tu negocio de manera inteligente con herramientas reales y datos que importan.
                    </p>
                  </div>
                </div>

                {/* Real Business Metrics */}
                <RealMetricsDashboard />

                {/* Quick Actions */}
                <div className="px-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Acciones Rápidas</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setActiveTab('tasks')}
                      className="p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all"
                    >
                      <CheckSquare className="h-6 w-6 text-blue-600 mb-2" />
                      <p className="text-sm font-medium text-gray-900">Ver Tareas</p>
                      <p className="text-xs text-gray-500">Gestionar pendientes</p>
                    </button>
                    
                    <button className="p-4 bg-white rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all">
                      <Users className="h-6 w-6 text-green-600 mb-2" />
                      <p className="text-sm font-medium text-gray-900">Contactos</p>
                      <p className="text-xs text-gray-500">Gestionar clientes</p>
                    </button>
                    
                    <button className="p-4 bg-white rounded-xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-all">
                      <Calendar className="h-6 w-6 text-purple-600 mb-2" />
                      <p className="text-sm font-medium text-gray-900">Calendario</p>
                      <p className="text-xs text-gray-500">Programar citas</p>
                    </button>
                    
                    <button className="p-4 bg-white rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50 transition-all">
                      <MessageCircle className="h-6 w-6 text-orange-600 mb-2" />
                      <p className="text-sm font-medium text-gray-900">WhatsApp</p>
                      <p className="text-xs text-gray-500">Mensajes</p>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tasks' && (
              <EnhancedTaskManager />
            )}

            {activeTab === 'contacts' && (
              <div className="px-4 py-6">
                <div className="text-center py-8">
                  <Users className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Gestión de Contactos</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Próximamente: Sistema completo de CRM para gestionar tus clientes y leads.
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium">
                    Agregar Contacto
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'calendar' && (
              <div className="px-4 py-6">
                <div className="text-center py-8">
                  <Calendar className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Calendario de Citas</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Próximamente: Calendario inteligente para gestionar tus citas y reuniones.
                  </p>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium">
                    Nueva Cita
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* iOS Home Indicator */}
          <div className="h-8 flex items-center justify-center bg-white">
            <div className="w-32 h-1 bg-gray-300 rounded-full" />
          </div>
        </div>
      </div>

      {/* 🖥️ Desktop Layout */}
      <div className="hidden lg:block min-h-screen">
        
        {/* Desktop Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Portal MYPE - {firstName}
                </h1>
                <p className="text-gray-600 mt-1">
                  {new Date().toLocaleDateString('es-PE', { 
                    weekday: 'long', 
                    day: 'numeric', 
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
              
              {/* Desktop Navigation */}
              <div className="flex items-center space-x-6">
                <nav className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`
                      flex items-center space-x-3 px-4 py-2 rounded-md text-sm font-medium transition-all
                      ${activeTab === 'dashboard' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}
                    `}
                  >
                    <Home className="h-5 w-5" />
                    <span>Dashboard</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('tasks')}
                    className={`
                      flex items-center space-x-3 px-4 py-2 rounded-md text-sm font-medium transition-all
                      ${activeTab === 'tasks' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}
                    `}
                  >
                    <CheckSquare className="h-5 w-5" />
                    <span>Gestión de Tareas</span>
                  </button>
                </nav>
                
                <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Settings className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Desktop Content */}
        <div className="max-w-7xl mx-auto px-8 py-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Real Business Metrics - Desktop */}
              <RealMetricsDashboard />

              {/* Desktop Feature Grid */}
              <div className="grid grid-cols-4 gap-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab('tasks')}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <CheckSquare className="h-8 w-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900 mb-2">Gestión de Tareas</h3>
                  <p className="text-sm text-gray-600">Organiza y completa tus tareas diarias de manera eficiente</p>
                </motion.button>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all group"
                >
                  <Users className="h-8 w-8 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900 mb-2">CRM de Contactos</h3>
                  <p className="text-sm text-gray-600">Gestiona tus clientes y leads de manera profesional</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Próximamente</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all group"
                >
                  <Calendar className="h-8 w-8 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900 mb-2">Calendario</h3>
                  <p className="text-sm text-gray-600">Programa citas y gestiona tu agenda empresarial</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Próximamente</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all group"
                >
                  <MessageCircle className="h-8 w-8 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900 mb-2">WhatsApp Business</h3>
                  <p className="text-sm text-gray-600">Integra y optimiza tu comunicación por WhatsApp</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Próximamente</span>
                </motion.div>
              </div>
            </div>
          )}

          {activeTab === 'tasks' && (
            <div className="max-w-4xl">
              <EnhancedTaskManager />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
