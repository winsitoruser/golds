'use client'

import { Shield, Award, CheckCircle2, Star, TrendingUp } from 'lucide-react'

export default function TrustSection() {
  const certifications = [
    { icon: '💰', title: 'Gold Reserves', desc: 'LBMA Certified Gold Bars', badge: '$50M', color: 'green' },
    { icon: '🏦', title: 'Swiss Insured', desc: 'Loomis Vault Insurance', badge: '$500M', color: 'cyan' },
    { icon: '✅', title: 'CertiK Audit', desc: 'Smart Contract Security', badge: 'AA+', color: 'amber' },
    { icon: '📊', title: 'Quarterly Audit', desc: 'Independent Verification', badge: '100%', color: 'purple' },
  ]

  const partnerships = [
    { name: 'Loomis International', type: 'Vault Security', logo: '🏦' },
    { name: 'World Gold Council', type: 'Industry Standards', logo: '🏛️' },
    { name: 'CertiK', type: 'Smart Contract Audit', logo: '🛡️' },
    { name: 'Binance', type: 'Exchange Partner', logo: '💱' },
  ]

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'Hedge Fund Manager',
      country: '🇸🇬 Singapore',
      amount: '$250K',
      quote: 'Finally, a secure way to add gold exposure to our portfolio without physical storage hassles. The Swiss vault backing and real-time audits give us complete confidence.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Sarah Williams',
      role: 'Precious Metals Trader',
      country: '🇨🇭 Zürich',
      amount: '$450K',
      quote: 'As a gold trader for 15 years, I appreciate the transparency and instant liquidity. Being able to redeem for physical gold anytime is a game-changer.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Dr. Robert Khan',
      role: 'Institutional Investor',
      country: '🇦🇪 Dubai',
      amount: '$800K',
      quote: 'The combination of gold stability and blockchain efficiency is brilliant. We are diversifying 20% of our portfolio into SOGOLD tokens.',
      rating: 5,
      avatar: '🧑‍💼'
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-gold-950/5 to-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="starfield"></div>
      <div className="golden-hour"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Premium Tech Trust Badges Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-purple-500/15 rounded-full mb-8 border-2 border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-500/20">
              <Shield className="w-6 h-6 text-cyan-400" />
              <span className="text-sm text-cyan-300 font-bold tracking-widest uppercase">Security & Compliance</span>
              <div className="px-3 py-1 bg-cyan-500/20 rounded-full">
                <span className="text-xs font-bold text-cyan-300">Verified ✓</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-cyan-500 to-amber-500"></div>
              <Award className="w-8 h-8 text-cyan-400 animate-pulse" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-purple-500 to-amber-500"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200">
                Not Your Average Shitcoin
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real gold. Real audits. Real insurance. Everything verified on-chain. Built different. 💎
            </p>
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

          {/* Premium Investor Testimonials */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-amber-500/10 rounded-full mb-6 border border-cyan-500/20">
                <Star className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-semibold tracking-wider uppercase">Investor Testimonials</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-100 via-white to-amber-100">
                  Trusted by Industry Leaders
                </span>
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group relative">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-amber-500/20 hover:border-amber-500/40 transition-all shadow-2xl">
                    {/* Background Shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent rounded-3xl"></div>
                    
                    <div className="relative z-10">
                      {/* Avatar & Stars Row */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center text-3xl shadow-xl border-2 border-amber-400/50">
                          {testimonial.avatar}
                        </div>
                        
                        {/* Stars */}
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="mb-6">
                        <div className="text-6xl text-amber-500/20 leading-none mb-2">"</div>
                        <p className="text-gray-300 leading-relaxed text-base">
                          {testimonial.quote}
                        </p>
                      </div>

                      {/* Author Info */}
                      <div className="flex items-end justify-between pt-6 border-t-2 border-amber-500/20">
                        <div>
                          <div className="font-bold text-white text-lg mb-1">{testimonial.name}</div>
                          <div className="text-sm text-gray-400 mb-1">{testimonial.role}</div>
                          <div className="text-xs text-gray-500">{testimonial.country}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500">
                            {testimonial.amount}
                          </div>
                          <div className="text-xs text-gray-500 font-semibold">Invested</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Trust Stats Bar */}
          <div className="mt-16 relative group">
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            
            {/* Stats Card */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-10 border-2 border-amber-500/30 shadow-2xl">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent rounded-3xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent rounded-3xl"></div>
              
              <div className="relative z-10 grid md:grid-cols-4 gap-8 text-center">
                <div className="group/stat hover:scale-105 transition-transform">
                  <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500 mb-3">
                    $2.5M+
                  </div>
                  <div className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Funds Raised</div>
                  <div className="mt-2 text-xs text-green-400 font-bold">+15.2% today</div>
                </div>
                
                <div className="group/stat hover:scale-105 transition-transform">
                  <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
                    10K+
                  </div>
                  <div className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Global Investors</div>
                  <div className="mt-2 text-xs text-cyan-400 font-bold">From 45+ countries</div>
                </div>
                
                <div className="group/stat hover:scale-105 transition-transform">
                  <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500 mb-3">
                    $50M
                  </div>
                  <div className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Gold Reserves</div>
                  <div className="mt-2 text-xs text-amber-400 font-bold">Swiss Certified</div>
                </div>
                
                <div className="group/stat hover:scale-105 transition-transform">
                  <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-3">
                    AAA
                  </div>
                  <div className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Security Rating</div>
                  <div className="mt-2 text-xs text-purple-400 font-bold">CertiK Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
