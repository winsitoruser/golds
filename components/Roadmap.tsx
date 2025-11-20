'use client'

import { CheckCircle2, Circle, Clock } from 'lucide-react'

export default function Roadmap() {
  const phases = [
    {
      quarter: 'Q4 2024',
      status: 'completed',
      milestones: [
        'Swiss Vault Partnership Secured',
        'Initial Gold Reserves ($50M) Acquired',
        'Smart Contract Development & CertiK Audit',
        'Legal & Regulatory Compliance',
      ],
    },
    {
      quarter: 'Q1 2025',
      status: 'active',
      milestones: [
        'Public ICO Launch',
        'Quarterly Gold Audit Report',
        'Exchange Partnership Agreements',
        '10,000+ Investor Milestone',
      ],
    },
    {
      quarter: 'Q2 2025',
      status: 'upcoming',
      milestones: [
        'DEX Listing (Uniswap, PancakeSwap)',
        'CEX Listings (Binance, Coinbase)',
        'Physical Gold Redemption Platform',
        'Mobile Wallet App Launch',
      ],
    },
    {
      quarter: 'Q3 2025',
      status: 'upcoming',
      milestones: [
        'Gold Reserve Expansion to $100M',
        'Staking Platform (15% APY)',
        'Institutional Partnership Program',
        'International Vault Network (London, Singapore)',
      ],
    },
  ]

  return (
    <section id="roadmap" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Roadmap to the Moon 🚀
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're building in public. No empty promises. Just pure execution.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold-900/30"></div>

          {/* Phases */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                {/* Status Icon */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  {phase.status === 'completed' ? (
                    <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center glow-gold">
                      <CheckCircle2 className="w-8 h-8 text-black" />
                    </div>
                  ) : phase.status === 'active' ? (
                    <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center glow-gold animate-pulse">
                      <Clock className="w-8 h-8 text-black" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-gray-800 border-2 border-gold-900/50 rounded-full flex items-center justify-center">
                      <Circle className="w-8 h-8 text-gray-600" />
                    </div>
                  )}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-4rem)] ml-24 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`glass-gold border ${
                    phase.status === 'active' ? 'border-gold-700/50 neon-gold' : 'border-gold-800/30'
                  } rounded-2xl p-6 hover:neon-gold transition-all card-3d relative overflow-hidden group`}>
                    <div className="holographic absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                    {/* Quarter Badge */}
                    <div className="inline-block px-4 py-1 bg-gold-gradient rounded-full mb-4">
                      <span className="text-sm font-bold text-black">{phase.quarter}</span>
                    </div>

                    {/* Milestones */}
                    <ul className="space-y-3">
                      {phase.milestones.map((milestone, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            phase.status === 'completed' ? 'bg-gold-400' : 'bg-gray-600'
                          }`}></div>
                          <span className={phase.status === 'completed' ? 'text-white' : 'text-gray-400'}>
                            {milestone}
                          </span>
                        </li>
                      ))}
                    </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
