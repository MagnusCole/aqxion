'use client';

import { motion } from 'framer-motion';
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const quickLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Servicios', href: '#' },
    { label: 'Casos de Éxito', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contacto', href: '#' }
  ];

  const services = [
    { label: 'Marketing Digital', href: '#' },
    { label: 'Automatización', href: '#' },
    { label: 'Consultoría MYPE', href: '#' },
    { label: 'E-commerce', href: '#' },
    { label: 'Capacitaciones', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Elementos decorativos con colores peruanos sólidos */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-20 w-32 h-32 bg-peru-red rounded-full opacity-10 blur-2xl"
      />
      
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          x: [0, 15, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-24 h-24 bg-green-600 rounded-full opacity-15 blur-xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-6 flex items-center gap-3"
            >
              <img 
                src="/logo-white.svg" 
                alt="AQXION Logo" 
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-3xl font-bold text-white mb-1">
                  AQXION
                </h3>
                <p className="text-peru-red font-medium">
                  Impulsando MYPEs Peruanas
                </p>
              </div>
            </motion.div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Transformamos pequeños negocios en líderes digitales, 
              combinando innovación tecnológica con la calidez peruana.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300"
              >
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span>Lima, Perú 🇵🇪</span>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300"
              >
                <Phone className="w-5 h-5 text-yellow-400" />
                <span>+51 999 888 777</span>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300"
              >
                <Mail className="w-5 h-5 text-yellow-400" />
                <span>hola@aqxion.pe</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    {service.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Mantente Conectado</h4>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                Recibe tips semanales para hacer crecer tu MYPE
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-peru-red transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-peru-red px-4 py-2 rounded-lg font-medium hover:bg-peru-red-dark hover:shadow-lg transition-all"
                >
                  ✓
                </motion.button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-gray-300 mb-4">Síguenos en redes sociales:</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-peru-red transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <span>© 2025 AQXION. Hecho con</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-red-500 fill-current" />
              </motion.div>
              <span>para MYPEs peruanas</span>
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Libro de Reclamaciones
              </a>
            </div>
          </div>
        </motion.div>

        {/* Floating Peru Flag */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 right-6 text-4xl"
        >
          🇵🇪
        </motion.div>
      </div>
    </footer>
  );
}
