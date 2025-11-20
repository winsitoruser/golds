'use client'

import { ShoppingCart, Lock, Coins, RefreshCw } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: ShoppingCart,
      title: 'Ape In',
      description: 'Grab your SOGOLD during ICO or on DEX. Each token = 1g of real gold. Simple.',
      number: '01'
    },
    {
      icon: Lock,
      title: 'We HODL Your Gold',
      description: 'Your actual gold bars chilling in Swiss vaults. Insured, audited, and SAFU.',
      number: '02'
    },
    {
      icon: Coins,
      title: 'Diamond Hands or Trade',
      description: 'Hold for gold gains + 75% APY staking, or trade 24/7 on DEX. Your call, anon.',
      number: '03'
    },
    {
      icon: RefreshCw,
      title: 'Take Delivery',
      description: 'Want the physical bars? We ship to your door. Prefer cash? Instant redemption. Easy peasy.',
      number: '04'
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black via-amber-950/5 to-black relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-amber-500/10 border border-amber-500/20 rounded-full mb-8">
            <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Simple Process</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight uppercase tracking-tighter">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
              HOW TO GET RICH
            </span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Four simple steps. No complicated DeFi BS. Just pure value. 💰
          </p>
        </div>

        {/* Steps Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            
            return (
              <div key={index} className="relative group">
                {/* Connecting Line (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-amber-500/50 to-transparent"></div>
                )}
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-amber-500/20 hover:border-amber-500/50 rounded-2xl p-8 transition-all hover:scale-105 h-full">
                  {/* Step Number Background */}
                  <div className="absolute top-4 right-4 text-6xl font-black text-amber-500/5 leading-none">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 mb-6 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-xl shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-all">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-500/10 via-transparent to-transparent border border-amber-500/20 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-amber-400 mb-2">1g = 1 Token</div>
                <div className="text-sm text-gray-400">Direct Gold Equivalence</div>
              </div>
              <div>
                <div className="text-4xl font-black text-amber-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Trading & Redemption</div>
              </div>
              <div>
                <div className="text-4xl font-black text-amber-400 mb-2">$0 Fees</div>
                <div className="text-sm text-gray-400">Storage & Insurance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
