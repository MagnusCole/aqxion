'use client';

import React from 'react';
import { BarChart3, Lightbulb, Package, Megaphone, CheckSquare, LucideIcon } from 'lucide-react';

/**
 * Mobile-First Dashboard Navigation Tabs
 * Single responsibility: Tab navigation with world-class UX
 * Performance optimized with proper TypeScript typing
 */

interface TabConfig {
  readonly id: string;
  readonly label: string;
  readonly mobileLabel: string;
  readonly icon: LucideIcon;
  readonly color: string;
}

interface DashboardTabsProps {
  readonly activeTab: string;
  readonly onTabChange: (tab: string) => void;
}

const TABS: readonly TabConfig[] = [
  { id: 'dashboard', label: 'Dashboard', mobileLabel: 'Dashboard', icon: BarChart3, color: 'red' },
  { id: 'nicho', label: 'Mi Nicho', mobileLabel: 'Nicho', icon: Lightbulb, color: 'yellow' },
  { id: 'oferta', label: 'Mi Oferta', mobileLabel: 'Oferta', icon: Package, color: 'emerald' },
  { id: 'campana', label: 'Mi Campaña', mobileLabel: 'Campaña', icon: Megaphone, color: 'blue' },
  { id: 'progreso', label: 'Mi Progreso', mobileLabel: 'Progreso', icon: CheckSquare, color: 'purple' }
] as const;

const TabButton: React.FC<{
  readonly tab: TabConfig;
  readonly isActive: boolean;
  readonly onClick: () => void;
}> = React.memo(({ tab, isActive, onClick }) => {
  const Icon = tab.icon;
  
  return (
    <button
      onClick={onClick}
      className={`
        py-3 lg:py-4 px-2 lg:px-4 border-b-2 font-medium text-xs lg:text-sm 
        transition-all duration-200 whitespace-nowrap flex-shrink-0 
        hover:scale-105 active:scale-95
        ${isActive 
          ? `border-${tab.color}-500 text-${tab.color}-600 bg-${tab.color}-50/50` 
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        }
      `}
      aria-pressed={isActive}
      role="tab"
    >
      <div className="flex items-center gap-1 lg:gap-2">
        <Icon className="w-3 h-3 lg:w-4 lg:h-4" />
        <span className="hidden sm:inline">{tab.label}</span>
        <span className="sm:hidden">{tab.mobileLabel}</span>
      </div>
    </button>
  );
});

TabButton.displayName = 'TabButton';

const DashboardTabs: React.FC<DashboardTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-16 z-30">
      <div className="px-4 lg:px-6">
        <nav 
          className="flex space-x-1 lg:space-x-8 overflow-x-auto scrollbar-hide"
          role="tablist"
          aria-label="Dashboard navigation"
        >
          {TABS.map((tab) => (
            <TabButton
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onClick={() => onTabChange(tab.id)}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default React.memo(DashboardTabs);
