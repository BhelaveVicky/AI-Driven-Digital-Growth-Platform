import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  X, 
  Sparkles, 
  BarChart3, 
  Sword, 
  Bot, 
  FileText, 
  CreditCard, 
  Users, 
  PhoneCall, 
  ArrowRight,
  TrendingUp,
  Zap
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function AiSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (!isOpen) return null;

  const tools = [
    {
      title: 'Free AI Business Audit',
      description: 'Scan your local business digital presence, website speed, and local SEO score.',
      category: 'Diagnostics',
      path: '/analysis',
      icon: BarChart3,
      badge: 'Popular',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Competitor Edge Analyzer',
      description: 'Analyze local area competitors, compare market share and winning keywords.',
      category: 'Intelligence',
      path: '/competitor',
      icon: Sword,
      badge: 'AI Powered',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: '24/7 AI Growth Strategy Chatbot',
      description: 'Ask anything about digital marketing, lead generation, and business automation.',
      category: 'AI Chat',
      path: '/chat',
      icon: Bot,
      badge: 'Live',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Full Audit PDF Report',
      description: 'View and download detailed business growth reports with actionable roadmaps.',
      category: 'Diagnostics',
      path: '/report',
      icon: FileText,
      badge: 'Instant PDF',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Growth Pricing Plans',
      description: 'Compare Basic, Standard, and Premium packages with transparent ROI pricing.',
      category: 'Plans',
      path: '/pricing',
      icon: CreditCard,
      badge: 'Affordable',
      color: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Referral & Earnings Program',
      description: 'Earn ₹1,000 per referral by recommending AI growth tools to local business owners.',
      category: 'Earnings',
      path: '/referral',
      icon: Users,
      badge: 'Earn ₹1k',
      color: 'from-rose-500 to-red-600'
    },
    {
      title: 'Expert Consultation & WhatsApp',
      description: 'Get in touch with our digital strategists via phone, email, or instant WhatsApp.',
      category: 'Support',
      path: '/contact',
      icon: PhoneCall,
      badge: '24/7',
      color: 'from-emerald-600 to-green-500'
    }
  ];

  const categories = ['All', 'Diagnostics', 'Intelligence', 'AI Chat', 'Plans', 'Earnings'];

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesQuery = tool.title.toLowerCase().includes(query.toLowerCase()) || 
                         tool.description.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className={`w-full max-w-2xl border rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isDark 
            ? 'bg-slate-900 border-slate-800 text-white' 
            : 'bg-white border-slate-200 text-slate-900 shadow-slate-900/20'
        }`}
      >
        {/* Search Header Input */}
        <div className={`p-4 sm:p-5 border-b flex items-center gap-3 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
          <Search className="w-5 h-5 text-indigo-500 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search AI tools, reports, competitor audit, pricing..."
            className={`w-full bg-transparent text-base focus:outline-none placeholder:text-slate-400 font-medium ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
            autoFocus
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 text-xs font-bold px-1.5 py-0.5 rounded bg-slate-800/40"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className={`p-1.5 rounded-xl border transition-colors ${
              isDark ? 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-500 hover:text-slate-900'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filter Chips */}
        <div className={`px-4 sm:px-5 py-3 border-b flex items-center gap-2 overflow-x-auto no-scrollbar ${
          isDark ? 'border-slate-800 bg-slate-950/40' : 'border-slate-100 bg-slate-50'
        }`}>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1 flex items-center gap-1">
            <Zap className="w-3 h-3 text-indigo-500" /> Filters:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : isDark
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-slate-200/80 text-slate-700 hover:bg-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-3 sm:p-4 space-y-2">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.title}
                  onClick={() => handleSelect(tool.path)}
                  className={`group p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isDark 
                      ? 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-800/90 hover:border-indigo-500/40' 
                      : 'bg-white border-slate-200/90 hover:bg-indigo-50/60 hover:border-indigo-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${tool.color} text-white flex items-center justify-center shrink-0 shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className={`text-sm font-bold truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {tool.title}
                        </h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 shrink-0">
                          {tool.badge}
                        </span>
                      </div>
                      <p className={`text-xs truncate ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {tool.description}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center space-y-2">
              <Sparkles className="w-8 h-8 text-indigo-500 mx-auto animate-bounce" />
              <p className={`text-sm font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                No matching AI tools found
              </p>
              <p className="text-xs text-slate-500">
                Try searching for "audit", "competitor", "pricing", or "report".
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className={`p-3 border-t text-center text-[11px] font-medium flex items-center justify-between px-5 ${
          isDark ? 'border-slate-800 bg-slate-950/80 text-slate-400' : 'border-slate-200 bg-slate-50 text-slate-500'
        }`}>
          <span className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-indigo-500" />
            GrowthAI PRO Intelligence Suite
          </span>
          <span className="hidden sm:inline-block">
            Press <kbd className="px-1.5 py-0.5 bg-slate-700/40 rounded text-[10px]">ESC</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
}
