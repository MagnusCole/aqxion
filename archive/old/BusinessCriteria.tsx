"use client";
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BusinessCriteria() {
  return (
    <section className="bg-gradient-to-b from-[#0A0A0A] to-[#0F1A36] py-24 relative overflow-hidden">
      {/* Fondo sutil con patrón */}
      <div className="absolute inset-0 opacity-5 bg-grid-white/10"></div>
      
      <Container>
        <motion.div 
          className="w-full mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Businesses We Buy
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            We focus on established businesses with proven track records
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mx-auto mb-12">
          {/* Revenue */}
          <motion.div 
            className="bg-[#132042] p-8 rounded-lg border border-[#C9A96D]/20 hover:border-[#C9A96D]/40 transition-all hover:shadow-[0_0_15px_rgba(201,169,109,0.15)] group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#C9A96D]/10 p-4 rounded-lg mb-6 inline-block">
              <svg className="w-8 h-8 text-[#C9A96D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#C9A96D] transition-colors">Revenue</h3>
            <p className="text-gray-300 mb-2">Between $2M – $30M annually.</p>
          </motion.div>
          
          {/* EBITDA */}
          <motion.div 
            className="bg-[#132042] p-8 rounded-lg border border-[#C9A96D]/20 hover:border-[#C9A96D]/40 transition-all hover:shadow-[0_0_15px_rgba(201,169,109,0.15)] group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#C9A96D]/10 p-4 rounded-lg mb-6 inline-block">
              <svg className="w-8 h-8 text-[#C9A96D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#C9A96D] transition-colors">EBITDA</h3>
            <p className="text-gray-300 mb-2">More than $500,000 per year.</p>
          </motion.div>
          
          {/* Sectors */}
          <motion.div 
            className="bg-[#132042] p-8 rounded-lg border border-[#C9A96D]/20 hover:border-[#C9A96D]/40 transition-all hover:shadow-[0_0_15px_rgba(201,169,109,0.15)] group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#C9A96D]/10 p-4 rounded-lg mb-6 inline-block">
              <svg className="w-8 h-8 text-[#C9A96D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#C9A96D] transition-colors">Sectors</h3>
            <p className="text-gray-300 mb-2">Healthcare, Services, and Technology.</p>
          </motion.div>
          
          {/* Owners */}
          <motion.div 
            className="bg-[#132042] p-8 rounded-lg border border-[#C9A96D]/20 hover:border-[#C9A96D]/40 transition-all hover:shadow-[0_0_15px_rgba(201,169,109,0.15)] group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#C9A96D]/10 p-4 rounded-lg mb-6 inline-block">
              <svg className="w-8 h-8 text-[#C9A96D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#C9A96D] transition-colors">Owners</h3>
            <p className="text-gray-300 mb-2">Looking to retire in the next 1–3 years.</p>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link 
            href="/qualification-check"
            className="bg-[#C9A96D] hover:bg-[#D6B67A] text-[#0A0A0A] px-8 py-4 rounded-md font-medium text-lg transition-all hover:scale-105 shadow-md hover:shadow-lg inline-block"
          >
            Start Qualification Process
          </Link>
          <p className="text-gray-400 mt-4 text-sm">Takes only 30 seconds to complete</p>
        </motion.div>
      </Container>
    </section>
  );
}