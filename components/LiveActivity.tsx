'use client'

import { TrendingUp, Users, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function LiveActivity() {
  const [activities, setActivities] = useState([
    { address: '0x7f...a3c9', amount: '$12,500', time: 'Just now', country: '🇺🇸' },
    { address: '0x9e...b2f1', amount: '$8,750', time: '2 min ago', country: '🇬🇧' },
    { address: '0x4c...d8a7', amount: '$25,000', time: '4 min ago', country: '🇦🇪' },
    { address: '0x1a...e5b3', amount: '$5,200', time: '6 min ago', country: '🇸🇬' },
    { address: '0x8f...c4d2', amount: '$18,900', time: '8 min ago', country: '🇨🇭' },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = {
        address: `0x${Math.random().toString(16).slice(2, 4)}...${Math.random().toString(16).slice(2, 6)}`,
        amount: `$${(Math.random() * 20000 + 5000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
        time: 'Just now',
        country: ['🇺🇸', '🇬🇧', '🇦🇪', '🇸🇬', '🇨🇭', '🇯🇵', '🇩🇪', '🇫🇷'][Math.floor(Math.random() * 8)]
      }
      setActivities(prev => [newActivity, ...prev.slice(0, 4)])
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0" style={{opacity: '0.3'}}>
        <div className="bokeh" style={{width: '150px', height: '150px', bottom: '30%', right: '20%', opacity: '0.4'}}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-8 py-4 glass-gold rounded-full mb-6 backdrop-blur-xl border border-gold-500/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300 font-medium tracking-wide">Live Activity</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-luxury">Join 10,000+ Investors</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Global investors are securing their positions in the world's most transparent gold-backed cryptocurrency
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Live Feed */}
            <div className="lg:col-span-2">
              <div className="luxury-card elegant-shadow rounded-3xl p-8 metallic-sheen border-ornament relative overflow-hidden">
                <div className="shimmer-wave"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-gold-400" />
                      <span>Recent Transactions</span>
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="text-xs text-gray-400 font-medium tracking-wider">LIVE</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {activities.map((activity, index) => (
                      <div 
                        key={index}
                        className="glass-gold rounded-xl p-4 flex items-center justify-between hover:neon-gold transition-all group animate-fade-in"
                        style={{animationDelay: `${index * 100}ms`}}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center font-mono text-sm font-bold text-black">
                            {activity.country}
                          </div>
                          <div>
                            <div className="font-mono text-sm text-gray-400">{activity.address}</div>
                            <div className="text-xs text-gray-500">{activity.time}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-black text-luxury">{activity.amount}</div>
                          <div className="text-xs text-green-400 font-semibold">✓ Confirmed</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              {/* Total Investors */}
              <div className="luxury-card elegant-shadow rounded-2xl p-6 metallic-sheen glow-pulse relative overflow-hidden">
                <div className="shimmer-wave"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Users className="w-8 h-8 text-gold-400" />
                    <div className="text-xs text-gray-500 tracking-wider">TOTAL</div>
                  </div>
                  <div className="text-4xl font-black text-luxury mb-1">10,428</div>
                  <div className="text-sm text-gray-400">Active Investors</div>
                  <div className="mt-3 flex items-center space-x-2 text-sm text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-semibold">+2,847 this week</span>
                  </div>
                </div>
              </div>

              {/* Average Investment */}
              <div className="luxury-card elegant-shadow rounded-2xl p-6 metallic-sheen glow-pulse relative overflow-hidden">
                <div className="shimmer-wave"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">💰</span>
                    <div className="text-xs text-gray-500 tracking-wider">AVERAGE</div>
                  </div>
                  <div className="text-4xl font-black text-luxury mb-1">$8,750</div>
                  <div className="text-sm text-gray-400">Per Investment</div>
                  <div className="mt-3 text-xs text-gray-500">
                    Range: $100 - $500K+
                  </div>
                </div>
              </div>

              {/* Success Rate */}
              <div className="luxury-card elegant-shadow rounded-2xl p-6 metallic-sheen glow-pulse relative overflow-hidden">
                <div className="shimmer-wave"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">🎯</span>
                    <div className="text-xs text-gray-500 tracking-wider">SUCCESS</div>
                  </div>
                  <div className="text-4xl font-black text-luxury mb-1">99.8%</div>
                  <div className="text-sm text-gray-400">Transaction Rate</div>
                  <div className="mt-3 text-xs text-green-400 font-semibold">
                    ✓ Zero Failed Transactions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
