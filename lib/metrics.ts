/**
 * JARVIS Performance Metrics
 *
 * All metrics are verified from production usage and documentation.
 * Sources:
 * - CPU metrics: docs/development/implementation/cpu-optimization-journey.md
 * - ML metrics: docs/features/intelligence/advanced-ml-routing.md
 * - Memory metrics: docs/development/implementation/resource-management.md
 */

export interface PerformanceMetric {
  id: string
  label: string
  value: string
  suffix?: string
  description: string
  color: string
  source: string
  verified: boolean
}

export const performanceMetrics: PerformanceMetric[] = [
  {
    id: 'version',
    label: 'Current Version',
    value: '13.10.0',
    description: 'Context-aware intelligence & document automation',
    color: 'text-jarvis-blue',
    source: 'README.md, Git tags',
    verified: true,
  },
  {
    id: 'cpu',
    label: 'CPU Usage (Idle)',
    value: '1-5',
    suffix: '%',
    description: 'Down from 80-100%, optimized with ARM64 NEON assembly',
    color: 'text-jarvis-green',
    source: 'cpu-optimization-journey.md - Line 214',
    verified: true,
  },
  {
    id: 'cpu-reduction',
    label: 'CPU Reduction',
    value: '95',
    suffix: '%',
    description: 'Achieved through adaptive throttling and lazy loading',
    color: 'text-jarvis-gold',
    source: 'cpu-optimization-journey.md - Table',
    verified: true,
  },
  {
    id: 'ml-accuracy',
    label: 'ML Intent Accuracy',
    value: '99.9',
    suffix: '%',
    description: 'Zero-hardcoding ML classifier with continuous learning',
    color: 'text-jarvis-cyan',
    source: 'advanced-ml-routing.md - Line 151',
    verified: true,
  },
  {
    id: 'ml-response',
    label: 'ML Classification Time',
    value: '<50',
    suffix: 'ms',
    description: 'Real-time intent classification',
    color: 'text-jarvis-blue',
    source: 'advanced-ml-routing.md - Line 169',
    verified: true,
  },
  {
    id: 'memory',
    label: 'Memory Usage',
    value: '526',
    suffix: 'MB',
    description: 'Down from 1.5GB+ through quantization and optimization',
    color: 'text-jarvis-green',
    source: 'cpu-optimization-journey.md - Line 215',
    verified: true,
  },
  {
    id: 'memory-reduction',
    label: 'Memory Reduction',
    value: '65',
    suffix: '%',
    description: 'Data quantization reduced usage by 75% for numeric data',
    color: 'text-jarvis-gold',
    source: 'cpu-optimization-journey.md - Line 103, Table',
    verified: true,
  },
  {
    id: 'startup',
    label: 'Startup Time',
    value: '7-9',
    suffix: 'sec',
    description: 'Down from 20+ seconds with lazy loading',
    color: 'text-jarvis-cyan',
    source: 'cpu-optimization-journey.md - Line 216',
    verified: true,
  },
]

export const quickStats = [
  { label: 'CPU Usage', value: '1-5%', verified: true },
  { label: 'ML Accuracy', value: '99.9%', verified: true },
  { label: 'CPU Reduction', value: '95%', verified: true },
  { label: 'Memory', value: '526MB', verified: true },
]

/**
 * Get metrics for display on homepage
 */
export function getHomepageMetrics() {
  return [
    performanceMetrics.find(m => m.id === 'cpu'),
    performanceMetrics.find(m => m.id === 'cpu-reduction'),
    performanceMetrics.find(m => m.id === 'ml-accuracy'),
    performanceMetrics.find(m => m.id === 'memory'),
  ].filter(Boolean) as PerformanceMetric[]
}

/**
 * Get all verified metrics
 */
export function getVerifiedMetrics() {
  return performanceMetrics.filter(m => m.verified)
}

/**
 * Performance improvements table data
 */
export const performanceImprovements = [
  {
    metric: 'CPU Usage (Idle)',
    before: '80-100%',
    after: '1-5%',
    improvement: '95% reduction',
    source: 'cpu-optimization-journey.md',
  },
  {
    metric: 'Memory Usage',
    before: '1.5GB+',
    after: '526MB',
    improvement: '65% reduction',
    source: 'cpu-optimization-journey.md',
  },
  {
    metric: 'Startup Time',
    before: '20+ sec',
    after: '7-9 sec',
    improvement: '60% faster',
    source: 'cpu-optimization-journey.md',
  },
  {
    metric: 'Frontend Activation',
    before: 'Often failed',
    after: 'Always works',
    improvement: '100% reliable',
    source: 'cpu-optimization-journey.md',
  },
  {
    metric: 'Data Quantization',
    before: 'Full precision floats',
    after: 'uint8 quantized',
    improvement: '75% memory reduction',
    source: 'cpu-optimization-journey.md Line 103',
  },
]

/**
 * ML Routing performance data
 */
export const mlRoutingMetrics = {
  accuracy: '99.9%',
  classificationTime: '<50ms',
  memoryFootprint: '~10MB',
  patternsLearned: '1000+',
  adaptationRate: 'Real-time',
  source: 'advanced-ml-routing.md',
  verified: true,
}

/**
 * Technology stack with verification
 */
export const techStack = {
  languages: ['Python', 'TypeScript', 'Rust', 'Swift'],
  aiFrameworks: ['Claude AI (Anthropic)', 'CoreML', 'Picovoice'],
  backend: ['FastAPI', 'AsyncIO', 'WebSocket'],
  frontend: ['React', 'Next.js', 'Tailwind CSS'],
  performance: ['ARM64 NEON Assembly', 'SIMD', 'Memory Pooling'],
  verified: true,
}
