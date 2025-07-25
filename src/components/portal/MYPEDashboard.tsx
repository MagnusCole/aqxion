'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp,
  Calendar,
  Bot,
  Users,
  MessageCircle,
  Folder,
  LifeBuoy,
  Eye,
  Phone,
  MapPin,
  DollarSign,
  Target,
  Zap,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  Play,
  Download
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

// Métricas específicas para MYPEs
interface MYPEMetrics {
  clientes: {
    nuevosEstaSemanaa: number;
    totalActivos: number;
    crecimiento: number;
  };
  visibilidad: {
    vistasGoogleMaps: number;
    vistasWeb: number;
    crecimiento: number;
  };
  leads: {
    whatsappSemana: number;
    llamadasSemana: number;
    conversionRate: number;
  };
  ingresos: {
    estimadoMes: number;
    ticketPromedio: number;
    crecimiento: number;
  };
}

// Acciones rápidas optimizadas para MYPEs
const quickActionsMYPE = [
  {
    title: 'Mis Clientes',
    description: 'Gestiona contactos y seguimiento',
    icon: Users,
    href: '/portal/crm',
    color: 'bg-emerald-500',
    badge: null,
    stats: '12 activos'
  },
  {
    title: 'Mi Calendario',
    description: 'Próximas citas y eventos',
    icon: Calendar,
    href: '/portal/calendario',
    color: 'bg-purple-500',
    badge: null,
    stats: '3 próximas'
  },
  {
    title: 'Hermes IA',
    description: 'Asistente para tu MYPE',
    icon: Bot,
    href: '/portal/hermes',
    color: 'bg-indigo-600',
    badge: 'Nuevo',
    stats: 'Siempre listo'
  },
  {
    title: 'Mis Resultados',
    description: 'Progreso y ROI en tiempo real',
    icon: TrendingUp,
    href: '/portal/resultados',
    color: 'bg-orange-500',
    badge: null,
    stats: '+24% este mes'
  }
];

// Tasks específicos para MYPEs (gamificación)
const myPeTasks = [
  {
    id: 1,
    title: 'Actualizar fotos en Google Maps',
    description: 'Sube 3 fotos nuevas de tu negocio',
    points: 50,
    estimated: '10 min',
    priority: 'high' as const,
    completed: false
  },
  {
    id: 2,
    title: 'Responder reseñas pendientes',
    description: '2 clientes esperan tu respuesta',
    points: 30,
    estimated: '5 min',
    priority: 'medium' as const,
    completed: false
  },
  {
    id: 3,
    title: 'Programar contenido para mañana',
    description: 'Crea un post para redes sociales',
    points: 40,
    estimated: '15 min',
    priority: 'low' as const,
    completed: true
  }
];

