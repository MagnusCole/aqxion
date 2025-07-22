import type { Metadata } from "next";
import Script from 'next/script';
import { Inter } from "next/font/google";
import "../styles/globals.css";
import MobileMenu from '../components/MobileMenu';
import CookieConsent from '../components/CookieConsent';
import CookieConfigButton from '../components/CookieConfigButton';

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
        <header className="bg-white border-b border-neutral-200 sticky top-0 z-40 shadow-sm">
          <nav className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-16">
              
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="/" className="text-xl sm:text-2xl font-bold text-neutral-900 hover:text-green-600 transition-colors duration-200">
                  AQXION
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                <a href="/guias" className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200">
                  Guías
                </a>
                <a href="/recursos" className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200">
                  Recursos
                </a>
                <a href="/cursos" className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200">
                  Cursos
                </a>
                <div className="ml-4">
                  <a href="/empezar" className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm font-semibold hover:bg-green-700 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
                    Empezar →
                  </a>
                </div>
              </div>

              {/* Mobile Navigation Component */}
              <MobileMenu />
            </div>
          </nav>
        </header>
        
        <main>
          {children}
        </main>
        
        {/* Cookie Consent Banner */}
        <CookieConsent />
        
        <footer className="bg-neutral-50 border-t border-neutral-200 section-padding">
          <div className="container-padding text-center">
            <div className="max-w-3xl mx-auto">
              {/* Contacto */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-neutral-600">
                  <a href="mailto:deal@aqxion.com" className="hover:text-neutral-800 transition-colors">
                    📧 deal@aqxion.com
                  </a>
                  <span className="hidden sm:inline text-neutral-300">|</span>
                  <a 
                    href="https://calendly.com/aqxion/auditoria-gratuita" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-neutral-800 transition-colors"
                  >
                    📅 Agenda tu auditoría gratuita
                  </a>
                </div>
              </div>

              {/* Legal Disclaimer */}
              <div className="bg-neutral-100 p-6 rounded-lg mb-6 text-center">
                <h4 className="text-sm font-semibold text-neutral-800 mb-2">Aviso Legal Importante</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Todo el contenido de este sitio web, incluyendo guías, recursos y escenarios descritos, 
                  se proporciona únicamente con fines informativos y educativos y no constituye asesoramiento 
                  profesional. Los escenarios y ejemplos son ilustrativos y no indican ningún resultado específico 
                  ni desempeño previo garantizado. Los resultados variarán según el esfuerzo individual, 
                  capacidades personales, condiciones del mercado y otros factores externos. 
                  No garantizamos éxito específico ni niveles de ingresos determinados. 
                  No asumimos responsabilidad por las decisiones o acciones tomadas con base en nuestro contenido. 
                  Consulte siempre con profesionales cualificados antes de tomar decisiones comerciales importantes.
                </p>
              </div>
              
              <p className="text-xs text-neutral-500">
                © 2025 AQXION - Recursos para crecer tu PYME
              </p>
              
              {/* Legal Links */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4 text-xs">
                <a href="/privacidad" className="text-neutral-500 hover:text-neutral-700 transition-colors">
                  Política de Privacidad
                </a>
                <span className="hidden sm:inline text-neutral-300">|</span>
                <a href="/terminos" className="text-neutral-500 hover:text-neutral-700 transition-colors">
                  Términos de Servicio
                </a>
                <span className="hidden sm:inline text-neutral-300">|</span>
                <CookieConfigButton />
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}