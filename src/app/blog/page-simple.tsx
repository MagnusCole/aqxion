import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
}

function getGuides(): Guide[] {
  const contentDir = path.join(process.cwd(), 'content');
  if (!fs.existsSync(contentDir)) return [];
  
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  
  return files.map(file => {
    const slug = file.replace('.md', '');
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

    // Categorizar automáticamente por palabras clave
    let category = 'General';
    let excerpt = 'Guía práctica paso-a-paso';

    if (slug.includes('clientes') || slug.includes('atraer') || slug.includes('leads')) {
      category = '🎯 Conseguir Clientes';
      excerpt = 'Estrategias probadas para atraer más clientes a tu negocio';
    } else if (slug.includes('ads') || slug.includes('publicidad') || slug.includes('google-maps') || slug.includes('seo')) {
      category = '📢 Marketing Digital';
      excerpt = 'Técnicas de marketing que generan resultados reales';
    } else if (slug.includes('automatiz') || slug.includes('ia-') || slug.includes('agentes-ia') || slug.includes('workflows')) {
      category = '🤖 Automatización';
      excerpt = 'Automatiza tu negocio y ahorra tiempo valioso';
    } else if (slug.includes('ventas') || slug.includes('conversion') || slug.includes('embudo')) {
      category = '💰 Aumentar Ventas';
      excerpt = 'Convierte más visitantes en clientes pagantes';
    } else if (slug.includes('retention') || slug.includes('promotores') || slug.includes('customer')) {
      category = '❤️ Fidelizar Clientes';
      excerpt = 'Mantén a tus clientes felices y que recomienden';
    }

    return { slug, title, excerpt, category };
  });
}

function organizeGuidesByProblem(guides: Guide[]) {
  const problems = {
    '🚨 ¿No tienes clientes?': guides.filter(g => g.category === '🎯 Conseguir Clientes'),
    '💸 ¿Gastas mucho en publicidad?': guides.filter(g => g.category === '📢 Marketing Digital'),
    '⏰ ¿Falta tiempo para todo?': guides.filter(g => g.category === '🤖 Automatización'),
    '📈 ¿Necesitas vender más?': guides.filter(g => g.category === '💰 Aumentar Ventas'),
    '🔄 ¿Pierdes clientes?': guides.filter(g => g.category === '❤️ Fidelizar Clientes'),
  };
  
  return problems;
}

export default function BlogPage() {
  const guides = getGuides();
  const problemGroups = organizeGuidesByProblem(guides);
  
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Ultra-Simple */}
      <section className="section-padding bg-neutral-50">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Guías para Hacer Crecer tu PYME
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Step-by-step. Probadas. Gratis. <strong>Implementa hoy, ve resultados en 30 días.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Problem-Based Categorization */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            
            {Object.entries(problemGroups).map(([problem, categoryGuides]) => (
              categoryGuides.length > 0 && (
                <div key={problem} className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
                    {problem}
                  </h2>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {categoryGuides.slice(0, 6).map((guide) => (
                      <Link 
                        key={guide.slug} 
                        href={`/blog/${guide.slug}`}
                        className="block bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg hover:border-primary-200 transition-all duration-200"
                      >
                        <h3 className="font-semibold text-neutral-900 mb-3 leading-tight text-lg">
                          {guide.title}
                        </h3>
                        <p className="text-neutral-600 text-sm mb-4">
                          {guide.excerpt}
                        </p>
                        <div className="text-primary-600 font-medium text-sm">
                          Leer guía →
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {categoryGuides.length > 6 && (
                    <div className="text-center">
                      <button className="text-primary-600 hover:text-primary-700 font-medium">
                        Ver todas las guías de esta categoría +
                      </button>
                    </div>
                  )}
                </div>
              )
            ))}

            {/* CTA Final */}
            <div className="mt-16 text-center bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                ¿Necesitas implementar esto YA?
              </h3>
              <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
                Si quieres saltarte el DIY y que nosotros implementemos estas estrategias por ti, podemos ayudarte.
              </p>
              <Link href="/recursos" className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200">
                Ver Recursos Listos para Usar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
