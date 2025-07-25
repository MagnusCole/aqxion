'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Save, MessageCircle, Users, TrendingUp, Calendar, Settings } from 'lucide-react';

interface RealActivity {
  id: string;
  title: string;
  description: string;
  type: 'lead' | 'content' | 'achievement' | 'meeting' | 'other';
  timestamp: string;
}

export default function RealActivityLog() {
  const [activities, setActivities] = useState<RealActivity[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newActivity, setNewActivity] = useState({
    title: '',
    description: '',
    type: 'other' as RealActivity['type']
  });

  // Cargar actividades del localStorage
  useEffect(() => {
    const savedActivities = localStorage.getItem('aqxion_user_activities');
    if (savedActivities) {
      try {
        const parsed = JSON.parse(savedActivities);
        setActivities(parsed);
      } catch (error) {
        console.error('Error loading activities:', error);
      }
    }
  }, []);

  // Guardar actividades en localStorage
  const saveActivities = (updatedActivities: RealActivity[]) => {
    setActivities(updatedActivities);
    localStorage.setItem('aqxion_user_activities', JSON.stringify(updatedActivities));
  };

  const addActivity = () => {
    if (!newActivity.title.trim()) return;

    const activity: RealActivity = {
      id: Date.now().toString(),
      title: newActivity.title.trim(),
      description: newActivity.description.trim(),
      type: newActivity.type,
      timestamp: new Date().toISOString()
    };

    // Mantener solo las últimas 20 actividades
    const updatedActivities = [activity, ...activities].slice(0, 20);
    saveActivities(updatedActivities);
    
    setNewActivity({ title: '', description: '', type: 'other' });
    setShowAddForm(false);
  };

  const getActivityIcon = (type: RealActivity['type']) => {
    switch (type) {
      case 'lead': return <Users className="w-4 h-4" />;
      case 'content': return <Calendar className="w-4 h-4" />;
      case 'achievement': return <TrendingUp className="w-4 h-4" />;
      case 'meeting': return <MessageCircle className="w-4 h-4" />;
      default: return <Settings className="w-4 h-4" />;
    }
  };

  const getActivityColor = (type: RealActivity['type']) => {
    switch (type) {
      case 'lead': return 'bg-green-100 text-green-700';
      case 'content': return 'bg-purple-100 text-purple-700';
      case 'achievement': return 'bg-yellow-100 text-yellow-700';
      case 'meeting': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeLabel = (type: RealActivity['type']) => {
    switch (type) {
      case 'lead': return 'Nuevo Lead';
      case 'content': return 'Contenido';
      case 'achievement': return 'Logro';
      case 'meeting': return 'Reunión';
      default: return 'Otro';
    }
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInHours = Math.floor((now.getTime() - time.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - time.getTime()) / (1000 * 60));
      return diffInMinutes <= 1 ? 'Hace un momento' : `Hace ${diffInMinutes} min`;
    } else if (diffInHours < 24) {
      return `Hace ${diffInHours}h`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return diffInDays === 1 ? 'Ayer' : `Hace ${diffInDays} días`;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-medium text-gray-900">Actividad Reciente</h3>
          <p className="text-sm text-gray-500">
            {activities.length} actividades registradas
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

      {/* Formulario para agregar actividad */}
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
                placeholder="¿Qué pasó en tu negocio?"
                value={newActivity.title}
                onChange={(e) => setNewActivity(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <textarea
                placeholder="Detalles adicionales..."
                value={newActivity.description}
                onChange={(e) => setNewActivity(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                rows={2}
              />
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Tipo:</label>
                <select
                  value={newActivity.type}
                  onChange={(e) => setNewActivity(prev => ({ ...prev, type: e.target.value as RealActivity['type'] }))}
                  className="px-2 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="lead">Nuevo Lead</option>
                  <option value="content">Contenido</option>
                  <option value="achievement">Logro</option>
                  <option value="meeting">Reunión</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={addActivity}
                  disabled={!newActivity.title.trim()}
                  className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Registrar Actividad
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

      {/* Lista de actividades */}
      <div className="space-y-3">
        {activities.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <div className="text-sm">No hay actividades registradas</div>
            <div className="text-xs mt-1">Registra la actividad de tu negocio</div>
          </div>
        ) : (
          activities.map((activity) => (
            <motion.div
              key={activity.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl"
            >
              <div className={`p-2 rounded-lg ${getActivityColor(activity.type)}`}>
                {getActivityIcon(activity.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">
                      {activity.title}
                    </h4>
                    {activity.description && (
                      <p className="text-sm text-gray-600 mt-1">
                        {activity.description}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getActivityColor(activity.type)}`}>
                      {getTypeLabel(activity.type)}
                    </span>
                    <div className="text-xs text-gray-400 mt-1">
                      {formatTimeAgo(activity.timestamp)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {activities.length > 0 && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="text-xs text-gray-400 text-center">
            Se guardan las últimas 20 actividades
          </div>
        </div>
      )}
    </div>
  );
}
