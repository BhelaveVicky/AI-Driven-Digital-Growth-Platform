  import React, { useState } from 'react';
  import { 
    Calculator, 
    TrendingUp, 
    Sparkles, 
    DollarSign, 
    Users, 
    CheckCircle2, 
    ArrowRight,
    Filter,
    Zap,
    Building2
  } from 'lucide-react';
  import { useTheme } from '../context/ThemeContext';
  import { Link } from 'react-router-dom';

  export default function RoiCalculator() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [industry, setIndustry] = useState('Retail');
    const [monthlyRevenue, setMonthlyRevenue] = useState(150000);
    const [monthlyLeads, setMonthlyLeads] = useState(30);
    const [avgDealValue, setAvgDealValue] = useState(3000);

    // Growth Multipliers based on AI implementation
    const industryMultipliers = {
      Retail: { leadMultiplier: 2.8, conversionBoost: 1.4, label: 'E-commerce & Retail' },
      Healthcare: { leadMultiplier: 3.2, conversionBoost: 1.5, label: 'Clinics & Hospitals' },
      Food: { leadMultiplier: 3.5, conversionBoost: 1.6, label: 'Restaurants & Cafes' },
      RealEstate: { leadMultiplier: 2.5, conversionBoost: 1.3, label: 'Property & Realtors' },
      Services: { leadMultiplier: 2.9, conversionBoost: 1.4, label: 'CA, Legal & Agencies' },
      Salon: { leadMultiplier: 3.0, conversionBoost: 1.5, label: 'Salons & Wellness' }
    };

    const currentMultiplier = industryMultipliers[industry] || industryMultipliers.Retail;

    // Revenue projection calculations
    const projectedExtraLeads = Math.round(monthlyLeads * (currentMultiplier.leadMultiplier - 1));
    const newTotalLeads = monthlyLeads + projectedExtraLeads;
    const projectedExtraRevenue = Math.round(projectedExtraLeads * avgDealValue * currentMultiplier.conversionBoost);
    const projectedTotalRevenue = monthlyRevenue + projectedExtraRevenue;
    const roiPercentage = Math.round((projectedExtraRevenue / 50000) * 100);

    return (
      <div className={`rounded-3xl border p-6 sm:p-8 shadow-2xl relative overflow-hidden transition-all ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border-slate-800 text-white' 
          : 'bg-white border-slate-200 text-slate-900 shadow-xl'
      }`}>
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5" />
              Interactive ROI & Revenue Estimator
            </div>
            <h3 className={`text-2xl sm:text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Calculate Your Business Growth Potential
            </h3>
            <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Select your industry and current metrics to see how AI automation boosts monthly revenue.
            </p>
          </div>

          {/* Industry Filter Dropdown */}
          <div className="shrink-0">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-indigo-500" /> Filter Industry
            </label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className={`w-full sm:w-56 px-4 py-2.5 rounded-xl border text-xs font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                isDark 
                  ? 'bg-slate-950 border-slate-800 text-white' 
                  : 'bg-slate-50 border-slate-300 text-slate-900'
              }`}
            >
              {Object.entries(industryMultipliers).map(([key, val]) => (
                <option key={key} value={key}>
                  {val.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Input Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Metric 1: Current Monthly Revenue */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                  Current Monthly Revenue (₹)
                </span>
                <span className="text-indigo-500 font-mono text-sm font-extrabold">
                  ₹{monthlyRevenue.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="20000"
                max="2000000"
                step="10000"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer h-2 bg-slate-700/30 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>₹20,000</span>
                <span>₹10,000,000+</span>
              </div>
            </div>

            {/* Metric 2: Monthly Lead Inquiries */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                  Current Monthly Customer Inquiries / Leads
                </span>
                <span className="text-cyan-500 font-mono text-sm font-extrabold">
                  {monthlyLeads} leads/mo
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="300"
                step="5"
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-700/30 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>5 leads</span>
                <span>300+ leads</span>
              </div>
            </div>

            {/* Metric 3: Average Order / Customer Value */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                  Average Customer Deal Value (₹)
                </span>
                <span className="text-emerald-500 font-mono text-sm font-extrabold">
                  ₹{avgDealValue.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={avgDealValue}
                onChange={(e) => setAvgDealValue(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-700/30 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>₹500</span>
                <span>₹50,000</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className={`p-3 rounded-2xl border flex items-center gap-3 ${
                isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Est. Growth Rate</p>
                  <p className="text-sm font-extrabold text-amber-500">
                    +{(currentMultiplier.leadMultiplier * 100 - 100).toFixed(0)}% More Leads
                  </p>
                </div>
              </div>

              <div className={`p-3 rounded-2xl border flex items-center gap-3 ${
                isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <Sparkles className="w-5 h-5 text-indigo-400 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">WhatsApp Automation</p>
                  <p className="text-sm font-extrabold text-indigo-400">
                    24/7 Auto Conversion
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Output Projection Card */}
          <div className="lg:col-span-5">
            <div className={`p-6 rounded-3xl border shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden ${
              isDark 
                ? 'bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-950 border-indigo-500/30 text-white' 
                : 'bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-700 border-indigo-600 text-white shadow-indigo-500/20'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-200 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-cyan-300" />
                  Projected AI Impact
                </span>
                <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-cyan-400/20 text-cyan-200 border border-cyan-300/30">
                  {currentMultiplier.label}
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-indigo-200">Estimated Monthly Extra Revenue</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-emerald-300">
                    +₹{projectedExtraRevenue.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-bold text-indigo-200">/ month</span>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-white/10 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-indigo-200">New Monthly Total Revenue:</span>
                  <span className="font-bold font-mono text-white text-sm">
                    ₹{projectedTotalRevenue.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-200">Total Monthly Leads:</span>
                  <span className="font-bold text-cyan-200 text-sm">
                    {newTotalLeads} leads (+{projectedExtraLeads})
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-200">Estimated Annualized Growth:</span>
                  <span className="font-bold text-amber-300 text-sm">
                    +₹{(projectedExtraRevenue * 12).toLocaleString('en-IN')} / year
                  </span>
                </div>
              </div>

              <Link
                to="/analysis"
                className="w-full py-3 px-4 rounded-xl bg-white text-indigo-900 hover:bg-indigo-50 font-extrabold text-xs tracking-wide shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Unlock This Growth With AI Audit</span>
                <ArrowRight className="w-4 h-4 text-indigo-700" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
