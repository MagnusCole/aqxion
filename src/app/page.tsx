import { HeroSection } from "@/sections/HeroSection";
import { ExampleSection } from "@/sections/ExampleSection";
import { AboutSection } from "@/sections/AboutSection";
import { StatsAndTrackRecordSection } from "@/sections/StatsAndTrackRecordSection";
import { FAQSection } from "@/sections/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsAndTrackRecordSection />
      <FAQSection />
      <ExampleSection />
      <AboutSection />
    </>
  );
}
