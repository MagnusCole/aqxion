'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Users, ExternalLink, Send,
  CheckCircle, Zap, Shield, Heart
} from 'lucide-react';

export default function ComunidadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-4 lg:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header - Mobile First */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 lg:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-2 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium mb-3 lg:mb-4">
            <Heart className="h-3 w-3 lg:h-4 lg:w-4" />
            Comunidad Exclusiva MyPerú
          </div>
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4 px-4">
            Únete a la Comunidad <span className="text-blue-600">MyPerú</span>
          </h1>
          <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Conecta con otros emprendedores peruanos, comparte experiencias y acelera el crecimiento de tu negocio
          </p>
        </motion.div>

        {/* Stats - Mobile First Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12"
        >
          <div className="p-4 lg:p-6 text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg">
            <Users className="h-8 w-8 lg:h-12 lg:w-12 mx-auto mb-2 lg:mb-3 opacity-90" />
            <div className="text-2xl lg:text-3xl font-bold mb-1">150+</div>
            <div className="text-blue-100 text-sm lg:text-base">Emprendedores Activos</div>
          </div>
          
          <div className="p-4 lg:p-6 text-center bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg">
            <Zap className="h-8 w-8 lg:h-12 lg:w-12 mx-auto mb-2 lg:mb-3 opacity-90" />
            <div className="text-2xl lg:text-3xl font-bold mb-1">24/7</div>
            <div className="text-green-100 text-sm lg:text-base">Soporte Disponible</div>
          </div>
          
          <div className="p-4 lg:p-6 text-center bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl shadow-lg sm:col-span-1 col-span-1">
            <CheckCircle className="h-8 w-8 lg:h-12 lg:w-12 mx-auto mb-2 lg:mb-3 opacity-90" />
            <div className="text-2xl lg:text-3xl font-bold mb-1">95%</div>
            <div className="text-purple-100 text-sm lg:text-base">Satisfacción</div>
          </div>
        </motion.div>

        {/* Main Community Access - Mobile First Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12"
        >
          {/* Telegram Community - Mobile Optimized */}
          <div className="p-6 lg:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
              <div className="p-2 lg:p-3 bg-blue-600 rounded-xl">
                <MessageSquare className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Grupo Telegram</h3>
                <p className="text-blue-600 font-medium text-sm lg:text-base">Comunidad Principal</p>
              </div>
            </div>
            
            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm lg:text-base">Networking con emprendedores peruanos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm lg:text-base">Tips diarios de marketing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm lg:text-base">Casos de éxito reales</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm lg:text-base">Soporte entre miembros</span>
              </div>
            </div>

            <button 
              onClick={() => window.open('https://t.me/+MyPeruComunidad', '_blank')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 lg:py-4 px-4 lg:px-6 rounded-xl transition-colors flex items-center justify-center gap-2 group text-sm lg:text-base"
            >
              <Send className="h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
              Unirse al Grupo Telegram
              <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4 opacity-70" />
            </button>
          </div>

          {/* Direct Contact - Mobile Optimized */}
          <div className="p-6 lg:p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
              <div className="p-2 lg:p-3 bg-green-600 rounded-xl">
                <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Contacto Directo</h3>
                <p className="text-green-600 font-medium text-sm lg:text-base">Soporte Personalizado</p>
              </div>
            </div>
            
            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm lg:text-base">Consultas técnicas urgentes</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm lg:text-base">Soporte de configuración</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm lg:text-base">Asesoría personalizada</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm lg:text-base">Respuesta en 24hrs</span>
              </div>
            </div>

            <button 
              onClick={() => window.open('https://t.me/MyPeruSoporte', '_blank')}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 lg:py-4 px-4 lg:px-6 rounded-xl transition-colors flex items-center justify-center gap-2 group text-sm lg:text-base"
            >
              <Send className="h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
              Contactar Soporte
              <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4 opacity-70" />
            </button>
          </div>
        </motion.div>

        {/* Community Rules - Mobile First */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200"
        >
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 text-center">
            Normas de la Comunidad MyPerú
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="text-center">
              <div className="p-2 lg:p-3 bg-blue-100 rounded-xl w-fit mx-auto mb-3 lg:mb-4">
                <Heart className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">Respeto Mutuo</h4>
              <p className="text-gray-600 text-xs lg:text-sm">
                Tratamos a todos los miembros con respeto y cordialidad
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-2 lg:p-3 bg-green-100 rounded-xl w-fit mx-auto mb-3 lg:mb-4">
                <Users className="h-6 w-6 lg:h-8 lg:w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">Colaboración</h4>
              <p className="text-gray-600 text-xs lg:text-sm">
                Compartimos conocimientos y ayudamos a otros emprendedores
              </p>
            </div>
            
            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="p-2 lg:p-3 bg-purple-100 rounded-xl w-fit mx-auto mb-3 lg:mb-4">
                <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">Calidad</h4>
              <p className="text-gray-600 text-xs lg:text-sm">
                Mantenemos conversaciones constructivas y de valor
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
