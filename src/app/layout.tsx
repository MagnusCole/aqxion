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
  title: "Guías gratis para hacer crecer tu negocio | AQXION 2025",
  description: "40+ herramientas y guías step-by-step para conseguir más clientes y automatizar tu PYME sin gastar una fortuna. Implementación práctica, resultados medibles.",
  keywords: "guías negocio gratis 2025, conseguir clientes PYME, automatización marketing, herramientas negocio, SEO local, WhatsApp ventas, IA negocios",
  authors: [{ name: "AQXION" }],
  creator: "AQXION",
  publisher: "AQXION",
  robots: "index, follow",
  openGraph: {
    title: "Guías gratis para hacer crecer tu negocio | AQXION 2025",
    description: "40+ herramientas y guías step-by-step para conseguir más clientes y automatizar tu PYME sin gastar una fortuna.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guías gratis para hacer crecer tu negocio | AQXION 2025",
    description: "40+ herramientas y guías step-by-step para conseguir más clientes y automatizar tu PYME.",
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
        <header className="bg-white shadow-sm border-b border-neutral-200 sticky top-0 z-50">
          <nav className="container container-padding py-4 sm:py-6">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl sm:text-3xl font-bold text-calm-700 hover:text-primary-600 transition-colors duration-200 flex items-center">
                <span className="mr-2 text-3xl">📚</span>
                <span className="hidden sm:inline">Guías que Funcionan</span>
                <span className="sm:hidden">Guías</span>
              </a>
              <ul className="flex space-x-4 sm:space-x-8 items-center">
                <li>
                  <a href="/" className="text-lg text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-lg text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium">
                    Guías
                  </a>
                </li>
                <li>
                  <a href="/templates" className="text-lg text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium">
                    Herramientas
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        
        <main>
          {children}
        </main>
        
        <footer className="bg-neutral-100 border-t border-neutral-200 section-padding">
          <div className="container text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-calm-700 mb-4 tracking-tight">
                Haz Crecer Tu Negocio
              </h3>
              <p className="text-lg sm:text-xl text-neutral-600 mb-8 text-breathable">
                Todo gratis para ayudarte a conseguir más clientes y automatizar tu PYME. 
                Recursos actualizados constantemente con estrategias que realmente funcionan.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-8">
                <a href="/blog" className="text-lg text-primary-600 hover:text-calm-600 transition-colors duration-200 font-semibold">
                  40+ Guías Gratis
                </a>
                <a href="/templates" className="text-lg text-primary-600 hover:text-calm-600 transition-colors duration-200 font-semibold">
                  Herramientas Listas
                </a>
                <a href="/" className="text-lg text-primary-600 hover:text-calm-600 transition-colors duration-200 font-semibold">
                  Volver al Inicio
                </a>
              </div>
              <div className="border-t border-neutral-200 pt-8">
                <p className="text-lg text-neutral-600 text-breathable">
                  <strong className="text-calm-700">Disclaimer:</strong> Los resultados mencionados pueden variar según implementación, mercado y dedicación. 
                  No hay fórmulas mágicas, solo estrategias probadas que requieren trabajo para funcionar.
                </p>
                <p className="text-lg text-neutral-500 mt-4">
                  © 2025 AQXION - Recursos para hacer crecer tu negocio
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}