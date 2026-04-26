'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const WA_NUMBER = '8201071994768'

const services = [
  {
    name: 'Starter',
    nameAr: 'نظام واتساب AI أساسي',
    price: '$497',
    period: 'مشروع واحد',
    color: '#06B6D4',
    popular: false,
    features: [
      'بوت واتساب بالذكاء الاصطناعي',
      'ربط Google Sheets',
      'رد تلقائي على 500+ رسالة/يوم',
      'إعداد كامل على السيرفر',
      'تدريب على الاستخدام',
      'دعم تقني لمدة شهر',
    ],
  },
  {
    name: 'Professional',
    nameAr: 'أتمتة كاملة للأعمال',
    price: '$997',
    period: 'مشروع واحد',
    color: '#7C3AED',
    popular: true,
    features: [
      'كل ميزات Starter',
      'أتمتة السوشيال ميديا',
      'جمع Leads تلقائي',
      'تقارير يومية تلقائية',
      'لوحة متابعة مخصصة',
      'دعم تقني لمدة 3 أشهر',
    ],
  },
  {
    name: 'Enterprise',
    nameAr: 'نظام متكامل مع لوحة تحكم',
    price: '$1,997',
    period: 'مشروع واحد',
    color: '#F59E0B',
    popular: false,
    features: [
      'كل ميزات Professional',
      'تكامل CRM كامل',
      'لوحة تحكم مخصصة',
      'API مخصص لعملك',
      'تدريب الفريق كامل',
      'دعم مدى الحياة',
    ],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 relative" id="services">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge mb-5">💼 خدمات مخصصة</div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            محتاج نظام أتمتة مخصص
            <br />
            <span className="text-gradient">لعملك؟</span>
          </h2>
          <p className="text-gray-400 text-lg">نبني لك النظام كامل من الصفر حتى التشغيل الكامل</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative rounded-2xl p-6 card-hover ${service.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              style={{
                background: service.popular
                  ? `linear-gradient(135deg, ${service.color}12, #1a1a2e)`
                  : 'linear-gradient(135deg, #111118, #1a1a2e)',
                border: `2px solid ${service.color}${service.popular ? '55' : '22'}`,
                boxShadow: service.popular ? `0 0 60px ${service.color}18` : 'none',
              }}
            >
              {service.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold text-white whitespace-nowrap"
                  style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)` }}
                >
                  ⭐ الأكثر طلباً
                </div>
              )}

              <div className="mb-6 pt-2">
                <div
                  className="text-[11px] font-mono font-semibold mb-1"
                  style={{ color: service.color }}
                >
                  {service.name}
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{service.nameAr}</h3>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-white">{service.price}</span>
                  <span className="text-gray-500 text-sm mb-1">/ {service.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-7">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <Check size={15} style={{ color: service.color, flexShrink: 0 }} />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=مرحباً، أريد الاستفسار عن خدمة ${service.nameAr}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${service.color}, ${service.color}bb)`,
                  boxShadow: service.popular ? `0 8px 30px ${service.color}35` : 'none',
                }}
              >
                💬 تواصل على واتساب
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
