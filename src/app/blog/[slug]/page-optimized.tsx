import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getPostContent, getAllPosts } from '@/lib/blog';
// AI OPTIMIZATION: Removed TableOfContents import - often not used effectively and adds complexity
import '@/styles/blog-clean.css';
import '@/styles/blog-overrides.css';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post no encontrado - AQXION Blog',
    };
  }

  return {
    title: `${post.title} - AQXION Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = await getPostContent(slug);

  return (
    // AI OPTIMIZATION: Simplified root container, removed min-h-screen as it's not needed
    <div className="bg-white">
      {/* AI OPTIMIZATION: Using semantic <article> for better SEO and structure */}
      <article className="max-w-4xl mx-auto px-6 pt-20 pb-12">
        {/* AI OPTIMIZATION: Cleaner header section with optimal spacing */}
        <header className="mb-12">
          {/* AI OPTIMIZATION: Meta badges - reduced size for better visual hierarchy */}
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">
              {new Date(post.date).toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 text-sm font-medium">{post.readTime}</span>
          </div>
          
          {/* AI OPTIMIZATION: Better responsive typography with improved line height */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-[1.1]">
            {post.title}
          </h1>

          {/* AI OPTIMIZATION: Show excerpt if available for better engagement */}
          {post.excerpt && (
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
              {post.excerpt}
            </p>
          )}
          
          {/* AI OPTIMIZATION: Streamlined author section with better visual balance */}
          <div className="flex items-center justify-between py-6 border-t border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-white font-semibold text-sm">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">{post.author}</div>
                <div className="text-gray-500 text-sm">Especialista en Marketing Digital</div>
              </div>
            </div>
            
            {/* AI OPTIMIZATION: Simplified sharing buttons with better accessibility */}
            <div className="flex gap-2">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://aqxion.com/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                aria-label="Compartir en Twitter"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://aqxion.com/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                aria-label="Compartir en LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </header>

        {/* AI OPTIMIZATION: Featured image with better loading and aspect ratio */}
        <div className="mb-12">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-auto rounded-2xl shadow-xl"
            priority
          />
        </div>

        {/* AI OPTIMIZATION: Main content section with better typography */}
        <section className="prose prose-lg max-w-none">
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </section>

        {/* AI OPTIMIZATION: Clean article footer with tags */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg border transition-colors cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Artículo completado
            </div>
          </div>
        </footer>
      </article>

      {/* AI OPTIMIZATION: Strategic CTA section with multiple conversion paths */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para aplicar esto en tu negocio?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No dejes que tus competidores se adelanten. Agenda una consulta estratégica gratuita y descubre cómo implementar estas estrategias en tu caso específico.
            </p>
          </div>
          
          {/* AI OPTIMIZATION: Multiple CTA options for better conversion */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Primary CTA */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Consulta Estratégica</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  15 minutos para analizar tu situación y crear un plan de acción personalizado.
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl w-full justify-center"
                >
                  Agendar Consulta
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <p className="text-gray-500 text-xs mt-3">
                  Gratuita • Sin compromiso • Resultados garantizados
                </p>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Más Estrategias</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Descubre más artículos y estrategias probadas para hacer crecer tu negocio.
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl w-full justify-center"
                >
                  Ver Más Artículos
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <p className="text-gray-500 text-xs mt-3">
                  Contenido actualizado semanalmente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
