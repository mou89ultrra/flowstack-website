'use client'
import { useState } from 'react'
import { Check, Download } from 'lucide-react'
import EmailModal from '@/components/EmailModal'
import type { Workflow } from '@/lib/workflows'

export default function WorkflowDetailClient({ workflow, related = [] }: { workflow: Workflow; related?: Workflow[] }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <span
              className="text-xs px-3 py-1 rounded-full font-semibold inline-block mb-4"
              style={{ background: `${workflow.color}14`, color: workflow.color }}
            >
              {workflow.category}
            </span>
            <h1 className="text-3xl font-black text-white mb-2 leading-snug">{workflow.title}</h1>
            <p className="text-gray-400">{workflow.subtitle}</p>
          </div>

          <div
            className="rounded-2xl p-6"
            style={{ background: 'linear-gradient(135deg, #111118, #1a1a2e)', border: `1px solid ${workflow.color}25` }}
          >
            <h2 className="font-bold text-white mb-3">عن هذا الـ Workflow</h2>
            <p className="text-gray-300 leading-relaxed">{workflow.long_description}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-4">حالات الاستخدام</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {(workflow.use_cases || []).map((uc) => (
                <div
                  key={uc}
                  className="flex items-start gap-2.5 p-3 rounded-xl text-sm text-gray-300"
                  style={{ background: `${workflow.color}08`, border: `1px solid ${workflow.color}20` }}
                >
                  <Check size={14} style={{ color: workflow.color, flexShrink: 0, marginTop: 2 }} />
                  {uc}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-4">كيفية الإعداد</h2>
            <div className="space-y-3">
              {(workflow.steps || []).map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 text-white"
                    style={{ background: `linear-gradient(135deg, ${workflow.color}, ${workflow.color}99)` }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div
            className="rounded-2xl p-6 sticky top-24"
            style={{ background: 'linear-gradient(135deg, #111118, #1a1a2e)', border: `2px solid ${workflow.color}40` }}
          >
            <div className="text-center mb-5">
              <div className="text-4xl font-black mb-1" style={{ color: workflow.color }}>مجاناً</div>
              <div className="text-gray-400 text-sm">{workflow.downloads_count?.toLocaleString()} تحميل</div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 mb-4 transition-all hover:opacity-90"
              style={{
                background: `linear-gradient(135deg, ${workflow.color}, ${workflow.color}bb)`,
                boxShadow: `0 8px 24px ${workflow.color}30`,
              }}
            >
              <Download size={16} />
              تحميل مجاناً
            </button>

            <div className="space-y-2">
              <p className="text-xs text-gray-500 font-semibold">الأدوات المطلوبة:</p>
              {(workflow.tools || []).map((tool) => (
                <div
                  key={tool}
                  className="flex items-center gap-2 text-xs text-gray-300 px-3 py-1.5 rounded-lg"
                  style={{ background: `${workflow.color}08`, border: `1px solid ${workflow.color}18` }}
                >
                  <span style={{ color: workflow.color }}>•</span>
                  {tool}
                </div>
              ))}
            </div>
          </div>

          <a
            href={`https://wa.me/8201071994768?text=مرحباً، أريد مساعدة في إعداد workflow: ${workflow.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-2xl text-center text-sm transition-all hover:opacity-90"
            style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}
          >
            <div className="text-white font-semibold mb-1">💬 تحتاج مساعدة في الإعداد؟</div>
            <div className="text-green-400 text-xs">تواصل معنا على واتساب</div>
          </a>
        </div>
      </div>

      {/* Related workflows */}
      {related.length > 0 && (
        <div className="mt-14">
          <h2 className="text-xl font-bold text-white mb-5">Workflows مشابهة</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((w) => (
              <a
                key={w.slug}
                href={`/workflows/${w.slug}`}
                className="block card-hover rounded-2xl p-5"
                style={{ background: 'linear-gradient(135deg, #111118, #1a1a2e)', border: `1px solid ${w.color}22` }}
              >
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-semibold inline-block mb-3"
                  style={{ background: `${w.color}14`, color: w.color }}
                >
                  {w.category}
                </span>
                <h3 className="text-sm font-bold text-white mb-1">{w.title}</h3>
                <p className="text-gray-500 text-xs">{w.downloads_count?.toLocaleString()} تحميل</p>
              </a>
            ))}
          </div>
        </div>
      )}

      <EmailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        workflow={{ title: workflow.title, file: workflow.file_url }}
      />
    </>
  )
}
