declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      config?: { [key: string]: any }
    ) => void;
  }
}

export {};
