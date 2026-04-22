import React from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone, FiAward } from 'react-icons/fi'
import portfolio from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
}

export default function About() {
  const { profile, education, achievements } = portfolio

  return (
    <section id="about" className="section-padding" style={{ background: '#0D0D1A' }}>
      <div className="section-container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-14">
            <span className="section-label">About</span>
            <h2 className="section-heading text-white">
              Engineer by craft,{' '}
              <span className="gradient-text">researcher by instinct</span>
            </h2>
            <p className="mt-3 text-base max-w-2xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
              I sit at the intersection of applied AI engineering and academic research — shipping production systems by day, publishing Q1 papers by night.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left — bio + contact */}
            <motion.div variants={fadeUp} className="lg:col-span-3 space-y-6">
              <div className="glass-card p-8 space-y-5">
                <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                  I'm <strong className="text-white">Nishit Bohra M</strong> — an AI/ML Engineer pursuing my M.Tech at{' '}
                  <strong className="text-white">Symbiosis Institute of Technology, Pune</strong>. My work spans enterprise RAG pipelines, multimodal ML, GNN-based forecasting, and low-resource NLP.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                  At <strong className="text-white">John Deere</strong>, I engineered a production RAG system over 60K+ technical manuals — saving 300+ engineering hours across 5 teams. I simultaneously published a{' '}
                  <strong className="text-white">Q1 Springer journal paper</strong> on heterogeneous graph forecasting.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                  I graduated as <strong className="text-white">Gold Medalist (Rank 1)</strong> in B.Tech AIML. My goal is to build AI systems that are not just accurate — but deployable, scalable, and impactful.
                </p>

                {/* Contact info */}
                <div className="pt-4 border-t grid sm:grid-cols-2 gap-3" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  {[
                    { icon: FiMail, value: profile.email, href: `mailto:${profile.email}` },
                    { icon: FiPhone, value: profile.phone, href: `tel:${profile.phone}` },
                    { icon: FiMapPin, value: profile.location, href: null },
                  ].map(({ icon: Icon, value, href }) => (
                    <div key={value} className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(108,99,255,0.12)' }}
                      >
                        <Icon size={14} style={{ color: '#6C63FF' }} />
                      </div>
                      {href ? (
                        <a href={href} className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ x: 4 }}
                    className="glass-card p-6 flex gap-5"
                    style={{ borderLeft: `3px solid ${i === 0 ? '#6C63FF' : '#00D4FF'}` }}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-white">{edu.degree}</h3>
                        {edu.badge && (
                          <span
                            className="badge"
                            style={{ background: 'rgba(245,158,11,0.15)', color: '#F59E0B' }}
                          >
                            🥇 {edu.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium mb-1" style={{ color: '#6C63FF' }}>
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-3 text-xs mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        <span>{edu.period}</span>
                        <span>·</span>
                        <span className="font-semibold" style={{ color: '#10B981' }}>CGPA {edu.cgpa}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {edu.courses.map(c => (
                          <span key={c} className="chip text-xs">{c}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — stats + achievements */}
            <motion.div variants={fadeUp} className="lg:col-span-2 space-y-5">
              {/* Key numbers */}
              <div className="glass-card p-6 space-y-4">
                <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">Key Impact</h3>
                {[
                  { label: 'Documents in production RAG', value: '60K+', color: '#00D4FF' },
                  { label: 'Engineering hours saved', value: '300+', color: '#6C63FF' },
                  { label: 'Publications & patents', value: '5', color: '#F59E0B' },
                  { label: 'LLM cost reduction', value: '20%', color: '#10B981' },
                  { label: 'B.Tech CGPA (Gold Medalist)', value: '9.37', color: '#A78BFA' },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between gap-4">
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{item.label}</span>
                    <span className="text-xl font-black flex-shrink-0" style={{ color: item.color }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                {achievements.map((a, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-4 flex items-center gap-4"
                  >
                    <span className="text-2xl flex-shrink-0">{a.icon}</span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">{a.title}</p>
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        {a.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
