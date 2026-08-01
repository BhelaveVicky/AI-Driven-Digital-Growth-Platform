import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import AiSearchModal from './AiSearchModal';
import { 
  Sparkles, 
  Menu, 
  X, 
  TrendingUp, 
  BarChart3, 
  CreditCard, 
  Users, 
  PhoneCall,
  Home as HomeIcon,
  Sword,
  Bot,
  FileText,
  Sun,
  Moon,
  Search
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Analysis', path: '/analysis', icon: BarChart3 },
    { name: 'Report', path: '/report', icon: FileText },
    { name: 'Competitor', path: '/competitor', icon: Sword },
    { name: 'AI Chatbot', path: '/chat', icon: Bot },
    { name: 'Pricing', path: '/pricing', icon: CreditCard },
    { name: 'Referral', path: '/referral', icon: Users },
    { name: 'Contact', path: '/contact', icon: PhoneCall },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? theme === 'dark' 
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-2.5' 
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg py-2.5'
          : theme === 'dark'
            ? 'bg-slate-950/80 backdrop-blur-sm py-3.5'
            : 'bg-white/80 backdrop-blur-sm py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
                <TrendingUp className="w-4 h-4 text-indigo-500 group-hover:text-cyan-400 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold tracking-tight flex items-center gap-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Growth<span className="gradient-text">AI</span>
                <span className="text-[9px] font-semibold tracking-wider bg-indigo-500/10 text-indigo-500 px-1.5 py-0.5 rounded-full border border-indigo-500/20 uppercase">
                  PRO
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden xl:flex items-center gap-1 border rounded-full px-3 py-1 ${
            theme === 'dark' 
              ? 'bg-slate-900/90 border-slate-800/80' 
              : 'bg-slate-100/90 border-slate-200/90'
          }`}>
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    active
                      ? 'text-white bg-indigo-600 shadow-md shadow-indigo-600/30'
                      : theme === 'dark'
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-200/80'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Medium Desktop Compact Nav */}
          <nav className={`hidden md:flex xl:hidden items-center gap-1 border rounded-full px-2 py-1 ${
            theme === 'dark' 
              ? 'bg-slate-900/90 border-slate-800/80' 
              : 'bg-slate-100/90 border-slate-200/90'
          }`}>
            {navLinks.slice(0, 5).map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                    active
                      ? 'text-white bg-indigo-600'
                      : theme === 'dark'
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-600 hover:text-indigo-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Search + Theme Toggle + Free Analysis Button */}
          <div className="flex items-center gap-2">
            
            {/* Quick AI Tools Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                theme === 'dark'
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-indigo-500/40'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:text-indigo-600'
              }`}
              title="Quick Search & Filter AI Tools"
            >
              <Search className="w-3.5 h-3.5 text-indigo-500" />
              <span className="hidden sm:inline-block">Search Tools</span>
            </button>

            {/* Dark / Light Theme Toggle Switch */}
            <button
              onClick={toggleTheme}
              className={`relative w-13 h-7 rounded-full p-0.5 border transition-colors duration-300 flex items-center shrink-0 cursor-pointer ${
                theme === 'dark'
                  ? 'bg-slate-900 border-indigo-500/40 shadow-inner'
                  : 'bg-slate-200 border-slate-300 shadow-inner'
              }`}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle dark or light mode"
            >
              <div
                className={`w-5.5 h-5.5 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 ease-in-out transform ${
                  theme === 'dark'
                    ? 'translate-x-6 bg-indigo-600 text-white'
                    : 'translate-x-0 bg-amber-500 text-white'
                }`}
              >
                {theme === 'dark' ? (
                  <Moon className="w-3.5 h-3.5 text-indigo-100" />
                ) : (
                  <Sun className="w-3.5 h-3.5 text-white" />
                )}
              </div>
            </button>

            {/* Action CTA */}
            <div className="hidden sm:flex items-center gap-2">
              <Link
                to="/analysis"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:opacity-95 shadow-md shadow-indigo-500/20 transition-all hover:scale-[1.02]"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                Free Analysis
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-xl border focus:outline-none ${
                theme === 'dark'
                  ? 'bg-slate-900 border-slate-800 text-slate-200 hover:text-white'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className={`md:hidden border-b px-4 pt-3 pb-6 mt-2 space-y-3 shadow-2xl backdrop-blur-xl ${
          theme === 'dark'
            ? 'bg-slate-900/98 border-slate-800 text-slate-100'
            : 'bg-white/98 border-slate-200 text-slate-900'
        }`}>
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    active
                      ? 'bg-indigo-600/20 text-indigo-500 border border-indigo-500/30'
                      : theme === 'dark'
                        ? 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-indigo-600'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-indigo-500' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800/20 flex flex-col gap-2">
            <div className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold border ${
              theme === 'dark'
                ? 'bg-slate-900 border-indigo-500/30 text-indigo-300'
                : 'bg-slate-100 border-slate-200 text-slate-800'
            }`}>
              <span className="flex items-center gap-2">
                {theme === 'dark' ? <Moon className="w-4 h-4 text-indigo-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
                Appearance
              </span>
              <button
                onClick={toggleTheme}
                className={`relative w-13 h-7 rounded-full p-0.5 border transition-colors duration-300 flex items-center shrink-0 cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-slate-950 border-indigo-500/40'
                    : 'bg-slate-200 border-slate-300'
                }`}
                aria-label="Toggle dark or light mode"
              >
                <div
                  className={`w-5.5 h-5.5 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 ease-in-out transform ${
                    theme === 'dark'
                      ? 'translate-x-6 bg-indigo-600 text-white'
                      : 'translate-x-0 bg-amber-500 text-white'
                  }`}
                >
                  {theme === 'dark' ? (
                    <Moon className="w-3.5 h-3.5 text-indigo-100" />
                  ) : (
                    <Sun className="w-3.5 h-3.5 text-white" />
                  )}
                </div>
              </button>
            </div>

            <Link
              to="/analysis"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-md shadow-indigo-500/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
              Start Free AI Business Analysis
            </Link>
          </div>
        </div>
      )}

      {/* Quick AI Search & Filter Modal */}
      <AiSearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </header>
  );
}
