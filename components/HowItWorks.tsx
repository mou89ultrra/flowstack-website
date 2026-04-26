'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    emoji: '⬇️',
    title: 'تحمّل الـ Workflow',
    desc: 'اختار الـ workflow المناسب لمشروعك وحمّله مجاناً بعد تسجيل إيميلك.',
  },
  {
    num: '02',
    emoji: '🖥️',
    title: 'ثبّت n8n على السيرفر',
    desc: 'استخدم Hostinger VPS وثبّت n8n خلال 5 دقائق باستخدام Docker Compose.',
  },
  {
    num: '03',
    emoji: '🔗',
    title: 'ربط حساباتك',
    desc: 'ربط WhatsApp API، Google، أو أي خدمة تانية — شرح مصور خطوة بخطوة.',
  },
  {
    num: '04',
    emoji: '🚀',
    title: 'شغّل وارتاح',
    desc: 'فعّل الـ workflow واتركه يشتغل تلقائياً. أنت تنام والأتمتة تشتغل.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge mb-5">⚡ بسيط وسريع</div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            كيف يشتغل؟
            <br />
            <span className="text-gradient">4 خطوات بس</span>
          </h2>
          <p className="text-gray-400 text-lg">من الصفر للأتمتة الكاملة في يوم واحد</p>
        </motion.div>

        <div className="relative">
          {/* Horizontal connector line on desktop */}
          <div
            className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'linear-gradient(90deg, #7C3AED, #06B6D4)' }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Circle */}
                <div
                  className="relative z-10 w-[52px] h-[52px] rounded-full mx-auto mb-6 flex items-center justify-center text-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                    boxShadow: '0 0 30px rgba(124,58,237,0.5)',
                  }}
                >
                  {step.emoji}
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: 'linear-gradient(135deg, #111118, #1a1a2e)',
                    border: '1px solid rgba(124,58,237,0.18)',
                  }}
                >
                  <div className="text-5xl font-black text-gradient opacity-20 mb-2 leading-none">
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
