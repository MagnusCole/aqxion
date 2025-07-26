'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Edit, Check, X } from 'lucide-react';
import { SimpleLargeButton, HelpTooltip } from '../ui';

/**
 * Goal Setting Component - Personalizable business goals
 * Allows users to set and modify their revenue targets
 * Simple interface for MYPEs to define success
 */

interface BusinessGoal {
  amount: number;
  period: 'mensuales' | 'anuales';
  description: string;
  target_date?: string;
}

interface GoalSettingProps {
  readonly currentGoal?: BusinessGoal;
  readonly onGoalUpdate?: (goal: BusinessGoal) => void;
}

const GoalSetting: React.FC<GoalSettingProps> = ({
  currentGoal = {
    amount: 50000,
    period: 'mensuales',
    description: 'Meta de ingresos'
  },
  onGoalUpdate
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editGoal, setEditGoal] = useState<BusinessGoal>(currentGoal);

  const handleSave = () => {
    onGoalUpdate?.(editGoal);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditGoal(currentGoal);
    setIsEditing(false);
  };

  const suggestedGoals = [
    { amount: 10000, period: 'mensuales' as const, label: 'Emprendedor' },
    { amount: 25000, period: 'mensuales' as const, label: 'MYPE Creciendo' },
    { amount: 50000, period: 'mensuales' as const, label: 'MYPE Establecida' },
    { amount: 100000, period: 'mensuales' as const, label: 'Pequeña Empresa' },
    { amount: 500000, period: 'anuales' as const, label: 'Empresa Mediana' }
  ];

  return (
    <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <Target className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Mi Meta de Ingresos</h2>
          <p className="text-sm lg:text-base text-gray-600">Define el éxito de tu negocio</p>
        </div>
        <HelpTooltip
          title="¿Por qué definir una meta?"
          content="Tener una meta clara te ayuda a enfocar tus esfuerzos y medir tu progreso. El sistema adapta las recomendaciones según tu objetivo."
          examples={[
            "Estrategias adaptadas a tu meta",
            "Progreso medible mes a mes",
            "Alertas cuando te desvías"
          ]}
        />
      </div>

      {!isEditing ? (
        // Vista de Meta Actual
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          {/* Meta Actual */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">
                S/ {currentGoal.amount.toLocaleString()}
              </div>
              <div className="text-lg text-green-700 mb-4">
                {currentGoal.period}
              </div>
              <p className="text-sm text-gray-600">{currentGoal.description}</p>
            </div>
          </div>

          {/* Botón Editar */}
          <SimpleLargeButton
            icon={Edit}
            label="Cambiar Mi Meta"
            description="Ajusta tu objetivo según tu negocio"
            color="info"
            onClick={() => setIsEditing(true)}
          />
        </motion.div>
      ) : (
        // Vista de Edición
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Metas Sugeridas */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Metas Sugeridas</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {suggestedGoals.map((goal) => (
                <button
                  key={`${goal.amount}-${goal.period}`}
                  onClick={() => setEditGoal({
                    ...editGoal,
                    amount: goal.amount,
                    period: goal.period
                  })}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    editGoal.amount === goal.amount && editGoal.period === goal.period
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold text-gray-900">{goal.label}</div>
                  <div className="text-sm text-gray-600">
                    S/ {goal.amount.toLocaleString()} {goal.period}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Meta Personalizada */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Meta Personalizada</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cantidad (en soles)
                </label>
                <input
                  type="number"
                  value={editGoal.amount}
                  onChange={(e) => setEditGoal({
                    ...editGoal,
                    amount: parseInt(e.target.value) || 0
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="50000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Período
                </label>
                <select
                  value={editGoal.period}
                  onChange={(e) => setEditGoal({
                    ...editGoal,
                    period: e.target.value as 'mensuales' | 'anuales'
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                >
                  <option value="mensuales">Mensuales</option>
                  <option value="anuales">Anuales</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descripción (opcional)
                </label>
                <input
                  type="text"
                  value={editGoal.description}
                  onChange={(e) => setEditGoal({
                    ...editGoal,
                    description: e.target.value
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Meta de ingresos"
                />
              </div>
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="flex gap-4">
            <SimpleLargeButton
              icon={Check}
              label="Guardar Meta"
              description="Aplicar cambios a mi objetivo"
              color="success"
              onClick={handleSave}
            />
            <SimpleLargeButton
              icon={X}
              label="Cancelar"
              description="Mantener meta actual"
              color="secondary"
              onClick={handleCancel}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default React.memo(GoalSetting);
