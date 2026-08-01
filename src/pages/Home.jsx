import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import RoiCalculator from '../components/RoiCalculator';
import { useTheme } from '../context/ThemeContext';
import { 
  BrainCircuit, 
  Globe, 
  Megaphone, 
  LineChart, 
  Users, 
  Bot, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const features = [
    {
      title: 'AI Business Analysis',
      description: 'Get an instant, data-driven diagnostic report highlighting growth bottlenecks, revenue leakages, and high-impact digital opportunities.',
      icon: BrainCircuit,
      badge: 'Popular',
      color: 'indigo',
      link: '/analysis'
    },
    {
      title: 'Website Development',
      description: 'Lightning-fast, mobile-optimized modern websites engineered to turn casual visitors into paying customers.',
      icon: Globe,
      badge: 'High Conversion',
      color: 'cyan',
      link: '/pricing'
    },
    {
      title: 'Digital Marketing',
      description: 'Precision hyper-local ads, automated lead generation campaigns, and SEO to dominate local search results.',
      icon: Megaphone,
      badge: 'ROI Focused',
      color: 'purple',
      link: '/pricing'
    },
    {
      title: 'Competitor Analysis',
      description: 'Benchmark your business against top industry competitors to uncover pricing gaps, traffic sources, and winning keywords.',
      icon: LineChart,
      badge: 'Strategic',
      color: 'amber',
      link: '/analysis'
    },
    {
      title: 'Referral Program',
      description: 'Earn ₹1000 cash rewards for every business owner you refer. No qualification or experience required.',
      icon: Users,
      badge: 'Earn ₹1000',
      color: 'emerald',
      link: '/referral'
    },
    {
      title: 'AI Assistant',
      description: '24/7 intelligent customer response bot integrated with WhatsApp & website to capture leads while you sleep.',
      icon: Bot,
      badge: '24/7 Automated',
      color: 'rose',
      link: '/contact'
    }
  ];

  const stats = [
    { value: '2,500+', label: 'Small Businesses Scanned' },
    { value: '₹1.2 Cr+', label: 'New Revenue Generated' },
    { value: '3.5x', label: 'Average Lead Increase' },
    { value: '98.6%', label: 'Client Satisfaction Rate' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Hero Section */}
      <Hero />

      {/* Stats Bar */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl border transition-colors ${
          isDark 
            ? 'bg-slate-900/90 border-slate-800' 
            : 'bg-white/90 border-slate-200 text-slate-800 shadow-slate-200/50'
        }`}>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x ${
            isDark ? 'divide-slate-800' : 'divide-slate-200'
          }`}>
            {stats.map((stat, idx) => (
              <div key={idx} className={`${idx > 0 ? 'pt-4 md:pt-0' : ''}`}>
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">
                  {stat.value}
                </p>
                <p className={`text-xs sm:text-sm font-medium mt-1 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className={`text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border ${
              isDark 
                ? 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' 
                : 'text-indigo-600 bg-indigo-50 border-indigo-200'
            }`}>
              Complete Growth Ecosystem
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Everything Your Business Needs To <span className="gradient-text">Scale & Win</span>
            </h2>
            <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              We combine cutting-edge AI technology with proven digital marketing tactics to transform local businesses into market leaders.
            </p>
          </div>

          {/* Grid of 6 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                badge={feature.badge}
                color={feature.color}
                onClick={() => navigate(feature.link)}
              />
            ))}
          </div>

          {/* Interactive ROI Growth & Revenue Calculator */}
          <div className="mt-16">
            <RoiCalculator />
          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section className={`py-16 border-y transition-colors ${
        isDark ? 'bg-slate-900/60 border-slate-800/80' : 'bg-slate-100/80 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className={`text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              How AI Growth Works in 3 Easy Steps
            </h2>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              From free audit to automated customer acquisition in under 48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            <div className={`rounded-2xl p-6 text-center space-y-4 border transition-all ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-500 font-extrabold text-xl flex items-center justify-center mx-auto border border-indigo-500/30">
                01
              </div>
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Fill Free Analysis Form
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Provide basic details about your business, current location, target audience, and goals.
              </p>
            </div>

            <div className={`rounded-2xl p-6 text-center space-y-4 border transition-all ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-cyan-600/20 text-cyan-500 font-extrabold text-xl flex items-center justify-center mx-auto border border-cyan-500/30">
                02
              </div>
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Get Custom AI Report
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Our AI model evaluates market demand, competitor benchmarks, and generates a growth roadmap.
              </p>
            </div>

            <div className={`rounded-2xl p-6 text-center space-y-4 border transition-all ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-500 font-extrabold text-xl flex items-center justify-center mx-auto border border-purple-500/30">
                03
              </div>
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Scale Sales & Traffic
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Deploy high-converting website, automated WhatsApp bot, and targeted growth campaigns.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`relative rounded-3xl p-8 sm:p-12 overflow-hidden border shadow-2xl text-center space-y-6 transition-all ${
            isDark
              ? 'bg-gradient-to-r from-indigo-900 via-slate-900 to-purple-950 border-indigo-500/30 text-white'
              : 'bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 border-indigo-400 text-white shadow-indigo-500/20'
          }`}>
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              100% Free - Instant Strategic Blueprint
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Accelerate Your Business Revenue?
            </h2>

            <p className="text-indigo-100 dark:text-slate-300 max-w-2xl mx-auto text-base">
              Join thousands of small business owners leveraging AI technology to stay ahead of competitors and double customer leads.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/analysis')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-950 bg-white hover:bg-slate-100 shadow-xl transition-all text-base hover:scale-105"
              >
                Start Free Analysis Now
                <ArrowRight className="w-5 h-5 text-indigo-600" />
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
