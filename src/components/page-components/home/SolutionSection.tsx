'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Globe, Users, Shield, CheckCircle, Sparkles } from 'lucide-react';

interface SolutionStep {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  delay: number;
  accentColor: string;
  bgColor: string;
}

export function SolutionSection() {
  const solutions: SolutionStep[] = [
    {
      icon: Globe,
      title: "Presencia digital profesional",
      description: "Te ayudamos a crear una presencia online que genere confianza y atraiga clientes.",
      features: [
        "Sitio web optimizado para móviles",
        "Perfil de Google My Business",
        "Integración con WhatsApp Business"
      ],
      delay: 0.1,
      accentColor: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Target,
      title: "Estrategias de marketing efectivas",
      description: "Implementamos tácticas probadas que atraen a tu cliente ideal sin gastar de más.",
      features: [
        "Publicidad local dirigida",
        "Contenido que convierte",
        "Optimización para búsquedas locales"
      ],
      delay: 0.2,
      accentColor: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      icon: Zap,
      title: "Automatización inteligente",
      description: "Configuramos sistemas que trabajan por ti, para que tengas más tiempo para atender clientes.",
      features: [
        "Respuestas automáticas de WhatsApp",
        "Seguimiento de leads",
        "Reportes de rendimiento"
      ],
      delay: 0.3,
      accentColor: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section id="solucion" className="py-20 bg-gray-50">
      
      {/* Elementos decorativos minimalistas */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-12 h-12 bg-red-100 rounded-full opacity-50"
      />
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-20 w-8 h-8 bg-amber-100 rounded-full opacity-50"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-gray-200/50">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-gray-700">La Solución</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Te ayudamos a <span className="text-red-600">crecer de forma constante</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestro enfoque integral combina presencia digital, marketing efectivo y automatización 
            para que tengas un flujo predecible de clientes.
          </p>
        </motion.div>

        {/* Solutions grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: solution.delay,
                  ease: "easeOut"
                }}
                className="group"
              >
                <div className={`relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg`}>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 ${solution.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-8 h-8 ${solution.accentColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-100 transition-all duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestro proceso en <span className="text-red-600">3 pasos simples</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No te complicamos. Seguimos un proceso probado que funciona para MYPEs como la tuya.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Análisis inicial",
                description: "Entendemos tu negocio, tu mercado y tus objetivos específicos.",
                color: "text-red-600"
              },
              {
                step: "02", 
                title: "Implementación",
                description: "Configuramos todas las herramientas y estrategias necesarias.",
                color: "text-amber-600"
              },
              {
                step: "03",
                title: "Optimización continua",
                description: "Monitoreamos resultados y ajustamos para mejorar constantemente.",
                color: "text-green-600"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full border-2 border-gray-200 flex items-center justify-center text-2xl font-bold ${step.color} bg-white`}>
                    {step.step}
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200" />
                  )}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button 
            onClick={() => document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center px-8 py-4 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Quiero implementar esta solución
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
