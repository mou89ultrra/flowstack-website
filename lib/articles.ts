import { supabase } from './supabase'

export interface Article {
  slug: string
  title: string
  category: string
  category_color: string
  read_time: string
  published_at: string
  description: string
  excerpt: string
  content: string
  youtube_url?: string
}

export async function getArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from('fs_articles')
    .select('slug,title,category,category_color,read_time,published_at,description,excerpt,youtube_url')
    .eq('is_published', true)
    .eq('brand', 'ai')
    .order('published_at', { ascending: false })

  if (error) { console.error('getArticles error:', error); return [] }
  return data ?? []
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from('fs_articles')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .eq('brand', 'ai')
    .single()

  if (error) { console.error('getArticleBySlug error:', error); return null }
  return data
}

export async function getArticleSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from('fs_articles')
    .select('slug')
    .eq('is_published', true)
    .eq('brand', 'ai')

  if (error) return []
  return (data ?? []).map((a) => a.slug)
}
