import React, { useState } from 'react';
import { 
  Users, 
  Gift, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  Copy, 
  Check, 
  Wallet, 
  Bot, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Share2
} from 'lucide-react';

export default function Referral() {
  const [copied, setCopied] = useState(false);
  const [referralCount, setReferralCount] = useState(5);
  const [partnerName, setPartnerName] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  const [partnerPhone, setPartnerPhone] = useState('');
  const [joined, setJoined] = useState(false);

  const sampleLink = partnerName 
    ? `https://growth-ai.platform/ref/${partnerName.toLowerCase().replace(/\s+/g, '-')}-1000`
    : 'https://growth-ai.platform/ref/partner-1000';

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleJoin = (e) => {
    e.preventDefault();
    if (partnerName && partnerEmail && partnerPhone) {
      setJoined(true);
    }
  };

  const calculateEarnings = () => referralCount * 1000;

  return (
    <div className="min-h-screen bg-slate-950 pt-28 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Gift className="w-4 h-4" />
            Zero Investment - High Reward Program
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Earn <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">₹1,000 Cash</span> Per Successful Sale
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Refer small business owners who need a website, AI chatbot, or digital marketing. Get instant payout for every activated client.
          </p>
        </div>

        {/* 4 Pillars Highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              ₹1K
            </div>
            <h3 className="font-bold text-white text-lg">Earn ₹1,000 per Sale</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No cap on earnings. Refer 10 businesses a month and earn ₹10,000 directly to your UPI/Bank.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-lg">No Qualification Required</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Open to students, freelancers, consultants, or anyone wanting passive side income.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-lg">AI Guidance Support</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get ready-made pitch scripts, AI proposal templates, and WhatsApp messages to share easily.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-lg">Instant Payouts</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Direct Bank/UPI transfer within 24 hours of client onboarding completion.
            </p>
          </div>
        </div>

        {/* Earnings Calculator & Registration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Interactive Calculator */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Interactive Earnings Calculator</h3>
                <p className="text-xs text-slate-400">Estimate how much passive income you can generate monthly.</p>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-semibold">Successful Monthly Referrals:</span>
                <span className="text-emerald-400 font-extrabold text-lg">{referralCount} Businesses</span>
              </div>

              <input
                type="range"
                min="1"
                max="50"
                value={referralCount}
                onChange={(e) => setReferralCount(parseInt(e.target.value))}
                className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80 text-center space-y-2">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Estimated Monthly Income</p>
                <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  ₹{calculateEarnings().toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-slate-500">Based on ₹1,000 commission per closed account</p>
              </div>
            </div>
          </div>

          {/* Join Form */}
          <div className="lg:col-span-6 bg-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Join Referral Program</h3>
                <p className="text-xs text-slate-400">Instant registration - Get your custom link in seconds.</p>
              </div>
            </div>

            {joined ? (
              <div className="space-y-4 bg-slate-950 p-6 rounded-2xl border border-emerald-500/30 text-center animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Registration Successful!</h4>
                <p className="text-xs text-slate-300">Welcome, <span className="text-indigo-300 font-semibold">{partnerName}</span>! Here is your unique referral link:</p>
                
                <div className="flex items-center gap-2 bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-xs">
                  <input
                    type="text"
                    readOnly
                    value={sampleLink}
                    className="bg-transparent text-slate-300 flex-grow font-mono focus:outline-none"
                  />
                  <button
                    onClick={handleCopy}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold flex items-center gap-1.5 text-xs shrink-0"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copied!' : 'Copy Link'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleJoin} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={partnerName}
                    onChange={(e) => setPartnerName(e.target.value)}
                    placeholder="e.g. Vikram Verma"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={partnerEmail}
                    onChange={(e) => setPartnerEmail(e.target.value)}
                    placeholder="e.g. vikram@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp Mobile / UPI Number *</label>
                  <input
                    type="tel"
                    required
                    value={partnerPhone}
                    onChange={(e) => setPartnerPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-95 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  Join Program & Get Referral Link
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
