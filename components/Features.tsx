'use client'

import { Lock, Zap, Globe, Trophy, Shield, TrendingUp } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Asset-Backed Security',
      description: 'Every GOLDS token is backed by physical gold reserves, ensuring real value.',
    },
    {
      icon: Zap,
      title: 'Instant Transactions',
      description: 'Lightning-fast blockchain transactions with minimal fees and maximum efficiency.',
    },
    {
      icon: Lock,
      title: 'Secure & Audited',
      description: 'Smart contracts audited by leading firms. Your investment is protected.',
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Trade and transact anywhere in the world, 24/7 without restrictions.',
    },
    {
      icon: TrendingUp,
      title: 'Deflationary Model',
      description: 'Built-in token burn mechanism ensures scarcity and value appreciation.',
    },
    {
      icon: Trophy,
      title: 'Premium Rewards',
      description: 'Earn rewards and bonuses by holding GOLDS tokens long-term.',
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 px-8 py-4 glass-gold rounded-full mb-6 backdrop-blur-xl border border-gold-500/20">
            <span className="text-sm text-gray-300 font-medium tracking-wide">Key Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-luxury">Why Choose GOLDS</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Institutional-grade infrastructure combining gold stability with blockchain innovation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="luxury-card elegant-shadow rounded-2xl p-10 hover:luxury-glow transition-all group card-3d relative overflow-hidden"
              >
                <div className="holographic absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Icon */}
                <div className="relative z-10 w-20 h-20 premium-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all elegant-shadow">
                  <Icon className="w-10 h-10 text-black" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-luxury transition-all">{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
