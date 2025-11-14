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
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-amber-500/10 rounded-full mb-6 border border-amber-500/20 backdrop-blur-sm">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-400 font-semibold tracking-wider uppercase">Key Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-white">
            Why Choose GOLDS
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Institutional-grade infrastructure combining gold stability with blockchain innovation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colors = [
              { bg: 'from-amber-500/10', border: 'border-amber-500/50', icon: 'text-amber-400', hover: 'hover:border-amber-500' },
              { bg: 'from-blue-500/10', border: 'border-blue-500/50', icon: 'text-blue-400', hover: 'hover:border-blue-500' },
              { bg: 'from-green-500/10', border: 'border-green-500/50', icon: 'text-green-400', hover: 'hover:border-green-500' },
              { bg: 'from-purple-500/10', border: 'border-purple-500/50', icon: 'text-purple-400', hover: 'hover:border-purple-500' },
              { bg: 'from-cyan-500/10', border: 'border-cyan-500/50', icon: 'text-cyan-400', hover: 'hover:border-cyan-500' },
              { bg: 'from-pink-500/10', border: 'border-pink-500/50', icon: 'text-pink-400', hover: 'hover:border-pink-500' }
            ]
            const color = colors[index % colors.length]
            
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 ${color.hover} transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${color.bg} to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color.bg} border ${color.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${color.icon}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-100 transition-colors">{feature.title}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
