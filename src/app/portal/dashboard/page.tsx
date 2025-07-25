'use client';

import React, { useState, useEffect } from 'react';
import { Globe, Users, MessageSquare, BarChart3, CheckCircle, DollarSign, Target, Clock, Calendar } from 'lucide-react';
import MetricCard from '@/components/portal/MetricCard';
import ActionCard from '@/components/portal/ActionCard';
import Timeline from '@/components/portal/Timeline';
import TaskList from '@/components/portal/TaskList';
import ProgressBar from '@/components/portal/ProgressBar';
import { usePortalData } from '@/hooks/usePortalData';

export default function DashboardPage() {
  const [searchParams, setSearchParams] = useState<URLSearchParams>();
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSearchParams(new URLSearchParams(window.location.search));
    }
  }, []);

  // ✅ REEMPLAZADO: usePortalData (REAL) en lugar de usePortalDemo
  const { 
    metrics, 
    tasks, 
    activities, 
    planProgress, 
    toggleTask, 
    createTask, 
    createActivity, 
    isLoading,
    error 
  } = usePortalData();

  // Mostrar información específica si se accedió desde una feature
  const feature = searchParams?.get('feature');
  
  if (feature) {
    const featureInfo = {
      calendario: {
        title: 'Calendario de Contenido',
        description: 'Planifica y programa tu contenido para todas las plataformas sociales.',
        benefits: [
          'Sincronización con Google Calendar',
          'Programación automática de posts',
          'Vista mensual y semanal',
          'Gestión de hashtags por plataforma'
        ]
      },
      crm: {
        title: 'CRM y Gestión de Leads',
        description: 'Gestiona tus clientes potenciales con integración a Google Sheets.',
        benefits: [
          'Seguimiento automático de leads',
          'Integración con Google Sheets',
          'Reportes descargables',
          'Métricas de conversión'
        ]
      },
      whatsapp: {
        title: 'Automatización WhatsApp',
        description: 'Automatiza la atención al cliente y outreach via WhatsApp.',
        benefits: [
          'Respuestas automáticas',
          'Seguimiento de conversaciones',
          'Templates personalizables',
          'Integración con CRM'
        ]
      }
    };

    const info = featureInfo[feature as keyof typeof featureInfo];
    
    if (info) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="max-w-2xl bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="mb-6">
              <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{info.title}</h1>
              <p className="text-gray-600 text-lg">{info.description}</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🚀 Funcionalidades que tendrás:</h3>
              <ul className="space-y-2 text-left">
                {info.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Estas herramientas estarán disponibles una vez completemos tu configuración inicial.
              </p>
              <button 
                onClick={() => window.location.href = '/portal/setup'}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
              >
                Ir a Configuración
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando datos reales del portal...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-lg mb-2">Error al cargar datos</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Recargar
          </button>
        </div>
      </div>
    );
  }

  // Default values para evitar null/undefined
  const safeMetrics = metrics || {
    websiteVisits: 0,
    websiteVisitsGrowth: 0,
    leads: 0,
    leadsGrowth: 0,
    whatsappChats: 0,
    whatsappChatsGrowth: 0,
    googleViews: 0,
    googleViewsGrowth: 0
  };

  const safeTasks = (tasks || []).map(task => ({
    ...task,
    dueDate: task.dueDate || new Date().toISOString().split('T')[0],
    isCompleted: task.completed
  }));
  const safeActivities = activities || [];

  const quickActions = [
    { 
      id: 'update-content', 
      title: 'Actualizar Contenido', 
      description: 'Renovar información del sitio',
      icon: MessageSquare,
      priority: 'medium' as const,
      onClick: () => createActivity({
        title: 'Contenido actualizado',
        description: 'Nueva información agregada al sitio',
        status: 'completed',
        category: 'content'
      })
    },
    { 
      id: 'analyze-metrics', 
      title: 'Analizar Métricas', 
      description: 'Revisar el rendimiento actual',
      icon: BarChart3,
      priority: 'high' as const,
      onClick: () => createActivity({
        title: 'Análisis de métricas realizado',
        description: 'Revisión completa del rendimiento',
        status: 'completed',
        category: 'analytics'
      })
    },
    { 
      id: 'update-whatsapp', 
      title: 'Configurar WhatsApp', 
      description: 'Optimizar mensajes automáticos',
      icon: MessageSquare,
      priority: 'medium' as const,
      onClick: () => createTask({
        title: 'Optimizar WhatsApp Business',
        description: 'Configurar respuestas automáticas',
        priority: 'medium',
        category: 'WhatsApp Business'
      })
    },
    { 
      id: 'seo-check', 
      title: 'Revisar SEO', 
      description: 'Optimizar posicionamiento',
      icon: Target,
      priority: 'high' as const,
      onClick: () => createTask({
        title: 'Auditoría SEO',
        description: 'Revisar y optimizar posicionamiento web',
        priority: 'high',
        category: 'SEO'
      })
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Dashboard de Crecimiento</h1>
        <p className="text-red-100">
          Monitorea el progreso de tu presencia digital en tiempo real
        </p>
      </div>

      {/* Progress Card */}
      {planProgress && (
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Plan de 90 Días</h2>
              <p className="text-sm text-gray-500">Día {planProgress.currentDay} de {planProgress.totalDays}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-600">
                {Math.round((planProgress.currentDay / planProgress.totalDays) * 100)}%
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-red-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(planProgress.currentDay / planProgress.totalDays) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Métricas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <MetricCard
          title="Visitas Web"
          current={safeMetrics.websiteVisits}
          previous={safeMetrics.websiteVisits - (safeMetrics.websiteVisitsGrowth || 0)}
          icon={Globe}
          color="blue"
        />
        <MetricCard
          title="Leads Generados"
          current={safeMetrics.leads}
          previous={safeMetrics.leads - (safeMetrics.leadsGrowth || 0)}
          icon={Users}
          color="green"
        />
        <MetricCard
          title="Chats WhatsApp"
          current={safeMetrics.whatsappChats}
          previous={safeMetrics.whatsappChats - (safeMetrics.whatsappChatsGrowth || 0)}
          icon={MessageSquare}
          color="yellow"
        />
        <MetricCard
          title="Vistas Google"
          current={safeMetrics.googleViews}
          previous={safeMetrics.googleViews - (safeMetrics.googleViewsGrowth || 0)}
          icon={BarChart3}
          color="purple"
        />
      </div>

      {/* Acciones Rápidas */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <ActionCard key={action.id} {...action} />
          ))}
        </div>
      </div>

      {/* Tareas y Actividades */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div>
          <TaskList
            title="Tareas Pendientes"
            tasks={safeTasks}
            onTaskToggle={(taskId) => toggleTask(String(taskId))}
          />
        </div>
        <div>
          <Timeline
            title="Actividades Recientes"
            items={safeActivities.map(activity => ({
              id: activity.id,
              title: activity.title,
              description: activity.description,
              status: activity.status as 'completed' | 'in-progress' | 'pending' | 'waiting',
              timestamp: activity.timestamp,
              category: activity.category
            }))}
          />
        </div>
      </div>

      {/* ROI Info */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tu Inversión vs Agencias</h3>
            <p className="text-sm text-gray-600">
              Ahorraste <span className="font-bold text-green-600">S/.13,500</span> vs agencias tradicionales
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">90%</div>
            <div className="text-sm text-gray-500">de ahorro</div>
          </div>
        </div>
      </div>
    </div>
  );
}
