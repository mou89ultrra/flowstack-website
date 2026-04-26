import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'سياسة الخصوصية — FlowStack AI',
  description: 'سياسة الخصوصية لموقع FlowStack AI — كيف نجمع بياناتك ونستخدمها ونحميها.',
}

export default function PrivacyPage() {
  return (
    <>
      <main className="min-h-screen bg-[#0A0A0F] pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <div className="badge mb-4">🔒 الخصوصية أولاً</div>
            <h1 className="text-3xl lg:text-4xl font-black text-white mb-3">سياسة الخصوصية</h1>
            <p className="text-gray-500 text-sm">آخر تحديث: أبريل 2026</p>
          </div>

          <div className="prose-dark space-y-8 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. المقدمة</h2>
              <p>
                يمتلك هذه السياسة موقع FlowStack AI المتاح على <strong>n8n-automation.io</strong>.
                نحن ملتزمون بحماية خصوصيتك وبياناتك الشخصية. تصف هذه الصفحة ما نجمعه وكيف نستخدمه.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. البيانات التي نجمعها</h2>
              <div className="space-y-3">
                <div className="rounded-xl p-4" style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}>
                  <h3 className="font-semibold text-white mb-1">عنوان البريد الإلكتروني</h3>
                  <p className="text-sm text-gray-400">نجمعه عند تحميل أي Workflow مجاني. الغرض: إرسال تحديثات عن workflows جديدة وموارد مجانية. لن نبيعه أو نشاركه مع أطراف ثالثة.</p>
                </div>
                <div className="rounded-xl p-4" style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}>
                  <h3 className="font-semibold text-white mb-1">بيانات الاستخدام</h3>
                  <p className="text-sm text-gray-400">نجمع بيانات مجهولة الهوية عن كيفية استخدام الموقع (الصفحات المزارة، مدة الجلسة) عبر Google Analytics. لا توجد بيانات شخصية مرتبطة.</p>
                </div>
                <div className="rounded-xl p-4" style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}>
                  <h3 className="font-semibold text-white mb-1">بيانات رسائل التواصل</h3>
                  <p className="text-sm text-gray-400">عند تواصلك عبر نموذج الاتصال أو واتساب، نحتفظ بالمراسلات لتقديم الدعم فقط.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. الخدمات الخارجية</h2>
              <p className="mb-3">نستخدم الخدمات التالية والتي لها سياسات خصوصية مستقلة:</p>
              <ul className="space-y-2 text-sm">
                <li><strong className="text-white">Google Analytics</strong> — لتحليل حركة الزوار. <a href="https://policies.google.com/privacy" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">سياسة Google</a></li>
                <li><strong className="text-white">Meta Pixel (Facebook)</strong> — لقياس أداء الإعلانات وإعادة الاستهداف. <a href="https://www.facebook.com/policy.php" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">سياسة Meta</a></li>
                <li><strong className="text-white">Supabase</strong> — لتخزين عناوين البريد الإلكتروني المجمّعة بأمان.</li>
                <li><strong className="text-white">Cloudflare</strong> — لحماية الموقع وتسريع التحميل.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. ملفات تعريف الارتباط (Cookies)</h2>
              <p>يستخدم الموقع cookies أساسية لضمان عمله بشكل صحيح، وcookies تحليلية من Google Analytics لفهم سلوك الزوار. يمكنك إيقاف الـ cookies التحليلية من إعدادات متصفحك.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. الإفصاح عن الروابط التسويقية</h2>
              <p>يحتوي هذا الموقع على روابط تابعة (Affiliate Links) لبعض الأدوات والخدمات الموصى بها. نحن نحصل على عمولة صغيرة عند الشراء عبرها — دون أي تكلفة إضافية عليك. هذا لا يؤثر على موضوعيتنا في التوصيات.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. حقوقك</h2>
              <p>يحق لك في أي وقت:</p>
              <ul className="space-y-1 text-sm mt-2">
                <li>✓ طلب الاطلاع على بياناتك المحفوظة</li>
                <li>✓ طلب حذف بريدك من قائمتنا</li>
                <li>✓ إلغاء الاشتراك من الرسائل في أي وقت</li>
              </ul>
              <p className="mt-3">للتواصل: <a href="mailto:hello@n8n-automation.io" className="text-purple-400 hover:underline">hello@n8n-automation.io</a></p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. التعديلات</h2>
              <p>نحتفظ بحق تعديل هذه السياسة في أي وقت. التعديلات تسري من تاريخ نشرها على الموقع.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
