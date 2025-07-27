/**
 * 🍪 Cookie Banner Component - GDPR Compliance Notice
 * 
 * Subtle cookie consent banner integrated naturally into hero section.
 * Features Peru-inspired styling and smooth animations matching overall design.
 * 
 * @features
 * - React.FC with strict TypeScript interfaces
 * - Integrated hero positioning (not intrusive overlay)
 * - Peru color system with subtle styling
 * - Local storage for consent persistence
 * - Animated entrance and dismissal
 * - Mobile-first responsive design
 * - Accessibility compliant with proper focus management
 * 
 * @example
 * ```tsx
 * <CookieBanner onAccept={() => handleCookieAccept()} />
 * ```
 */

'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Shield } from 'lucide-react';

/**
 * Props interface for CookieBanner component
 * @interface CookieBannerProps
 */
interface CookieBannerProps {
  /** Callback when cookies are accepted */
  readonly onAccept?: () => void;
  /** Callback when cookies are declined */
  readonly onDecline?: () => void;
  /** Custom className */
  readonly className?: string;
  /** Show animated entrance */
  readonly animated?: boolean;
}

/**
 * Cookie consent storage key
 */
const COOKIE_CONSENT_KEY = 'myperu-cookie-consent';

/**
 * Animation variants for banner
 */
const bannerVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
      delay: 2, // Appear after hero animations
    },
  },
  exit: { 
    opacity: 0, 
    y: -20,
    scale: 0.95,
    transition: { duration: 0.3 },
  },
} as const;

/**
 * Button animation variants
 */
const buttonVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { delay: 2.3, duration: 0.4 },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
} as const;

/**
 * 🍪 Cookie Banner Component
 * 
 * Displays GDPR-compliant cookie consent notice with Peru-inspired design.
 * Integrates naturally into hero section without disrupting user experience.
 * 
 * @param props - Component props
 * @returns JSX.Element
 */
export const CookieBanner: React.FC<CookieBannerProps> = React.memo(({
  onAccept,
  onDecline,
  className = '',
  animated = true,
}) => {
  /**
   * State for banner visibility
   */
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  /**
   * Check cookie consent status on mount
   */
  React.useEffect(() => {
    // Wait for client-side hydration
    setIsLoaded(true);
    
    if (typeof window !== 'undefined') {
      const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!hasConsent) {
        setIsVisible(true);
      }
    }
  }, []);

  /**
   * Handle cookie acceptance
   */
  const handleAccept = React.useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    }
    
    setIsVisible(false);
    onAccept?.();

    // Track acceptance for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
      });
    }
  }, [onAccept]);

  /**
   * Handle cookie decline
   */
  const handleDecline = React.useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    }
    
    setIsVisible(false);
    onDecline?.();

    // Track decline for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
      });
    }
  }, [onDecline]);

  /**
   * Handle dismiss with escape key
   */
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isVisible) {
        handleDecline();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isVisible, handleDecline]);

  // Don't render on server or if already consented
  if (!isLoaded || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={`
          fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40
          max-w-xs sm:max-w-sm
          ${className}
        `}
        variants={animated ? bannerVariants : undefined}
        initial={animated ? 'hidden' : undefined}
        animate={animated ? 'visible' : undefined}
        exit={animated ? 'exit' : undefined}
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
      >
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 backdrop-blur-sm">
          {/* Header with icon */}
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 w-8 h-8 bg-peru-gold/20 rounded-lg flex items-center justify-center">
              <Cookie className="w-4 h-4 text-peru-gold" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 
                id="cookie-banner-title"
                className="font-semibold text-gray-900 text-sm mb-2"
              >
                Cookies y Privacidad
              </h3>
              <p 
                id="cookie-banner-description"
                className="text-gray-600 text-xs leading-relaxed"
              >
                Utilizamos cookies para mejorar tu experiencia y analizar el uso del sitio. 
                Al continuar navegando, aceptas nuestro uso de cookies.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <motion.button
              onClick={handleAccept}
              variants={animated ? buttonVariants : undefined}
              initial={animated ? 'hidden' : undefined}
              animate={animated ? 'visible' : undefined}
              whileHover={animated ? 'hover' : undefined}
              whileTap={animated ? 'tap' : undefined}
              className="flex-1 bg-peru-red text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-peru-red focus:ring-offset-2"
              aria-label="Aceptar cookies y continuar"
            >
              Aceptar
            </motion.button>
            
            <motion.button
              onClick={handleDecline}
              variants={animated ? buttonVariants : undefined}
              initial={animated ? 'hidden' : undefined}
              animate={animated ? 'visible' : undefined}
              whileHover={animated ? 'hover' : undefined}
              whileTap={animated ? 'tap' : undefined}
              transition={{ delay: 2.4 }}
              className="flex-1 sm:flex-initial bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              aria-label="Rechazar cookies opcionales"
            >
              Solo necesarias
            </motion.button>
          </div>

          {/* Privacy badge */}
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
            <Shield className="w-3 h-3 text-peru-green" />
            <span className="text-xs text-gray-500">
              Respetamos tu privacidad según GDPR
            </span>
          </div>
        </div>

        {/* Peru-inspired decorative elements */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-peru-gold rounded-full opacity-60" aria-hidden="true" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-peru-green rounded-full opacity-40" aria-hidden="true" />
      </motion.div>
    </AnimatePresence>
  );
});

// Set display name for debugging
CookieBanner.displayName = 'CookieBanner';
