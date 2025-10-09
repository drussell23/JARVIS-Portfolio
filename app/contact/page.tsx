import { Metadata } from 'next'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Contact | JARVIS AI',
  description: 'Get in touch with Derek Russell - AI Engineer and creator of JARVIS.',
}

const contactMethods = [
  {
    icon: FaGithub,
    title: 'GitHub',
    description: 'Check out my open-source projects and contributions',
    link: 'https://github.com/drussell23',
    linkText: '@drussell23',
    color: 'from-gray-700 to-gray-900',
  },
  {
    icon: FaLinkedin,
    title: 'LinkedIn',
    description: 'Connect professionally and see my work experience',
    link: 'https://www.linkedin.com/in/derek-j-russell/',
    linkText: 'Derek J. Russell',
    color: 'from-blue-600 to-blue-800',
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    description: 'Send me a message directly',
    link: 'mailto:djamesr23@gmail.com',
    linkText: 'djamesr23@gmail.com',
    color: 'from-jarvis-blue to-jarvis-cyan',
  },
]

const topics = [
  'AI systems architecture',
  'Machine learning optimization',
  'Voice and computer vision applications',
  'Apple Silicon performance engineering',
  'Technical collaboration opportunities',
  'Full-time positions or consulting work',
]

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h1>
          <p className="text-xl text-dark-text max-w-3xl mx-auto">
            Interested in AI systems, performance engineering, or technical collaboration?
            I'd love to hear from you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <a
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-dark-card border border-dark-border rounded-lg p-6 hover:border-jarvis-blue/50 transition-all hover:shadow-lg hover:shadow-jarvis-blue/10"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-jarvis-blue transition-colors">
                  {method.title}
                </h3>
                <p className="text-dark-text text-sm mb-4">
                  {method.description}
                </p>
                <div className="text-jarvis-cyan font-medium text-sm">
                  {method.linkText} →
                </div>
              </a>
            )
          })}
        </div>

        {/* Topics Section */}
        <div className="bg-gradient-to-br from-jarvis-blue/10 to-jarvis-cyan/10 border border-jarvis-blue/30 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            What I'd Love to Talk About
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {topics.map((topic) => (
              <div key={topic} className="flex items-start gap-3">
                <span className="text-jarvis-cyan mt-1 flex-shrink-0">●</span>
                <span className="text-dark-text">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* About Me Section */}
        <div className="bg-dark-card border border-dark-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
          <div className="space-y-4 text-dark-text leading-relaxed">
            <p>
              I'm Derek Russell, an AI engineer who built JARVIS - a voice-controlled assistant
              for macOS with computer vision and context-aware intelligence. I specialize in
              performance optimization, machine learning systems, and building production-grade
              AI applications.
            </p>
            <p>
              My work focuses on making AI assistants actually useful by combining voice control,
              computer vision, and intelligent automation. I've achieved 95% CPU reductions,
              99.9% ML accuracy, and built self-healing systems that recover automatically from failures.
            </p>
            <p>
              I'm particularly interested in Apple Silicon optimization (custom ARM64 assembly),
              event-driven architectures, and solving real-world problems with AI. If you're
              working on something interesting, let's talk.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-dark-border">
            <div>
              <div className="text-2xl font-bold text-jarvis-blue">4</div>
              <div className="text-sm text-dark-text">Languages</div>
              <div className="text-xs text-dark-text/70">Python, TypeScript, Rust, Swift</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-jarvis-cyan">99.9%</div>
              <div className="text-sm text-dark-text">ML Accuracy</div>
              <div className="text-xs text-dark-text/70">Intent classification</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-jarvis-blue">95%</div>
              <div className="text-sm text-dark-text">CPU Reduction</div>
              <div className="text-xs text-dark-text/70">80-100% → 1-5%</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-jarvis-cyan">&lt;50ms</div>
              <div className="text-sm text-dark-text">Response Time</div>
              <div className="text-xs text-dark-text/70">ML routing latency</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-dark-text mb-6">
            Prefer email? Reach out directly at{' '}
            <a
              href="mailto:djamesr23@gmail.com"
              className="text-jarvis-blue hover:text-jarvis-cyan transition-colors font-medium"
            >
              djamesr23@gmail.com
            </a>
          </p>
          <p className="text-sm text-dark-text/70">
            I typically respond within 24-48 hours
          </p>
        </div>
      </div>
    </div>
  )
}
