"use client";
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function AcquisitionThesis() {
  return (
    <Section className="py-[var(--spacing)]" id="thesis">
      <div className="bg-[color:var(--color-gray-light)] py-[var(--spacing)]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[40px] font-bold text-[color:var(--color-text)] mb-8">
              AQXION Acquisition Thesis
            </h2>
            
            <div className="flex">
              <div className="w-1 bg-[color:var(--color-accent-blue)] mr-6 self-stretch"></div>
              <p className="text-[18px] text-[color:var(--color-text)] opacity-80">
                We acquire profitable LATAM companies with clear potential, stable cashflows, and owners ready for transition. We preserve legacy and multiply value through operational precision.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}