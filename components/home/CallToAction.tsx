'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiBookOpen, HiMail } from 'react-icons/hi'

export default function CallToAction() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-jarvis-blue/10 to-jarvis-cyan/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Learn <span className="gradient-text">More?</span>
          </h2>
          <p className="text-dark-text text-lg mb-8 max-w-2xl mx-auto">
            Dive deeper into the architecture, read technical blog posts, or get in touch
            to discuss the project
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="btn-primary flex items-center justify-center space-x-2 group"
            >
              <HiBookOpen className="w-5 h-5" />
              <span>Read the Blog</span>
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/architecture"
              className="btn-secondary flex items-center justify-center space-x-2 group"
            >
              <span>View Architecture</span>
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="btn-ghost flex items-center justify-center space-x-2"
            >
              <HiMail className="w-5 h-5" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
