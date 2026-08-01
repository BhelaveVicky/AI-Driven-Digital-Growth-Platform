import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { 
  Check, 
  Zap, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const plans = [
    {
      name: 'Basic',
      tagline: 'Essential digital starter pack for small local shops & startups.',
      monthlyPrice: '₹4,999',
      yearlyPrice: '₹3,999',
      popular: false,
      badge: 'Starter Choice',
      features: [
        'Responsive 3-Page Website',
        'Basic SEO & Google Maps Listing',
        'AI Business Analysis Audit',
        'Standard Contact Form Integration',
        'WhatsApp Quick Chat Button',
        'Email Support'
      ],
      benefits: [
        'Establish instant online credibility',
        'Appear on local Google searches',
        'Capture leads via WhatsApp'
      ],
      ctaText: 'Get Basic Plan',
      ctaColor: isDark 
        ? 'bg-slate-800 hover:bg-slate-700 text-white' 
        : 'bg-slate-200 hover:bg-slate-300 text-slate-900 border border-slate-300'
    },
    {
      name: 'Standard',
      tagline: 'Complete AI-powered growth system for expanding businesses.',
      monthlyPrice: '₹11,999',
      yearlyPrice: '₹9,500',
      popular: true,
      badge: 'Most Popular',
      features: [
        'High-Converting 7-Page Website',
        '24/7 AI WhatsApp Auto-Response Bot',
        'Advanced Local SEO & Keyword Targeting',
        'Competitor Analysis Report',
        'Social Media Campaign Setup',
        'Monthly AI Performance Analytics',
        'Priority Phone & Email Support'
      ],
      benefits: [
        'Automate lead capture 24/7',
        'Outrank local area competitors',
        '3x customer conversion rate'
      ],
      ctaText: 'Start Standard Plan',
      ctaColor: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:opacity-95 text-white shadow-xl shadow-indigo-500/30'
    },
    {
      name: 'Premium',
      tagline: 'Tailored enterprise AI transformation for high-growth brands.',
      monthlyPrice: '₹24,999',
      yearlyPrice: '₹19,999',
      popular: false,
      badge: 'Full Automation',
      features: [
        'Custom E-Commerce / Multi-Page Web App',
        'Custom Trained Gemini AI Chatbot',
        'Omnichannel Marketing (Google + FB Ads)',
        'Dedicated AI Growth Strategist',
        'Automated CRM & Lead Nurturing',
        'Weekly Performance Optimization',
        'VIP 24/7 Immediate Support'
      ],
      benefits: [
        'End-to-end sales channel automation',
        'Custom trained AI model on your inventory/services',
        'Dedicated growth strategist assigned'
      ],
      ctaText: 'Get Premium Plan',
      ctaColor: isDark 
        ? 'bg-slate-800 hover:bg-slate-700 text-white' 
        : 'bg-slate-200 hover:bg-slate-300 text-slate-900 border border-slate-300'
    }
  ];

  return (
    <div className={`min-h-screen pt-6 pb-16 md:pt-8 md:pb-20 transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className={`text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border ${
            isDark ? 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' : 'text-indigo-600 bg-indigo-50 border-indigo-200'
          }`}>
            Transparent Pricing Plans
          </span>
          <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Simple, High-ROI <span className="gradient-text">Growth Packages</span>
          </h1>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Choose the right plan designed to digitize your small business, automate lead generation, and boost sales.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="pt-4 flex items-center justify-center">
            <div className={`p-1.5 rounded-2xl flex items-center gap-2 border ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  billingCycle === 'yearly'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                <span>Annual Billing</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                plan.popular
                  ? 'border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 lg:-translate-y-2 ' + (isDark ? 'bg-slate-900' : 'bg-white')
                  : isDark 
                    ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-md'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border shadow-md ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white border-indigo-400/30'
                      : isDark ? 'bg-slate-800 text-indigo-300 border-slate-700' : 'bg-slate-100 text-indigo-700 border-slate-200'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className={`border-b pb-6 mb-6 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                  <p className={`text-xs leading-relaxed min-h-[36px] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{plan.tagline}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className={`text-4xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>/ month</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  <p className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Features Included:
                  </p>
                  <ul className={`space-y-2.5 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits */}
                <div className={`space-y-2.5 p-4 rounded-xl border mb-8 ${
                  isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <p className="text-xs font-bold text-indigo-500 uppercase tracking-wider flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    Key Business Benefit:
                  </p>
                  <ul className={`space-y-1.5 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {plan.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <Link
                to="/analysis"
                className={`w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${plan.ctaColor}`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>
          ))}
        </div>

        {/* Custom enterprise / help banner */}
        <div className={`mt-16 border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-md'
        }`}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
              <HelpCircle className="w-6 h-6 text-indigo-500" />
            </div>
            <div>
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Need a Custom Tailored Package?
              </h3>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Our AI specialists can build a custom plan tailored to your specific industry goals.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className={`px-6 py-3 rounded-xl font-semibold text-sm border shrink-0 transition-all ${
              isDark 
                ? 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700' 
                : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-300'
            }`}
          >
            Talk to AI Advisor
          </Link>
        </div>

      </div>
    </div>
  );
}
