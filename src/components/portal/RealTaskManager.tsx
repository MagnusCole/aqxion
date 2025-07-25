'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, CheckCircle, Circle, Trash2, Edit3, X, Save } from 'lucide-react';

interface RealTask {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  createdAt: string;
  completedAt?: string;
}

export default function RealTaskManager() {
  const [tasks, setTasks] = useState<RealTask[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingTask, setEditingTask] = useState<string | null>(null);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'medium' as RealTask['priority']
  });

  // Cargar tareas del localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem('aqxion_user_tasks');
    if (savedTasks) {
      try {
        const parsed = JSON.parse(savedTasks);
        setTasks(parsed);
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    }
  }, []);

  // Guardar tareas en localStorage
  const saveTasks = (updatedTasks: RealTask[]) => {
    setTasks(updatedTasks);
    localStorage.setItem('aqxion_user_tasks', JSON.stringify(updatedTasks));
  };

  const addTask = () => {
    if (!newTask.title.trim()) return;

    const task: RealTask = {
      id: Date.now().toString(),
      title: newTask.title.trim(),
      description: newTask.description.trim(),
      completed: false,
      priority: newTask.priority,
      createdAt: new Date().toISOString()
    };

    saveTasks([task, ...tasks]);
    setNewTask({ title: '', description: '', priority: 'medium' });
    setShowAddForm(false);
  };

  const toggleTask = (taskId: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
          completedAt: !task.completed ? new Date().toISOString() : undefined
        };
      }
      return task;
    });
    saveTasks(updatedTasks);
  };

  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    saveTasks(updatedTasks);
  };

  const updateTask = (taskId: string, updates: Partial<RealTask>) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, ...updates };
      }
      return task;
    });
    saveTasks(updatedTasks);
    setEditingTask(null);
  };

  const getPriorityColor = (priority: RealTask['priority']) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityLabel = (priority: RealTask['priority']) => {
    switch (priority) {
      case 'high': return 'Alta';
      case 'medium': return 'Media';
      case 'low': return 'Baja';
      default: return 'Media';
    }
  };

  const pendingTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-medium text-gray-900">Tareas Pendientes</h3>
          <p className="text-sm text-gray-500">
            {pendingTasks.length} pendientes, {completedTasks.length} completadas
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="p-2 rounded-xl hover:bg-gray-50 transition-colors"
        >
          {showAddForm ? (
            <X className="w-4 h-4 text-gray-500" />
          ) : (
            <Plus className="w-4 h-4 text-gray-500" />
          )}
        </button>
      </div>

      {/* Formulario para agregar tarea */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 p-3 bg-gray-50 rounded-xl"
          >
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Título de la tarea..."
                value={newTask.title}
                onChange={(e) => setNewTask(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <textarea
                placeholder="Descripción (opcional)..."
                value={newTask.description}
                onChange={(e) => setNewTask(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                rows={2}
              />
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Prioridad:</label>
                <select
                  value={newTask.priority}
                  onChange={(e) => setNewTask(prev => ({ ...prev, priority: e.target.value as RealTask['priority'] }))}
                  className="px-2 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="low">Baja</option>
                  <option value="medium">Media</option>
                  <option value="high">Alta</option>
                </select>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={addTask}
                  disabled={!newTask.title.trim()}
                  className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Agregar Tarea
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lista de tareas */}
      <div className="space-y-2">
        {tasks.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <div className="text-sm">No tienes tareas aún</div>
            <div className="text-xs mt-1">Agrega tu primera tarea para empezar</div>
          </div>
        ) : (
          tasks
            .sort((a, b) => {
              // Mostrar pendientes primero, luego completadas
              if (a.completed !== b.completed) {
                return a.completed ? 1 : -1;
              }
              // Ordenar por prioridad dentro de cada grupo
              const priorityOrder = { high: 0, medium: 1, low: 2 };
              return priorityOrder[a.priority] - priorityOrder[b.priority];
            })
            .map((task) => (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`
                  p-3 border border-gray-100 rounded-xl flex items-start gap-3
                  ${task.completed ? 'opacity-60 bg-gray-50' : 'bg-white'}
                `}
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  className="mt-0.5 text-gray-400 hover:text-red-600 transition-colors"
                >
                  {task.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h4 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                        {task.title}
                      </h4>
                      {task.description && (
                        <p className={`text-sm mt-1 ${task.completed ? 'text-gray-400' : 'text-gray-600'}`}>
                          {task.description}
                        </p>
                      )}
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${getPriorityColor(task.priority)}`}>
                          {getPriorityLabel(task.priority)}
                        </span>
                        <span className="text-xs text-gray-400">
                          {new Date(task.createdAt).toLocaleDateString('es-ES')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setEditingTask(task.id)}
                        className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <Edit3 className="w-4 h-4 text-gray-400" />
                      </button>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="p-1 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
        )}
      </div>
    </div>
  );
}
