'use client';

import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Clock } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      business: "Restaurante El Sabroso",
      location: "San Isidro, Lima",
      rating: 5,
      text: "En 3 meses pasé de 20 clientes por día a 45. El sistema MyPerú realmente funciona para negocios familiares como el mío.",
      avatar: "MG",
      result: "+125% clientes",
      time: "3 meses",
      category: "Restaurante"
    },
    {
      name: "Carlos Ruiz",
      business: "Taller Mecánico Ruiz",
      location: "Cercado de Lima",
      rating: 5,
      text: "Antes dependía del boca a boca. Ahora tengo citas reservadas hasta con 2 semanas de anticipación gracias a MyPerú.",
      avatar: "CR",
      result: "+180% ventas",
      time: "2 meses",
      category: "Servicios"
    },
    {
      name: "Ana Vásquez",
      business: "Boutique Fashion Style",
      location: "Miraflores, Lima",
      rating: 5,
      text: "Mi tienda online ahora representa el 60% de mis ventas. El equipo de MyPerú me guió paso a paso en todo el proceso.",
      avatar: "AV",
      result: "+200% online",
      time: "4 meses",
      category: "Retail"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Elementos decorativos minimalistas */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-24 h-24 bg-peru-red/5 rounded-full"
      />
      
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          x: [0, 15, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-16 h-16 bg-peru-gold/5 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-peru-green/10 px-4 py-2 rounded-full mb-6 border border-peru-green/20"
          >
            <Star className="w-5 h-5 text-peru-green" />
            <span className="text-peru-green font-medium">Casos de Éxito Reales</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">MYPEs que ya están</span>
            <br />
            <span className="text-peru-red">
              Dominando su Mercado
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conoce las historias reales de empresarios peruanos que 
            <span className="text-peru-red font-semibold"> transformaron sus negocios</span> con el Sistema MyPerú
          </p>
        </motion.div>

        {/* Grid de testimonios */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 relative group"
            >
              {/* Quote decorativo */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
                className="absolute -top-4 -left-4 w-12 h-12 bg-peru-red rounded-full flex items-center justify-center shadow-md"
              >
                <Quote className="w-6 h-6 text-white" />
              </motion.div>

              {/* Resultados destacados */}
              <div className="flex justify-between items-start mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-peru-green/10 px-4 py-2 rounded-xl border border-peru-green/20"
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-peru-green" />
                    <span className="text-peru-green font-bold text-sm">{testimonial.result}</span>
                  </div>
                </motion.div>
                
                <div className="text-right">
                  <div className="w-12 h-12 bg-peru-red rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">
                    {testimonial.avatar}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {testimonial.time}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.7 + index * 0.15 + i * 0.05, duration: 0.3 }}
                  >
                    <Star className="w-5 h-5 text-peru-gold fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-900 transition-colors">
                "{testimonial.text}"
              </blockquote>

              {/* Author info */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-peru-red font-medium text-sm">
                      {testimonial.business}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">
                      {testimonial.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400 uppercase tracking-wide">
                      {testimonial.category}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estadísticas generales */}
        {/* Sección de métricas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-peru-red rounded-2xl p-8 md:p-12 text-white text-center mt-16 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Resultados que Hablan por Sí Solos
            </h3>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { number: "127+", label: "MYPEs Transformadas", icon: TrendingUp },
                { number: "340%", label: "Aumento Promedio Ventas", icon: Star },
                { number: "90", label: "Días Promedio Resultados", icon: Clock },
                { number: "98%", label: "Satisfacción Cliente", icon: Star }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-white/90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-600 mb-6">
            ¿Listo para ser el próximo caso de éxito? 🇵🇪
          </p>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-peru-red text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Quiero Mi Consulta Gratuita Ahora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
