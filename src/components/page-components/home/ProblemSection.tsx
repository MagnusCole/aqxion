'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, EyeOff, Clock } from 'lucide-react';

interface ProblemSectionProps {}

interface Problem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
  bgColor: string;
  iconColor: string;
}

export const ProblemSection = ({}: ProblemSectionProps) => {
  const problems: Problem[] = [
    {
      icon: AlertTriangle,
      title: "Dependes del boca a boca",
      description: "Solo trabajas cuando alguien te recomienda. No tienes control sobre cuándo llegará el próximo cliente.",
      delay: 0.1,
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: TrendingDown,
      title: "Ingresos impredecibles",
      description: "Algunos meses están bien, otros apenas para cubrir gastos. Es difícil planificar el futuro así.",
      delay: 0.2,
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600"
    },
    {
      icon: EyeOff,
      title: "Eres invisible online",
      description: "Cuando buscan tu tipo de servicio en Google, no apareces. Se van con la competencia.",
      delay: 0.3,
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: Clock,
      title: "No tienes tiempo para todo",
      description: "Entre atender clientes y manejar el negocio, no te queda tiempo para conseguir más trabajo.",
      delay: 0.4,
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600"
    }
  ];

  return (
    <section id="problemas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Te resulta <span className="text-red-600">familiar</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estos son los problemas más comunes que enfrentan las MYPEs en Lima. 
            Si te identificas con alguno, no estás solo.
          </p>
        </motion.div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: problem.delay,
                  ease: "easeOut"
                }}
                className="group"
              >
                <div className={`relative p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 ${problem.bgColor} hover:shadow-lg`}>
                  
                  {/* Icon */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <IconComponent className={`w-6 h-6 ${problem.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-100 transition-all duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              La buena noticia es que todos estos problemas tienen solución
            </h3>
            <p className="text-gray-600 mb-6">
              Con las herramientas y estrategias correctas, puedes tener un flujo constante de clientes 
              y hacer que tu negocio sea más predecible y rentable.
            </p>
            <button 
              onClick={() => document.getElementById('solucion')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition-all duration-200"
            >
              Ver la solución
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                →
              </motion.div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
