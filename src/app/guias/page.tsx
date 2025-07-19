import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import EmailSignup from '@/components/EmailSignup';

interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
}

function getGuides(): Guide[] {
  const contentDir = path.join(process.cwd(), 'content');
  if (!fs.existsSync(contentDir)) return [];
  
  // Buscar archivos recursivamente en subdirectorios
  function getAllMarkdownFiles(dir: string): string[] {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    
    list.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat && stat.isDirectory()) {
        // Recursivamente buscar en subdirectorios
        results = results.concat(getAllMarkdownFiles(filePath));
      } else if (file.endsWith('.md')) {
        // Guardar la ruta relativa desde content/
        const relativePath = path.relative(contentDir, filePath);
        results.push(relativePath);
      }
    });
    
    return results;
  }
  
  const files = getAllMarkdownFiles(contentDir);
  
  return files.map(file => {
    // Crear slug desde la ruta completa (ej: no-clientes/seo-local-basico -> seo-local-basico)
    const slug = path.basename(file, '.md');
    
    // Obtener la categoría desde la carpeta padre
    const folderPath = path.dirname(file);
    const category = folderPath === '.' ? 'general' : folderPath;
    
    const title = slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace(/2025/, '- 2025')
      .replace(/\b\w+\b/g, (word) => {
        const replacements: { [key: string]: string } = {
          'Ia': 'IA', 'Roi': 'ROI', 'Seo': 'SEO', 'Whatsapp': 'WhatsApp',
          'Ads': 'Publicidad', 'Email': 'Email', 'Google': 'Google'
        };
        return replacements[word] || word;
      });

    // Asignar excerpt basado en la carpeta
    let excerpt = 'Guía práctica paso-a-paso';
    
    if (category === 'no-clientes') {
      excerpt = 'Estrategias probadas para atraer más clientes a tu negocio';
    } else if (category === 'gastos-publicidad') {
      excerpt = 'Reduce gastos y mejora ROI en marketing y publicidad';
    } else if (category === 'falta-tiempo') {
      excerpt = 'Automatiza procesos y recupera tiempo valioso';
    }

    return { slug, title, excerpt, category };
  });
}

function organizeGuidesByTopPains(guides: Guide[]) {
  // Organizamos por las carpetas específicas de contenido
  const topPains = {
    '🚨 ¿No tienes clientes?': {
      guides: guides.filter(g => g.category === 'no-clientes'),
      color: 'green'
    },
    
    '💸 ¿Gastas mucho en publicidad?': {
      guides: guides.filter(g => g.category === 'gastos-publicidad'), 
      color: 'blue'
    },
    
    '⏰ ¿Falta tiempo para todo?': {
      guides: guides.filter(g => g.category === 'falta-tiempo'),
      color: 'amber'
    }
  };
  
  return topPains;
}

function getPainColorClasses(color: string) {
  switch (color) {
    case 'green':
      return {
        accent: 'bg-green-500',
        hoverBorder: 'hover:border-green-300',
        hoverText: 'group-hover:text-green-600',
        textColor: 'text-green-600',
        disclaimer: 'bg-green-50 border-green-200 text-green-700'
      };
    case 'blue':
      return {
        accent: 'bg-blue-500',
        hoverBorder: 'hover:border-blue-300',
        hoverText: 'group-hover:text-blue-600',
        textColor: 'text-blue-600',
        disclaimer: 'bg-blue-50 border-blue-200 text-blue-700'
      };
    case 'amber':
      return {
        accent: 'bg-amber-500',
        hoverBorder: 'hover:border-amber-300',
        hoverText: 'group-hover:text-amber-600',
        textColor: 'text-amber-600',
        disclaimer: 'bg-amber-50 border-amber-200 text-amber-700'
      };
    default:
      return {
        accent: 'bg-emerald-500',
        hoverBorder: 'hover:border-emerald-300',
        hoverText: 'group-hover:text-emerald-600',
        textColor: 'text-emerald-600',
        disclaimer: 'bg-emerald-50 border-emerald-200 text-emerald-700'
      };
  }
}

