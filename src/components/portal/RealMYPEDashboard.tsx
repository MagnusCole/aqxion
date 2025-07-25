import React from 'react';
import { useMYPEUserData } from '@/hooks/useMYPEUserData';
import { useMetrics, useTasks } from '@/hooks/portal';
import { MetricsGrid, ProgressBar, QuickActions, TasksList } from './dashboard';
import type { Metrics } from '@/types/portal';

/**
 * MYPEDashboard - Main Orchestrator Component
 * iOS-native dashboard following Apple HIG
 * Composition over inheritance pattern
 */
export default function MYPEDashboard() {
  const { userData, loading: userLoading } = useMYPEUserData();
  const { metrics, updateMetric, loading: metricsLoading } = useMetrics();
  const { 
    tasks, 
    addTask, 
    toggleTask, 
    deleteTask, 
    progressPercentage,
    completedCount,
    totalCount,
    loading: tasksLoading 
  } = useTasks();

  const loading = userLoading || metricsLoading || tasksLoading;

  const handleMetricClick = (key: keyof Metrics) => {
    const newValue = prompt(`Nuevo valor para ${key}:`, metrics[key].toString());
    if (newValue !== null) {
      const numValue = parseInt(newValue, 10);
      if (!isNaN(numValue)) {
        updateMetric(key, numValue);
      }
    }
  };

  const handleAddTask = () => {
    const taskText = prompt('Nueva tarea:');
    if (taskText) {
      addTask(taskText);
    }
  };

  const handleNavigate = (href: string) => {
    console.log(`Navigate to: ${href}`);
    // TODO: Implement router navigation
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  const businessName = userData?.businessInfo?.name || 'Tu Negocio';
  const firstName = businessName.split(' ')[0];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        
        {/* iOS Status Bar Space */}
        <div className="h-11 bg-white" />
        
        {/* Header - iOS Style */}
        <header className="px-4 pb-6 bg-white" role="banner">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Hola, {firstName}
              </h1>
              <p className="text-gray-500 text-sm">
                {new Date().toLocaleDateString('es-PE', { 
                  weekday: 'long', 
                  day: 'numeric', 
                  month: 'long' 
                })}
              </p>
            </div>
          </div>
        </header>

        {/* Composed Dashboard Sections */}
        <MetricsGrid 
          metrics={metrics}
          onMetricClick={handleMetricClick}
          loading={metricsLoading}
        />

        <ProgressBar 
          progress={progressPercentage}
          completed={completedCount}
          total={totalCount}
        />

        <QuickActions 
          onActionClick={handleNavigate}
          loading={false}
        />

        <TasksList 
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onAddTask={handleAddTask}
          loading={tasksLoading}
        />

        {/* iOS Home Indicator */}
        <div className="h-8 flex items-center justify-center">
          <div className="w-32 h-1 bg-gray-300 rounded-full" />
        </div>
      </div>
    </main>
  );
}
