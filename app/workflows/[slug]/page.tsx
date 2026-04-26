import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getWorkflows, getWorkflowBySlug } from '@/lib/workflows'
import Footer from '@/components/Footer'
import WorkflowDetailClient from './WorkflowDetailClient'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const workflow = await getWorkflowBySlug(slug)
  if (!workflow) return {}
  return {
    title: `${workflow.title} — تحميل مجاناً`,
    description: workflow.description,
  }
}

export default async function WorkflowPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const workflow = await getWorkflowBySlug(slug)
  if (!workflow) notFound()

  return (
    <>
      <main className="min-h-screen bg-[#0A0A0F] pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <a href="/workflows" className="hover:text-purple-400 transition-colors">Workflows</a>
            <span>/</span>
            <span className="text-gray-400">{workflow.title}</span>
          </div>
          <WorkflowDetailClient workflow={workflow} />
        </div>
      </main>
      <Footer />
    </>
  )
}
