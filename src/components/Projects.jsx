import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi'
import portfolio from '../data/portfolio'

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function ProjectCard({ project, onExpand }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="glass-card overflow-hidden cursor-pointer group"
      style={{ border: `1px solid rgba(255,255,255,0.05)` }}
      onClick={() => onExpand(project)}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}55)` }} />

      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{project.icon}</span>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">{project.title}</h3>
              <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{project.subtitle}</p>
            </div>
          </div>
          <span
            className="badge flex-shrink-0"
            style={{ background: `${project.badgeColor}18`, color: project.badgeColor, border: `1px solid ${project.badgeColor}33` }}
          >
            {project.badge}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
          {project.description}
        </p>

        {/* Metrics */}
        <div className="space-y-1.5 mb-5">
          {project.metrics.map((m, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.color }} />
              <span className="text-xs font-medium" style={{ color: project.color }}>{m}</span>
            </div>
          ))}
        </div>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 5).map(t => (
            <span key={t} className="chip text-xs">{t}</span>
          ))}
          {project.techStack.length > 5 && (
            <span className="chip text-xs">+{project.techStack.length - 5}</span>
          )}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between">
          <button
            className="flex items-center gap-1.5 text-xs font-semibold transition-colors group-hover:text-white"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Case Study <FiChevronDown size={13} />
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs transition-all hover:scale-105"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              <FiGithub size={13} />
              GitHub
            </a>
          )}
          {!project.github && (
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>Internal / Production</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function CaseStudyModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 24 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{ background: '#111128', border: '1px solid rgba(255,255,255,0.08)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Top accent */}
        <div className="h-1.5 w-full rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}44)` }} />

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{project.icon}</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl font-bold text-white">{project.title}</h2>
                  <span
                    className="badge"
                    style={{ background: `${project.badgeColor}18`, color: project.badgeColor, border: `1px solid ${project.badgeColor}33` }}
                  >
                    {project.badge}
                  </span>
                </div>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>{project.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors flex-shrink-0"
              style={{ color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.05)' }}
            >
              <FiX size={16} />
            </button>
          </div>

          <div className="space-y-6">
            {/* Problem */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
                The Problem
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>{project.problem}</p>
            </div>

            {/* Why it matters */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Why It Matters
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>{project.whyItMatters}</p>
            </div>

            {/* Architecture */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                System Architecture
              </h3>
              <div
                className="p-4 rounded-xl font-mono text-sm"
                style={{ background: 'rgba(0,0,0,0.4)', color: project.color, border: `1px solid ${project.color}22` }}
              >
                {project.architecture.split(' → ').map((step, i, arr) => (
                  <span key={i}>
                    <span>{step}</span>
                    {i < arr.length - 1 && (
                      <span style={{ color: 'rgba(255,255,255,0.3)' }}> → </span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Innovations */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Key Innovations
              </h3>
              <ul className="space-y-2">
                {project.innovations.map((inn, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.color }} />
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{inn}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Results & Metrics
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {project.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl text-sm font-semibold"
                    style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}22` }}
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(t => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>

            {/* Actions */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full justify-center"
              >
                <FiGithub size={15} />
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: '#07070F' }}>
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-14">
            <span className="section-label">Projects</span>
            <h2 className="section-heading text-white">
              Systems I've{' '}
              <span className="gradient-text">designed & shipped</span>
            </h2>
            <p className="mt-3 text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Click any card to open the full case study — problem, architecture, and results.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {portfolio.projects.map(project => (
              <ProjectCard key={project.id} project={project} onExpand={setActiveProject} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Case study modal */}
      <AnimatePresence>
        {activeProject && (
          <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
