import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Architecture | JARVIS AI',
  description: 'Technical architecture and system design of JARVIS AI - event-driven, self-healing, optimized for Apple Silicon.',
}

export default function ArchitecturePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            System Architecture
          </h1>
          <p className="text-xl text-dark-text max-w-3xl mx-auto">
            Event-driven, self-healing architecture optimized for Apple Silicon
          </p>
        </div>

        {/* Architecture Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
          <p className="text-dark-text leading-relaxed mb-6">
            JARVIS is built as a distributed, event-driven system with multiple specialized components
            that communicate through asynchronous pipelines. The architecture prioritizes performance,
            reliability, and resource efficiency on macOS.
          </p>
          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <p className="text-dark-text leading-relaxed">
              <strong className="text-white">Design Philosophy:</strong> Zero configuration, self-healing,
              and graceful degradation. If a component fails, the system automatically falls back to
              alternatives and attempts recovery in the background.
            </p>
          </div>
        </section>

        {/* Core Components */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Core Components</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Voice Engine */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-jarvis-blue mb-3">Voice Engine</h3>
              <p className="text-dark-text text-sm leading-relaxed mb-3">
                Hardware-accelerated wake word detection using CoreML on Apple's Neural Engine.
                Processes audio in real-time with <strong>1-2% CPU usage</strong>.
              </p>
              <div className="text-sm">
                <p className="text-jarvis-cyan mb-1">Technologies:</p>
                <ul className="text-dark-text space-y-1 ml-4">
                  <li>• CoreML for on-device ML</li>
                  <li>• Custom ARM64 assembly</li>
                  <li>• Adaptive threshold tuning</li>
                </ul>
              </div>
            </div>

            {/* Vision System */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-jarvis-blue mb-3">Vision System</h3>
              <p className="text-dark-text text-sm leading-relaxed mb-3">
                Real-time screen analysis using Claude Vision API. Monitors entire workspace
                and detects relevant information across all applications.
              </p>
              <div className="text-sm">
                <p className="text-jarvis-cyan mb-1">Technologies:</p>
                <ul className="text-dark-text space-y-1 ml-4">
                  <li>• Claude AI for vision</li>
                  <li>• Screen capture API</li>
                  <li>• Intelligent caching</li>
                </ul>
              </div>
            </div>

            {/* ML Router */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-jarvis-blue mb-3">ML Intent Router</h3>
              <p className="text-dark-text text-sm leading-relaxed mb-3">
                Intelligent command classification with <strong>99.9% accuracy</strong> and
                <strong>&lt;50ms latency</strong>. Routes requests to appropriate handlers.
              </p>
              <div className="text-sm">
                <p className="text-jarvis-cyan mb-1">Technologies:</p>
                <ul className="text-dark-text space-y-1 ml-4">
                  <li>• Custom ML models</li>
                  <li>• Pattern-based learning</li>
                  <li>• Dynamic adaptation</li>
                </ul>
              </div>
            </div>

            {/* Async Pipeline */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-jarvis-blue mb-3">Async Pipeline</h3>
              <p className="text-dark-text text-sm leading-relaxed mb-3">
                Event-driven processing pipeline with backpressure handling and priority queues.
                Enables concurrent execution without blocking.
              </p>
              <div className="text-sm">
                <p className="text-jarvis-cyan mb-1">Technologies:</p>
                <ul className="text-dark-text space-y-1 ml-4">
                  <li>• Python asyncio</li>
                  <li>• WebSocket for real-time</li>
                  <li>• Circuit breakers</li>
                </ul>
              </div>
            </div>

            {/* Context Store */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-jarvis-blue mb-3">Context Store</h3>
              <p className="text-dark-text text-sm leading-relaxed mb-3">
                In-memory context management with LRU eviction. Maintains conversation history
                and workflow state across interactions.
              </p>
              <div className="text-sm">
                <p className="text-jarvis-cyan mb-1">Technologies:</p>
                <ul className="text-dark-text space-y-1 ml-4">
                  <li>• In-memory storage</li>
                  <li>• TTL-based expiration</li>
                  <li>• Semantic relevance scoring</li>
                </ul>
              </div>
            </div>

            {/* Self-Healing System */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-jarvis-blue mb-3">Self-Healing System</h3>
              <p className="text-dark-text text-sm leading-relaxed mb-3">
                Automatic error detection and recovery. Monitors component health and switches
                between Rust/Python implementations as needed.
              </p>
              <div className="text-sm">
                <p className="text-jarvis-cyan mb-1">Technologies:</p>
                <ul className="text-dark-text space-y-1 ml-4">
                  <li>• Dynamic component loading</li>
                  <li>• Automatic failover</li>
                  <li>• Health monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Technology Stack</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-jarvis-cyan mb-4">Backend</h3>
              <ul className="text-dark-text space-y-2 text-sm">
                <li>• <strong className="text-white">Python</strong> - Core logic & ML</li>
                <li>• <strong className="text-white">Rust</strong> - Performance-critical paths</li>
                <li>• <strong className="text-white">Swift</strong> - macOS integrations</li>
                <li>• <strong className="text-white">FastAPI</strong> - REST API server</li>
              </ul>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-jarvis-cyan mb-4">AI & ML</h3>
              <ul className="text-dark-text space-y-2 text-sm">
                <li>• <strong className="text-white">Claude AI</strong> - Vision & NLP</li>
                <li>• <strong className="text-white">CoreML</strong> - On-device inference</li>
                <li>• <strong className="text-white">Custom Models</strong> - Intent routing</li>
                <li>• <strong className="text-white">ARM64 NEON</strong> - Optimized compute</li>
              </ul>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-jarvis-cyan mb-4">Infrastructure</h3>
              <ul className="text-dark-text space-y-2 text-sm">
                <li>• <strong className="text-white">Event-driven</strong> - Async architecture</li>
                <li>• <strong className="text-white">WebSocket</strong> - Real-time comms</li>
                <li>• <strong className="text-white">Local-first</strong> - Privacy-focused</li>
                <li>• <strong className="text-white">Self-healing</strong> - Auto recovery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Performance Optimizations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Performance Optimizations</h2>

          <div className="space-y-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Custom ARM64 Assembly</h3>
                  <p className="text-dark-text text-sm">
                    Hand-optimized NEON SIMD instructions for Apple Silicon. Leverages M1/M2/M3
                    architecture for maximum performance.
                  </p>
                </div>
                <div className="ml-4 text-right">
                  <span className="text-2xl font-bold text-jarvis-blue">40-50x</span>
                  <p className="text-xs text-dark-text">faster</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Intelligent Caching</h3>
                  <p className="text-dark-text text-sm">
                    Multi-layer caching strategy with LRU/LFU eviction. Reduces API calls and
                    improves response times.
                  </p>
                </div>
                <div className="ml-4 text-right">
                  <span className="text-2xl font-bold text-jarvis-blue">95%</span>
                  <p className="text-xs text-dark-text">CPU reduction</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Async Event Processing</h3>
                  <p className="text-dark-text text-sm">
                    Non-blocking I/O and concurrent task execution. Handles multiple requests
                    without performance degradation.
                  </p>
                </div>
                <div className="ml-4 text-right">
                  <span className="text-2xl font-bold text-jarvis-blue">&lt;50ms</span>
                  <p className="text-xs text-dark-text">latency</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Design Principles</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-jarvis-blue/10 to-transparent border border-jarvis-blue/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-jarvis-blue mb-3">Zero Configuration</h3>
              <p className="text-dark-text text-sm leading-relaxed">
                No manual setup required. Services discover each other automatically, ports are
                dynamically allocated, and components self-configure based on system capabilities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-jarvis-cyan/10 to-transparent border border-jarvis-cyan/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-jarvis-cyan mb-3">Graceful Degradation</h3>
              <p className="text-dark-text text-sm leading-relaxed">
                When components fail, the system falls back to alternatives. Rust unavailable?
                Use Python. API down? Use cached results. Never show the user an error.
              </p>
            </div>

            <div className="bg-gradient-to-br from-jarvis-blue/10 to-transparent border border-jarvis-blue/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-jarvis-blue mb-3">Privacy First</h3>
              <p className="text-dark-text text-sm leading-relaxed">
                All processing happens locally when possible. Screen content is never stored.
                API calls are minimized and only sent when necessary for functionality.
              </p>
            </div>

            <div className="bg-gradient-to-br from-jarvis-cyan/10 to-transparent border border-jarvis-cyan/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-jarvis-cyan mb-3">Apple Silicon Native</h3>
              <p className="text-dark-text text-sm leading-relaxed">
                Built specifically for M1/M2/M3 chips. Leverages Neural Engine, GPU acceleration,
                and NEON SIMD for maximum performance on Apple hardware.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
