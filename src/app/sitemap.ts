import fs from 'fs'
import path from 'path'

interface SitemapEntry {
  url: string
  lastModified: string
  changeFrequency: 'daily' | 'weekly' | 'monthly'
  priority: number
}

export default function sitemap(): SitemapEntry[] {
  const baseUrl = 'https://aqxion.com'
  
  // Static routes
  const staticRoutes: SitemapEntry[] = [
    '',
    '/guias',
    '/recursos', 
    '/cursos',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Dynamic guias routes
  let guiasRoutes: SitemapEntry[] = []
  const contentDir = path.join(process.cwd(), 'content')
  if (fs.existsSync(contentDir)) {
    const guiasFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'))
    guiasRoutes = guiasFiles.map((file) => ({
      url: `${baseUrl}/guias/${file.replace('.md', '')}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  }

  // Dynamic recursos routes  
  let recursosRoutes: SitemapEntry[] = []
  const recursosDir = path.join(process.cwd(), 'recursos')
  if (fs.existsSync(recursosDir)) {
    const recursosFiles = fs.readdirSync(recursosDir).filter(f => f.endsWith('.md'))
    recursosRoutes = recursosFiles.map((file) => ({
      url: `${baseUrl}/recursos/${file.replace('.md', '')}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const, 
      priority: 0.7,
    }))
  }

  return [...staticRoutes, ...guiasRoutes, ...recursosRoutes]
}
