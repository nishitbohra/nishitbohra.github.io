import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Research from './components/Research'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#07070F', color: '#F1F5F9' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Contact />
      </main>
    </div>
  )
}
