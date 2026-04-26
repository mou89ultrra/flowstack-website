import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import { Clock } from 'lucide-react'
import { getArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'المقالات — FlowStack AI',
  description: 'مقالات وشروحات n8n وأتمتة الأعمال بالعربي. حلول عملية لمشاكل واتساب بوت والـ workflows.',
}

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  const articles = await getArticles()

  return (
    <>
      <main className="min-h-screen bg-[#0A0A0F] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="badge mb-5">📚 المعرفة مجانية</div>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
              المقالات والشروحات
              <br />
              <span className="text-gradient">بالعربي</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              كل ما تحتاجه لبناء أنظمة أتمتة احترافية — شروحات عملية بدون لف ودوران
            </p>
          </div>

          {articles.length === 0 ? (
            <div className="text-center py-20 text-gray-500">لا توجد مقالات بعد — قريباً</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map((article) => (
                <a
                  key={article.slug}
                  href={`/blog/${article.slug}`}
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
                      style={{ background: `${article.category_color}14`, color: article.category_color }}
                    >
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Clock size={11} />
                      {article.read_time}
                    </div>
                  </div>
                  <h2 className="text-base font-bold text-white mb-3 leading-snug">{article.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-xs">
                      {new Date(article.published_at).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long' })}
                    </span>
                    <span className="text-sm font-semibold" style={{ color: article.category_color }}>
                      اقرأ المقال ←
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}

          <div
            className="mt-12 text-center py-10 rounded-2xl"
            style={{ background: 'rgba(124,58,237,0.05)', border: '1px dashed rgba(124,58,237,0.25)' }}
          >
            <div className="text-3xl mb-3">✍️</div>
            <p className="text-gray-400 text-sm">مقالات جديدة تُنشر كل أسبوع.</p>
            <a href="/workflows" className="btn-primary inline-flex mt-4">تصفح الـ Workflows ←</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
