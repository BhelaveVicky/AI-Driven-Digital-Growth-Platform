import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  Building
} from 'lucide-react';

export default function Contact() {
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

  return (
    <div className="min-h-screen bg-slate-950 pt-28 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full">
            24/7 AI Growth Support
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Get In Touch With <span className="gradient-text">Our Experts</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Have questions about AI business analysis, website development, or pricing plans? Send us a message or chat with us on WhatsApp instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-8 shadow-2xl">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Direct Contact Channels</h3>
              <p className="text-sm text-slate-400">Reach out directly to our digital strategists.</p>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/30">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-white text-base">Call / Support</p>
                  <p className="text-slate-300 font-mono mt-0.5">+91 1234567890</p>
                  <p className="text-slate-500 text-xs mt-0.5">All time</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-white text-base">Email Inquiries</p>
                  <p className="text-slate-300 font-mono mt-0.5">abcd@gmail.com</p>
                  <p className="text-slate-500 text-xs mt-0.5">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-white text-base">Headquarters</p>
                  <p className="text-slate-300 mt-0.5">Tech Innovation Tower, Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-4 border-t border-slate-800">
              <a
                href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                Chat Directly on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-slate-300 max-w-md mx-auto text-sm">
                  Thank you, <span className="text-indigo-300 font-semibold">{form.name}</span>. Our growth specialist will contact you on <span className="text-indigo-300">{form.email}</span> within 2 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', businessName: '', message: '' }); }}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Send Us a Message</h3>
                  <p className="text-xs text-slate-400">Fill out the form below and we will get back to you promptly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Anish Kumar"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. anish@example.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. +91 1234567890"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Business Name</label>
                    <input
                      type="text"
                      value={form.businessName}
                      onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                      placeholder="e.g. Kumar General Store"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">How can we help your business? *</label>
                  <textarea
                    rows="4"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your business goals, target area, or specific requirements..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:opacity-95 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
