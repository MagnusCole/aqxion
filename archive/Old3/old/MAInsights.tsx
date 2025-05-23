"use client"

import Container from '@/components/ui/Container';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MAInsights() {
  return (
    <section className="bg-[#0F1A36] py-20 relative overflow-hidden">
      {/* Fondo sutil con patrón */}
      <div className="absolute inset-0 opacity-5 bg-grid-white/10"></div>
      
      <Container>
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            M&A Insights for Business Owners
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Access our exclusive resources to help you navigate the complex world of mergers and acquisitions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Exit Guide */}
          <motion.div 
            className="bg-[#132042] p-8 rounded-lg border border-[#C9A96D]/20 hover:border-[#C9A96D]/40 transition-all hover:shadow-[0_0_15px_rgba(201,169,109,0.15)] group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#C9A96D]/10 p-4 rounded-lg mb-6 inline-block">
              <svg className="w-8 h-8 text-[#C9A96D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#C9A96D] transition-colors">Exit Strategy Guide</h3>
            <p className="text-gray-300 mb-6">Learn how to prepare your business for a successful exit with our comprehensive guide.</p>
            <Link 
              href="/downloads/exit-strategy-guide.pdf"
              className="flex items-center text-[#C9A96D] font-medium hover:text-[#D6B67A] transition-colors"
            >
              Download Now
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
          
          {/* Annual Report */}
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
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#C9A96D] transition-colors">LATAM M&A Report 2025</h3>
            <p className="text-gray-300 mb-6">Get exclusive insights into the latest trends and opportunities in the LATAM M&A market.</p>
            <Link 
              href="/downloads/latam-ma-report-2025.pdf"
              className="flex items-center text-[#C9A96D] font-medium hover:text-[#D6B67A] transition-colors"
            >
              Download Now
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
          
          {/* Case Study */}
          <motion.div 
            className="bg-[#132042] p-8 rounded-lg border border-[#C9A96D]/20 hover:border-[#C9A96D]/40 transition-all hover:shadow-[0_0_15px_rgba(201,169,109,0.15)] group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#C9A96D]/10 p-4 rounded-lg mb-6 inline-block">
              <svg className="w-8 h-8 text-[#C9A96D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#C9A96D] transition-colors">Success Case Study</h3>
            <p className="text-gray-300 mb-6">Read how we helped a healthcare business owner achieve a successful exit and 40% valuation increase.</p>
            <Link 
              href="/case-studies/healthcare-exit"
              className="flex items-center text-[#C9A96D] font-medium hover:text-[#D6B67A] transition-colors"
            >
              Read Case Study
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}