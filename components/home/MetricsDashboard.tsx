'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  HiLightningBolt,
  HiChip,
  HiClock,
  HiDatabase,
  HiTrendingDown,
  HiCheckCircle
} from 'react-icons/hi'
import type { IconType } from 'react-icons'

interface Metric {
  id: string
  label: string
  value: string
  suffix?: string
  description: string
  color: string
  icon: IconType
  highlight?: string
}

const metrics: Metric[] = [
  {
    id: 'cpu',
    label: 'CPU Usage',
    value: '1-5',
    suffix: '%',
    description: 'Down from 80-100% baseline',
    color: 'text-accent-green',
    icon: HiChip,
    highlight: '95% Reduction'
  },
  {
    id: 'accuracy',
    label: 'ML Intent Accuracy',
    value: '99.9',
    suffix: '%',
    description: 'Zero-hardcoding classifier',
    color: 'text-jarvis-cyan-400',
    icon: HiChip,
    highlight: 'Production Verified'
  },
  {
    id: 'latency',
    label: 'Command Routing',
    value: '<50',
    suffix: 'ms',
    description: 'Real-time classification',
    color: 'text-jarvis-gold-400',
    icon: HiLightningBolt,
    highlight: 'Ultra-Fast'
  },
  {
    id: 'memory',
    label: 'Memory Usage',
    value: '526',
    suffix: 'MB',
    description: 'Down from 1.5GB+ baseline',
    color: 'text-jarvis-400',
    icon: HiDatabase,
    highlight: '65% Reduction'
  },
  {
    id: 'speedup',
    label: 'Parallel Speedup',
    value: '3',
    suffix: 'x',
    description: 'Multi-space async queries',
    color: 'text-accent-purple',
    icon: HiLightningBolt,
    highlight: '1800ms → 625ms'
  },
  {
    id: 'temporal',
    label: 'Change Detection',
    value: '10ms',
    suffix: '- 2s',
    description: '4-method image analysis',
    color: 'text-jarvis-cyan-300',
    icon: HiClock,
    highlight: '4 Detection Methods'
  },
]

export default function MetricsDashboard() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-circuit opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-850 to-dark-900" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-strong rounded-full mb-6">
            <HiCheckCircle className="w-5 h-5 text-accent-green" />
            <span className="text-sm font-semibold text-dark-100">Production Metrics</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Performance{' '}
            <span className="gradient-text">Benchmarks</span>
          </h2>
          <p className="text-xl text-dark-200 max-w-3xl mx-auto text-balance">
            Enterprise-grade AI with optimized performance. Every metric verified in production.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-glow h-full relative overflow-hidden">
                {/* Holographic shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-jarvis-500/5 via-transparent to-jarvis-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <metric.icon className={`w-10 h-10 ${metric.color} group-hover:scale-110 transition-transform duration-300`} />
                    {metric.highlight && (
                      <span className="px-3 py-1 text-xs font-bold glass-subtle rounded-full text-dark-100">
                        {metric.highlight}
                      </span>
                    )}
                  </div>

                  {/* Value */}
                  <div className="mb-3">
                    <div className={`text-5xl font-black ${metric.color} group-hover:text-shadow-glow transition-all duration-300`}>
                      {isVisible && metric.value}
                      {metric.suffix && (
                        <span className="text-3xl ml-1 opacity-80">{metric.suffix}</span>
                      )}
                    </div>
                  </div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-dark-50 mb-2">
                    {metric.label}
                  </div>

                  {/* Description */}
                  <div className="text-sm text-dark-300 leading-relaxed">
                    {metric.description}
                  </div>

                  {/* Progress bar indicator */}
                  <div className="mt-4 h-1 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full ${metric.color.replace('text', 'bg')} rounded-full`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Highlights - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass-strong rounded-3xl p-8 sm:p-12 border-gradient">
            <h3 className="text-3xl sm:text-4xl font-black mb-8 text-center">
              Why These Metrics{' '}
              <span className="gradient-text">Matter</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: HiTrendingDown,
                  title: 'Ultra-Efficient',
                  color: 'text-accent-green',
                  description: '95% CPU reduction through adaptive throttling, lazy loading, and ARM64 NEON assembly optimizations. From 80-100% down to 1-5%.'
                },
                {
                  icon: HiChip,
                  title: 'Intelligent Routing',
                  color: 'text-jarvis-cyan-400',
                  description: '99.9% ML accuracy with zero hardcoding. Self-learning classifier adapts to patterns in real-time with <50ms latency.'
                },
                {
                  icon: HiLightningBolt,
                  title: 'Parallel Architecture',
                  color: 'text-jarvis-gold-400',
                  description: '3x speedup with async execution. Multi-space queries process 10 spaces in 625ms vs 1800ms sequential. Graceful degradation built-in.'
                }
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <highlight.icon className={`w-12 h-12 ${highlight.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h4 className={`text-xl font-bold mb-3 ${highlight.color}`}>
                    {highlight.title}
                  </h4>
                  <p className="text-dark-200 leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
