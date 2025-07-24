'use client';

import { motion } from 'framer-motion';
import { Users, TrendingUp, Shield, Star, ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onModalOpen: () => void;
}

export const HeroSection = ({ onModalOpen }: HeroSectionProps) => {
  return (
    <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      
      {/* Elementos decorativos Peru-inspired minimalistas */}
      <motion.div 
        className="absolute top-20 right-10 w-12 h-12 bg-peru-gold/10 rounded-full"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-8 h-8 bg-peru-red/10 rounded-full"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/4 w-6 h-6 bg-peru-green/10 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            
            {/* Badge de credibilidad */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-peru-red/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-peru-red/20"
            >
              <Sparkles className="w-4 h-4 text-peru-red" />
              <span className="text-sm font-medium text-peru-red">Para MYPEs en Lima</span>
            </motion.div>

            {/* Headline principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Tu MYPE merece{' '}
              <span className="text-peru-red relative">
                más clientes
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-peru-gold rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            {/* Subtítulo empático */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed"
            >
              Ayudamos a pequeños negocios en Lima a conseguir clientes de forma consistente. 
              Sin promesas mágicas, solo estrategias que funcionan.
            </motion.p>

            {/* Social proof sutil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-peru-green" />
                <span className="text-sm text-gray-600">Diseñado para MYPEs</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-peru-green" />
                <span className="text-sm text-gray-600">90 días de soporte</span>
              </div>
            </motion.div>

            {/* CTA Principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={onModalOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-8 py-4 bg-peru-red text-white font-bold rounded-xl hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Quiero más clientes
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-peru-red font-medium rounded-xl border-2 border-peru-red/20 hover:border-peru-red/40 hover:bg-peru-red/5 transition-all duration-200"
              >
                Ver precios
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Visual lado derecho */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              
              {/* Contenedor principal */}
              <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                
                {/* Header simulado */}
                <div className="flex items-center gap-3 mb-6 p-4 bg-gray-50 rounded-xl">
                  <div className="w-3 h-3 bg-peru-red rounded-full"></div>
                  <div className="w-3 h-3 bg-peru-gold rounded-full"></div>
                  <div className="w-3 h-3 bg-peru-green rounded-full"></div>
                  <div className="ml-4 text-sm text-gray-500 font-medium">Dashboard MYPE</div>
                </div>

                {/* Métricas visuales */}
                <div className="space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center justify-between p-4 bg-peru-green/10 rounded-xl border border-peru-green/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-peru-green/20 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-peru-green" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Clientes este mes</p>
                        <p className="font-bold text-gray-900">En crecimiento</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 }}
                    className="flex items-center justify-between p-4 bg-peru-gold/10 rounded-xl border border-peru-gold/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-peru-gold/20 rounded-lg flex items-center justify-center">
                        <Star className="w-5 h-5 text-peru-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Presencia digital</p>
                        <p className="font-bold text-gray-900">Activa</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                    className="flex items-center justify-between p-4 bg-peru-red/10 rounded-xl border border-peru-red/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-peru-red/20 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-peru-red" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Herramientas</p>
                        <p className="font-bold text-gray-900">Configuradas</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Elemento flotante decorativo */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-peru-gold rounded-full flex items-center justify-center shadow-md"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
