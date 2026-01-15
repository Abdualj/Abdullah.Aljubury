'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, Download, Phone } from 'lucide-react'
import { resumeData } from '@/data/resume'

export default function ResumeViewer() {
  const [language, setLanguage] = useState<'en' | 'fi'>('en')
  const resume = resumeData[language]

  return (
    <div className="max-w-5xl mx-auto">
      {/* Language Toggle */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setLanguage('en')}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            language === 'en'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('fi')}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            language === 'fi'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Suomi
        </button>
      </div>

      {/* Resume Content */}
      <motion.div
        key={language}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{resume.name}</h1>
          <p className="text-xl text-blue-100">{resume.title}</p>
          
          <div className="flex flex-wrap gap-4 mt-4 text-sm">
            <a href={`mailto:${resume.contact.email}`} className="flex items-center gap-2 hover:text-blue-200 transition">
              <Mail size={16} />
              {resume.contact.email}
            </a>
            {resume.contact.phone && (
              <a href={`tel:${resume.contact.phone}`} className="flex items-center gap-2 hover:text-blue-200 transition">
                <Phone size={16} />
                {resume.contact.phone}
              </a>
            )}
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              {resume.contact.location}
            </span>
            <a href={`https://${resume.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-200 transition">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href={`https://${resume.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-200 transition">
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Summary */}
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-3">
              {language === 'en' ? 'Professional Summary' : 'Ammatillinen yhteenveto'}
            </h2>
            <p className="text-gray-300 leading-relaxed">{resume.summary}</p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              {language === 'en' ? 'Work Experience' : 'Työkokemus'}
            </h2>
            <div className="space-y-6">
              {resume.experience.map((job, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-4">
                  <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                  <p className="text-blue-400 font-medium">{job.company}</p>
                  <p className="text-gray-500 text-sm mb-2">{job.period}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              {language === 'en' ? 'Education' : 'Koulutus'}
            </h2>
            <div className="space-y-4">
              {resume.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-4">
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <p className="text-blue-400 font-medium">{edu.school}</p>
                  <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
                  {edu.details && <p className="text-gray-300">{edu.details}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              {language === 'en' ? 'Technical Skills' : 'Tekniset taidot'}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-white mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {resume.skills.frontend.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {resume.skills.backend.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">
                  {language === 'en' ? 'Database' : 'Tietokanta'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resume.skills.database.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">
                  {language === 'en' ? 'Tools' : 'Työkalut'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resume.skills.tools.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Soft Skills */}
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              {language === 'en' ? 'Professional Skills' : 'Ammatilliset taidot'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {resume.skills.soft.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg text-sm text-gray-200 border border-blue-700">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              {language === 'en' ? 'Key Projects' : 'Keskeiset projektit'}
            </h2>
            <div className="space-y-4">
              {resume.projects.map((project, index) => (
                <div key={index} className="border-l-2 border-purple-600 pl-4 bg-gray-800/50 p-4 rounded-r-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                    <span className="text-xs text-purple-400 bg-purple-900/50 px-2 py-1 rounded">{project.status}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              {language === 'en' ? 'Languages' : 'Kielet'}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {resume.languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
                  <span className="font-medium text-white">{lang.language}</span>
                  <span className="text-sm text-blue-400">{lang.level}</span>
                </div>
              ))}
            </div>
          </section>

          {/* References */}
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              {language === 'en' ? 'References' : 'Suosittelijat'}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {resume.references.map((ref, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-1">{ref.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{ref.title}</p>
                  <div className="space-y-1 text-sm">
                    <a href={`mailto:${ref.email}`} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                      <Mail size={14} />
                      {ref.email}
                    </a>
                    <a href={`tel:${ref.phone}`} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                      <Phone size={14} />
                      {ref.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>

      {/* PDF Download Options */}
      <div className="flex justify-center gap-4 mt-6">
        <a
          href="/Abdullah-Al jubury-Resume.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
        >
          <Download size={18} />
          Download PDF (EN)
        </a>
        <a
          href="/Abdullah-Al jubury-Resume-Finnish.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
        >
          <Download size={18} />
          Download PDF (FI)
        </a>
      </div>
    </div>
  )
}
