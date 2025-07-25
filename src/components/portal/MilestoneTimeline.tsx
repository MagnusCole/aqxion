'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Target, Users, DollarSign } from 'lucide-react';

interface MilestoneTimelineProps {
  timeframe: '30d' | '60d' | '90d';
}

export default function MilestoneTimeline({ timeframe }: MilestoneTimelineProps) {
  const getMilestones = () => {
    const baseMilestones = [
      {
        day: 1,
        title: "Onboarding Completado",
        description: "Portal activado, credenciales enviadas",
        status: "completed" as const,
        icon: CheckCircle,
        color: "bg-green-500"
      },
      {
        day: 7,
        title: "Sitio Web Live",
        description: "Website profesional publicado y optimizado",
        status: "completed" as const,
        icon: Target,
        color: "bg-blue-500"
      },
      {
        day: 14,
        title: "Google My Business Activo",
        description: "Perfil optimizado, primeras reseñas",
        status: "completed" as const,
        icon: Users,
        color: "bg-purple-500"
      },
      {
        day: 21,
        title: "WhatsApp Business Setup",
        description: "Automatización configurada, catálogo activo",
        status: "completed" as const,
        icon: Calendar,
        color: "bg-green-600"
      },
      {
        day: 30,
        title: "Primera Conversión",
        description: "Cliente generado via presencia digital",
        status: "completed" as const,
        icon: DollarSign,
        color: "bg-yellow-500"
      }
    ];

    if (timeframe === '60d' || timeframe === '90d') {
      baseMilestones.push(
        {
          day: 45,
          title: "Flujo de Leads Estable",
          description: "10+ leads mensuales consistentes",
          status: "completed" as const,
          icon: Users,
          color: "bg-indigo-500"
        },
        {
          day: 60,
          title: "ROI Positivo Sostenido",
          description: "Ingresos superan inversión inicial",
          status: "completed" as const,
          icon: DollarSign,
          color: "bg-green-700"
        }
      );
    }

    if (timeframe === '90d') {
      baseMilestones.push({
        day: 90,
        title: "Crecimiento Escalable",
        description: "Sistema autónomo, listo para expansion",
        status: "completed" as const,
        icon: Target,
        color: "bg-purple-600"
      });
    }

    return baseMilestones;
  };

  const milestones = getMilestones();

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Timeline de Implementación</h3>
        <p className="text-gray-600 text-sm">Tu progreso paso a paso</p>
      </div>

      <div className="relative">
        {/* Línea vertical */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        
        <div className="space-y-8">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            
            return (
              <motion.div
                key={milestone.day}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-start space-x-4"
              >
                {/* Icono del milestone */}
                <div className={`relative z-10 w-16 h-16 ${milestone.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Contenido */}
                <div className="flex-1 min-w-0">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold text-gray-900">{milestone.title}</h4>
                      <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
                        Día {milestone.day}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{milestone.description}</p>
                    
                    {milestone.status === 'completed' && (
                      <div className="mt-2 flex items-center text-green-600 text-xs font-medium">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Completado
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
