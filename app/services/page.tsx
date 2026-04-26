import type { Metadata } from 'next'
import ServicesSection from '@/components/ServicesSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'الخدمات — FlowStack AI',
  description: 'خدمات أتمتة الأعمال المخصصة — بوت واتساب، أتمتة كاملة، أنظمة متكاملة للشركات العربية.',
}

export default function ServicesPage() {
  return (
    <>
      <main className="min-h-screen bg-[#0A0A0F] pt-16">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-4">
          <div className="text-center">
            <div className="badge mb-4">💼 نبني معك</div>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
              خدمات الأتمتة
              <br />
              <span className="text-gradient">المخصصة</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              مش بس workflows جاهزة — نبني معك النظام الكامل اللي يناسب عملك بالضبط
            </p>
          </div>
        </div>
        <ServicesSection />

        {/* FAQ */}
        <section className="py-16 bg-[#0A0A0F]">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-black text-white text-center mb-10">
              أسئلة شائعة
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'كم يأخذ المشروع من الوقت؟',
                  a: 'Starter في 3-5 أيام عمل. Professional في 1-2 أسبوع. Enterprise في 3-4 أسابيع حسب التعقيد.',
                },
                {
                  q: 'هل أحتاج خادم (VPS) مسبقاً؟',
                  a: 'لا ضرورة — نساعدك في الإعداد الكامل من اختيار السيرفر المناسب وتثبيت كل شيء.',
                },
                {
                  q: 'ماذا يحدث إذا توقف النظام بعد التسليم؟',
                  a: 'كل خدمة تشمل فترة دعم مجاني. بعدها يمكنك الترقية لخطة دعم شهرية بسعر مناسب.',
                },
                {
                  q: 'هل يمكنكم العمل مع نظامي الحالي؟',
                  a: 'نعم — n8n يتكامل مع أكثر من 400 خدمة. أرسل لنا تفاصيل نظامك وسنؤكد التوافق.',
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl p-5"
                  style={{
                    background: 'linear-gradient(135deg, #111118, #1a1a2e)',
                    border: '1px solid rgba(124,58,237,0.15)',
                  }}
                >
                  <h3 className="font-bold text-white mb-2 text-sm">{faq.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
