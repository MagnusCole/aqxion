interface SitemapEntry {
  url: string
  lastModified: string
  changeFrequency: 'daily' | 'weekly' | 'monthly'
  priority: number
}

export default function sitemap(): SitemapEntry[] {
  const baseUrl = 'https://app.myperu.pe'
  
  // Static routes - Only existing pages
  const staticRoutes: SitemapEntry[] = [
    '',
    '/privacidad',
    '/terminos',
    '/reclamaciones',
    '/dmca',
    '/eliminar-datos',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' as const : 'monthly' as const,
    priority: route === '' ? 1.0 : 0.7,
  }))

  return staticRoutes
}
