"use client";
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function Testimonial() {
  return (
    <Section className="py-[var(--spacing)]" id="refer">
      <div className="bg-[color:var(--color-gray-light)] py-[var(--spacing)]">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[16px] italic text-[color:var(--color-gray-mid)] mb-10">
              Trusted by leading family offices, brokers, and business owners across LATAM.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              {/* Logos en escala de grises - Estos son placeholders */}
              <div className="flex items-center justify-center">
                <div className="w-24 h-12 bg-gray-300 rounded opacity-70"></div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-24 h-12 bg-gray-300 rounded opacity-70"></div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-24 h-12 bg-gray-300 rounded opacity-70"></div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-24 h-12 bg-gray-300 rounded opacity-70"></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}