// Global type definitions for landing page tracking
declare global {
  interface Window {
    landingPageTracking?: {
      trackFormView: () => void;
      trackFormSubmit: () => void;
    };
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export {};
