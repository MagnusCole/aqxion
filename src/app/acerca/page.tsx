'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Heart, MapPin, Calendar } from 'lucide-react';
import { Header, Footer, WhatsAppButton } from '@/components/page-components/shared';

export default function AboutPage() {
  const team = [
    {
      name: "Carlos Mendoza",
      role: "CEO & Fundador",
      image: "👨‍💼",
      description: "15 años ayudando MYPEs peruanas. Ex-consultor en Deloitte.",
      linkedin: "#"
    },
    {
      name: "Ana Quispe",
      role: "Directora de Marketing",
      image: "👩‍💻",
      description: "Especialista en marketing digital para negocios locales.",
      linkedin: "#"
    },
    {
      name: "Roberto Silva",
      role: "CTO",
      image: "👨‍🔧",
      description: "Ingeniero de sistemas enfocado en automatización empresarial.",
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compromiso con el Perú",
      description: "Creemos firmemente en el potencial de las MYPEs peruanas para transformar nuestro país.",
      color: "bg-peru-red"
    },
    {
      icon: Users,
      title: "Enfoque Humano",
      description: "Cada MYPE tiene una historia única. Personalizamos nuestro servicio para cada familia empresaria.",
      color: "bg-green-600"
    },
    {
      icon: Target,
      title: "Resultados Garantizados",
      description: "No cobramos por promesas. Nuestro éxito se mide por el crecimiento real de tu negocio.",
      color: "bg-peru-red"
    },
    {
      icon: Award,
      title: "Excelencia Operativa",
      description: "Utilizamos las mejores prácticas internacionales adaptadas a la realidad peruana.",
      color: "bg-green-600"
    }
  ];

  const milestones = [
    { year: "2023", event: "Fundación de AQXION", description: "Inicio con 5 MYPEs piloto en Lima" },
    { year: "2024", event: "50+ MYPEs Transformadas", description: "Expansión a 15 distritos de Lima" },
    { year: "2024", event: "300% Crecimiento Promedio", description: "Resultados validados por nuestros clientes" },
    { year: "2025", event: "Meta: 500 MYPEs", description: "Expansión nacional en proceso" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onModalOpen={() => {}} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-red-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-gray-900">Conoce el equipo detrás de</span>
              <br />
              <span className="text-peru-red">AQXION</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos un equipo apasionado de <span className="text-peru-red font-semibold">especialistas peruanos</span> 
              dedicados a transformar pequeños negocios en líderes de mercado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todo comenzó con una simple observación: las MYPEs peruanas tienen un potencial enorme, 
              pero carecen de las herramientas digitales para competir en el mercado actual.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-8 h-8 text-peru-red" />
                  <h3 className="text-2xl font-bold text-gray-900">El Problema</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  En 2023, visitamos más de 100 pequeños negocios en Lima. El 89% dependía únicamente 
                  del boca a boca y no tenía presencia digital. Muchos tenían productos excelentes pero 
                  luchaban por encontrar clientes.
                </p>
                <div className="text-peru-red font-semibold">
                  "Había que hacer algo" - Carlos, Fundador
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-peru-red rounded-3xl p-8 shadow-lg text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold">La Solución</h3>
                </div>
                <p className="leading-relaxed mb-6 text-red-100">
                  Decidimos crear un sistema completo, fácil de usar y adaptado 100% a la realidad peruana. 
                  Sin tecnicismos, sin contratos largos, con resultados medibles desde el primer mes.
                </p>
                <div className="font-semibold">
                  "Tecnología mundial, corazón peruano" ❤️
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestro Crecimiento</h2>
            <p className="text-xl text-gray-600">
              Cada hito representa MYPEs transformadas y familias beneficiadas
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className={`p-6 rounded-2xl ${index % 2 === 0 ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className={`w-6 h-6 ${index % 2 === 0 ? 'text-peru-red' : 'text-green-600'}`} />
                      <span className={`font-bold text-2xl ${index % 2 === 0 ? 'text-peru-red' : 'text-green-600'}`}>
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className={`w-4 h-4 rounded-full ${index % 2 === 0 ? 'bg-peru-red' : 'bg-green-600'} flex-shrink-0`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestros Valores</h2>
            <p className="text-xl text-gray-600">
              Los principios que guían cada decisión en AQXION
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Conoce al Equipo</h2>
            <p className="text-xl text-gray-600">
              Profesionales peruanos con experiencia internacional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-peru-red font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-peru-red text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">¿Listo para conocernos en persona?</h2>
            <p className="text-xl text-red-100 mb-8">
              Agenda una reunión sin compromiso y descubre cómo podemos ayudar a tu MYPE
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-peru-red px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Agendar Reunión Gratuita
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
