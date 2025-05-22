import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { FooterSection } from "@/sections/FooterSection";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AQXION – Strategic Acquisitions",
  description: "Next-generation acquisition firm for legacy business owners across LATAM.",
  openGraph: {
    title: "AQXION",
    description: "Strategic Acquisitions Across LATAM",
    url: "https://aqxion.com",
    siteName: "AQXION",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      data-theme="light"
    >
      <body className="bg-[color:var(--color-bg)] text-[color:var(--color-text)] antialiased font-sans min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:p-4 focus:z-50 focus:bg-black focus:text-white"
        >
          Skip to main content
        </a>
        <main id="main">
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}