'use client';

import { useState, useEffect } from 'react';
import { Calendar, Target, CheckCircle, Clock, TrendingUp, Award, Flag, Plus, Edit, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface Goal {
  id: string;
  title: string;
  description: string;
  category: 'ventas' | 'marketing' | 'operaciones' | 'finanzas';
  deadline: string;
  progress: number;
  completed: boolean;
  createdAt: string;
  milestones: Milestone[];
}

interface Milestone {
  id: string;
  title: string;
  completed: boolean;
  completedAt?: string;
}

export default function Progreso90DPage() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    category: 'ventas' as const,
    deadline: ''
  });

  useEffect(() => {
    const savedGoals = localStorage.getItem('90d-goals');
    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    } else {
      const initialGoals: Goal[] = [
        {
          id: '1',
          title: 'Incrementar ventas 30%',
          description: 'Aumentar las ventas mensuales de S/5,000 a S/6,500',
          category: 'ventas',
          deadline: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          progress: 65,
          completed: false,
          createdAt: new Date().toISOString(),
          milestones: [
            { id: '1-1', title: 'Implementar WhatsApp Business', completed: true, completedAt: new Date().toISOString() },
            { id: '1-2', title: 'Crear 5 templates de mensajes', completed: true, completedAt: new Date().toISOString() },
            { id: '1-3', title: 'Automatizar follow-up', completed: false },
            { id: '1-4', title: 'Analizar métricas semanalmente', completed: false }
          ]
        },
        {
          id: '2',
          title: 'Presencia digital completa',
          description: 'Establecer presencia sólida en redes sociales y Google',
          category: 'marketing',
          deadline: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          progress: 40,
          completed: false,
          createdAt: new Date().toISOString(),
          milestones: [
            { id: '2-1', title: 'Optimizar Google My Business', completed: true, completedAt: new Date().toISOString() },
            { id: '2-2', title: 'Crear contenido para redes sociales', completed: false },
            { id: '2-3', title: 'Configurar Facebook Ads', completed: false },
            { id: '2-4', title: 'Implementar sistema de reseñas', completed: false }
          ]
        }
      ];
      setGoals(initialGoals);
      localStorage.setItem('90d-goals', JSON.stringify(initialGoals));
    }
  }, []);

  const addGoal = () => {
    if (!newGoal.title || !newGoal.deadline) {
      alert('Título y fecha límite son obligatorios');
      return;
    }

    const goal: Goal = {
      id: Date.now().toString(),
      title: newGoal.title,
      description: newGoal.description,
      category: newGoal.category,
      deadline: newGoal.deadline,
      progress: 0,
      completed: false,
      createdAt: new Date().toISOString(),
      milestones: []
    };

    const updatedGoals = [...goals, goal];
    setGoals(updatedGoals);
    localStorage.setItem('90d-goals', JSON.stringify(updatedGoals));

    setNewGoal({ title: '', description: '', category: 'ventas', deadline: '' });
    setShowAddGoal(false);
  };

  const toggleMilestone = (goalId: string, milestoneId: string) => {
    const updatedGoals = goals.map(goal => {
      if (goal.id === goalId) {
        const updatedMilestones = goal.milestones.map(milestone => {
          if (milestone.id === milestoneId) {
            return {
              ...milestone,
              completed: !milestone.completed,
              completedAt: !milestone.completed ? new Date().toISOString() : undefined
            };
          }
          return milestone;
        });

        const completedMilestones = updatedMilestones.filter(m => m.completed).length;
        const progress = Math.round((completedMilestones / updatedMilestones.length) * 100);
        
        return {
          ...goal,
          milestones: updatedMilestones,
          progress,
          completed: progress === 100
        };
      }
      return goal;
    });

    setGoals(updatedGoals);
    localStorage.setItem('90d-goals', JSON.stringify(updatedGoals));
  };

  const calculateOverallProgress = () => {
    if (goals.length === 0) return 0;
    const totalProgress = goals.reduce((sum, goal) => sum + goal.progress, 0);
    return Math.round(totalProgress / goals.length);
  };

  const getDaysRemaining = (deadline: string) => {
    const now = new Date();
    const end = new Date(deadline);
    const diffTime = end.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      ventas: 'bg-green-500',
      marketing: 'bg-blue-500',
      operaciones: 'bg-yellow-500',
      finanzas: 'bg-purple-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  const overallProgress = calculateOverallProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">🎯 Plan de 90 Días</h1>
            <p className="text-gray-600">Transforma tu negocio en 3 meses</p>
          </div>
          <button
            onClick={() => setShowAddGoal(!showAddGoal)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Nueva Meta
          </button>
        </div>

        {/* Overall Progress */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Progreso General</h3>
            <div className="text-3xl font-bold text-green-600">{overallProgress}%</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-green-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{goals.length}</div>
              <div className="text-sm text-gray-600">Metas Totales</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{goals.filter(g => g.completed).length}</div>
              <div className="text-sm text-gray-600">Completadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{goals.filter(g => !g.completed && g.progress > 0).length}</div>
              <div className="text-sm text-gray-600">En Progreso</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {goals.reduce((sum, goal) => sum + goal.milestones.length, 0)}
              </div>
              <div className="text-sm text-gray-600">Hitos Totales</div>
            </div>
          </div>
        </div>

        {/* Add Goal Form */}
        {showAddGoal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg mb-6"
          >
            <h3 className="text-xl font-semibold mb-4">Nueva Meta</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Título de la meta"
                value={newGoal.title}
                onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500"
              />
              <select
                value={newGoal.category}
                onChange={(e) => setNewGoal({...newGoal, category: e.target.value as any})}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="ventas">Ventas</option>
                <option value="marketing">Marketing</option>
                <option value="operaciones">Operaciones</option>
                <option value="finanzas">Finanzas</option>
              </select>
            </div>
            <textarea
              placeholder="Descripción detallada"
              value={newGoal.description}
              onChange={(e) => setNewGoal({...newGoal, description: e.target.value})}
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 mb-4"
            />
            <input
              type="date"
              value={newGoal.deadline}
              onChange={(e) => setNewGoal({...newGoal, deadline: e.target.value})}
              className="w-full md:w-auto px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 mb-4"
            />
            <div className="flex gap-4">
              <button
                onClick={addGoal}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                Crear Meta
              </button>
              <button
                onClick={() => setShowAddGoal(false)}
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300"
              >
                Cancelar
              </button>
            </div>
          </motion.div>
        )}

        {/* Goals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {goals.map(goal => {
            const daysRemaining = getDaysRemaining(goal.deadline);
            return (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${getCategoryColor(goal.category)}`} />
                    <span className="text-sm font-medium text-gray-600 capitalize">{goal.category}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {daysRemaining > 0 ? `${daysRemaining} días` : 'Vencido'}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{goal.title}</h3>
                <p className="text-gray-600 mb-4">{goal.description}</p>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Progreso</span>
                    <span className="text-sm font-bold text-green-600">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-700 mb-3">Hitos:</h4>
                  {goal.milestones.map(milestone => (
                    <div key={milestone.id} className="flex items-center gap-3">
                      <button
                        onClick={() => toggleMilestone(goal.id, milestone.id)}
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                          milestone.completed 
                            ? 'bg-green-600 border-green-600 text-white' 
                            : 'border-gray-300 hover:border-green-500'
                        }`}
                      >
                        {milestone.completed && <CheckCircle className="w-3 h-3" />}
                      </button>
                      <span className={`text-sm ${milestone.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                        {milestone.title}
                      </span>
                    </div>
                  ))}
                </div>

                {goal.completed && (
                  <div className="mt-4 p-3 bg-green-50 rounded-lg flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium">¡Meta completada!</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {goals.length === 0 && (
          <div className="text-center py-12">
            <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No tienes metas definidas</h3>
            <p className="text-gray-500">Crea tu primera meta para comenzar tu transformación de 90 días</p>
          </div>
        )}
      </div>
    </div>
  );
}
