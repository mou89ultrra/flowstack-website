import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { articles, getArticleBySlug } from '@/lib/articles'
import Footer from '@/components/Footer'
import { Clock } from 'lucide-react'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
    openGraph: { title: article.title, description: article.description, type: 'article' },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 2)

  return (
    <>
      <main className="min-h-screen bg-[#0A0A0F] pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <a href="/blog" className="hover:text-purple-400 transition-colors">المقالات</a>
            <span>/</span>
            <span className="text-gray-400">{article.title}</span>
          </div>

          <div className="mb-10">
            <span
              className="text-xs px-3 py-1 rounded-full font-semibold inline-block mb-4"
              style={{ background: `${article.categoryColor}15`, color: article.categoryColor }}
            >
              {article.category}
            </span>
            <h1 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-snug">{article.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><Clock size={13} />{article.readTime}</span>
              <span>{article.date}</span>
              <span>بقلم Mostafa — FlowStack AI</span>
            </div>
          </div>

          <div
            className="article-content text-gray-300 leading-loose"
            style={{ fontSize: '1.05rem' }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div
            className="mt-14 p-6 rounded-2xl text-center"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(6,182,212,0.08))', border: '1px solid rgba(124,58,237,0.25)' }}
          >
            <p className="text-white font-bold mb-2">حمّل الـ Workflow الجاهز مجاناً</p>
            <p className="text-gray-400 text-sm mb-4">وفّر ساعات من الإعداد — workflow جاهز للاستخدام فوراً</p>
            <a href="/workflows" className="btn-primary">تصفح المكتبة الكاملة ←</a>
          </div>

          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="text-xl font-bold text-white mb-5">مقالات ذات صلة</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((a) => (
                  <a key={a.slug} href={`/blog/${a.slug}`}
                    className="block card-hover rounded-2xl p-5"
                    style={{ background: 'linear-gradient(135deg, #111118, #1a1a2e)', border: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    <span className="text-xs px-2 py-0.5 rounded-full font-semibold inline-block mb-3"
                      style={{ background: `${a.categoryColor}14`, color: a.categoryColor }}>{a.category}</span>
                    <h3 className="text-sm font-bold text-white leading-snug mb-1">{a.title}</h3>
                    <p className="text-gray-500 text-xs">{a.readTime} · {a.date}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
