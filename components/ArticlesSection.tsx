'use client'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

const articles = [
  {
    category: 'n8n',
    categoryColor: '#7C3AED',
    title: 'حل مشكلة OAuth Error 403 في n8n مع Google',
    desc: 'دليل كامل لحل أشهر مشكلة في ربط n8n مع خدمات Google — الأسباب والحلول خطوة بخطوة.',
    time: '8 دقائق',
    date: 'أبريل 2026',
  },
  {
    category: 'WhatsApp AI',
    categoryColor: '#10B981',
    title: 'كيف تبني بوت واتساب بالذكاء الاصطناعي مجاناً',
    desc: 'Evolution API + DeepSeek + n8n = بوت واتساب احترافي بدون أي تكاليف شهرية.',
    time: '12 دقيقة',
    date: 'أبريل 2026',
  },
  {
    category: 'AI Integration',
    categoryColor: '#06B6D4',
    title: 'ربط DeepSeek API مع n8n — الدليل الكامل',
    desc: 'كيف تستخدم DeepSeek كبديل مجاني وقوي لـ ChatGPT في أتمتة أعمالك مع n8n.',
    time: '6 دقائق',
    date: 'مارس 2026',
  },
]

export default function ArticlesSection() {
  return (
    <section className="py-24 bg-[#0A0A0F]" id="blog">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4"
        >
          <div>
            <div className="badge mb-4">📚 مقالات تقنية</div>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              أحدث المقالات
              <br />
              <span className="text-gradient">والشروحات</span>
            </h2>
          </div>
          <a href="/blog" className="btn-outline shrink-0">
            جميع المقالات ←
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href="/blog"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="block card-hover rounded-2xl p-6 group"
              style={{
                background: 'linear-gradient(135deg, #111118, #1a1a2e)',
                border: '1px solid rgba(255,255,255,0.05)',
                textDecoration: 'none',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs px-3 py-1 rounded-full font-semibold"
                  style={{
                    background: `${article.categoryColor}14`,
                    color: article.categoryColor,
                  }}
                >
                  {article.category}
                </span>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <Clock size={11} />
                  {article.time}
                </div>
              </div>

              <h3 className="text-base font-bold text-white mb-3 leading-snug group-hover:text-gradient transition-all">
                {article.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{article.desc}</p>

              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-xs">{article.date}</span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: article.categoryColor }}
                >
                  اقرأ المقال ←
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
