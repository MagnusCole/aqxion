'use client';

import { useState } from 'react';
import { CheckCircle, Circle, Clock, Target, Calendar, Users, Zap, Award, ArrowRight, Play, Lock, Star, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Milestone {
  id: string;
  title: string;
  description: string;
  day: number;
  phase: 'fundacion' | 'crecimiento' | 'optimizacion';
  status: 'completed' | 'current' | 'locked';
  tasks: Task[];
  reward?: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'pending';
  estimated_time: number;
  priority: 'high' | 'medium' | 'low';
  category: 'tecnico' | 'marketing' | 'contenido' | 'estrategia';
}

const milestones: Milestone[] = [
  {
    id: '1',
    title: 'Fundación Digital',
    description: 'Establecer tu presencia online básica y funcional',
    day: 7,
    phase: 'fundacion',
    status: 'completed',
    reward: 'Certificado de Fundación Digital',
    tasks: [
      {
        id: '1-1',
        title: 'Configurar dominio y hosting',
        description: 'Activar tu dominio personalizado y configurar hosting',
        status: 'completed',
        estimated_time: 30,
        priority: 'high',
        category: 'tecnico'
      },
      {
        id: '1-2',
        title: 'Diseño de sitio web',
        description: 'Personalizar diseño según tu marca y audiencia',
        status: 'completed',
        estimated_time: 120,
        priority: 'high',
        category: 'marketing'
      },
      {
        id: '1-3',
        title: 'Configurar Google My Business',
        description: 'Optimizar perfil de Google My Business para búsquedas locales',
        status: 'completed',
        estimated_time: 45,
        priority: 'high',
        category: 'marketing'
      },
      {
        id: '1-4',
        title: 'Setup WhatsApp Business',
        description: 'Configurar WhatsApp Business con respuestas automáticas',
        status: 'completed',
        estimated_time: 60,
        priority: 'medium',
        category: 'marketing'
      }
    ]
  },
  {
    id: '2',
    title: 'Primer Contenido',
    description: 'Crear tu primera estrategia de contenido y captura de leads',
    day: 21,
    phase: 'fundacion',
    status: 'current',
    reward: 'Template de Calendario Editorial',
    tasks: [
      {
        id: '2-1',
        title: 'Crear páginas de servicios',
        description: 'Desarrollar contenido para tus principales servicios',
        status: 'completed',
        estimated_time: 90,
        priority: 'high',
        category: 'contenido'
      },
      {
        id: '2-2',
        title: 'Configurar formularios de contacto',
        description: 'Implementar formularios optimizados para captura de leads',
        status: 'completed',
        estimated_time: 45,
        priority: 'high',
        category: 'tecnico'
      },
      {
        id: '2-3',
        title: 'Primera campaña de contenido',
        description: 'Planificar y crear tu primer calendario de contenido',
        status: 'pending',
        estimated_time: 120,
        priority: 'medium',
        category: 'contenido'
      },
      {
        id: '2-4',
        title: 'Configurar analytics básicos',
        description: 'Implementar Google Analytics y configurar métricas clave',
        status: 'pending',
        estimated_time: 30,
        priority: 'medium',
        category: 'tecnico'
      }
    ]
  },
  {
    id: '3',
    title: 'Crecimiento Visible',
    description: 'Optimizar para aparecer en búsquedas y redes sociales',
    day: 45,
    phase: 'crecimiento',
    status: 'locked',
    reward: 'Reporte de SEO Personalizado',
    tasks: [
      {
        id: '3-1',
        title: 'Optimización SEO básica',
        description: 'Implementar SEO on-page y optimizar velocidad',
        status: 'pending',
        estimated_time: 180,
        priority: 'high',
        category: 'tecnico'
      },
      {
        id: '3-2',
        title: 'Estrategia de redes sociales',
        description: 'Crear perfiles optimizados en redes principales',
        status: 'pending',
        estimated_time: 90,
        priority: 'medium',
        category: 'marketing'
      },
      {
        id: '3-3',
        title: 'Primera campaña de ads',
        description: 'Lanzar campaña básica en Google o Facebook',
        status: 'pending',
        estimated_time: 120,
        priority: 'medium',
        category: 'marketing'
      }
    ]
  },
  {
    id: '4',
    title: 'Automatización Inteligente',
    description: 'Implementar sistemas que trabajen por ti 24/7',
    day: 65,
    phase: 'crecimiento',
    status: 'locked',
    reward: 'Sistema de CRM Personalizado',
    tasks: [
      {
        id: '4-1',
        title: 'Automatizar WhatsApp',
        description: 'Configurar chatbots y secuencias automáticas',
        status: 'pending',
        estimated_time: 150,
        priority: 'high',
        category: 'tecnico'
      },
      {
        id: '4-2',
        title: 'Sistema de seguimiento de leads',
        description: 'Implementar CRM básico y nurturing automático',
        status: 'pending',
        estimated_time: 120,
        priority: 'high',
        category: 'estrategia'
      },
      {
        id: '4-3',
        title: 'Emails automáticos',
        description: 'Configurar secuencias de email marketing',
        status: 'pending',
        estimated_time: 90,
        priority: 'medium',
        category: 'marketing'
      }
    ]
  },
  {
    id: '5',
    title: 'Optimización y Escala',
    description: 'Analizar resultados y optimizar para mayor crecimiento',
    day: 90,
    phase: 'optimizacion',
    status: 'locked',
    reward: 'Certificado de Transformación Digital',
    tasks: [
      {
        id: '5-1',
        title: 'Análisis completo de métricas',
        description: 'Revisar KPIs y identificar oportunidades',
        status: 'pending',
        estimated_time: 120,
        priority: 'high',
        category: 'estrategia'
      },
      {
        id: '5-2',
        title: 'Optimización de conversiones',
        description: 'Mejorar tasas de conversión en puntos clave',
        status: 'pending',
        estimated_time: 180,
        priority: 'high',
        category: 'estrategia'
      },
      {
        id: '5-3',
        title: 'Plan de escalabilidad',
        description: 'Crear estrategia de crecimiento a largo plazo',
        status: 'pending',
        estimated_time: 90,
        priority: 'medium',
        category: 'estrategia'
      }
    ]
  }
];

const phaseColors = {
  fundacion: 'bg-blue-500',
  crecimiento: 'bg-green-500',
  optimizacion: 'bg-purple-500'
};

const phaseNames = {
  fundacion: 'Fundación',
  crecimiento: 'Crecimiento',
  optimizacion: 'Optimización'
};

const categoryColors = {
  tecnico: 'bg-blue-100 text-blue-800',
  marketing: 'bg-pink-100 text-pink-800',
  contenido: 'bg-orange-100 text-orange-800',
  estrategia: 'bg-purple-100 text-purple-800'
};

const priorityColors = {
  high: 'border-l-red-500',
  medium: 'border-l-yellow-500',
  low: 'border-l-green-500'
};

export default function ProgresoPage() {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const [showCompleted, setShowCompleted] = useState(true);

  const currentDay = 18; // Simulated current day
  const completedMilestones = milestones.filter(m => m.status === 'completed').length;
  const totalTasks = milestones.reduce((acc, m) => acc + m.tasks.length, 0);
  const completedTasks = milestones.reduce((acc, m) => 
    acc + m.tasks.filter(t => t.status === 'completed').length, 0
  );
  const progressPercentage = (currentDay / 90) * 100;

  const toggleTask = (milestoneId: string, taskId: string) => {
    // En la versión real, esto haría una llamada a la API
    console.log('Toggle task:', milestoneId, taskId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Plan de 90 Días</h1>
        <p className="text-purple-100">
          Tu roadmap personalizado para el éxito digital
        </p>
      </div>

      {/* Progreso General */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">{currentDay}</span>
          </div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Día Actual</h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">{progressPercentage.toFixed(1)}% completado</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Hitos Completados</p>
              <p className="text-2xl font-bold text-gray-900">{completedMilestones}/5</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Target className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Tareas Completadas</p>
              <p className="text-2xl font-bold text-gray-900">{completedTasks}/{totalTasks}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Días Restantes</p>
              <p className="text-2xl font-bold text-gray-900">{90 - currentDay}</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline de Hitos */}
      <div className="bg-white rounded-xl shadow border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Roadmap de 90 Días</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="show-completed"
                  checked={showCompleted}
                  onChange={(e) => setShowCompleted(e.target.checked)}
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <label htmlFor="show-completed" className="text-sm text-gray-600">
                  Mostrar completados
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
            
            <div className="space-y-8">
              {milestones
                .filter(milestone => showCompleted || milestone.status !== 'completed')
                .map((milestone, index) => (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Timeline Node */}
                    <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-white shadow-lg ${
                      milestone.status === 'completed' ? 'bg-green-500' :
                      milestone.status === 'current' ? 'bg-purple-500' :
                      'bg-gray-300'
                    }`}>
                      {milestone.status === 'completed' && <CheckCircle className="w-8 h-8 text-white" />}
                      {milestone.status === 'current' && <Play className="w-8 h-8 text-white" />}
                      {milestone.status === 'locked' && <Lock className="w-8 h-8 text-white" />}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className={`bg-white border-2 rounded-xl p-6 ${
                        milestone.status === 'current' ? 'border-purple-200 bg-purple-50' : 'border-gray-200'
                      }`}>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">
                                {milestone.title}
                              </h3>
                              <span className={`px-2 py-1 text-xs rounded-full text-white ${phaseColors[milestone.phase]}`}>
                                {phaseNames[milestone.phase]}
                              </span>
                              <span className="text-sm text-gray-500">Día {milestone.day}</span>
                            </div>
                            <p className="text-gray-600">{milestone.description}</p>
                            {milestone.reward && (
                              <div className="flex items-center gap-2 mt-2">
                                <Award className="w-4 h-4 text-yellow-500" />
                                <span className="text-sm text-yellow-700">{milestone.reward}</span>
                              </div>
                            )}
                          </div>
                          
                          <button
                            onClick={() => setSelectedMilestone(
                              selectedMilestone?.id === milestone.id ? null : milestone
                            )}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-purple-600 hover:bg-purple-100 rounded-lg transition-colors"
                          >
                            {selectedMilestone?.id === milestone.id ? 'Ocultar' : 'Ver'} tareas
                            <ArrowRight className={`w-4 h-4 transition-transform ${
                              selectedMilestone?.id === milestone.id ? 'rotate-90' : ''
                            }`} />
                          </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${
                              milestone.status === 'completed' ? 'bg-green-500' :
                              milestone.status === 'current' ? 'bg-purple-500' :
                              'bg-gray-300'
                            }`}
                            style={{ 
                              width: `${milestone.status === 'completed' ? 100 : 
                                     milestone.status === 'current' ? 
                                     (milestone.tasks.filter(t => t.status === 'completed').length / milestone.tasks.length) * 100 :
                                     0}%` 
                            }}
                          />
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>
                            {milestone.tasks.filter(t => t.status === 'completed').length} de {milestone.tasks.length} tareas completadas
                          </span>
                          <span>
                            ~{milestone.tasks.reduce((acc, t) => acc + t.estimated_time, 0)} min total
                          </span>
                        </div>
                      </div>

                      {/* Tasks Expandable */}
                      <AnimatePresence>
                        {selectedMilestone?.id === milestone.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 bg-white border border-gray-200 rounded-xl overflow-hidden"
                          >
                            <div className="p-4 bg-gray-50 border-b border-gray-200">
                              <h4 className="font-medium text-gray-900">Tareas del Hito</h4>
                            </div>
                            <div className="p-4 space-y-3">
                              {milestone.tasks.map((task) => (
                                <div
                                  key={task.id}
                                  className={`flex items-start gap-4 p-4 border-l-4 bg-gray-50 rounded-r-lg ${priorityColors[task.priority]}`}
                                >
                                  <button
                                    onClick={() => toggleTask(milestone.id, task.id)}
                                    className="mt-0.5"
                                    disabled={milestone.status === 'locked'}
                                  >
                                    {task.status === 'completed' ? (
                                      <CheckCircle className="w-5 h-5 text-green-500" />
                                    ) : (
                                      <Circle className="w-5 h-5 text-gray-400" />
                                    )}
                                  </button>
                                  
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h5 className={`font-medium ${
                                        task.status === 'completed' ? 'text-gray-500 line-through' : 'text-gray-900'
                                      }`}>
                                        {task.title}
                                      </h5>
                                      <span className={`px-2 py-1 text-xs rounded-full ${categoryColors[task.category]}`}>
                                        {task.category}
                                      </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                                    <div className="flex items-center gap-4 text-xs text-gray-500">
                                      <span>~{task.estimated_time} min</span>
                                      <span className={`px-2 py-1 rounded-full ${
                                        task.priority === 'high' ? 'bg-red-100 text-red-700' :
                                        task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-green-100 text-green-700'
                                      }`}>
                                        {task.priority === 'high' ? 'Alta' : 
                                         task.priority === 'medium' ? 'Media' : 'Baja'} prioridad
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Siguiente Acción */}
      {milestones.find(m => m.status === 'current') && (
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🎯 Próxima Acción</h3>
              <p className="text-gray-600 mb-4">
                Continúa con tu hito actual: "{milestones.find(m => m.status === 'current')?.title}"
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <Play className="w-4 h-4" />
                  Continuar Progreso
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-300 rounded-lg hover:bg-purple-50 transition-colors">
                  <Calendar className="w-4 h-4" />
                  Agendar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Información de Desarrollo */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <Target className="w-6 h-6 text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🚀 Plan de 90 Días - Demo</h3>
            <p className="text-gray-600 mb-4">
              En la versión completa, tu progreso se sincroniza automáticamente con las tareas que completas en el portal.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>✅ Seguimiento automático de progreso</p>
              <p>✅ Notificaciones y recordatorios personalizados</p>
              <p>✅ Sesiones de coaching en vivo incluidas</p>
              <p>✅ Certificaciones digitales al completar hitos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
