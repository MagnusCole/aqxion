"use client"

import Container from '@/components/ui/Container';
import { motion } from 'framer-motion';

export default function TrackRecord() {
  return (
    <section className="bg-gradient-to-b from-[#0F1A36] to-[#0A0A0A] py-24 relative overflow-hidden">
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
            Our Track Record
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We have a proven history of successful acquisitions and business growth.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {/* Acquisitions */}
          <motion.div 
            className="bg-[#132042] p-8 rounded-lg border border-[#C9A96D]/20 text-center relative overflow-hidden group hover:border-[#C9A96D]/40 transition-all hover:shadow-[0_0_15px_rgba(201,169,109,0.15)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Círculo progresivo */}
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full border-4 border-[#C9A96D]/20 border-t-[#C9A96D] -rotate-45 opacity-20 group-hover:opacity-30 transition-opacity"></div>
            
            <div className="text-5xl font-bold text-[#C9A96D] mb-3">12+</div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#C9A96D] transition-colors">Acquisitions</h3>
            <p className="text-gray-300">Successful business transitions across LATAM</p>
          </motion.div>
          
          {/* Growth */}
          <motion.div 
            className="bg-[#132042] p-8 rounded-lg border border-[#C9A96D]/20 text-center relative overflow-hidden group hover:border-[#C9A96D]/40 transition-all hover:shadow-[0_0_15px_rgba(201,169,109,0.15)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Círculo progresivo */}
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full border-4 border-[#C9A96D]/20 border-t-[#C9A96D] -rotate-45 opacity-20 group-hover:opacity-30 transition-opacity"></div>
            
            <div className="text-5xl font-bold text-[#C9A96D] mb-3">35%</div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#C9A96D] transition-colors">Average Growth</h3>
            <p className="text-gray-300">Post-acquisition revenue increase</p>
          </motion.div>
          
          {/* Experience */}
          <motion.div 
            className="bg-[#132042] p-8 rounded-lg border border-[#C9A96D]/20 text-center relative overflow-hidden group hover:border-[#C9A96D]/40 transition-all hover:shadow-[0_0_15px_rgba(201,169,109,0.15)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Círculo progresivo */}
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full border-4 border-[#C9A96D]/20 border-t-[#C9A96D] -rotate-45 opacity-20 group-hover:opacity-30 transition-opacity"></div>
            
            <div className="text-5xl font-bold text-[#C9A96D] mb-3">20+</div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#C9A96D] transition-colors">Years Experience</h3>
            <p className="text-gray-300">Combined leadership expertise</p>
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Industries We&apos;ve Transformed</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Healthcare */}
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <div>
                <h4 className="font-semibold text-blue-900">Healthcare Services</h4>
                <p className="text-gray-600 text-sm">Medical practices, clinics, and specialized services</p>
              </div>
            </div>
            
            {/* Technology */}
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h4 className="font-semibold text-blue-900">Technology</h4>
                <p className="text-gray-600 text-sm">Software companies, IT services, and SaaS businesses</p>
              </div>
            </div>
            
            {/* Professional Services */}
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h4 className="font-semibold text-blue-900">Professional Services</h4>
                <p className="text-gray-600 text-sm">Consulting firms, accounting practices, and legal services</p>
              </div>
            </div>
            
            {/* Manufacturing */}
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <div>
                <h4 className="font-semibold text-blue-900">Manufacturing</h4>
                <p className="text-gray-600 text-sm">Specialized production and industrial services</p>
              </div>
            </div>
            
            {/* Distribution */}
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              <div>
                <h4 className="font-semibold text-blue-900">Distribution</h4>
                <p className="text-gray-600 text-sm">Wholesale, logistics, and supply chain businesses</p>
              </div>
            </div>
            
            {/* Retail */}
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <div>
                <h4 className="font-semibold text-blue-900">Retail</h4>
                <p className="text-gray-600 text-sm">Specialty stores and e-commerce businesses</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}