'use client'

import { Shield, Award, CheckCircle2, Star, TrendingUp } from 'lucide-react'

export default function TrustSection() {
  const certifications = [
    { icon: '🛡️', title: 'CertiK Audit', desc: 'Smart Contract Verified', badge: 'AA+' },
    { icon: '✅', title: 'KYC Verified', desc: 'Team Identity Confirmed', badge: '100%' },
    { icon: '🏆', title: 'Top Rated', desc: 'ICOBench Score', badge: '4.9/5' },
    { icon: '💎', title: 'Gold Reserves', desc: 'Verified by Swiss Bank', badge: '$50M' },
  ]

  const partnerships = [
    { name: 'Binance', type: 'Exchange Partner' },
    { name: 'Coinbase', type: 'Listed Q2 2025' },
    { name: 'Swiss Gold Trust', type: 'Asset Custodian' },
    { name: 'BlockFi', type: 'Staking Partner' },
  ]

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'Crypto Fund Manager',
      country: '🇸🇬 Singapore',
      amount: '$250K',
      quote: 'Most transparent ICO I\'ve seen. The gold-backed model provides real security.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Angel Investor',
      country: '🇺🇸 New York',
      amount: '$150K',
      quote: 'Finally, a crypto project with tangible assets. This is the future of digital gold.',
      rating: 5
    },
    {
      name: 'Ahmed Al-Rashid',
      role: 'Wealth Manager',
      country: '🇦🇪 Dubai',
      amount: '$500K',
      quote: 'Perfect bridge between traditional gold investment and blockchain technology.',
      rating: 5
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-gold-950/5 to-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="starfield"></div>
      <div className="golden-hour"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Trust Badges */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-8 py-4 glass-gold rounded-full mb-6 backdrop-blur-xl border border-gold-500/20">
              <Shield className="w-5 h-5 text-gold-400" />
              <span className="text-sm text-gray-300 font-medium tracking-wide">Security & Compliance</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-luxury">Institutional-Grade Infrastructure</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Audited, verified, and trusted by leading institutions worldwide</p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <div key={index} className="luxury-card elegant-shadow rounded-2xl p-6 text-center card-3d luxury-glow metallic-sheen border-ornament relative overflow-hidden group">
                <div className="shimmer-wave"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{cert.icon}</div>
                  <div className="inline-block px-4 py-2 bg-gold-gradient rounded-full mb-3">
                    <span className="text-lg font-black text-black">{cert.badge}</span>
                  </div>
                  <h3 className="text-lg font-black text-white mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Partnerships */}
          <div className="luxury-card elegant-shadow rounded-3xl p-10 mb-16 metallic-sheen border-ornament relative overflow-hidden">
            <div className="shimmer-wave"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-center mb-8">
                <span className="text-luxury">Strategic Partnerships</span>
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {partnerships.map((partner, index) => (
                  <div key={index} className="glass-gold rounded-xl p-6 text-center hover:neon-gold transition-all group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center elegant-shadow">
                      <CheckCircle2 className="w-8 h-8 text-black" />
                    </div>
                    <h4 className="text-xl font-black text-white mb-2">{partner.name}</h4>
                    <p className="text-sm text-gray-400">{partner.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Investor Testimonials */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="text-luxury">Trusted by Industry Leaders</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="luxury-card elegant-shadow rounded-2xl p-8 card-3d luxury-glow metallic-sheen relative overflow-hidden group">
                  <div className="shimmer-wave"></div>
                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-300 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between pt-6 border-t border-gold-800/30">
                      <div>
                        <div className="font-bold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                        <div className="text-xs text-gray-500 mt-1">{testimonial.country}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-luxury">{testimonial.amount}</div>
                        <div className="text-xs text-gray-500">Invested</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Stats Bar */}
          <div className="mt-16 luxury-card elegant-shadow rounded-2xl p-8 metallic-sheen glow-pulse">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-black text-luxury mb-2">$2.5M+</div>
                <div className="text-sm text-gray-400">Already Raised</div>
              </div>
              <div>
                <div className="text-4xl font-black text-luxury mb-2">10K+</div>
                <div className="text-sm text-gray-400">Investors Worldwide</div>
              </div>
              <div>
                <div className="text-4xl font-black text-luxury mb-2">45+</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-black text-luxury mb-2">AAA</div>
                <div className="text-sm text-gray-400">Security Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
