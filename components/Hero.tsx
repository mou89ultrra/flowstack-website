'use client'
import { motion } from 'framer-motion'

const floatingBadges = ['n8n Expert', 'WhatsApp AI', '500+ Workflows', 'Arabic Support']

const workflowNodes = [
  { label: 'Webhook', color: '#7C3AED', x: '8%' },
  { label: 'DeepSeek', color: '#06B6D4', x: '32%' },
  { label: 'WhatsApp', color: '#10B981', x: '57%' },
  { label: 'Sheets', color: '#F59E0B', x: '81%' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0F] pt-16">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg grid-animated" />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(124,58,237,0.18)' }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(6,182,212,0.12)' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* ── Left: Arabic content ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-right"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="badge mb-6"
            >
              <span>🚀</span>
              <span>أكثر من 500 Workflow جاهز للاستخدام</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-6">
              بناء أنظمة أتمتة
              <br />
              <span className="text-gradient">احترافية للأعمال</span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg mr-0 ml-auto lg:mr-auto lg:ml-0">
              حلول n8n جاهزة + مقالات تقنية + خدمات أتمتة مخصصة
              <br />
              <span className="text-gray-500 text-base">
                أتمتة أعمالك. بدون كود. بدون تعقيد.
              </span>
            </p>

            <div className="flex flex-wrap gap-3 justify-end">
              <motion.a
                href="/#workflows"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                تحميل Workflows مجاناً ⬇️
              </motion.a>
              <motion.a
                href="/#services"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline"
              >
                تواصل معنا
              </motion.a>
            </div>

            {/* Floating skill badges */}
            <div className="flex flex-wrap gap-2 mt-8 justify-end">
              {floatingBadges.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="badge"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* ── Right: 3D Laptop + Profile card ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center items-center relative min-h-[340px]"
          >
            {/* Profile card — floats above laptop */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 right-4 z-20 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl"
              style={{
                background: 'rgba(17,17,24,0.85)',
                border: '1px solid rgba(124,58,237,0.4)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-lg shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                  boxShadow: '0 0 20px rgba(124,58,237,0.6)',
                }}
              >
                M
              </div>
              <div>
                <div className="font-bold text-white text-sm">Mostafa</div>
                <div className="text-xs text-gray-400">Automation Expert · FlowStack AI</div>
              </div>
            </motion.div>

            {/* 3D Laptop */}
            <div
              className="relative w-72 sm:w-80 lg:w-96"
              style={{
                transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: '#12121c',
                  border: '2px solid rgba(124,58,237,0.35)',
                  boxShadow:
                    '0 0 80px rgba(124,58,237,0.25), 0 50px 100px rgba(0,0,0,0.6)',
                }}
              >
                {/* Screen area */}
                <div className="bg-[#0d0d1a] p-3">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <div
                      className="flex-1 rounded ml-2 h-5 flex items-center px-2"
                      style={{ background: 'rgba(255,255,255,0.04)' }}
                    >
                      <span className="text-gray-600 text-[10px] font-inter">
                        n8n.anycontent.space
                      </span>
                    </div>
                  </div>

                  {/* n8n canvas */}
                  <div
                    className="h-44 rounded-lg relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg,#0d1117,#161b22)' }}
                  >
                    <div className="absolute inset-0 grid-bg opacity-25" />

                    {/* Nodes */}
                    {workflowNodes.map((node, i) => (
                      <motion.div
                        key={node.label}
                        className="absolute rounded-lg p-1.5 text-center"
                        style={{
                          left: node.x,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: `${node.color}18`,
                          border: `1px solid ${node.color}55`,
                          minWidth: '56px',
                        }}
                        animate={{
                          boxShadow: [
                            `0 0 8px ${node.color}30`,
                            `0 0 20px ${node.color}70`,
                            `0 0 8px ${node.color}30`,
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      >
                        <div
                          className="w-3.5 h-3.5 rounded-full mx-auto mb-1"
                          style={{ background: node.color }}
                        />
                        <div className="text-[9px] text-gray-300 font-semibold">{node.label}</div>
                      </motion.div>
                    ))}

                    {/* Animated connecting lines */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      style={{ pointerEvents: 'none' }}
                    >
                      <defs>
                        <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#7C3AED" />
                          <stop offset="100%" stopColor="#06B6D4" />
                        </linearGradient>
                      </defs>
                      {[
                        { d: 'M 68 88 L 130 88' },
                        { d: 'M 188 88 L 247 88' },
                        { d: 'M 308 88 L 363 88' },
                      ].map((line, i) => (
                        <motion.path
                          key={i}
                          d={line.d}
                          stroke="url(#lg)"
                          strokeWidth="1.5"
                          fill="none"
                          strokeDasharray="4 4"
                          animate={{ strokeDashoffset: [0, -16] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: i * 0.25,
                          }}
                        />
                      ))}
                    </svg>
                  </div>
                </div>
                <div className="h-3 bg-[#0d0d1a]" />
              </div>

              {/* Laptop base */}
              <div
                className="h-3 mx-4 rounded-b-xl"
                style={{ background: '#1a1a2e', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}
              />
            </div>

            {/* Bottom-left floating stat */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 left-0 z-20 rounded-xl px-4 py-2 text-sm"
              style={{
                background: 'rgba(6,182,212,0.12)',
                border: '1px solid rgba(6,182,212,0.35)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-cyan-400 font-bold">+3,120</span>
              <span className="text-gray-400 text-xs mr-2">تحميل هذا الأسبوع</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
