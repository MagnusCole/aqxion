'use client';

import { useEffect, useState } from 'react';

interface ReadingProgressProps {
  readTime: string;
}

export default function ReadingProgress({ readTime }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(readTime);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const article = document.querySelector('.blog-content') as HTMLElement;
      if (!article) return;

      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      const progressValue = Math.min(100, Math.max(0, ((scrollTop - articleTop + windowHeight) / articleHeight) * 100));
      setProgress(progressValue);

      // Calculate remaining time
      const totalMinutes = parseInt(readTime);
      const remainingMinutes = Math.max(0, Math.ceil(totalMinutes * (1 - progressValue / 100)));
      setTimeLeft(remainingMinutes + ' min');

      // Show/hide back to top button
      setShowBackToTop(scrollTop > 500);
    };

    // Generate table of contents
    const generateTOC = () => {
      const tocContainer = document.getElementById('table-of-contents');
      const mobileTocContainer = document.getElementById('mobile-table-of-contents');
      const headings = document.querySelectorAll('.blog-content h1, .blog-content h2, .blog-content h3');
      
      if (headings.length > 0) {
        const generateLinks = (container: HTMLElement) => {
          container.innerHTML = '';
          headings.forEach((heading, index) => {
            const id = 'heading-' + index;
            heading.id = id;
            
            const tocLink = document.createElement('a');
            tocLink.href = '#' + id;
            tocLink.textContent = heading.textContent || '';
            
            // Add classes based on heading level
            if (heading.tagName === 'H2') {
              tocLink.className = 'h2';
            } else if (heading.tagName === 'H3') {
              tocLink.className = 'h3';
            }
            
            tocLink.addEventListener('click', (e) => {
              e.preventDefault();
              heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            
            container.appendChild(tocLink);
          });
        };

        if (tocContainer) generateLinks(tocContainer);
        if (mobileTocContainer) generateLinks(mobileTocContainer);
      }
    };

    // Highlight current section in TOC
    const highlightCurrentSection = () => {
      const headings = document.querySelectorAll('.blog-content h2[id]');
      const tocLinks = document.querySelectorAll('#table-of-contents a');
      
      let current = '';
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100) {
          current = heading.id;
        }
      });
      
      tocLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    };

    const handleScroll = () => {
      updateProgress();
      highlightCurrentSection();
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Initialize
    updateProgress();
    generateTOC();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [readTime]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Reading Progress Card - Simplified */}
      <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-center justify-between text-sm">
          <span className="text-blue-800 font-medium">Progreso de lectura</span>
          <span className="text-blue-600">{timeLeft} restantes</span>
        </div>
        <div className="mt-2 bg-blue-200 rounded-full h-1.5">
          <div 
            className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-40 ${
          showBackToTop ? 'opacity-100 visible transform scale-100' : 'opacity-0 invisible transform scale-95'
        }`}
        aria-label="Volver al inicio"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
}
