import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'شروط الاستخدام — FlowStack AI',
  description: 'شروط وأحكام استخدام موقع FlowStack AI وتحميل الـ Workflows وخدمات الأتمتة.',
}

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen bg-[#0A0A0F] pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <div className="badge mb-4">📋 الشروط والأحكام</div>
            <h1 className="text-3xl lg:text-4xl font-black text-white mb-3">شروط الاستخدام</h1>
            <p className="text-gray-500 text-sm">آخر تحديث: أبريل 2026</p>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. القبول بالشروط</h2>
              <p>باستخدام موقع <strong>n8n-automation.io</strong> أو تحميل أي من محتوياته، فأنت توافق على هذه الشروط. إن كنت لا توافق عليها، يرجى عدم استخدام الموقع.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. الـ Workflows المجانية</h2>
              <div className="rounded-xl p-5 space-y-2" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>
                <p className="text-sm"><span className="text-green-400">✓</span> مسموح باستخدامها في مشاريع شخصية وتجارية</p>
                <p className="text-sm"><span className="text-green-400">✓</span> مسموح بتعديلها لتناسب احتياجاتك</p>
                <p className="text-sm"><span className="text-green-400">✓</span> مسموح باستخدامها مع عملائك</p>
                <p className="text-sm"><span className="text-red-400">✗</span> غير مسموح ببيعها أو إعادة توزيعها كمنتج مستقل</p>
                <p className="text-sm"><span className="text-red-400">✗</span> غير مسموح بادعاء ملكيتها الأصلية</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. الخدمات المدفوعة</h2>
              <p className="mb-3">عند الاتفاق على مشروع مخصص:</p>
              <ul className="space-y-2 text-sm">
                <li><strong className="text-white">الدفع:</strong> 50% مقدماً قبل بدء العمل، 50% عند التسليم</li>
                <li><strong className="text-white">التسليم:</strong> ضمن المدة المتفق عليها كتابياً</li>
                <li><strong className="text-white">المراجعات:</strong> 3 مراجعات مجانية ضمن نطاق المشروع</li>
                <li><strong className="text-white">سياسة الاسترداد:</strong> لا يوجد استرداد بعد بدء العمل نظراً لطبيعة الخدمات الرقمية المخصصة. في حال عدم التسليم من طرفنا، يُسترد كامل المبلغ.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. إخلاء المسؤولية</h2>
              <p>الـ Workflows والمقالات المقدمة هي لأغراض تعليمية. نحن غير مسؤولين عن:</p>
              <ul className="space-y-1 text-sm mt-2">
                <li>• أي أضرار ناتجة عن استخدام أو سوء استخدام الـ Workflows</li>
                <li>• تغييرات في APIs الخارجية (WhatsApp، Meta، Google) قد تؤثر على عمل الـ Workflows</li>
                <li>• انقطاع خدمات الطرف الثالث (n8n، Evolution API، إلخ)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. الروابط التسويقية</h2>
              <p>يحتوي الموقع على روابط تابعة (Affiliate Links). عند الشراء عبرها، نحصل على عمولة دون تكلفة إضافية عليك. جميع توصياتنا مبنية على التجربة الفعلية.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. الملكية الفكرية</h2>
              <p>جميع المحتويات الأصلية على الموقع (المقالات، الصور، التصاميم) هي ملك FlowStack AI ومحمية بحقوق النشر. يُسمح بمشاركة المحتوى مع ذكر المصدر.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. القانون المنظِّم</h2>
              <p>تخضع هذه الشروط لقوانين جمهورية مصر العربية. أي نزاع يُحسم بالتراضي أولاً، وإن تعذّر فأمام المحاكم المصرية المختصة.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. التواصل</h2>
              <p>لأي استفسار عن هذه الشروط: <a href="mailto:hello@n8n-automation.io" className="text-purple-400 hover:underline">hello@n8n-automation.io</a></p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
