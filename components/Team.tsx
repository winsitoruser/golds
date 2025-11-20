'use client'

import { Linkedin, Twitter } from 'lucide-react'

export default function Team() {
  const team = [
    {
      name: 'Dr. James Mitchell',
      role: 'CEO & Founder',
      bio: 'Former Goldman Sachs VP, 20+ years in precious metals trading and blockchain innovation',
      image: '👨‍💼',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Ex-Ethereum Foundation, smart contract security expert with 15+ audits',
      image: '👩‍💻',
    },
    {
      name: 'Robert Goldstein',
      role: 'Head of Gold Operations',
      bio: 'Swiss-certified gold refinery expert, manages $500M+ in physical reserves',
      image: '👨‍💼',
    },
    {
      name: 'Dr. Elena Volkov',
      role: 'Chief Compliance Officer',
      bio: 'Former World Gold Council advisor, regulatory compliance specialist',
      image: '👩‍💼',
    },
  ]

  return (
    <section id="team" className="py-20 px-4 bg-gradient-to-b from-transparent via-gold-950/5 to-transparent">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Based Team
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No anons here. Doxxed team with serious credentials. We're in it for the long haul. 💪
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
