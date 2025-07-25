import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Check, X, Circle } from 'lucide-react';
import type { Task } from '@/types/portal/dashboard';

interface TasksListProps {
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
  onAddTask: () => void;
  loading?: boolean;
}

/**
 * TasksList - Pure UI Component
 * iOS-style task list with animations
 * Single responsibility: Task visualization & interactions
 */
export const TasksList: React.FC<TasksListProps> = ({
  tasks,
  onToggleTask,
  onDeleteTask,
  onAddTask,
  loading = false
}) => {
  if (loading) {
    return (
      <section className="px-4 pb-8">
        <div className="flex items-center justify-between mb-3">
          <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
        </div>
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div 
              key={i}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 animate-pulse"
            >
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gray-200 rounded-full" />
                <div className="flex-1 h-4 bg-gray-200 rounded" />
                <div className="w-6 h-6 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 pb-8" role="region" aria-label="Lista de tareas">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">Tareas</h3>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onAddTask}
          className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center
            focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2
            transition-all duration-200"
          aria-label="Agregar nueva tarea"
        >
          <Plus className="w-4 h-4 text-white" />
        </motion.button>
      </div>
      
      <div className="space-y-2">
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 
              flex items-center space-x-3 group"
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => onToggleTask(task.id)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20
                ${task.completed 
                  ? 'bg-blue-500 border-blue-500' 
                  : 'border-gray-300 hover:border-blue-400'
                }`}
              aria-label={task.completed ? 'Marcar como pendiente' : 'Marcar como completada'}
            >
              {task.completed && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Check className="w-3 h-3 text-white" />
                </motion.div>
              )}
            </motion.button>
            
            <div className="flex-1 min-w-0">
              <p className={`text-sm transition-all duration-200 ${
                task.completed 
                  ? 'text-gray-500 line-through' 
                  : 'text-gray-900'
              }`}>
                {task.text}
              </p>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => onDeleteTask(task.id)}
              className="w-6 h-6 text-gray-400 hover:text-red-500 
                opacity-0 group-hover:opacity-100 transition-all duration-200
                focus:outline-none focus:opacity-100 focus:ring-2 focus:ring-red-500/20"
              aria-label="Eliminar tarea"
            >
              <X className="w-4 h-4" />
            </motion.button>
          </motion.div>
        ))}
      </div>

      {tasks.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <Circle className="w-12 h-12 text-gray-300 mx-auto mb-3" aria-hidden="true" />
          <p className="text-gray-500 text-sm">No hay tareas</p>
          <p className="text-gray-400 text-xs">Agrega una para empezar</p>
        </motion.div>
      )}
    </section>
  );
};