export default function MYPEDashboard() {
  const { user } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [metrics, setMetrics] = useState<MYPEMetrics>({
    clientes: {
      nuevosEstaSemanaa: 3,
      totalActivos: 47,
      crecimiento: 12.5
    },
    visibilidad: {
      vistasGoogleMaps: 342,
      vistasWeb: 156,
      crecimiento: 28.3
    },
    leads: {
      whatsappSemana: 8,
      llamadasSemana: 4,
      conversionRate: 65
    },
    ingresos: {
      estimadoMes: 8400,
      ticketPromedio: 180,
      crecimiento: 15.7
    }
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Buenos días';
    if (hour < 18) return 'Buenas tardes';
    return 'Buenas noches';
  };

  const getBusinessType = () => {
    // En producción, esto vendría del perfil del usuario
    return 'Clínica Dental';
  };

  const firstName = user?.email?.split('@')[0] || 'Usuario';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      
      {/* Header con contexto personal */}
      <div className="bg-white border-b border-gray-100 px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {getGreeting()}, {firstName}
              </h1>
              <p className="text-gray-600 text-sm">
                {getBusinessType()} • {currentTime.toLocaleDateString('es-PE', { 
                  weekday: 'long', 
                  day: 'numeric',
                  month: 'long'
                })}
              </p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {firstName.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>

          {/* Quick Status */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-700 text-xs font-medium">Todo funcionando</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-amber-50 rounded-full">
              <Clock className="w-3 h-3 text-amber-600" />
              <span className="text-amber-700 text-xs font-medium">2 tareas pendientes</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 space-y-8">
        
        {/* Métricas Clave */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Esta Semana</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm text-red-600 font-medium flex items-center gap-1"
              >
                Ver detalles
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Nuevos Clientes */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-1 rounded-full">
                    +{metrics.clientes.crecimiento}%
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">{metrics.clientes.nuevosEstaSemanaa}</p>
                  <p className="text-gray-600 text-sm">Nuevos clientes</p>
                </div>
              </motion.div>

              {/* Visibilidad */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Eye className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-blue-600 text-xs font-medium bg-blue-50 px-2 py-1 rounded-full">
                    +{metrics.visibilidad.crecimiento}%
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">{metrics.visibilidad.vistasGoogleMaps}</p>
                  <p className="text-gray-600 text-sm">Vistas en Google</p>
                </div>
              </motion.div>

              {/* Leads */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded-full">
                    {metrics.leads.conversionRate}%
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">{metrics.leads.whatsappSemana}</p>
                  <p className="text-gray-600 text-sm">Mensajes WhatsApp</p>
                </div>
              </motion.div>

              {/* Ingresos */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-amber-600 text-xs font-medium bg-amber-50 px-2 py-1 rounded-full">
                    +{metrics.ingresos.crecimiento}%
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">S/{metrics.ingresos.estimadoMes.toLocaleString()}</p>
                  <p className="text-gray-600 text-sm">Estimado este mes</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Tareas Diarias (Gamificación) */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Tareas de Hoy</h2>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium text-gray-700">120 puntos</span>
              </div>
            </div>

            <div className="space-y-3">
              {myPeTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className={`bg-white p-4 rounded-2xl border border-gray-100 shadow-sm ${
                    task.completed ? 'opacity-60' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          task.completed 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-gray-300 hover:border-red-500'
                        }`}
                      >
                        {task.completed && <CheckCircle className="w-4 h-4 text-white" />}
                      </motion.button>
                      <div className="flex-1">
                        <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                          {task.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">{task.description}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-gray-400" />
                            <span className="text-xs text-gray-500">{task.estimated}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-amber-400" />
                            <span className="text-xs text-amber-600 font-medium">{task.points} pts</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      task.priority === 'high' ? 'bg-red-50 text-red-700' :
                      task.priority === 'medium' ? 'bg-amber-50 text-amber-700' :
                      'bg-gray-50 text-gray-600'
                    }`}>
                      {task.priority === 'high' ? 'Urgente' : 
                       task.priority === 'medium' ? 'Importante' : 'Opcional'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Acciones Rápidas */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-lg font-semibold text-gray-900">Herramientas</h2>
            <div className="grid grid-cols-1 gap-3">
              {quickActionsMYPE.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <motion.a
                    key={action.title}
                    href={action.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${action.color} rounded-2xl flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-gray-900">{action.title}</h3>
                            {action.badge && (
                              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                                {action.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm">{action.description}</p>
                          {action.stats && (
                            <p className="text-gray-500 text-xs mt-1">{action.stats}</p>
                          )}
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Quick Win CTA */}
        <section className="pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-6 text-white relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full"></div>
              <div className="absolute bottom-8 right-16 w-12 h-12 bg-white rounded-full"></div>
              <div className="absolute top-1/2 right-8 w-6 h-6 bg-white rounded-full"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">¡Genial! Tu MYPE está creciendo</h3>
                  <p className="text-red-100 text-sm leading-relaxed">
                    Has conseguido 3 nuevos clientes esta semana. 
                    ¿Quieres duplicar estos resultados el próximo mes?
                  </p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
              
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-600 px-4 py-2 rounded-xl font-semibold text-sm flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Ver mi plan
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 text-white px-4 py-2 rounded-xl font-medium text-sm border border-white/30"
                >
                  Más tarde
                </motion.button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
