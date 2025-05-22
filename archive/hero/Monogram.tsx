"use client";
import { motion } from "framer-motion";
import { monogramVariants } from "./MotionVariants";

/**
 * Componente que muestra el monograma AQXION con efectos animados
 */
const Monogram = () => {
  return (
    <motion.div
      variants={monogramVariants}
      initial="hidden"
      animate="visible"
      className="relative mb-8"
    >
      <motion.img
        src="/logo/aqxion-monogram.svg"
        alt="AQXION Monogram"
        className="mx-auto w-14 h-14 opacity-85 relative z-20"
        whileHover={{ 
          scale: 1.1, 
          rotateZ: [0, -2, 2, 0], 
          transition: { 
            duration: 0.8, 
            ease: "easeInOut", 
            rotateZ: { 
              times: [0, 0.3, 0.6, 1],
              duration: 1.2
            }
          } 
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-[#d4af37]/20 blur-lg -z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0.4, 0.8, 0.4], 
          scale: [0.8, 1.2, 0.8], 
          transition: { 
            repeat: Infinity, 
            duration: 4, 
            ease: "easeInOut" 
          } 
        }}
        style={{ x: "-50%", y: "-50%" }}
      />
    </motion.div>
  );
};

export default Monogram;