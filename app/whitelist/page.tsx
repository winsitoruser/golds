'use client'

import { useState, useEffect } from 'react'
import { 
  Trophy, Users, Gift, Target, Zap, Check, ExternalLink, 
  Copy, Star, TrendingUp, Award, Shield, Sparkles, Coins,
  Crown, Flame, ChevronRight, Clock
} from 'lucide-react'

export default function WhitelistPage() {
  const [tasks, setTasks] = useState([
    { id: 1, platform: 'Twitter', icon: '𝕏', points: 100, completed: false, url: 'https://twitter.com/golds_token', followers: '@golds_token' },
    { id: 2, platform: 'Telegram', icon: '✈️', points: 100, completed: false, url: 'https://t.me/golds_community', followers: '@golds_community' },
    { id: 3, platform: 'Instagram', icon: '📷', points: 100, completed: false, url: 'https://instagram.com/golds.token', followers: '@golds.token' },
    { id: 4, platform: 'TikTok', icon: '🎵', points: 100, completed: false, url: 'https://tiktok.com/@golds_token', followers: '@golds_token' },
    { id: 5, platform: 'Discord', icon: '💬', points: 150, completed: false, url: 'https://discord.gg/golds', followers: 'GOLDS Community' },
    { id: 6, platform: 'YouTube', icon: '▶️', points: 150, completed: false, url: 'https://youtube.com/@golds_token', followers: '@golds_token' },
  ])

  const [bonusTasks, setBonusTasks] = useState([
    { id: 7, task: 'Share on Twitter', icon: '🔄', points: 200, completed: false },
    { id: 8, task: 'Invite 3 Friends', icon: '👥', points: 300, completed: false },
    { id: 9, task: 'Complete KYC', icon: '✅', points: 500, completed: false },
  ])

  const [userStats, setUserStats] = useState({
    rank: 847,
    points: 0,
    referrals: 0,
    whitelisted: false
  })

  const [walletAddress, setWalletAddress] = useState('')
  const [referralCode, setReferralCode] = useState('GOLDS-' + Math.random().toString(36).substr(2, 6).toUpperCase())
  const [copied, setCopied] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 23,
    minutes: 45,
    seconds: 30
  })

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const totalPoints = tasks.reduce((sum, task) => sum + (task.completed ? task.points : 0), 0) +
                     bonusTasks.reduce((sum, task) => sum + (task.completed ? task.points : 0), 0)
  
  const progress = (totalPoints / 1600) * 100
  const requiredPoints = 800

  const handleTaskComplete = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: true } : task
    ))
  }

  const handleBonusTaskComplete = (taskId: number) => {
    setBonusTasks(bonusTasks.map(task => 
      task.id === taskId ? { ...task, completed: true } : task
    ))
  }

  const copyReferralCode = () => {
    navigator.clipboard.writeText(`https://golds.io/whitelist?ref=${referralCode}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const leaderboard = [
    { rank: 1, address: '0x742d...35c89', points: 2400, avatar: '👑' },
    { rank: 2, address: '0x8f3a...7b2d4', points: 2100, avatar: '🥈' },
    { rank: 3, address: '0x5c9e...4f8a1', points: 1950, avatar: '🥉' },
    { rank: 4, address: '0x2a7b...9c3e5', points: 1800, avatar: '⭐' },
    { rank: 5, address: '0x9d4f...6e1a2', points: 1650, avatar: '💎' },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-amber-500/10 rounded-full mb-6 border border-amber-500/20 backdrop-blur-sm animate-pulse">
              <Flame className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-400 font-semibold tracking-wider uppercase">Whitelist Open</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-white">
              Join the Presale Whitelist
            </h1>
            
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Complete tasks, earn points, and secure your spot for exclusive presale access with bonus tokens
            </p>

            {/* Countdown */}
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-red-500/10 rounded-full border border-red-500/30 mb-8">
              <Clock className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-400 font-semibold">
                Whitelist Closes in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </span>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-xl p-4 border border-gray-700/50">
                <Users className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">12,847</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Whitelisted</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-xl p-4 border border-gray-700/50">
                <Trophy className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">{totalPoints}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Your Points</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-xl p-4 border border-gray-700/50">
                <Gift className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">+25%</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Bonus Tokens</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-xl p-4 border border-gray-700/50">
                <Target className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">{requiredPoints}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Points Needed</p>
              </div>
            </div>
          </div>

          {/* Main Content - 2 Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Tasks (2/3 width) */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Progress Card */}
              <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Your Progress</h3>
                    {totalPoints >= requiredPoints ? (
                      <span className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-sm text-green-400 font-semibold flex items-center space-x-2">
                        <Check className="w-4 h-4" />
                        <span>Qualified!</span>
                      </span>
                    ) : (
                      <span className="text-sm text-gray-400">{totalPoints} / {requiredPoints} points</span>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden mb-3">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 transition-all duration-500 relative"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      {totalPoints >= requiredPoints 
                        ? '🎉 You are whitelisted! Complete bonus tasks for higher allocation.'
                        : `${requiredPoints - totalPoints} more points needed to qualify`
                      }
                    </p>
                  </div>

                  {/* Level System */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className={`p-3 rounded-lg border-2 ${totalPoints >= 800 ? 'bg-amber-500/20 border-amber-500' : 'bg-gray-800/50 border-gray-700'}`}>
                      <Crown className={`w-5 h-5 mb-1 ${totalPoints >= 800 ? 'text-amber-400' : 'text-gray-500'}`} />
                      <p className="text-xs font-semibold text-white">Bronze</p>
                      <p className="text-xs text-gray-400">800+ pts</p>
                    </div>
                    <div className={`p-3 rounded-lg border-2 ${totalPoints >= 1200 ? 'bg-blue-500/20 border-blue-500' : 'bg-gray-800/50 border-gray-700'}`}>
                      <Star className={`w-5 h-5 mb-1 ${totalPoints >= 1200 ? 'text-blue-400' : 'text-gray-500'}`} />
                      <p className="text-xs font-semibold text-white">Silver</p>
                      <p className="text-xs text-gray-400">1200+ pts</p>
                    </div>
                    <div className={`p-3 rounded-lg border-2 ${totalPoints >= 1600 ? 'bg-purple-500/20 border-purple-500' : 'bg-gray-800/50 border-gray-700'}`}>
                      <Sparkles className={`w-5 h-5 mb-1 ${totalPoints >= 1600 ? 'text-purple-400' : 'text-gray-500'}`} />
                      <p className="text-xs font-semibold text-white">Gold</p>
                      <p className="text-xs text-gray-400">1600+ pts</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Tasks */}
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Follow Our Socials</h3>
                  <span className="text-sm text-gray-400">{tasks.filter(t => t.completed).length}/{tasks.length} completed</span>
                </div>
                
                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div 
                      key={task.id}
                      className={`group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-4 border transition-all ${
                        task.completed 
                          ? 'border-green-500/50 bg-green-500/5' 
                          : 'border-gray-700/50 hover:border-amber-500/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                            task.completed ? 'bg-green-500/20' : 'bg-gray-800/50'
                          }`}>
                            {task.completed ? '✅' : task.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-white">{task.platform}</h4>
                            <p className="text-sm text-gray-400">{task.followers}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-right">
                            <p className="text-amber-400 font-bold">+{task.points}</p>
                            <p className="text-xs text-gray-500">points</p>
                          </div>
                          {task.completed ? (
                            <div className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                              <Check className="w-5 h-5 text-green-400" />
                            </div>
                          ) : (
                            <a
                              href={task.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => handleTaskComplete(task.id)}
                              className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-lg font-semibold text-sm transition-all flex items-center space-x-2"
                            >
                              <span>Follow</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bonus Tasks */}
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold text-white">Bonus Tasks</h3>
                  </div>
                  <span className="text-sm text-purple-400">Extra rewards!</span>
                </div>
                
                <div className="space-y-3">
                  {bonusTasks.map((task) => (
                    <div 
                      key={task.id}
                      className={`group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-4 border transition-all ${
                        task.completed 
                          ? 'border-purple-500/50 bg-purple-500/5' 
                          : 'border-gray-700/50 hover:border-purple-500/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                            task.completed ? 'bg-purple-500/20' : 'bg-gray-800/50'
                          }`}>
                            {task.completed ? '✅' : task.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-white">{task.task}</h4>
                            <p className="text-sm text-gray-400">Earn bonus points</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-right">
                            <p className="text-purple-400 font-bold">+{task.points}</p>
                            <p className="text-xs text-gray-500">points</p>
                          </div>
                          {task.completed ? (
                            <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/50 flex items-center justify-center">
                              <Check className="w-5 h-5 text-purple-400" />
                            </div>
                          ) : (
                            <button
                              onClick={() => handleBonusTaskComplete(task.id)}
                              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg font-semibold text-sm transition-all"
                            >
                              Complete
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Info & Leaderboard (1/3 width) */}
            <div className="space-y-6">
              
              {/* Wallet Connection */}
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 sticky top-24">
                <h3 className="text-lg font-bold text-white mb-4">Connect Wallet</h3>
                <input
                  type="text"
                  placeholder="0x..."
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="w-full bg-gray-900/70 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-amber-500 transition-all mb-3"
                />
                <button className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-xl font-bold transition-all">
                  Connect Wallet
                </button>
              </div>

              {/* Referral */}
              <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30">
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-bold text-white">Refer & Earn</h3>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Get <span className="text-blue-400 font-bold">300 points</span> for each friend!
                </p>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={`golds.io/wl?ref=${referralCode}`}
                    readOnly
                    className="flex-1 bg-gray-900/70 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white outline-none"
                  />
                  <button
                    onClick={copyReferralCode}
                    className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
                  >
                    {copied ? <Check className="w-5 h-5 text-white" /> : <Copy className="w-5 h-5 text-white" />}
                  </button>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-green-900/20 to-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30">
                <div className="flex items-center space-x-2 mb-4">
                  <Gift className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-bold text-white">Whitelist Benefits</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-300">+25% bonus tokens on purchase</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-300">Exclusive early access (24h)</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-300">Higher allocation priority</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-300">Special NFT airdrop</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-300">VIP community access</p>
                  </div>
                </div>
              </div>

              {/* Leaderboard */}
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
                <div className="flex items-center space-x-2 mb-4">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-bold text-white">Top Contributors</h3>
                </div>
                <div className="space-y-3">
                  {leaderboard.map((user) => (
                    <div 
                      key={user.rank}
                      className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{user.avatar}</span>
                        <div>
                          <p className="text-sm font-bold text-white">#{user.rank}</p>
                          <p className="text-xs text-gray-400">{user.address}</p>
                        </div>
                      </div>
                      <p className="text-sm font-bold text-amber-400">{user.points}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
