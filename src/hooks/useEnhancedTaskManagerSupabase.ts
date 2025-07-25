// 🎯 Enhanced Task Manager Hook - Conectado a Supabase
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export interface UserTask {
  id: string;
  title: string;
  description: string;
  type: 'setup' | 'marketing' | 'maintenance' | 'growth';
  priority: 'high' | 'medium' | 'low';
  estimatedMinutes: number;
  points: number;
  completed: boolean;
  dueDate?: string;
  createdDate: string;
  completedDate?: string;
}

export function useEnhancedTaskManager() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState<UserTask[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔄 Cargar tareas desde localStorage (API temporal deshabilitada)
  const loadTasks = useCallback(async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Temporalmente usar localStorage hasta que la API esté lista
      console.log('Usando localStorage para tareas (API en desarrollo)');
      const storageKey = `enhanced_tasks_${user.id || user.email || 'guest'}`;
      const savedTasks = localStorage.getItem(storageKey);
      
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      } else {
        setTasks([]); // Array vacío para nuevos usuarios
      }

    } catch (err) {
      console.error('Error loading tasks:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
      setTasks([]); // Fallback a array vacío
    } finally {
      setLoading(false);
    }
  }, [user]);

  // ✅ Toggle completar tarea (localStorage)
  const toggleTask = useCallback(async (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return false;

    try {
      // Comentar API temporalmente
      // const response = await fetch('/api/portal/tasks', {
      //   method: 'PUT', 
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ taskId, completed: !task.completed })
      // });

      console.log('Actualizando tarea en localStorage (API en desarrollo)');

      // Actualizar estado local
      const updatedTasks = tasks.map(t => 
        t.id === taskId 
          ? { ...t, completed: !t.completed, completedDate: !t.completed ? new Date().toISOString() : undefined }
          : t
      );
      
      setTasks(updatedTasks);
      
      // Guardar en localStorage
      if (user) {
        const storageKey = `enhanced_tasks_${user.id || user.email || 'guest'}`;
        localStorage.setItem(storageKey, JSON.stringify(updatedTasks));
      }

      return true;

    } catch (err) {
      console.error('Error toggling task:', err);
      setError(err instanceof Error ? err.message : 'Failed to update task');
      return false;
    }
  }, [tasks, user]);

  // ➕ Agregar nueva tarea (localStorage)
  const addTask = useCallback(async (taskData: Omit<UserTask, 'id' | 'completed' | 'createdDate' | 'completedDate'>) => {
    try {
      // Comentar API temporalmente
      // const response = await fetch('/api/portal/tasks', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     title: taskData.title,
      //     description: taskData.description,
      //     priority: taskData.priority,
      //     category: taskData.type,
      //     dueDate: taskData.dueDate
      //   })
      // });

      console.log('Agregando tarea en localStorage (API en desarrollo)');

      const newTask: UserTask = {
        id: Date.now().toString(),
        createdDate: new Date().toISOString(),
        completed: false,
        ...taskData
      };

      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      
      // Guardar en localStorage
      if (user) {
        const storageKey = `enhanced_tasks_${user.id || user.email || 'guest'}`;
        localStorage.setItem(storageKey, JSON.stringify(updatedTasks));
      }

      return true;

    } catch (err) {
      console.error('Error adding task:', err);
      setError(err instanceof Error ? err.message : 'Failed to add task');
      return false;
    }
  }, [tasks, user]);

  // 📊 Estadísticas calculadas
  const getTaskStats = useCallback(() => {
    const completed = tasks.filter(t => t.completed).length;
    const total = tasks.length;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
    const totalPoints = tasks.reduce((sum, task) => sum + (task.completed ? task.points : 0), 0);

    return {
      completed,
      total,
      pending: total - completed,
      completionRate,
      totalPoints
    };
  }, [tasks]);

  // Cargar tareas al montar
  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return {
    tasks,
    loading,
    error,
    loadTasks,
    toggleTask,
    addTask,
    getTaskStats,
    isLoaded: !loading,
    hasError: error !== null
  };
}
