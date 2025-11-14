'use client'

import { PieChart } from 'lucide-react'

export default function Tokenomics() {
  const distribution = [
    { label: 'Public Sale', percentage: 40, color: 'bg-gold-400' },
    { label: 'Team & Advisors', percentage: 15, color: 'bg-gold-500' },
    { label: 'Liquidity', percentage: 20, color: 'bg-gold-600' },
    { label: 'Marketing', percentage: 10, color: 'bg-gold-700' },
    { label: 'Reserve', percentage: 10, color: 'bg-gold-800' },
    { label: 'Ecosystem', percentage: 5, color: 'bg-gold-900' },
  ]

  const details = [
    { label: 'Total Supply', value: '100,000,000 GOLDS' },
    { label: 'Initial Price', value: '$0.25 per GOLDS' },
    { label: 'Token Standard', value: 'ERC-20' },
    { label: 'Network', value: 'Ethereum' },
  ]

  return (
    <section id="tokenomics" className="py-20 px-4 bg-gradient-to-b from-transparent via-gold-950/5 to-transparent">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-luxury">Tokenomics</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light" style={{lineHeight: '1.8'}}>
            Carefully designed <span className="text-gold-400 font-semibold">economic model</span> for sustainable growth and value
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Token Distribution */}
            <div className="glass-gold border border-gold-800/30 rounded-3xl p-8 card-3d hover:neon-gold transition-all relative overflow-hidden group">
              <div className="scan-line"></div>
              <div className="holographic absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center neon-gold">
                  <PieChart className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:neon-text transition-all">Token Distribution</h3>
              </div>

              <div className="space-y-4">
                {distribution.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{item.label}</span>
                      <span className="text-gold-400 font-semibold">{item.percentage}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-900 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} transition-all duration-1000`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>

            {/* Token Details */}
            <div>
              <div className="glass-gold border border-gold-800/30 rounded-3xl p-8 mb-8 card-3d hover:neon-gold transition-all">
                <h3 className="text-2xl font-bold text-white mb-6">Token Details</h3>
                <div className="space-y-4">
                  {details.map((detail, index) => (
                    <div key={index} className="flex justify-between py-3 border-b border-gold-900/30">
                      <span className="text-gray-400">{detail.label}</span>
                      <span className="text-white font-semibold">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vesting Schedule */}
              <div className="glass-gold border border-gold-800/30 rounded-3xl p-8 card-3d hover:neon-gold transition-all">
                <h3 className="text-2xl font-bold text-white mb-6">Vesting Schedule</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Public Sale</div>
                      <div className="text-sm text-gray-400">Unlocked at TGE</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Team & Advisors</div>
                      <div className="text-sm text-gray-400">12 months cliff, 24 months vesting</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-white">Ecosystem & Marketing</div>
                      <div className="text-sm text-gray-400">Linear release over 36 months</div>
                    </div>
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
