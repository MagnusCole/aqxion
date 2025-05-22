"use client"

import Container from '@/components/ui/Container';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#0A0A0A] to-[#132042] py-20 md:py-32 lg:py-48 relative overflow-hidden w-full">
      {/* Fondo sutil con mapa de LATAM */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/latam-map.svg')] bg-no-repeat bg-center bg-cover"></div>
      
      <Container>
        <motion.div 
          className="w-full mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 w-full mx-auto">
            Ready to Exit Your Business with <span className="text-[#C9A96D] font-medium">Confidence</span> in LATAM?
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-12 leading-relaxed">
            Learn from a Team with 12+ Successful Acquisitions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/sell-your-business"
              className="bg-[#C9A96D] hover:bg-[#D6B67A] text-[#0A0A0A] px-8 py-4 rounded-md font-medium text-lg transition-all hover:scale-105 shadow-md hover:shadow-lg inline-block"
            >
              Sell Your Business
            </Link>
            <Link 
              href="/success-stories"
              className="bg-transparent border border-[#C9A96D] text-[#C9A96D] hover:bg-[#C9A96D]/10 px-8 py-4 rounded-md font-medium text-lg transition-all hover:scale-105 inline-block"
            >
              Explore Our Success Stories
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}