'use client'
import { motion } from 'framer-motion'

const problems = [
  {
    icon: '🔴',
    tag: 'n8n OAuth Error 403',
    titleAr: 'خطأ ربط جوجل مع n8n؟',
    desc: 'مشكلة شائعة عند ربط Google Drive أو Sheets مع n8n. عندنا الحل الكامل خطوة بخطوة — بدون تقني.',
    color: '#EF4444',
    link: '/blog',
  },
  {
    icon: '💬',
    tag: 'WhatsApp Bot Setup',
    titleAr: 'بوت واتساب يرد تلقائياً 24/7',
    desc: 'ابني بوت واتساب بالذكاء الاصطناعي يجاوب عملاءك تلقائياً — بدون ChatGPT وبدون دفع شهري.',
    color: '#10B981',
    link: '/blog',
  },
  {
    icon: '⚠️',
    tag: 'Workflow Stops After Publish',
    titleAr: 'الأتمتة بتوقف بعد النشر؟',
    desc: 'مشكلة timeout أو credentials منتهية الصلاحية؟ نشرح الأسباب الـ7 الأكثر شيوعاً وكيف تصلحها.',
    color: '#F59E0B',
    link: '/blog',
  },
  {
    icon: '🔗',
    tag: 'Webhook Not Triggering',
    titleAr: 'الـ Webhook مش بيشتغل؟',
    desc: 'مشكلة في الـ Webhook بعد النشر على السيرفر؟ الفرق بين test mode وproduction وكيف تحلها.',
    color: '#8B5CF6',
    link: '/blog',
  },
  {
    icon: '🏪',
    tag: 'E-commerce Automation',
    titleAr: 'أتمتة متجرك الإلكتروني',
    desc: 'أوتمت إشعارات الطلبات، مراجعة المخزون، وتواصل العملاء — كل ده بدون مبرمج.',
    color: '#06B6D4',
    link: '/blog',
  },
  {
    icon: '🤖',
    tag: 'AI Integration n8n',
    titleAr: 'ربط الذكاء الاصطناعي مع n8n',
    desc: 'ربط DeepSeek وClaude وGemini مع n8n — دليل كامل مع workflow جاهز للتحميل.',
    color: '#EC4899',
    link: '/blog',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-24 bg-[#0A0A0F]" id="problems">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge mb-5">🎯 نحل مشاكلك الحقيقية</div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            مشاكل n8n الأكثر انتشاراً؟
            <br />
            <span className="text-gradient">عندنا الحلول</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            لا تضيع وقتك في البحث. كل حل موثق بالتفصيل بالعربي — مع screenshots وvideos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-hover rounded-2xl p-6 group"
              style={{
                background: 'linear-gradient(135deg, #111118, #1a1a2e)',
                border: `1px solid ${problem.color}20`,
              }}
            >
              <div className="text-3xl mb-4">{problem.icon}</div>
              <div
                className="text-[11px] font-mono font-semibold mb-2 px-2 py-1 rounded-md inline-block"
                style={{ background: `${problem.color}15`, color: problem.color }}
              >
                {problem.tag}
              </div>
              <h3 className="text-lg font-bold text-white mt-2 mb-3">{problem.titleAr}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{problem.desc}</p>
              <a
                href={problem.link}
                className="inline-flex items-center text-sm font-semibold transition-all group-hover:gap-2"
                style={{ color: problem.color }}
              >
                اقرأ الحل ←
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
