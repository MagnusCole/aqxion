// 📊 Real Metrics Dashboard Component - AQXION
// Componente principal para mostrar métricas reales del negocio

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  TrendingUp, 
  Target,
  Phone,
  Mail,
  DollarSign,
  Calendar,
  Star,
  Activity,
  Plus,
  Edit3
} from 'lucide-react';
import { useRealBusinessMetrics } from '@/hooks/useRealBusinessMetrics';

// 🎯 Metric Card Component
interface MetricCardProps {
  title: string;
  value: number;
  icon: React.ElementType;
  color: string;
  onEdit: () => void;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon: Icon,
  color,
  onEdit,
  subtitle,
  trend
}) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    green: 'bg-green-50 text-green-600 border-green-100',
    purple: 'bg-purple-50 text-purple-600 border-purple-100',
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
    red: 'bg-red-50 text-red-600 border-red-100',
    yellow: 'bg-yellow-50 text-yellow-600 border-yellow-100'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative p-4 rounded-xl border-2 cursor-pointer
        ${colorClasses[color as keyof typeof colorClasses]}
        hover:shadow-md transition-all duration-200
      `}
      onClick={onEdit}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${colorClasses[color as keyof typeof colorClasses].split(' ')[0]}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {subtitle && (
              <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
            )}
          </div>
        </div>
        <Edit3 className="h-4 w-4 text-gray-400" />
      </div>
    </motion.div>
  );
};

// 📊 Main Metrics Dashboard
export const RealMetricsDashboard: React.FC = () => {
  const {
    metrics,
    updateMetric,
    loading,
    isNewBusiness,
    needsAttention,
    getCompletionPercentage,
    addContact,
    addWhatsappMessage
  } = useRealBusinessMetrics();

  const [editingMetric, setEditingMetric] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>('');

  // 🛡️ Defensive programming - ensure metrics has default values
  const safeMetrics = metrics || {
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

  // Get task completion rate safely
  const taskCompletionRate = getCompletionPercentage();

  // 🔧 Handle metric editing
  const handleEditMetric = (key: string, currentValue: number) => {
    setEditingMetric(key);
    setEditValue(currentValue.toString());
  };

  const handleSaveMetric = () => {
    if (editingMetric && editValue) {
      const numValue = parseInt(editValue, 10);
      if (!isNaN(numValue) && numValue >= 0) {
        updateMetric({ [editingMetric]: numValue });
      }
    }
    setEditingMetric(null);
    setEditValue('');
  };

  const handleQuickIncrement = (key: string) => {
    switch (key) {
      case 'newContactsToday':
        addContact();
        break;
      case 'whatsappMessages':
        addWhatsappMessage();
        break;
      case 'callsMade':
        updateMetric({ callsMade: safeMetrics.callsMade + 1 });
        break;
      case 'emailsSent':
        updateMetric({ emailsSent: safeMetrics.emailsSent + 1 });
        break;
      default:
        // Generic increment for other metrics
        updateMetric({ [key]: (safeMetrics as any)[key] + 1 });
    }
  };

  // 🔄 Loading state with skeleton
  if (loading) {
    return (
      <div className="px-4 py-6">
        <div className="animate-pulse space-y-4">
          <div className="h-20 bg-gray-200 rounded-xl"></div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-24 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* 📱 Mobile Layout: Single Column */}
      <div className="lg:hidden px-4 py-6 space-y-6">
        
        {/* 🎯 Business Status Header - Mobile */}
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-900">
              Estado del Negocio
            </h2>
            <Activity className="h-5 w-5 text-green-500" />
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">{taskCompletionRate || 0}%</p>
              <p className="text-xs text-gray-500">Tareas completadas</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">{safeMetrics.totalContacts}</p>
              <p className="text-xs text-gray-500">Total contactos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-600">
                {safeMetrics.clientsServedThisMonth}
              </p>
              <p className="text-xs text-gray-500">Clientes este mes</p>
            </div>
          </div>

          {isNewBusiness && (
            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                🚀 ¡Nuevo negocio! Comienza agregando tus primeros contactos y tareas.
              </p>
            </div>
          )}

          {needsAttention && (
            <div className="mt-3 p-3 bg-orange-50 rounded-lg">
              <p className="text-sm text-orange-800">
                ⚠️ Hay tareas pendientes que necesitan atención.
              </p>
            </div>
          )}
        </div>

        {/* 👥 Contactos y Comunicación - Mobile */}
        <div>
          <h3 className="text-md font-semibold text-gray-900 mb-3">
            Contactos y Comunicación
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <MetricCard
              title="Contactos Nuevos Hoy"
              value={safeMetrics.newContactsToday}
              icon={Users}
              color="blue"
              onEdit={() => handleEditMetric('newContactsToday', safeMetrics.newContactsToday)}
              subtitle="Desde hoy"
            />
            <MetricCard
              title="Mensajes WhatsApp"
              value={safeMetrics.whatsappMessages}
              icon={MessageCircle}
              color="green"
              onEdit={() => handleEditMetric('whatsappMessages', safeMetrics.whatsappMessages)}
              subtitle="Conversaciones"
            />
            <MetricCard
              title="Llamadas Realizadas"
              value={safeMetrics.callsMade}
              icon={Phone}
              color="purple"
              onEdit={() => handleEditMetric('callsMade', safeMetrics.callsMade)}
              subtitle="Este mes"
            />
            <MetricCard
              title="Emails Enviados"
              value={safeMetrics.emailsSent}
              icon={Mail}
              color="orange"
              onEdit={() => handleEditMetric('emailsSent', safeMetrics.emailsSent)}
              subtitle="Total"
            />
          </div>
        </div>

        {/* 💰 Financiero y Ventas - Mobile */}
        <div>
          <h3 className="text-md font-semibold text-gray-900 mb-3">
            Financiero y Ventas
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <MetricCard
              title="Ingresos del Mes"
              value={safeMetrics.monthlyRevenue}
              icon={DollarSign}
              color="green"
              onEdit={() => handleEditMetric('monthlyRevenue', safeMetrics.monthlyRevenue)}
              subtitle="S/. este mes"
            />
            <MetricCard
              title="Pagos Pendientes"
              value={safeMetrics.pendingPayments}
              icon={Calendar}
              color="yellow"
              onEdit={() => handleEditMetric('pendingPayments', safeMetrics.pendingPayments)}
              subtitle="Por cobrar"
            />
          </div>
        </div>

        {/* 📈 Crecimiento y Marketing - Mobile */}
        <div>
          <h3 className="text-md font-semibold text-gray-900 mb-3">
            Crecimiento y Marketing
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <MetricCard
              title="Visitas Web"
              value={safeMetrics.websiteVisits}
              icon={TrendingUp}
              color="blue"
              onEdit={() => handleEditMetric('websiteVisits', safeMetrics.websiteVisits)}
              subtitle="Este mes"
            />
            <MetricCard
              title="Seguidores Redes"
              value={safeMetrics.socialMediaFollowers}
              icon={Star}
              color="purple"
              onEdit={() => handleEditMetric('socialMediaFollowers', safeMetrics.socialMediaFollowers)}
              subtitle="Total"
            />
          </div>
        </div>

        {/* 🔧 Quick Actions - Mobile */}
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => handleQuickIncrement('newContactsToday')}
            className="p-3 bg-blue-50 rounded-lg flex flex-col items-center space-y-1 text-blue-600 hover:bg-blue-100 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span className="text-xs font-medium">Contacto</span>
          </button>
          <button
            onClick={() => handleQuickIncrement('whatsappMessages')}
            className="p-3 bg-green-50 rounded-lg flex flex-col items-center space-y-1 text-green-600 hover:bg-green-100 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span className="text-xs font-medium">WhatsApp</span>
          </button>
          <button
            onClick={() => handleQuickIncrement('callsMade')}
            className="p-3 bg-purple-50 rounded-lg flex flex-col items-center space-y-1 text-purple-600 hover:bg-purple-100 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span className="text-xs font-medium">Llamada</span>
          </button>
          <button
            onClick={() => handleQuickIncrement('emailsSent')}
            className="p-3 bg-orange-50 rounded-lg flex flex-col items-center space-y-1 text-orange-600 hover:bg-orange-100 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span className="text-xs font-medium">Email</span>
          </button>
        </div>
      </div>

      {/* 🔐 Edit Modal */}
      {editingMetric && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 mx-4 w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4">Editar Métrica</h3>
            <input
              type="number"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              placeholder="Nuevo valor"
              autoFocus
            />
            <div className="flex space-x-3">
              <button
                onClick={handleSaveMetric}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium"
              >
                Guardar
              </button>
              <button
                onClick={() => setEditingMetric(null)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-medium"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 📅 Last updated */}
      <div className="text-center py-2">
        <p className="text-xs text-gray-400">
          Última actualización: {new Date(safeMetrics.lastUpdated).toLocaleString('es-PE')}
        </p>
      </div>
    </div>
  );
};