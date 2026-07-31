import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Building, 
  User, 
  MapPin, 
  Tag, 
  Target, 
  DollarSign, 
  Globe, 
  HelpCircle,
  BarChart3,
  TrendingUp,
  Download,
  Check,
  RefreshCw
} from 'lucide-react';

export default function Analysis() {
  const [formData, setFormData] = useState({
    ownerName: '',
    businessName: '',
    businessCategory: '',
    location: '',
    businessProblems: '',
    targetCustomers: '',
    monthlyBudget: '',
    websiteRequirement: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [report, setReport] = useState(null);

  const categories = [
    'Retail Store / Shop',
    'Restaurant / Cafe / Food',
    'Healthcare / Clinic / Pharmacy',
    'Professional Services (Legal, CA, Consulting)',
    'Real Estate & Construction',
    'Education / Coaching / Academy',
    'E-commerce & Online Brand',
    'Beauty, Salon & Wellness',
    'Manufacturing & Wholesale',
    'Other Small Business'
  ];

  const budgetRanges = [
    'Below ₹10,000 / month',
    '₹10,000 - ₹25,000 / month',
    '₹25,000 - ₹50,000 / month',
    '₹50,000 - ₹1,000,000+ / month'
  ];

  const websiteOptions = [
    'Yes - Need a brand new website',
    'Yes - Want to redesign / upgrade existing website',
    'No - Already have a fast, working website',
    'Not Sure - Need AI recommendation'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.ownerName.trim()) newErrors.ownerName = 'Owner Name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business Name is required';
    if (!formData.businessCategory) newErrors.businessCategory = 'Please select a Business Category';
    if (!formData.location.trim()) newErrors.location = 'City / Location is required';
    if (!formData.businessProblems.trim()) newErrors.businessProblems = 'Please describe main business challenge';
    if (!formData.targetCustomers.trim()) newErrors.targetCustomers = 'Target Customers info is required';
    if (!formData.monthlyBudget) newErrors.monthlyBudget = 'Please select your Monthly Marketing Budget';
    if (!formData.websiteRequirement) newErrors.websiteRequirement = 'Please select Website Requirement';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate AI Business Diagnostics calculation
    setTimeout(() => {
      setIsSubmitting(false);
      setReport({
        score: 86,
        category: formData.businessCategory,
        businessName: formData.businessName,
        ownerName: formData.ownerName,
        insights: [
          {
            title: 'Digital Visibility Gap',
            desc: `In ${formData.location}, local search volume for "${formData.businessCategory}" is high, but digital coverage is underutilized.`
          },
          {
            title: 'Lead Conversion Bottleneck',
            desc: `Addressing "${formData.businessProblems.slice(0, 40)}..." requires automated customer follow-ups and WhatsApp integration.`
          },
          {
            title: 'Budget Allocation Strategy',
            desc: `With a ${formData.monthlyBudget} budget, prioritizing local Google Business SEO & AI WhatsApp bot will yield 3x return.`
          }
        ],
        actionSteps: [
          'Deploy high-speed mobile website tailored for target audience: ' + formData.targetCustomers,
          'Set up automated 24/7 AI WhatsApp lead capture bot',
          'Optimize Google Maps profile for hyper-local search queries in ' + formData.location,
          'Run targeted local Instagram & Google search ads with budget tracking'
        ]
      });
    }, 1200);
  };

  const resetForm = () => {
    setReport(null);
    setFormData({
      ownerName: '',
      businessName: '',
      businessCategory: '',
      location: '',
      businessProblems: '',
      targetCustomers: '',
      monthlyBudget: '',
      websiteRequirement: ''
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-28 pb-20 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            100% Free Instant AI Growth Audit
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            AI Business <span className="gradient-text">Analysis Form</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Fill out your business details below to get a customized AI report identifying your revenue potential, marketing bottlenecks, and actionable digital strategy.
          </p>
        </div>

        {/* Display Generated AI Report if submitted */}
        {report ? (
          <div className="bg-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-in fade-in duration-300">
            
            {/* Top Report Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-6">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Audit Report Generated
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                  {report.businessName}
                </h2>
                <p className="text-slate-400 text-sm">
                  Owner: <span className="text-slate-200 font-medium">{report.ownerName}</span> | Category: <span className="text-indigo-300">{report.category}</span>
                </p>
              </div>

              {/* Score Dial */}
              <div className="flex flex-col items-center justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800 min-w-[130px]">
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  {report.score}/100
                </span>
                <span className="text-[11px] text-slate-400 font-medium mt-0.5">AI Potential Score</span>
              </div>
            </div>

            {/* AI Strategic Insights */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-indigo-400" />
                Key Diagnostic Insights
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {report.insights.map((item, idx) => (
                  <div key={idx} className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl space-y-2">
                    <p className="text-sm font-bold text-indigo-300">{item.title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Roadmap */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                Recommended Growth Action Plan
              </h3>
              <div className="space-y-2.5">
                {report.actionSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold mt-0.5 shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-slate-200">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 text-sm font-medium flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Analyze Another Business
              </button>

              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi, I completed the AI Business Analysis for ${report.businessName}. I want to discuss implementing the recommended growth roadmap!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-95 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                Discuss Report on WhatsApp
              </a>
            </div>

          </div>
        ) : (
          /* Form UI */
          <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Owner Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <User className="w-4 h-4 text-indigo-400" />
                  Owner Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full bg-slate-950 border ${errors.ownerName ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'} rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                />
                {errors.ownerName && <p className="text-xs text-rose-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.ownerName}</p>}
              </div>

              {/* Business Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <Building className="w-4 h-4 text-indigo-400" />
                  Business Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="e.g. Sharma Traders / Apex Dental Clinic"
                  className={`w-full bg-slate-950 border ${errors.businessName ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'} rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                />
                {errors.businessName && <p className="text-xs text-rose-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.businessName}</p>}
              </div>

              {/* Business Category */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-indigo-400" />
                  Business Category <span className="text-rose-400">*</span>
                </label>
                <select
                  name="businessCategory"
                  value={formData.businessCategory}
                  onChange={handleChange}
                  className={`w-full bg-slate-950 border ${errors.businessCategory ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors`}
                >
                  <option value="">Select Category...</option>
                  {categories.map((cat, idx) => (
                    <option key={idx} value={cat}>{cat}</option>
                  ))}
                </select>
                {errors.businessCategory && <p className="text-xs text-rose-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.businessCategory}</p>}
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  Location / City <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Mumbai, Maharashtra"
                  className={`w-full bg-slate-950 border ${errors.location ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'} rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                />
                {errors.location && <p className="text-xs text-rose-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.location}</p>}
              </div>

            </div>

            {/* Target Customers */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-400" />
                Target Customers <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                name="targetCustomers"
                value={formData.targetCustomers}
                onChange={handleChange}
                placeholder="e.g. Local families, young professionals, B2B wholesale buyers, students"
                className={`w-full bg-slate-950 border ${errors.targetCustomers ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'} rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
              />
              {errors.targetCustomers && <p className="text-xs text-rose-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.targetCustomers}</p>}
            </div>

            {/* Business Problems */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400" />
                Main Business Problems & Challenges <span className="text-rose-400">*</span>
              </label>
              <textarea
                name="businessProblems"
                rows="3"
                value={formData.businessProblems}
                onChange={handleChange}
                placeholder="e.g. Low footfall on weekdays, lack of online website, competitors taking market share, slow lead conversions"
                className={`w-full bg-slate-950 border ${errors.businessProblems ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'} rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
              />
              {errors.businessProblems && <p className="text-xs text-rose-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.businessProblems}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Monthly Budget */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-indigo-400" />
                  Monthly Marketing Budget <span className="text-rose-400">*</span>
                </label>
                <select
                  name="monthlyBudget"
                  value={formData.monthlyBudget}
                  onChange={handleChange}
                  className={`w-full bg-slate-950 border ${errors.monthlyBudget ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors`}
                >
                  <option value="">Select Monthly Budget...</option>
                  {budgetRanges.map((b, idx) => (
                    <option key={idx} value={b}>{b}</option>
                  ))}
                </select>
                {errors.monthlyBudget && <p className="text-xs text-rose-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.monthlyBudget}</p>}
              </div>

              {/* Website Requirement */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-indigo-400" />
                  Website Requirement <span className="text-rose-400">*</span>
                </label>
                <select
                  name="websiteRequirement"
                  value={formData.websiteRequirement}
                  onChange={handleChange}
                  className={`w-full bg-slate-950 border ${errors.websiteRequirement ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors`}
                >
                  <option value="">Select Option...</option>
                  {websiteOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.websiteRequirement && <p className="text-xs text-rose-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.websiteRequirement}</p>}
              </div>

            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:opacity-95 shadow-xl shadow-indigo-600/30 transition-all text-base disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin text-cyan-200" />
                    Running AI Business Analysis...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-cyan-200" />
                    Generate Free AI Analysis Report
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
