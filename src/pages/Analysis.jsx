import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import RoiCalculator from '../components/RoiCalculator';
import { 
  Sparkles, 
  AlertCircle, 
  Building, 
  User, 
  MapPin, 
  Tag, 
  Target, 
  DollarSign, 
  Globe, 
  HelpCircle,
  RefreshCw,
  ArrowRight,
  Zap,
  CheckCircle
} from 'lucide-react';
import { analyzeBusiness } from '../services/gemini';

export default function Analysis() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [activeTab, setActiveTab] = useState('audit'); // 'audit' | 'roi'

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

  const autofillPresets = [
    {
      name: '🥖 Bakery / Cafe',
      ownerName: 'Vicky Sharma',
      businessName: 'Royal Bakery & Cafe',
      businessCategory: 'Restaurant / Cafe / Food',
      location: 'Bandra West, Mumbai',
      businessProblems: 'Low footfall on weekdays, want more online WhatsApp takeaway orders and Google reviews.',
      targetCustomers: 'Local office workers, families, dessert lovers within 5km radius',
      monthlyBudget: '₹10,000 - ₹25,000 / month',
      websiteRequirement: 'Yes - Need a brand new website'
    },
    {
      name: '🩺 Dental Clinic',
      ownerName: 'Dr. Ananya Mehta',
      businessName: 'Smile Care Dental Hospital',
      businessCategory: 'Healthcare / Clinic / Pharmacy',
      location: 'Indiranagar, Bengaluru',
      businessProblems: 'Need more patient appointments for cosmetic dentistry, competition from big chains.',
      targetCustomers: 'Working professionals, residents seeking dental implants & aligners',
      monthlyBudget: '₹25,000 - ₹50,000 / month',
      websiteRequirement: 'Yes - Want to redesign / upgrade existing website'
    },
    {
      name: '💼 CA / Tax Firm',
      ownerName: 'Rajesh Kulkarni',
      businessName: 'Kulkarni & Associates CA Firm',
      businessCategory: 'Professional Services (Legal, CA, Consulting)',
      location: 'Connaught Place, New Delhi',
      businessProblems: 'Want to acquire GST filing & corporate audit clients digitally without relying only on word of mouth.',
      targetCustomers: 'SMEs, startups, private limited companies needing tax & compliance',
      monthlyBudget: '₹10,000 - ₹25,000 / month',
      websiteRequirement: 'Yes - Need a brand new website'
    }
  ];

  const applyPreset = (preset) => {
    setFormData({
      ownerName: preset.ownerName,
      businessName: preset.businessName,
      businessCategory: preset.businessCategory,
      location: preset.location,
      businessProblems: preset.businessProblems,
      targetCustomers: preset.targetCustomers,
      monthlyBudget: preset.monthlyBudget,
      websiteRequirement: preset.websiteRequirement
    });
    setErrors({});
  };

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

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
    if (apiError) {
      setApiError('');
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.ownerName.trim()) newErrors.ownerName = 'Owner Name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business Name is required';
    if (!formData.businessCategory) newErrors.businessCategory = 'Please select a Business Category';
    if (!formData.location.trim()) newErrors.location = 'City / Location is required';
    if (!formData.businessProblems.trim()) newErrors.businessProblems = 'Please describe your main business challenges';
    if (!formData.targetCustomers.trim()) newErrors.targetCustomers = 'Target Customers info is required';
    if (!formData.monthlyBudget) newErrors.monthlyBudget = 'Please select your Monthly Marketing Budget';
    if (!formData.websiteRequirement) newErrors.websiteRequirement = 'Please select Website Requirement';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setApiError('');

    try {
      const report = await analyzeBusiness(formData);
      
      const reportPayload = {
        report,
        businessDetails: formData,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('ai_growth_report', JSON.stringify(reportPayload));

      navigate('/report', { state: reportPayload });
    } catch (err) {
      console.error('API submit error:', err);
      setApiError(err.message || 'Failed to generate AI analysis. Please verify server setup and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (hasError) => `w-full border rounded-xl px-4 py-3 text-sm transition-colors focus:outline-none ${
    isDark 
      ? `bg-slate-950 text-white placeholder-slate-500 ${hasError ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'}`
      : `bg-slate-50 text-slate-900 placeholder-slate-400 ${hasError ? 'border-rose-500' : 'border-slate-300 focus:border-indigo-500'}`
  }`;

  const labelClasses = `text-sm font-semibold flex items-center gap-2 ${isDark ? 'text-slate-200' : 'text-slate-700'}`;

  return (
    <div className={`min-h-screen pt-6 pb-16 md:pt-8 md:pb-20 transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center space-y-4 mb-8">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider ${
            isDark ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300' : 'bg-indigo-100 border-indigo-200 text-indigo-700'
          }`}>
            <Sparkles className="w-4 h-4 text-indigo-500" />
            Instant AI Business Growth Suite
          </div>
          <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Business Growth <span className="gradient-text">Analysis & ROI Tool</span>
          </h1>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Fill out your business details for a Gemini AI audit or calculate your projected revenue growth with our interactive ROI tool.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className={`inline-flex p-1.5 rounded-2xl border ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-200/80 border-slate-300'
          }`}>
            <button
              onClick={() => setActiveTab('audit')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'audit'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Audit Form</span>
            </button>
            <button
              onClick={() => setActiveTab('roi')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'roi'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>ROI Growth Calculator</span>
            </button>
          </div>
        </div>

        {/* Tab 2: ROI Calculator */}
        {activeTab === 'roi' && (
          <div className="mb-12 animate-in fade-in duration-300">
            <RoiCalculator />
          </div>
        )}

        {/* Tab 1: AI Audit Form */}
        {activeTab === 'audit' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* 1-Click Autofill Demo Presets */}
            <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 ${
              isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 shrink-0">
                <Zap className="w-4 h-4 text-amber-500" /> 1-Click Demo Presets:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {autofillPresets.map((preset) => (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => applyPreset(preset)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      isDark 
                        ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white' 
                        : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white'
                    }`}
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Global Error Banner */}
            {apiError && (
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Unable to generate AI Report</p>
                  <p className="text-xs opacity-90 mt-0.5">{apiError}</p>
                </div>
              </div>
            )}

        {/* Form UI */}
        <form onSubmit={handleSubmit} className={`border rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 transition-colors ${
          isDark 
            ? 'bg-slate-900 border-slate-800' 
            : 'bg-white border-slate-200 shadow-slate-200/60'
        }`}>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Owner Name */}
            <div className="space-y-2">
              <label className={labelClasses}>
                <User className="w-4 h-4 text-indigo-500" />
                Owner Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={inputClasses(errors.ownerName)}
              />
              {errors.ownerName && <p className="text-xs text-rose-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.ownerName}</p>}
            </div>

            {/* Business Name */}
            <div className="space-y-2">
              <label className={labelClasses}>
                <Building className="w-4 h-4 text-indigo-500" />
                Business Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="e.g. Sharma Traders / Apex Dental Clinic"
                className={inputClasses(errors.businessName)}
              />
              {errors.businessName && <p className="text-xs text-rose-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.businessName}</p>}
            </div>

            {/* Business Category */}
            <div className="space-y-2">
              <label className={labelClasses}>
                <Tag className="w-4 h-4 text-indigo-500" />
                Business Category <span className="text-rose-500">*</span>
              </label>
              <select
                name="businessCategory"
                value={formData.businessCategory}
                onChange={handleChange}
                className={inputClasses(errors.businessCategory)}
              >
                <option value="" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>Select Category...</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat} className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>{cat}</option>
                ))}
              </select>
              {errors.businessCategory && <p className="text-xs text-rose-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.businessCategory}</p>}
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className={labelClasses}>
                <MapPin className="w-4 h-4 text-indigo-500" />
                Location / City <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Mumbai, Maharashtra"
                className={inputClasses(errors.location)}
              />
              {errors.location && <p className="text-xs text-rose-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.location}</p>}
            </div>

          </div>

          {/* Target Customers */}
          <div className="space-y-2">
            <label className={labelClasses}>
              <Target className="w-4 h-4 text-indigo-500" />
              Target Customers <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="targetCustomers"
              value={formData.targetCustomers}
              onChange={handleChange}
              placeholder="e.g. Local families, young professionals, B2B wholesale buyers, students"
              className={inputClasses(errors.targetCustomers)}
            />
            {errors.targetCustomers && <p className="text-xs text-rose-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.targetCustomers}</p>}
          </div>

          {/* Business Problems */}
          <div className="space-y-2">
            <label className={labelClasses}>
              <HelpCircle className="w-4 h-4 text-indigo-500" />
              Main Business Problems & Challenges <span className="text-rose-500">*</span>
            </label>
            <textarea
              name="businessProblems"
              rows="3"
              value={formData.businessProblems}
              onChange={handleChange}
              placeholder="e.g. Low weekday footfall, lack of online leads, competitors dominating Google Search, high customer acquisition cost"
              className={inputClasses(errors.businessProblems)}
            />
            {errors.businessProblems && <p className="text-xs text-rose-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.businessProblems}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Monthly Budget */}
            <div className="space-y-2">
              <label className={labelClasses}>
                <DollarSign className="w-4 h-4 text-indigo-500" />
                Monthly Marketing Budget <span className="text-rose-500">*</span>
              </label>
              <select
                name="monthlyBudget"
                value={formData.monthlyBudget}
                onChange={handleChange}
                className={inputClasses(errors.monthlyBudget)}
              >
                <option value="" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>Select Monthly Budget...</option>
                {budgetRanges.map((b, idx) => (
                  <option key={idx} value={b} className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>{b}</option>
                ))}
              </select>
              {errors.monthlyBudget && <p className="text-xs text-rose-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.monthlyBudget}</p>}
            </div>

            {/* Website Requirement */}
            <div className="space-y-2">
              <label className={labelClasses}>
                <Globe className="w-4 h-4 text-indigo-500" />
                Website Requirement <span className="text-rose-500">*</span>
              </label>
              <select
                name="websiteRequirement"
                value={formData.websiteRequirement}
                onChange={handleChange}
                className={inputClasses(errors.websiteRequirement)}
              >
                <option value="" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>Select Option...</option>
                {websiteOptions.map((opt, idx) => (
                  <option key={idx} value={opt} className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>{opt}</option>
                ))}
              </select>
              {errors.websiteRequirement && <p className="text-xs text-rose-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.websiteRequirement}</p>}
            </div>

          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:opacity-95 shadow-xl shadow-indigo-600/30 transition-all text-base disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin text-cyan-200" />
                  Generating Gemini AI Growth Report...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-cyan-200" />
                  Generate Free AI Report
                  <ArrowRight className="w-5 h-5 text-white/80" />
                </>
              )}
            </button>
          </div>

        </form>
          </div>
        )}

      </div>
    </div>
  );
}
