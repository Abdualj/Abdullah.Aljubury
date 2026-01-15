'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  role: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  iframeUrl: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [showIframe, setShowIframe] = useState(false)
  
  // Check if iframeUrl is an image
  const isImage = project.iframeUrl.match(/\.(jpg|jpeg|png|gif|webp)$/i)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition group"
    >
      {/* Preview */}
      <div
        className="relative h-64 bg-gray-800 cursor-pointer overflow-hidden"
        onClick={() => setShowIframe(!showIframe)}
      >
        {showIframe ? (
          isImage ? (
            <Image
              src={project.iframeUrl}
              alt={project.title}
              fill
              className="object-contain"
            />
          ) : (
            <iframe
              src={project.iframeUrl}
              className="w-full h-full"
              title={project.title}
              loading="lazy"
            />
          )
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-gray-300 transition">
            <div className="text-center">
              <ExternalLink size={48} className="mx-auto mb-2" />
              <p>Click to preview</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-1">Role</p>
          <p className="text-gray-300">{project.role}</p>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
