import Container from '@/components/ui/Container';
import Link from 'next/link';

export default function Careers() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Build your career with a company that&apos;s transforming businesses across LATAM.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-12">
          {/* Why Join Us */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Why Join AQXION</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Work with experienced industry leaders</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Gain exposure to multiple industries</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Competitive compensation and benefits</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Opportunities for rapid career growth</span>
              </li>
            </ul>
          </div>
          
          {/* Current Openings */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Current Openings</h3>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-blue-900 mb-1">Business Development Manager</h4>
                <p className="text-gray-600 text-sm mb-2">Full-time • Remote</p>
                <p className="text-gray-700 mb-3">Lead our acquisition efforts and develop relationships with business owners across LATAM.</p>
                <Link href="/careers/business-development" className="text-blue-500 hover:text-blue-700 font-medium text-sm">Learn more →</Link>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-blue-900 mb-1">Operations Specialist</h4>
                <p className="text-gray-600 text-sm mb-2">Full-time • Hybrid</p>
                <p className="text-gray-700 mb-3">Help optimize and grow our portfolio companies through operational improvements.</p>
                <Link href="/careers/operations-specialist" className="text-blue-500 hover:text-blue-700 font-medium text-sm">Learn more →</Link>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Financial Analyst</h4>
                <p className="text-gray-600 text-sm mb-2">Full-time • On-site</p>
                <p className="text-gray-700 mb-3">Conduct financial analysis and due diligence for potential acquisitions.</p>
                <Link href="/careers/financial-analyst" className="text-blue-500 hover:text-blue-700 font-medium text-sm">Learn more →</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href="/join-team"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors inline-block"
          >
            View All Positions
          </Link>
        </div>
      </Container>
    </section>
  );
}