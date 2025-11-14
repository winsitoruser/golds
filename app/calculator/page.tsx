'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calculator, TrendingUp, DollarSign, Clock, Zap, Award } from 'lucide-react'

export default function CalculatorPage() {
  const [amount, setAmount] = useState('10000')
  const [duration, setDuration] = useState('365')
  const [selectedPool, setSelectedPool] = useState('flexible')

  const pools = {
    flexible: { apy: 12, name: 'Flexible Mining', minDays: 0 },
    thirtyDays: { apy: 25, name: '30-Day Excavation', minDays: 30 },
    ninetyDays: { apy: 45, name: '90-Day Deep Mine', minDays: 90 },
    oneEighty: { apy: 75, name: '180-Day Reserve Vault', minDays: 180 }
  }

  const calculateReturns = () => {
    const principal = parseFloat(amount) || 0
    const days = parseInt(duration) || 0
    const apy = pools[selectedPool as keyof typeof pools].apy / 100
    
    const dailyReturn = principal * apy / 365
    const totalReturn = dailyReturn * days
    const totalValue = principal + totalReturn
    
    return {
      daily: dailyReturn,
      weekly: dailyReturn * 7,
      monthly: dailyReturn * 30,
      total: totalReturn,
      finalValue: totalValue,
      roi: (totalReturn / principal) * 100
    }
  }

  const returns = calculateReturns()

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-24 pb-20 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(251, 191, 36, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.05) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

        <div className="container mx-auto relative z-10 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-500/10 rounded-full mb-6 border border-amber-500/20">
              <Calculator className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-amber-400 font-medium tracking-widest uppercase">Staking Calculator</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-white">
              Calculate Your Rewards
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Project your staking returns and plan your investment strategy
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Calculator Input */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Calculator className="w-6 h-6 mr-2 text-amber-400" />
                  Input Parameters
                </h2>

                {/* Pool Selection */}
                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-3 font-medium uppercase tracking-wider">Select Pool</label>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(pools).map(([key, pool]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedPool(key)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          selectedPool === key
                            ? 'border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-500/20'
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        <div className="text-left">
                          <p className="text-sm font-semibold text-white mb-1">{pool.name}</p>
                          <p className="text-2xl font-bold text-amber-400">{pool.apy}% APY</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount Input */}
                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-3 font-medium uppercase tracking-wider">
                    Staking Amount (GOLDS)
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="10000"
                    className="w-full px-4 py-4 bg-gray-900/70 border border-gray-700 rounded-xl text-white text-xl font-bold focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                  />
                  <div className="flex gap-2 mt-3">
                    {[5000, 10000, 25000, 50000].map((val) => (
                      <button
                        key={val}
                        onClick={() => setAmount(val.toString())}
                        className="flex-1 py-2 bg-gray-800/50 hover:bg-amber-600/20 border border-gray-700 hover:border-amber-500/50 rounded-lg text-xs font-semibold transition-all"
                      >
                        {val.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration Input */}
                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-3 font-medium uppercase tracking-wider">
                    Staking Duration (Days)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="365"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-500">1 day</span>
                    <span className="text-xl font-bold text-amber-400">{duration} days</span>
                    <span className="text-sm text-gray-500">365 days</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {[30, 90, 180, 365].map((val) => (
                      <button
                        key={val}
                        onClick={() => setDuration(val.toString())}
                        className="flex-1 py-2 bg-gray-800/50 hover:bg-amber-600/20 border border-gray-700 hover:border-amber-500/50 rounded-lg text-xs font-semibold transition-all"
                      >
                        {val}d
                      </button>
                    ))}
                  </div>
                </div>

                {/* Current Value Display */}
                <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 border border-amber-500/20 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Token Price (USD)</p>
                      <p className="text-3xl font-bold text-white">$0.25</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400 mb-1">Your Investment</p>
                      <p className="text-3xl font-bold text-amber-400">
                        ${(parseFloat(amount || '0') * 0.25).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                  Earnings Breakdown
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl">
                    <span className="text-sm text-gray-400">Daily</span>
                    <span className="text-lg font-bold text-white">+{returns.daily.toFixed(2)} GOLDS</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl">
                    <span className="text-sm text-gray-400">Weekly</span>
                    <span className="text-lg font-bold text-white">+{returns.weekly.toFixed(2)} GOLDS</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl">
                    <span className="text-sm text-gray-400">Monthly</span>
                    <span className="text-lg font-bold text-white">+{returns.monthly.toFixed(2)} GOLDS</span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gradient-to-br from-amber-900/30 to-amber-800/20 border border-amber-500/30 rounded-xl">
                    <span className="text-sm text-amber-400 font-semibold">Total Rewards</span>
                    <span className="text-xl font-bold text-amber-400">+{returns.total.toFixed(2)} GOLDS</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-amber-400" />
                  Final Returns
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Final Value</p>
                    <p className="text-4xl font-bold text-white mb-1">{returns.finalValue.toLocaleString()} GOLDS</p>
                    <p className="text-lg text-gray-500">${(returns.finalValue * 0.25).toLocaleString()} USD</p>
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-sm text-gray-400 mb-2">ROI</p>
                    <p className="text-3xl font-bold text-green-400">+{returns.roi.toFixed(2)}%</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 border border-amber-500/20 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-amber-400 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400">Pro Tip</p>
                    <p className="text-sm text-gray-300 mt-1">Longer staking periods yield higher APY rates!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Compare All Pools</h2>
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="text-left py-4 px-4 text-sm text-gray-400 font-semibold uppercase">Pool</th>
                    <th className="text-left py-4 px-4 text-sm text-gray-400 font-semibold uppercase">APY</th>
                    <th className="text-left py-4 px-4 text-sm text-gray-400 font-semibold uppercase">Lock Period</th>
                    <th className="text-right py-4 px-4 text-sm text-gray-400 font-semibold uppercase">Rewards (30d)</th>
                    <th className="text-right py-4 px-4 text-sm text-gray-400 font-semibold uppercase">Rewards (365d)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(pools).map(([key, pool]) => {
                    const amt = parseFloat(amount) || 0
                    const rewards30 = (amt * (pool.apy / 100) / 365) * 30
                    const rewards365 = (amt * (pool.apy / 100))
                    
                    return (
                      <tr key={key} className="border-b border-gray-800/30 hover:bg-amber-500/5 transition-colors">
                        <td className="py-4 px-4 font-semibold text-white">{pool.name}</td>
                        <td className="py-4 px-4 text-amber-400 font-bold">{pool.apy}%</td>
                        <td className="py-4 px-4 text-gray-400">{pool.minDays === 0 ? 'Flexible' : `${pool.minDays} days`}</td>
                        <td className="py-4 px-4 text-right text-white font-semibold">+{rewards30.toFixed(2)}</td>
                        <td className="py-4 px-4 text-right text-green-400 font-bold">+{rewards365.toFixed(2)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
