import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

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
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#2563EB",
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preload" as="font" type="font/woff2" href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2" crossOrigin="anonymous" />
      </head>
      <body className="font-inter">
        {children}
        <script async src="/vibe-ux-autotest.js"></script>
        <script async src="/vibe-iter3-optimizer.js"></script>
        <script async src="/vibe-iter4-accelerate.js"></script>
        <script async src="/copywriting-optimizer.js"></script>
      </body>
    </html>
  );
}
