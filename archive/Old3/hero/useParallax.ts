"use client";

import { useMotionValue, useTransform, useSpring, MotionValue } from "framer-motion";
import { useEffect } from "react";

interface ParallaxValues {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  springRotateX: MotionValue<number>;
  springRotateY: MotionValue<number>;
  spotlightX: MotionValue<number>;
  spotlightY: MotionValue<number>;
}

/**
 * Hook personalizado para efectos de parallax y spotlight que siguen al cursor
 */
export const useParallax = (): ParallaxValues => {
  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Valores iniciales seguros para SSR
  const rotateX = useTransform(mouseY, [-100, 100], [2, -2]);
  const rotateY = useTransform(mouseX, [-100, 100], [-2, 2]);
  const springRotateX = useSpring(rotateX, { stiffness: 50, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 50, damping: 30 });
  
  // Spotlight effect that follows cursor
  const spotlightX = useSpring(useTransform(mouseX, [-800, 800], [-300, 300]), { 
    stiffness: 40, 
    damping: 25 
  });
  const spotlightY = useSpring(useTransform(mouseY, [-800, 800], [-300, 300]), { 
    stiffness: 40, 
    damping: 25 
  });

  // Handle mouse movement
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX - window.innerWidth / 2);
        mouseY.set(e.clientY - window.innerHeight / 2);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return {
    mouseX,
    mouseY,
    springRotateX,
    springRotateY,
    spotlightX,
    spotlightY
  };
};

export default useParallax;