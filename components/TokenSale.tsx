'use client'

import { useState } from 'react'
import { ArrowRight, Info } from 'lucide-react'

export default function TokenSale() {
  const [amount, setAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('ETH')

  const progress = 25 // 25% raised

  return (
    <section id="sale" className="py-20 px-4 relative overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0 pointer-events-none" style={{opacity: '0.2'}}>
        <div className="gold-nugget" style={{top: '10%', left: '10%', opacity: '0.4'}}></div>
        <div className="gold-coin" style={{bottom: '20%', right: '12%', opacity: '0.3'}}></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-8 py-4 glass-gold rounded-full mb-6 backdrop-blur-xl border border-gold-500/20">
              <span className="text-sm text-gray-300 font-medium tracking-wide">ICO Token Sale</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-luxury">Acquire GOLDS Tokens</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Participate in the initial coin offering with multiple payment options and instant allocation
            </p>
          </div>

          {/* Main Sale Card */}
          <div className="glass-gold rounded-2xl p-8 md:p-10 backdrop-blur-xl border border-gold-500/20 relative overflow-hidden hover:border-gold-500/30 transition-all">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Sale Progress</span>
                <span className="text-gold-400 font-bold">{progress}% Complete</span>
              </div>
              <div className="w-full h-4 bg-gray-900 rounded-full overflow-hidden relative">
                <div 
                  className="h-full bg-gold-gradient transition-all duration-500 relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
              <div className="flex justify-between text-xs mt-2">
                <span className="text-gray-500">$2.5M Raised</span>
                <span className="text-gray-500">$10M Hard Cap</span>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="mb-6">
              <label className="text-sm text-gray-400 mb-3 block">Pay With</label>
              <div className="grid grid-cols-4 gap-3">
                {['ETH', 'USDT', 'BNB', 'USDC'].map((method) => (
                  <button
                    key={method}
                    onClick={() => setPaymentMethod(method)}
                    className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                      paymentMethod === method
                        ? 'bg-gold-gradient text-black neon-gold scale-105'
                        : 'glass text-gray-400 hover:neon-gold hover:text-gold-400'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Input */}
            <div className="glass-gold border border-gold-800/30 rounded-2xl p-6 mb-4 hover:neon-gold transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400">You Pay</span>
                <span className="text-xs text-gray-500">Balance: 0.00 {paymentMethod}</span>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.0"
                  className="flex-1 bg-transparent text-3xl text-white outline-none"
                />
                <div className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-lg">
                  <span className="font-semibold text-white">{paymentMethod}</span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center my-4">
              <div className="bg-gold-gradient rounded-full p-2">
                <ArrowRight className="w-5 h-5 text-black rotate-90" />
              </div>
            </div>

            {/* You Receive */}
            <div className="glass-gold border border-gold-800/30 rounded-2xl p-6 mb-6 hover:neon-gold transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400">You Receive</span>
                <span className="text-xs text-gold-500">1 GOLDS = $0.25</span>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={amount ? (parseFloat(amount) * 2000).toFixed(2) : '0.0'}
                  readOnly
                  placeholder="0.0"
                  className="flex-1 bg-transparent text-3xl text-white outline-none"
                />
                <div className="flex items-center space-x-2 bg-gold-900/30 px-4 py-2 rounded-lg border border-gold-700/50">
                  <span className="font-semibold text-gold-400">GOLDS</span>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-gold-500/5 border border-gold-500/20 rounded-xl p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p className="mb-2">
                    Minimum purchase: <span className="text-white font-semibold">100 GOLDS ($25)</span>
                  </p>
                  <p>
                    Tokens will be distributed immediately after purchase and available for withdrawal after ICO ends.
                  </p>
                </div>
              </div>
            </div>

            {/* Bonus Info */}
            <div className="grid grid-cols-2 gap-5 mb-8">
              <div className="luxury-card elegant-shadow rounded-2xl p-6 text-center card-3d luxury-glow transition-all relative overflow-hidden group">
                <div className="holographic absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-sm text-gray-400 mb-2 font-medium tracking-wide">Current Bonus</div>
                  <div className="text-4xl font-black text-luxury">+20%</div>
                </div>
              </div>
              <div className="luxury-card elegant-shadow rounded-2xl p-6 text-center card-3d luxury-glow transition-all relative overflow-hidden group">
                <div className="holographic absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-sm text-gray-400 mb-2 font-medium tracking-wide">Next Price</div>
                  <div className="text-4xl font-black text-luxury">$0.30</div>
                </div>
              </div>
            </div>

            {/* Buy Button */}
            <button className="w-full py-7 btn-luxury hover:scale-[1.02] text-black text-2xl rounded-2xl font-black elegant-shadow transition-all">
              <span className="flex items-center justify-center space-x-3 tracking-wide">
                <span className="text-3xl">💎</span>
                <span>Buy GOLDS Tokens Now</span>
                <span className="text-2xl">🚀</span>
              </span>
            </button>

            {/* Accepted Payments */}
            <div className="mt-6 text-center text-sm text-gray-500">
              We accept ETH, BNB, USDT, USDC
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
