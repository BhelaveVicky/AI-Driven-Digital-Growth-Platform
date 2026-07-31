import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  ArrowRight
} from 'lucide-react';
import { analyzeBusiness } from '../services/gemini';

export default function Analysis() {
  const navigate = useNavigate();

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
      // Call Gemini AI service
      const report = await analyzeBusiness(formData);
      
      // Store report in localStorage for persistence
      const reportPayload = {
        report,
        businessDetails: formData,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('ai_growth_report', JSON.stringify(reportPayload));

      // Navigate to Report page
      navigate('/report', { state: reportPayload });
    } catch (err) {
      console.error('API submit error:', err);
      setApiError(err.message || 'Failed to generate AI analysis. Please verify server setup and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-28 pb-20 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Instant AI Business Growth Audit
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Business Growth <span className="gradient-text">Analysis Form</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Fill out your business details below. Google Gemini AI will analyze your business model, local market competition, SEO gap, and generate a step-by-step growth report.
          </p>
        </div>

        {/* Global Error Banner */}
        {apiError && (
          <div className="mb-8 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-rose-200">Unable to generate AI Report</p>
              <p className="text-xs text-rose-300/80 mt-0.5">{apiError}</p>
            </div>
          </div>
        )}

        {/* Form UI */}
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
              placeholder="e.g. Low weekday footfall, lack of online leads, competitors dominating Google Search, high customer acquisition cost"
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
    </div>
  );
}
