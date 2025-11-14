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
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        
        {/* Floating Blockchain Nodes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.3
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto relative z-10 max-w-7xl">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 rounded-full mb-6 border border-blue-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-blue-400 font-medium tracking-widest uppercase">Blockchain Staking</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              Stake GOLDS Tokens
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Secure the network and earn rewards through our decentralized staking protocol
            </p>
          </div>

          {/* User Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <Coins className="w-5 h-5 text-blue-400" />
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-2xl font-bold text-white mb-1">{userStats.totalStaked}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Total Staked</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-2xl font-bold text-white mb-1">{userStats.activeRewards}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Active Rewards</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <Award className="w-5 h-5 text-purple-400" />
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-2xl font-bold text-white mb-1">{userStats.totalEarned}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Total Earned</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-2xl font-bold text-white mb-1">{userStats.availableBalance}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Available Balance</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Staking Pools */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Staking Pools</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>4 Active Pools</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {stakingPools.map((pool) => (
                  <div
                    key={pool.id}
                    onClick={() => setSelectedPool(pool.id)}
                    className={`group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                      selectedPool === pool.id 
                        ? 'border-blue-500/60 shadow-lg shadow-blue-500/20' 
                        : 'border-gray-700/50 hover:border-gray-600/50'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br rounded-2xl transition-all duration-300 ${
                      selectedPool === pool.id ? 'from-blue-500/10 to-transparent' : 'from-transparent to-transparent group-hover:from-gray-700/10'
                    }`}></div>
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl filter drop-shadow-lg">{pool.icon}</div>
                        <div className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${pool.color} text-white font-bold text-xs shadow-lg`}>
                          {pool.apy} APY
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">{pool.name}</h3>
                      <p className="text-xs text-gray-400 mb-4 leading-relaxed">{pool.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2 text-xs bg-gray-800/50 rounded-lg px-3 py-2">
                          <Clock className="w-3.5 h-3.5 text-blue-400" />
                          <span className="text-gray-300">{pool.lockPeriod}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs bg-gray-800/50 rounded-lg px-3 py-2">
                          <Lock className="w-3.5 h-3.5 text-blue-400" />
                          <span className="text-gray-300">Min {pool.minStake}</span>
                        </div>
                      </div>

                      {selectedPool === pool.id && (
                        <div className="mt-4 pt-3 border-t border-blue-500/20">
                          <div className="flex items-center space-x-2 text-xs text-blue-400">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
                            <span className="font-semibold">Selected Pool</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stake Form */}
            <div className="lg:col-span-1">
              <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 sticky top-24">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl"></div>
                <div className="relative">
                <div className="flex space-x-2 mb-6">
                  <button
                    onClick={() => setActiveTab('stake')}
                    className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                      activeTab === 'stake'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300'
                    }`}
                  >
                    Stake
                  </button>
                  <button
                    onClick={() => setActiveTab('unstake')}
                    className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                      activeTab === 'unstake'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300'
                    }`}
                  >
                    Unstake
                  </button>
                </div>

                <div className="mb-6">
                  <label className="block text-xs text-gray-400 mb-3 font-medium uppercase tracking-wider">Amount</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-4 py-4 bg-gray-900/70 border border-gray-700 rounded-xl text-white text-lg font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors">
                      MAX
                    </button>
                  </div>
                  <div className="flex justify-between mt-3 text-xs">
                    <span className="text-gray-400">Balance: <span className="text-white font-semibold">{userStats.availableBalance}</span></span>
                    <span className="text-gray-500">≈ ${(parseFloat(stakeAmount || '0') * 0.25).toFixed(2)}</span>
                  </div>
                </div>

                {/* Quick Amount Buttons */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {[25, 50, 75, 100].map((percent) => (
                    <button
                      key={percent}
                      onClick={() => setStakeAmount((parseFloat(userStats.availableBalance.replace(',', '')) * percent / 100).toString())}
                      className="py-2.5 bg-gray-800/50 hover:bg-blue-600/20 border border-gray-700 hover:border-blue-500/50 rounded-lg text-xs font-semibold transition-all hover:text-blue-300"
                    >
                      {percent}%
                    </button>
                  ))}
                </div>

                {/* Rewards Estimation */}
                <div className="mb-6 p-5 bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/20 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Est. Daily Rewards</p>
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-2xl font-bold text-white mb-1">
                    {(parseFloat(stakeAmount || '0') * 0.12 / 365).toFixed(4)}
                  </p>
                  <p className="text-xs text-gray-500">
                    ≈ ${((parseFloat(stakeAmount || '0') * 0.12 / 365) * 0.25).toFixed(2)} USD/day
                  </p>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-bold transition-all hover:shadow-xl hover:shadow-blue-500/30 flex items-center justify-center space-x-2 group">
                  <span>{activeTab === 'stake' ? 'Stake Tokens' : 'Unstake Tokens'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 mt-4">
                  <Lock className="w-3 h-3" />
                  <span>Secured by smart contract</span>
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Stakes Section */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Active Stakes</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>2 Active Positions</span>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left py-4 px-4 text-xs text-gray-400 font-semibold uppercase tracking-wider">Pool</th>
                      <th className="text-left py-4 px-4 text-xs text-gray-400 font-semibold uppercase tracking-wider">Staked</th>
                      <th className="text-left py-4 px-4 text-xs text-gray-400 font-semibold uppercase tracking-wider">APY</th>
                      <th className="text-left py-4 px-4 text-xs text-gray-400 font-semibold uppercase tracking-wider">Rewards</th>
                      <th className="text-left py-4 px-4 text-xs text-gray-400 font-semibold uppercase tracking-wider">Unlock</th>
                      <th className="text-right py-4 px-4 text-xs text-gray-400 font-semibold uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800/30 hover:bg-blue-500/5 transition-colors group">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600/20 to-green-800/20 flex items-center justify-center">
                            <span className="text-xl">⚡</span>
                          </div>
                          <span className="font-semibold text-sm text-white group-hover:text-blue-100 transition-colors">Flexible</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-bold text-white text-sm">10,000 GOLDS</td>
                      <td className="py-4 px-4 text-green-400 font-semibold text-sm">12%</td>
                      <td className="py-4 px-4 text-blue-400 font-bold text-sm">+384.50</td>
                      <td className="py-4 px-4 text-gray-400 text-sm">Anytime</td>
                      <td className="py-4 px-4 text-right">
                        <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg text-xs font-semibold transition-all shadow-lg shadow-green-500/20">
                          Claim
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800/30 hover:bg-blue-500/5 transition-colors group">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600/20 to-amber-800/20 flex items-center justify-center">
                            <span className="text-xl">⛏️</span>
                          </div>
                          <span className="font-semibold text-sm text-white group-hover:text-blue-100 transition-colors">30-Day</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-bold text-white text-sm">15,000 GOLDS</td>
                      <td className="py-4 px-4 text-green-400 font-semibold text-sm">25%</td>
                      <td className="py-4 px-4 text-blue-400 font-bold text-sm">+900.00</td>
                      <td className="py-4 px-4 text-gray-400 text-sm">Dec 14, 2025</td>
                      <td className="py-4 px-4 text-right">
                        <button className="px-4 py-2 bg-gray-800 text-gray-500 rounded-lg text-xs font-semibold cursor-not-allowed border border-gray-700">
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
