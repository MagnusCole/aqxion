"use client";
import { motion } from "framer-motion";
import { buttonVariants } from "./MotionVariants";

/**
 * Componente que contiene los botones de llamada a la acción
 */
const CTAButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
      <motion.a
        href="#strategy-call"
        variants={buttonVariants}
        whileHover={{ 
          scale: 1.07, 
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        className="group relative inline-flex items-center gap-2.5 border border-white/85 text-white rounded-full px-7 py-2.5 hover:bg-white hover:text-black transition duration-400 ease-out overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2.5">
          Get Your Exit Strategy 
          <motion.span 
            aria-hidden
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
            transition={{ duration: 0.3 }}
          >
            →
          </motion.span>
        </span>
        <motion.span 
          className="absolute inset-0 bg-white z-0"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.a>
      
      <motion.a
        href="#learn-more"
        variants={buttonVariants}
        whileHover={{ 
          scale: 1.07, 
          textShadow: "0 0 10px rgba(255, 255, 255, 0.3)" 
        }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 text-white/85 hover:text-white transition duration-400 ease-out"
      >
        Learn More
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.3 }}
        >
          →
        </motion.span>
      </motion.a>
    </div>
  );
};

export default CTAButtons;