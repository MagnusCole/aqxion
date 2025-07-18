// LLM-OPTIMIZED: Enhanced scroll animation hooks with performance optimization
"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationOptions {
  readonly threshold?: number;
  readonly rootMargin?: string;
  readonly triggerOnce?: boolean;
  readonly delay?: number;
}

/**
 * Enhanced scroll animation hook with better performance and error handling
 */
export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entry.isIntersecting && !hasAnimated) {
        if (delay > 0) {
          timeoutRef.current = setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        } else {
          setIsVisible(true);
          setHasAnimated(true);
        }

        if (triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else if (!triggerOnce && !entry.isIntersecting) {
        setIsVisible(false);
      }
    },
    [delay, triggerOnce, hasAnimated]
  );

  useEffect(() => {
    // Early return if IntersectionObserver is not supported
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [threshold, rootMargin, handleIntersection]);

  return { ref, isVisible, hasAnimated };
};

interface UseParallaxOptions {
  readonly speed?: number;
  readonly disabled?: boolean;
}

/**
 * Optimized parallax hook with performance enhancements
 */
export const useParallax = (options: UseParallaxOptions = {}) => {
  const { speed = 0.5, disabled = false } = options;
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (disabled || !ref.current) return;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      const elementTop = ref.current?.offsetTop || 0;
      const elementHeight = ref.current?.offsetHeight || 0;
      const windowHeight = window.innerHeight;

      // Only calculate parallax if element is in viewport
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
        const rate = (scrolled - elementTop) * speed;
        setOffset(rate);
      }
    });
  }, [speed, disabled]);

  useEffect(() => {
    if (disabled || typeof window === 'undefined') return;

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll, disabled]);

  return { ref, offset };
};

/**
 * Hook for detecting if user prefers reduced motion
 */
export const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } 
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return prefersReducedMotion;
};

/**
 * Enhanced scroll animation with reduced motion support
 */
export const useAccessibleScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrollAnimation = useScrollAnimation({
    ...options,
    delay: prefersReducedMotion ? 0 : options.delay
  });

  return {
    ...scrollAnimation,
    shouldAnimate: !prefersReducedMotion
  };
};
