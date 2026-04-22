import React, { useState } from 'react'
import { motion } from 'framer-motion'
import portfolio from '../data/portfolio'

const categoryColors = {
  'Languages':      { bg: 'rgba(0,212,255,0.08)',   border: 'rgba(0,212,255,0.2)',   text: '#00D4FF' },
  'ML & AI':        { bg: 'rgba(108,99,255,0.08)',   border: 'rgba(108,99,255,0.25)', text: '#6C63FF' },
  'Frameworks':     { bg: 'rgba(167,139,250,0.08)',  border: 'rgba(167,139,250,0.2)', text: '#A78BFA' },
  'Infrastructure': { bg: 'rgba(16,185,129,0.08)',   border: 'rgba(16,185,129,0.2)',  text: '#10B981' },
  'MLOps':          { bg: 'rgba(245,158,11,0.08)',   border: 'rgba(245,158,11,0.2)',  text: '#F59E0B' },
}

const stagger = {
  show: { transition: { staggerChildren: 0.07 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
  const { skills, skillHighlights } = portfolio

  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: '#07070F' }}>
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-14">
            <span className="section-label">Skills</span>
            <h2 className="section-heading text-white">
              My{' '}
              <span className="gradient-text">technical stack</span>
            </h2>
            <p className="mt-3 text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Production-tested tools across the full ML lifecycle — from research to deployment.
            </p>
          </motion.div>

          {/* Categories grid */}
          <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => {
              const style = categoryColors[category] || categoryColors['Languages']
              return (
                <motion.div
                  key={category}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 transition-all duration-300 group"
                  style={{ border: `1px solid rgba(255,255,255,0.06)` }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-2 h-6 rounded-full"
                      style={{ background: style.text }}
                    />
                    <span className="text-sm font-bold" style={{ color: style.text }}>
                      {category}
                    </span>
                    <span
                      className="ml-auto text-xs font-medium px-2 py-1 rounded-full"
                      style={{ background: style.bg, color: style.text }}
                    >
                      {items.length}
                    </span>
                  </div>

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => {
                      const isHighlight = portfolio.skillHighlights.includes(skill)
                      return (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.08 }}
                          className="chip cursor-default"
                          style={
                            isHighlight
                              ? {
                                  background: style.bg,
                                  borderColor: style.border,
                                  color: style.text,
                                  fontWeight: 600,
                                }
                              : {}
                          }
                        >
                          {skill}
                          {isHighlight && (
                            <span className="ml-1 text-[10px]" style={{ color: style.text, opacity: 0.7 }}>★</span>
                          )}
                        </motion.span>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Featured proficiencies row */}
          <motion.div variants={fadeUp} className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
              ★ Core proficiencies
            </p>
            <div className="flex flex-wrap gap-3">
              {portfolio.skillHighlights.map(skill => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 rounded-xl text-sm font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,212,255,0.1))',
                    border: '1px solid rgba(108,99,255,0.3)',
                    color: 'rgba(255,255,255,0.9)',
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
