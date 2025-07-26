'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Package, Star, DollarSign, Gift } from 'lucide-react';

/**
 * Offer Creation Component
 * Single responsibility: Guide user through offer optimization
 * Mobile-first with value proposition focus
 */

const OfertaSection: React.FC = () => {
  const offerComponents = [
    {
      title: 'Servicio Principal',
      description: 'Limpieza dental completa + blanqueamiento',
      value: 'S/ 180',
      status: 'optimizado',
      icon: Star
    },
    {
      title: 'Garantía',
      description: 'Satisfacción 100% garantizada o dinero devuelto',
      value: 'Incluida',
      status: 'configurado',
      icon: Gift
    },
    {
      title: 'Bonos Adicionales',
      description: 'Consulta gratuita + kit de cuidado bucal',
      value: 'S/ 50',
      status: 'pendiente',
      icon: Package
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Package className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Tu Oferta Irresistible</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Construye una propuesta de valor que tus clientes no puedan rechazar
        </p>
      </motion.div>

      {/* Offer Value Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-6 text-white"
      >
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">Valor Total de Tu Oferta</h3>
          <div className="text-4xl font-bold">S/ 230</div>
          <p className="text-emerald-100">Precio especial: S/ 180</p>
        </div>
        
        <div className="bg-white/20 rounded-xl p-4">
          <div className="flex items-center justify-between text-sm">
            <span>Ahorro para el cliente:</span>
            <span className="font-bold">S/ 50 (22%)</span>
          </div>
        </div>
      </motion.div>

      {/* Offer Components */}
      <div className="space-y-4">
        {offerComponents.map((component, index) => {
          const Icon = component.icon;
          const statusColor = {
            'optimizado': 'bg-green-100 text-green-700 border-green-200',
            'configurado': 'bg-blue-100 text-blue-700 border-blue-200',
            'pendiente': 'bg-yellow-100 text-yellow-700 border-yellow-200'
          }[component.status];

          return (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900">{component.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${statusColor}`}>
                      {component.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{component.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-emerald-600">{component.value}</span>
                    <button className="text-blue-600 text-sm font-medium hover:underline">
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <button className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 active:scale-95 transition-transform">
          Optimizar Mi Oferta
        </button>
      </motion.div>
    </div>
  );
};

export default React.memo(OfertaSection);
