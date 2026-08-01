import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  MessageCircle
} from 'lucide-react';

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  const whatsappMessage = encodeURIComponent("Hello AI Growth Team! I would like to schedule a consultation regarding digital growth services for my business.");

  const inputClasses = `w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
    isDark 
      ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500' 
      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
  }`;

  const labelClasses = `block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`;

  return (
    <div className={`min-h-screen pt-6 pb-16 md:pt-8 md:pb-20 transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className={`text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border ${
            isDark ? 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' : 'text-indigo-600 bg-indigo-50 border-indigo-200'
          }`}>
            24/7 AI Growth Support
          </span>
          <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Get In Touch With <span className="gradient-text">Our Experts</span>
          </h1>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Have questions about AI business analysis, website development, or pricing plans? Send us a message or chat with us on WhatsApp instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details Card */}
          <div className={`lg:col-span-5 border rounded-3xl p-8 space-y-8 shadow-2xl transition-colors ${
            isDark ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800 shadow-slate-200/50'
          }`}>
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Direct Contact Channels
              </h3>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Reach out directly to our digital strategists.
              </p>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-500 flex items-center justify-center shrink-0 border border-indigo-500/30">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <p className={`font-bold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>Call / Support</p>
                  <p className="font-mono text-indigo-500 font-semibold mt-0.5">+91 98765 43210</p>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Mon - Sat: 9:00 AM - 8:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-500 flex items-center justify-center shrink-0 border border-cyan-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className={`font-bold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>Email Inquiries</p>
                  <p className="font-mono text-cyan-500 font-semibold mt-0.5">growth@aistudio.dev</p>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-500 flex items-center justify-center shrink-0 border border-purple-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className={`font-bold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>Headquarters</p>
                  <p className={`mt-0.5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Tech Innovation Tower, Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className={`pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <a
                href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                Chat Directly on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-7 border rounded-3xl p-8 shadow-2xl transition-colors ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200/50'
          }`}>
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Message Sent Successfully!
                </h3>
                <p className={`max-w-md mx-auto text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Thank you, <span className="text-indigo-500 font-bold">{form.name}</span>. Our growth specialist will contact you on <span className="text-indigo-500 font-bold">{form.email}</span> within 2 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', businessName: '', message: '' }); }}
                  className={`px-6 py-2.5 rounded-xl text-xs font-semibold ${
                    isDark ? 'bg-slate-800 hover:bg-slate-700 text-slate-200' : 'bg-slate-200 hover:bg-slate-300 text-slate-800'
                  }`}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Send Us a Message
                  </h3>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Fill out the form below and we will get back to you promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClasses}>Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Anish Kumar"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label className={labelClasses}>Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. anish@example.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClasses}>Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label className={labelClasses}>Business Name</label>
                    <input
                      type="text"
                      value={form.businessName}
                      onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                      placeholder="e.g. Apex Enterprises"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>Your Message / Requirement *</label>
                  <textarea
                    rows="4"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your business goals or any specific help you need..."
                    className={inputClasses}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:opacity-95 shadow-xl shadow-indigo-600/30 transition-all text-sm cursor-pointer"
                >
                  Send Inquiries Now
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
