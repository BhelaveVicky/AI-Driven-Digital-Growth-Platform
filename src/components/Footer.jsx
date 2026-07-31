import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Sparkles,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                AI Growth <span className="gradient-text">Platform</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering local business owners with cutting-edge AI business diagnostics, bespoke modern web development, and ROI-driven digital marketing.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Free AI Audit
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                <Zap className="w-4 h-4 text-amber-400" />
                24/7 Growth Support
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Platform Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition-colors inline-flex items-center gap-1">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/analysis" className="hover:text-indigo-400 transition-colors inline-flex items-center gap-1">
                  AI Business Analysis
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-indigo-400 transition-colors inline-flex items-center gap-1">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/referral" className="hover:text-indigo-400 transition-colors inline-flex items-center gap-1">
                  Referral Partner Program
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-400 transition-colors inline-flex items-center gap-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Growth Solutions</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                AI Business Diagnostic
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                High-Converting Websites
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                Digital Marketing & SEO
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-purple-400" />
                Competitor Strategy Audit
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Get In Touch</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                <span>growth@aistudio.dev</span>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                <span>Tech Innovation Hub, Mumbai & Bangalore, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} AI-Driven Digital Growth Platform. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/analysis" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/pricing" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link to="/referral" className="hover:text-slate-300 transition-colors">Affiliate Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
