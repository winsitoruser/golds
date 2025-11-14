'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LiveActivity from '@/components/LiveActivity'
import TokenSale from '@/components/TokenSale'
import InvestmentBenefits from '@/components/InvestmentBenefits'
import TrustSection from '@/components/TrustSection'
import Features from '@/components/Features'
import Tokenomics from '@/components/Tokenomics'
import Roadmap from '@/components/Roadmap'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="particles"></div>
      <Header />
      <Hero />
      <LiveActivity />
      <TokenSale />
      <InvestmentBenefits />
      <TrustSection />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Team />
      <Footer />
    </main>
  )
}
