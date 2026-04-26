'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 500, suffix: '+', labelAr: 'Workflow جاهز', labelEn: 'Workflows Built' },
  { value: 50, suffix: '+', labelAr: 'عميل سعيد', labelEn: 'Happy Clients' },
  { value: 10000, suffix: '+', labelAr: 'تحميل', labelEn: 'Total Downloads' },
  { value: 5, suffix: '★', labelAr: 'تقييم', labelEn: 'Average Rating' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 2000 / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString('en')}
      {suffix}
    </span>
  )
}

export default function StatsBar() {
  return (
    <section
      className="py-14 relative"
      style={{
        background: 'linear-gradient(135deg, rgba(124,58,237,0.04), rgba(6,182,212,0.04))',
        borderTop: '1px solid rgba(124,58,237,0.12)',
        borderBottom: '1px solid rgba(124,58,237,0.12)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.labelEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-black mb-2 text-gradient">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-300 font-semibold text-sm">{stat.labelAr}</div>
              <div className="text-gray-600 text-xs mt-0.5">{stat.labelEn}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
