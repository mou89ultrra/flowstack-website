import { MetadataRoute } from 'next'
import { getArticleSlugs } from '@/lib/articles'
import { getWorkflowSlugs } from '@/lib/workflows'

const BASE = 'https://n8n-automation.io'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articleSlugs, workflowSlugs] = await Promise.all([
    getArticleSlugs(),
    getWorkflowSlugs(),
  ])

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/workflows`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]

  const articlePages: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const workflowPages: MetadataRoute.Sitemap = workflowSlugs.map((slug) => ({
    url: `${BASE}/workflows/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...articlePages, ...workflowPages]
}
