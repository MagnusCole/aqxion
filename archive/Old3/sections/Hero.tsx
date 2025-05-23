"use client";
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { PrimaryButton, OutlineButton } from '@/components/ui/Buttons';

export default function Hero() {
  return (
    <Section className="pt-[120px] pb-[80px]">
      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-[60px] font-bold text-[color:var(--color-text)] mb-6">
            We acquire and scale companies in LATAM.
          </h1>
          
          <p className="text-[18px] text-[color:var(--color-gray-mid)] mb-10">
            Operational precision. Strategic transitions. Real control.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <PrimaryButton href="#connect">
              Request Exit Strategy
            </PrimaryButton>
            
            <OutlineButton href="#refer">
              Refer a Business
            </OutlineButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}