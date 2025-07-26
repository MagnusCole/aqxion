// 🚀 SISTEMA AQXION - Dashboard de Métricas Killer
// STEP 3: Optimizado para mostrar SOLO métricas que GENERAN CLIENTES

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  TrendingUp, 
  DollarSign,
  Zap,
  Target,
  Phone,
  Eye,
  CheckCircle,
  ArrowUp,
  ArrowDown,
  Activity
} from 'lucide-react';

// 🎯 Métricas KILLER que las MYPEs entienden inmediatamente
const metricsData = [
  {
    title: 'Clientes Este Mes',
    value: '23',
    icon: Users,
    color: 'emerald',
    subtitle: 'vs 13 mes anterior',
    growth: '+77%',
    isPositive: true
  },
  {
    title: 'Ingresos Generados',
    value: 'S/.8,450',
    icon: DollarSign,
    color: 'green',
    subtitle: 'ROI del sistema',
    growth: '563%',
    isPositive: true
  },
  {
    title: 'Leads WhatsApp',
    value: '67',
    icon: MessageCircle,
    color: 'blue',
    subtitle: 'Conversión 34%',
    growth: '+156%',
    isPositive: true
  },
  {
    title: 'Sistema Activo',
    value: '24/7',
    icon: Zap,
    color: 'purple',
    subtitle: 'Trabajando por ti',
    growth: '99.9%',
    isPositive: true
  }
];

// 🔥 Sistema de estado del negocio
const businessHealth = {
  status: 'EXCELENTE',
  score: 94,
  color: 'emerald',
  message: 'Tu sistema está generando clientes automáticamente'
};

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  color: string;
  subtitle?: string;
  growth?: string;
  isPositive?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon: Icon,
  color,
  subtitle,
  growth,
  isPositive = true
}) => {
  const colorClasses = {
    emerald: 'bg-emerald-500',
    green: 'bg-green-500', 
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    red: 'bg-red-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${colorClasses[color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        {growth && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
            isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {isPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
            {growth}
          </div>
        )}
      </div>
      
      <div>
        <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
        <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
        {subtitle && (
          <p className="text-xs text-gray-500">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
};

// 🚀 Status Card del Sistema
const SystemStatus = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl p-6 text-white mb-8"
  >
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-bold mb-2">Estado del Sistema AQXION</h3>
        <p className="text-emerald-100 mb-4">{businessHealth.message}</p>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">{businessHealth.status}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4" />
            <span className="text-sm">Score: {businessHealth.score}/100</span>
          </div>
        </div>
      </div>
      
      <div className="text-right">
        <div className="text-3xl font-bold">{businessHealth.score}</div>
        <div className="text-sm text-emerald-100">Puntuación</div>
      </div>
    </div>
  </motion.div>
);

// 📊 Quick Actions Optimizadas
const QuickActions = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
  >
    <h3 className="text-lg font-bold text-gray-900 mb-4">Acciones Rápidas</h3>
    
    <div className="grid grid-cols-2 gap-3">
      <button className="flex items-center gap-3 p-3 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors text-left">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
          <Phone className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="font-medium text-sm">Ver WhatsApp</div>
          <div className="text-xs text-gray-500">Gestionar leads</div>
        </div>
      </button>
      
      <button className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
          <Users className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="font-medium text-sm">Clientes</div>
          <div className="text-xs text-gray-500">Ver todos</div>
        </div>
      </button>
      
      <button className="flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-left">
        <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
          <Target className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="font-medium text-sm">Setup</div>
          <div className="text-xs text-gray-500">Configurar</div>
        </div>
      </button>
      
      <button className="flex items-center gap-3 p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors text-left">
        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
          <Eye className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="font-medium text-sm">Analíticas</div>
          <div className="text-xs text-gray-500">Ver reportes</div>
        </div>
      </button>
    </div>
  </motion.div>
);

// 🚀 MAIN COMPONENT - Dashboard Optimizado
export const RealMetricsDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* 🔥 Estado del Sistema */}
      <SystemStatus />
      
      {/* 📊 Métricas Killer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricsData.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <MetricCard {...metric} />
          </motion.div>
        ))}
      </div>
      
      {/* 🎯 Acciones Rápidas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <QuickActions />
        </div>
        
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Progreso del Sistema</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-900">Website Optimizado</span>
                </div>
                <span className="text-sm text-green-600">Activo</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-900">WhatsApp Conectado</span>
                </div>
                <span className="text-sm text-green-600">Funcionando</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-900">Google My Business</span>
                </div>
                <span className="text-sm text-green-600">Optimizado</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