export default function BlogPage() {
  const guides = getGuides();
  const topPains = organizeGuidesByTopPains(guides);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50/40">
      
      {/* Hero siguiendo la vibe: empathy-first, problem-focused */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 via-white to-teal-50/40">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Subtitle natural, no técnico */}
            <p className="text-lg text-slate-600 mb-8">
              Guías Paso a Paso 100% Gratuitas
            </p>
            
            {/* H1 natural, problem-focused pero no dramático */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-12 leading-tight tracking-tight">
              ¿Tu PYME Necesita 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700">
                Crecer Rápido?
              </span>
            </h1>
            
            {/* Benefit-focused subtitle natural */}
            <p className="text-xl text-slate-600 mb-16 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-slate-800">Guías prácticas organizadas por problemas reales.</strong>
              <br />Sin teorías. Sin complicaciones. Implementables hoy mismo.
            </p>
          </div>
        </div>
      </section>

      {/* Problem-first organization siguiendo homepage structure */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8">
                Encuentra la Solución a Tu Problema
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Cada guía resuelve un problema específico de los dueños de PYMEs como tú
              </p>
            </div>
            
            {Object.entries(topPains).map(([problem, { guides, color }]) => {
              const colorClasses = getPainColorClasses(color);
              return guides.length > 0 && (
                <div key={problem} className="mb-24">
                  
                  {/* Problem header con color coding */}
                  <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">
                      {problem}
                    </h2>
                    <div className={`w-20 h-1 ${colorClasses.accent} rounded-full`}></div>
                  </div>
                  
                  {/* Grid responsive con color coding */}
                  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-8">
                    {guides.slice(0, 6).map((guide: Guide) => (
                      <li key={guide.slug}>
                        <Link 
                          href={`/guias/${guide.slug}`}
                          className={`block bg-white border-2 border-neutral-200 rounded-xl p-8 ${colorClasses.hoverBorder} hover:shadow-xl transition-all duration-300 group h-full hover:-translate-y-1`}
                        >
                          <span className={`text-xl font-semibold text-slate-800 ${colorClasses.hoverText} transition-colors duration-200 leading-tight block mb-4`}>
                            {guide.title}
                          </span>
                          
                          <p className="text-slate-600 mb-6 leading-relaxed">
                            {guide.excerpt}
                          </p>
                          
                          <span className={`flex items-center text-sm font-medium ${colorClasses.textColor} ${colorClasses.hoverText} transition-colors duration-200`}>
                            <span className={`emoji-icon ${colorClasses.textColor} mr-2`}>📖</span>
                            Leer guía completa
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Disclaimer con color coding por pain */}
                  <div className={`${colorClasses.disclaimer} border rounded-lg p-4 text-center mb-8`}>
                    <p className="text-xs">
                      <strong>Nota:</strong> {
                        color === 'green' ? 'Estrategias probadas para atraer clientes; adapta a tu industria específica.' :
                        color === 'blue' ? 'Técnicas orgánicas validadas; resultados requieren implementación consistente.' :
                        'Automatizaciones requieren configuración inicial; eficiencia aumenta progresivamente.'
                      }
                    </p>
                  </div>
                  
                  {/* Mostrar más si hay más guías */}
                  {guides.length > 6 && (
                    <div className="text-center">
                      <button className={`inline-flex items-center bg-white text-slate-700 border-2 border-neutral-200 ${colorClasses.hoverBorder} px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-md`}>
                        Ver todas en esta categoría
                        <span className="emoji-icon ml-2">👆</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Final Action CTA - Minimalista + Email */}
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ya Tienes el Conocimiento. Es Hora de Actuar.
            </h2>
            
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Con estas guías step-by-step ya no hay excusas. <strong>Implementa y crece</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/recursos" 
                className="inline-flex items-center justify-center bg-white text-emerald-700 px-8 py-4 text-lg font-bold rounded-xl hover:bg-neutral-50 transition-all duration-200 shadow-lg hover:scale-105"
              >
                Acelerar con Templates
                <span className="ml-2">🚀</span>
              </Link>
              
              <Link 
                href="/cursos" 
                className="inline-flex items-center justify-center bg-emerald-700 text-white px-8 py-4 text-lg font-bold rounded-xl hover:bg-emerald-800 transition-all duration-200 shadow-lg hover:scale-105"
              >
                Formación Profunda
                <span className="ml-2">🎓</span>
              </Link>
            </div>

            {/* Email signup minimalista */}
            <div className="border-t border-emerald-500/30 pt-8">
              <p className="text-emerald-200 mb-4 text-sm">
                ¿Quieres nuevas guías gratuitas?
              </p>
              <EmailSignup 
                page="guias"
                buttonText="Sí, avísame"
                theme="green"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
