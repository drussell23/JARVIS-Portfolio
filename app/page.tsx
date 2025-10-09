import Hero from '@/components/home/Hero'
import MetricsDashboard from '@/components/home/MetricsDashboard'
import FeaturesGrid from '@/components/home/FeaturesGrid'
import TechStack from '@/components/home/TechStack'
import CallToAction from '@/components/home/CallToAction'

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <MetricsDashboard />
      <FeaturesGrid />
      <TechStack />
      <CallToAction />
    </div>
  )
}
