'use client'

import { Coins, Twitter, Send, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold-900/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gold-gradient rounded-full flex items-center justify-center">
                <Coins className="w-6 h-6 text-black" />
              </div>
              <div>
                <span className="text-xl font-bold text-gold-400">Gold Source</span>
                <div className="text-xs text-gray-500">GOLDS Token</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              The future of digital gold. Secure, transparent, and backed by real assets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#sale" className="hover:text-gold-400 transition-colors">Buy Tokens</a></li>
              <li><a href="#tokenomics" className="hover:text-gold-400 transition-colors">Tokenomics</a></li>
              <li><a href="#roadmap" className="hover:text-gold-400 transition-colors">Roadmap</a></li>
              <li><a href="#team" className="hover:text-gold-400 transition-colors">Team</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Audit Report</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-semibold mb-4">Join Community</h4>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="w-10 h-10 bg-gold-900/30 hover:bg-gold-gradient rounded-lg flex items-center justify-center transition-all group">
                <Twitter className="w-5 h-5 text-gold-400 group-hover:text-black transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold-900/30 hover:bg-gold-gradient rounded-lg flex items-center justify-center transition-all group">
                <Send className="w-5 h-5 text-gold-400 group-hover:text-black transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold-900/30 hover:bg-gold-gradient rounded-lg flex items-center justify-center transition-all group">
                <Github className="w-5 h-5 text-gold-400 group-hover:text-black transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold-900/30 hover:bg-gold-gradient rounded-lg flex items-center justify-center transition-all group">
                <Mail className="w-5 h-5 text-gold-400 group-hover:text-black transition-colors" />
              </a>
            </div>
            <div className="text-sm text-gray-400">
              Subscribe to our newsletter for updates
            </div>
          </div>
        </div>

        <div className="border-t border-gold-900/30 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2024 Gold Source (GOLDS). All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
