"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useRef, useState } from "react";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { HeadingSection } from "../ui/Typography";

// Custom easeOutBack function (consistente con secciones anteriores)
const easeOutBack = (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
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

const pillarsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const pillarItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
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

// Investment thesis pillars data
const thesisPillars = [
  {
    id: 1,
    number: "01",
    title: "Market Leadership Potential",
    description: "We target businesses with established market presence that can be elevated to clear leadership positions through operational improvements and strategic capital allocation.",
    metrics: [
      { label: "Min. Revenue", value: "$2M+" },
      { label: "Market Share", value: "Top 5" },
      { label: "Growth Rate", value: ">10%" },
    ],
    backgroundColor: "from-blue-900/20 via-indigo-900/15 to-blue-900/10",
    borderColor: "border-blue-500/20",
    numberColor: "text-blue-400",
  },
  {
    id: 2,
    number: "02",
    title: "Operational Transformation",
    description: "We identify companies with inefficient processes that can be systematically optimized through digital transformation, automation, and operational best practices.",
    metrics: [
      { label: "Margin Growth", value: "15-30%" },
      { label: "Process Automation", value: "40-60%" },
      { label: "Efficiency Gain", value: "25%+" },
    ],
    backgroundColor: "from-emerald-900/20 via-teal-900/15 to-emerald-900/10",
    borderColor: "border-emerald-500/20",
    numberColor: "text-emerald-400",
  },
  {
    id: 3,
    number: "03",
    title: "Recurring Revenue Models",
    description: "We prioritize businesses with subscription or service-based models that can be optimized to increase customer lifetime value and reduce acquisition costs.",
    metrics: [
      { label: "Target ARR", value: "60%+" },
      { label: "Retention Rate", value: ">85%" },
      { label: "LTV:CAC", value: ">3:1" },
    ],
    backgroundColor: "from-amber-900/20 via-orange-900/15 to-amber-900/10",
    borderColor: "border-amber-500/20",
    numberColor: "text-amber-400",
  },
  {
    id: 4,
    number: "04",
    title: "Expansion Opportunities",
    description: "We look for businesses with clear geographic or vertical expansion potential that can be realized through our existing network and cross-border operational expertise.",
    metrics: [
      { label: "New Markets", value: "2-3/year" },
      { label: "TAM Growth", value: "3-5x" },
      { label: "Cross-sell", value: "30%+" },
    ],
    backgroundColor: "from-purple-900/20 via-fuchsia-900/15 to-purple-900/10",
    borderColor: "border-purple-500/20",
    numberColor: "text-purple-400",
  },
];

// Performance metrics data
const performanceMetrics = [
  { id: 1, label: "Target IRR", value: "25-35%", icon: "/icons/chart-up.svg" },
  { id: 2, label: "Hold Period", value: "5-7 Years", icon: "/icons/clock.svg" },
  { id: 3, label: "Revenue Growth", value: "3-5x", icon: "/icons/revenue.svg" },
  { id: 4, label: "EBITDA Growth", value: "4-7x", icon: "/icons/profit.svg" },
];

export default function InvestmentThesis() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  // Thesis pillar card component
  const ThesisPillarCard = ({ number, title, description, metrics, backgroundColor, borderColor, numberColor, index }) => {
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, { once: true, margin: "-50px" });
    
    return (
      <motion.div
        ref={cardRef}
        variants={pillarItemVariants}
        custom={index}
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${backgroundColor} border ${borderColor} p-6 backdrop-blur-sm`}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(null)}
      >
        {/* Background subtle patterns */}
        <div className="absolute inset-0 bg-[url('/backgrounds/grid.svg')] opacity-[0.03] mix-blend-overlay"></div>
        
        {/* Number indicator */}
        <div className={`text-4xl font-bold ${numberColor} mb-3 flex items-center`}>
          <span>{number}</span>
          <motion.div
            initial={{ width: 0 }}
            animate={isCardInView ? { width: "60px" } : { width: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.7, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-white/30 to-transparent ml-4"
          />
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 mb-6">{description}</p>
        
        {/* Metrics grid */}
        <div className="relative h-px w-full mb-4 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            variants={lineVariants}
            initial="hidden"
            animate={isCardInView ? "visible" : "hidden"}
            style={{
              background: "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))",
            }}
          />
        </div>
        
        <div className="grid grid-cols-3 gap-2 mt-auto">
          {metrics.map((metric: { label: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | null | undefined> | null | undefined; value: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, idx: Key | null | undefined) => (
            <div key={idx} className="text-center">
              <p className="text-white/50 text-xs mb-1">{metric.label}</p>
              <p className="text-white font-bold">{metric.value}</p>
            </div>
          ))}
        </div>
        
        {/* Hover effect */}
        {activeIndex === index && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"
          />
        )}
      </motion.div>
    );
  };

  return (
    <Section 
      className="py-24 bg-black text-white relative overflow-hidden"
      id="investment-thesis"
    >
      {/* Enhanced Navy Gradient Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-black via-[#1a263e]/90 to-[#111827]/95"
        style={{ y: backgroundY }}
      />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/backgrounds/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      
      {/* Dynamic accent lighting */}
      <motion.div
        className="absolute top-1/4 right-[-20%] w-[50%] h-[40%] rounded-full bg-[#d4af37]/5 blur-[200px] -z-10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-[-20%] w-[60%] h-[50%] rounded-full bg-blue-500/5 blur-[200px] -z-10"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [0.8, 1, 0.8],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />

      <Container 
        className="relative z-10"
        ref={sectionRef}
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          {/* Section pre-title */}
          <motion.p
            variants={titleVariants}
            className="text-[#d4af37] font-medium uppercase tracking-wider mb-2"
          >
            Our Approach
          </motion.p>
          
          {/* Section Title with animated underline */}
          <motion.div variants={titleVariants} className="mb-5">
            <HeadingSection className="max-w-2xl">
              A Systematic Investment Framework with Proven Results
            </HeadingSection>
          </motion.div>
          
          {/* Section description */}
          <motion.p 
            variants={titleVariants}
            className="text-lg text-white/70 max-w-2xl"
          >
            We apply a disciplined framework to identify, acquire, and scale businesses with high potential.
            Our thesis is built on measurable metrics and operational execution—not abstract theories or market timing.
          </motion.p>
        </motion.div>

        {/* Investment Thesis Pillars */}
        <motion.div
          variants={pillarsVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16"
        >
          {thesisPillars.map((pillar, index) => (
            <ThesisPillarCard key={pillar.id} {...pillar} index={index} />
          ))}
        </motion.div>

        {/* Performance metrics section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative rounded-2xl bg-gradient-to-br from-[#d4af37]/10 to-[#d4af37]/5 border border-[#d4af37]/20 p-8 overflow-hidden"
        >
          {/* Background subtle patterns */}
          <div className="absolute inset-0 bg-[url('/backgrounds/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
          
          <motion.h3 
            variants={titleVariants}
            className="text-2xl font-bold text-white mb-6 flex items-center"
          >
            <span className="mr-3">Portfolio Performance Targets</span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
              className="h-px bg-gradient-to-r from-[#d4af37]/50 to-transparent"
            />
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
            {performanceMetrics.map((metric, index) => (
              <motion.div 
                key={metric.id}
                variants={titleVariants}
                custom={index + 1}
                className="text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mb-3">
                  <img src={metric.icon} alt={metric.label} className="w-6 h-6" />
                </div>
                <p className="text-white/50 text-sm mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-white">{metric.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.a
            href="#case-studies"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(212, 175, 55, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2.5 text-white/90 hover:text-white transition duration-400 ease-out"
          >
            <span>See our thesis in action</span>
            <motion.span
              aria-hidden
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </Container>
    </Section>
  );
}