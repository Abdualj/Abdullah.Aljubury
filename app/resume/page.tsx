'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import ResumeViewer from '@/components/ResumeViewer'

export default function ResumePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header with Back Button */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
        </nav>
      </header>

      {/* Resume Content */}
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Resume / CV</h1>
          <ResumeViewer />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <p className="text-center text-gray-500">
          © {new Date().getFullYear()} Abdullah Aljubury. Built with Next.js & Tailwind CSS.
        </p>
      </footer>
    </div>
  )
}
