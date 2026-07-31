import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Building, 
  MapPin, 
  AlertCircle, 
  RefreshCw, 
  Sword, 
  TrendingUp, 
  Key, 
  DollarSign, 
  CheckCircle2, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { analyzeCompetitor } from '../services/gemini';

export default function Competitor() {
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

  return (
    <div className="min-h-screen bg-slate-950 pt-28 pb-20 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sword className="w-4 h-4 text-cyan-400" />
            AI Competitor Intelligence
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Competitor <span className="gradient-text">Audit & Strategy</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Discover your competitors' hidden weaknesses, uncover missing local keywords, and get AI-driven tactics to outrank them in your local area.
          </p>
        </div>

        {/* Global Error Banner */}
        {apiError && (
          <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-rose-200">Competitor Audit Error</p>
              <p className="text-xs text-rose-300/80 mt-0.5">{apiError}</p>
            </div>
          </div>
        )}

        {/* Competitor Analysis Output */}
        {analysisResult ? (
          <div className="bg-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-in fade-in duration-300">
            
            {/* Header Result */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  AI Competitor Audit Complete
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                  Market Positioning: {formData.businessName}
                </h2>
                <p className="text-slate-400 text-sm">
                  Location: <span className="text-indigo-300">{formData.location}</span> | Industry: <span className="text-indigo-300">{formData.category}</span>
                </p>
              </div>

              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4 text-indigo-400" />
                Analyze New Competitors
              </button>
            </div>

            {/* 1. Market Positioning Overview */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-indigo-400" />
                Local Market Dynamics
              </h3>
              <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-2xl text-slate-300 text-sm leading-relaxed">
                {analysisResult.marketPositioning || 'Competitive density in your city offers high growth headroom if digital search touchpoints are seized.'}
              </div>
            </div>

            {/* 2. Competitor Breakdown */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sword className="w-5 h-5 text-rose-400" />
                Competitor Strengths vs. Critical Weaknesses
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analysisResult.competitorBreakdown && analysisResult.competitorBreakdown.length > 0 ? (
                  analysisResult.competitorBreakdown.map((comp, idx) => (
                    <div key={idx} className="bg-slate-950/80 border border-slate-800 p-5 rounded-2xl space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white">{comp.name}</h4>
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          {comp.threatLevel || 'Medium Threat'}
                        </span>
                      </div>
                      <div className="space-y-1.5 text-xs">
                        <p><strong className="text-emerald-400">Strength:</strong> <span className="text-slate-300">{comp.strengths}</span></p>
                        <p><strong className="text-rose-400">Weakness:</strong> <span className="text-slate-300">{comp.weaknesses}</span></p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-xs text-slate-400 bg-slate-950 p-4 rounded-xl">
                    Competitors are active locally but lack automated lead intake and mobile speed optimization.
                  </div>
                )}
              </div>
            </div>

            {/* 3. Pricing & Value Proposition */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-400" />
                Pricing Strategy & Value Leverage
              </h3>
              <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-2xl text-slate-300 text-sm leading-relaxed">
                {analysisResult.pricingInsights || 'Position your offerings with transparent pricing, instant online quotes, and value bundles.'}
              </div>
            </div>

            {/* 4. Keyword Gaps */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Key className="w-5 h-5 text-purple-400" />
                High-Intent Local Keyword Gaps
              </h3>
              <div className="flex flex-wrap gap-2">
                {analysisResult.keywordGaps && analysisResult.keywordGaps.length > 0 ? (
                  analysisResult.keywordGaps.map((kw, idx) => (
                    <span key={idx} className="bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-purple-400" />
                      {kw}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-slate-400">Local search keywords ready to capture.</span>
                )}
              </div>
            </div>

            {/* 5. Outrank Tactics */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                Actionable Tactics to Outrank Competitors
              </h3>
              <div className="space-y-2.5">
                {analysisResult.outrankTactics && analysisResult.outrankTactics.length > 0 ? (
                  analysisResult.outrankTactics.map((tactic, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-200">{tactic}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-400">Deploy local Google Search ads targeting competitor brand keywords.</p>
                )}
              </div>
            </div>

          </div>
        ) : (
          /* Input Form */
          <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Business Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <Building className="w-4 h-4 text-indigo-400" />
                  Your Business Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="e.g. Metro Diagnostics / Royal Bakers"
                  className={`w-full bg-slate-950 border ${errors.businessName ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'} rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                />
                {errors.businessName && <p className="text-xs text-rose-400">{errors.businessName}</p>}
              </div>

              {/* Industry / Category */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <Search className="w-4 h-4 text-indigo-400" />
                  Industry / Category <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g. Dental Clinic / Retail Footwear / Gym"
                  className={`w-full bg-slate-950 border ${errors.category ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'} rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                />
                {errors.category && <p className="text-xs text-rose-400">{errors.category}</p>}
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  City / Location <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Pune, Maharashtra"
                  className={`w-full bg-slate-950 border ${errors.location ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'} rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                />
                {errors.location && <p className="text-xs text-rose-400">{errors.location}</p>}
              </div>

              {/* Known Competitors */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <Sword className="w-4 h-4 text-indigo-400" />
                  Known Competitor Names / URLs
                </label>
                <input
                  type="text"
                  name="competitorNames"
                  value={formData.competitorNames}
                  onChange={handleChange}
                  placeholder="e.g. City Dental, Apex Care, Local Rival Shop"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

            </div>

            {/* Key Offering / Unique selling point */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-400" />
                Your Key Offering / Specialization
              </label>
              <textarea
                name="keyOffering"
                rows="2"
                value={formData.keyOffering}
                onChange={handleChange}
                placeholder="e.g. 24/7 emergency service, imported premium quality products, lowest price guarantee"
                className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:opacity-95 shadow-xl shadow-cyan-600/20 transition-all text-base disabled:opacity-50 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin text-cyan-200" />
                    Running AI Competitor Audit...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-cyan-200" />
                    Run AI Competitor Audit
                    <ArrowRight className="w-5 h-5 text-white/80" />
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
