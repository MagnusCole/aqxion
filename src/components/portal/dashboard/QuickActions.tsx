import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, BarChart3, ChevronRight } from 'lucide-react';
import type { QuickAction } from '@/types/portal/dashboard';

interface QuickActionsProps {
  onActionClick: (href: string) => void;
  loading?: boolean;
}

/**
 * QuickActions - Pure UI Component
 * iOS-style navigation list for portal tools
 * Single responsibility: Tool navigation presentation
 */
export const QuickActions: React.FC<QuickActionsProps> = ({
  onActionClick,
  loading = false
}) => {
  const actions: QuickAction[] = [
    { 
      title: 'CRM', 
      subtitle: 'Gestionar clientes', 
      icon: Users, 
      href: '/portal/crm' 
    },
    { 
      title: 'Calendario', 
      subtitle: 'Programar contenido', 
      icon: Calendar, 
      href: '/portal/calendar' 
    },
    { 
      title: 'Análisis', 
      subtitle: 'Ver resultados', 
      icon: BarChart3, 
      href: '/portal/analytics' 
    }
  ];

  if (loading) {
    return (
      <section className="px-4 mb-8">
        <div className="h-6 bg-gray-200 rounded w-24 mb-3 animate-pulse" />
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div 
              key={i}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 animate-pulse"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-200 rounded-lg" />
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded mb-1" />
                  <div className="h-3 bg-gray-200 rounded w-24" />
                </div>
                <div className="w-5 h-5 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 mb-8" role="navigation" aria-label="Herramientas del portal">
      <h3 className="font-semibold text-gray-900 mb-3">Herramientas</h3>
      
      <div className="space-y-2">
        {actions.map((action, index) => (
          <motion.button
            key={action.href}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onActionClick(action.href)}
            className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 
              flex items-center justify-between text-left
              focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
              hover:shadow-md transition-all duration-200"
            aria-label={`Ir a ${action.title}: ${action.subtitle}`}
          >
            <div className="flex items-center space-x-3">
              <div 
                className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center"
                aria-hidden="true"
              >
                <action.icon className="w-4 h-4 text-gray-600" />
              </div>
              
              <div className="text-left">
                <div className="font-medium text-gray-900">{action.title}</div>
                <div className="text-xs text-gray-500">{action.subtitle}</div>
              </div>
            </div>
            
            <motion.div
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
              aria-hidden="true"
            >
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.div>
          </motion.button>
        ))}
      </div>
    </section>
  );
};
