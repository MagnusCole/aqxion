"use client";

// Importar solo el componente de transición y sección de contenido
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Container from "../ui/Container";

// Variantes de animación para la sección de contenido
const contentSectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15
    }
  }
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export default function ContentTransition() {
  // Referencia y estado para controlar la visibilidad del contenido
  const contentSectionRef = useRef(null);
  const [contentVisible, setContentVisible] = useState(false);
  
  // Detectar cuando el contenido entra en la vista
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setContentVisible(true);
        }
      },
      { threshold: 0.25 }
    );
    
    if (contentSectionRef.current) {
      observer.observe(contentSectionRef.current);
    }
    
    return () => {
      if (contentSectionRef.current) {
        observer.unobserve(contentSectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Transición suave entre el hero y el contenido */}
      <div className="relative h-32">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800 to-white w-full"></div>
      </div>

      {/* Sección de Contenido con Estilo de Documento */}
      <motion.section
        ref={contentSectionRef}
        initial="hidden"
        animate={contentVisible ? "visible" : "hidden"}
        variants={contentSectionVariants}
        className="relative bg-white py-24 z-10"
      >
        <Container className="max-w-4xl mx-auto">
          {/* Encabezado de la Sección con Animación */}
          <motion.div variants={contentItemVariants} className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Acquisition Philosophy</h2>
            <div className="w-20 h-1 mx-auto bg-blue-600 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">We believe in preserving the legacy of businesses while maximizing their growth potential in the Latin American market.</p>
          </motion.div>
          
          {/* Contenido en Formato de Documento con Estilo de Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              variants={contentItemVariants}
              className="bg-slate-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Approach</h3>
              <p className="text-gray-600 mb-4">We take a strategic approach to acquisitions, focusing on businesses with strong fundamentals and growth potential in the Latin American market.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Thorough business evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Seamless transition process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Long-term growth strategy</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              variants={contentItemVariants}
              className="bg-slate-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Expertise</h3>
              <p className="text-gray-600 mb-4">With over 100 years of combined experience, our team brings deep industry knowledge to every acquisition we undertake.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Industry-specific knowledge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Financial optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Operational excellence</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Sección de Estadísticas con Animación */}
          <motion.div 
            variants={contentItemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">$500M+</div>
              <div className="text-gray-600 text-sm">In Acquisitions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
              <div className="text-gray-600 text-sm">Businesses Acquired</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">100+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
              <div className="text-gray-600 text-sm">LATAM Countries</div>
            </div>
          </motion.div>
          
          {/* Sección de Llamada a la Acción */}
          <motion.div 
            variants={contentItemVariants}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 p-10 rounded-xl text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Explore Your Exit Strategy?</h3>
            <p className="mb-6 max-w-2xl mx-auto">Our team is prepared to guide you through the process and help maximize the value of your business.</p>
            <button className="px-8 py-3 bg-white text-blue-700 rounded-lg shadow-lg hover:shadow-white/30 hover:scale-105 transition-all duration-300 font-medium">
              Schedule a Consultation &nbsp; →
            </button>
          </motion.div>
        </Container>
      </motion.section>
    </>
  );
}