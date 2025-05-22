// Variantes de animación para el componente Hero

// Custom easeOutBack function (approximation)
export const easeOutBack = (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

// Enhanced animation variants
export const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.2, 
      ease: easeOutBack,
      staggerChildren: 0.15,
      delayChildren: 0.2
    } 
  },
};

export const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: easeOutBack } 
  },
};

export const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      delay: 0.6, 
      duration: 0.7, 
      ease: easeOutBack 
    } 
  },
};

export const monogramVariants = {
  hidden: { opacity: 0, scale: 0.7, rotateZ: -5 },
  visible: { 
    opacity: 0.95, 
    scale: 1, 
    rotateZ: 0,
    transition: { 
      delay: 0.4, 
      duration: 0.9, 
      ease: easeOutBack 
    } 
  },
};

export const dividerVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 0.6,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: easeOutBack
    }
  }
};