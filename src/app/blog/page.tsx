import { readdirSync } from 'fs';
import path from 'path';

export default function BlogPage() {
  // Read posts from the content directory
  const contentDirectory = path.join(process.cwd(), 'content');
  let posts: string[] = [];
  
  try {
    posts = readdirSync(contentDirectory).filter(file => 
      file.endsWith('.md') && !file.includes('outreach')
    );
  } catch (error) {
    console.log('No content directory found');
  }

  // Categorize posts by problem type
  const categorizedPosts = {
    clientes: posts.filter(post => 
      post.includes('clientes') || post.includes('seo') || post.includes('google') || post.includes('generar') || post.includes('leads')
    ),
    automatizar: posts.filter(post => 
      post.includes('automatiz') || post.includes('ia-') || post.includes('bot') || post.includes('workflow') || post.includes('marketing-automatizado')
    ),
    tiempo: posts.filter(post => 
      post.includes('tiempo') || post.includes('contenido') || post.includes('rapido') || post.includes('sin-esfuerzo') || post.includes('ahorra')
    ),
    otros: posts.filter(post => 
      !post.includes('clientes') && !post.includes('seo') && !post.includes('google') && !post.includes('generar') && 
      !post.includes('leads') && !post.includes('automatiz') && !post.includes('ia-') && !post.includes('bot') && 
      !post.includes('workflow') && !post.includes('marketing-automatizado') && !post.includes('tiempo') && 
      !post.includes('contenido') && !post.includes('rapido') && !post.includes('sin-esfuerzo') && !post.includes('ahorra')
    )
  };

  const formatTitle = (slug: string) => {
    return slug
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
          'Whatsapp': 'WhatsApp',
          'Google': 'Google',
          'Meta': 'Meta',
          'Ads': 'Ads'
        };
        return replacements[word] || word;
      });
  };

  return (
    <main className="section-padding bg-white min-h-screen">
      <div className="container-padding">
        
        {/* Hero Ultra-Simplificado */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            ¿Cuál es tu problema?
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Encuentra tu guía en 10 segundos
          </p>
        </div>

        {/* Categorías Por Problema */}
        <div className="space-y-12">
          
          {/* Necesito Más Clientes */}
          {categorizedPosts.clientes.length > 0 && (
            <div>
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">🎯</div>
                <h2 className="text-2xl font-bold text-neutral-900">Necesito Más Clientes</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorizedPosts.clientes.map((post) => {
                  const slug = post.replace('.md', '');
                  const title = formatTitle(slug);
                  
                  return (
                    <a 
                      key={slug}
                      href={`/blog/${slug}`} 
                      className="block p-4 border border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-neutral-50 transition-colors duration-200"
                    >
                      <h3 className="font-medium text-neutral-800 mb-2 line-clamp-2">{title}</h3>
                      <div className="text-sm text-neutral-600">Leer guía →</div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quiero Automatizar */}
          {categorizedPosts.automatizar.length > 0 && (
            <div>
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">⚙️</div>
                <h2 className="text-2xl font-bold text-neutral-900">Quiero Automatizar</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorizedPosts.automatizar.map((post) => {
                  const slug = post.replace('.md', '');
                  const title = formatTitle(slug);
                  
                  return (
                    <a 
                      key={slug}
                      href={`/blog/${slug}`} 
                      className="block p-4 border border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-neutral-50 transition-colors duration-200"
                    >
                      <h3 className="font-medium text-neutral-800 mb-2 line-clamp-2">{title}</h3>
                      <div className="text-sm text-neutral-600">Leer guía →</div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* No Tengo Tiempo */}
          {categorizedPosts.tiempo.length > 0 && (
            <div>
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">⏰</div>
                <h2 className="text-2xl font-bold text-neutral-900">No Tengo Tiempo</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorizedPosts.tiempo.map((post) => {
                  const slug = post.replace('.md', '');
                  const title = formatTitle(slug);
                  
                  return (
                    <a 
                      key={slug}
                      href={`/blog/${slug}`} 
                      className="block p-4 border border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-neutral-50 transition-colors duration-200"
                    >
                      <h3 className="font-medium text-neutral-800 mb-2 line-clamp-2">{title}</h3>
                      <div className="text-sm text-neutral-600">Leer guía →</div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Otras Guías */}
          {categorizedPosts.otros.length > 0 && (
            <div>
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">📚</div>
                <h2 className="text-2xl font-bold text-neutral-900">Otras Guías Útiles</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorizedPosts.otros.map((post) => {
                  const slug = post.replace('.md', '');
                  const title = formatTitle(slug);
                  
                  return (
                    <a 
                      key={slug}
                      href={`/blog/${slug}`} 
                      className="block p-4 border border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-neutral-50 transition-colors duration-200"
                    >
                      <h3 className="font-medium text-neutral-800 mb-2 line-clamp-2">{title}</h3>
                      <div className="text-sm text-neutral-600">Leer guía →</div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Fallback if no posts */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-neutral-600">Cargando guías...</p>
          </div>
        )}

        {/* CTA Simple */}
        <div className="mt-16 text-center">
          <a href="/" className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
            ← Volver al Inicio
          </a>
        </div>
      </div>
    </main>
  );
}
