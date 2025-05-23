"use client"

import Container from '@/components/ui/Container';
import { motion } from 'framer-motion';

export default function AboutAqxion() {
  return (
    <section className="bg-[#0A0A0A] py-24 relative overflow-hidden">
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
            Our Expertise
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            With over two decades of experience in mergers and acquisitions, we&apos;ve built a reputation for excellence in LATAM.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mx-auto mb-12">
          {/* Our Story */}
          <motion.div 
            className="bg-[#132042] p-8 rounded-lg border border-[#C9A96D]/20"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 mb-4">
              Since 2005, Aqxion has transformed businesses across LATAM with a focus on sustainable growth and successful transitions.
            </p>
            <p className="text-gray-300 mb-4">
              Our team combines deep industry knowledge with operational expertise to create value for business owners looking to exit with confidence.
            </p>
            <p className="text-gray-300">
              We&apos;ve completed 12+ successful acquisitions across healthcare, technology, and professional services sectors, with a combined transaction value exceeding $150M.
            </p>
          </motion.div>
          
          {/* Timeline */}
          <motion.div 
            className="bg-[#132042] p-8 rounded-lg border border-[#C9A96D]/20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Our Journey</h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l border-[#C9A96D]/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[#C9A96D]"></div>
                <div className="text-[#C9A96D] font-medium mb-1">2005</div>
                <p className="text-gray-300">Founded with a vision to transform business acquisitions in LATAM</p>
              </div>
              
              <div className="relative pl-8 border-l border-[#C9A96D]/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[#C9A96D]"></div>
                <div className="text-[#C9A96D] font-medium mb-1">2010</div>
                <p className="text-gray-300">Completed our first major healthcare acquisition</p>
              </div>
              
              <div className="relative pl-8 border-l border-[#C9A96D]/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[#C9A96D]"></div>
                <div className="text-[#C9A96D] font-medium mb-1">2015</div>
                <p className="text-gray-300">Expanded into technology sector with 3 strategic acquisitions</p>
              </div>
              
              <div className="relative pl-8 border-l border-[#C9A96D]/30">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[#C9A96D]"></div>
                <div className="text-[#C9A96D] font-medium mb-1">2020</div>
                <p className="text-gray-300">Reached milestone of 10+ successful acquisitions</p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[#C9A96D]"></div>
                <div className="text-[#C9A96D] font-medium mb-1">Today</div>
                <p className="text-gray-300">Leading M&A firm in LATAM with proven expertise and track record</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Certifications & Memberships */}
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-6">Certifications & Memberships</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-[#132042] px-4 py-2 rounded-md border border-[#C9A96D]/20">
              <span className="text-[#C9A96D]">Certified M&A Professional</span>
            </div>
            <div className="bg-[#132042] px-4 py-2 rounded-md border border-[#C9A96D]/20">
              <span className="text-[#C9A96D]">LATAM Business Association</span>
            </div>
            <div className="bg-[#132042] px-4 py-2 rounded-md border border-[#C9A96D]/20">
              <span className="text-[#C9A96D]">International Business Brokers</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}