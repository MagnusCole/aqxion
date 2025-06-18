// Global type definitions for landing page tracking
declare global {
  interface Window {
    landingPageTracking?: {
      trackFormView: () => void;
      trackFormSubmit: () => void;
    };
    fbq?: any;
    gtag?: any;
  }
}

export {};
