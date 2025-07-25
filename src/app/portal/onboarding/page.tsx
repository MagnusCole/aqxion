'use client';

import React from 'react';
import { CheckCircle, Clock, Users, Globe, MessageSquare, BarChart3, Target, Star, ArrowRight } from 'lucide-react';
import ProgressBar from '@/components/portal/ProgressBar';
import TaskList from '@/components/portal/TaskList';

export default function OnboardingPage() {
  // Pasos del onboarding
  const onboardingSteps = [
    {
      id: 1,
      title: 'Configuración inicial completada',
      description: 'Sitio web activado, hosting configurado y dominio conectado',
      status: 'completed' as const,
      estimatedDays: 0
    },
    {
      id: 2,
      title: 'Google My Business optimizado',
      description: 'Perfil completo con fotos, horarios y información de contacto',
      status: 'completed' as const,
      estimatedDays: 0
    },
    {
      id: 3,
      title: 'WhatsApp Business configurado',
      description: 'Catálogo de productos y mensajes automáticos básicos',
      status: 'current' as const,
      estimatedDays: 3
    },
    {
      id: 4,
      title: 'Dashboard de control activado',
      description: 'Acceso completo a métricas y herramientas de gestión',
      status: 'upcoming' as const,
      estimatedDays: 5
    },
    {
      id: 5,
      title: 'Primera sesión de optimización',
      description: 'Personalización según tu negocio específico',
      status: 'upcoming' as const,
      estimatedDays: 14
    },
    {
      id: 6,
      title: 'Autonomía completa',
      description: 'Todas las herramientas funcionando independientemente',
      status: 'upcoming' as const,
      estimatedDays: 30
    }
  ];

  // Tareas pendientes del usuario
  const userTasks = [
    {
      id: 1,
      title: 'Proporcionar fotos de tu negocio',
      description: 'Necesitamos 5-10 fotos para completar tu perfil de Google My Business',
      priority: 'high' as const,
      dueDate: 'Hoy',
      category: 'Google My Business',
      estimatedTime: '15 min'
    },
    {
      id: 2,
      title: 'Revisar información de contacto',
      description: 'Verificar que teléfono, email y dirección sean correctos',
      priority: 'high' as const,
      dueDate: 'Hoy',
      category: 'Información general',
      estimatedTime: '5 min'
    },
    {
      id: 3,
      title: 'Definir horarios de atención',
      description: 'Establecer horarios para WhatsApp Business y Google My Business',
      priority: 'medium' as const,
      dueDate: 'Mañana',
      category: 'Configuración',
      estimatedTime: '10 min'
    },
    {
      id: 4,
      title: 'Preparar lista de productos/servicios',
      description: 'Para crear el catálogo de WhatsApp Business',
      priority: 'medium' as const,
      dueDate: '3 días',
      category: 'WhatsApp Business',
      estimatedTime: '30 min'
    }
  ];

  // Beneficios incluidos
  const benefits = [
    {
      icon: Globe,
      title: 'Sitio Web Profesional',
      description: 'Diseño responsive y optimizado para móviles',
      status: 'active'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Business',
      description: 'Catálogo de productos y respuestas automáticas',
      status: 'in-progress'
    },
    {
      icon: Star,
      title: 'Google My Business',
      description: 'Perfil completo para aparecer en búsquedas locales',
      status: 'active'
    },
    {
      icon: BarChart3,
      title: 'Dashboard de Métricas',
      description: 'Monitoreo en tiempo real de tu presencia digital',
      status: 'pending'
    },
    {
      icon: Users,
      title: 'Soporte Personal 90 días',
      description: 'Acompañamiento hasta que seas completamente autónomo',
      status: 'active'
    },
    {
      icon: Target,
      title: 'Hosting 1 año incluido',
      description: 'Sin costos adicionales el primer año',
      status: 'active'
    }
  ];

  return (
    <div className="space-y-8 p-4 md:p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">¡Bienvenido a AQXION! 🎉</h1>
        <p className="text-green-100">
          Tu proceso de transformación digital ha comenzado. 
          <span className="font-semibold text-white"> Acompañamos cada paso</span> 
          hasta que tengas autonomía completa.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Progreso principal */}
        <div className="lg:col-span-2 space-y-6">
          <ProgressBar
            title="Progreso de implementación"
            steps={onboardingSteps}
            showDaysRemaining={true}
          />

          <TaskList
            title="Tareas pendientes para ti"
            tasks={userTasks}
            onTaskToggle={(taskId) => {
              console.log('Toggle task:', taskId);
            }}
          />
        </div>

        {/* Sidebar con beneficios */}
        <div className="space-y-6">
          {/* Lo que incluye tu plan */}
          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Lo que incluye tu plan
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    benefit.status === 'active' ? 'bg-green-100 text-green-600' :
                    benefit.status === 'in-progress' ? 'bg-blue-100 text-blue-600' :
                    'bg-gray-100 text-gray-400'
                  }`}>
                    <benefit.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    {benefit.status === 'active' && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                    {benefit.status === 'in-progress' && (
                      <Clock className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Próximos pasos */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              Próximos hitos
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Esta semana:</strong> WhatsApp Business 100% funcional
                </span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Próxima semana:</strong> Primera sesión de optimización personal
                </span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>30 días:</strong> Sistema funcionando independientemente
                </span>
              </div>
            </div>
          </div>

          {/* Contacto especialista */}
          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-3">
              Tu especialista asignado
            </h3>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900 text-sm">Equipo AQXION</p>
                <p className="text-xs text-gray-600">Especialistas en presencia digital</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              Respuesta garantizada en menos de 24 horas. Sin límite de consultas durante tus 90 días.
            </p>
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
              Contactar especialista
            </button>
          </div>
        </div>
      </div>

      {/* Garantía */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Nuestra garantía honesta
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Te acompañamos paso a paso durante 90 días para asegurar que tu presencia digital funcione correctamente. 
              Si algo no está bien, lo arreglamos juntos. 
              <span className="font-medium text-gray-900"> Sin promesas exageradas, solo herramientas probadas y compromiso real.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
