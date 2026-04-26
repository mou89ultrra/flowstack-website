'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Footer from '@/components/Footer'

const WA_NUMBER = '8201071994768'

// ─── EmailJS config — fill these after creating your account at emailjs.com ───
const EMAILJS_SERVICE_ID  = 'service_68wd87u'
const EMAILJS_TEMPLATE_ID = 'template_9w0gmai'
const EMAILJS_PUBLIC_KEY  = 'XA6GUFrYbaQBgIbq4'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: 'hello@n8n-automation.io',
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setSubmitted(true)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : JSON.stringify(err)
      setError(`خطأ: ${msg} — أو تواصل عبر واتساب مباشرة`)
    }
    setLoading(false)
  }

  return (
    <>
      <main className="min-h-screen bg-[#0A0A0F] pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="badge mb-4">💬 نحن هنا</div>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
              تواصل معنا
              <br />
              <span className="text-gradient">نرد خلال ساعات</span>
            </h1>
            <p className="text-gray-400 text-lg">سؤال عن workflow، مشكلة تقنية، أو مشروع مخصص — كلنا آذان صاغية</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact cards */}
            <div className="space-y-4">
              <motion.a
                href={`https://wa.me/${WA_NUMBER}?text=مرحباً، أريد الاستفسار عن FlowStack AI`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl card-hover group"
                style={{ background: 'linear-gradient(135deg, #10B98115, #111118)', border: '1px solid #10B98130' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: '#10B98120' }}>💬</div>
                <div>
                  <div className="font-bold text-white">واتساب — الأسرع</div>
                  <div className="text-gray-400 text-sm">رد خلال ساعة في أوقات العمل</div>
                  <div className="text-green-400 text-sm font-semibold mt-1">ابدأ المحادثة ←</div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:hello@n8n-automation.io"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 p-5 rounded-2xl card-hover group"
                style={{ background: 'linear-gradient(135deg, #7C3AED15, #111118)', border: '1px solid #7C3AED30' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: '#7C3AED20' }}>📧</div>
                <div>
                  <div className="font-bold text-white">البريد الإلكتروني</div>
                  <div className="text-gray-400 text-sm">hello@n8n-automation.io</div>
                  <div className="text-purple-400 text-sm font-semibold mt-1">رد خلال 24 ساعة ←</div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/flow_stackai/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 p-5 rounded-2xl card-hover group"
                style={{ background: 'linear-gradient(135deg, #06B6D415, #111118)', border: '1px solid #06B6D430' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: '#06B6D420' }}>📸</div>
                <div>
                  <div className="font-bold text-white">إنستاغرام</div>
                  <div className="text-gray-400 text-sm">@flow_stackai</div>
                  <div className="text-cyan-400 text-sm font-semibold mt-1">تابعنا ←</div>
                </div>
              </motion.a>

              <div
                className="p-5 rounded-2xl text-sm text-gray-400 leading-relaxed"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="font-semibold text-white mb-2">🕐 أوقات الاستجابة</p>
                <p>الأحد – الخميس: 9 ص – 6 م (توقيت القاهرة)</p>
                <p className="mt-1">واتساب متاح 24/7 للحالات العاجلة</p>
              </div>
            </div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl p-7"
              style={{ background: 'linear-gradient(135deg, #111118, #1a1a2e)', border: '1px solid rgba(124,58,237,0.2)' }}
            >
              {!submitted ? (
                <>
                  <h2 className="text-xl font-bold text-white mb-6">أرسل رسالة</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">الاسم</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="اسمك الكريم"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 outline-none text-sm"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(124,58,237,0.25)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">البريد الإلكتروني</label>
                      <input
                        type="email"
                        required
                        dir="ltr"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 outline-none text-sm font-inter"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(124,58,237,0.25)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">رسالتك</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="كيف يمكننا مساعدتك؟"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 outline-none text-sm resize-none"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(124,58,237,0.25)' }}
                      />
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary w-full py-3">
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          جاري الإرسال...
                        </span>
                      ) : 'إرسال الرسالة 📨'}
                    </button>
                    {error && (
                      <p className="text-red-400 text-xs text-center mt-2">{error}</p>
                    )}
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle size={56} className="text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">تم الإرسال! 🎉</h3>
                  <p className="text-gray-400 text-sm">سنرد عليك خلال 24 ساعة على أقصى تقدير.</p>
                  <p className="text-gray-500 text-xs mt-3">هل تحتاج رداً أسرع؟ <a href={`https://wa.me/${WA_NUMBER}`} className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">راسلنا على واتساب</a></p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
