'use client';

import React from 'react';
import { Target, Bell, User } from 'lucide-react';
import { HelpTooltip } from './';

/**
 * Simple Portal Header - Ultra-friendly for MYPEs
 * Larger elements, clear branding, helpful tooltips
 * Following "niño-friendly" design principles
 */

interface PortalHeaderProps {
  readonly title?: string;
  readonly subtitle?: string;
  readonly userName?: string;
  readonly userGoal?: {
    amount: number;
    period: string;
    description: string;
  };
}

const PortalHeader: React.FC<PortalHeaderProps> = ({ 
  title = "MyPerú",
  subtitle = "Tu Camino al Éxito",
  userName = "Usuario",
  userGoal = {
    amount: 50000,
    period: "mensuales",
    description: "Meta personalizada"
  }
}) => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-40">
      <div className="px-4 lg:px-6 py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Branding - Más grande y claro */}
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg">
              <Target className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl lg:text-3xl font-bold text-gray-900">{title}</h1>
              <div className="flex items-center gap-2">
                <p className="text-sm lg:text-base text-gray-600">{subtitle}</p>
                <HelpTooltip
                  title="¿Cómo funciona tu meta?"
                  content={`Tu meta actual es ganar S/ ${userGoal.amount.toLocaleString()} ${userGoal.period}. Puedes cambiarla en cualquier momento desde tu perfil.`}
                  examples={[
                    `Meta actual: S/ ${userGoal.amount.toLocaleString()}/${userGoal.period}`,
                    "Puedes ajustarla según tu negocio",
                    "El sistema se adapta a tu objetivo"
                  ]}
                  size="small"
                />
              </div>
            </div>
          </div>
          
          {/* User area - Más clara y accesible */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Notificaciones */}
            <div className="relative">
              <button className="p-3 lg:p-4 hover:bg-gray-100 rounded-xl transition-colors relative">
                <Bell className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
                <div className="absolute -top-1 -right-1 w-4 h-4 lg:w-5 lg:h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs lg:text-sm font-bold text-white">3</span>
                </div>
              </button>
              <HelpTooltip
                title="Notificaciones"
                content="Aquí recibirás avisos importantes sobre tu progreso, nuevas tareas y actualizaciones del programa."
                position="bottom"
                size="small"
              />
            </div>
            
            {/* Usuario */}
            <div className="flex items-center gap-2 lg:gap-3 bg-gray-50 rounded-xl px-3 lg:px-4 py-2 lg:py-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm lg:text-base font-medium text-gray-900">¡Hola, {userName}!</p>
                <p className="text-xs lg:text-sm text-gray-600">Miembro MyPerú</p>
              </div>
              <HelpTooltip
                title="Tu perfil"
                content="Desde aquí puedes ver tu información personal, cambiar configuraciones y acceder a tu historial de progreso."
                position="bottom"
                size="small"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(PortalHeader);
