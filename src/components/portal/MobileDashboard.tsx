'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp,
  Calendar,
  Bot,
  AlertCircle,
  Bell,
  CheckCircle,
  Target,
  Users,
  MessageCircle,
  Folder,
  LifeBuoy,
  Settings,
  Globe
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import QuickAction from '@/components/portal/QuickAction';
import EditableMetricsCard from '@/components/portal/EditableMetricsCard';
import RealTaskManager from '@/components/portal/RealTaskManager';
import RealActivityLog from '@/components/portal/RealActivityLog';
import SuperAdminUsers from '@/components/portal/SuperAdminUsers';
import { useSuperAdmin } from '@/hooks/useSuperAdmin';

// Acciones rápidas para navegación
const quickActions = [
  {
    title: 'CRM',
    description: 'Gestiona tus clientes y leads',
    icon: Users,
    href: '/portal/crm',
    color: 'bg-emerald-500',
    badge: '3 nuevos'
  },
  {
    title: 'Calendario',
    description: 'Programa tu contenido',
    icon: Calendar,
    href: '/portal/calendario',
    color: 'bg-purple-500'
  },
  {
    title: 'WhatsApp',
    description: 'Automatiza conversaciones',
    icon: MessageCircle,
    href: '/portal/whatsapp',
    color: 'bg-green-500'
  },
  {
    title: 'Hermes IA',
    description: 'Asistente inteligente',
    icon: Bot,
    href: '/portal/hermes',
    color: 'bg-indigo-600',
    badge: 'Nuevo'
  },
  {
    title: 'Resultados',
    description: 'Analiza tu rendimiento',
    icon: TrendingUp,
    href: '/portal/resultados',
    color: 'bg-orange-500'
  },
  {
    title: 'Recursos',
    description: 'Herramientas y bonos',
    icon: Folder,
    href: '/portal/recursos',
    color: 'bg-indigo-500'
  },
  {
    title: 'Soporte',
    description: 'Ayuda personalizada',
    icon: LifeBuoy,
    href: '/portal/soporte',
    color: 'bg-red-500'
  }
];

export default function MobileDashboard() {
  const { user } = useAuth();
  const { isSuperAdmin } = useSuperAdmin();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Buenos días';
    if (hour < 18) return 'Buenas tardes';
    return 'Buenas noches';
  };

  const firstName = user?.email?.split('@')[0] || 'Usuario';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <h1 className="text-2xl font-semibold text-gray-900">
            {getGreeting()}, {firstName}
          </h1>
          <p className="text-gray-500 text-sm">
            {currentTime.toLocaleDateString('es-PE', { 
              weekday: 'long', 
              day: 'numeric',
              month: 'long'
            })}
          </p>
        </motion.div>

      </div>

      {/* Main Content */}
      <div className="px-4 space-y-8">
        
        {/* Metrics - Real & Editable */}
        <section>
          <EditableMetricsCard />
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Acciones Rápidas</h2>
          <div className="grid grid-cols-1 gap-2">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                <QuickAction {...action} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Real Task Manager */}
        <section>
          <RealTaskManager />
        </section>

        {/* Super Admin Users - Solo visible para super admins */}
        {isSuperAdmin && (
          <section>
            <SuperAdminUsers />
          </section>
        )}

        {/* Real Activity Log */}
        <section className="pb-8">
          <RealActivityLog />
        </section>

        {/* CTA Section */}
        <section className="pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold">¿Necesitas ayuda?</h3>
                <p className="text-blue-100 text-sm mt-1">
                  Nuestro equipo está listo para apoyarte
                </p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <LifeBuoy className="w-5 h-5" />
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium text-sm"
            >
              Contactar Soporte
            </motion.button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
