"use client";
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ReferralPartners() {
  return (
    <section className="bg-gradient-to-b from-[#0A0A0A] to-[#132042] py-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/latam-map.svg')] bg-no-repeat bg-center bg-contain"></div>
      
      <Container>
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Brokers & <span className="text-[color:var(--color-gold)]">Consultants</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Partner with us to provide premium exit options for your clients.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
          {/* Benefits */}
          <motion.div 
            className="bg-[#0A0A0A]/60 p-8 rounded-lg border border-[color:var(--color-gold)]/20 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <span className="w-10 h-1 bg-[color:var(--color-gold)] mr-4"></span>
              Benefits for Partners
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="w-6 h-6 text-[color:var(--color-gold)] mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-200 group-hover:text-white transition-colors">Competitive referral fees</span>
              </li>
              <li className="flex items-start group">
                <div className="w-6 h-6 text-[color:var(--color-gold)] mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-200 group-hover:text-white transition-colors">Quick decision-making process</span>
              </li>
              <li className="flex items-start group">
                <div className="w-6 h-6 text-[color:var(--color-gold)] mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-200 group-hover:text-white transition-colors">Transparent communication</span>
              </li>
              <li className="flex items-start group">
                <div className="w-6 h-6 text-[color:var(--color-gold)] mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-200 group-hover:text-white transition-colors">Long-term partnership opportunities</span>
              </li>
            </ul>
          </motion.div>
          
          {/* How It Works */}
          <motion.div 
            className="bg-[#0A0A0A]/60 p-8 rounded-lg border border-[color:var(--color-gold)]/20 backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <span className="w-10 h-1 bg-[color:var(--color-gold)] mr-4"></span>
              How It Works
            </h3>
            <ol className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[color:var(--color-gold)]/20 text-[color:var(--color-gold)] rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[color:var(--color-gold)] mb-1">Refer a business</h4>
                  <p className="text-gray-300 text-sm">Refer a business that meets our criteria</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[color:var(--color-gold)]/20 text-[color:var(--color-gold)] rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[color:var(--color-gold)] mb-1">Quick response</h4>
                  <p className="text-gray-300 text-sm">We contact the business owner within 48 hours</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[color:var(--color-gold)]/20 text-[color:var(--color-gold)] rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[color:var(--color-gold)] mb-1">Due diligence</h4>
                  <p className="text-gray-300 text-sm">If there&apos;s a fit, we proceed with due diligence</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[color:var(--color-gold)]/20 text-[color:var(--color-gold)] rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[color:var(--color-gold)] mb-1">Get paid</h4>
                  <p className="text-gray-300 text-sm">Upon successful acquisition, you receive your fee</p>
                </div>
              </li>
            </ol>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link 
            href="/partner-program"
            className="bg-[color:var(--color-gold)] hover:bg-[color:var(--color-gold)]/90 text-[#0A0A0A] px-8 py-4 rounded-md font-medium transition-all hover:scale-105 shadow-md hover:shadow-lg inline-block"
          >
            Become a Referral Partner
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}