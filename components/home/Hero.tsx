'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiPlay, HiArrowRight, HiLightningBolt, HiEye, HiCpu, HiChip } from 'react-icons/hi'

export default function Hero() {
  const stats = [
    { label: 'CPU Usage', value: '1-5%', icon: HiCpu, color: 'text-accent-green' },
    { label: 'Parallel Speedup', value: '3x', icon: HiLightningBolt, color: 'text-jarvis-gold-400' },
    { label: 'ML Accuracy', value: '99.9%', icon: HiChip, color: 'text-jarvis-cyan-400' },
    { label: 'Visual Memory', value: '100', icon: HiEye, color: 'text-jarvis-400' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background layers */}
      <div className="absolute inset-0">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-jarvis-600/10 via-dark-900 to-jarvis-cyan-600/10" />

        {/* Circuit pattern */}
        <div className="absolute inset-0 bg-circuit opacity-30" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-20" />

        {/* Radial gradient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-jarvis-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-jarvis-500/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-jarvis-cyan-500/10 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Version Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-strong rounded-full border border-jarvis-500/30 group hover:border-jarvis-500/60 transition-all duration-300 hover:shadow-glow-sm">
              <div className="w-2 h-2 bg-jarvis-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-jarvis-cyan-300">v13.10.0</span>
              <span className="text-sm text-dark-200">Latest Release</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center mb-8"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 leading-none">
              <span className="text-dark-50">Meet</span>
              <br />
              <span className="gradient-text text-shadow-glow">JARVIS</span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-jarvis-500 to-transparent rounded-full" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-dark-100 mb-12 max-w-4xl mx-auto text-center text-balance leading-relaxed font-light"
          >
            A <span className="text-jarvis-400 font-semibold">context-aware AI assistant</span> with voice activation, computer vision,
            and intelligent automation. Built from scratch with{' '}
            <span className="text-jarvis-cyan-400 font-semibold">Python, TypeScript, Rust, and Swift</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/blog" className="btn-primary flex items-center gap-3 group w-full sm:w-auto justify-center">
              <HiPlay className="w-6 h-6 group-hover:scale-125 transition-transform icon-glow" />
              <span className="text-lg">Read Technical Blog</span>
            </Link>
            <Link href="/architecture" className="btn-secondary flex items-center gap-3 group w-full sm:w-auto justify-center">
              <span className="text-lg">Explore Architecture</span>
              <HiArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          {/* Quick Stats - Redesigned */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="card-hover p-6 sm:p-8 group cursor-default"
              >
                <stat.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${stat.color} mb-4 group-hover:scale-110 transition-transform`} />
                <div className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-dark-200 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature Highlight Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-16 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {[
              'Temporal Change Detection',
              'Multi-Space Queries',
              'Voice-Controlled',
              'Self-Healing',
              '4-Method Image Analysis',
              'Zero Hardcoding'
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                className="px-4 py-2 glass-subtle rounded-full text-sm font-medium text-dark-100 hover:glass-strong hover:text-jarvis-300 transition-all duration-300 cursor-default border border-transparent hover:border-jarvis-500/30"
              >
                {feature}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
    </section>
  )
}
