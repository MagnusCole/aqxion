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
export default function IOSDashboard() {
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
