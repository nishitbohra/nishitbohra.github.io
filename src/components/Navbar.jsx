import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMenu, FiX, FiDownload } from 'react-icons/fi'
import portfolio from '../data/portfolio'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { threshold: 0.4 }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(7, 7, 15, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm text-white"
                style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)' }}
              >
                NB
              </div>
              <span className="font-semibold text-white/90 hidden sm:block group-hover:text-white transition-colors">
                Nishit Bohra
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="relative px-4 py-2 text-sm font-medium transition-colors rounded-lg"
                  style={{
                    color: activeSection === link.href.slice(1)
                      ? '#6C63FF'
                      : 'rgba(255,255,255,0.6)',
                  }}
                >
                  <span className="relative z-10 hover:text-white transition-colors">
                    {link.label}
                  </span>
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'rgba(108,99,255,0.1)' }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <a
                href={portfolio.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex w-9 h-9 items-center justify-center rounded-xl transition-all hover:bg-white/8 text-white/60 hover:text-white"
                title="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href={portfolio.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex w-9 h-9 items-center justify-center rounded-xl transition-all hover:bg-white/8 text-white/60 hover:text-white"
                title="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href={portfolio.profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)' }}
              >
                <FiDownload size={14} />
                Resume
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl text-white/70 hover:text-white hover:bg-white/8 transition-all"
              >
                {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden"
            style={{
              background: 'rgba(11, 11, 26, 0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{
                    color: activeSection === link.href.slice(1) ? '#6C63FF' : 'rgba(255,255,255,0.7)',
                    background: activeSection === link.href.slice(1) ? 'rgba(108,99,255,0.1)' : 'transparent',
                  }}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-3 px-4 pt-3 mt-2 border-t border-white/5">
                <a href={portfolio.profile.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  <FiGithub size={16} /> GitHub
                </a>
                <a href={portfolio.profile.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  <FiLinkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
