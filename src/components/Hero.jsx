import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiDownload, FiExternalLink } from 'react-icons/fi'
import portfolio from '../data/portfolio'

function useTypewriter(words) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    const word = words[index]
    if (!deleting && subIndex === word.length + 1) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    }
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex(prev => (prev + 1) % words.length)
      return
    }
    const speed = deleting ? 45 : 80
    const t = setTimeout(() => {
      setSubIndex(prev => prev + (deleting ? -1 : 1))
      setText(word.substring(0, subIndex))
    }, speed)
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words])

  return text
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } }),
}

export default function Hero() {
  const typedText = useTypewriter(portfolio.profile.taglines)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden dot-grid"
      style={{ backgroundColor: '#07070F' }}
    >
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -40, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.22) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -30, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -right-48 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ x: [0, 30, -40, 0], y: [0, 30, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)' }}
        />
      </div>

      <div className="section-container relative z-10 pt-24 pb-16">
        {/* Availability badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
            style={{
              background: 'rgba(16,185,129,0.08)',
              borderColor: 'rgba(16,185,129,0.25)',
              color: '#10B981',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Open to AI/ML roles · Pune (Baner · Balewadi · Hinjewadi)
          </span>
        </motion.div>

        {/* Name */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.2}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4">
            <span className="text-white">Nishit</span>{' '}
            <span className="gradient-text">Bohra</span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.35}>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-xl sm:text-2xl md:text-3xl font-semibold"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              I build as a
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white min-w-0">
              {typedText}
              <span className="animate-blink text-primary">|</span>
            </span>
          </div>
        </motion.div>

        {/* Positioning */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="text-base sm:text-lg max-w-2xl mb-10 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          {portfolio.profile.positioning}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.65}
          className="flex flex-wrap gap-4 mb-14"
        >
          <a href="#projects" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <span>View Projects</span>
            <FiExternalLink size={15} />
          </a>
          <a href="#contact" className="btn-outline" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <FiMail size={15} />
            Get in Touch
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.8}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-3xl"
        >
          {portfolio.profile.heroStats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04, y: -2 }}
              className="glass-card p-4 text-center"
              style={{ border: '1px solid rgba(108,99,255,0.15)' }}
            >
              <div
                className="text-2xl sm:text-3xl font-black mb-1"
                style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                {stat.value}
              </div>
              <div className="text-xs leading-tight" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.95}
          className="flex items-center gap-4"
        >
          {[
            { icon: FiGithub, href: portfolio.profile.github, label: 'GitHub' },
            { icon: FiLinkedin, href: portfolio.profile.linkedin, label: 'LinkedIn' },
            { icon: FiMail, href: `mailto:${portfolio.profile.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-11 h-11 rounded-xl transition-all"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.6)',
              }}
              title={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
          <div className="w-px h-6 mx-2" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <span className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
            {portfolio.profile.location}
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={16} style={{ color: 'rgba(255,255,255,0.25)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
