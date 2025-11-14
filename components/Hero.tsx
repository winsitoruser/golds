'use client'

import { Sparkles, TrendingUp, Shield, Zap, Rocket, Coins, ArrowRight } from 'lucide-react'
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
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Mining Industry Background */}
      <div className="mining-background"></div>
      <div className="excavation-lines"></div>
      <div className="tunnel-gradient"></div>
      <div className="deposit-layers" style={{opacity: '0.15'}}></div>
      
      {/* Digital Mining Grid */}
      <div className="digital-mining-grid"></div>
      
      {/* Blockchain Network Layer */}
      <div className="blockchain-network">
        {/* Blockchain Nodes */}
        {[
          {top: '15%', left: '10%', delay: '0s'},
          {top: '25%', right: '15%', delay: '0.5s'},
          {top: '45%', left: '20%', delay: '1s'},
          {top: '65%', right: '25%', delay: '1.5s'},
          {bottom: '20%', left: '30%', delay: '2s'},
          {bottom: '30%', right: '10%', delay: '2.5s'},
          {top: '35%', left: '50%', delay: '3s'},
          {top: '55%', right: '45%', delay: '3.5s'},
        ].map((pos, i) => (
          <div 
            key={`node-${i}`}
            className="blockchain-node"
            style={{...pos, animationDelay: pos.delay}}
          ></div>
        ))}
        
        {/* Connection Lines */}
        {[
          {top: '15%', left: '10%', width: '15%', angle: '35deg'},
          {top: '25%', left: '25%', width: '25%', angle: '-15deg'},
          {top: '45%', left: '20%', width: '30%', angle: '10deg'},
          {top: '65%', left: '35%', width: '20%', angle: '-25deg'},
        ].map((line, i) => (
          <div
            key={`line-${i}`}
            className="blockchain-line"
            style={{
              top: line.top,
              left: line.left,
              width: line.width,
              transform: `rotate(${line.angle})`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Gold Extraction Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`extract-${i}`}
          className="extraction-particle"
          style={{
            left: `${10 + i * 7}%`,
            animationDelay: `${i * 0.8}s`,
            '--drift': `${(Math.random() - 0.5) * 40}px`
          } as React.CSSProperties}
        ></div>
      ))}
      
      {/* Conveyor Belt */}
      <div className="conveyor-belt"></div>
      
      {/* Digital Veins */}
      <div className="digital-vein" style={{top: '20%', left: '5%', width: '30%', transform: 'rotate(15deg)'}}></div>
      <div className="digital-vein" style={{bottom: '30%', right: '10%', width: '25%', transform: 'rotate(-20deg)'}}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Professional Status Badge */}
          <div className="inline-flex items-center space-x-3 px-8 py-4 glass-gold rounded-full mb-8 backdrop-blur-xl border border-gold-500/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300 font-medium tracking-wide">ICO Live</span>
            <div className="w-px h-4 bg-gold-500/30"></div>
            <span className="text-sm text-gold-400 font-semibold">10,428 Investors</span>
            <div className="w-px h-4 bg-gold-500/30"></div>
            <span className="text-sm text-gray-300 font-medium">25% Completed</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block text-amber-600 text-2xl md:text-3xl font-semibold mb-3 tracking-wider uppercase">⛏️ Mining the Future</span>
            <span className="text-luxury font-black">Digital Gold</span>
            <span className="block text-amber-500 text-3xl md:text-4xl font-bold mt-2">On Blockchain</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-300 mb-12 max-w-3xl mx-auto font-normal leading-relaxed">
            <span className="text-amber-400 font-semibold">Revolutionary gold mining</span> meets blockchain technology. 
            <br className="hidden md:block" />
            Every token represents <span className="text-gold-400 font-semibold">real gold reserves</span> extracted from our certified mining operations.
            <br className="hidden md:block" />
            <span className="text-sm text-gray-500 mt-2 block">Secured by $50M in physical assets | Fully audited operations</span>
          </p>

          {/* Animated Countdown */}
          <div className="mb-16">
            <div className="text-sm text-gray-400 font-medium mb-6 tracking-widest uppercase">Sale Ends In</div>
            <div className="flex justify-center gap-3 md:gap-6 mb-8">
              {[
                { value: countdown.days, label: 'DAYS' },
                { value: countdown.hours, label: 'HOURS' },
                { value: countdown.minutes, label: 'MINS' },
                { value: countdown.seconds, label: 'SECS' },
              ].map((item, index) => (
                <div key={index} className="blockchain-block ore-texture min-w-[70px] md:min-w-[100px] industrial-glow">
                  <div className="relative z-10">
                    <div className="text-4xl md:text-6xl font-black text-luxury mb-1">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-amber-600 font-bold tracking-widest uppercase">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ICO Stats - Premium Layout */}
          <div className="max-w-6xl mx-auto mb-16 relative">
            {/* Main Featured Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Raised - Primary Card */}
              <div className="blockchain-block ore-texture p-10 transition-all relative overflow-hidden group">
                <div className="equipment-indicator absolute top-4 right-4" style={{width: '50px', height: '50px'}}></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-lg border-2 border-amber-500/30">
                      <span className="text-2xl">⛏️</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-amber-500 font-bold mb-1 tracking-widest uppercase">Gold Extracted</div>
                      <div className="text-xs text-gray-500">/ $10M Target</div>
                    </div>
                  </div>
                  <div className="text-6xl md:text-7xl font-black text-luxury mb-2 leading-none">$2.5M</div>
                  <div className="flex items-center space-x-2 text-sm text-green-400">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="font-semibold">Mining Rate: +15.2%</span>
                  </div>
                </div>
              </div>

              {/* Hard Cap - Primary Card */}
              <div className="blockchain-block ore-texture p-10 transition-all relative overflow-hidden group">
                <div className="equipment-indicator absolute top-4 left-4" style={{width: '50px', height: '50px', animationDelay: '2s'}}></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-left">
                      <div className="text-sm text-amber-500 font-bold mb-1 tracking-widest uppercase">Reserve Capacity</div>
                      <div className="text-xs text-gray-500">Maximum Supply</div>
                    </div>
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center shadow-lg border-2 border-amber-600/30">
                      <span className="text-2xl">🏭</span>
                    </div>
                  </div>
                  <div className="text-6xl md:text-7xl font-black text-luxury mb-2 leading-none">$10M</div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span className="font-semibold">Operations: 25% Utilized</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Token Price */}
              <div className="chain-link p-6 hover:scale-[1.02] transition-transform">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg">
                      <span className="text-3xl">🔗</span>
                    </div>
                    <div>
                      <div className="text-xs text-amber-600 mb-1 tracking-wider uppercase font-bold">Blockchain Rate</div>
                      <div className="text-4xl md:text-5xl font-black text-luxury leading-none">$0.25</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">Next Block</div>
                    <div className="text-xl font-bold text-amber-400">$0.30</div>
                  </div>
                </div>
              </div>

              {/* Sold Percentage */}
              <div className="chain-link p-6 hover:scale-[1.02] transition-transform">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow-lg relative">
                      <span className="text-3xl">⚡</span>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-xs font-bold text-black">
                        ✓
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-green-600 mb-1 tracking-wider uppercase font-bold">Gold Tokens Mined</div>
                      <div className="text-4xl md:text-5xl font-black text-luxury leading-none">10M</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">Remaining</div>
                    <div className="text-xl font-bold text-gray-400">75%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elegant Separator Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent hidden md:block" style={{transform: 'translateX(-50%)'}}></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="group px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white rounded-lg font-bold transition-all hover:shadow-2xl hover:shadow-amber-500/50 border-2 border-amber-500/50">
              <span className="flex items-center justify-center space-x-2">
                <span className="text-base tracking-wide">⛏️ Start Mining Tokens</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-10 py-4 blockchain-block hover:scale-105 text-gray-300 hover:text-white rounded-lg font-semibold transition-all">
              <span className="text-base tracking-wide">🔗 View Blockchain</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="glass px-6 py-3 rounded-full flex items-center space-x-2 hover:neon-gold transition-all">
              <Shield className="w-5 h-5 text-gold-400" />
              <span className="text-sm text-gray-300 font-semibold">✓ Audited by CertiK</span>
            </div>
            <div className="glass px-6 py-3 rounded-full flex items-center space-x-2 hover:neon-gold transition-all">
              <Zap className="w-5 h-5 text-gold-400" />
              <span className="text-sm text-gray-300 font-semibold">✓ KYC Verified</span>
            </div>
            <div className="glass px-6 py-3 rounded-full flex items-center space-x-2 hover:neon-gold transition-all">
              <TrendingUp className="w-5 h-5 text-gold-400" />
              <span className="text-sm text-gray-300 font-semibold">✓ DEX Listed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
