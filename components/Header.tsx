'use client'

import { Coins, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gold-900/30">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gold-gradient rounded-full flex items-center justify-center glow-gold">
              <Coins className="w-6 h-6 text-black" />
            </div>
            <div>
              <span className="text-xl font-bold text-gold-400">Gold Source</span>
              <span className="text-xs text-gray-400 ml-2">GOLDS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#sale" className="text-gray-300 hover:text-gold-400 transition-colors">
              Token Sale
            </a>
            <a href="#tokenomics" className="text-gray-300 hover:text-gold-400 transition-colors">
              Tokenomics
            </a>
            <a href="#roadmap" className="text-gray-300 hover:text-gold-400 transition-colors">
              Roadmap
            </a>
            <a href="#team" className="text-gray-300 hover:text-gold-400 transition-colors">
              Team
            </a>
            <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
              Whitepaper
            </a>
          </div>

          {/* Connect Wallet Button */}
          <button className="group hidden md:block relative px-6 py-2.5 bg-gold-gradient hover:scale-105 text-black rounded-lg font-semibold transition-all neon-gold overflow-hidden">
            <span className="relative z-10">Connect Wallet</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#sale" className="block text-gray-300 hover:text-gold-400 transition-colors">
              Token Sale
            </a>
            <a href="#tokenomics" className="block text-gray-300 hover:text-gold-400 transition-colors">
              Tokenomics
            </a>
            <a href="#roadmap" className="block text-gray-300 hover:text-gold-400 transition-colors">
              Roadmap
            </a>
            <a href="#team" className="block text-gray-300 hover:text-gold-400 transition-colors">
              Team
            </a>
            <a href="#" className="block text-gray-300 hover:text-gold-400 transition-colors">
              Whitepaper
            </a>
            <button className="w-full px-6 py-2.5 bg-gold-gradient text-black rounded-lg font-semibold">
              Connect Wallet
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
