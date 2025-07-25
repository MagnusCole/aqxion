import { useState, useEffect, useCallback } from 'react';
import { Task } from '@/types/portal/dashboard';

/**
 * Custom hook for tasks management
 * Handles CRUD operations and persistence
 */
export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Actualizar Google My Business', completed: false },
    { id: '2', text: 'Responder WhatsApp pendientes', completed: true },
    { id: '3', text: 'Revisar precios del sitio web', completed: false },
    { id: '4', text: 'Planificar contenido social', completed: false }
  ]);

  const [loading, setLoading] = useState<boolean>(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('aqxion-tasks');
      if (saved) {
        const parsed = JSON.parse(saved);
        setTasks(parsed);
      }
    } catch (err) {
      console.error('Failed to load tasks:', err);
    }
  }, []);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('aqxion-tasks', JSON.stringify(tasks));
    } catch (err) {
      console.error('Failed to save tasks:', err);
    }
  }, [tasks]);

  const addTask = useCallback((text: string) => {
    if (!text.trim()) return false;

    const newTask: Task = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    };

    setTasks(prev => [newTask, ...prev]);
    return true;
  }, []);

  const toggleTask = useCallback((taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed }
        : task
    ));
  }, []);

  const deleteTask = useCallback((taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  }, []);

  const editTask = useCallback((taskId: string, newText: string) => {
    if (!newText.trim()) return false;

    setTasks(prev => prev.map(task =>
      task.id === taskId
        ? { ...task, text: newText.trim() }
        : task
    ));
    return true;
  }, []);

  // Computed values
  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return {
    tasks,
    loading,
    addTask,
    toggleTask,
    deleteTask,
    editTask,
    completedCount,
    totalCount,
    progressPercentage
  };
}
