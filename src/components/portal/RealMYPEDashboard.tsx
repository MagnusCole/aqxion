'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { PortalHeader, DashboardTabs } from './ui';
import { 
  SimpleDashboardOverview,
  NichoSection, 
  OfertaSection, 
  CampanaSection, 
  ProgresoSection 
} from './dashboard';
import type { UserGoal } from '../../types/portal';

/**
 * MYPERU - Main Dashboard (Mobile First)
 * Single responsibility: Route between dashboard sections
 * Simplified architecture with modular components
 */

type TabType = 'dashboard' | 'nicho' | 'oferta' | 'campana' | 'progreso';

const RealMYPEDashboard: React.FC = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  // Mock user goal - In production, this comes from API/context
  const userGoal: UserGoal = {
    amount: 50000,
    period: 'mensuales',
    description: 'Generar ingresos estables mensuales',
    current: 12450
  };

  // Handle URL tab parameter
  useEffect(() => {
    const tab = searchParams.get('tab') as TabType;
    if (tab && ['dashboard', 'nicho', 'oferta', 'campana', 'progreso'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as TabType);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <SimpleDashboardOverview userGoal={userGoal} />;
      case 'nicho':
        return <NichoSection />;
      case 'oferta':
        return <OfertaSection />;
      case 'campana':
        return <CampanaSection />;
      case 'progreso':
        return <ProgresoSection userGoal={userGoal} />;
      default:
        return <SimpleDashboardOverview userGoal={userGoal} />;
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* iOS-style header */}
      <div className="bg-white border-b border-gray-200">
        <PortalHeader userGoal={userGoal} />
        <DashboardTabs activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
      
      {/* Content area */}
      <div className="px-4 py-6 max-w-md mx-auto">
        {renderContent()}
      </div>
    </main>
  );
};

export default React.memo(RealMYPEDashboard);
