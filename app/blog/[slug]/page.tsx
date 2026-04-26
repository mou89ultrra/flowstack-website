import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArticles, getArticleBySlug } from '@/lib/articles'

import Footer from '@/components/Footer'
import { Clock } from 'lucide-react'

export const dynamic = 'force-dynamic'


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.published_at,
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [article, allArticles] = await Promise.all([
    getArticleBySlug(slug),
    getArticles(),
  ])

  if (!article) notFound()

  const related = allArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2)

  return (
    <>
      <main className="min-h-screen bg-[#0A0A0F] pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <a href="/blog" className="hover:text-purple-400 transition-colors">المقالات</a>
            <span>/</span>
            <span className="text-gray-400">{article.title}</span>
          </div>

          {/* Header */}
          <div className="mb-10">
            <span
              className="text-xs px-3 py-1 rounded-full font-semibold inline-block mb-4"
              style={{ background: `${article.category_color}15`, color: article.category_color }}
            >
              {article.category}
            </span>
            <h1 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-snug">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><Clock size={13} />{article.read_time}</span>
              <span>{new Date(article.published_at).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>بقلم Mostafa — FlowStack AI</span>
            </div>
          </div>

          {/* YouTube embed */}
          {article.youtube_url && (
            <div className="mb-10 rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <iframe
                src={article.youtube_url.replace('watch?v=', 'embed/')}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* Article content */}
          <div
            className="article-content text-gray-300 leading-loose"
            style={{ fontSize: '1.05rem' }}
            dangerouslySetInnerHTML={{ __html: article.content || '' }}
          />

          {/* CTA */}
          <div
            className="mt-14 p-6 rounded-2xl text-center"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(6,182,212,0.08))', border: '1px solid rgba(124,58,237,0.25)' }}
          >
            <p className="text-white font-bold mb-2">حمّل الـ Workflow الجاهز مجاناً</p>
            <p className="text-gray-400 text-sm mb-4">وفّر ساعات من الإعداد — workflow جاهز للاستخدام فوراً</p>
            <a href="/workflows" className="btn-primary">تصفح المكتبة الكاملة ←</a>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="text-xl font-bold text-white mb-5">مقالات ذات صلة</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((a) => (
                  <a
                    key={a.slug}
                    href={`/blog/${a.slug}`}
                    className="block card-hover rounded-2xl p-5"
                    style={{ background: 'linear-gradient(135deg, #111118, #1a1a2e)', border: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-semibold inline-block mb-3"
                      style={{ background: `${a.category_color}14`, color: a.category_color }}
                    >
                      {a.category}
                    </span>
                    <h3 className="text-sm font-bold text-white leading-snug mb-1">{a.title}</h3>
                    <p className="text-gray-500 text-xs">{a.read_time}</p>
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
