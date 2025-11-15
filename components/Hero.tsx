'use client'

import { Sparkles, TrendingUp, Shield, Zap, Rocket, Coins, ArrowRight, Trophy } from 'lucide-react'
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
    <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex items-center">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(251, 191, 36, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.03) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-amber-500 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              opacity: 0.2 + Math.random() * 0.3
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-amber-500/10 rounded-full mb-8 border border-amber-500/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-amber-400 font-semibold tracking-wider uppercase">ICO Live Now</span>
            <div className="w-px h-4 bg-amber-500/30"></div>
            <Rocket className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-gray-300 font-medium">10,428 Investors Joined</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-white">
              Invest in Digital Gold
            </span>
            <span className="block text-4xl md:text-5xl text-amber-500 font-bold mt-4">
              Backed by Real Assets
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the future of gold investment. Every GOLDS token is backed by
            <span className="text-amber-400 font-semibold"> real gold reserves</span> from certified mining operations.
          </p>
          
          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <div className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Audited by CertiK</span>
            </div>
            <div className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 flex items-center space-x-2">
              <Coins className="w-4 h-4 text-amber-400" />
              <span>$50M Real Assets</span>
            </div>
            <div className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span>75% APY Staking</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-16">
            <p className="text-sm text-gray-400 font-medium mb-6 tracking-wider uppercase flex items-center justify-center space-x-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>ICO Ends In</span>
            </p>
            <div className="flex justify-center gap-4 md:gap-6">
              {[
                { value: countdown.days, label: 'Days' },
                { value: countdown.hours, label: 'Hours' },
                { value: countdown.minutes, label: 'Minutes' },
                { value: countdown.seconds, label: 'Seconds' }
              ].map((item, index) => (
                <div key={index} className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-gray-700/50 min-w-[80px] md:min-w-[100px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl"></div>
                  <div className="relative">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ICO Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-amber-500/50 transition-all group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-transparent rounded-2xl transition-all"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <TrendingUp className="w-6 h-6 text-amber-400" />
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-3xl font-bold text-white mb-1">$2.5M</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Raised</p>
                <div className="mt-2 text-xs text-green-400 font-semibold">+15.2%</div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-transparent rounded-2xl transition-all"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <Shield className="w-6 h-6 text-green-400" />
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-3xl font-bold text-white mb-1">$10M</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Hard Cap</p>
                <div className="mt-2 text-xs text-gray-500">25% Complete</div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent rounded-2xl transition-all"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <Coins className="w-6 h-6 text-blue-400" />
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-3xl font-bold text-white mb-1">$0.25</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Token Price</p>
                <div className="mt-2 text-xs text-amber-400 font-semibold">Next: $0.30</div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent rounded-2xl transition-all"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-3xl font-bold text-white mb-1">10M</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Tokens Sold</p>
                <div className="mt-2 text-xs text-gray-500">30M remaining</div>
              </div>
            </div>
          </div>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/whitelist" className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl font-bold transition-all hover:shadow-xl hover:shadow-purple-500/30 flex items-center justify-center space-x-2">
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <Trophy className="w-5 h-5" />
              <span>Join Whitelist</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#sale" className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-xl font-bold transition-all hover:shadow-xl hover:shadow-amber-500/30 flex items-center justify-center space-x-2">
              <Coins className="w-5 h-5" />
              <span>Buy GOLDS Tokens</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/staking" className="px-8 py-4 bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 hover:border-amber-500/50 text-white rounded-xl font-semibold transition-all flex items-center justify-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Start Staking</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
