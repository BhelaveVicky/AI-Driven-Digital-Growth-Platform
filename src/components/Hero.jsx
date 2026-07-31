import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Bot, 
  Globe, 
  BarChart2, 
  Zap, 
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden gradient-bg">
      {/* Radial background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Next-Gen AI Growth Engine for Small Business</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              AI-Driven Digital <br className="hidden sm:inline" />
              <span className="gradient-text">Growth Platform</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:text-white transition-all duration-200 text-base"
              >
                View Pricing Plans
              </Link>
            </div>

            {/* Value bullets */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant AI Audit Report</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Earn ₹1000/Referral</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Mockup / Dashboard Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur-lg opacity-30 animate-pulse" />

              {/* Glass Card Box */}
              <div className="relative glass-card rounded-2xl p-6 space-y-6 shadow-2xl border border-slate-700/70">
                
                {/* Header inside mockup */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">AI Diagnostic Engine</h4>
                      <p className="text-xs text-emerald-400 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        Live Business Scanner Active
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-500/30">
                    AI v2.5
                  </span>
                </div>

                {/* Score meters */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-blue-400" /> Digital Presence Score
                      </span>
                      <span className="text-cyan-400">88/100 (Strong)</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full w-[88%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        <BarChart2 className="w-3.5 h-3.5 text-purple-400" /> Competitor Edge
                      </span>
                      <span className="text-purple-400">Top 12% in Area</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full w-[82%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-400" /> Customer Lead Potential
                      </span>
                      <span className="text-amber-400">+3.4x Revenue</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-500 to-emerald-400 h-2 rounded-full w-[94%]" />
                    </div>
                  </div>
                </div>

                {/* Floating highlight */}
                <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Recommended Action</p>
                      <p className="text-slate-400 text-[11px]">Deploy AI WhatsApp Chatbot & SEO Web</p>
                    </div>
                  </div>
                  <Link 
                    to="/analysis" 
                    className="text-indigo-400 font-bold hover:text-indigo-300 hover:underline shrink-0"
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
