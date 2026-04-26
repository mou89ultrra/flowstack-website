'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Bot, Share2, Users } from 'lucide-react'
import EmailModal from './EmailModal'

const workflows = [
  {
    icon: <Bot size={26} />,
    color: '#10B981',
    title: 'بوت واتساب للرد التلقائي',
    subtitle: 'WhatsApp AI Customer Support Bot',
    desc: 'بوت ذكي يقرأ رسائل العملاء ويجاوب تلقائياً بالذكاء الاصطناعي ويحفظ المحادثات في Google Sheets.',
    tools: ['n8n', 'Evolution API', 'DeepSeek AI', 'Google Sheets'],
    affiliate: 'Hostinger VPS',
    downloads: '2,340',
    file: 'whatsapp-ai-bot.json',
  },
  {
    icon: <Users size={26} />,
    color: '#7C3AED',
    title: 'جمع Leads من فيسبوك → واتساب',
    subtitle: 'Facebook Leads to WhatsApp Auto-Notifier',
    desc: 'لما شخص يملأ فورم Facebook Lead Ads، يوصله رسالة واتساب تلقائية وتتحفظ بياناته في Sheets.',
    tools: ['n8n', 'Meta Graph API', 'WhatsApp Business', 'Google Sheets'],
    affiliate: 'n8n Cloud',
    downloads: '1,870',
    file: 'facebook-leads-whatsapp.json',
  },
  {
    icon: <Share2 size={26} />,
    color: '#06B6D4',
    title: 'نشر تلقائي على السوشيال ميديا',
    subtitle: 'Auto Social Media Poster from Google Sheets',
    desc: 'اكتب البوستات في Google Sheet، حدد الوقت — والأتمتة تنشر على إنستا وفيسبوك وتيليجرام تلقائياً.',
    tools: ['n8n', 'Google Sheets', 'Meta API', 'Telegram Bot'],
    affiliate: 'n8n Cloud',
    downloads: '3,120',
    file: 'social-media-poster.json',
  },
]

export default function WorkflowLibrary() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedWorkflow, setSelectedWorkflow] = useState({ title: '', file: '' })

  const openModal = (wf: (typeof workflows)[0]) => {
    setSelectedWorkflow({ title: wf.title, file: wf.file })
    setModalOpen(true)
  }

  return (
    <section className="py-24 relative" id="workflows">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge mb-5">📦 مجاناً 100%</div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            Workflows جاهزة للتحميل
            <br />
            <span className="text-gradient">مجاناً — الآن</span>
          </h2>
          <p className="text-gray-400 text-lg">
            حمّل، ركّب، شغّل. كل workflow مع شرح خطوة بخطوة ودعم كامل.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {workflows.map((wf, i) => (
            <motion.div
              key={wf.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="card-hover rounded-2xl p-6 flex flex-col"
              style={{
                background: 'linear-gradient(135deg, #111118, #1a1a2e)',
                border: `1px solid ${wf.color}28`,
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${wf.color}14`, color: wf.color }}
                >
                  {wf.icon}
                </div>
                <span className="text-xs text-gray-600 font-inter">{wf.downloads} تحميل</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{wf.title}</h3>
              <p className="text-xs text-gray-500 mb-3 font-inter">{wf.subtitle}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{wf.desc}</p>

              {/* Tool tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {wf.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1 rounded-lg font-medium"
                    style={{
                      background: `${wf.color}10`,
                      color: wf.color,
                      border: `1px solid ${wf.color}28`,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Affiliate badge */}
              <div className="text-xs text-gray-600 mb-4">
                ✅ موصى به:{' '}
                <span className="font-semibold" style={{ color: wf.color }}>
                  {wf.affiliate}
                </span>
              </div>

              <button
                onClick={() => openModal(wf)}
                className="w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${wf.color}, ${wf.color}bb)`,
                  boxShadow: `0 8px 24px ${wf.color}30`,
                }}
              >
                <Download size={15} />
                تحميل مجاناً
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/workflows" className="btn-outline">
            مشاهدة جميع الـ Workflows ←
          </a>
        </div>
      </div>

      <EmailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        workflow={selectedWorkflow}
      />
    </section>
  )
}
