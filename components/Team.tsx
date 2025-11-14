'use client'

import { Linkedin, Twitter } from 'lucide-react'

export default function Team() {
  const team = [
    {
      name: 'John Anderson',
      role: 'CEO & Founder',
      bio: '15+ years in fintech and blockchain',
      image: '👨‍💼',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Former blockchain architect at major exchange',
      image: '👩‍💻',
    },
    {
      name: 'Michael Rodriguez',
      role: 'CFO',
      bio: 'Investment banking background',
      image: '👨‍💼',
    },
    {
      name: 'Emily Watson',
      role: 'CMO',
      bio: 'Marketing expert from Web3 space',
      image: '👩‍💼',
    },
  ]

  return (
    <section id="team" className="py-20 px-4 bg-gradient-to-b from-transparent via-gold-950/5 to-transparent">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experienced leaders from finance, tech, and blockchain industries
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="glass-gold border border-gold-800/30 rounded-2xl p-6 text-center hover:neon-gold transition-all group card-3d relative overflow-hidden"
            >
              <div className="holographic absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Avatar */}
              <div className="relative z-10 w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-12 transition-all neon-gold">
                {member.image}
              </div>

              {/* Info */}
              <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:neon-text transition-all">{member.name}</h3>
              <div className="text-gold-400 text-sm font-semibold mb-3">{member.role}</div>
              <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">{member.bio}</p>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <a href="#" className="w-8 h-8 bg-gold-900/30 hover:bg-gold-gradient rounded-lg flex items-center justify-center transition-all group/link">
                  <Linkedin className="w-4 h-4 text-gold-400 group-hover/link:text-black transition-colors" />
                </a>
                <a href="#" className="w-8 h-8 bg-gold-900/30 hover:bg-gold-gradient rounded-lg flex items-center justify-center transition-all group/link">
                  <Twitter className="w-4 h-4 text-gold-400 group-hover/link:text-black transition-colors" />
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
