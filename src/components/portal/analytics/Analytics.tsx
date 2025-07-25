'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Calendar,
  Target,
  BarChart3,
  PieChart,
  Download,
  Filter,
  RefreshCw,
  Eye,
  Phone,
  MessageCircle,
  Clock
} from 'lucide-react';
import { useMYPEUserData } from '@/hooks/useMYPEUserData';

export default function Analytics() {
  const { userData, getStats, formatCurrency, formatDate } = useMYPEUserData();
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('month');
  const [refreshing, setRefreshing] = useState(false);

  const stats = getStats();

  // Calcular métricas basadas en datos reales
  const analyticsData = useMemo(() => {
    if (!userData) return null;

    const now = new Date();
    const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    // Filtrar actividad por rango de tiempo
    const getActivityInRange = (range: 'week' | 'month' | 'year') => {
      const startDate = range === 'week' ? startOfWeek : 
                       range === 'month' ? startOfMonth : startOfYear;
      
      return userData.activity.filter(activity => 
        new Date(activity.timestamp) >= startDate
      );
    };

    const currentActivity = getActivityInRange(timeRange);
    
    // Calcular contactos por fuente (basado en actividad real)
    const contactsBySource = userData.activity
      .filter(a => a.type === 'contact_added')
      .reduce((acc, activity) => {
        const source = activity.metadata?.source || 'directo';
        acc[source] = (acc[source] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    // Progreso de tareas por tipo
    const tasksByType = userData.pendingTasks.reduce((acc, task) => {
      acc[task.type] = acc[task.type] || { total: 0, completed: 0 };
      acc[task.type].total++;
      if (task.completed) acc[task.type].completed++;
      return acc;
    }, {} as Record<string, { total: number; completed: number }>);

    // Actividad por día (últimos 7 días)
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return date.toISOString().split('T')[0];
    }).reverse();

    const activityByDay = last7Days.map(date => {
      const dayActivity = userData.activity.filter(a => 
        a.timestamp.startsWith(date)
      );
      return {
        date,
        count: dayActivity.length,
        contacts: dayActivity.filter(a => a.type === 'contact_added').length,
        tasks: dayActivity.filter(a => a.type === 'task_completed').length
      };
    });

    return {
      currentActivity,
      contactsBySource,
      tasksByType,
      activityByDay,
      totalContacts: userData.metrics.totalContacts,
      contactsThisWeek: userData.metrics.newContactsThisWeek,
      contactsThisMonth: userData.metrics.newContactsThisMonth,
      tasksCompleted: userData.metrics.tasksCompleted,
      totalTasks: userData.metrics.tasksTotal,
      completionRate: userData.metrics.tasksTotal > 0 ? 
        Math.round((userData.metrics.tasksCompleted / userData.metrics.tasksTotal) * 100) : 0
    };
  }, [userData, timeRange]);

  const handleRefresh = async () => {
    setRefreshing(true);
    // Simular actualización de datos
    await new Promise(resolve => setTimeout(resolve, 1000));
    setRefreshing(false);
  };

  if (!userData || !analyticsData) {
    return (
      <div className="p-6 max-w-6xl mx-auto">
        <div className="text-center py-12">
          <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Configurando Analytics
          </h2>
          <p className="text-gray-600">
            Necesitas algunos datos para generar análisis. 
            Empieza agregando contactos y completando tareas.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
            <p className="text-gray-600">
              Análisis y métricas de tu negocio MYPE
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="week">Última semana</option>
              <option value="month">Último mes</option>
              <option value="year">Último año</option>
            </select>
            
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300 transition-colors flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
              Actualizar
            </button>
          </div>
        </div>
      </motion.div>

      {/* Métricas principales */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
      >
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {analyticsData.totalContacts}
              </div>
              <div className="text-sm text-gray-600">Total Contactos</div>
            </div>
          </div>
          <div className="text-xs text-green-600">
            +{analyticsData.contactsThisWeek} esta semana
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-100 rounded-lg">
              <Target className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {analyticsData.completionRate}%
              </div>
              <div className="text-sm text-gray-600">Tareas Completadas</div>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            {analyticsData.tasksCompleted} de {analyticsData.totalTasks} tareas
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {analyticsData.currentActivity.length}
              </div>
              <div className="text-sm text-gray-600">Actividades</div>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            En {timeRange === 'week' ? 'la semana' : timeRange === 'month' ? 'el mes' : 'el año'}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Calendar className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {stats?.daysSinceStart || 0}
              </div>
              <div className="text-sm text-gray-600">Días Activo</div>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            Desde el {formatDate(userData.planInfo.startDate)}
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Actividad por día */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Actividad Últimos 7 Días
          </h3>
          
          <div className="space-y-3">
            {analyticsData.activityByDay.map((day, index) => {
              const maxActivity = Math.max(...analyticsData.activityByDay.map(d => d.count));
              const percentage = maxActivity > 0 ? (day.count / maxActivity) * 100 : 0;
              
              return (
                <div key={day.date} className="flex items-center gap-3">
                  <div className="w-20 text-xs text-gray-500">
                    {new Date(day.date).toLocaleDateString('es-PE', { 
                      weekday: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex-1">
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-16 text-right">
                    <span className="text-sm font-medium text-gray-900">{day.count}</span>
                    <span className="text-xs text-gray-500 ml-1">act</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Contactos por fuente */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Contactos por Fuente
          </h3>
          
          {Object.keys(analyticsData.contactsBySource).length > 0 ? (
            <div className="space-y-3">
              {Object.entries(analyticsData.contactsBySource).map(([source, count]) => {
                const total = Object.values(analyticsData.contactsBySource).reduce((a, b) => a + b, 0);
                const percentage = total > 0 ? (count / total) * 100 : 0;
                
                const getSourceIcon = (source: string) => {
                  switch (source) {
                    case 'whatsapp': return <MessageCircle className="h-4 w-4 text-green-500" />;
                    case 'phone': return <Phone className="h-4 w-4 text-blue-500" />;
                    case 'online': return <Eye className="h-4 w-4 text-purple-500" />;
                    default: return <Users className="h-4 w-4 text-gray-500" />;
                  }
                };
                
                return (
                  <div key={source} className="flex items-center gap-3">
                    <div className="flex items-center gap-2 w-24">
                      {getSourceIcon(source)}
                      <span className="text-sm capitalize text-gray-700">{source}</span>
                    </div>
                    <div className="flex-1">
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-500" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-16 text-right">
                      <span className="text-sm font-medium text-gray-900">{count}</span>
                      <span className="text-xs text-gray-500 ml-1">
                        ({Math.round(percentage)}%)
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-6">
              <Users className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500">
                No hay contactos registrados aún
              </p>
            </div>
          )}
        </motion.div>

        {/* Progreso de tareas por tipo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-sm lg:col-span-2"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Progreso de Tareas por Tipo
          </h3>
          
          {Object.keys(analyticsData.tasksByType).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(analyticsData.tasksByType).map(([type, data]) => {
                const percentage = data.total > 0 ? (data.completed / data.total) * 100 : 0;
                
                const getTypeColor = (type: string) => {
                  switch (type) {
                    case 'setup': return 'text-blue-600';
                    case 'marketing': return 'text-purple-600';
                    case 'maintenance': return 'text-orange-600';
                    case 'growth': return 'text-green-600';
                    default: return 'text-gray-600';
                  }
                };
                
                const getTypeName = (type: string) => {
                  switch (type) {
                    case 'setup': return 'Configuración';
                    case 'marketing': return 'Marketing';
                    case 'maintenance': return 'Mantenimiento';
                    case 'growth': return 'Crecimiento';
                    default: return type;
                  }
                };
                
                return (
                  <div key={type} className="text-center">
                    <div className={`text-lg font-bold ${getTypeColor(type)}`}>
                      {Math.round(percentage)}%
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {getTypeName(type)}
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          type === 'setup' ? 'bg-blue-500' :
                          type === 'marketing' ? 'bg-purple-500' :
                          type === 'maintenance' ? 'bg-orange-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {data.completed} de {data.total}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-6">
              <Target className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500">
                No hay tareas creadas aún
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Actividad reciente */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-xl p-6 shadow-sm mt-8"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Actividad Reciente
        </h3>
        
        {analyticsData.currentActivity.length > 0 ? (
          <div className="space-y-3">
            {analyticsData.currentActivity.slice(0, 10).map((activity) => (
              <div key={activity.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.description}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(activity.timestamp).toLocaleString('es-PE')}
                  </p>
                </div>
                <div className="text-xs text-gray-400 capitalize">
                  {activity.type.replace('_', ' ')}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <Clock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">
              No hay actividad en este período
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
