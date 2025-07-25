'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Plus,
  Target,
  Calendar,
  MessageCircle,
  BarChart3,
  ChevronRight,
  Check,
  Circle
} from 'lucide-react';
import { useMYPEUserData } from '@/hooks/useMYPEUserData';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface MetricData {
  key: string;
  title: string;
  value: number;
  icon: React.ElementType;
  color: string;
}

/**
 * iOS-Native Dashboard
 * Following Apple's Human Interface Guidelines:
 * - Clean typography (SF Pro)
 * - Consistent spacing (8pt grid)
 * - Subtle shadows and depth
 * - Familiar iOS interaction patterns
 */
export default function MYPEDashboard() {
  const [metrics, setMetrics] = useState({
    webVisits: 247,
    newLeads: 12,
    whatsappChats: 38,
    conversions: 5
  });
  
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Actualizar Google My Business', completed: false },
    { id: '2', text: 'Responder WhatsApp pendientes', completed: true },
    { id: '3', text: 'Revisar precios del sitio web', completed: false },
    { id: '4', text: 'Planificar contenido social', completed: false }
  ]);
  
  const [newTask, setNewTask] = useState('');
  const { userData, loading } = useMYPEUserData();

  // Persistencia local
  useEffect(() => {
    const savedMetrics = localStorage.getItem('ios-dashboard-metrics');
    const savedTasks = localStorage.getItem('ios-dashboard-tasks');
    
    if (savedMetrics) {
      try {
        setMetrics(JSON.parse(savedMetrics));
      } catch (e) {
        console.error('Error loading metrics:', e);
      }
    }
    
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (e) {
        console.error('Error loading tasks:', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ios-dashboard-metrics', JSON.stringify(metrics));
  }, [metrics]);

  useEffect(() => {
    localStorage.setItem('ios-dashboard-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const metricsData: MetricData[] = [
    { key: 'webVisits', title: 'Visitantes', value: metrics.webVisits, icon: TrendingUp, color: 'blue' },
    { key: 'newLeads', title: 'Leads', value: metrics.newLeads, icon: Users, color: 'green' },
    { key: 'whatsappChats', title: 'Chats', value: metrics.whatsappChats, icon: MessageCircle, color: 'purple' },
    { key: 'conversions', title: 'Ventas', value: metrics.conversions, icon: Target, color: 'orange' }
  ];

  const quickActions = [
    { title: 'CRM', subtitle: 'Gestionar clientes', icon: Users, href: '/portal/crm' },
    { title: 'Calendario', subtitle: 'Programar contenido', icon: Calendar, href: '/portal/calendar' },
    { title: 'Análisis', subtitle: 'Ver resultados', icon: BarChart3, href: '/portal/analytics' }
  ];

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        text: newTask.trim(),
        completed: false
      };
      setTasks(prev => [task, ...prev]);
      setNewTask('');
    }
  };

  const toggleTask = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  const businessName = userData?.businessInfo?.name || 'Tu Negocio';
  const completedTasks = tasks.filter(t => t.completed).length;
  const progress = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        
        {/* iOS Status Bar Space */}
        <div className="h-11 bg-white" />
        
        {/* Header - iOS Style */}
        <header className="px-4 pb-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Hola, {businessName.split(' ')[0]}
              </h1>
              <p className="text-gray-500 text-sm">
                {new Date().toLocaleDateString('es-PE', { 
                  weekday: 'long', 
                  day: 'numeric', 
                  month: 'long' 
                })}
              </p>
            </div>
          </div>
        </header>

        {/* Metrics Cards - iOS Style */}
        <section className="px-4 mb-8">
          <div className="grid grid-cols-2 gap-3">
            {metricsData.map((metric) => (
              <motion.div
                key={metric.key}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-lg bg-${metric.color}-100 flex items-center justify-center`}>
                    <metric.icon className={`w-4 h-4 text-${metric.color}-600`} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {metric.value.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">
                  {metric.title}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Progress Section */}
        <section className="px-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900">Progreso del día</h3>
              <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div 
                className="h-2 bg-blue-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {completedTasks} de {tasks.length} tareas completadas
            </p>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="px-4 mb-8">
          <h3 className="font-semibold text-gray-900 mb-3">Herramientas</h3>
          <div className="space-y-2">
            {quickActions.map((action) => (
              <motion.button
                key={action.title}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
                onClick={() => console.log(`Navigate to ${action.href}`)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <action.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">{action.title}</div>
                    <div className="text-xs text-gray-500">{action.subtitle}</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </motion.button>
            ))}
          </div>
        </section>

        {/* Tasks Section */}
        <section className="px-4 pb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Tareas</h3>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
              onClick={() => {
                const task = prompt('Nueva tarea:');
                if (task) {
                  setTasks(prev => [{
                    id: Date.now().toString(),
                    text: task,
                    completed: false
                  }, ...prev]);
                }
              }}
            >
              <Plus className="w-4 h-4 text-white" />
            </motion.button>
          </div>
          
          <div className="space-y-2">
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                layout
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-3"
              >
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleTask(task.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    task.completed 
                      ? 'bg-blue-500 border-blue-500' 
                      : 'border-gray-300'
                  }`}
                >
                  {task.completed && <Check className="w-3 h-3 text-white" />}
                </motion.button>
                
                <div className="flex-1">
                  <p className={`text-sm ${
                    task.completed 
                      ? 'text-gray-500 line-through' 
                      : 'text-gray-900'
                  }`}>
                    {task.text}
                  </p>
                </div>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => deleteTask(task.id)}
                  className="w-6 h-6 text-gray-400 hover:text-red-500"
                >
                  ×
                </motion.button>
              </motion.div>
            ))}
          </div>

          {tasks.length === 0 && (
            <div className="text-center py-8">
              <Circle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 text-sm">No hay tareas</p>
              <p className="text-gray-400 text-xs">Agrega una para empezar</p>
            </div>
          )}
        </section>

        {/* iOS Home Indicator */}
        <div className="h-8 flex items-center justify-center">
          <div className="w-32 h-1 bg-gray-300 rounded-full" />
        </div>
      </div>
    </main>
  );
}

  // Persistencia local para validación rápida
  useEffect(() => {
    const savedMetrics = localStorage.getItem('mype-dashboard-metrics');
    const savedTasks = localStorage.getItem('mype-dashboard-tasks');
    
    if (savedMetrics) {
      try {
        setMetrics(JSON.parse(savedMetrics));
      } catch (error) {
        console.error('Error loading metrics:', error);
      }
    }
    
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error('Error loading tasks:', error);
        // Tareas iniciales para empezar
        setDefaultTasks();
      }
    } else {
      setDefaultTasks();
    }
  }, []);

  const setDefaultTasks = () => {
    const defaultTasks: Task[] = [
      {
        id: '1',
        title: 'Actualizar información de contacto en Google My Business',
        completed: false,
        priority: 'high',
        category: 'marketing',
        estimatedTime: '15 min'
      },
      {
        id: '2',
        title: 'Responder mensajes pendientes de WhatsApp',
        completed: false,
        priority: 'medium',
        category: 'ventas',
        estimatedTime: '20 min'
      },
      {
        id: '3',
        title: 'Revisar y actualizar precios en el sitio web',
        completed: false,
        priority: 'medium',
        category: 'operaciones',
        estimatedTime: '30 min'
      },
      {
        id: '4',
        title: 'Planificar contenido para redes sociales',
        completed: false,
        priority: 'low',
        category: 'marketing',
        estimatedTime: '45 min'
      }
    ];
    setTasks(defaultTasks);
  };

  useEffect(() => {
    localStorage.setItem('mype-dashboard-metrics', JSON.stringify(metrics));
  }, [metrics]);

  useEffect(() => {
    localStorage.setItem('mype-dashboard-tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Buenos días');
    } else if (hour < 18) {
      setGreeting('Buenas tardes');
    } else {
      setGreeting('Buenas noches');
    }
  }, []);

  const openEditModal = (key: keyof typeof metrics) => {
    const titles = {
      webVisits: 'Visitas Web',
      newLeads: 'Nuevos Leads',
      whatsappChats: 'Chats WhatsApp',
      conversions: 'Conversiones'
    };
    
    setEditingMetric({
      key,
      title: titles[key],
      value: metrics[key].toString()
    });
  };

  const validateAndSaveMetric = () => {
    if (editingMetric) {
      const numValue = Number(editingMetric.value);
      if (isNaN(numValue) || numValue < 0) {
        setEditingMetric({
          ...editingMetric,
          error: 'Ingresa un número válido'
        });
        return;
      }
      setMetrics(prev => ({
        ...prev,
        [editingMetric.key]: numValue
      }));
      setEditingMetric(null);
    }
  };

  const handleInputChange = (value: string) => {
    if (editingMetric) {
      setEditingMetric({
        ...editingMetric,
        value,
        error: undefined
      });
    }
  };

  const addTask = () => {
    if (newTaskTitle.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        title: newTaskTitle.trim(),
        completed: false,
        priority: 'medium',
        category: 'general',
        estimatedTime: '30 min'
      };
      setTasks(prev => [newTask, ...prev]);
      setNewTaskTitle('');
      setShowAddTask(false);
    }
  };

  const toggleTask = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  const businessName = userData?.businessInfo?.name || 'Tu Negocio';
  const firstName = businessName.split(' ')[0];
  const currentDate = new Date().toLocaleDateString('es-PE', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  });

  const completedTasks = tasks.filter(t => t.completed).length;
  const totalTasks = tasks.length;
  const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  const urgentTasks = tasks.filter(t => !t.completed && t.priority === 'high').length;

  const quickActions = [
    { icon: Users, title: 'CRM', subtitle: 'Gestiona clientes', href: '/portal/crm' },
    { icon: Calendar, title: 'Calendario', subtitle: 'Programa contenido', href: '/portal/calendar' },
    { icon: MessageCircle, title: 'WhatsApp', subtitle: 'Automatiza chats', href: '/portal/whatsapp' },
    { icon: BarChart3, title: 'Resultados', subtitle: 'Analiza rendimiento', href: '/portal/analytics' },
    { icon: Gift, title: 'Recursos', subtitle: 'Herramientas útiles', href: '/portal/resources' },
    { icon: Headphones, title: 'Soporte', subtitle: 'Ayuda personalizada', href: '/portal/support' }
  ];

  const priorityColors = {
    high: 'bg-red-100 text-red-700 border-red-200',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    low: 'bg-green-100 text-green-700 border-green-200'
  };

  const categoryColors = {
    marketing: 'bg-blue-50 border-blue-200',
    ventas: 'bg-emerald-50 border-emerald-200',
    operaciones: 'bg-purple-50 border-purple-200',
    general: 'bg-gray-50 border-gray-200'
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50" role="main">
      <div className="max-w-7xl mx-auto p-4 lg:p-8 space-y-8">
        
        {/* Header Personal - Aplicando "Trigger emotional associations" */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-6 shadow-lg text-white"
        >
          <motion.h1 
            className="text-3xl font-bold mb-2"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            ¡Impulsa tu negocio hoy, {firstName}! 🚀
          </motion.h1>
          <p className="text-blue-100 text-lg">{currentDate}</p>
          <div className="mt-4 flex items-center space-x-6 text-sm text-blue-100">
            <motion.span 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
              <span>✨ {totalTasks} tareas para crecer</span>
            </motion.span>
            <motion.span 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <span>✅ {completedTasks} logros completados</span>
            </motion.span>
            <motion.span 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <span>� Dashboard en vivo</span>
            </motion.span>
          </div>
        </motion.header>

        {/* Métricas Principales - Aplicando "Make it easy to absorb the message" */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">🎯 Métricas de Crecimiento</h2>
            <div className="text-sm text-green-600 font-medium">
              {metrics.webVisits + metrics.newLeads + metrics.whatsappChats + metrics.conversions > 0 
                ? "¡Progreso detectado!" 
                : "¡Hora de despegar!"}
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                key: 'webVisits' as const, 
                title: 'Visitantes', 
                icon: TrendingUp, 
                color: 'blue',
                motivation: metrics.webVisits === 0 ? "¡Atrae tu primer visitante!" : "¡Sigue creciendo!"
              },
              { 
                key: 'newLeads' as const, 
                title: 'Leads Nuevos', 
                icon: Users, 
                color: 'emerald',
                motivation: metrics.newLeads === 0 ? "¡Consigue tu primer lead!" : "¡Más oportunidades!"
              },
              { 
                key: 'whatsappChats' as const, 
                title: 'Chats WhatsApp', 
                icon: MessageCircle, 
                color: 'green',
                motivation: metrics.whatsappChats === 0 ? "¡Conecta con clientes!" : "¡Conversaciones activas!"
              },
              { 
                key: 'conversions' as const, 
                title: 'Conversiones', 
                icon: Target, 
                color: 'purple',
                motivation: metrics.conversions === 0 ? "¡Tu primera venta!" : "¡Más éxitos!"
              }
            ].map((metric) => (
              <motion.button
                key={metric.key}
                onClick={() => openEditModal(metric.key)}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`p-6 bg-gradient-to-br from-${metric.color}-50 to-${metric.color}-100 
                  rounded-xl border-2 border-${metric.color}-200 text-left group transition-all duration-300 
                  hover:shadow-xl hover:border-${metric.color}-300 focus:outline-none focus:ring-4 focus:ring-${metric.color}-500/20`}
                aria-label={`Editar ${metric.title}: ${metrics[metric.key]}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className={`p-3 bg-${metric.color}-500 rounded-xl shadow-md`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <metric.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Edit2 className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </div>
                <motion.div 
                  className="text-3xl font-bold text-gray-900 mb-2"
                  key={metrics[metric.key]}
                  initial={{ scale: 1.2, color: '#10b981' }}
                  animate={{ scale: 1, color: '#111827' }}
                  transition={{ duration: 0.3 }}
                >
                  {metrics[metric.key].toLocaleString()}
                </motion.div>
                <div className="text-sm font-medium text-gray-700 mb-1">{metric.title}</div>
                <div className={`text-xs font-medium ${
                  metrics[metric.key] === 0 ? 'text-orange-600' : 'text-green-600'
                }`}>
                  {metric.motivation}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Tareas - 2/3 del espacio - Aplicando "Layout structure guides attention" */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-orange-100"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  🎯 Tareas que Impulsan tu Crecimiento
                  {urgentTasks > 0 && (
                    <motion.span 
                      className="ml-3 px-3 py-1 bg-red-500 text-white text-sm rounded-full"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      {urgentTasks} urgentes
                    </motion.span>
                  )}
                </h2>
                <p className="text-gray-600 mt-1 font-medium">
                  {completedTasks}/{totalTasks} completadas • 
                  <span className={`ml-2 ${
                    completionRate >= 75 ? 'text-green-600' : 
                    completionRate >= 50 ? 'text-yellow-600' : 'text-orange-600'
                  }`}>
                    {Math.round(completionRate)}% de progreso
                  </span>
                </p>
              </div>
              
              <motion.button
                onClick={() => setShowAddTask(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl 
                  hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-lg 
                  focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                aria-label="Agregar nueva tarea"
              >
                <Plus className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Progress Bar Motivacional */}
            <div className="mb-6">
              <div className="flex justify-between text-sm font-medium mb-2">
                <span className="text-gray-700">Progreso hacia el éxito</span>
                <span className={`${
                  completionRate >= 75 ? 'text-green-600' : 
                  completionRate >= 50 ? 'text-yellow-600' : 'text-orange-600'
                }`}>
                  {Math.round(completionRate)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
                <motion.div 
                  className={`h-4 rounded-full transition-all duration-1000 ${
                    completionRate >= 75 ? 'bg-gradient-to-r from-green-400 to-green-600' :
                    completionRate >= 50 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                    'bg-gradient-to-r from-orange-400 to-orange-600'
                  }`}
                  style={{ 
                    width: totalTasks > 0 ? `${completionRate}%` : '0%' 
                  }}
                  animate={{ 
                    boxShadow: completionRate > 0 ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none'
                  }}
                />
              </div>
              {completionRate === 100 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center mt-2 text-green-600 font-bold"
                >
                  🎉 ¡Increíble! Todas las tareas completadas
                </motion.div>
              )}
            </div>

            {/* Add Task Form */}
            <AnimatePresence>
              {showAddTask && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4 p-4 bg-gray-50 rounded-xl border"
                >
                  <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="¿Qué necesitas hacer?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    onKeyPress={(e) => e.key === 'Enter' && addTask()}
                    autoFocus
                  />
                  <div className="flex space-x-2 mt-3">
                    <button
                      onClick={addTask}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                    >
                      Agregar
                    </button>
                    <button
                      onClick={() => {
                        setShowAddTask(false);
                        setNewTaskTitle('');
                      }}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                    >
                      Cancelar
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tasks List */}
            <div className="space-y-3">
              {tasks.length === 0 ? (
                <div className="text-center py-8">
                  <Clock className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No tienes tareas aún</p>
                  <p className="text-gray-400 text-sm">Agrega una para empezar</p>
                </div>
              ) : (
                tasks.map((task) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className={`p-4 rounded-xl border transition-all duration-200 ${
                      task.completed 
                        ? 'bg-gray-50 border-gray-200 opacity-75' 
                        : `${categoryColors[task.category]} hover:shadow-sm`
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <button
                        onClick={() => toggleTask(task.id)}
                        className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 transition-colors ${
                          task.completed
                            ? 'bg-blue-500 border-blue-500'
                            : 'border-gray-300 hover:border-blue-500'
                        }`}
                      >
                        {task.completed && <Check className="w-3 h-3 text-white" />}
                      </button>
                      
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium ${
                          task.completed ? 'text-gray-500 line-through' : 'text-gray-900'
                        }`}>
                          {task.title}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-1 text-xs rounded-full border ${priorityColors[task.priority]}`}>
                            {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Media' : 'Baja'}
                          </span>
                          <span className="text-xs text-gray-500">{task.estimatedTime}</span>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="flex-shrink-0 p-1 text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Eliminar tarea"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.section>

          {/* Herramientas - 1/3 del espacio - Aplicando "Catch and control attention" */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              ⚡ Herramientas de Poder
            </h2>
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <motion.button
                  key={action.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.03, x: 8 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full p-5 text-left rounded-xl border-2 border-gray-200 
                    hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 
                    transition-all duration-300 group shadow-md hover:shadow-xl"
                  onClick={() => console.log(`Navigate to ${action.href}`)}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg 
                        group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <action.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors">
                        {action.title}
                      </p>
                      <p className="text-gray-600 group-hover:text-purple-600 transition-colors">
                        {action.subtitle}
                      </p>
                    </div>
                    <motion.div
                      className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 4 }}
                    >
                      →
                    </motion.div>
                  </div>
                </motion.button>
              ))}
            </div>
            
            {/* CTA Motivacional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6 p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl text-white text-center"
            >
              <motion.p 
                className="font-bold text-lg mb-2"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                🚀 ¡Tu negocio puede crecer hoy!
              </motion.p>
              <p className="text-green-100 text-sm">
                Usa estas herramientas para alcanzar tus metas
              </p>
            </motion.div>
          </motion.section>
        </div>
      </div>

      {/* Modal de Edición */}
      <AnimatePresence>
        {editingMetric && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setEditingMetric(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Editar {editingMetric.title}
                </h3>
                <button
                  onClick={() => setEditingMetric(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nuevo valor
                  </label>
                  <input
                    type="number"
                    value={editingMetric.value}
                    onChange={(e) => handleInputChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    placeholder="Ingresa el número"
                    min="0"
                    autoFocus
                  />
                  {editingMetric.error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center mt-2 text-sm text-red-600"
                    >
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {editingMetric.error}
                    </motion.div>
                  )}
                </div>
                
                <div className="flex space-x-3 pt-2">
                  <button
                    onClick={validateAndSaveMetric}
                    className="flex-1 bg-blue-500 text-white py-3 px-4 rounded-xl hover:bg-blue-600 transition-colors font-medium"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={() => setEditingMetric(null)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors font-medium"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}