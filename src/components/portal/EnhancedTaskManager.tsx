// 📋 Enhanced Task Manager - AQXION Portal
// Sistema mejorado de gestión de tareas con categorías y métricas

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Circle, 
  Plus, 
  Calendar, 
  Clock,
  AlertTriangle,
  Filter,
  Edit3,
  Trash2,
  TrendingUp
} from 'lucide-react';
import { useEnhancedTaskManager, type UserTask } from '@/hooks/useEnhancedTaskManagerSupabase';

// 🎨 Category Colors
const CATEGORY_COLORS = {
  setup: 'bg-blue-50 text-blue-700 border-blue-200',
  marketing: 'bg-purple-50 text-purple-700 border-purple-200',
  maintenance: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  growth: 'bg-green-50 text-green-700 border-green-200'
};

const PRIORITY_COLORS = {
  high: 'bg-red-50 text-red-700 border-red-200',
  medium: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  low: 'bg-green-50 text-green-700 border-green-200'
};

// 🎯 Enhanced Task Item
interface TaskItemProps {
  task: UserTask;
  onToggleComplete: (taskId: string) => void;
  onEdit: (task: UserTask) => void;
  onDelete: (taskId: string) => void;
}

const EnhancedTaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleComplete,
  onEdit,
  onDelete
}) => {
  const isCompleted = task.completed;
  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !isCompleted;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`
        p-4 bg-white rounded-xl border border-gray-100 
        ${isCompleted ? 'opacity-60' : ''}
        ${isOverdue ? 'border-red-200 bg-red-50' : ''}
        hover:shadow-sm transition-all duration-200
      `}
    >
      <div className="flex items-start space-x-3">
        {/* Checkbox */}
        <button
          onClick={() => onToggleComplete(task.id)}
          className="mt-1 flex-shrink-0"
        >
          {isCompleted ? (
            <CheckCircle2 className="h-5 w-5 text-green-500" />
          ) : (
            <Circle className="h-5 w-5 text-gray-400 hover:text-green-500 transition-colors" />
          )}
        </button>

        {/* Task Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className={`
                font-medium text-sm
                ${isCompleted ? 'line-through text-gray-500' : 'text-gray-900'}
              `}>
                {task.title}
              </h3>
              
              {task.description && (
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                  {task.description}
                </p>
              )}

              {/* Tags and metadata */}
              <div className="flex items-center flex-wrap gap-2 mt-2">
                <span className={`
                  px-2 py-1 rounded-full text-xs font-medium border
                  ${CATEGORY_COLORS[task.type]}
                `}>
                  {task.type}
                </span>
                
                <span className={`
                  px-2 py-1 rounded-full text-xs font-medium border
                  ${PRIORITY_COLORS[task.priority]}
                `}>
                  {task.priority}
                </span>

                {task.dueDate && (
                  <div className={`
                    flex items-center space-x-1 text-xs
                    ${isOverdue ? 'text-red-600' : 'text-gray-500'}
                  `}>
                    <Calendar className="h-3 w-3" />
                    <span>
                      {new Date(task.dueDate).toLocaleDateString('es-PE', {
                        day: 'numeric',
                        month: 'short'
                      })}
                    </span>
                  </div>
                )}

                {task.estimatedMinutes && (
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>{Math.round(task.estimatedMinutes / 60)}h</span>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-1 ml-2">
              <button
                onClick={() => onEdit(task)}
                className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Edit3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="p-1 text-gray-400 hover:text-red-600 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOverdue && (
        <div className="mt-2 flex items-center space-x-1 text-xs text-red-600">
          <AlertTriangle className="h-3 w-3" />
          <span>Tarea vencida</span>
        </div>
      )}
    </motion.div>
  );
};

