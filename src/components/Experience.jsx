import React from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar } from 'react-icons/fi'
import portfolio from '../data/portfolio'

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ background: '#0D0D1A' }}>
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-14">
            <span className="section-label">Experience</span>
            <h2 className="section-heading text-white">
              Where I've{' '}
              <span className="gradient-text">shipped AI</span>
            </h2>
            <p className="mt-3 text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Production systems, research labs, and startup environments — across enterprise and research contexts.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'linear-gradient(180deg, #6C63FF, #00D4FF, rgba(255,255,255,0.05))' }}
            />

            <div className="space-y-8">
              {portfolio.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative md:pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className="hidden md:flex absolute left-0 top-7 w-12 h-12 rounded-xl items-center justify-center text-xs font-bold text-white z-10"
                    style={{ background: `linear-gradient(135deg, ${exp.color}33, ${exp.color}11)`, border: `2px solid ${exp.color}` }}
                  >
                    {exp.logo}
                  </div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="glass-card p-6 md:p-8"
                    style={{ borderLeft: `3px solid ${exp.color}` }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
                        <p className="text-base font-semibold" style={{ color: exp.color }}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                        <span
                          className="flex items-center gap-1.5 text-xs font-medium"
                          style={{ color: 'rgba(255,255,255,0.5)' }}
                        >
                          <FiCalendar size={11} />
                          {exp.period}
                        </span>
                        <span
                          className="flex items-center gap-1.5 text-xs"
                          style={{ color: 'rgba(255,255,255,0.35)' }}
                        >
                          <FiMapPin size={11} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-3 mb-6">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: exp.color }}
                          />
                          <span>
                            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                              {b.text}
                            </span>
                            {b.metric && (
                              <span
                                className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-bold"
                                style={{
                                  background: `${exp.color}18`,
                                  color: exp.color,
                                  border: `1px solid ${exp.color}33`,
                                }}
                              >
                                {b.metric}
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
