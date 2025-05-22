// Exportación de componentes de la sección Hero
export { default as Hero } from './Hero';
export { default as Background } from './Background';
export { default as ParticlesWrapper } from './ParticlesWrapper';
export { default as Monogram } from './Monogram';
export { default as CTAButtons } from './CTAButtons';
export { default as ScrollIndicator } from './ScrollIndicator';

// También exportamos las variantes y hooks para reutilización
export * from './MotionVariants';
export { default as useParallax } from './useParallax';