import type { Metadata } from 'next'
import { getWorkflows } from '@/lib/workflows'
import Footer from '@/components/Footer'
import WorkflowsClient from './WorkflowsClient'

export const metadata: Metadata = {
  title: 'مكتبة الـ Workflows — FlowStack AI',
  description: 'تحميل workflows جاهزة لـ n8n مجاناً — واتساب بوت، جمع Leads، نشر سوشيال ميديا، وأكثر.',
}

export const revalidate = 60

export default async function WorkflowsPage() {
  const workflows = await getWorkflows()
  return (
    <>
      <WorkflowsClient workflows={workflows} />
      <Footer />
    </>
  )
}
