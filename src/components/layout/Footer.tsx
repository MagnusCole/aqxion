"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Enhanced easeOutBack function (matches hero component)
const easeOutBack = (t: number): number => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutBack }
  }
};

const linkVariants = {
  hover: {
    x: 5,
    color: "#d4af37",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const dividerVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 0.6,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: easeOutBack
    }
  }
};

const copyrightVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.6,
      ease: easeOutBack
    }
  }
};

export default function Footer() {
  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Subtle gradient spotlight effect that follows cursor
  const spotlightX = useSpring(useTransform(mouseX, [-800, 800], [-200, 200]), { 
    stiffness: 40, 
    damping: 30 
  });
  const spotlightY = useSpring(useTransform(mouseY, [-800, 800], [-200, 200]), { 
    stiffness: 40, 
    damping: 30 
  });

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Intersection Observer for reveal animation
  const footerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // Year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      role="contentinfo"
      className="relative w-full bg-gradient-to-t from-[#0A0A0A] to-[#111827] text-white px-8 py-20 overflow-hidden"
    >
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0c0e14] to-[#1a263e]/90 opacity-95" />
      
      {/* Noise Layer */}
      <div className="absolute inset-0 z-0 bg-[url('/backgrounds/noise.svg')] opacity-[0.03] mix-blend-soft-light pointer-events-none" />
      
      {/* Dynamic Spotlight Effect */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          background: "radial-gradient(circle 400px at center, rgba(212,175,55,0.05), transparent 70%)",
          top: spotlightY,
          left: spotlightX,
        }}
      />
      
      {/* Subtle animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Gold accent line */}
        <motion.div
          className="w-20 h-px mx-auto mb-16"
          variants={dividerVariants}
        >
          <motion.div
            className="w-full h-full"
            style={{
              background: "linear-gradient(to right, rgba(212, 175, 55, 0), #d4af37, rgba(212, 175, 55, 0))",
            }}
          />
        </motion.div>
        
        {/* Navigation Grid */}
        <nav
          aria-labelledby="footer-navigation"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12"
        >
          {/* PARTNER WITH US */}
          <motion.div variants={sectionVariants}>
            <motion.h4 
              id="footer-navigation" 
              className="text-sm uppercase text-gray-400 tracking-widest mb-4 font-medium"
              whileHover={{ color: "#d4af37" }}
            >
              Partner With Us
            </motion.h4>
            <ul className="space-y-3 text-sm">
              <motion.li whileHover="hover">
                <Link href="#work" className="hover:text-[#d4af37] duration-300 flex items-center group" aria-label="Work with AQXION">
                  <motion.span variants={linkVariants}>Work with us</motion.span>
                  <motion.span 
                    className="inline-block opacity-0 group-hover:opacity-100 ml-1 transform translate-x-0 group-hover:translate-x-1"
                    transition={{ duration: 0.3 }}
                  >→</motion.span>
                </Link>
              </motion.li>
              <motion.li whileHover="hover">
                <Link href="#join" className="hover:text-[#d4af37] duration-300 flex items-center group" aria-label="Join AQXION">
                  <motion.span variants={linkVariants}>Join us</motion.span>
                  <motion.span 
                    className="inline-block opacity-0 group-hover:opacity-100 ml-1 transform translate-x-0 group-hover:translate-x-1"
                    transition={{ duration: 0.3 }}
                  >→</motion.span>
                </Link>
              </motion.li>
              <motion.li whileHover="hover">
                <Link href="#sell" className="hover:text-[#d4af37] duration-300 flex items-center group" aria-label="Sell your company to AQXION">
                  <motion.span variants={linkVariants}>Sell to us</motion.span>
                  <motion.span 
                    className="inline-block opacity-0 group-hover:opacity-100 ml-1 transform translate-x-0 group-hover:translate-x-1"
                    transition={{ duration: 0.3 }}
                  >→</motion.span>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          
          {/* GROWTH & STRATEGY */}
          <motion.div variants={sectionVariants}>
            <motion.h4 
              className="text-sm uppercase text-gray-400 tracking-widest mb-4 font-medium"
              whileHover={{ color: "#d4af37" }}
            >
              Growth & Strategy
            </motion.h4>
            <ul className="space-y-3 text-sm">
              <motion.li whileHover="hover">
                <Link href="#thesis" className="hover:text-[#d4af37] duration-300 flex items-center group" aria-label="Growth thesis">
                  <motion.span variants={linkVariants}>Thesis</motion.span>
                  <motion.span 
                    className="inline-block opacity-0 group-hover:opacity-100 ml-1 transform translate-x-0 group-hover:translate-x-1"
                    transition={{ duration: 0.3 }}
                  >→</motion.span>
                </Link>
              </motion.li>
              <motion.li whileHover="hover">
                <Link href="#criteria" className="hover:text-[#d4af37] duration-300 flex items-center group" aria-label="Acquisition criteria">
                  <motion.span variants={linkVariants}>Criteria</motion.span>
                  <motion.span 
                    className="inline-block opacity-0 group-hover:opacity-100 ml-1 transform translate-x-0 group-hover:translate-x-1"
                    transition={{ duration: 0.3 }}
                  >→</motion.span>
                </Link>
              </motion.li>
              <motion.li whileHover="hover">
                <Link href="#playbook" className="hover:text-[#d4af37] duration-300 flex items-center group" aria-label="Operational playbook">
                  <motion.span variants={linkVariants}>Playbook</motion.span>
                  <motion.span 
                    className="inline-block opacity-0 group-hover:opacity-100 ml-1 transform translate-x-0 group-hover:translate-x-1"
                    transition={{ duration: 0.3 }}
                  >→</motion.span>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          
          {/* COMPANY */}
          <motion.div variants={sectionVariants}>
            <motion.h4 
              className="text-sm uppercase text-gray-400 tracking-widest mb-4 font-medium"
              whileHover={{ color: "#d4af37" }}
            >
              Company
            </motion.h4>
            <ul className="space-y-3 text-sm">
              <motion.li whileHover="hover">
                <Link href="#manifesto" className="hover:text-[#d4af37] duration-300 flex items-center group" aria-label="AQXION manifesto">
                  <motion.span variants={linkVariants}>Manifesto</motion.span>
                  <motion.span 
                    className="inline-block opacity-0 group-hover:opacity-100 ml-1 transform translate-x-0 group-hover:translate-x-1"
                    transition={{ duration: 0.3 }}
                  >→</motion.span>
                </Link>
              </motion.li>
              <motion.li whileHover="hover">
                <Link href="#team" className="hover:text-[#d4af37] duration-300 flex items-center group" aria-label="Meet the team">
                  <motion.span variants={linkVariants}>Team</motion.span>
                  <motion.span 
                    className="inline-block opacity-0 group-hover:opacity-100 ml-1 transform translate-x-0 group-hover:translate-x-1"
                    transition={{ duration: 0.3 }}
                  >→</motion.span>
                </Link>
              </motion.li>
              <motion.li whileHover="hover">
                <Link href="#news" className="hover:text-[#d4af37] duration-300 flex items-center group" aria-label="News and insights">
                  <motion.span variants={linkVariants}>News & Insights</motion.span>
                  <motion.span 
                    className="inline-block opacity-0 group-hover:opacity-100 ml-1 transform translate-x-0 group-hover:translate-x-1"
                    transition={{ duration: 0.3 }}
                  >→</motion.span>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          
          {/* LEGAL & CONTACT */}
          <motion.div variants={sectionVariants}>
            <motion.h4 
              className="text-sm uppercase text-gray-400 tracking-widest mb-4 font-medium"
              whileHover={{ color: "#d4af37" }}
            >
              Legal & Contact
            </motion.h4>
            <ul className="space-y-3 text-sm">
              <motion.li whileHover="hover">
                <Link href="#privacy" className="hover:text-[#d4af37] duration-300 flex items-center group" aria-label="Privacy policy">
                  <motion.span variants={linkVariants}>Privacy Policy</motion.span>
                  <motion.span 
                    className="inline-block opacity-0 group-hover:opacity-100 ml-1 transform translate-x-0 group-hover:translate-x-1"
                    transition={{ duration: 0.3 }}
                  >→</motion.span>
                </Link>
              </motion.li>
              <motion.li whileHover="hover">
                <Link href="#legal" className="hover:text-[#d4af37] duration-300 flex items-center group" aria-label="Legal framework">
                  <motion.span variants={linkVariants}>Legal Framework</motion.span>
                  <motion.span 
                    className="inline-block opacity-0 group-hover:opacity-100 ml-1 transform translate-x-0 group-hover:translate-x-1"
                    transition={{ duration: 0.3 }}
                  >→</motion.span>
                </Link>
              </motion.li>
              <motion.li whileHover="hover">
                <a
                  href="mailto:deals@aqxion.com"
                  className="hover:text-[#d4af37] duration-300 flex items-center group"
                  aria-label="Email AQXION at deals@aqxion.com"
                  rel="noopener noreferrer"
                >
                  <motion.span variants={linkVariants}>deals@aqxion.com</motion.span>
                  <motion.span 
                    className="inline-block opacity-0 group-hover:opacity-100 ml-1 transform translate-x-0 group-hover:translate-x-1"
                    transition={{ duration: 0.3 }}
                  >→</motion.span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </nav>
        
        {/* Logo & Social Media */}
        <motion.div 
          className="mt-16 flex flex-col md:flex-row items-center justify-between"
          variants={sectionVariants}
        >
          {/* Logo */}
          <motion.div 
            className="mb-8 md:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: easeOutBack }}
          >
            <Link href="/" aria-label="AQXION Home">
              <motion.img 
                src="/logo/aqxion-logo.svg" 
                alt="AQXION Logo" 
                className="h-8"
                initial={{ opacity: 0.9 }}
                whileHover={{ 
                  opacity: 1,
                  filter: "drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))" 
                }}
              />
            </Link>
          </motion.div>
          
          {/* Social Media */}
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          >
            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow AQXION on LinkedIn"
              className="text-gray-400 hover:text-[#d4af37]"
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -3, 3, 0],
                transition: { duration: 0.5, ease: "easeOut" } 
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </motion.a>
            
            {/* Twitter */}
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow AQXION on Twitter"
              className="text-gray-400 hover:text-[#d4af37]"
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -3, 3, 0],
                transition: { duration: 0.5, ease: "easeOut" } 
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.24 1.247 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </motion.a>
            
            {/* Instagram */}
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow AQXION on Instagram"
              className="text-gray-400 hover:text-[#d4af37]"
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -3, 3, 0],
                transition: { duration: 0.5, ease: "easeOut" } 
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Copyright */}
        <motion.div 
          className="relative mt-16 text-center"
          variants={copyrightVariants}
        >
          {/* Gold accent line */}
          <motion.div
            className="w-32 h-px mx-auto mb-6"
            variants={dividerVariants}
          >
            <motion.div
              className="w-full h-full"
              style={{
                background: "linear-gradient(to right, rgba(212, 175, 55, 0), rgba(212, 175, 55, 0.5), rgba(212, 175, 55, 0))",
              }}
            />
          </motion.div>
          
          <motion.p 
            className="text-white font-semibold"
            whileHover={{ 
              color: "#d4af37", 
              transition: { duration: 0.3 }
            }}
          >
            AQXION © {currentYear} – Strategic Acquisitions for the Next 50 Years
          </motion.p>
          
          <motion.p 
            className="mt-2 text-gray-500 text-sm"
            whileHover={{ 
              color: "white", 
              transition: { duration: 0.3 }
            }}
          >
            Built for Legacy. Engineered for the Future.
          </motion.p>
          
          {/* Animated gold accent */}
          <motion.div
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-3 h-3 opacity-20"
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 rounded-full bg-[#d4af37] blur-md" />
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}