import { HeroSection } from "@/sections/HeroSection";
import { ProblemSection } from "@/sections/ProblemSection";
import { PainPointSection } from "@/sections/PainPointSection";
import { SolutionSection } from "@/sections/SolutionSection";
import { CTASection } from "@/sections/CTASection";

export default function Home() {  // Enlaces del footer
return (
    <>
      <HeroSection />
      <ProblemSection />
      <PainPointSection />
      <SolutionSection />
      <CTASection />
    </>
  );
}
