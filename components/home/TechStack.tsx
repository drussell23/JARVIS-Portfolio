'use client'

import { motion } from 'framer-motion'
import {
  SiPython, SiTypescript, SiRust, SiSwift, SiReact, SiNextdotjs,
  SiFastapi, SiTailwindcss, SiWebsocket, SiDocker
} from 'react-icons/si'

const techStack = [
  { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Backend' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend' },
  { name: 'Rust', icon: SiRust, color: '#000000', category: 'Performance' },
  { name: 'Swift', icon: SiSwift, color: '#FA7343', category: 'macOS' },
  { name: 'React', icon: SiReact, color: '#61DAFB', category: 'UI' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'Framework' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688', category: 'API' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'Styling' },
  { name: 'WebSocket', icon: SiWebsocket, color: '#010101', category: 'Real-time' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'Deploy' },
]

export default function TechStack() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technology <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-dark-text text-lg max-w-2xl mx-auto">
            Built with modern, production-grade technologies across multiple languages and frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {techStack.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl hover:shadow-jarvis-blue/10 transition-all duration-300 group hover:-translate-y-1"
              >
                <Icon
                  className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform"
                  style={{ color: tech.color }}
                />
                <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                <p className="text-xs text-dark-text">{tech.category}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Tech Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3 text-jarvis-blue">AI & ML</h3>
            <ul className="space-y-2 text-sm text-dark-text">
              <li>• Claude AI (Anthropic)</li>
              <li>• CoreML & Core Data</li>
              <li>• Picovoice (Wake Word)</li>
              <li>• ARM64 NEON Assembly</li>
            </ul>
          </div>
          <div className="glass rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3 text-jarvis-cyan">Architecture</h3>
            <ul className="space-y-2 text-sm text-dark-text">
              <li>• Async/Await Pipelines</li>
              <li>• WebSocket Real-time</li>
              <li>• Event-Driven Design</li>
              <li>• Microservices</li>
            </ul>
          </div>
          <div className="glass rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3 text-jarvis-gold">Performance</h3>
            <ul className="space-y-2 text-sm text-dark-text">
              <li>• SIMD Optimizations</li>
              <li>• Memory Pooling</li>
              <li>• Lazy Loading</li>
              <li>• Resource Management</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
