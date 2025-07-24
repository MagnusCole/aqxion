'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Clock, Shield, Users, ArrowRight, CheckCircle, Zap, Target } from 'lucide-react';

export const OfferSection = () => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header clean y directo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-peru-red/10 px-4 py-2 rounded-full mb-6 border border-peru-red/20"
          >
            <Star className="w-5 h-5 text-peru-red" />
            <span className="text-peru-red font-medium">Oferta de Lanzamiento</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Tu presencia digital <span className="text-peru-red">completa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Todo lo que necesitas para que tu MYPE sea encontrada en línea. Sin promesas exageradas, 
            solo herramientas probadas que funcionan.
          </p>
        </motion.div>

        {/* Comparación de Precios */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Plan Anchor (10X más caro) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 relative overflow-hidden shadow-sm">
              <div className="absolute top-4 right-4">
                <div className="bg-gray-100 text-gray-600 border border-gray-300 px-3 py-1 rounded-full text-sm">
                  Agencias tradicionales
                </div>
              </div>
              
              <div className="text-center mt-8">
                <h3 className="text-2xl font-bold text-gray-700 mb-4">Plan Agencia</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-700">S/.15,000</span>
                  <span className="text-gray-500 ml-2">/setup inicial</span>
                </div>
                
                <div className="space-y-3 mb-8 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">Sitio web básico</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">Hosting por 1 año</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">Soporte por email</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">+ S/.500/mes mantenimiento</span>
                  </div>
                </div>

                <button 
                  disabled
                  className="w-full bg-gray-200 text-gray-500 font-medium py-3 px-6 rounded-xl cursor-not-allowed"
                >
                  Muy costoso para MYPEs
                </button>
              </div>
            </div>
          </motion.div>

          {/* Nuestro Plan (Destacado) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
            onMouseEnter={() => setHoveredPlan('main')}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            <div className="bg-white rounded-2xl p-8 border-2 border-peru-red relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-2 bg-peru-red"></div>
              <div className="absolute top-4 right-4">
                <div className="bg-peru-red text-white px-3 py-1 rounded-full text-sm font-medium">
                  ✨ MEJOR VALOR
                </div>
              </div>
              
              <div className="text-center mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Plan MYPE</h3>
                <div className="mb-2">
                  <span className="text-lg text-gray-500 line-through">S/.15,000</span>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-peru-red">S/.1,500</span>
                  <span className="text-gray-500 ml-2">/pago único</span>
                </div>
                
                <div className="space-y-3 mb-8 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-peru-green" />
                    <span className="text-gray-900 font-medium">Sitio web profesional</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-peru-green" />
                    <span className="text-gray-900 font-medium">WhatsApp Business integrado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-peru-green" />
                    <span className="text-gray-900 font-medium">Google My Business configurado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-peru-green" />
                    <span className="text-gray-900 font-medium">Dashboard de control</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-peru-green" />
                    <span className="text-gray-900 font-medium">90 días de soporte personal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-peru-green" />
                    <span className="text-gray-900 font-medium">Hosting incluido por 1 año</span>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-peru-red text-white hover:bg-red-700 font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Empezar ahora
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Plan DIY */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 relative overflow-hidden shadow-sm">
              <div className="absolute top-4 right-4">
                <div className="bg-yellow-100 text-yellow-700 border border-yellow-300 px-3 py-1 rounded-full text-sm">
                  Hacerlo tú mismo
                </div>
              </div>
              
              <div className="text-center mt-8">
                <h3 className="text-2xl font-bold text-gray-700 mb-4">Plan DIY</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-700">S/.0</span>
                  <span className="text-gray-500 ml-2">/gratis</span>
                </div>
                
                <div className="space-y-3 mb-8 text-left">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-600">Aprender por tu cuenta</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-600">Configurar todo manualmente</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-600">Resolver problemas solo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-600">Tiempo estimado: 3-6 meses</span>
                  </div>
                </div>

                <button className="w-full bg-gray-100 text-gray-600 font-medium py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors">
                  Intentarlo por mi cuenta
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Garantía y valor agregado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100"
        >
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-peru-green/10 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-peru-green" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Garantía honesta</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              Te ayudamos a configurar tu presencia digital paso a paso. Si algo no funciona como esperamos, 
              trabajamos contigo hasta solucionarlo. No prometemos milagros, pero sí nuestro compromiso.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-peru-red/10 rounded-full flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-peru-red" />
                </div>
                <span className="font-medium text-gray-900">Soporte personal</span>
                <span className="text-sm text-gray-600 mt-1">Acceso directo al equipo</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-peru-red/10 rounded-full flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-peru-red" />
                </div>
                <span className="font-medium text-gray-900">90 días de acompañamiento</span>
                <span className="text-sm text-gray-600 mt-1">Te guiamos hasta el éxito</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-peru-red/10 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="w-6 h-6 text-peru-red" />
                </div>
                <span className="font-medium text-gray-900">Sin letras pequeñas</span>
                <span className="text-sm text-gray-600 mt-1">Términos claros y justos</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA final con urgencia suave */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            ¿Listo para hacer crecer tu MYPE?
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-peru-red text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-red-700"
          >
            Empezar mi transformación digital
          </motion.button>
          
          <p className="text-sm text-gray-500 mt-4">
            Sin compromisos de largo plazo • Soporte en español • Resultados en 90 días
          </p>
        </motion.div>
      </div>
    </section>
  );
};
