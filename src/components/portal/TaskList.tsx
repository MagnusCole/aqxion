'use client';

import React, { useState } from 'react';
import { Check, X, Clock, AlertTriangle } from 'lucide-react';

interface Task {
  id: string | number;
  title: string;
  description?: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  category?: string;
  isCompleted?: boolean;
  estimatedTime?: string;
}

interface TaskListProps {
  tasks: Task[];
  title?: string;
  onTaskToggle?: (taskId: string | number) => void;
  onTaskDelete?: (taskId: string | number) => void;
  showCompleted?: boolean;
  className?: string;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  title,
  onTaskToggle,
  onTaskDelete,
  showCompleted = true,
  className = ''
}) => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-green-50 text-green-700 border-green-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getPriorityLabel = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'Alta';
      case 'medium':
        return 'Media';
      case 'low':
        return 'Baja';
      default:
        return 'Normal';
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'pending') return !task.isCompleted;
    if (filter === 'completed') return task.isCompleted;
    return true;
  });

  const pendingCount = tasks.filter(task => !task.isCompleted).length;
  const completedCount = tasks.filter(task => task.isCompleted).length;

  return (
    <div className={`bg-white rounded-xl p-6 shadow border border-gray-100 ${className}`}>
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-500">
              {pendingCount} pendientes, {completedCount} completadas
            </span>
          </div>
        </div>
      )}

      {/* Filter tabs */}
      <div className="flex gap-1 mb-4">
        {[
          { key: 'all' as const, label: 'Todas', count: tasks.length },
          { key: 'pending' as const, label: 'Pendientes', count: pendingCount },
          { key: 'completed' as const, label: 'Completadas', count: completedCount }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              filter === tab.key
                ? 'bg-red-100 text-red-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Tasks */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Clock className="w-8 h-8 mx-auto mb-2 text-gray-300" />
            <p className="text-sm">No hay tareas {filter === 'pending' ? 'pendientes' : filter === 'completed' ? 'completadas' : 'disponibles'}</p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-start gap-3 p-3 border rounded-lg transition-all ${
                task.isCompleted 
                  ? 'bg-gray-50 border-gray-200 opacity-75' 
                  : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
              }`}
            >
              {/* Checkbox */}
              <button
                onClick={() => onTaskToggle?.(task.id)}
                className={`w-4 h-4 rounded border-2 flex items-center justify-center mt-0.5 transition-colors ${
                  task.isCompleted
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {task.isCompleted && <Check className="w-3 h-3" />}
              </button>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className={`font-medium text-sm leading-tight ${
                    task.isCompleted ? 'text-gray-500 line-through' : 'text-gray-900'
                  }`}>
                    {task.title}
                  </h3>
                  
                  {onTaskDelete && (
                    <button
                      onClick={() => onTaskDelete(task.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {task.description && (
                  <p className={`text-xs mt-1 leading-relaxed ${
                    task.isCompleted ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {task.description}
                  </p>
                )}

                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                    {task.priority === 'high' && <AlertTriangle className="w-3 h-3 inline mr-1" />}
                    {getPriorityLabel(task.priority)}
                  </span>
                  
                  <span className="text-xs text-gray-500">
                    Vence: {task.dueDate}
                  </span>

                  {task.estimatedTime && (
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {task.estimatedTime}
                    </span>
                  )}

                  {task.category && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                      {task.category}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;
