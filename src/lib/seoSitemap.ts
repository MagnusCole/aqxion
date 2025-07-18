// LLM-OPTIMIZED: Sitemap generation for AQXION growth agency
// Auto-improved SEO sitemap with dynamic page discovery

// import { getAllPosts } from '@/lib/posts';

export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Base URLs for AQXION website
const BASE_URL = 'https://aqxion.com';

// Static pages configuration for AQXION
const staticPages: SitemapEntry[] = [
  {
    url: '',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    url: '/servicios',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.9
  },
  {
    url: '/casos-de-exito',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/contacto',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/sobre-nosotros',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    url: '/blog',
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: 0.7
  },
  {
    url: '/recursos',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.6
  },
  {
    url: '/auditoria-gratuita',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.9
  }
];

// Service pages for AQXION
const servicePages: SitemapEntry[] = [
  {
    url: '/servicios/lead-generation',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/servicios/automatizacion-marketing',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/servicios/ads-management',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/servicios/outreach-automatizado',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/servicios/content-strategy',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/servicios/growth-stack',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.8
  }
];

// Industry-specific landing pages
const industryPages: SitemapEntry[] = [
  {
    url: '/industrias/clinicas-dentales',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/industrias/consultores',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/industrias/ecommerce',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/industrias/saas',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/industrias/inmobiliarias',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.7
  }
];

// Generate dynamic blog post entries
export const getBlogSitemapEntries = async (): Promise<SitemapEntry[]> => {
  try {
    // Mock blog posts - replace with actual blog posts from your system
    const posts = [
      {
        slug: '5-errores-comunes-negocios-locales-alejan-clientes-2025',
        date: '2025-01-01T00:00:00.000Z'
      },
      {
        slug: 'automatizacion-marketing-pequenos-negocios-2025',
        date: '2025-01-02T00:00:00.000Z'
      },
      {
        slug: 'caso-exito-clinica-dental-duplicar-consultas-2025',
        date: '2025-01-03T00:00:00.000Z'
      }
      // Add more blog posts as needed
    ];
    
    return posts.map(post => ({
      url: `/blog/${post.slug}`,
      lastmod: post.date || new Date().toISOString(),
      changefreq: 'weekly' as const,
      priority: 0.6
    }));
  } catch (error) {
    console.warn('Failed to get blog posts for sitemap:', error);
    return [];
  }
};

// Generate complete sitemap entries
export const getAllSitemapEntries = async (): Promise<SitemapEntry[]> => {
  const blogEntries = await getBlogSitemapEntries();
  
  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...blogEntries
  ];
};

// Generate XML sitemap
export const generateSitemap = async (): Promise<string> => {
  const entries = await getAllSitemapEntries();
  
  const sitemapEntries = entries.map(entry => {
    const url = `${BASE_URL}${entry.url}`;
    const lastmod = entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : '';
    const changefreq = entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : '';
    const priority = entry.priority ? `<priority>${entry.priority}</priority>` : '';
    
    return `  <url>
    <loc>${url}</loc>${lastmod ? `
    ${lastmod}` : ''}${changefreq ? `
    ${changefreq}` : ''}${priority ? `
    ${priority}` : ''}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;
};

// Generate robots.txt optimized for AQXION
export const generateRobotsTxt = (): string => {
  return `# Robots.txt for AQXION Growth Agency
# Optimized for SEO and growth marketing content

User-agent: *
Allow: /

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

# Block admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /dashboard/
Disallow: /private/

# Block development files
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /*.yml$
Disallow: /*.yaml$

# Block search and filter pages to prevent duplicate content
Disallow: /search?
Disallow: /*?utm_*
Disallow: /*?fbclid=*
Disallow: /*?gclid=*

# Allow important resources for SEO
Allow: /images/
Allow: /css/
Allow: /js/
Allow: /_next/static/
Allow: /favicon.ico

# Special directives for lead generation
Allow: /auditoria-gratuita
Allow: /consulta-gratuita
Allow: /contacto

# Crawl delay (optional, adjust based on server capacity)
Crawl-delay: 1

# Sitemap location
Sitemap: ${BASE_URL}/sitemap.xml
Sitemap: ${BASE_URL}/sitemap-blog.xml

# Additional sitemaps for better organization
Sitemap: ${BASE_URL}/sitemap-services.xml
Sitemap: ${BASE_URL}/sitemap-industries.xml`;
};

// Generate service-specific sitemap
export const generateServiceSitemap = (): string => {
  const sitemapEntries = servicePages.map(entry => {
    const url = `${BASE_URL}${entry.url}`;
    const lastmod = entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : '';
    const changefreq = entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : '';
    const priority = entry.priority ? `<priority>${entry.priority}</priority>` : '';
    
    return `  <url>
    <loc>${url}</loc>${lastmod ? `
    ${lastmod}` : ''}${changefreq ? `
    ${changefreq}` : ''}${priority ? `
    ${priority}` : ''}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;
};

// Generate blog-specific sitemap
export const generateBlogSitemap = async (): Promise<string> => {
  const blogEntries = await getBlogSitemapEntries();
  
  const sitemapEntries = blogEntries.map(entry => {
    const url = `${BASE_URL}${entry.url}`;
    const lastmod = entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : '';
    const changefreq = entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : '';
    const priority = entry.priority ? `<priority>${entry.priority}</priority>` : '';
    
    return `  <url>
    <loc>${url}</loc>${lastmod ? `
    ${lastmod}` : ''}${changefreq ? `
    ${changefreq}` : ''}${priority ? `
    ${priority}` : ''}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapEntries}
</urlset>`;
};

// Generate industry-specific sitemap
export const generateIndustrySitemap = (): string => {
  const sitemapEntries = industryPages.map(entry => {
    const url = `${BASE_URL}${entry.url}`;
    const lastmod = entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : '';
    const changefreq = entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : '';
    const priority = entry.priority ? `<priority>${entry.priority}</priority>` : '';
    
    return `  <url>
    <loc>${url}</loc>${lastmod ? `
    ${lastmod}` : ''}${changefreq ? `
    ${changefreq}` : ''}${priority ? `
    ${priority}` : ''}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;
};

// Sitemap index for better organization
export const generateSitemapIndex = (): string => {
  const currentDate = new Date().toISOString();
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-blog.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-services.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-industries.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;
};

// SEO recommendations based on sitemap analysis
export const analyzeSitemapSEO = async () => {
  const entries = await getAllSitemapEntries();
  
  const analysis = {
    totalPages: entries.length,
    highPriorityPages: entries.filter(e => (e.priority || 0) >= 0.8).length,
    blogPosts: entries.filter(e => e.url.startsWith('/blog/')).length,
    servicePages: entries.filter(e => e.url.startsWith('/servicios/')).length,
    industryPages: entries.filter(e => e.url.startsWith('/industrias/')).length,
    recommendations: [] as string[]
  };
  
  // Generate recommendations
  if (analysis.blogPosts < 20) {
    analysis.recommendations.push('Crear más contenido de blog para mejorar autoridad temática');
  }
  
  if (analysis.servicePages < 5) {
    analysis.recommendations.push('Desarrollar páginas específicas para cada servicio');
  }
  
  if (analysis.industryPages < 3) {
    analysis.recommendations.push('Crear landing pages para industrias target');
  }
  
  if (analysis.highPriorityPages < 5) {
    analysis.recommendations.push('Identificar y optimizar páginas de alta conversión');
  }
  
  return analysis;
};
