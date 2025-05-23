"use client";
import { motion } from "framer-motion";
import useParallax from "./useParallax";

/**
 * Componente que maneja todos los efectos de fondo
 * Incluye gradiente con parallax, spotlight y textura de ruido
 */
const Background = () => {
  const { springRotateX, springRotateY, spotlightX, spotlightY } = useParallax();

  return (
    <>
      {/* Enhanced Navy Gradient Background with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #1a263e 0%, #2a3a55 50%, #3d4f70 100%)",
          opacity: 0.95,
          transformStyle: "preserve-3d",
          perspective: "2000px",
          rotateX: springRotateX,
          rotateY: springRotateY,
        }}
      />
      
      {/* Dynamic Spotlight Effect */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          background: "radial-gradient(circle 600px at center, rgba(255,255,255,0.08), transparent 60%)",
          top: spotlightY,
          left: spotlightX,
        }}
      />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/backgrounds/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
    </>
  );
};

export default Background;