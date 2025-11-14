'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Lock, TrendingUp, Clock, Coins, Zap, ArrowRight, Award } from 'lucide-react'

export default function StakingPage() {
  const [selectedPool, setSelectedPool] = useState('flexible')
  const [stakeAmount, setStakeAmount] = useState('')
  const [activeTab, setActiveTab] = useState('stake')

  const stakingPools = [
    {
      id: 'flexible',
      name: 'Flexible Mining',
      apy: '12%',
      lockPeriod: 'No Lock',
      icon: '⚡',
      minStake: 100,
      description: 'Stake and withdraw anytime with competitive returns',
      color: 'from-green-600 to-green-800'
    },
    {
      id: '30days',
      name: '30-Day Excavation',
      apy: '25%',
      lockPeriod: '30 Days',
      icon: '⛏️',
      minStake: 500,
      description: 'Medium-term mining with enhanced rewards',
      color: 'from-amber-600 to-amber-800'
    },
    {
      id: '90days',
      name: '90-Day Deep Mine',
      apy: '45%',
      lockPeriod: '90 Days',
      icon: '🏔️',
      minStake: 1000,
      description: 'Long-term mining for maximum yield extraction',
      color: 'from-orange-600 to-orange-800'
    },
    {
      id: '180days',
      name: '180-Day Reserve Vault',
      apy: '75%',
      lockPeriod: '180 Days',
      icon: '🏦',
      minStake: 5000,
      description: 'Premium vault mining with highest returns',
      color: 'from-yellow-600 to-yellow-900'
    }
  ]

  const userStats = {
    totalStaked: '25,000',
    activeRewards: '1,284.50',
    totalEarned: '8,942.75',
    availableBalance: '10,000'
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-24 pb-20 px-4 relative overflow-hidden">
        {/* Mining Background */}
        <div className="mining-background"></div>
        <div className="excavation-lines" style={{opacity: '0.15'}}></div>
        
        {/* Blockchain Network */}
        <div className="blockchain-network" style={{opacity: '0.6'}}>
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className="blockchain-node"
              style={{
                top: `${25 + i * 20}%`,
                left: `${15 + (i % 2) * 60}%`,
                animationDelay: `${i * 0.8}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto relative z-10 max-w-7xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 px-6 py-3 glass-gold rounded-full mb-6 backdrop-blur-xl border border-gold-500/20">
              <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">Staking Protocol</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="text-luxury">Stake & Earn GOLDS</span>
            </h1>
            <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Lock your tokens in mining pools to earn competitive yields
            </p>
          </div>

          {/* User Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="chain-link p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-medium">Total Staked</p>
                  <p className="text-xl font-bold text-luxury">{userStats.totalStaked}</p>
                  <p className="text-xs text-gray-600 mt-1">GOLDS</p>
                </div>
                <Coins className="w-8 h-8 text-amber-600" />
              </div>
            </div>

            <div className="chain-link p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-medium">Active Rewards</p>
                  <p className="text-xl font-bold text-green-400">{userStats.activeRewards}</p>
                  <p className="text-xs text-gray-600 mt-1">GOLDS</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </div>

            <div className="chain-link p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-medium">Total Earned</p>
                  <p className="text-xl font-bold text-purple-400">{userStats.totalEarned}</p>
                  <p className="text-xs text-gray-600 mt-1">GOLDS</p>
                </div>
                <Award className="w-8 h-8 text-purple-600" />
              </div>
            </div>

            <div className="chain-link p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-medium">Available</p>
                  <p className="text-xl font-bold text-blue-400">{userStats.availableBalance}</p>
                  <p className="text-xs text-gray-600 mt-1">GOLDS</p>
                </div>
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Staking Pools */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-white mb-5 flex items-center">
                <span className="mr-2 text-2xl">⛏️</span>
                Staking Pools
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {stakingPools.map((pool) => (
                  <div
                    key={pool.id}
                    onClick={() => setSelectedPool(pool.id)}
                    className={`chain-link p-5 cursor-pointer transition-all hover:scale-[1.02] ${
                      selectedPool === pool.id ? 'ring-2 ring-amber-500 bg-amber-900/10' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-3xl">{pool.icon}</div>
                      <div className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${pool.color} text-white font-bold text-xs`}>
                        {pool.apy} APY
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">{pool.name}</h3>
                    <p className="text-xs text-gray-400 mb-3 leading-relaxed">{pool.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <span className="text-gray-400">{pool.lockPeriod}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Lock className="w-3.5 h-3.5 text-amber-500" />
                        <span className="text-gray-400">Min {pool.minStake}</span>
                      </div>
                    </div>

                    {selectedPool === pool.id && (
                      <div className="mt-3 pt-3 border-t border-amber-500/20">
                        <div className="flex items-center space-x-2 text-xs text-green-400">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                          <span className="font-semibold">Selected</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Stake Form */}
            <div className="lg:col-span-1">
              <div className="chain-link p-6 sticky top-24">
                <div className="flex space-x-2 mb-5">
                  <button
                    onClick={() => setActiveTab('stake')}
                    className={`flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                      activeTab === 'stake'
                        ? 'bg-gradient-to-r from-amber-600 to-amber-800 text-white'
                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                    }`}
                  >
                    Stake
                  </button>
                  <button
                    onClick={() => setActiveTab('unstake')}
                    className={`flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                      activeTab === 'unstake'
                        ? 'bg-gradient-to-r from-amber-600 to-amber-800 text-white'
                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                    }`}
                  >
                    Unstake
                  </button>
                </div>

                <div className="mb-5">
                  <label className="block text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide">Amount</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-amber-500/30 rounded-lg text-white text-base font-semibold focus:outline-none focus:border-amber-500 transition-colors"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-500 text-xs font-bold hover:text-amber-400 transition-colors">
                      MAX
                    </button>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Balance: {userStats.availableBalance}</span>
                    <span className="text-gray-600">≈ ${(parseFloat(stakeAmount || '0') * 0.25).toFixed(2)}</span>
                  </div>
                </div>

                {/* Quick Amount Buttons */}
                <div className="grid grid-cols-4 gap-2 mb-5">
                  {[25, 50, 75, 100].map((percent) => (
                    <button
                      key={percent}
                      onClick={() => setStakeAmount((parseFloat(userStats.availableBalance.replace(',', '')) * percent / 100).toString())}
                      className="py-2 bg-gray-800/50 hover:bg-amber-600/20 border border-gray-700 hover:border-amber-500/50 rounded text-xs font-semibold transition-all"
                    >
                      {percent}%
                    </button>
                  ))}
                </div>

                {/* Rewards Estimation */}
                <div className="mb-5 p-4 bg-gradient-to-r from-amber-900/20 to-amber-800/20 border border-amber-500/20 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Est. Daily Rewards</p>
                  <p className="text-xl font-bold text-amber-400">
                    {(parseFloat(stakeAmount || '0') * 0.12 / 365).toFixed(4)} GOLDS
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    ≈ ${((parseFloat(stakeAmount || '0') * 0.12 / 365) * 0.25).toFixed(2)}/day
                  </p>
                </div>

                <button className="w-full py-3.5 bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white rounded-lg font-bold text-sm transition-all hover:shadow-xl hover:shadow-amber-500/30 border border-amber-500/50 flex items-center justify-center space-x-2">
                  <span>{activeTab === 'stake' ? '⛏️ Start Staking' : '📤 Unstake'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-xs text-gray-600 text-center mt-3">
                  🔒 Secured by smart contract
                </p>
              </div>
            </div>
          </div>

          {/* Active Stakes Section */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-white mb-5 flex items-center">
              <span className="mr-2 text-2xl">📊</span>
              Active Stakes
            </h2>
            
            <div className="chain-link p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-amber-500/20">
                      <th className="text-left py-3 px-3 text-xs text-gray-500 font-semibold uppercase tracking-wide">Pool</th>
                      <th className="text-left py-3 px-3 text-xs text-gray-500 font-semibold uppercase tracking-wide">Staked</th>
                      <th className="text-left py-3 px-3 text-xs text-gray-500 font-semibold uppercase tracking-wide">APY</th>
                      <th className="text-left py-3 px-3 text-xs text-gray-500 font-semibold uppercase tracking-wide">Rewards</th>
                      <th className="text-left py-3 px-3 text-xs text-gray-500 font-semibold uppercase tracking-wide">Unlock</th>
                      <th className="text-right py-3 px-3 text-xs text-gray-500 font-semibold uppercase tracking-wide">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800/50 hover:bg-amber-900/5 transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">⚡</span>
                          <span className="font-semibold text-sm">Flexible</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 font-bold text-white text-sm">10,000</td>
                      <td className="py-3 px-3 text-green-400 font-semibold text-sm">12%</td>
                      <td className="py-3 px-3 text-amber-400 font-bold text-sm">384.50</td>
                      <td className="py-3 px-3 text-gray-400 text-sm">Anytime</td>
                      <td className="py-3 px-3 text-right">
                        <button className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-xs font-semibold transition-all">
                          Claim
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800/50 hover:bg-amber-900/5 transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">⛏️</span>
                          <span className="font-semibold text-sm">30-Day</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 font-bold text-white text-sm">15,000</td>
                      <td className="py-3 px-3 text-green-400 font-semibold text-sm">25%</td>
                      <td className="py-3 px-3 text-amber-400 font-bold text-sm">900.00</td>
                      <td className="py-3 px-3 text-gray-400 text-sm">Dec 14, 2025</td>
                      <td className="py-3 px-3 text-right">
                        <button className="px-3 py-1.5 bg-gray-700 text-gray-400 rounded text-xs font-semibold cursor-not-allowed">
                          Locked
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
