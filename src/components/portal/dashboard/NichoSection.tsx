'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Users, MapPin } from 'lucide-react';

/**
 * Nicho Selection Component
 * Single responsibility: Guide user through niche selection
 * Mobile-first with progressive disclosure
 */

const NichoSection: React.FC = () => {
  const nicheOptions = [
    { 
      id: 'salud',
      title: 'Servicios de Salud',
      description: 'Dentistas, médicos, terapeutas',
      icon: '🏥',
      popularity: '85%',
      demand: 'Alta'
    },
    {
      id: 'belleza',
      title: 'Belleza & Bienestar',
      description: 'Salones, spas, estética',
      icon: '💄',
      popularity: '78%',
      demand: 'Alta'
    },
    {
      id: 'educacion',
      title: 'Educación',
      description: 'Academias, tutorías, cursos',
      icon: '📚',
      popularity: '72%',
      demand: 'Media'
    },
    {
      id: 'gastronomia',
      title: 'Gastronomía',
      description: 'Restaurantes, delivery, catering',
      icon: '🍕',
      popularity: '68%',
      demand: 'Alta'
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
        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Lightbulb className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Encuentra Tu Nicho</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Selecciona el sector que mejor se adapte a tu negocio para maximizar resultados
        </p>
      </motion.div>

      {/* Nicho Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {nicheOptions.map((niche, index) => (
          <motion.div
            key={niche.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-yellow-200 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">{niche.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{niche.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{niche.description}</p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {niche.popularity} popularidad
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    Demanda {niche.demand}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Current Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200"
      >
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-6 h-6 text-yellow-600" />
          <h3 className="text-lg font-semibold text-gray-900">Tu Nicho Actual</h3>
        </div>
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏥</span>
            <div>
              <h4 className="font-medium text-gray-900">Servicios de Salud</h4>
              <p className="text-sm text-gray-600">Especializado en clínicas dentales</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(NichoSection);
