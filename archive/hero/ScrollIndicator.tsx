"use client";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

/**
 * Componente que muestra un indicador de scroll animado
 */
const ScrollIndicator = () => {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (scrollIndicatorRef.current) {
        if (window.scrollY > 100) {
          scrollIndicatorRef.current.style.opacity = "0";
        } else {
          scrollIndicatorRef.current.style.opacity = "1";
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      ref={scrollIndicatorRef}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { delay: 2, duration: 0.8 } 
      }}
    >
      <motion.div
        className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div 
          className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{ 
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            opacity: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        />
      </motion.div>
      <motion.p 
        className="text-white/40 text-xs mt-2 uppercase tracking-widest"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll
      </motion.p>
    </motion.div>
  );
};

export default ScrollIndicator;