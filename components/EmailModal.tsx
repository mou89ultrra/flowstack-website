'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, CheckCircle } from 'lucide-react'

interface EmailModalProps {
  isOpen: boolean
  onClose: () => void
  workflow: { title: string; file: string }
}

export default function EmailModal({ isOpen, onClose, workflow }: EmailModalProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_SUBSCRIBER_WEBHOOK_URL
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            workflow_downloaded: workflow.title,
            source: 'website_download',
          }),
        })
      }
    } catch {
      // Silent fail — never block the download if webhook is down
    }
    setSubmitted(true)
    setLoading(false)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(10,10,15,0.88)', backdropFilter: 'blur(10px)' }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl p-8"
            style={{
              background: 'linear-gradient(135deg, #111118, #1a1a2e)',
              border: '1px solid rgba(124,58,237,0.35)',
              boxShadow: '0 0 80px rgba(124,58,237,0.2)',
            }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 left-4 text-gray-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <div className="text-center mb-7">
                  <div className="text-5xl mb-4">📥</div>
                  <h3 className="text-xl font-bold text-white mb-2">{workflow.title}</h3>
                  <p className="text-gray-400 text-sm">
                    أدخل بريدك الإلكتروني وحمّل الـ Workflow مجاناً فوراً
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 outline-none transition-all font-inter text-sm"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(124,58,237,0.3)',
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.border = '1px solid rgba(124,58,237,0.7)')
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.border = '1px solid rgba(124,58,237,0.3)')
                    }
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-3"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        جاري التحضير...
                      </span>
                    ) : (
                      'تحميل مجاناً ⬇️'
                    )}
                  </button>
                </form>

                <p className="text-center text-gray-600 text-xs mt-4">
                  لن نرسل لك بريد مزعج. وعد! 🤝
                </p>
              </>
            ) : (
              <div className="text-center py-2">
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                >
                  <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">شكراً! 🎉</h3>
                <p className="text-gray-400 mb-6 text-sm">
                  اضغط الزر أدناه لتحميل الـ Workflow مجاناً
                </p>
                <a
                  href={`/workflows/${workflow.file}`}
                  download
                  onClick={handleClose}
                  className="btn-primary"
                >
                  <Download size={16} />
                  تحميل الآن
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
