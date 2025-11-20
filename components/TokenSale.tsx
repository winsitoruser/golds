'use client'

import { useState } from 'react'
import { ArrowRight, Info } from 'lucide-react'

export default function TokenSale() {
  const [amount, setAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('ETH')

  const progress = 25 // 25% raised

  return (
    <section id="sale" className="py-20 px-4 relative overflow-hidden">
      {/* Cyber Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
      
      {/* Tech Grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Cyber Section Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-block mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-amber-500 blur opacity-50"></div>
                <div className="relative px-6 py-3 bg-slate-900 border border-cyan-400/50 clip-corner">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-cyan-400 font-black tracking-widest uppercase font-mono">TOKEN SALE LIVE</span>
                  </div>
                  {/* Corner Brackets */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400"></div>
                </div>
              </div>
            </div>
            
            {/* Title */}
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-amber-400" style={{
                textShadow: '0 0 40px rgba(6, 182, 212, 0.3)'
              }}>
                BUY SOGOLD
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
              <span className="text-cyan-400">→</span> 10,000+ investors • Instant delivery • Secure blockchain
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* Left Column - Stats & Info */}
            <div className="space-y-6">
              {/* Cyber Sale Progress Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 blur opacity-30 group-hover:opacity-50 transition-all"></div>
                <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 border border-cyan-400/30">
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-black text-white uppercase tracking-wide">Sale Progress</h3>
                      <div className="px-3 py-1 bg-green-500/10 border border-green-400 clip-corner">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-400 font-black uppercase">LIVE</span>
                        </div>
                      </div>
                    </div>
                  
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-gray-400 font-mono uppercase text-xs">Raised</span>
                        <span className="text-cyan-400 font-black">{progress}% COMPLETE</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 overflow-hidden relative">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 transition-all duration-500 relative"
                          style={{ width: `${progress}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                        </div>
                        {/* Progress Indicator */}
                        <div className="absolute top-0 h-full w-px bg-cyan-400" style={{ left: `${progress}%` }}>
                          <div className="absolute -top-1 -left-1 w-3 h-3 bg-cyan-400 border-2 border-slate-900 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm mt-3">
                        <span className="text-white font-black">$2.5M</span>
                        <span className="text-gray-500 font-mono">/ $10M</span>
                      </div>
                    </div>

                    {/* Mini Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative bg-slate-800/50 p-4 border border-cyan-400/20">
                        <p className="text-xs text-gray-400 mb-1 font-mono uppercase">Current Price</p>
                        <p className="text-2xl font-black text-cyan-400">$0.25</p>
                        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-cyan-400"></div>
                        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-cyan-400"></div>
                      </div>
                      <div className="relative bg-slate-800/50 p-4 border border-amber-400/20">
                        <p className="text-xs text-gray-400 mb-1 font-mono uppercase">Next Price</p>
                        <p className="text-2xl font-black text-amber-400">$0.30</p>
                        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-amber-400"></div>
                        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-amber-400"></div>
                      </div>
                    </div>
                  </div>
                  {/* Corner Brackets */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>
                </div>
              </div>

              {/* Cyber Bonus Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 blur opacity-40 group-hover:opacity-60 transition-all"></div>
                <div className="relative bg-slate-900/90 backdrop-blur-xl p-6 border border-amber-400/50 overflow-hidden">
                  {/* HOT Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-black uppercase transform rotate-12 animate-pulse">
                    HOT
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white mb-2 uppercase tracking-wide">Early Bird Bonus</h3>
                    <p className="text-5xl font-black text-amber-400 mb-2" style={{
                      textShadow: '0 0 30px rgba(251, 191, 36, 0.5)'
                    }}>+20%</p>
                    <p className="text-sm text-gray-400 font-mono">Extra tokens on every purchase</p>
                  </div>
                  {/* Corner Brackets */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-400"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-400"></div>
                </div>
              </div>

              {/* Cyber Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative bg-slate-900/90 backdrop-blur-xl p-5 border border-purple-400/30">
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-mono">Investors</p>
                  <p className="text-2xl font-black text-purple-400">10,428</p>
                  <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-purple-400"></div>
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-purple-400"></div>
                </div>
                <div className="relative bg-slate-900/90 backdrop-blur-xl p-5 border border-pink-400/30">
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-mono">Tokens Sold</p>
                  <p className="text-2xl font-black text-pink-400">10M</p>
                  <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-pink-400"></div>
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-pink-400"></div>
                </div>
              </div>

              {/* Cyber Accepted Payments */}
              <div className="relative bg-slate-900/90 backdrop-blur-xl p-5 border border-cyan-400/20">
                <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-mono">Accepted Payments</p>
                <div className="flex flex-wrap gap-2">
                  {['ETH', 'BNB', 'USDT', 'USDC'].map((crypto) => (
                    <div key={crypto} className="relative px-4 py-2 bg-slate-800 border border-cyan-400/30 text-sm text-cyan-400 font-black clip-corner">
                      {crypto}
                      <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-cyan-400"></div>
                      <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-cyan-400"></div>
                    </div>
                  ))}
                </div>
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400"></div>
              </div>
            </div>

            {/* Cyber Purchase Card */}
            <div className="lg:sticky lg:top-24">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-xl opacity-40 group-hover:opacity-60 transition-all"></div>
                <div className="relative bg-slate-900/95 backdrop-blur-xl p-8 border-2 border-cyan-400/50">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="inline-block mb-4">
                      <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-400 clip-corner">
                        <span className="text-xs font-black text-cyan-400 uppercase tracking-widest font-mono">Terminal</span>
                        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-cyan-400"></div>
                        <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-cyan-400"></div>
                        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-cyan-400"></div>
                        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-cyan-400"></div>
                      </div>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">Buy SOGOLD</h3>
                    <p className="text-xs text-gray-400 font-mono">Instant • Secure • Blockchain Verified</p>
                  </div>

                  {/* Cyber Payment Method */}
                  <div className="mb-6">
                    <label className="text-xs text-gray-400 mb-3 block font-mono uppercase tracking-wider">Select Payment</label>
                    <div className="grid grid-cols-4 gap-2">
                      {['ETH', 'USDT', 'BNB', 'USDC'].map((method) => (
                        <button
                          key={method}
                          onClick={() => setPaymentMethod(method)}
                          className={`relative py-3 px-2 font-black text-sm transition-all ${
                            paymentMethod === method
                              ? 'bg-cyan-500 text-white border-2 border-cyan-400 scale-105'
                              : 'bg-slate-800 text-gray-400 border border-cyan-400/20 hover:border-cyan-400/50 hover:text-cyan-400'
                          }`}
                        >
                          {method}
                          {paymentMethod === method && (
                            <>
                              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white"></div>
                              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white"></div>
                            </>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Cyber Amount Input */}
                  <div className="relative bg-slate-800/50 border border-cyan-400/30 p-5 mb-3 focus-within:border-cyan-400 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-400 font-mono uppercase">Input Amount</span>
                      <span className="text-xs text-gray-500 font-mono">BAL: 0.00</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.0"
                        className="flex-1 bg-transparent text-3xl font-black text-white outline-none"
                      />
                      <div className="relative px-4 py-2 bg-cyan-500/10 border border-cyan-400">
                        <span className="font-black text-cyan-400">{paymentMethod}</span>
                        <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-cyan-400"></div>
                        <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-cyan-400"></div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-cyan-400"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-cyan-400"></div>
                  </div>

                  {/* Cyber Arrow */}
                  <div className="flex justify-center my-3">
                    <div className="p-2 bg-cyan-500 border-2 border-cyan-400">
                      <ArrowRight className="w-4 h-4 text-white rotate-90" />
                    </div>
                  </div>

                  {/* Cyber You Receive */}
                  <div className="relative bg-gradient-to-br from-amber-900/20 to-amber-800/10 border border-amber-400/50 p-5 mb-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-400 font-mono uppercase">Output Amount</span>
                      <span className="text-xs text-amber-400 font-black">$0.25 / SOGOLD</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="text"
                        value={amount ? (parseFloat(amount) * 2000).toFixed(2) : '0.0'}
                        readOnly
                        placeholder="0.0"
                        className="flex-1 bg-transparent text-3xl font-black text-white outline-none"
                      />
                      <div className="relative px-4 py-2 bg-amber-600/20 border border-amber-400">
                        <span className="font-black text-amber-400">SOGOLD</span>
                        <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-amber-400"></div>
                        <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-amber-400"></div>
                      </div>
                    </div>
                    {amount && (
                      <div className="mt-3 pt-3 border-t border-amber-500/30">
                        <p className="text-sm text-amber-400 font-mono">
                          <span className="text-amber-400">→</span> +{(parseFloat(amount) * 2000 * 0.2).toFixed(2)} BONUS (20%)
                        </p>
                      </div>
                    )}
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-amber-400"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-amber-400"></div>
                  </div>

                  {/* Cyber Buy Button */}
                  <button className="group relative w-full mb-4">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 blur opacity-75 group-hover:opacity-100 transition-all"></div>
                    <div className="relative py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-cyan-400 text-white font-black text-lg transition-all overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                      <span className="flex items-center justify-center space-x-3 relative z-10">
                        <span className="text-2xl font-black uppercase">Execute Buy</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </span>
                      {/* Corner Brackets */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white"></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white"></div>
                    </div>
                  </button>

                  {/* Terminal Info */}
                  <div className="relative bg-slate-800/50 border border-cyan-400/20 p-4">
                    <div className="flex items-start space-x-2">
                      <Info className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-gray-400 font-mono">
                        <p className="mb-1">
                          <span className="text-cyan-400">$</span> Min: <span className="text-white font-black">100 SOGOLD ($25)</span>
                        </p>
                        <p className="text-cyan-400/60">
                          <span className="text-cyan-400">→</span> Instant • Secure • No fees
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-cyan-400"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-cyan-400"></div>
                  </div>
                  
                  {/* Main Corner Brackets */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
