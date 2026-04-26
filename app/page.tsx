import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import ProblemsSection from '@/components/ProblemsSection'
import WorkflowLibrary from '@/components/WorkflowLibrary'
import HowItWorks from '@/components/HowItWorks'
import ServicesSection from '@/components/ServicesSection'
import ArticlesSection from '@/components/ArticlesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <ProblemsSection />
      <WorkflowLibrary />
      <HowItWorks />
      <ServicesSection />
      <ArticlesSection />
      <Footer />
    </main>
  )
}
