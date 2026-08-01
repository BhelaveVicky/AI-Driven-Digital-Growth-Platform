import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Users, 
  Gift, 
  Copy, 
  Check, 
  Wallet, 
  Bot, 
  ShieldCheck, 
  Zap, 
  Share2
} from 'lucide-react';

export default function Referral() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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

  const inputClasses = `w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
    isDark 
      ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500' 
      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
  }`;

  const labelClasses = `block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`;

  return (
    <div className={`min-h-screen pt-6 pb-16 md:pt-8 md:pb-20 transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero */}
        <div className="text-center space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider ${
            isDark ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
          }`}>
            <Gift className="w-4 h-4" />
            Zero Investment - High Reward Program
          </div>
          
          <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Earn <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">₹1,000 Cash</span> Per Successful Sale
          </h1>

          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Refer small business owners who need a website, AI chatbot, or digital marketing. Get instant payout for every activated client.
          </p>
        </div>

        {/* 4 Pillars Highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className={`border p-6 rounded-2xl space-y-3 transition-colors ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
          }`}>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold">
              ₹1K
            </div>
            <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>Earn ₹1,000 per Sale</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              No cap on earnings. Refer 10 businesses a month and earn ₹10,000 directly to your UPI/Bank.
            </p>
          </div>

          <div className={`border p-6 rounded-2xl space-y-3 transition-colors ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
          }`}>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-500 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>No Qualification Required</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Open to students, freelancers, consultants, or anyone wanting passive side income.
            </p>
          </div>

          <div className={`border p-6 rounded-2xl space-y-3 transition-colors ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
          }`}>
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-500 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>AI Guidance Support</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Get ready-made pitch scripts, AI proposal templates, and WhatsApp messages to share easily.
            </p>
          </div>

          <div className={`border p-6 rounded-2xl space-y-3 transition-colors ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
          }`}>
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-500 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>Instant Payouts</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Direct Bank/UPI transfer within 24 hours of client onboarding completion.
            </p>
          </div>
        </div>

        {/* Earnings Calculator & Registration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Interactive Calculator */}
          <div className={`lg:col-span-6 border rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl transition-colors ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200/50'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Interactive Earnings Calculator
                </h3>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Estimate how much passive income you can generate monthly.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex justify-between items-center text-sm">
                <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Successful Monthly Referrals:
                </span>
                <span className="text-emerald-500 font-extrabold text-lg">{referralCount} Businesses</span>
              </div>

              <input
                type="range"
                min="1"
                max="50"
                value={referralCount}
                onChange={(e) => setReferralCount(parseInt(e.target.value))}
                className="w-full accent-emerald-500 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
              />

              <div className={`p-6 rounded-2xl border text-center space-y-2 ${
                isDark ? 'bg-slate-950 border-slate-800/80' : 'bg-slate-50 border-slate-200'
              }`}>
                <p className={`text-xs uppercase tracking-widest font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Estimated Monthly Income
                </p>
                <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                  ₹{calculateEarnings().toLocaleString('en-IN')}
                </p>
                <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  Based on ₹1,000 commission per closed account
                </p>
              </div>
            </div>
          </div>

          {/* Join Form */}
          <div className={`lg:col-span-6 border rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl transition-colors ${
            isDark ? 'bg-slate-900 border-indigo-500/30' : 'bg-white border-slate-200 shadow-slate-200/50'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-500 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Join Referral Program
                </h3>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Instant registration - Get your custom link in seconds.
                </p>
              </div>
            </div>

            {joined ? (
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 text-xs font-semibold">
                  🎉 Welcome onboard, {partnerName}! Your referral link is generated below.
                </div>

                <div className="space-y-2">
                  <label className={labelClasses}>Your Unique Referral Link</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      readOnly
                      value={sampleLink}
                      className={inputClasses}
                    />
                    <button
                      onClick={handleCopy}
                      className="px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 shrink-0"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Hey! If you want to grow your business online with AI website & marketing, check this out: ${sampleLink}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                  >
                    <Share2 className="w-4 h-4" />
                    Share on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleJoin} className="space-y-4">
                <div>
                  <label className={labelClasses}>Full Name *</label>
                  <input
                    type="text"
                    required
                    value={partnerName}
                    onChange={(e) => setPartnerName(e.target.value)}
                    placeholder="e.g. Vikram Singh"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className={labelClasses}>Email Address *</label>
                  <input
                    type="email"
                    required
                    value={partnerEmail}
                    onChange={(e) => setPartnerEmail(e.target.value)}
                    placeholder="e.g. vikram@example.com"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className={labelClasses}>Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={partnerPhone}
                    onChange={(e) => setPartnerPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className={inputClasses}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:opacity-95 shadow-lg shadow-emerald-600/20 text-sm cursor-pointer"
                >
                  Generate My Referral Link
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
