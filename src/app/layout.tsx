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
  title: "MyPerú - Tu Camino a 150 UIT | Sistema para MYPEs Peruanas",
  description: "El programa completo DFY-DWY-DIY para escalar tu MYPE peruana de 0 a 150 UIT anuales. Nicho, oferta, marketing y escalado.",
  keywords: "mypes peru, 150 uit, sistema escalado, marketing peru, dfy dwy diy, emprendimiento peru",
  authors: [{ name: "MyPerú" }],
  creator: "MyPerú",
  publisher: "MyPerú",
  robots: "index, follow",
  openGraph: {
    title: "MyPerú - Tu Camino a 150 UIT",
    description: "Programa integral para escalar MYPEs peruanas. De 0 a 150 UIT con nuestro sistema DFY-DWY-DIY",
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
