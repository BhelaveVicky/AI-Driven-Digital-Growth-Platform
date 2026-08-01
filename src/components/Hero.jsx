import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Bot, 
  Globe, 
  BarChart2, 
  Zap, 
  TrendingUp
} from 'lucide-react';

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`relative pt-6 pb-12 md:pt-8 md:pb-20 overflow-hidden transition-colors duration-300 ${
      isDark ? 'gradient-bg' : 'bg-gradient-to-b from-indigo-50/80 via-blue-50/40 to-slate-50'
    }`}>
      {/* Radial background glows */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? 'bg-indigo-600/15' : 'bg-indigo-400/20'
      }`} />
      <div className={`absolute top-1/3 right-10 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none ${
        isDark ? 'bg-cyan-500/10' : 'bg-cyan-400/20'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold uppercase tracking-wider backdrop-blur-md ${
              isDark 
                ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300' 
                : 'bg-indigo-100 border-indigo-200 text-indigo-700 shadow-sm'
            }`}>
              <Sparkles className="w-4 h-4 text-indigo-500 animate-pulse" />
              <span>Next-Gen AI Growth Engine for Small Business</span>
            </div>

            {/* Title */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              AI-Driven Digital <br className="hidden sm:inline" />
              <span className="gradient-text">Growth Platform</span>
            </h1>

            {/* Description */}
            <p className={`text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Helping small businesses grow with AI, website development and digital marketing. Unlock tailored business insights, higher customer conversions, and automated growth strategies.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/analysis"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-base"
              >
                <Sparkles className="w-5 h-5 text-cyan-200" />
                Start Free Analysis
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/pricing"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold transition-all duration-200 text-base border shadow-sm ${
                  isDark 
                    ? 'text-slate-200 bg-slate-800/80 hover:bg-slate-800 border-slate-700/80 hover:text-white' 
                    : 'text-slate-700 bg-white hover:bg-slate-100 border-slate-300 hover:text-slate-900'
                }`}
              >
                View Pricing Plans
              </Link>
            </div>

            {/* Value bullets */}
            <div className={`pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm font-medium ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Instant AI Audit Report</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Earn ₹1000/Referral</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Mockup / Dashboard Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur-lg opacity-30 animate-pulse" />

              {/* Glass / Card Box */}
              <div className={`relative rounded-2xl p-6 space-y-6 shadow-2xl border transition-colors ${
                isDark 
                  ? 'glass-card border-slate-700/70' 
                  : 'bg-white/95 border-slate-200 text-slate-800 shadow-xl'
              }`}>
                
                {/* Header inside mockup */}
                <div className={`flex items-center justify-between border-b pb-4 ${
                  isDark ? 'border-slate-800' : 'border-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-indigo-500" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        AI Diagnostic Engine
                      </h4>
                      <p className="text-xs text-emerald-500 flex items-center gap-1 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        Live Business Scanner Active
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-500/20 font-semibold">
                    AI v2.5
                  </span>
                </div>

                {/* Score meters */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className={`flex items-center gap-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        <Globe className="w-3.5 h-3.5 text-blue-500" /> Digital Presence Score
                      </span>
                      <span className="text-cyan-500 font-bold">88/100 (Strong)</span>
                    </div>
                    <div className={`w-full rounded-full h-2 overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full w-[88%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className={`flex items-center gap-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        <BarChart2 className="w-3.5 h-3.5 text-purple-500" /> Competitor Edge
                      </span>
                      <span className="text-purple-500 font-bold">Top 12% in Area</span>
                    </div>
                    <div className={`w-full rounded-full h-2 overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full w-[82%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className={`flex items-center gap-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        <Zap className="w-3.5 h-3.5 text-amber-500" /> Customer Lead Potential
                      </span>
                      <span className="text-amber-500 font-bold">+3.4x Revenue</span>
                    </div>
                    <div className={`w-full rounded-full h-2 overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                      <div className="bg-gradient-to-r from-amber-500 to-emerald-400 h-2 rounded-full w-[94%]" />
                    </div>
                  </div>
                </div>

                {/* Floating highlight */}
                <div className={`rounded-xl p-3.5 border flex items-center justify-between text-xs ${
                  isDark 
                    ? 'bg-slate-900/90 border-slate-800' 
                    : 'bg-slate-100 border-slate-200'
                }`}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Recommended Action
                      </p>
                      <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Deploy AI WhatsApp Chatbot & SEO Web
                      </p>
                    </div>
                  </div>
                  <Link 
                    to="/analysis" 
                    className="text-indigo-500 font-bold hover:text-indigo-600 hover:underline shrink-0"
                  >
                    Run Audit →
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
