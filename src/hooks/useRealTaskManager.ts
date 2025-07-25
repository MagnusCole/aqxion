// 📋 Real Task Management System - AQXION
// Sistema completo de gestión de tareas para MYPEs

'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';

// 🎯 Task Interface
export interface RealTask {
  id: string;
  title: string;
  description?: string;
  category: 'marketing' | 'ventas' | 'operaciones' | 'finanzas' | 'general';
  priority: 'alta' | 'media' | 'baja';
  status: 'pendiente' | 'en_progreso' | 'completada' | 'cancelada';
  dueDate?: string;
  createdAt: string;
  completedAt?: string;
  estimatedHours?: number;
  actualHours?: number;
  notes?: string;
  tags?: string[];
}

// 📊 Task Statistics
export interface TaskStats {
  total: number;
  completed: number;
  pending: number;
  overdue: number;
  completionRate: number;
  completedToday: number;
  completedThisWeek: number;
  completedThisMonth: number;
}

// 🏷️ Task Templates for MYPEs
export const MYPE_TASK_TEMPLATES: Omit<RealTask, 'id' | 'createdAt'>[] = [
  {
    title: 'Actualizar página de Facebook',
    description: 'Publicar contenido nuevo en la página de Facebook del negocio',
    category: 'marketing',
    priority: 'media',
    status: 'pendiente',
    estimatedHours: 0.5,
    tags: ['redes sociales', 'contenido']
  },
  {
    title: 'Llamar a clientes pendientes',
    description: 'Contactar clientes que han mostrado interés pero no han comprado',
    category: 'ventas',
    priority: 'alta',
    status: 'pendiente',
    estimatedHours: 2,
    tags: ['seguimiento', 'ventas']
  },
  {
    title: 'Revisar inventario',
    description: 'Hacer conteo de productos y actualizar stock',
    category: 'operaciones',
    priority: 'media',
    status: 'pendiente',
    estimatedHours: 1,
    tags: ['inventario', 'stock']
  },
  {
    title: 'Enviar facturas pendientes',
    description: 'Enviar facturas a clientes con pagos pendientes',
    category: 'finanzas',
    priority: 'alta',
    status: 'pendiente',
    estimatedHours: 1,
    tags: ['facturación', 'cobranza']
  }
];

export function useRealTaskManager() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState<RealTask[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 💾 Load tasks from localStorage
  const loadTasks = useCallback(() => {
    if (!user?.email) return;
    
    try {
      setLoading(true);
      const savedTasks = localStorage.getItem(`aqxion_tasks_${user.email}`);
      
      if (savedTasks) {
        const parsed = JSON.parse(savedTasks);
        setTasks(parsed);
      } else {
        // Initialize with sample tasks for new users
        const initialTasks = MYPE_TASK_TEMPLATES.map(template => ({
          ...template,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString()
        }));
        setTasks(initialTasks);
        saveTasks(initialTasks);
      }
    } catch (err) {
      setError('Error cargando tareas');
      console.error('Error loading tasks:', err);
    } finally {
      setLoading(false);
    }
  }, [user?.email]);

  // 💾 Save tasks to localStorage
  const saveTasks = useCallback((tasksToSave: RealTask[]) => {
    if (!user?.email) return;
    
    try {
      localStorage.setItem(
        `aqxion_tasks_${user.email}`, 
        JSON.stringify(tasksToSave)
      );
    } catch (err) {
      setError('Error guardando tareas');
      console.error('Error saving tasks:', err);
    }
  }, [user?.email]);

  // ➕ Add new task
  const addTask = useCallback((taskData: Omit<RealTask, 'id' | 'createdAt'>) => {
    const newTask: RealTask = {
      ...taskData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    };
    
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    
    return newTask.id;
  }, [tasks, saveTasks]);

  // ✏️ Update task
  const updateTask = useCallback((taskId: string, updates: Partial<RealTask>) => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId 
        ? { ...task, ...updates }
        : task
    );
    
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  }, [tasks, saveTasks]);

  // ✅ Toggle task completion
  const toggleTaskCompletion = useCallback((taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    
    const isCompleting = task.status !== 'completada';
    const updates: Partial<RealTask> = {
      status: isCompleting ? 'completada' : 'pendiente',
      completedAt: isCompleting ? new Date().toISOString() : undefined
    };
    
    updateTask(taskId, updates);
  }, [tasks, updateTask]);

  // 🗑️ Delete task
  const deleteTask = useCallback((taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  }, [tasks, saveTasks]);

  // 📊 Calculate task statistics
  const getTaskStats = useCallback((): TaskStats => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const thisWeekStart = new Date(today);
    thisWeekStart.setDate(today.getDate() - today.getDay());
    const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    const completed = tasks.filter(t => t.status === 'completada');
    const pending = tasks.filter(t => t.status === 'pendiente' || t.status === 'en_progreso');
    const overdue = tasks.filter(t => 
      t.dueDate && 
      new Date(t.dueDate) < now && 
      t.status !== 'completada'
    );

    const completedToday = completed.filter(t => 
      t.completedAt && new Date(t.completedAt) >= today
    );
    
    const completedThisWeek = completed.filter(t => 
      t.completedAt && new Date(t.completedAt) >= thisWeekStart
    );
    
    const completedThisMonth = completed.filter(t => 
      t.completedAt && new Date(t.completedAt) >= thisMonthStart
    );

    return {
      total: tasks.length,
      completed: completed.length,
      pending: pending.length,
      overdue: overdue.length,
      completionRate: tasks.length > 0 ? Math.round((completed.length / tasks.length) * 100) : 0,
      completedToday: completedToday.length,
      completedThisWeek: completedThisWeek.length,
      completedThisMonth: completedThisMonth.length
    };
  }, [tasks]);

  // 🔍 Filter tasks
  const getTasksByCategory = useCallback((category: RealTask['category']) => {
    return tasks.filter(task => task.category === category);
  }, [tasks]);

  const getTasksByStatus = useCallback((status: RealTask['status']) => {
    return tasks.filter(task => task.status === status);
  }, [tasks]);

  const getTasksByPriority = useCallback((priority: RealTask['priority']) => {
    return tasks.filter(task => task.priority === priority);
  }, [tasks]);

  // 🚀 Quick task creation from templates
  const addTaskFromTemplate = useCallback((templateIndex: number) => {
    const template = MYPE_TASK_TEMPLATES[templateIndex];
    if (template) {
      return addTask(template);
    }
  }, [addTask]);

  // 🔄 Load tasks on component mount
  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return {
    // 📊 Data
    tasks,
    loading,
    error,
    
    // 🔄 Actions
    addTask,
    updateTask,
    toggleTaskCompletion,
    deleteTask,
    addTaskFromTemplate,
    
    // 📊 Statistics
    stats: getTaskStats(),
    
    // 🔍 Filters
    getTasksByCategory,
    getTasksByStatus,
    getTasksByPriority,
    
    // 📋 Templates
    templates: MYPE_TASK_TEMPLATES,
    
    // 🎯 Helper functions
    hasOverdueTasks: getTaskStats().overdue > 0,
    hasCompletedTasksToday: getTaskStats().completedToday > 0,
    needsAttention: getTaskStats().pending > 5
  };
}
