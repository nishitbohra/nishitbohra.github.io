import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiMail, FiMapPin, FiPhone, FiExternalLink, FiSend, FiDownload } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import portfolio from '../data/portfolio'

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const platforms = [
  {
    key: 'linkedin',
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: portfolio.profile.linkedin,
    color: '#0A66C2',
    gradientFrom: 'rgba(10,102,194,0.15)',
    gradientTo: 'rgba(10,102,194,0.05)',
    border: 'rgba(10,102,194,0.3)',
    headline: 'Professional Network',
    description: 'Experience, endorsements, and professional updates. The fastest path to a conversation.',
    cta: 'Connect on LinkedIn',
    trust: '🔵 Active profile · MTech student · John Deere intern',
  },
  {
    key: 'github',
    icon: FiGithub,
    label: 'GitHub',
    href: portfolio.profile.github,
    color: '#ffffff',
    gradientFrom: 'rgba(255,255,255,0.08)',
    gradientTo: 'rgba(255,255,255,0.02)',
    border: 'rgba(255,255,255,0.12)',
    headline: 'Code & Projects',
    description: 'All project repositories, experiments, and open-source contributions. See the actual code.',
    cta: 'View Projects',
    trust: '⚙️ RAG systems · Computer Vision · NLP pipelines',
  },
  {
    key: 'scholar',
    icon: SiGooglescholar,
    label: 'Google Scholar',
    href: portfolio.profile.scholar,
    color: '#4285F4',
    gradientFrom: 'rgba(66,133,244,0.15)',
    gradientTo: 'rgba(66,133,244,0.05)',
    border: 'rgba(66,133,244,0.3)',
    headline: 'Research & Publications',
    description: 'Q1 journals, IEEE conference papers, and book chapters. Peer-reviewed research depth.',
    cta: 'See Research Work',
    trust: '📄 Q1 Springer · IEEE · Scopus-indexed book chapters',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolio.profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: '#07070F' }}>
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-14 text-center">
            <span className="section-label mx-auto justify-center">Contact</span>
            <h2 className="section-heading text-white mt-2">
              Let's build something{' '}
              <span className="gradient-text">meaningful</span>
            </h2>
            <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Open to AI/ML engineering roles in Pune. Let's talk about what you're building.
            </p>
          </motion.div>

          {/* Platform identity cards */}
          <motion.div variants={stagger} className="grid sm:grid-cols-3 gap-5 mb-10">
            {platforms.map(p => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.key}
                  variants={fadeUp}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="relative rounded-2xl overflow-hidden p-6 flex flex-col gap-4 group transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`,
                    border: `1px solid ${p.border}`,
                  }}
                >
                  {/* Icon + label */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                      style={{ background: `${p.color}18`, border: `1px solid ${p.color}25` }}
                    >
                      <Icon size={22} style={{ color: p.color }} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{p.label}</h3>
                      <p className="text-xs font-semibold" style={{ color: p.color }}>{p.headline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {p.description}
                  </p>

                  {/* Trust signal */}
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    {p.trust}
                  </p>

                  {/* CTA */}
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all group-hover:scale-[1.02]"
                    style={{
                      background: `${p.color}18`,
                      border: `1px solid ${p.color}35`,
                      color: p.color,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = `${p.color}28`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = `${p.color}18`
                    }}
                  >
                    {p.cta}
                    <FiExternalLink size={13} />
                  </a>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Direct contact + resume */}
          <motion.div variants={fadeUp}>
            <div
              className="glass-card p-8 rounded-2xl"
              style={{ background: 'rgba(108,99,255,0.04)', border: '1px solid rgba(108,99,255,0.12)' }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
                {/* Contact details */}
                <div className="space-y-4 flex-1">
                  <h3 className="text-base font-bold text-white">Direct contact</h3>
                  <div className="space-y-3">
                    {[
                      { icon: FiMail, value: portfolio.profile.email, action: copyEmail, actionLabel: copied ? '✓ Copied!' : 'Copy' },
                      { icon: FiPhone, value: portfolio.profile.phone, action: null },
                      { icon: FiMapPin, value: portfolio.profile.location, action: null },
                    ].map(({ icon: Icon, value, action, actionLabel }) => (
                      <div key={value} className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(108,99,255,0.12)' }}
                        >
                          <Icon size={13} style={{ color: '#6C63FF' }} />
                        </div>
                        <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{value}</span>
                        {action && (
                          <button
                            onClick={action}
                            className="ml-auto text-xs px-2.5 py-1 rounded-lg transition-all font-medium"
                            style={{
                              background: copied ? 'rgba(16,185,129,0.15)' : 'rgba(108,99,255,0.12)',
                              color: copied ? '#10B981' : '#6C63FF',
                              border: `1px solid ${copied ? 'rgba(16,185,129,0.25)' : 'rgba(108,99,255,0.2)'}`,
                            }}
                          >
                            {actionLabel}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-24" style={{ background: 'rgba(255,255,255,0.06)' }} />

                {/* Primary CTAs */}
                <div className="flex flex-col gap-3 min-w-[220px]">
                  <a
                    href={`mailto:${portfolio.profile.email}`}
                    className="btn-primary justify-center text-center"
                  >
                    <span className="flex items-center gap-2">
                      <FiSend size={14} />
                      Send Email
                    </span>
                  </a>
                  <a
                    href={portfolio.profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline justify-center text-center"
                  >
                    <FiDownload size={14} />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={fadeUp}
            className="mt-16 pt-8 text-center"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Designed & built by{' '}
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>Nishit Bohra M</span>
              {' '}· M.Tech AI/ML, Symbiosis Institute of Technology, Pune · 2026
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
