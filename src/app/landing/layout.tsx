import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../styles/globals.css";
import "./styles/landing-optimizations.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Más Clientes Para Tu Negocio Local | AQXION",
  description: "Marketing directo que funciona. Consigue más clientes en 30 días o seguimos trabajando gratis. 90 días de garantía.",
  openGraph: {
    title: "Más Clientes Para Tu Negocio Local | AQXION",
    description: "Marketing directo que funciona. Consigue más clientes en 30 días o seguimos trabajando gratis.",
    url: "https://aqxion.com/landing",
    siteName: "AQXION",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .landing-page {
              font-family: var(--font-sans, ui-sans-serif, system-ui, sans-serif);
            }
            /* Critical styles for form inputs */
            .landing-page input:focus {
              outline: 2px solid #3b82f6;
              outline-offset: 2px;
            }
            /* Prevent layout shift */
            .landing-page img {
              height: auto;
            }
            /* Optimize font loading */
            @font-face {
              font-family: 'Geist';
              font-display: swap;
            }
          `
        }} />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://script.google.com" />
        <link rel="preconnect" href="https://calendly.com" />
        
        {/* DNS prefetch for tracking domains */}
        <link rel="dns-prefetch" href="//facebook.com" />
        <link rel="dns-prefetch" href="//google-analytics.com" />
      </head>
      <body className="antialiased bg-white">
        {children}
        
        {/* Performance and tracking scripts at the bottom */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Lazy load non-critical resources
            document.addEventListener('DOMContentLoaded', function() {
              // Implement lazy loading for images below the fold
              const images = document.querySelectorAll('img[data-src]');
              const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                  }
                });
              });
              images.forEach(img => imageObserver.observe(img));
            });
          `
        }} />
      </body>
    </html>
  );
}
