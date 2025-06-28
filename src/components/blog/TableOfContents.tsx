'use client';

import { useEffect } from 'react';

export default function TableOfContents() {
  useEffect(() => {
    const generateTOC = () => {
      const tocContainer = document.getElementById('table-of-contents');
      const headings = document.querySelectorAll('.blog-content h2, .blog-content h3');
      
      if (headings.length > 2 && tocContainer) {
        const tocWrapper = document.getElementById('toc-wrapper');
        if (tocWrapper) {
          tocWrapper.style.display = 'block';
        }
        
        tocContainer.innerHTML = '';
        
        headings.forEach((heading, index) => {
          const id = 'section-' + index;
          heading.id = id;
          
          const tocLink = document.createElement('a');
          tocLink.href = '#' + id;
          tocLink.textContent = heading.textContent || '';
          tocLink.className = `block text-sm hover:text-gray-900 hover:bg-blue-50 transition-all py-2 px-3 rounded ${
            heading.tagName === 'H3' ? 'ml-4 text-gray-600 font-normal' : 'font-semibold text-gray-700'
          }`;
          
          tocLink.addEventListener('click', (e) => {
            e.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Highlight activo
            document.querySelectorAll('#table-of-contents a').forEach(link => {
              link.classList.remove('bg-blue-100', 'text-blue-800');
            });
            tocLink.classList.add('bg-blue-100', 'text-blue-800');
          });
          
          tocContainer.appendChild(tocLink);
        });
      } else if (tocContainer) {
        const tocWrapper = document.getElementById('toc-wrapper');
        if (tocWrapper) {
          tocWrapper.style.display = 'none';
        }
      }
    };

    setTimeout(generateTOC, 100);
  }, []);

  return (
    <div 
      id="toc-wrapper" 
      className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-100 rounded-xl p-6"
      style={{ display: 'none' }}
    >
      <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
        Contenido del Artículo
      </h3>
      <nav id="table-of-contents" className="space-y-1">
        {/* Se genera automáticamente */}
      </nav>
    </div>
  );
}
