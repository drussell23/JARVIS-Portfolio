'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Metric {
  id: string
  label: string
  value: string
  suffix?: string
  description: string
  color: string
}

const metrics: Metric[] = [
  {
    id: 'version',
    label: 'Current Version',
    value: '13.10.0',
    description: 'Context-aware intelligence & document automation',
    color: 'text-jarvis-blue',
  },
  {
    id: 'cpu',
    label: 'CPU Usage (Idle)',
    value: '1-5',
    suffix: '%',
    description: 'Down from 80-100% - verified from production',
    color: 'text-jarvis-green',
  },
  {
    id: 'reduction',
    label: 'CPU Reduction',
    value: '95',
    suffix: '%',
    description: 'Through adaptive throttling and optimization',
    color: 'text-jarvis-gold',
  },
  {
    id: 'accuracy',
    label: 'ML Intent Accuracy',
    value: '99.9',
    suffix: '%',
    description: 'Zero-hardcoding ML classifier - verified',
    color: 'text-jarvis-cyan',
  },
  {
    id: 'memory',
    label: 'Memory Usage',
    value: '526',
    suffix: 'MB',
    description: 'Down from 1.5GB+ through quantization',
    color: 'text-jarvis-blue',
  },
  {
    id: 'latency',
    label: 'ML Response Time',
    value: '<50',
    suffix: 'ms',
    description: 'Real-time intent classification - verified',
    color: 'text-jarvis-green',
  },
]

export default function MetricsDashboard() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Performance <span className="gradient-text">Metrics</span>
          </h2>
          <p className="text-dark-text text-lg max-w-2xl mx-auto">
            Production-ready AI assistant with enterprise-grade performance and efficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:shadow-xl hover:shadow-jarvis-blue/10 transition-all duration-300 group"
            >
              <div className="flex flex-col h-full">
                <div className="text-sm text-dark-text mb-2 font-semibold">
                  {metric.label}
                </div>
                <div className={`text-4xl font-bold mb-2 ${metric.color} group-hover:scale-110 transition-transform`}>
                  {isVisible && metric.value}
                  {metric.suffix && (
                    <span className="text-2xl ml-1">{metric.suffix}</span>
                  )}
                </div>
                <div className="text-sm text-dark-text mt-auto">
                  {metric.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 glass rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Why These Metrics <span className="gradient-text">Matter</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-jarvis-green text-lg font-semibold mb-2">
                🚀 Ultra-Efficient
              </div>
              <p className="text-dark-text text-sm">
                95% CPU reduction (from 80-100% to 1-5%) through adaptive throttling,
                lazy loading, and ARM64 NEON assembly optimizations
              </p>
            </div>
            <div>
              <div className="text-jarvis-blue text-lg font-semibold mb-2">
                🧠 Intelligent Routing
              </div>
              <p className="text-dark-text text-sm">
                99.9% ML accuracy with zero hardcoding. Self-learning classifier
                adapts to patterns in real-time
              </p>
            </div>
            <div>
              <div className="text-jarvis-gold text-lg font-semibold mb-2">
                ⚡ Real-Time Response
              </div>
              <p className="text-dark-text text-sm">
                Sub-50ms intent classification with async architecture, WebSocket
                real-time communication, and efficient memory management (526MB)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