// 📊 Task Stats Component
const TaskStatsCard: React.FC<{ stats: any }> = ({ stats }) => {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">Resumen de Tareas</h3>
        <TrendingUp className="h-5 w-5 text-blue-500" />
      </div>
      
      <div className="grid grid-cols-4 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-blue-600">{stats.total}</p>
          <p className="text-xs text-gray-500">Total</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
          <p className="text-xs text-gray-500">Completadas</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-orange-600">{stats.pending}</p>
          <p className="text-xs text-gray-500">Pendientes</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-purple-600">{stats.completionRate}%</p>
          <p className="text-xs text-gray-500">Progreso</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
          <span>Progreso general</span>
          <span>{stats.completionRate}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${stats.completionRate}%` }}
          />
        </div>
      </div>

      {/* Alerts */}
      {stats.overdue > 0 && (
        <div className="mt-3 p-3 bg-red-50 rounded-lg flex items-center space-x-2">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <span className="text-sm text-red-800">
            {stats.overdue} tarea{stats.overdue > 1 ? 's' : ''} vencida{stats.overdue > 1 ? 's' : ''}
          </span>
        </div>
      )}

      {stats.completedToday > 0 && (
        <div className="mt-2 p-3 bg-green-50 rounded-lg flex items-center space-x-2">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <span className="text-sm text-green-800">
            ¡{stats.completedToday} tarea{stats.completedToday > 1 ? 's' : ''} completada{stats.completedToday > 1 ? 's' : ''} hoy!
          </span>
        </div>
      )}
    </div>
  );
};

// 📝 Quick Add Form
const QuickAddForm: React.FC<{
  onAdd: (task: Omit<UserTask, 'id' | 'createdDate' | 'completed' | 'completedDate'>) => void;
  onCancel: () => void;
  templates: any[];
  onAddFromTemplate: (index: number) => void;
}> = ({ onAdd, onCancel, templates, onAddFromTemplate }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState<UserTask['type']>('setup');
  const [priority, setPriority] = useState<UserTask['priority']>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({
      title: title.trim(),
      type,
      priority,
      description: '',
      estimatedMinutes: 30,
      points: priority === 'high' ? 15 : priority === 'medium' ? 10 : 5
    });

    setTitle('');
    onCancel();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-4 border border-gray-100"
    >
      <h3 className="font-semibold text-gray-900 mb-4">Nueva Tarea</h3>
      
      {/* Quick Templates */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">Plantillas rápidas:</p>
        <div className="grid grid-cols-2 gap-2">
          {templates.slice(0, 4).map((template, index) => (
            <button
              key={index}
              onClick={() => {
                onAddFromTemplate(index);
                onCancel();
              }}
              className="p-2 text-left text-xs bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
            >
              <p className="font-medium text-blue-900">{template.title}</p>
              <p className="text-blue-700">{template.category}</p>
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="¿Qué necesitas hacer?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:outline-none"
          required
          autoFocus
        />

        <div className="grid grid-cols-2 gap-3">
          <select
            value={type}
            onChange={(e) => setType(e.target.value as UserTask['type'])}
            className="p-3 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:outline-none"
          >
            <option value="setup">Configuración</option>
            <option value="marketing">Marketing</option>
            <option value="maintenance">Mantenimiento</option>
            <option value="growth">Crecimiento</option>
          </select>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as UserTask['priority'])}
            className="p-3 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:outline-none"
          >
            <option value="low">Prioridad Baja</option>
            <option value="medium">Prioridad Media</option>
            <option value="high">Prioridad Alta</option>
          </select>
        </div>

        <div className="flex space-x-3 pt-2">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors"
          >
            Crear Tarea
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium text-sm hover:bg-gray-300 transition-colors"
          >
            Cancelar
          </button>
        </div>
      </form>
    </motion.div>
  );
};

// 📋 Main Enhanced Task Manager
export const EnhancedTaskManager: React.FC = () => {
  const {
    tasks,
    loading,
    toggleTask,
    addTask,
    getTaskStats
  } = useEnhancedTaskManager();

  const [showAddForm, setShowAddForm] = useState(false);
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('pending');

  const handleAddTask = (taskData: Omit<UserTask, 'id' | 'createdDate' | 'completed' | 'completedDate'>) => {
    addTask(taskData);
    setShowAddForm(false);
  };

  const stats = getTaskStats();
  const templates: any[] = []; // Placeholder for templates

  const filteredTasks = filter === 'all' 
    ? tasks 
    : filter === 'pending'
    ? tasks.filter(task => !task.completed)
    : tasks.filter(task => task.completed);

  // Sort tasks by priority and due date
  const priorityOrder = { high: 3, medium: 2, low: 1 };
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    // First by completion status
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    
    // Then by priority
    const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
    if (priorityDiff !== 0) return priorityDiff;
    
    // Finally by due date
    if (a.dueDate && b.dueDate) {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }
    if (a.dueDate) return -1;
    if (b.dueDate) return 1;
    
    return 0;
  });

  if (loading) {
    return (
      <div className="px-4 py-6">
        <div className="animate-pulse space-y-4">
          <div className="h-32 bg-gray-200 rounded-xl"></div>
          <div className="h-20 bg-gray-200 rounded-xl"></div>
          <div className="h-20 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 space-y-6">
      
      {/* 📊 Task Statistics */}
      <TaskStatsCard stats={stats} />

      {/* 🔍 Filters and Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="pending">Pendientes ({stats.pending})</option>
            <option value="all">Todas ({tasks.length})</option>
            <option value="completed">Completadas ({stats.completed})</option>
          </select>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Nueva</span>
        </button>
      </div>

      {/* ➕ Add Task Form */}
      <AnimatePresence>
        {showAddForm && (
          <QuickAddForm
            onAdd={handleAddTask}
            onCancel={() => setShowAddForm(false)}
            templates={templates}
            onAddFromTemplate={() => {}} // Placeholder
          />
        )}
      </AnimatePresence>

      {/* 📋 Task List */}
      <div className="space-y-3">
        <AnimatePresence>
          {sortedTasks.map(task => (
            <EnhancedTaskItem
              key={task.id}
              task={task}
              onToggleComplete={toggleTask}
              onEdit={() => {}} // TODO: Implement edit functionality
              onDelete={() => {}} // TODO: Implement delete functionality
            />
          ))}
        </AnimatePresence>

        {sortedTasks.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p className="text-sm mb-2">
              {filter === 'all' ? 'No hay tareas creadas' : 
               filter === 'pending' ? 'No hay tareas pendientes' : 
               'No hay tareas completadas'}
            </p>
            {filter === 'pending' && stats.completed > 0 && (
              <p className="text-xs text-gray-400">
                ¡Excelente! Has completado todas tus tareas pendientes.
              </p>
            )}
            {filter === 'all' && (
              <button
                onClick={() => setShowAddForm(true)}
                className="mt-2 text-blue-600 text-sm font-medium hover:text-blue-700"
              >
                Crear tu primera tarea
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
