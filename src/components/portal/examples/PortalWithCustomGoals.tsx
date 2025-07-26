// Example integration of customizable goals system
// This shows how to use the updated portal components

import React, { useState } from 'react';
import { 
  SimpleDashboardOverview, 
  ProgresoSection, 
  DashboardOverview 
} from '../dashboard';
import { GoalSetting } from '../ui';
import type { UserGoal } from '../../../types/portal';

// BusinessGoal type from GoalSetting component
interface BusinessGoal {
  amount: number;
  period: 'mensuales' | 'anuales';
  description: string;
  target_date?: string;
}

const PortalWithCustomGoals: React.FC = () => {
  // Example user goal state - this would come from your API/database
  const [userGoal, setUserGoal] = useState<UserGoal>({
    amount: 50000,
    period: 'mensuales',
    description: 'Generar ingresos estables mensuales',
    current: 12450
  });

  const [showGoalSetting, setShowGoalSetting] = useState(false);

  const handleGoalUpdate = (newGoal: BusinessGoal) => {
    setUserGoal(prev => ({
      ...prev,
      ...newGoal
    }));
    setShowGoalSetting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Goal Setting Modal/Section */}
      {showGoalSetting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Actualizar Mi Meta</h2>
              <GoalSetting
                onGoalUpdate={handleGoalUpdate}
                currentGoal={userGoal}
              />
              <button
                onClick={() => setShowGoalSetting(false)}
                className="mt-4 w-full bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Portal Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Header with goal editing option */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Mi Dashboard</h1>
          <button
            onClick={() => setShowGoalSetting(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Editar Meta
          </button>
        </div>

        {/* Dashboard Sections */}
        <div className="space-y-8">
          {/* Simple Dashboard - Main overview */}
          <SimpleDashboardOverview userGoal={userGoal} />
          
          {/* Advanced Dashboard - Detailed metrics */}
          <DashboardOverview userGoal={userGoal} />
          
          {/* Progress Section - Milestone tracking */}
          <ProgresoSection userGoal={userGoal} />
        </div>
      </div>
    </div>
  );
};

export default PortalWithCustomGoals;

/* 
Example of different goal configurations:

// Conservative MYPE
const conservativeGoal: UserGoal = {
  amount: 10000,
  period: 'mensuales',
  description: 'Cubrir gastos básicos y generar ahorro',
  current: 3500
};

// Growth-focused MYPE  
const growthGoal: UserGoal = {
  amount: 250000,
  period: 'anuales',
  description: 'Escalar negocio y contratar empleados',
  current: 45000
};

// Service-based business
const serviceGoal: UserGoal = {
  amount: 75000,
  period: 'mensuales',
  description: 'Consolidar cartera de clientes premium',
  current: 22000
};
*/
