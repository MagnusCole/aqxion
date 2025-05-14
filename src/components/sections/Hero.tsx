"use client";
import { motion, useMotionValue, useTransform, useSpring} from "framer-motion";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { HeadingHero, Subheading } from "../ui/Typography";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useEffect, useState, useRef } from "react";

// Custom easeOutBack function (approximation)
const easeOutBack = (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.2, 
      ease: easeOutBack,
      staggerChildren: 0.15,
      delayChildren: 0.2
    } 
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: easeOutBack } 
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      delay: 0.6, 
      duration: 0.7, 
      ease: easeOutBack 
    } 
  },
};

const monogramVariants = {
  hidden: { opacity: 0, scale: 0.7, rotateZ: -5 },
  visible: { 
    opacity: 0.95, 
    scale: 1, 
    rotateZ: 0,
    transition: { 
      delay: 0.4, 
      duration: 0.9, 
      ease: easeOutBack 
    } 
  },
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

export default function Hero() {
  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Valores iniciales seguros para SSR
  const rotateX = useTransform(mouseY, [-100, 100], [2, -2]);
  const rotateY = useTransform(mouseX, [-100, 100], [-2, 2]);
  const springRotateX = useSpring(rotateX, { stiffness: 50, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 50, damping: 30 });
  
  // Spotlight effect that follows cursor
  const spotlightX = useSpring(useTransform(mouseX, [-800, 800], [-300, 300]), { 
    stiffness: 40, 
    damping: 25 
  });
  const spotlightY = useSpring(useTransform(mouseY, [-800, 800], [-300, 300]), { 
    stiffness: 40, 
    damping: 25 
  });

  // Handle mouse movement
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX - window.innerWidth / 2);
        mouseY.set(e.clientY - window.innerHeight / 2);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  // Trust signals with fade transition
  const trustSignals = [
    "Over 10 Years of M&A Excellence",
    "50+ Successful Acquisitions",
    "Trusted by Top Family Offices",
    "Latin America's Premier Acquisition Group",
  ];
  const [, setCurrentTrust] = useState(0);
  // Estado para controlar la transición de fade
  const [, setIsChanging] = useState(false);

  // Enhanced trust signal rotation with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentTrust((prev: number) => (prev + 1) % trustSignals.length);
        setIsChanging(false);
      }, 500); // Fade out time before changing text
    }, 5000);
    
    return () => clearInterval(interval);
  }, [trustSignals.length]);

  // Scroll indicator animation
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (scrollIndicatorRef.current) {
        if (window.scrollY > 100) {
          scrollIndicatorRef.current.style.opacity = "0";
        } else {
          scrollIndicatorRef.current.style.opacity = "1";
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section className="min-h-screen flex items-center justify-center text-center bg-black text-white overflow-hidden relative">
      {/* Enhanced Navy Gradient Background with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #1a263e 0%, #2a3a55 50%, #3d4f70 100%)",
          opacity: 0.95,
          transformStyle: "preserve-3d",
          perspective: "2000px",
          rotateX: springRotateX,
          rotateY: springRotateY,
        }}
      />
      
      {/* Dynamic Spotlight Effect */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          background: "radial-gradient(circle 600px at center, rgba(255,255,255,0.08), transparent 60%)",
          top: spotlightY,
          left: spotlightX,
        }}
      />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/backgrounds/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      
      {/* Advanced Particle Effect */}
      <Particles
        className="absolute inset-0 z-1"
        init={loadSlim}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 35, density: { enable: true, value_area: 1200 } },
            color: { value: "#ffffff" },
            opacity: { 
              value: 0.08,
              random: true,
              anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0.04,
                sync: false
              }
            },
            size: { 
              value: 1.5,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                size_min: 0.5,
                sync: false
              }
            },
            shape: { type: "circle" },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              random: true,
              straight: false,
              outMode: "out",
              attract: { enable: false },
            },
            lineLinked: {
              enable: true,
              distance: 200,
              color: "#ffffff",
              opacity: 0.015,
              width: 0.3,
            },
          },
          interactivity: { 
            detect_on: "canvas",
            events: { 
              onhover: { 
                enable: true,
                mode: "grab",
                parallax: {
                  enable: true,
                  smooth: 20,
                  force: 30
                }
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 150,
                line_linked: {
                  opacity: 0.1
                }
              }
            }
          },
          retina_detect: true
        }}
      />
      
      {/* Content */}
      <Container className="relative z-10 max-w-4xl px-4">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Animated AQXION Monogram with enhanced effects */}
          <motion.div
            variants={monogramVariants}
            initial="hidden"
            animate="visible"
            className="relative mb-8"
          >
            <motion.img
              src="/logo/aqxion-monogram.svg"
              alt="AQXION Monogram"
              className="mx-auto w-14 h-14 opacity-85 relative z-20"
              whileHover={{ 
                scale: 1.1, 
                rotateZ: [0, -2, 2, 0], 
                transition: { 
                  duration: 0.8, 
                  ease: "easeInOut", 
                  rotateZ: { 
                    times: [0, 0.3, 0.6, 1],
                    duration: 1.2
                  }
                } 
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-[#d4af37]/20 blur-lg -z-10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: [0.4, 0.8, 0.4], 
                scale: [0.8, 1.2, 0.8], 
                transition: { 
                  repeat: Infinity, 
                  duration: 4, 
                  ease: "easeInOut" 
                } 
              }}
              style={{ x: "-50%", y: "-50%" }}
            />
          </motion.div>
          
          {/* Hero Title with text reveal effect */}
          <motion.div variants={textVariants}>
            <HeadingHero
              className="mb-8 text-6xl md:text-8xl font-extrabold tracking-tight text-white leading-tight shadow-text"
            >
              <span className="relative inline-block">
                <span className="relative z-10">We Buy and Scale</span>
                <motion.span 
                  className="absolute bottom-1 left-0 h-[3px] bg-[#d4af37]/20 w-full -z-10 rounded-full blur-sm"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
                />
              </span>
              <br className="hidden md:inline" />
              <span className="relative inline-block">
                <span className="relative z-10">Businesses in LATAM</span>
                <motion.span 
                  className="absolute bottom-1 left-0 h-[3px] bg-[#d4af37]/20 w-full -z-10 rounded-full blur-sm"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.4, duration: 0.7, ease: "easeOut" }}
                />
              </span>
            </HeadingHero>
          </motion.div>
          
          {/* Subheading with enhanced styling */}
          <motion.div variants={textVariants}>
            <Subheading className="mb-6 text-lg md:text-xl opacity-85 max-w-xl mx-auto leading-relaxed">
            $500M in Acquisitions. +100 years in experience.
              <br className="hidden sm:inline" />
              Built to preserve legacies and maximize value.
            </Subheading>
          </motion.div>
          
          {/* Animated Gradient Divider */}
          <motion.div 
            className="relative h-px mx-auto mb-8 overflow-hidden w-20"
            variants={textVariants}
          >
            <motion.div
              className="absolute inset-0"
              variants={dividerVariants}
              style={{
                background: "linear-gradient(to right, rgba(212, 175, 55, 0), #d4af37, rgba(212, 175, 55, 0))",
                opacity: 0.6,
              }}
            />
          </motion.div>
          
          {/* Call-to-Action Buttons with enhanced hover effects */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <motion.a
              href="#strategy-call"
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.07, 
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2.5 border border-white/85 text-white rounded-full px-7 py-2.5 hover:bg-white hover:text-black transition duration-400 ease-out overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                Get Your Exit Strategy 
                <motion.span 
                  aria-hidden
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </span>
              <motion.span 
                className="absolute inset-0 bg-white z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.a>
            
            <motion.a
              href="#learn-more"
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.07, 
                textShadow: "0 0 10px rgba(255, 255, 255, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-white/85 hover:text-white transition duration-400 ease-out"
            >
              Learn More
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </Container>
      
      {/* Animated Scroll Indicator */}
      <motion.div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 2, duration: 0.8 } 
        }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2"
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              opacity: { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }}
          />
        </motion.div>
        <motion.p 
          className="text-white/40 text-xs mt-2 uppercase tracking-widest"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
        </motion.p>
      </motion.div>
    </Section>
  );
}