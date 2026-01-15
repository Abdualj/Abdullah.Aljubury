'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react'
import { useRouter } from 'next/navigation'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function Portfolio() {
  const router = useRouter()

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleViewResume = () => {
    router.push('/resume')
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold"
          >
            Abdullah Aljubury
          </motion.div>
          <div className="flex gap-6 items-center">
            <a
              href="https://github.com/Abdualj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-al-jubury-b51471337"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:abdualjubury@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold tracking-tight"
        >
          Abdullah Aljubury
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl mt-4 text-gray-300"
        >
          Full-Stack Web Developer · Automation · Business Systems
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg"
        >
          I build production-grade web platforms, internal tools, and API-driven systems 
          for real businesses — from car dealerships and retail to large-scale events.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            View Projects
          </button>
          <button
            onClick={handleViewResume}
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition"
          >
            View Resume
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition"
          >
            Contact Me
          </button>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* About & Skills */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-semibold mb-4">About</h2>
            <p className="text-gray-300 leading-relaxed">
              Bachelor student in Information and Communication Technology with professional 
              experience in full-stack development, automation, and business systems. I specialize 
              in building end-to-end solutions: UI, backend, databases, and integrations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-semibold text-white mb-2">Frontend</h3>
                <p>React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Backend</h3>
                <p>Node.js, REST APIs, Google Apps Script</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Database</h3>
                <p>MySQL, PostgreSQL</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Tools</h3>
                <p>GitHub, Figma, Vercel, Netlify, Flatpay, Mando</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm currently open to new opportunities. Whether you have a question or just want 
          to say hi, feel free to reach out!
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:abdualjubury@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
          >
            <Mail size={20} />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-al-jubury-b51471337"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Abdualj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <p className="text-center text-gray-500">
          © {new Date().getFullYear()} Abdullah Aljubury. Built with Next.js & Tailwind CSS.
        </p>
      </footer>
    </div>
  )
}
