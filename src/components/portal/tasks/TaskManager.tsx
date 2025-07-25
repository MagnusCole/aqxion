'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Plus, 
  Clock, 
  Target,
  Star,
  Trash2,
  Edit2,
  Filter,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { useMYPEUserData } from '@/hooks/useMYPEUserData';

export default function TaskManager() {
  const { userData, addTask, completeTask, addActivity } = useMYPEUserData();
  const [showAddForm, setShowAddForm] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'setup' | 'marketing' | 'maintenance' | 'growth'>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'completed'>('all');
  
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    type: 'marketing' as 'setup' | 'marketing' | 'maintenance' | 'growth',
    priority: 'medium' as 'high' | 'medium' | 'low',
    estimatedMinutes: 15,
    points: 50,
    dueDate: ''
  });

  const handleAddTask = () => {
    if (!newTask.title.trim()) return;

    addTask({
      title: newTask.title,
      description: newTask.description,
      type: newTask.type,
      priority: newTask.priority,
      estimatedMinutes: newTask.estimatedMinutes,
      points: newTask.points,
      completed: false,
      dueDate: newTask.dueDate || undefined
    });

    // Reset form
    setNewTask({
      title: '',
      description: '',
      type: 'marketing',
      priority: 'medium',
      estimatedMinutes: 15,
      points: 50,
      dueDate: ''
    });
    setShowAddForm(false);
  };

  const filteredTasks = userData?.pendingTasks.filter(task => {
    const matchesType = filterType === 'all' || task.type === filterType;
    const matchesStatus = filterStatus === 'all' || 
                         (filterStatus === 'completed' && task.completed) ||
                         (filterStatus === 'pending' && !task.completed);
    return matchesType && matchesStatus;
  }) || [];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'setup': return 'bg-blue-100 text-blue-800';
      case 'marketing': return 'bg-purple-100 text-purple-800';
      case 'maintenance': return 'bg-orange-100 text-orange-800';
      case 'growth': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const completedTasks = filteredTasks.filter(t => t.completed).length;
  const pendingTasks = filteredTasks.filter(t => !t.completed).length;
  const totalPoints = filteredTasks.filter(t => t.completed).reduce((sum, t) => sum + t.points, 0);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Gestión de Tareas</h1>
            <p className="text-gray-600">
              Organiza y completa las tareas para hacer crecer tu negocio
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Nueva Tarea
          </button>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600">{userData?.pendingTasks.length || 0}</div>
            <div className="text-sm text-blue-600">Total Tareas</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600">{completedTasks}</div>
            <div className="text-sm text-green-600">Completadas</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-orange-600">{pendingTasks}</div>
            <div className="text-sm text-orange-600">Pendientes</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-600">{totalPoints}</div>
            <div className="text-sm text-purple-600">Puntos Ganados</div>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-col sm:flex-row gap-4">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Todos los tipos</option>
            <option value="setup">Configuración</option>
            <option value="marketing">Marketing</option>
            <option value="maintenance">Mantenimiento</option>
            <option value="growth">Crecimiento</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Todos los estados</option>
            <option value="pending">Pendientes</option>
            <option value="completed">Completadas</option>
          </select>
        </div>
      </motion.div>

      {/* Modal de agregar tarea */}
      {showAddForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Nueva Tarea</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Título de la tarea *
                </label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) => setNewTask(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Ej: Actualizar fotos del negocio"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descripción
                </label>
                <textarea
                  value={newTask.description}
                  onChange={(e) => setNewTask(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe qué hay que hacer..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo
                  </label>
                  <select
                    value={newTask.type}
                    onChange={(e) => setNewTask(prev => ({ ...prev, type: e.target.value as any }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="setup">Configuración</option>
                    <option value="marketing">Marketing</option>
                    <option value="maintenance">Mantenimiento</option>
                    <option value="growth">Crecimiento</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prioridad
                  </label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask(prev => ({ ...prev, priority: e.target.value as any }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="high">Alta</option>
                    <option value="medium">Media</option>
                    <option value="low">Baja</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tiempo estimado (min)
                  </label>
                  <input
                    type="number"
                    value={newTask.estimatedMinutes}
                    onChange={(e) => setNewTask(prev => ({ ...prev, estimatedMinutes: parseInt(e.target.value) || 15 }))}
                    min="1"
                    max="480"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Puntos
                  </label>
                  <input
                    type="number"
                    value={newTask.points}
                    onChange={(e) => setNewTask(prev => ({ ...prev, points: parseInt(e.target.value) || 50 }))}
                    min="10"
                    max="500"
                    step="10"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha límite (opcional)
                </label>
                <input
                  type="date"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask(prev => ({ ...prev, dueDate: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddTask}
                disabled={!newTask.title.trim()}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 transition-colors"
              >
                Crear Tarea
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Lista de tareas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl shadow-sm overflow-hidden"
      >
        {filteredTasks.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {filteredTasks.map((task) => (
              <div key={task.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <button
                      onClick={() => !task.completed && completeTask(task.id)}
                      className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        task.completed 
                          ? 'bg-green-500 border-green-500' 
                          : 'border-gray-300 hover:border-green-500'
                      }`}
                    >
                      {task.completed && <CheckCircle className="h-3 w-3 text-white" />}
                    </button>
                    
                    <div className="flex-1">
                      <h3 className={`font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                        {task.title}
                      </h3>
                      {task.description && (
                        <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                      )}
                      
                      <div className="flex items-center gap-3 mt-2 text-xs">
                        <span className={`px-2 py-1 rounded-full ${getTypeColor(task.type)}`}>
                          {task.type === 'setup' ? 'Configuración' :
                           task.type === 'marketing' ? 'Marketing' :
                           task.type === 'maintenance' ? 'Mantenimiento' : 'Crecimiento'}
                        </span>
                        
                        <span className={`px-2 py-1 rounded border ${getPriorityColor(task.priority)}`}>
                          {task.priority === 'high' ? 'Alta' : 
                           task.priority === 'medium' ? 'Media' : 'Baja'}
                        </span>
                        
                        <span className="flex items-center gap-1 text-gray-500">
                          <Clock className="h-3 w-3" />
                          {task.estimatedMinutes} min
                        </span>
                        
                        <span className="flex items-center gap-1 text-gray-500">
                          <Star className="h-3 w-3" />
                          {task.points} pts
                        </span>
                        
                        {task.dueDate && (
                          <span className="flex items-center gap-1 text-gray-500">
                            <Calendar className="h-3 w-3" />
                            {new Date(task.dueDate).toLocaleDateString('es-PE')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center">
            <Target className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <h3 className="font-medium text-gray-900 mb-1">
              {filterType !== 'all' || filterStatus !== 'all' 
                ? 'No hay tareas con esos filtros'
                : 'No tienes tareas creadas'
              }
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              {filterType === 'all' && filterStatus === 'all'
                ? 'Empieza agregando tu primera tarea para organizar tu trabajo'
                : 'Prueba cambiando los filtros para ver más tareas'
              }
            </p>
            {filterType === 'all' && filterStatus === 'all' && (
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Crear Primera Tarea
              </button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
