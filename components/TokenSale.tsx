'use client'

import { useState } from 'react'
import { ArrowRight, Info } from 'lucide-react'

export default function TokenSale() {
  const [amount, setAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('ETH')

  const progress = 25 // 25% raised

  return (
    <section id="sale" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-amber-500/10 rounded-full mb-6 border border-amber-500/20 backdrop-blur-sm">
              <span className="text-2xl">💎</span>
              <span className="text-sm text-amber-400 font-semibold tracking-wider uppercase">Token Sale Live</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-white">
              Acquire GOLDS Tokens Now
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Join 10,000+ investors. Multiple payment options with instant token delivery.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* Left Column - Stats & Info */}
            <div className="space-y-6">
              {/* Sale Progress Card */}
              <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Sale Progress</h3>
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-sm text-green-400 font-semibold">Live</span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-gray-400">Raised</span>
                      <span className="text-amber-400 font-bold">{progress}% Complete</span>
                    </div>
                    <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-600 to-amber-500 transition-all duration-500 relative"
                        style={{ width: `${progress}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm mt-3">
                      <span className="text-white font-semibold">$2.5M</span>
                      <span className="text-gray-400">/ $10M</span>
                    </div>
                  </div>

                  {/* Mini Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <p className="text-xs text-gray-400 mb-1">Current Price</p>
                      <p className="text-2xl font-bold text-white">$0.25</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <p className="text-xs text-gray-400 mb-1">Next Price</p>
                      <p className="text-2xl font-bold text-amber-400">$0.30</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bonus Highlight Card */}
              <div className="relative bg-gradient-to-br from-amber-600/20 to-amber-800/20 backdrop-blur-xl rounded-2xl p-6 border border-amber-500/30">
                <div className="absolute top-4 right-4">
                  <span className="text-4xl">🎁</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Early Bird Bonus</h3>
                  <p className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600 mb-2">+20%</p>
                  <p className="text-sm text-gray-300">Get extra tokens on every purchase during ICO</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-xl p-5 border border-gray-700/50">
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Investors</p>
                  <p className="text-2xl font-bold text-white">10,428</p>
                </div>
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-xl p-5 border border-gray-700/50">
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Tokens Sold</p>
                  <p className="text-2xl font-bold text-white">10M</p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-xl p-5 border border-gray-700/50">
                <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider">Accepted Payments</p>
                <div className="flex flex-wrap gap-3">
                  {['ETH', 'BNB', 'USDT', 'USDC'].map((crypto) => (
                    <div key={crypto} className="px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-300 font-semibold">
                      {crypto}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Purchase Card */}
            <div className="lg:sticky lg:top-24">
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-amber-500/30 shadow-2xl shadow-amber-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl"></div>
                <div className="relative">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Buy GOLDS Tokens</h3>
                    <p className="text-sm text-gray-400">Instant delivery • Secure transaction</p>
                  </div>

                  {/* Payment Method Selection */}
                  <div className="mb-6">
                    <label className="text-sm text-gray-400 mb-3 block font-medium">Pay With</label>
                    <div className="grid grid-cols-4 gap-2">
                      {['ETH', 'USDT', 'BNB', 'USDC'].map((method) => (
                        <button
                          key={method}
                          onClick={() => setPaymentMethod(method)}
                          className={`py-3 px-2 rounded-xl font-bold text-sm transition-all ${
                            paymentMethod === method
                              ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white border-2 border-amber-500 scale-105 shadow-lg shadow-amber-500/30'
                              : 'bg-gray-800/50 text-gray-400 border-2 border-gray-700 hover:border-amber-500/50 hover:text-white'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount Input */}
                  <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-5 mb-3 focus-within:border-amber-500 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400 font-medium">You Pay</span>
                      <span className="text-xs text-gray-500">Balance: 0.00 {paymentMethod}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.0"
                        className="flex-1 bg-transparent text-3xl font-bold text-white outline-none"
                      />
                      <div className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg">
                        <span className="font-bold text-white">{paymentMethod}</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center my-3">
                    <div className="p-2 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full">
                      <ArrowRight className="w-4 h-4 text-white rotate-90" />
                    </div>
                  </div>

                  {/* You Receive */}
                  <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/20 border border-amber-500/30 rounded-xl p-5 mb-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400 font-medium">You Receive</span>
                      <span className="text-xs text-amber-400 font-semibold">1 GOLDS = $0.25</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="text"
                        value={amount ? (parseFloat(amount) * 2000).toFixed(2) : '0.0'}
                        readOnly
                        placeholder="0.0"
                        className="flex-1 bg-transparent text-3xl font-bold text-white outline-none"
                      />
                      <div className="px-4 py-2 bg-amber-600/20 border border-amber-500/50 rounded-lg">
                        <span className="font-bold text-amber-400">GOLDS</span>
                      </div>
                    </div>
                    {amount && (
                      <div className="mt-3 pt-3 border-t border-amber-500/20">
                        <p className="text-sm text-amber-400">+ {(parseFloat(amount) * 2000 * 0.2).toFixed(2)} Bonus Tokens (20%)</p>
                      </div>
                    )}
                  </div>

                  {/* Buy Button */}
                  <button className="w-full py-5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-amber-500/30 mb-4 group">
                    <span className="flex items-center justify-center space-x-2">
                      <span className="text-xl">💎</span>
                      <span>Buy GOLDS Tokens</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>

                  {/* Info Box */}
                  <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
                    <div className="flex items-start space-x-2">
                      <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-gray-400">
                        <p className="mb-1">
                          Min: <span className="text-white font-semibold">100 GOLDS ($25)</span>
                        </p>
                        <p>
                          Instant delivery • Secure payment • No hidden fees
                        </p>
                      </div>
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
