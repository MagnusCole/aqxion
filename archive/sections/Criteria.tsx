"use client";
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function Criteria() {
  return (
    <Section className="py-[var(--spacing)]" id="criteria">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[40px] font-bold text-[color:var(--color-text)] mb-8">
            Acquisition Criteria
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="flex flex-col">
              <div className="text-[color:var(--color-accent-blue)] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[18px] text-[color:var(--color-gray-mid)]">
                Revenue Size: $1M–$10M USD
              </p>
            </div>
            
            <div className="flex flex-col">
              <div className="text-[color:var(--color-accent-blue)] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-[18px] text-[color:var(--color-gray-mid)]">
                Sectors: Healthcare, Infrastructure, Services
              </p>
            </div>
            
            <div className="flex flex-col">
              <div className="text-[color:var(--color-accent-blue)] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-[18px] text-[color:var(--color-gray-mid)]">
                Owner Profile: Ready to transition without succession
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}