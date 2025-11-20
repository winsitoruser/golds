'use client'

import { Sparkles, TrendingUp, Shield, Zap, Rocket, Coins, ArrowRight, Trophy, Mountain, Gem, Award } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [countdown, setCountdown] = useState({ days: 45, hours: 12, minutes: 34, seconds: 56 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-32 pb-24 px-6 min-h-screen flex items-center">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Linea-style Badge */}
          <div className="inline-flex items-center space-x-2 mb-8 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">🔥 ICO LIVE • +20% BONUS ENDING SOON</span>
          </div>

          {/* Linea-style Massive Heading */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent uppercase">
                BASE L2
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent uppercase">
                DIGITAL GOLD
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
              A <span className="text-amber-400 font-medium">gold-backed token on Base L2</span>. Real gold reserves. Real value. No BS.
            </p>
          </div>

          {/* Linea-style CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all font-semibold text-base flex items-center space-x-2 uppercase tracking-wide">
              <span>BUY NOW & GET +20% FREE</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-all font-semibold text-base uppercase tracking-wide">
              Learn More
            </button>
          </div>
          
          
          {/* Minimal Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-3">$50M+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Gold Reserves</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-3">10,428+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Investors</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-3">75%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">APY Staking</div>
            </div>
          </div>


          {/* Linea-style Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="group bg-blue-500/5 border border-blue-500/10 hover:border-blue-500/30 rounded-2xl p-8 transition-all">
              <div className="mb-4">
                <Coins className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">100% Gold-Backed</h3>
              <p className="text-gray-400 leading-relaxed">Not another shitcoin. Real gold = Real value. 1 token = 1g of actual gold</p>
            </div>

            {/* Card 2 */}
            <div className="group bg-blue-500/5 border border-blue-500/10 hover:border-blue-500/30 rounded-2xl p-8 transition-all">
              <div className="mb-4">
                <TrendingUp className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Insane Yields</h3>
              <p className="text-gray-400 leading-relaxed">Stack sats with 75% APY. Your bags will thank you later 🚀</p>
            </div>

            {/* Card 3 */}
            <div className="group bg-blue-500/5 border border-blue-500/10 hover:border-blue-500/30 rounded-2xl p-8 transition-all">
              <div className="mb-4">
                <Shield className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">CertiK Audited</h3>
              <p className="text-gray-400 leading-relaxed">No rugs here. Smart contracts verified by CertiK. SAFU guaranteed ✅</p>
            </div>

            {/* Card 4 */}
            <div className="group bg-blue-500/5 border border-blue-500/10 hover:border-blue-500/30 rounded-2xl p-8 transition-all">
              <div className="mb-4">
                <Rocket className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Base Chain</h3>
              <p className="text-gray-400 leading-relaxed">Lightning fast, ultra low fees. Built on Coinbase's Base L2 🔵</p>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
