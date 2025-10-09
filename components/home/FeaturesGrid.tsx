'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  HiMicrophone,
  HiEye,
  HiLightningBolt,
  HiDocumentText,
  HiShieldCheck,
  HiCog
} from 'react-icons/hi'

interface Feature {
  id: string
  icon: React.ElementType
  title: string
  description: string
  highlights: string[]
  href: string
  color: string
}

const features: Feature[] = [
  {
    id: 'voice',
    icon: HiMicrophone,
    title: 'Voice Activation',
    description: 'Wake word detection with "Hey JARVIS" using Picovoice Porcupine',
    highlights: [
      'Sub-350MB memory footprint',
      'CoreML VAD integration',
      'Proximity-based unlock'
    ],
    href: '/features#voice',
    color: 'from-jarvis-blue to-jarvis-cyan',
  },
  {
    id: 'vision',
    icon: HiEye,
    title: 'Computer Vision',
    description: 'Real-time screen monitoring with Claude Vision API',
    highlights: [
      'Multi-space capture',
      'Proactive monitoring',
      'Context-aware analysis'
    ],
    href: '/features#vision',
    color: 'from-jarvis-cyan to-jarvis-green',
  },
  {
    id: 'intelligence',
    icon: HiLightningBolt,
    title: 'Context-Aware Intelligence',
    description: 'ML-powered intent classification with 90% accuracy',
    highlights: [
      'Zero hardcoded patterns',
      'Adaptive learning',
      'Advanced routing engine'
    ],
    href: '/features#intelligence',
    color: 'from-jarvis-gold to-jarvis-blue',
  },
  {
    id: 'automation',
    icon: HiDocumentText,
    title: 'Document Automation',
    description: 'AI-powered document generation and workflow automation',
    highlights: [
      'Multi-step workflows',
      'Browser automation',
      'Smart command chaining'
    ],
    href: '/features#automation',
    color: 'from-jarvis-green to-jarvis-cyan',
  },
  {
    id: 'self-healing',
    icon: HiShieldCheck,
    title: 'Self-Healing System',
    description: 'Automatic error recovery and system health monitoring',
    highlights: [
      'Process resurrection',
      'State persistence',
      'Graceful degradation'
    ],
    href: '/features#self-healing',
    color: 'from-jarvis-red to-jarvis-blue',
  },
  {
    id: 'performance',
    icon: HiCog,
    title: 'Performance Optimization',
    description: 'ARM64 NEON assembly for 40-50x ML inference speedup',
    highlights: [
      '1-2% CPU usage',
      'Async architecture',
      'Resource management'
    ],
    href: '/features#performance',
    color: 'from-jarvis-blue to-jarvis-gold',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-dark-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Core <span className="gradient-text">Features</span>
          </h2>
          <p className="text-dark-text text-lg max-w-2xl mx-auto">
            Full-stack AI system combining voice, vision, and intelligent automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={feature.href}
                  className="block group h-full"
                >
                  <div className="glass rounded-xl p-6 h-full hover:shadow-xl hover:shadow-jarvis-blue/10 transition-all duration-300 hover:-translate-y-1">
                    {/* Icon with gradient background */}
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-jarvis-blue transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-dark-text mb-4">
                      {feature.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-dark-text">
                          <span className="w-1.5 h-1.5 rounded-full bg-jarvis-cyan mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Learn more arrow */}
                    <div className="mt-4 flex items-center text-jarvis-blue text-sm font-semibold group-hover:translate-x-2 transition-transform">
                      Learn more →
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/features" className="btn-primary inline-flex items-center space-x-2">
            <span>Explore All Features</span>
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
