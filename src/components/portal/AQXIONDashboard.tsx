'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  MessageCircle,
  Target,
  Calendar,
  BarChart3,
  Gift,
  HeadphonesIcon as Headphones,
  Plus,
  Check,
  Clock,
  Edit3,
  X,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Star,
  Zap,
  Eye,
  Heart,
  Settings,
  Bell,
  ChevronRight
} from 'lucide-react';
import { useMYPEUserData } from '@/hooks/useMYPEUserData';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'urgent' | 'high' | 'medium' | 'low';
  category: 'growth' | 'customer' | 'content' | 'tech';
  timeEstimate: string;
  impact: 'high' | 'medium' | 'low';
}

interface Metric {
  key: 'traffic' | 'leads' | 'conversations' | 'sales';
  value: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  target: number;
}

/**
 * AQXION Dashboard - Reinventado
 * 
 * Filosofía de diseño:
 * - Human-centered: Cada pixel tiene un propósito
 * - Inspiración Apple: Minimalismo sofisticado
 * - Funcionalidad real: Herramientas que realmente usan los MYPEs
 * - Performance obsessed: Carga < 1s, interacciones < 100ms
 * - Accessible by design: WCAG 2.2 AAA compliance
 */
export default function AQXIONDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  const [metrics, setMetrics] = useState<Metric[]>([
    { key: 'traffic', value: 0, change: 0, trend: 'stable', target: 100 },
    { key: 'leads', value: 0, change: 0, trend: 'stable', target: 20 },
    { key: 'conversations', value: 0, change: 0, trend: 'stable', target: 50 },
    { key: 'sales', value: 0, change: 0, trend: 'stable', target: 5 }
  ]);
  
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingMetric, setEditingMetric] = useState<{
    key: Metric['key'];
    title: string;
    value: string;
    error?: string;
  } | null>(null);
  
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  
  const { userData, loading } = useMYPEUserData();

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Greeting based on time
  useEffect(() => {
    const hour = currentTime.getHours();
    if (hour < 6) setGreeting('Buenas noches');
    else if (hour < 12) setGreeting('Buenos días');
    else if (hour < 18) setGreeting('Buenas tardes');
    else setGreeting('Buenas noches');
  }, [currentTime]);

  // Data persistence
  useEffect(() => {
    const savedMetrics = localStorage.getItem('aqxion-metrics');
    const savedTasks = localStorage.getItem('aqxion-tasks');
    
    if (savedMetrics) {
      try {
        setMetrics(JSON.parse(savedMetrics));
      } catch (e) {
        initializeMetrics();
      }
    } else {
      initializeMetrics();
    }
    
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (e) {
        initializeTasks();
      }
    } else {
      initializeTasks();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('aqxion-metrics', JSON.stringify(metrics));
  }, [metrics]);

  useEffect(() => {
    localStorage.setItem('aqxion-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const initializeMetrics = () => {
    setMetrics([
      { key: 'traffic', value: 247, change: 12, trend: 'up', target: 300 },
      { key: 'leads', value: 18, change: 3, trend: 'up', target: 25 },
      { key: 'conversations', value: 42, change: -2, trend: 'down', target: 50 },
      { key: 'sales', value: 6, change: 2, trend: 'up', target: 10 }
    ]);
  };

  const initializeTasks = () => {
    const initialTasks: Task[] = [
      {
        id: '1',
        title: 'Optimizar perfil de Google My Business',
        completed: false,
        priority: 'urgent',
        category: 'growth',
        timeEstimate: '15 min',
        impact: 'high'
      },
      {
        id: '2',
        title: 'Responder reseñas pendientes',
        completed: false,
        priority: 'high',
        category: 'customer',
        timeEstimate: '20 min',
        impact: 'medium'
      },
      {
        id: '3',
        title: 'Actualizar horarios de atención',
        completed: false,
        priority: 'medium',
        category: 'tech',
        timeEstimate: '10 min',
        impact: 'medium'
      },
      {
        id: '4',
        title: 'Planificar contenido semanal',
        completed: false,
        priority: 'medium',
        category: 'content',
        timeEstimate: '45 min',
        impact: 'high'
      }
    ];
    setTasks(initialTasks);
  };

  const updateMetric = (key: Metric['key'], newValue: number) => {
    setMetrics(prev => prev.map(metric => 
      metric.key === key 
        ? { ...metric, value: newValue, change: newValue - metric.value }
        : metric
    ));
  };

  const toggleTask = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const addQuickTask = () => {
    if (newTaskTitle.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        title: newTaskTitle.trim(),
        completed: false,
        priority: 'medium',
        category: 'growth',
        timeEstimate: '30 min',
        impact: 'medium'
      };
      setTasks(prev => [newTask, ...prev]);
      setNewTaskTitle('');
      setShowQuickAdd(false);
    }
  };

  const openMetricEditor = (key: Metric['key']) => {
    const titles = {
      traffic: 'Visitantes Web',
      leads: 'Nuevos Leads',
      conversations: 'Conversaciones',
      sales: 'Ventas'
    };
    
    const metric = metrics.find(m => m.key === key);
    if (metric) {
      setEditingMetric({
        key,
        title: titles[key],
        value: metric.value.toString()
      });
    }
  };

  const saveMetric = () => {
    if (editingMetric) {
      const value = Number(editingMetric.value);
      if (isNaN(value) || value < 0) {
        setEditingMetric({
          ...editingMetric,
          error: 'Ingresa un número válido'
        });
        return;
      }
      updateMetric(editingMetric.key, value);
      setEditingMetric(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  const businessName = userData?.businessInfo?.name || 'Tu Negocio';
  const firstName = businessName.split(' ')[0];
  
  const completedTasks = tasks.filter(t => t.completed).length;
  const totalTasks = tasks.length;
  const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const urgentTasks = tasks.filter(t => !t.completed && (t.priority === 'urgent' || t.priority === 'high')).length;

  const metricConfigs = {
    traffic: { 
      icon: Eye, 
      label: 'Visitantes Web', 
      color: 'blue',
      suffix: '',
      description: 'Últimos 30 días'
    },
    leads: { 
      icon: Users, 
      label: 'Nuevos Leads', 
      color: 'emerald',
      suffix: '',
      description: 'Contactos interesados'
    },
    conversations: { 
      icon: MessageCircle, 
      label: 'Conversaciones', 
      color: 'purple',
      suffix: '',
      description: 'WhatsApp + llamadas'
    },
    sales: { 
      icon: Target, 
      label: 'Ventas', 
      color: 'orange',
      suffix: '',
      description: 'Clientes nuevos'
    }
  };

  const quickTools = [
    { 
      icon: Calendar, 
      title: 'Calendario', 
      description: 'Programa citas y contenido',
      color: 'blue',
      href: '/portal/calendar'
    },
    { 
      icon: MessageCircle, 
      title: 'WhatsApp Hub', 
      description: 'Gestiona conversaciones',
      color: 'green',
      href: '/portal/whatsapp'
    },
    { 
      icon: BarChart3, 
      title: 'Analytics', 
      description: 'Insights de rendimiento',
      color: 'purple',
      href: '/portal/analytics'
    },
    { 
      icon: Gift, 
      title: 'Recursos', 
      description: 'Herramientas y bonos',
      color: 'orange',
      href: '/portal/resources'
    }
  ];

  const priorityConfig = {
    urgent: { color: 'bg-red-500', label: 'Urgente', textColor: 'text-red-700' },
    high: { color: 'bg-orange-500', label: 'Alta', textColor: 'text-orange-700' },
    medium: { color: 'bg-yellow-500', label: 'Media', textColor: 'text-yellow-700' },
    low: { color: 'bg-green-500', label: 'Baja', textColor: 'text-green-700' }
  };

  const categoryConfig = {
    growth: { icon: TrendingUp, color: 'bg-blue-50 border-blue-200', label: 'Crecimiento' },
    customer: { icon: Heart, color: 'bg-pink-50 border-pink-200', label: 'Cliente' },
    content: { icon: Sparkles, color: 'bg-purple-50 border-purple-200', label: 'Contenido' },
    tech: { icon: Settings, color: 'bg-gray-50 border-gray-200', label: 'Técnico' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        
        {/* Welcome Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-sm border border-white/50">
            <div className="flex items-start justify-between">
              <div>
                <motion.h1 
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {greeting}, {firstName} 👋
                </motion.h1>
                <p className="text-gray-600 text-lg">
                  {currentTime.toLocaleDateString('es-PE', { 
                    weekday: 'long', 
                    day: 'numeric', 
                    month: 'long' 
                  })}
                </p>
                
                {/* Quick Stats */}
                <div className="flex items-center space-x-6 mt-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-gray-600">Sistema activo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-600">{Math.round(completionRate)}% completado hoy</span>
                  </div>
                  {urgentTasks > 0 && (
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span className="text-orange-600">{urgentTasks} tareas urgentes</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">
                  {currentTime.toLocaleTimeString('es-PE', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors"
                >
                  <Bell className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Metrics Dashboard */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {metrics.map((metric, index) => {
              const config = metricConfigs[metric.key];
              const progressPercent = Math.min((metric.value / metric.target) * 100, 100);
              
              return (
                <motion.div
                  key={metric.key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group"
                >
                  <button
                    onClick={() => openMetricEditor(metric.key)}
                    className={`w-full p-6 bg-gradient-to-br from-${config.color}-50 to-${config.color}-100 
                      rounded-2xl border border-${config.color}-200/50 text-left transition-all duration-300 
                      hover:shadow-lg hover:shadow-${config.color}-500/10 focus:outline-none 
                      focus:ring-2 focus:ring-${config.color}-500/20`}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2.5 bg-${config.color}-500 rounded-xl shadow-sm`}>
                        <config.icon className="w-5 h-5 text-white" />
                      </div>
                      <Edit3 className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    {/* Value */}
                    <div className="mb-3">
                      <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                        {metric.value.toLocaleString()}{config.suffix}
                      </div>
                      <div className="text-sm text-gray-600">{config.label}</div>
                    </div>
                    
                    {/* Progress to target */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                        <span>Meta: {metric.target}</span>
                        <span>{Math.round(progressPercent)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <motion.div 
                          className={`bg-${config.color}-500 h-1.5 rounded-full transition-all duration-500`}
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>
                    
                    {/* Change indicator */}
                    <div className="flex items-center space-x-1">
                      {metric.change !== 0 && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={`flex items-center text-xs ${
                            metric.change > 0 ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          <TrendingUp className={`w-3 h-3 mr-1 ${
                            metric.change < 0 ? 'rotate-180' : ''
                          }`} />
                          {metric.change > 0 ? '+' : ''}{metric.change}
                        </motion.div>
                      )}
                      <span className="text-xs text-gray-500">{config.description}</span>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Tasks Section - Takes 2/3 on large screens */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-sm border border-white/50">
              
              {/* Section Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Tareas de Crecimiento
                  </h2>
                  <p className="text-gray-600">
                    {completedTasks} de {totalTasks} completadas • {Math.round(completionRate)}% progreso
                  </p>
                </div>
                
                <motion.button
                  onClick={() => setShowQuickAdd(!showQuickAdd)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition-colors shadow-sm"
                >
                  <Plus className="w-5 h-5" />
                </motion.button>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-700"
                    style={{ width: `${completionRate}%` }}
                  />
                </div>
              </div>
              
              {/* Quick Add Form */}
              <AnimatePresence>
                {showQuickAdd && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 p-4 bg-blue-50 rounded-2xl border border-blue-200"
                  >
                    <input
                      type="text"
                      value={newTaskTitle}
                      onChange={(e) => setNewTaskTitle(e.target.value)}
                      placeholder="¿Qué necesitas hacer para hacer crecer tu negocio?"
                      className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      onKeyPress={(e) => e.key === 'Enter' && addQuickTask()}
                      autoFocus
                    />
                    <div className="flex space-x-3 mt-3">
                      <button
                        onClick={addQuickTask}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                      >
                        Agregar Tarea
                      </button>
                      <button
                        onClick={() => {
                          setShowQuickAdd(false);
                          setNewTaskTitle('');
                        }}
                        className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium border border-gray-200"
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
                  <div className="text-center py-12">
                    <Sparkles className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      ¡Todo listo para empezar!
                    </h3>
                    <p className="text-gray-600">
                      Agrega tu primera tarea para hacer crecer tu negocio
                    </p>
                  </div>
                ) : (
                  tasks.map((task, index) => {
                    const priorityStyle = priorityConfig[task.priority];
                    const categoryStyle = categoryConfig[task.category];
                    
                    return (
                      <motion.div
                        key={task.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: index * 0.05 }}
                        className={`p-4 rounded-2xl border transition-all duration-200 ${
                          task.completed 
                            ? 'bg-gray-50 border-gray-200 opacity-75' 
                            : `${categoryStyle.color} hover:shadow-md`
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          
                          {/* Checkbox */}
                          <motion.button
                            onClick={() => toggleTask(task.id)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center mt-0.5 transition-all ${
                              task.completed
                                ? 'bg-blue-500 border-blue-500'
                                : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                            }`}
                          >
                            <AnimatePresence>
                              {task.completed && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0 }}
                                >
                                  <Check className="w-4 h-4 text-white" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.button>
                          
                          {/* Task Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className={`text-sm font-medium mb-2 ${
                              task.completed ? 'text-gray-500 line-through' : 'text-gray-900'
                            }`}>
                              {task.title}
                            </h4>
                            
                            <div className="flex items-center space-x-3 text-xs">
                              {/* Priority */}
                              <div className="flex items-center space-x-1">
                                <div className={`w-2 h-2 rounded-full ${priorityStyle.color}`} />
                                <span className={priorityStyle.textColor}>{priorityStyle.label}</span>
                              </div>
                              
                              {/* Category */}
                              <div className="flex items-center space-x-1">
                                <categoryStyle.icon className="w-3 h-3 text-gray-500" />
                                <span className="text-gray-600">{categoryStyle.label}</span>
                              </div>
                              
                              {/* Time estimate */}
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3 text-gray-500" />
                                <span className="text-gray-600">{task.timeEstimate}</span>
                              </div>
                              
                              {/* Impact */}
                              {task.impact === 'high' && (
                                <div className="flex items-center space-x-1">
                                  <Star className="w-3 h-3 text-yellow-500" />
                                  <span className="text-yellow-700">Alto impacto</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </div>
            </div>
          </motion.section>

          {/* Quick Tools Sidebar - Takes 1/3 on large screens */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            
            {/* Quick Tools */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-white/50">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Herramientas Rápidas</h3>
              <div className="space-y-3">
                {quickTools.map((tool, index) => (
                  <motion.button
                    key={tool.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full p-4 text-left rounded-2xl border transition-all duration-200 
                      bg-gradient-to-r from-${tool.color}-50 to-${tool.color}-100 
                      border-${tool.color}-200 hover:shadow-md group`}
                    onClick={() => console.log(`Navigate to ${tool.href}`)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2.5 bg-${tool.color}-500 rounded-xl shadow-sm`}>
                        <tool.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900">{tool.title}</h4>
                        <p className="text-sm text-gray-600">{tool.description}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 text-white shadow-lg"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Headphones className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">¿Necesitas ayuda?</h4>
                  <p className="text-blue-100 text-sm mb-3">
                    Nuestro equipo está aquí para apoyarte en cada paso.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 rounded-xl px-4 py-2 text-sm font-medium transition-colors"
                  >
                    <span>Contactar Soporte</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>

      {/* Metric Editor Modal */}
      <AnimatePresence>
        {editingMetric && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setEditingMetric(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Actualizar {editingMetric.title}
                </h3>
                <button
                  onClick={() => setEditingMetric(null)}
                  className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Nuevo valor
                  </label>
                  <input
                    type="number"
                    value={editingMetric.value}
                    onChange={(e) => setEditingMetric({ 
                      ...editingMetric, 
                      value: e.target.value, 
                      error: undefined 
                    })}
                    className="w-full px-4 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    placeholder="0"
                    min="0"
                    autoFocus
                  />
                  {editingMetric.error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center mt-3 text-sm text-red-600"
                    >
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      {editingMetric.error}
                    </motion.div>
                  )}
                </div>
                
                <div className="flex space-x-4">
                  <button
                    onClick={saveMetric}
                    className="flex-1 bg-blue-500 text-white py-4 px-6 rounded-2xl hover:bg-blue-600 transition-colors font-semibold"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={() => setEditingMetric(null)}
                    className="flex-1 bg-gray-100 text-gray-700 py-4 px-6 rounded-2xl hover:bg-gray-200 transition-colors font-semibold"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
