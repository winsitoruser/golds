'use client'

import { Coins, Twitter, Send, Github, Mail, Mountain, Gem, Shield, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-blue-500/10 pt-16 pb-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#sale" className="hover:text-blue-400 transition-colors">Buy Tokens</a></li>
              <li><a href="/staking" className="hover:text-blue-400 transition-colors">Staking</a></li>
              <li><a href="#tokenomics" className="hover:text-blue-400 transition-colors">Tokenomics</a></li>
              <li><a href="/calculator" className="hover:text-blue-400 transition-colors">Calculator</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Social</h4>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 text-blue-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors">
                <Send className="w-4 h-4 text-blue-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors">
                <Github className="w-4 h-4 text-blue-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-500/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">&copy; 2024 SourceofGold. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
