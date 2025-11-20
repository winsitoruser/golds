'use client'

import { Lock, Zap, Globe, Trophy, Shield, TrendingUp } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: '100% Gold-Backed',
      description: '1 token = 1g of actual gold. No paper promises. Real bars sitting in Swiss vaults.',
    },
    {
      icon: Lock,
      title: 'Fort Knox Level Security',
      description: 'Your gold locked in Swiss vaults with $500M insurance. Literally the safest place on Earth.',
    },
    {
      icon: Trophy,
      title: 'Proof of Reserves',
      description: 'Quarterly audits on-chain. Full transparency. No "trust me bro" here.',
    },
    {
      icon: Globe,
      title: 'Accessible AF',
      description: 'Start with $1. No minimum bags required. DCA into gold like a pro.',
    },
    {
      icon: Zap,
      title: 'Exit Whenever',
      description: 'Redeem for physical gold bars or cash out anytime. No lock-ups. Your keys, your gold.',
    },
    {
      icon: TrendingUp,
      title: 'Price Go Up',
      description: 'Tracks real gold prices + earn 75% APY staking. Double alpha opportunity.',
    },
  ]

  return (
    <section className="py-24 px-6 bg-black relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight uppercase tracking-tighter">
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              WHY WAGMI WITH GOLD
            </span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Gold's 5000-year track record meets <span className="text-amber-400 font-medium">DeFi innovation</span>. The ultimate hedge for your portfolio. DYOR and you'll see why. 👇
          </p>
        </div>

        {/* Linea-style Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            
            return (
              <div key={index} className="bg-blue-500/5 border border-blue-500/10 hover:border-blue-500/30 rounded-2xl p-8 transition-all">
                <div className="mb-6">
                  <Icon className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
