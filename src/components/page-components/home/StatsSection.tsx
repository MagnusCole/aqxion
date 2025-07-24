'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Star, Clock } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "MYPEs Transformadas",
      subtext: "en Lima este año",
      color: "text-peru-red",
      bgColor: "bg-peru-red/10"
    },
    {
      icon: TrendingUp,
      value: "180%",
      label: "Crecimiento Promedio",
      subtext: "en primeros 60 días",
      color: "text-peru-green",
      bgColor: "bg-peru-green/10"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Satisfacción Cliente",
      subtext: "calificación promedio",
      color: "text-peru-gold",
      bgColor: "bg-peru-gold/10"
    },
    {
      icon: Clock,
      value: "24h",
      label: "Tiempo de Activación",
      subtext: "sistema 100% operativo",
      color: "text-peru-red",
      bgColor: "bg-peru-red/10"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada número representa una MYPE peruana que transformó su futuro
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-2xl mb-6`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-3"
              >
                {stat.value}
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-600">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional trust element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            * Datos promedio basados en MYPEs peruanas durante 2024
          </p>
        </motion.div>
      </div>
    </section>
  );
}
