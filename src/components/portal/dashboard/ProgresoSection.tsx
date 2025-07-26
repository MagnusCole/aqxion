'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Calendar, TrendingUp, Award, Target, Clock } from 'lucide-react';

// Types
interface UserGoal {
  amount: number;
  period: 'mensuales' | 'anuales';
  description: string;
  current: number;
}

interface ProgresoSectionProps {
  userGoal: UserGoal;
}

/**
 * Progress Tracking Component
 * Single responsibility: Display user progress towards custom goal
 * Mobile-first with visual progress indicators
 */

const ProgresoSection: React.FC<ProgresoSectionProps> = ({ userGoal }) => {
  const progressPercentage = Math.round((userGoal.current / userGoal.amount) * 100);
  
  const milestones = [
    {
      title: 'Primeros S/ 1,000',
      description: 'Validación del modelo de negocio',
      completed: userGoal.current >= 1000,
      date: userGoal.current >= 1000 ? '15 Ene 2025' : 'Pendiente',
      amount: userGoal.current >= 1000 ? 'S/ 1,200' : 'En progreso'
    },
    {
      title: `25% de tu meta`,
      description: `Primer cuarto: S/ ${Math.round(userGoal.amount * 0.25).toLocaleString()}`,
      completed: userGoal.current >= userGoal.amount * 0.25,
      date: userGoal.current >= userGoal.amount * 0.25 ? '28 Feb 2025' : 'Meta: Jun 2025',
      amount: userGoal.current >= userGoal.amount * 0.25 ? `S/ ${Math.round(userGoal.amount * 0.25).toLocaleString()}` : 'En progreso'
    },
    {
      title: `75% de tu meta`,
      description: `Casi llegando: S/ ${Math.round(userGoal.amount * 0.75).toLocaleString()}`,
      completed: userGoal.current >= userGoal.amount * 0.75,
      date: userGoal.current >= userGoal.amount * 0.75 ? 'Completado' : 'Meta: Jun 2025',
      amount: userGoal.current >= userGoal.amount * 0.75 ? `S/ ${Math.round(userGoal.amount * 0.75).toLocaleString()}` : 'En progreso'
    },
    {
      title: 'Meta completa',
      description: userGoal.description,
      completed: userGoal.current >= userGoal.amount,
      date: userGoal.current >= userGoal.amount ? 'Completado' : 'Meta: Dic 2025',
      amount: userGoal.current >= userGoal.amount ? `S/ ${userGoal.amount.toLocaleString()}` : `S/ ${userGoal.amount.toLocaleString()}`
    }
  ];

  const weeklyGoals = [
    { task: 'Generar 15 leads nuevos', completed: true, priority: 'alta' },
    { task: 'Crear 5 posts de contenido', completed: true, priority: 'media' },
    { task: 'Seguimiento a 10 prospectos', completed: false, priority: 'alta' },
    { task: 'Optimizar campaña publicitaria', completed: false, priority: 'media' },
    { task: 'Revisar métricas semanales', completed: false, priority: 'baja' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CheckSquare className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Mi Progreso Personal</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Seguimiento hacia {userGoal.description}
        </p>
      </motion.div>

      {/* Overall Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 text-white"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold">Progreso General</h3>
            <p className="opacity-90">S/ {userGoal.current.toLocaleString()} de S/ {userGoal.amount.toLocaleString()} {userGoal.period}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{progressPercentage}%</div>
            <div className="text-sm opacity-90">completado</div>
          </div>
        </div>
        
        <div className="w-full bg-white/20 rounded-full h-3 mb-2">
          <div className="bg-white rounded-full h-3 transition-all duration-1000" style={{ width: '24%' }}></div>
        </div>
        
        <div className="flex justify-between text-sm opacity-90">
          <span>Ene 2025</span>
          <span>Meta: Dic 2025</span>
        </div>
      </motion.div>

      {/* Milestones */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-6 border border-gray-100"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Hitos Importantes</h3>
        
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${
                milestone.completed ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                milestone.completed ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                {milestone.completed ? <Award className="w-6 h-6" /> : <Target className="w-6 h-6" />}
              </div>
              
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{milestone.description}</p>
                <div className="flex items-center gap-4 text-xs">
                  <span className={`px-2 py-1 rounded-full ${
                    milestone.completed ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {milestone.date}
                  </span>
                  <span className="font-medium text-purple-600">{milestone.amount}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Weekly Goals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-2xl p-6 border border-gray-100"
      >
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-900">Objetivos Esta Semana</h3>
        </div>
        
        <div className="space-y-3">
          {weeklyGoals.map((goal, index) => {
            const priorityColor = {
              'alta': 'bg-red-100 text-red-700 border-red-200',
              'media': 'bg-yellow-100 text-yellow-700 border-yellow-200',
              'baja': 'bg-gray-100 text-gray-700 border-gray-200'
            }[goal.priority];

            return (
              <motion.div
                key={goal.task}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 + 0.7 }}
                className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                  goal.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  goal.completed 
                    ? 'bg-green-500 border-green-500' 
                    : 'border-gray-300 hover:border-purple-400'
                }`}>
                  {goal.completed && <CheckSquare className="w-3 h-3 text-white" />}
                </div>
                
                <div className="flex-1">
                  <span className={`text-sm ${goal.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                    {goal.task}
                  </span>
                </div>
                
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${priorityColor}`}>
                  {goal.priority}
                </span>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-4 text-center">
          <div className="text-sm text-gray-600">
            Completado: <span className="font-semibold text-green-600">2 de 5</span> objetivos
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-green-500 rounded-full h-2 transition-all duration-500" style={{ width: '40%' }}></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(ProgresoSection);
