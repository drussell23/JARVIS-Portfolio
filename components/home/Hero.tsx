'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiPlay, HiArrowRight } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-jarvis-blue/10 via-transparent to-jarvis-cyan/10 animate-gradient" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,168,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,168,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Version Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full glass text-sm font-semibold text-jarvis-cyan border border-jarvis-cyan/30">
              v13.10.0 • Latest Release
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Meet{' '}
            <span className="gradient-text">JARVIS</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-dark-text mb-8 max-w-3xl mx-auto text-balance"
          >
            A context-aware AI assistant with voice activation, computer vision,
            and intelligent automation. Built from scratch with Python, TypeScript, Rust, and Swift.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="#demo" className="btn-primary flex items-center space-x-2 group">
              <HiPlay className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </Link>
            <Link href="/architecture" className="btn-secondary flex items-center space-x-2 group">
              <span>Explore Architecture</span>
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Demo Video Placeholder */}
          <motion.div
            id="demo"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 glass rounded-2xl overflow-hidden glow-blue"
          >
            <div className="aspect-video bg-gradient-to-br from-dark-card to-dark-bg flex items-center justify-center">
              <div className="text-center">
                <HiPlay className="w-20 h-20 text-jarvis-blue mx-auto mb-4" />
                <p className="text-dark-text">Demo video coming soon</p>
                <p className="text-sm text-dark-text mt-2">Voice activation, vision system, and automation showcase</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: 'CPU Usage', value: '1-2%' },
              { label: 'Speedup', value: '40-50x' },
              { label: 'ML Accuracy', value: '90%' },
              { label: 'Voice Memory', value: '350MB' },
            ].map((stat, index) => (
              <div key={index} className="glass rounded-lg p-4">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-text">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
