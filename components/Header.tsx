'use client'

import { Coins, Menu, X, Mountain, Gem, Zap } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-blue-500/10">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Linea-style Logo */}
          <a href="/" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <Coins className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">SourceofGold</span>
          </a>

          {/* Dark Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <a href="/" className="px-4 py-2 text-gray-400 hover:text-blue-400 transition-colors font-medium text-sm">
              Home
            </a>
            <a href="/whitelist" className="px-4 py-2 text-gray-400 hover:text-blue-400 transition-colors font-medium text-sm">
              Whitelist
            </a>
            <a href="/staking" className="px-4 py-2 text-gray-400 hover:text-blue-400 transition-colors font-medium text-sm">
              Staking
            </a>
            <a href="/calculator" className="px-4 py-2 text-gray-400 hover:text-blue-400 transition-colors font-medium text-sm">
              Calculator
            </a>
            <a href="#tokenomics" className="px-4 py-2 text-gray-400 hover:text-blue-400 transition-colors font-medium text-sm">
              Tokenomics
            </a>
          </div>

          {/* Linea-style Button */}
          <button className="hidden lg:flex items-center space-x-2 px-5 py-2.5 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-all font-medium text-sm hover:shadow-lg hover:shadow-blue-500/20">
            <span>Connect Wallet</span>
          </button>

          {/* Dark Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-blue-500/10 rounded-lg transition-colors">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Dark Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-1 border-t border-blue-500/10 pt-4">
            <a href="/" className="block px-4 py-3 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-colors font-medium text-sm rounded-lg">
              Home
            </a>
            <a href="/whitelist" className="block px-4 py-3 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-colors font-medium text-sm rounded-lg">
              Whitelist
            </a>
            <a href="/staking" className="block px-4 py-3 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-colors font-medium text-sm rounded-lg">
              Staking
            </a>
            <a href="/calculator" className="block px-4 py-3 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-colors font-medium text-sm rounded-lg">
              Calculator
            </a>
            <a href="#tokenomics" className="block px-4 py-3 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-colors font-medium text-sm rounded-lg">
              Tokenomics
            </a>
            
            {/* Mobile Dark Button */}
            <div className="pt-4">
              <button className="w-full px-5 py-3 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-colors font-medium text-sm">
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
