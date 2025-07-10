// Global type definitions for landing page tracking
declare global {
  interface Window {
    landingPageTracking?: {
      trackFormView: () => void;
      trackFormSubmit: () => void;
    };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    fbq?: Function;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    gtag?: Function;
  }
}

export {};
