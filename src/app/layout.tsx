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
  title: "AQXION - Portal de Crecimiento para MYPEs",
  description: "Triplica tus clientes en 90 días con nuestro sistema probado para MYPEs en Lima",
  keywords: "marketing digital Lima, negocios locales, más clientes, marketing simple, MYPES Peru",
  authors: [{ name: "AQXION" }],
  creator: "AQXION",
  publisher: "AQXION",
  robots: "index, follow",
  openGraph: {
    title: "AQXION - Más Clientes para MYPEs",
    description: "Sistema probado para triplicar clientes en 90 días sin complicaciones",
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
