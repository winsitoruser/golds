'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Wallet, TrendingUp, Users, Copy, Check, ExternalLink, 
  Award, Clock, Zap, DollarSign, Activity, Gift, 
  ArrowUpRight, ArrowDownRight, RefreshCw 
} from 'lucide-react'

export default function DashboardPage() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress] = useState('0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb')
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  const referralLink = `https://golds.io/ref/${walletAddress.slice(0, 8)}`

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const userStats = {
    totalStaked: 45000,
    totalRewards: 3842.50,
    activeStakes: 3,
    referralEarnings: 1250.00,
    totalReferrals: 12,
    availableBalance: 15234.75
  }

  const activeStakes = [
    {
      pool: 'Flexible Mining',
      amount: 10000,
      apy: 12,
      rewards: 384.50,
      startDate: '2024-11-01',
      status: 'active',
      icon: '⚡'
    },
    {
      pool: '30-Day Excavation',
      amount: 15000,
      apy: 25,
      rewards: 900.00,
      startDate: '2024-11-10',
      unlockDate: '2024-12-10',
      status: 'locked',
      icon: '⛏️'
    },
    {
      pool: '90-Day Deep Mine',
      amount: 20000,
      apy: 45,
      rewards: 2558.00,
      startDate: '2024-10-15',
      unlockDate: '2025-01-13',
      status: 'locked',
      icon: '🏔️'
    }
  ]

  const recentTransactions = [
    { type: 'stake', amount: 15000, pool: '30-Day', time: '2 hours ago', status: 'completed' },
    { type: 'claim', amount: 384.50, pool: 'Flexible', time: '1 day ago', status: 'completed' },
    { type: 'referral', amount: 125.00, from: '0x8a5...6b2', time: '3 days ago', status: 'completed' },
    { type: 'unstake', amount: 5000, pool: 'Flexible', time: '5 days ago', status: 'completed' }
  ]

  const referrals = [
    { address: '0x8a5...6b2', earned: 450, stakes: 3, joined: '2024-10-15' },
    { address: '0x3d2...8f1', earned: 320, stakes: 2, joined: '2024-10-20' },
    { address: '0x9e4...2a3', earned: 280, stakes: 2, joined: '2024-10-25' },
    { address: '0x7c1...5d4', earned: 200, stakes: 1, joined: '2024-11-01' }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-24 pb-20 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(251, 191, 36, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.05) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

        <div className="container mx-auto relative z-10 max-w-7xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-white">
                Dashboard
              </h1>
              <p className="text-gray-400">Welcome back to your GOLDS staking dashboard</p>
            </div>
            
            {!walletConnected ? (
              <button
                onClick={() => setWalletConnected(true)}
                className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-xl font-bold transition-all hover:shadow-xl hover:shadow-amber-500/30 flex items-center space-x-2"
              >
                <Wallet className="w-5 h-5" />
                <span>Connect Wallet</span>
              </button>
            ) : (
              <div className="mt-4 md:mt-0 flex items-center space-x-3">
                <div className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-mono text-gray-300">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 cursor-pointer hover:text-amber-400" />
                </div>
                <button className="p-2 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-700/50 transition-all">
                  <RefreshCw className="w-5 h-5 text-gray-400 hover:text-amber-400" />
                </button>
              </div>
            )}
          </div>

          {walletConnected ? (
            <>
              {/* Stats Overview */}
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
                <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-5 border border-gray-700/50 hover:border-amber-500/50 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-transparent rounded-2xl transition-all"></div>
                  <div className="relative">
                    <Wallet className="w-5 h-5 text-amber-400 mb-2" />
                    <p className="text-2xl font-bold text-white">{userStats.totalStaked.toLocaleString()}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Total Staked</p>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-5 border border-gray-700/50 hover:border-green-500/50 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-transparent rounded-2xl transition-all"></div>
                  <div className="relative">
                    <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                    <p className="text-2xl font-bold text-white">{userStats.totalRewards.toLocaleString()}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Total Rewards</p>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-5 border border-gray-700/50 hover:border-blue-500/50 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent rounded-2xl transition-all"></div>
                  <div className="relative">
                    <Activity className="w-5 h-5 text-blue-400 mb-2" />
                    <p className="text-2xl font-bold text-white">{userStats.activeStakes}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Active Stakes</p>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-5 border border-gray-700/50 hover:border-purple-500/50 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent rounded-2xl transition-all"></div>
                  <div className="relative">
                    <Gift className="w-5 h-5 text-purple-400 mb-2" />
                    <p className="text-2xl font-bold text-white">{userStats.referralEarnings.toLocaleString()}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Referral Earnings</p>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-5 border border-gray-700/50 hover:border-cyan-500/50 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-transparent rounded-2xl transition-all"></div>
                  <div className="relative">
                    <Users className="w-5 h-5 text-cyan-400 mb-2" />
                    <p className="text-2xl font-bold text-white">{userStats.totalReferrals}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Total Referrals</p>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-5 border border-gray-700/50 hover:border-yellow-500/50 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/10 group-hover:to-transparent rounded-2xl transition-all"></div>
                  <div className="relative">
                    <Zap className="w-5 h-5 text-yellow-400 mb-2" />
                    <p className="text-2xl font-bold text-white">{userStats.availableBalance.toLocaleString()}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Available Balance</p>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex space-x-2 mb-6 border-b border-gray-800">
                {[
                  { id: 'overview', label: 'Overview', icon: Activity },
                  { id: 'stakes', label: 'My Stakes', icon: Wallet },
                  { id: 'referrals', label: 'Referrals', icon: Users },
                  { id: 'transactions', label: 'History', icon: Clock }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-3 font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'text-amber-400 border-b-2 border-amber-500'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Active Stakes */}
                  <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Wallet className="w-5 h-5 mr-2 text-amber-400" />
                      Active Stakes
                    </h3>
                    <div className="space-y-3">
                      {activeStakes.map((stake, idx) => (
                        <div key={idx} className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-amber-500/30 transition-all">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl">{stake.icon}</span>
                              <div>
                                <p className="font-semibold text-white text-sm">{stake.pool}</p>
                                <p className="text-xs text-gray-500">{stake.amount.toLocaleString()} GOLDS</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-bold text-green-400">{stake.apy}% APY</p>
                              <p className="text-xs text-gray-500">{stake.status}</p>
                            </div>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Rewards:</span>
                            <span className="text-amber-400 font-semibold">+{stake.rewards.toLocaleString()} GOLDS</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-blue-400" />
                      Recent Activity
                    </h3>
                    <div className="space-y-3">
                      {recentTransactions.slice(0, 5).map((tx, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-xl">
                          <div className="flex items-center space-x-3">
                            {tx.type === 'stake' && <ArrowUpRight className="w-4 h-4 text-green-400" />}
                            {tx.type === 'unstake' && <ArrowDownRight className="w-4 h-4 text-red-400" />}
                            {tx.type === 'claim' && <Award className="w-4 h-4 text-amber-400" />}
                            {tx.type === 'referral' && <Users className="w-4 h-4 text-purple-400" />}
                            <div>
                              <p className="text-sm font-semibold text-white capitalize">{tx.type}</p>
                              <p className="text-xs text-gray-500">{tx.time}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-white">{tx.amount.toLocaleString()} GOLDS</p>
                            <p className="text-xs text-gray-500">{tx.pool || tx.from}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Referrals Tab */}
              {activeTab === 'referrals' && (
                <div className="space-y-6">
                  {/* Referral Link */}
                  <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 border border-amber-500/20 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Gift className="w-5 h-5 mr-2 text-amber-400" />
                      Your Referral Link
                    </h3>
                    <div className="flex items-center space-x-3">
                      <input
                        type="text"
                        value={referralLink}
                        readOnly
                        className="flex-1 px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-xl text-white font-mono text-sm"
                      />
                      <button
                        onClick={copyReferralLink}
                        className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-semibold transition-all flex items-center space-x-2"
                      >
                        {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        <span>{copied ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                    <p className="text-sm text-gray-400 mt-3">Earn 10% commission from all your referrals' staking rewards!</p>
                  </div>

                  {/* Referral Stats */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
                      <Users className="w-6 h-6 text-cyan-400 mb-2" />
                      <p className="text-3xl font-bold text-white mb-1">{userStats.totalReferrals}</p>
                      <p className="text-sm text-gray-400">Total Referrals</p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
                      <DollarSign className="w-6 h-6 text-purple-400 mb-2" />
                      <p className="text-3xl font-bold text-white mb-1">{userStats.referralEarnings.toLocaleString()}</p>
                      <p className="text-sm text-gray-400">Total Earned</p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
                      <Award className="w-6 h-6 text-amber-400 mb-2" />
                      <p className="text-3xl font-bold text-white mb-1">10%</p>
                      <p className="text-sm text-gray-400">Commission Rate</p>
                    </div>
                  </div>

                  {/* Referral List */}
                  <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
                    <h3 className="text-xl font-bold text-white mb-4">Your Referrals</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-700/50">
                            <th className="text-left py-3 px-3 text-xs text-gray-400 font-semibold uppercase">Address</th>
                            <th className="text-left py-3 px-3 text-xs text-gray-400 font-semibold uppercase">Earned</th>
                            <th className="text-left py-3 px-3 text-xs text-gray-400 font-semibold uppercase">Stakes</th>
                            <th className="text-left py-3 px-3 text-xs text-gray-400 font-semibold uppercase">Joined</th>
                          </tr>
                        </thead>
                        <tbody>
                          {referrals.map((ref, idx) => (
                            <tr key={idx} className="border-b border-gray-800/30 hover:bg-amber-500/5 transition-colors">
                              <td className="py-3 px-3 font-mono text-sm text-white">{ref.address}</td>
                              <td className="py-3 px-3 text-purple-400 font-semibold">{ref.earned} GOLDS</td>
                              <td className="py-3 px-3 text-gray-400">{ref.stakes}</td>
                              <td className="py-3 px-3 text-gray-400 text-sm">{ref.joined}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-full flex items-center justify-center mb-6">
                <Wallet className="w-12 h-12 text-amber-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Connect Your Wallet</h2>
              <p className="text-gray-400 mb-6 text-center max-w-md">
                Connect your wallet to access your dashboard and start managing your GOLDS stakes
              </p>
              <button
                onClick={() => setWalletConnected(true)}
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-xl font-bold transition-all hover:shadow-xl hover:shadow-amber-500/30"
              >
                Connect Wallet
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
