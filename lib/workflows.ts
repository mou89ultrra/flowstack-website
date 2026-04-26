import { supabase } from './supabase'

export interface Workflow {
  slug: string
  title: string
  subtitle: string
  category: string
  color: string
  description: string
  long_description: string
  tools: string[]
  downloads_count: number
  file_url: string
  use_cases: string[]
  steps: string[]
}

export async function getWorkflows(): Promise<Workflow[]> {
  const { data, error } = await supabase
    .from('fs_workflows')
    .select('slug,title,subtitle,category,color,description,tools,downloads_count,file_url')
    .eq('is_published', true)
    .eq('brand', 'ai')
    .order('downloads_count', { ascending: false })

  if (error) { console.error('getWorkflows error:', error); return [] }
  return data ?? []
}

export async function getWorkflowBySlug(slug: string): Promise<Workflow | null> {
  const { data, error } = await supabase
    .from('fs_workflows')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .eq('brand', 'ai')
    .single()

  if (error) { console.error('getWorkflowBySlug error:', error); return null }
  return data
}

export async function getWorkflowSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from('fs_workflows')
    .select('slug')
    .eq('is_published', true)
    .eq('brand', 'ai')

  if (error) return []
  return (data ?? []).map((w) => w.slug)
}
