import type { Metadata } from "next";
import Script from 'next/script';
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Guías Gratis para Escalar Tu Negocio Solo",
  description: "Recursos prácticos para dueños ambiciosos – automatiza, atrae clientes, crece sin costo.",
  keywords: "guías negocio gratis, herramientas crecimiento, automatización marketing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Script src={`https://www.googletagmanager.com/gtag/js?id=G-WKYR96FC8K`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WKYR96FC8K');
        `}
      </Script>
      <body>
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold text-blueTrust hover:text-greenValue transition-colors">
                📚 Guías de Crecimiento
              </a>
              <ul className="flex space-x-6">
                <li><a href="/" className="text-gray-600 hover:text-greenValue transition-colors">Inicio</a></li>
                <li><a href="/blog" className="text-gray-600 hover:text-greenValue transition-colors">Guías</a></li>
                <li><a href="/templates" className="text-gray-600 hover:text-greenValue transition-colors">Tools</a></li>
              </ul>
            </div>
          </nav>
        </header>
        
        {children}
        
        <footer className="bg-gray-100 py-6 text-center text-gray-600 border-t">
          <div className="container mx-auto px-4">
            <p>Recursos gratuitos para tu crecimiento. Disclaimer: Results hypothetical.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}