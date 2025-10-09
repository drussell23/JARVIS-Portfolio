import { Metadata } from 'next'
import { FaMicrophone, FaEye, FaBrain, FaCog, FaBell, FaShieldAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Features | JARVIS AI',
  description: 'Explore JARVIS AI features: voice control, computer vision, context awareness, intelligent automation, and more.',
}

const features = [
  {
    icon: FaMicrophone,
    title: 'Voice Control',
    description: 'Natural language voice commands with "Hey JARVIS" wake word detection.',
    highlights: [
      'Hardware-accelerated CoreML processing on Neural Engine',
      'Adaptive threshold tuning for different environments',
      'Multi-command workflows from single voice input',
      'British butler personality with contextual responses',
    ],
    metrics: [
      { label: 'CPU Usage', value: '1-2%' },
      { label: 'Wake Word Latency', value: '<100ms' },
    ],
  },
  {
    icon: FaEye,
    title: 'Computer Vision',
    description: 'Real-time screen monitoring and analysis using Claude Vision API.',
    highlights: [
      'Multi-window workspace awareness',
      'Automatic detection of notifications and errors',
      'Works with ANY app through visual understanding',
      'No API integrations or hardcoded app lists needed',
    ],
    metrics: [
      { label: 'Analysis Speed', value: '<2s' },
      { label: 'Detection Accuracy', value: '95%+' },
    ],
  },
  {
    icon: FaBrain,
    title: 'ML Intent Routing',
    description: 'Intelligent command classification that adapts to how you speak.',
    highlights: [
      '99.9% intent classification accuracy',
      'Pattern-based learning, not keyword matching',
      'Handles variations and natural phrasing',
      'Sub-50ms response time',
    ],
    metrics: [
      { label: 'Accuracy', value: '99.9%' },
      { label: 'Response Time', value: '<50ms' },
    ],
  },
  {
    icon: FaCog,
    title: 'Context Awareness',
    description: 'Understands your workflow and system state to execute commands intelligently.',
    highlights: [
      'Screen lock detection with automatic unlocking',
      'Active application and window awareness',
      'Multi-browser tab understanding',
      'Workflow-based decision making',
    ],
    metrics: [
      { label: 'Success Rate', value: '100%' },
      { label: 'Context Accuracy', value: '95%+' },
    ],
  },
  {
    icon: FaBell,
    title: 'Proactive Intelligence',
    description: 'Monitors your workspace and alerts you to important information.',
    highlights: [
      'Background monitoring for urgent messages',
      'Error detection across all applications',
      'Software update notifications',
      'Meeting preparation with conflict detection',
    ],
    metrics: [
      { label: 'Detection Rate', value: '99%+' },
      { label: 'False Positives', value: '<1%' },
    ],
  },
  {
    icon: FaShieldAlt,
    title: 'Self-Healing System',
    description: 'Automatic error detection and recovery for zero-downtime operation.',
    highlights: [
      'Dynamic component switching (Rust ↔ Python)',
      'Automatic service restart on failure',
      'Health monitoring and diagnostics',
      'Graceful degradation when components fail',
    ],
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Recovery Time', value: '<5s' },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Features
          </h1>
          <p className="text-xl text-dark-text max-w-3xl mx-auto">
            Voice-controlled AI assistant with computer vision, intelligent automation,
            and context-aware intelligence
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-dark-card border border-dark-border rounded-lg p-8 hover:border-jarvis-blue/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon & Title */}
                  <div className="md:w-1/3">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-jarvis-blue to-jarvis-cyan flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                          {feature.title}
                        </h2>
                        <p className="text-dark-text text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="mt-6 space-y-3">
                      {feature.metrics.map((metric) => (
                        <div key={metric.label} className="flex justify-between items-center">
                          <span className="text-sm text-dark-text">{metric.label}</span>
                          <span className="text-lg font-semibold text-jarvis-blue">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="md:w-2/3">
                    <h3 className="text-sm font-semibold text-jarvis-cyan mb-4 uppercase tracking-wide">
                      Key Capabilities
                    </h3>
                    <ul className="space-y-3">
                      {feature.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-jarvis-cyan mt-1 flex-shrink-0">●</span>
                          <span className="text-dark-text leading-relaxed">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-br from-jarvis-blue/10 to-jarvis-cyan/10 border border-jarvis-blue/30 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Read the Technical Blog Posts
          </h2>
          <p className="text-dark-text mb-8 max-w-2xl mx-auto">
            Dive deep into the engineering challenges and solutions behind each feature.
            From CPU optimization to ML routing, it's all documented.
          </p>
          <a
            href="/blog"
            className="inline-block px-8 py-3 bg-gradient-to-r from-jarvis-blue to-jarvis-cyan text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-jarvis-blue/50 transition-all"
          >
            Read Blog Posts
          </a>
        </div>
      </div>
    </div>
  )
}
