"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { HeadingSection } from "../ui/Typography";

// Custom easeOutBack function (consistente con Hero)
const easeOutBack = (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

// Variants for animations
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutBack },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: easeOutBack },
  },
};

const lineVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 0.6,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: easeOutBack,
    },
  },
};

// Data for the Why AQXION cards
const whyChooseData = [
  {
    id: 1,
    icon: "/icons/acquisition-expertise.svg",
    title: "Acquisition Expertise",
    description:
      "Our team of M&A specialists has successfully executed over 50 acquisitions across Latin America, with a combined value exceeding $500M.",
    stat: "$500M+",
    statLabel: "in Acquisitions",
    gradient: "from-blue-500/20 to-purple-500/20",
    iconGlow: "bg-blue-400/20",
  },
  {
    id: 2,
    icon: "/icons/operational-excellence.svg",
    title: "Operational Excellence",
    description:
      "With over 100 years of combined experience, our operators transform acquired companies through proven frameworks and digital innovation.",
    stat: "100+",
    statLabel: "Years Experience",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconGlow: "bg-emerald-400/20",
  },
  {
    id: 3,
    icon: "/icons/legacy-preservation.svg",
    title: "Legacy Preservation",
    description:
      "We honor the legacy of founders while scaling their vision. Our approach preserves company culture while unlocking new growth potential.",
    stat: "95%",
    statLabel: "Retention Rate",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconGlow: "bg-amber-400/20",
  },
  {
    id: 4,
    icon: "/icons/global-network.svg",
    title: "Global Network",
    description:
      "Access our extensive network of industry leaders, capital partners, and technology resources spanning Latin America, Europe, and the US.",
    stat: "25+",
    statLabel: "Countries",
    gradient: "from-indigo-500/20 to-violet-500/20",
    iconGlow: "bg-indigo-400/20",
  },
];

// Component for individual cards
const FeatureCard = ({ icon, title, description, stat, statLabel, gradient, iconGlow, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
      className={`relative rounded-2xl bg-gradient-to-br ${gradient} backdrop-blur-sm p-px overflow-hidden group`}
    >
      <div className="relative bg-black/70 backdrop-blur-md rounded-2xl p-6 h-full z-10 flex flex-col">
        {/* Background subtle patterns */}
        <div className="absolute inset-0 bg-[url('/backgrounds/grid.svg')] opacity-[0.03] mix-blend-overlay"></div>
        
        {/* Icon with animated glow effect */}
        <div className="mb-4 relative">
          <div className="relative z-10 bg-black/40 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center border border-white/5">
            <img src={icon} alt={title} className="w-8 h-8" />
          </div>
          <motion.div
            className={`absolute -inset-1 rounded-xl ${iconGlow} blur-xl opacity-30 -z-10`}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 mb-6 flex-grow">{description}</p>
        
        {/* Stats with animated line */}
        <div className="mt-auto">
          <div className="relative h-px w-full mb-4 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              variants={lineVariants}
              style={{
                background: "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))",
              }}
            />
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white mr-2">{stat}</span>
            <span className="text-sm text-white/60">{statLabel}</span>
          </div>
        </div>
        
        {/* Hover effect overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
        />
      </div>
    </motion.div>
  );
};

export default function WhyAqxion() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Section className="py-24 bg-black text-white relative overflow-hidden" id="Why">
      {/* Enhanced Navy Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-[#1a263e]/90 to-[#2a3a55]/80" />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/backgrounds/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      
      {/* Dynamic accent lighting */}
      <motion.div
        className="absolute top-0 -right-1/4 w-1/2 h-1/2 rounded-full bg-[#d4af37]/5 blur-[150px] -z-10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div
        className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-blue-500/5 blur-[150px] -z-10"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [0.8, 1, 0.8],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1 
        }}
      />

      <Container className="relative z-10">
        <motion.div
          ref={sectionRef}
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          {/* Section Title with animated underline */}
          <motion.div variants={titleVariants} className="mb-4">
            <HeadingSection className="inline-block relative">
              Why Choose 
              <span className="text-[#d4af37] ml-2 relative">
                AQXION
                <motion.span 
                  className="absolute -bottom-1 left-0 h-[3px] bg-[#d4af37]/30 rounded-full blur-sm"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
                />
              </span>
            </HeadingSection>
          </motion.div>
          
          {/* Section subtitle */}
          <motion.p 
            variants={titleVariants}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Our unique approach to acquisitions combines deep industry expertise, operational 
            excellence, and a commitment to preserving the legacy of the businesses we acquire.
          </motion.p>
        </motion.div>

        {/* Cards Grid with spotlight effect */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative"
          onMouseLeave={() => setHoveredCard(null)}
        >
          {whyChooseData.map((item, index) => (
            <div 
              key={item.id}
              onMouseEnter={() => setHoveredCard(item.id)}
              className="relative"
            >
              <FeatureCard {...item} index={index} />
              
              {/* Spotlight effect when hovering */}
              {hoveredCard === item.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent rounded-2xl" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
        
        {/* Additional CTA at the bottom */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(212, 175, 55, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2.5 bg-[#d4af37]/10 border border-[#d4af37]/30 text-white rounded-full px-8 py-3 hover:bg-[#d4af37]/20 transition duration-400 ease-out overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Schedule Your Consultation
              <motion.span
                aria-hidden
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
        </motion.div>
      </Container>
    </Section>
  );
}