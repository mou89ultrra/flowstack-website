import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <main className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
        <div className="text-center px-6">
          <div className="text-8xl font-black text-gradient mb-4">404</div>
          <h1 className="text-2xl font-bold text-white mb-3">الصفحة غير موجودة</h1>
          <p className="text-gray-400 mb-8">يبدو أن هذه الصفحة لا تعمل أو تم نقلها.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/" className="btn-primary">العودة للرئيسية</a>
            <a href="/workflows" className="btn-outline">تصفح الـ Workflows</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
