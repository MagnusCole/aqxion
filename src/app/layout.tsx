import type { Metadata } from "next";
import Script from 'next/script';
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Más Clientes para tu PYME - Sin Gastar Fortunas | AQXION",
  description: "Guías step-by-step GRATIS para hacer crecer tu negocio local. Sin complicaciones técnicas. Sin presupuesto. Resultados en 30 días.",
  keywords: "conseguir clientes pyme, marketing negocio local, automatización marketing, guías negocio gratis, crecer negocio sin presupuesto",
  robots: "index, follow",
  openGraph: {
    title: "Más Clientes para tu PYME - Sin Gastar Fortunas",
    description: "Guías GRATIS para hacer crecer tu negocio. Step-by-step. Sin presupuesto. Resultados en 30 días.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=G-WKYR96FC8K`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WKYR96FC8K');
        `}
      </Script>
      <body className="font-sans antialiased">
        <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
          <nav className="container-padding py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold text-neutral-900 hover:text-primary-600 transition-colors duration-200">
                AQXION
              </a>
              <div className="flex space-x-6 items-center">
                <a href="/blog" className="text-neutral-600 hover:text-primary-600 font-medium">
                  Guías
                </a>
                <a href="/recursos" className="text-neutral-600 hover:text-primary-600 font-medium">
                  Recursos
                </a>
              </div>
            </div>
          </nav>
        </header>
        
        <main>
          {children}
        </main>
        
        <footer className="bg-neutral-50 border-t border-neutral-200 section-padding">
          <div className="container-padding text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                ¿Te están funcionando nuestras guías?
              </h3>
              <p className="text-neutral-600 mb-6">
                Todas nuestras guías son <strong>gratis</strong> y están diseñadas para PYMEs como la tuya.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <a href="/blog" className="text-primary-600 hover:text-primary-700 font-medium">
                  Ver Todas las Guías
                </a>
                <a href="/recursos" className="text-primary-600 hover:text-primary-700 font-medium">
                  Recursos Listos
                </a>
              </div>
              <p className="text-xs text-neutral-500">
                © 2025 AQXION - Recursos para crecer tu PYME
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}