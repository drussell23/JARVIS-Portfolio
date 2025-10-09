import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | JARVIS AI',
  description: 'Learn about JARVIS AI - a voice-controlled assistant for macOS with computer vision and context-aware intelligence.',
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About JARVIS
          </h1>
          <p className="text-xl text-dark-text">
            A voice-controlled AI assistant built for macOS that actually understands your workflow
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* What is JARVIS */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What is JARVIS?</h2>
            <p className="text-dark-text leading-relaxed mb-4">
              JARVIS is a voice-controlled AI assistant for macOS inspired by Iron Man's JARVIS.
              Say "Hey JARVIS" and it responds - no button pressing, no app switching, just natural conversation.
            </p>
            <p className="text-dark-text leading-relaxed">
              Unlike other AI assistants, JARVIS can see your screen, understand what you're working on,
              and take action across your entire system. It's like having a technical co-pilot that's
              always watching your back.
            </p>
          </section>

          {/* Core Capabilities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Core Capabilities</h2>

            <div className="space-y-6">
              <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-jarvis-blue mb-2">Voice Control</h3>
                <p className="text-dark-text">
                  Hands-free operation with natural language processing. No need to memorize specific commands
                  or wake up your computer first. JARVIS understands context and intent, not just keywords.
                </p>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-jarvis-blue mb-2">Computer Vision</h3>
                <p className="text-dark-text">
                  Real-time screen monitoring powered by Claude AI. JARVIS sees notifications, error messages,
                  and updates across all your applications - not just the ones with API integrations.
                </p>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-jarvis-blue mb-2">Context Awareness</h3>
                <p className="text-dark-text">
                  Understands your workflow and adapts accordingly. Screen locked? JARVIS unlocks it before
                  executing your command. Multiple browser tabs? It knows which one you mean.
                </p>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-jarvis-blue mb-2">Intelligent Automation</h3>
                <p className="text-dark-text">
                  Controls browsers, applications, and system functions. Execute multi-step workflows with
                  a single voice command. "Open Safari and search for dogs" - it just works.
                </p>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-jarvis-blue mb-2">Proactive Intelligence</h3>
                <p className="text-dark-text">
                  Alerts you to important information without being asked. Monitors for urgent messages,
                  errors, and updates. Helps you prepare for meetings and stay focused on what matters.
                </p>
              </div>
            </div>
          </section>

          {/* Why I Built This */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why I Built This</h2>
            <p className="text-dark-text leading-relaxed mb-4">
              I wanted an AI assistant that actually understood what I was doing. Not one that needed
              perfect conditions or specific phrasing - one that adapted to me, not the other way around.
            </p>
            <p className="text-dark-text leading-relaxed mb-4">
              Most AI assistants are glorified chatbots. They can answer questions, but they can't see
              your screen, understand your workflow, or take meaningful action across your system.
              JARVIS was built to fill that gap.
            </p>
            <p className="text-dark-text leading-relaxed">
              The result is an assistant that feels less like software and more like a co-pilot.
              It handles the tedious stuff so I can focus on the work that matters.
            </p>
          </section>

          {/* Technical Highlights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Technical Highlights</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-jarvis-cyan mr-3 text-xl">•</span>
                <span className="text-dark-text">
                  <strong className="text-white">Custom ARM64 Assembly:</strong> Hand-optimized NEON code for
                  Apple Silicon. 40-50x faster than standard implementations.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-jarvis-cyan mr-3 text-xl">•</span>
                <span className="text-dark-text">
                  <strong className="text-white">95% CPU Reduction:</strong> Optimized from 80-100% CPU usage
                  down to 1-5% through intelligent caching and async processing.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-jarvis-cyan mr-3 text-xl">•</span>
                <span className="text-dark-text">
                  <strong className="text-white">99.9% ML Accuracy:</strong> Intent classification that actually
                  works. Adapts to how you speak, not hardcoded patterns.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-jarvis-cyan mr-3 text-xl">•</span>
                <span className="text-dark-text">
                  <strong className="text-white">Self-Healing Systems:</strong> Automatic error recovery with
                  zero-downtime fallbacks. Rust component crashes? It switches to Python automatically.
                </span>
              </li>
            </ul>
          </section>

          {/* Personal Note */}
          <section className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">A Personal Project</h2>
            <p className="text-dark-text leading-relaxed mb-4">
              JARVIS is a personal project I built for my own use. The code is private, but I've
              documented the engineering challenges and solutions through technical blog posts.
            </p>
            <p className="text-dark-text leading-relaxed">
              Features like automated screen unlocking are designed for single-user, personal environments
              and would not be included in any public release. This portfolio exists to share the engineering
              work, not to distribute the software.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
