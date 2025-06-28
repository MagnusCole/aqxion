// AI OPTIMIZATION: Imports consolidados y estructura simplificada
import { HeroSection } from "@/sections/HeroSection";
import { ProblemSection } from "@/sections/ProblemSection";
import { PainPointSection } from "@/sections/PainPointSection";
import { SolutionSection } from "@/sections/SolutionSection";
import { CTASection } from "@/sections/CTASection";

// AI OPTIMIZATION: Homepage optimizada para conversión máxima con flujo PAS
export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <PainPointSection />
      <SolutionSection />
      <CTASection />
    </main>
  );
}
