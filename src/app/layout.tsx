import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Providers from "@/components/providers";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AQXION - Sistema de Adquisición de Clientes para MYPEs",
  description: "El sistema completo que usan las empresas grandes para conseguir clientes automáticamente. Ahora para MYPEs a S/.1,500",
  keywords: "sistema clientes automatico, infraestructura digital MYPES, adquisicion clientes Peru, marketing automation Lima",
  authors: [{ name: "AQXION" }],
  creator: "AQXION",
  publisher: "AQXION",
  robots: "index, follow",
  openGraph: {
    title: "AQXION - Sistema de Adquisición de Clientes para MYPEs",
    description: "Infraestructura empresarial completa para conseguir clientes automáticamente. De S/.15,000 a solo S/.1,500",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="preload" as="font" type="font/woff2" href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2" crossOrigin="anonymous" />
      </head>
      <body className="font-inter">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
