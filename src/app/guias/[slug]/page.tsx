import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content');
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  
  // Buscar archivos recursivamente en subdirectorios
  function getAllMarkdownFiles(dir: string): string[] {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    
    list.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat && stat.isDirectory()) {
        results = results.concat(getAllMarkdownFiles(filePath));
      } else if (file.endsWith('.md')) {
        // Solo necesitamos el nombre del archivo para el slug
        results.push(path.basename(file, '.md'));
      }
    });
    
    return results;
  }
  
  const slugs = getAllMarkdownFiles(contentDir);
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .replace('-2025', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    title: `Guía: ${title} – Recursos Gratis para Tu Crecimiento`,
    description: `Guía práctica: ${title}. Pasos simples para implementar solo.`,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Función para encontrar el archivo en cualquier subdirectorio
  function findMarkdownFile(slug: string): string | null {
    const contentDir = path.join(process.cwd(), 'content');
    
    function searchInDirectory(dir: string): string | null {
      const list = fs.readdirSync(dir);
      
      for (const item of list) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          const found = searchInDirectory(itemPath);
          if (found) return found;
        } else if (item === `${slug}.md`) {
          return itemPath;
        }
      }
      return null;
    }
    
    return searchInDirectory(contentDir);
  }
  
  const filePath = findMarkdownFile(slug);
  if (!filePath) {
    throw new Error(`Guide not found: ${slug}`);
  }
  
  // Format title better
  const title = slug
    .replace('-2025', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/\b\w+\b/g, (word) => {
      const replacements: { [key: string]: string } = {
        'Seo': 'SEO',
        'Ia': 'IA', 
        'Roi': 'ROI',
        'Pymes': 'PYMEs',
        'Whatsapp': 'WhatsApp'
      };
      return replacements[word] || word;
    });
  
  if (!fs.existsSync(filePath)) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          
          {/* 404 Illustration */}
          <div className="w-20 h-20 mx-auto mb-8 bg-slate-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Guía no encontrada
          </h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Esta guía no está disponible. Explora nuestras otras guías gratuitas.
          </p>
          <a 
            href="/guias" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Ver todas las guías
          </a>
        </div>
      </div>
    );
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const html = marked(content);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero - World-Class Minimalism */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Breadcrumb Navigation - Apple Style */}
          <nav className="mb-8">
            <a 
              href="/guias" 
              className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Guías
            </a>
          </nav>
          
          {/* Status - Subtle Excellence */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-700 text-sm font-medium">Lista para implementar</span>
          </div>
          
          {/* Title - Typography Excellence */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[0.9] tracking-tight">
            {title}
          </h1>
          
          {/* Subtitle - Clarity Focus */}
          <p className="text-2xl text-slate-600 mb-12 leading-relaxed font-light max-w-3xl">
            Guía práctica paso-a-paso. Resultados inmediatos.
          </p>
          
        </div>
      </section>
      
      {/* Content - Editorial Excellence */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Reading Progress Indicator */}
          <div className="sticky top-0 z-10 h-1 bg-slate-100 mb-16">
            <div className="h-full bg-green-500 w-0 transition-all duration-300" id="reading-progress"></div>
          </div>
          
          {/* Content Container */}
          <div className="prose prose-lg prose-slate max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: html }} 
              className="
                [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-6 [&>h2]:mt-16 [&>h2]:tracking-tight first:[&>h2]:mt-0
                [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-slate-800 [&>h3]:mb-4 [&>h3]:mt-12 [&>h3]:tracking-tight
                [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:text-slate-700 [&>h4]:mb-3 [&>h4]:mt-8
                [&>p]:text-slate-700 [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-lg
                [&>ul]:text-slate-700 [&>ul]:mb-6 [&>ul]:space-y-2
                [&>ol]:text-slate-700 [&>ol]:mb-6 [&>ol]:space-y-2
                [&>li]:text-lg [&>li]:leading-relaxed
                [&>blockquote]:border-l-4 [&>blockquote]:border-green-400 [&>blockquote]:pl-6 [&>blockquote]:italic 
                [&>blockquote]:text-slate-600 [&>blockquote]:bg-green-50 [&>blockquote]:py-4 [&>blockquote]:my-8 [&>blockquote]:rounded-r-lg
                [&>code]:bg-slate-100 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono
                [&>pre]:bg-slate-900 [&>pre]:text-slate-100 [&>pre]:p-6 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:my-8
                [&>a]:text-green-600 [&>a]:no-underline [&>a]:font-medium hover:[&>a]:text-green-700 hover:[&>a]:underline
                [&>strong]:font-semibold [&>strong]:text-slate-900
                [&>em]:italic [&>em]:text-slate-600
              "
            />
          </div>
          
          {/* Action Section - Subtle CTA */}
          <div className="mt-20 p-8 bg-slate-50 border border-slate-200 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">¿Te ha sido útil esta guía?</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Implementa estos pasos en tu negocio. Encuentra más recursos gratuitos en nuestra página principal.
                </p>
                <a 
                  href="/guias" 
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                >
                  Ver más guías
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Reading Progress Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('scroll', function() {
              const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
              const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
              const scrolled = (winScroll / height) * 100;
              const progressBar = document.getElementById('reading-progress');
              if (progressBar) {
                progressBar.style.width = scrolled + '%';
              }
            });
          `
        }}
      />

    </article>
  );
}
