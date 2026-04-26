'use client'
import { useState } from 'react'
import { Download } from 'lucide-react'
import EmailModal from '@/components/EmailModal'
import type { Workflow } from '@/lib/workflows'

const categories = ['الكل', 'WhatsApp', 'Marketing', 'Social Media', 'E-commerce', 'CRM', 'Monitoring']

export default function WorkflowsClient({ workflows }: { workflows: Workflow[] }) {
  const [activeCategory, setActiveCategory] = useState('الكل')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedWorkflow, setSelectedWorkflow] = useState({ title: '', file: '' })

  const filtered = activeCategory === 'الكل'
    ? workflows
    : workflows.filter((w) => w.category === activeCategory)

  const openModal = (wf: Workflow) => {
    setSelectedWorkflow({ title: wf.title, file: wf.file_url })
    setModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-[#0A0A0F] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="badge mb-5">📦 مجاناً 100%</div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            مكتبة الـ Workflows
            <br />
            <span className="text-gradient">الكاملة</span>
          </h1>
          <p className="text-gray-400 text-lg">كل workflow جاهز للاستخدام — حمّله، ركّبه، شغّله</p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              style={activeCategory === cat
                ? { background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', color: '#fff', boxShadow: '0 0 20px rgba(124,58,237,0.4)' }
                : { background: 'rgba(255,255,255,0.04)', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.08)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((wf) => (
            <div
              key={wf.slug}
              className="card-hover rounded-2xl p-6 flex flex-col"
              style={{ background: 'linear-gradient(135deg, #111118, #1a1a2e)', border: `1px solid ${wf.color}25` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-semibold"
                  style={{ background: `${wf.color}14`, color: wf.color }}
                >
                  {wf.category}
                </span>
                <span className="text-xs text-gray-600 font-inter">{wf.downloads_count?.toLocaleString()} تحميل</span>
              </div>

              <h3 className="text-base font-bold text-white mb-1">{wf.title}</h3>
              <p className="text-xs text-gray-500 mb-3 font-inter">{wf.subtitle}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{wf.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {(wf.tools || []).map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2 py-0.5 rounded-md"
                    style={{ background: `${wf.color}10`, color: wf.color, border: `1px solid ${wf.color}25` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => openModal(wf)}
                  className="flex-1 py-2.5 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90"
                  style={{ background: `linear-gradient(135deg, ${wf.color}, ${wf.color}bb)` }}
                >
                  <Download size={14} />
                  تحميل مجاناً
                </button>
                <a
                  href={`/workflows/${wf.slug}`}
                  className="px-3 py-2.5 rounded-xl text-xs font-semibold transition-all hover:opacity-80"
                  style={{ background: `${wf.color}14`, color: wf.color, border: `1px solid ${wf.color}25` }}
                >
                  تفاصيل
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <EmailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        workflow={selectedWorkflow}
      />
    </main>
  )
}
