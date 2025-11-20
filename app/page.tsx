'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LiveActivity from '@/components/LiveActivity'
import TokenSale from '@/components/TokenSale'
import InvestmentBenefits from '@/components/InvestmentBenefits'
import HowItWorks from '@/components/HowItWorks'
import TrustSection from '@/components/TrustSection'
import Features from '@/components/Features'
import Tokenomics from '@/components/Tokenomics'
import Roadmap from '@/components/Roadmap'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Particle Canvas Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <LiveActivity />
        <TokenSale />
        <HowItWorks />
        <InvestmentBenefits />
        <TrustSection />
        <Features />
        <Tokenomics />
        <Roadmap />
        <Team />
        <Footer />
      </div>
    </main>
  )
}
