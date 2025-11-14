'use client'

import { TrendingUp, Zap, Lock, Gift, Target, DollarSign } from 'lucide-react'
import { useState } from 'react'

export default function InvestmentBenefits() {
  const [investment, setInvestment] = useState(10000)

  const calculateReturns = (amount: number) => {
    const tokens = amount / 0.25
    const monthReturn = amount * 0.15 // 15% monthly
    const yearReturn = amount * 2.5 // 250% yearly projection
    const bonus = amount * 0.20 // 20% current bonus
    return { tokens, monthReturn, yearReturn, bonus }
  }

  const returns = calculateReturns(investment)

  const benefits = [
    {
      icon: TrendingUp,
      title: '250% Projected ROI',
      desc: 'Based on market analysis and gold price projections for 2025',
      highlight: 'First Year'
    },
    {
      icon: Lock,
      title: 'Asset-Backed Security',
      desc: '$50M in physical gold reserves stored in Swiss vaults',
      highlight: '100% Backed'
    },
    {
      icon: Gift,
      title: '+20% Bonus Tokens',
      desc: 'Limited time offer for early investors during ICO phase',
      highlight: 'Ending Soon'
    },
    {
      icon: Zap,
      title: 'Instant Liquidity',
      desc: 'Trade on major DEX & CEX platforms immediately after ICO',
      highlight: 'Q2 2025'
    },
    {
      icon: Target,
      title: 'Staking Rewards',
      desc: 'Earn up to 15% APY by staking your GOLDS tokens',
      highlight: '15% APY'
    },
    {
      icon: DollarSign,
      title: 'Deflationary Model',
      desc: 'Quarterly token burns ensure long-term value appreciation',
      highlight: '2% Burn/Q'
    },
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0" style={{opacity: '0.4'}}>
        <div className="bokeh" style={{width: '180px', height: '180px', top: '40%', left: '10%', opacity: '0.3'}}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-8 py-4 glass-gold rounded-full mb-6 backdrop-blur-xl border border-gold-500/20">
              <Target className="w-5 h-5 text-gold-400" />
              <span className="text-sm text-gray-300 font-medium tracking-wide">Investment Calculator</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-luxury">Project Your Returns</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Calculate potential ROI and explore why institutional investors choose GOLDS for portfolio diversification
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* ROI Calculator */}
            <div className="luxury-card elegant-shadow rounded-3xl p-10 metallic-sheen border-ornament glow-pulse relative overflow-hidden">
              <div className="shimmer-wave"></div>
              <div className="corner-deco top-left"></div>
              <div className="corner-deco top-right"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
                  <DollarSign className="w-7 h-7 text-gold-400" />
                  <span>Calculate Returns</span>
                </h3>

                {/* Investment Input */}
                <div className="mb-8">
                  <label className="text-sm text-gray-400 mb-3 block font-semibold">Your Investment (USD)</label>
                  <div className="glass-gold rounded-2xl p-6 border border-gold-800/30">
                    <input
                      type="range"
                      min="1000"
                      max="100000"
                      step="1000"
                      value={investment}
                      onChange={(e) => setInvestment(Number(e.target.value))}
                      className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-gold-400"
                    />
                    <div className="flex justify-between mt-4">
                      <span className="text-sm text-gray-500">$1K</span>
                      <div className="text-4xl font-black text-luxury">
                        ${investment.toLocaleString()}
                      </div>
                      <span className="text-sm text-gray-500">$100K</span>
                    </div>
                  </div>
                </div>

                {/* Returns Breakdown */}
                <div className="space-y-4">
                  <div className="glass-gold rounded-xl p-5 flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">GOLDS Tokens</div>
                      <div className="text-2xl font-black text-luxury">{returns.tokens.toLocaleString()}</div>
                    </div>
                    <div className="w-12 h-12 rounded-full premium-gold flex items-center justify-center">
                      <span className="text-2xl">💎</span>
                    </div>
                  </div>

                  <div className="glass-gold rounded-xl p-5 flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">+20% Bonus Tokens</div>
                      <div className="text-2xl font-black text-green-400">+${returns.bonus.toLocaleString()}</div>
                    </div>
                    <div className="px-4 py-2 bg-green-500/20 rounded-full">
                      <span className="text-sm font-bold text-green-400">FREE</span>
                    </div>
                  </div>

                  <div className="glass-gold rounded-xl p-5 flex justify-between items-center border-2 border-gold-500/50">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">1 Year Projection</div>
                      <div className="text-3xl font-black text-luxury">${returns.yearReturn.toLocaleString()}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-green-400">+250%</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                  </div>

                  <div className="glass-gold rounded-xl p-5 flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Monthly Staking (15% APY)</div>
                      <div className="text-2xl font-black text-gold-400">${returns.monthReturn.toLocaleString()}/mo</div>
                    </div>
                    <div className="px-3 py-1 bg-gold-500/20 rounded-full">
                      <span className="text-xs font-bold text-gold-400">PASSIVE</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full mt-8 py-6 btn-luxury hover:scale-[1.02] text-black text-xl rounded-2xl font-black elegant-shadow metallic-sheen glow-pulse">
                  <span className="flex items-center justify-center space-x-2">
                    <span>🚀 Invest ${investment.toLocaleString()} Now</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                <span className="text-luxury">Investment Advantages</span>
              </h3>
              
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="luxury-card elegant-shadow rounded-2xl p-6 card-3d luxury-glow metallic-sheen relative overflow-hidden group">
                    <div className="shimmer-wave"></div>
                    <div className="relative z-10 flex items-start space-x-4">
                      <div className="w-14 h-14 rounded-xl premium-gold flex items-center justify-center elegant-shadow flex-shrink-0">
                        <Icon className="w-7 h-7 text-black" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-black text-white">{benefit.title}</h4>
                          <div className="px-3 py-1 bg-gold-gradient rounded-full">
                            <span className="text-xs font-black text-black">{benefit.highlight}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Investment Incentive */}
          <div className="glass-gold rounded-2xl p-8 md:p-10 text-center backdrop-blur-xl border border-gold-500/20">
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gold-500/10 border border-gold-500/30 rounded-full mb-6">
                <span className="text-gold-400">●</span>
                <span className="text-sm text-gray-300 font-medium tracking-wide">Early Investor Advantage</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-luxury">+20% Bonus for ICO Participants</span>
              </h3>
              <p className="text-base text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                ICO participants receive additional bonus tokens. Post-ICO price increases to $0.30 per token. Early participation ensures optimal entry price and maximum allocation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-black rounded-lg font-semibold transition-all hover:shadow-2xl hover:shadow-gold-500/50">
                  Participate in ICO
                </button>
                <button className="px-10 py-4 glass-gold hover:bg-gold-500/10 text-gray-300 hover:text-white rounded-lg font-semibold transition-all border border-gold-500/20 hover:border-gold-500/40">
                  Read Token Economics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
