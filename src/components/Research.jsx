import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiFileText } from 'react-icons/fi'
import portfolio from '../data/portfolio'

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const typeIcon = {
  'Journal': '📄',
  'Conference': '🎤',
  'Book Chapter': '📚',
  'Patent': '💡',
}

export default function Research() {
  return (
    <section id="research" className="section-padding" style={{ background: '#0D0D1A' }}>
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-14">
            <span className="section-label">Research</span>
            <h2 className="section-heading text-white">
              Publications &{' '}
              <span className="gradient-text">intellectual contributions</span>
            </h2>
            <p className="mt-3 text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Peer-reviewed work across energy forecasting, environmental AI, and language understanding.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { label: 'Q1 Journal', value: '1', color: '#6C63FF' },
                { label: 'IEEE Conference', value: '1', color: '#00D4FF' },
                { label: 'Book Chapters', value: '2', color: '#10B981' },
                { label: 'Patent Filed', value: '1', color: '#F59E0B' },
              ].map(s => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl"
                  style={{ background: `${s.color}10`, border: `1px solid ${s.color}25` }}
                >
                  <span className="text-xl font-black" style={{ color: s.color }}>{s.value}</span>
                  <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Publication list */}
          <div className="space-y-4">
            {portfolio.publications.map((pub, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="glass-card p-6 flex gap-5 items-start"
                style={{ borderLeft: `3px solid ${pub.color}` }}
              >
                {/* Type icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 mt-0.5"
                  style={{ background: pub.badgeBg }}
                >
                  {typeIcon[pub.type] || '📄'}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="badge"
                      style={{ background: pub.badgeBg, color: pub.badgeText }}
                    >
                      {pub.badge}
                    </span>
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      {pub.type} · {pub.year}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white leading-snug mb-2">
                    {pub.title}
                  </h3>

                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {pub.journal}
                  </p>
                </div>

                {/* Link */}
                {pub.link && pub.link !== null && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl transition-all hover:scale-110"
                    style={{
                      background: `${pub.color}15`,
                      color: pub.color,
                      border: `1px solid ${pub.color}25`,
                    }}
                    title="View Publication"
                  >
                    <FiExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Scholar CTA */}
          <motion.div variants={fadeUp} className="mt-8 text-center">
            <a
              href={portfolio.profile.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex"
            >
              <FiFileText size={15} />
              View All on Google Scholar
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
