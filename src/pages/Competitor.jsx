import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Search, 
  Building, 
  MapPin, 
  AlertCircle, 
  RefreshCw, 
  Sword, 
  TrendingUp, 
  Key, 
  CheckCircle2, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { analyzeCompetitor } from '../services/gemini';

export default function Competitor() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    businessName: '',
    category: '',
    location: '',
    competitorNames: '',
    keyOffering: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (apiError) setApiError('');
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.businessName.trim()) newErrors.businessName = 'Your Business Name is required';
    if (!formData.category.trim()) newErrors.category = 'Industry / Category is required';
    if (!formData.location.trim()) newErrors.location = 'Location / City is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setApiError('');

    try {
      const analysis = await analyzeCompetitor(formData);
      setAnalysisResult(analysis);
    } catch (err) {
      console.error('Competitor Analysis Error:', err);
      setApiError(err.message || 'Failed to generate competitor audit. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setAnalysisResult(null);
    setFormData({
      businessName: '',
      category: '',
      location: '',
      competitorNames: '',
      keyOffering: ''
    });
    setErrors({});
    setApiError('');
  };

  const inputClasses = (hasError) => `w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
    isDark 
      ? `bg-slate-950 text-white placeholder-slate-500 ${hasError ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'}`
      : `bg-slate-50 text-slate-900 placeholder-slate-400 ${hasError ? 'border-rose-500' : 'border-slate-300 focus:border-indigo-500'}`
  }`;

  const labelClasses = `text-sm font-semibold flex items-center gap-2 ${isDark ? 'text-slate-200' : 'text-slate-700'}`;

  return (
    <div className={`min-h-screen pt-6 pb-16 md:pt-8 md:pb-20 transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Title */}
        <div className="text-center space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider ${
            isDark ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' : 'bg-cyan-50 border-cyan-200 text-cyan-700'
          }`}>
            <Sword className="w-4 h-4 text-cyan-500" />
            AI Competitor Intelligence
          </div>
          <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Competitor <span className="gradient-text">Audit & Strategy</span>
          </h1>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Discover your competitors' hidden weaknesses, uncover missing local keywords, and get AI-driven tactics to outrank them in your local area.
          </p>
        </div>

        {/* Global Error Banner */}
        {apiError && (
          <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Competitor Audit Error</p>
              <p className="text-xs opacity-90 mt-0.5">{apiError}</p>
            </div>
          </div>
        )}

        {/* 1-Click Demo Presets */}
        {!analysisResult && (
          <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 shrink-0">
              <Zap className="w-4 h-4 text-amber-500" /> 1-Click Industry Demos:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    businessName: 'Toscano Pizzeria',
                    category: 'Restaurant & Dining',
                    location: 'Koramangala, Bengaluru',
                    competitorNames: 'Dominos, Pizza Hut, Local Artisanal Pizzeria',
                    keyOffering: 'Wood-fired sourdough pizza & fresh pasta'
                  });
                  setErrors({});
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  isDark ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-cyan-600 hover:text-white' : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-cyan-600 hover:text-white'
                }`}
              >
                🍕 Pizza Cafe
              </button>

              <button
                type="button"
                onClick={() => {
                  setFormData({
                    businessName: 'Iron Vault Fitness',
                    category: 'Fitness & Gym',
                    location: 'Hiranandani Estate, Thane',
                    competitorNames: 'Cult.fit, Gold Gym, local fitness studios',
                    keyOffering: 'CrossFit, Strength Training & Personal Coaching'
                  });
                  setErrors({});
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  isDark ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-cyan-600 hover:text-white' : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-cyan-600 hover:text-white'
                }`}
              >
                🏋️ Fitness Gym
              </button>

              <button
                type="button"
                onClick={() => {
                  setFormData({
                    businessName: 'Aura Ethnic Fashion',
                    category: 'Fashion & Retail',
                    location: 'Surat, Gujarat',
                    competitorNames: 'Local saree shops & Instagram boutiques',
                    keyOffering: 'Custom designer sarees & bridal wear'
                  });
                  setErrors({});
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  isDark ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-cyan-600 hover:text-white' : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-cyan-600 hover:text-white'
                }`}
              >
                🛍️ Designer Boutique
              </button>
            </div>
          </div>
        )}

        {/* Competitor Analysis Output */}
        {analysisResult ? (
          <div className={`border rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-in fade-in duration-300 transition-colors ${
            isDark ? 'bg-slate-900 border-indigo-500/30' : 'bg-white border-slate-200 shadow-slate-200/50'
          }`}>
            
            {/* Header Result */}
            <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-6 ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <div>
                <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  AI Competitor Audit Complete
                </span>
                <h2 className={`text-2xl sm:text-3xl font-bold mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Market Positioning: {formData.businessName}
                </h2>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Location: <span className="text-indigo-500 font-semibold">{formData.location}</span> | Industry: <span className="text-indigo-500 font-semibold">{formData.category}</span>
                </p>
              </div>

              <button
                onClick={handleReset}
                className={`px-4 py-2 rounded-xl border text-xs font-semibold flex items-center gap-2 ${
                  isDark ? 'bg-slate-950 hover:bg-slate-800 border-slate-800 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                }`}
              >
                <RefreshCw className="w-4 h-4 text-indigo-500" />
                Analyze New Competitors
              </button>
            </div>

            {/* 1. Market Positioning Overview */}
            <div className="space-y-3">
              <h3 className={`text-lg font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Search className="w-5 h-5 text-indigo-500" />
                Local Market Dynamics
              </h3>
              <div className={`border p-5 rounded-2xl text-sm leading-relaxed ${
                isDark ? 'bg-slate-950/80 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}>
                {analysisResult.marketPositioning || 'Competitive density in your city offers high growth headroom if digital search touchpoints are seized.'}
              </div>
            </div>

            {/* 2. Competitor Breakdown */}
            <div className="space-y-3">
              <h3 className={`text-lg font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Sword className="w-5 h-5 text-rose-500" />
                Competitor Strengths vs. Critical Weaknesses
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analysisResult.competitorBreakdown && analysisResult.competitorBreakdown.length > 0 ? (
                  analysisResult.competitorBreakdown.map((comp, idx) => (
                    <div key={idx} className={`border p-5 rounded-2xl space-y-3 ${
                      isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm text-indigo-500">{comp.name}</h4>
                        <span className="text-[10px] bg-rose-500/10 text-rose-600 font-bold px-2 py-0.5 rounded border border-rose-500/20">
                          Competitor
                        </span>
                      </div>
                      <div className="text-xs space-y-1.5">
                        <p><strong className="text-emerald-500">Strength:</strong> <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{comp.strength}</span></p>
                        <p><strong className="text-rose-500">Weakness:</strong> <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{comp.weakness}</span></p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-500 col-span-2">No specific competitors analyzed.</p>
                )}
              </div>
            </div>

            {/* 3. Winning Keywords to Outrank Competitors */}
            <div className="space-y-3">
              <h3 className={`text-lg font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Key className="w-5 h-5 text-amber-500" />
                Winning Keywords to Capture Traffic
              </h3>
              <div className="flex flex-wrap gap-2">
                {analysisResult.winningKeywords && analysisResult.winningKeywords.length > 0 ? (
                  analysisResult.winningKeywords.map((kw, idx) => (
                    <span key={idx} className={`px-3 py-1.5 rounded-xl border text-xs font-semibold ${
                      isDark ? 'bg-amber-500/10 border-amber-500/20 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-800'
                    }`}>
                      🔑 {kw}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-slate-500">Best local services in {formData.location}</span>
                )}
              </div>
            </div>

            {/* 4. Strategic Opportunities */}
            <div className="space-y-3">
              <h3 className={`text-lg font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <TrendingUp className="w-5 h-5 text-emerald-500" />
                Actionable Attack Strategy
              </h3>
              <div className="space-y-2">
                {analysisResult.opportunities && analysisResult.opportunities.length > 0 ? (
                  analysisResult.opportunities.map((opp, idx) => (
                    <div key={idx} className={`flex items-start gap-3 p-3.5 rounded-xl border ${
                      isDark ? 'bg-slate-950/80 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-xs leading-relaxed">{opp}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-500">Focus on instant WhatsApp response and Google My Business reviews.</p>
                )}
              </div>
            </div>

          </div>
        ) : (
          /* Form Input Section */
          <form onSubmit={handleSubmit} className={`border rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 transition-colors ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200/50'
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Business Name */}
              <div className="space-y-2">
                <label className={labelClasses}>
                  <Building className="w-4 h-4 text-indigo-500" />
                  Your Business Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="e.g. Metro Diagnostics / Royal Sweets"
                  className={inputClasses(errors.businessName)}
                />
                {errors.businessName && <p className="text-xs text-rose-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.businessName}</p>}
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className={labelClasses}>
                  <Zap className="w-4 h-4 text-indigo-500" />
                  Business Industry / Category <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g. Pathology Lab, Bakery, CA Firm"
                  className={inputClasses(errors.category)}
                />
                {errors.category && <p className="text-xs text-rose-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.category}</p>}
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
                  placeholder="e.g. Pune, Maharashtra"
                  className={inputClasses(errors.location)}
                />
                {errors.location && <p className="text-xs text-rose-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.location}</p>}
              </div>

              {/* Competitors */}
              <div className="space-y-2">
                <label className={labelClasses}>
                  <Sword className="w-4 h-4 text-indigo-500" />
                  Competitor Names (Optional)
                </label>
                <input
                  type="text"
                  name="competitorNames"
                  value={formData.competitorNames}
                  onChange={handleChange}
                  placeholder="e.g. Competitor A, Competitor B"
                  className={inputClasses(false)}
                />
              </div>

            </div>

            {/* Key Offerings */}
            <div className="space-y-2">
              <label className={labelClasses}>
                Key Services or Products You Offer
              </label>
              <textarea
                name="keyOffering"
                rows="3"
                value={formData.keyOffering}
                onChange={handleChange}
                placeholder="e.g. Full body health checkup, home sample collection, same-day digital reports"
                className={inputClasses(false)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:opacity-95 shadow-xl shadow-indigo-600/30 transition-all text-base cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin text-cyan-200" />
                  Running AI Competitor Analysis...
                </>
              ) : (
                <>
                  <Sword className="w-5 h-5 text-cyan-200" />
                  Run Competitor Audit
                  <ArrowRight className="w-5 h-5 text-white/80" />
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
