'use client';

import { BarChart3, Lightbulb, Package, Megaphone, CheckSquare } from 'lucide-react';

interface DashboardTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'dashboard', label: 'Dashboard', mobileLabel: 'Dashboard', icon: BarChart3, color: 'red' },
  { id: 'nicho', label: 'Mi Nicho', mobileLabel: 'Nicho', icon: Lightbulb, color: 'yellow' },
  { id: 'oferta', label: 'Mi Oferta', mobileLabel: 'Oferta', icon: Package, color: 'emerald' },
  { id: 'campana', label: 'Mi Campaña', mobileLabel: 'Campaña', icon: Megaphone, color: 'blue' },
  { id: 'progreso', label: 'Mi Progreso', mobileLabel: 'Progreso', icon: CheckSquare, color: 'purple' }
];

export default function DashboardTabs({ activeTab, onTabChange }: DashboardTabsProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="px-4 lg:px-6">
        <nav className="flex space-x-1 lg:space-x-8 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            const colorClass = isActive ? `border-${tab.color}-500 text-${tab.color}-600` : 'border-transparent text-gray-500 hover:text-gray-700';
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`py-3 lg:py-4 px-2 lg:px-4 border-b-2 font-medium text-xs lg:text-sm transition-colors whitespace-nowrap flex-shrink-0 ${colorClass}`}
              >
                <div className="flex items-center gap-1 lg:gap-2">
                  <Icon className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.mobileLabel}</span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
