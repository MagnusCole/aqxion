"use client";
import { motion } from "framer-motion";
import Section from "../../ui/Section";
import Container from "../../ui/Container";
import { HeadingHero, Subheading } from "../../ui/Typography";
import { containerVariants, textVariants, dividerVariants } from "./MotionVariants";
import Background from "./Background";
import ParticlesWrapper from "./ParticlesWrapper";
import Monogram from "./Monogram";
import CTAButtons from "./CTAButtons";
import ScrollIndicator from "./ScrollIndicator";

/**
 * Componente Hero principal que solo maneja el layout y el contenido
 * Todos los efectos visuales y animaciones están modularizados en componentes separados
 */
export default function Hero() {
  // Trust signals con transición de fade
  // Nota: Esta lógica podría extraerse a un hook personalizado en el futuro si se vuelve más compleja

  return (
    <Section className="min-h-screen flex items-center justify-center text-center bg-black text-white overflow-hidden relative">
      {/* Componentes de fondo modularizados */}
      <Background />
      <ParticlesWrapper />
      
      {/* Contenido */}
      <Container className="relative z-10 max-w-4xl px-4">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Monograma AQXION con efectos mejorados */}
          <Monogram />
          
          {/* Título Hero con efecto de revelación de texto */}
          <motion.div variants={textVariants}>
            <HeadingHero
              className="mb-8 text-6xl md:text-8xl font-extrabold tracking-tight text-white leading-tight shadow-text"
            >
              <span className="relative inline-block">
                <span className="relative z-10">We Buy and Scale</span>
                <motion.span 
                  className="absolute bottom-1 left-0 h-[3px] bg-[#d4af37]/20 w-full -z-10 rounded-full blur-sm"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
                />
              </span>
              <br className="hidden md:inline" />
              <span className="relative inline-block">
                <span className="relative z-10">Businesses in LATAM</span>
                <motion.span 
                  className="absolute bottom-1 left-0 h-[3px] bg-[#d4af37]/20 w-full -z-10 rounded-full blur-sm"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.4, duration: 0.7, ease: "easeOut" }}
                />
              </span>
            </HeadingHero>
          </motion.div>
          
          {/* Subtítulo con estilo mejorado */}
          <motion.div variants={textVariants}>
            <Subheading className="mb-6 text-lg md:text-xl opacity-85 max-w-xl mx-auto leading-relaxed">
              $500M+ in Acquisitions. +100 years in experience.
              <br className="hidden sm:inline" />
              Built to preserve legacies and maximize value.
            </Subheading>
          </motion.div>
          
          {/* Divisor de gradiente animado */}
          <motion.div 
            className="relative h-px mx-auto mb-8 overflow-hidden w-20"
            variants={textVariants}
          >
            <motion.div
              className="absolute inset-0"
              variants={dividerVariants}
              style={{
                background: "linear-gradient(to right, rgba(212, 175, 55, 0), #d4af37, rgba(212, 175, 55, 0))",
                opacity: 0.6,
              }}
            />
          </motion.div>
          
          {/* Botones de llamada a la acción */}
          <CTAButtons />
        </motion.div>
      </Container>
      
      {/* Indicador de desplazamiento animado */}
      <ScrollIndicator />
    </Section>
  );
}