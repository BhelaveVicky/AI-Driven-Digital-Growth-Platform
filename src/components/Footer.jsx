import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { 
  TrendingUp, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Zap,
  Sparkles,
  Globe,
  Megaphone,
  LineChart
} from 'lucide-react';

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      hoverColor: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919876543210',
      hoverColor: 'hover:text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/30',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      hoverColor: 'hover:text-[#FF0000] hover:bg-[#FF0000]/10 hover:border-[#FF0000]/30',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      hoverColor: 'hover:text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      hoverColor: 'hover:text-[#E4405F] hover:bg-[#E4405F]/10 hover:border-[#E4405F]/30',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className={`border-t transition-colors duration-300 pt-16 pb-12 relative ${
      isDark 
        ? 'bg-slate-950 border-slate-800/80 text-slate-400' 
        : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 COLUMNS GRID AS SHOWN IN SCREENSHOT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 text-center md:text-left">
          
          {/* COLUMN 1: BRAND OVERVIEW */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 p-0.5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-500/20">
                <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
                  <TrendingUp className="w-4 h-4 text-indigo-500 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
              <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                AI Growth <span className="gradient-text">Platform</span>
              </span>
            </Link>

            <p className={`text-xs leading-relaxed max-w-sm md:max-w-none ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Empowering local business owners with cutting-edge AI business diagnostics, bespoke modern web development, and ROI-driven digital marketing.
            </p>

            <div className="flex flex-wrap gap-2 pt-1 justify-center md:justify-start">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border text-[11px] font-semibold ${
                isDark 
                  ? 'bg-slate-900 border-emerald-500/30 text-emerald-400' 
                  : 'bg-white border-emerald-500/40 text-emerald-700 shadow-sm'
              }`}>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                100% Free AI Audit
              </span>

              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border text-[11px] font-semibold ${
                isDark 
                  ? 'bg-slate-900 border-amber-500/30 text-amber-400' 
                  : 'bg-white border-amber-500/40 text-amber-700 shadow-sm'
              }`}>
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                24/7 Growth Support
              </span>
            </div>
          </div>

          {/* COLUMN 2: PLATFORM LINKS */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
              PLATFORM LINKS
            </h3>
            <ul className="space-y-2.5 text-xs font-medium flex flex-col items-center md:items-start">
              <li>
                <Link to="/" className={`transition-colors hover:text-indigo-500 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/analysis" className={`transition-colors hover:text-indigo-500 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  AI Business Analysis
                </Link>
              </li>
              <li>
                <Link to="/report" className={`transition-colors hover:text-indigo-500 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  AI Report
                </Link>
              </li>
              <li>
                <Link to="/competitor" className={`transition-colors hover:text-indigo-500 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Competitor Audit
                </Link>
              </li>
              <li>
                <Link to="/chat" className={`transition-colors hover:text-indigo-500 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  AI Chatbot
                </Link>
              </li>
              <li>
                <Link to="/pricing" className={`transition-colors hover:text-indigo-500 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: GROWTH SOLUTIONS */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
              GROWTH SOLUTIONS
            </h3>
            <ul className="space-y-2.5 text-xs font-medium flex flex-col items-center md:items-start">
              <li>
                <Link to="/analysis" className={`flex items-center gap-2 transition-colors hover:text-indigo-500 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                  <span>AI Business Diagnostic</span>
                </Link>
              </li>
              <li>
                <Link to="/pricing" className={`flex items-center gap-2 transition-colors hover:text-indigo-500 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <Globe className="w-3.5 h-3.5 text-cyan-500" />
                  <span>High-Converting Websites</span>
                </Link>
              </li>
              <li>
                <Link to="/pricing" className={`flex items-center gap-2 transition-colors hover:text-indigo-500 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <Megaphone className="w-3.5 h-3.5 text-purple-500" />
                  <span>Digital Marketing & SEO</span>
                </Link>
              </li>
              <li>
                <Link to="/competitor" className={`flex items-center gap-2 transition-colors hover:text-indigo-500 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <LineChart className="w-3.5 h-3.5 text-amber-500" />
                  <span>Competitor Strategy Audit</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: GET IN TOUCH + 5 SOCIAL ICONS BELOW */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
              GET IN TOUCH
            </h3>
            <ul className="space-y-3 text-xs font-medium flex flex-col items-center md:items-start">
              <li>
                <a href="tel:+919876543210" className={`flex items-center gap-2.5 transition-colors hover:text-indigo-500 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <Phone className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a href="mailto:growth@aistudio.dev" className={`flex items-center gap-2.5 transition-colors hover:text-cyan-500 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <Mail className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>growth@aistudio.dev</span>
                </a>
              </li>
              <li className={`flex items-center gap-2.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <MapPin className="w-4 h-4 text-purple-500 shrink-0" />
                <span>Mumbai & Bangalore, India</span>
              </li>
            </ul>

            {/* 5 Social Icons: LinkedIn, WhatsApp, YouTube, Facebook, Instagram */}
            <div className="pt-2 space-y-2 flex flex-col items-center md:items-start">
              <p className={`text-[11px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Follow Us
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className={`w-8 h-8 rounded-lg border transition-all flex items-center justify-center ${
                      isDark 
                        ? 'bg-slate-900 border-slate-800 text-slate-400' 
                        : 'bg-white border-slate-300 text-slate-600 shadow-sm'
                    } ${social.hoverColor}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className={`pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-center md:text-left ${
          isDark ? 'border-slate-800/80 text-slate-500' : 'border-slate-200 text-slate-500'
        }`}>
          <p>© {new Date().getFullYear()} AI-Driven Digital Growth Platform. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 font-medium">
            <Link to="/analysis" className="hover:text-indigo-500 transition-colors">Privacy Policy</Link>
            <Link to="/pricing" className="hover:text-indigo-500 transition-colors">Terms of Service</Link>
            <Link to="/referral" className="hover:text-indigo-500 transition-colors">Affiliate Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
