import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '919876543210';
  const defaultMessage = encodeURIComponent("Hello! I want to get a free AI Business Analysis and learn more about your Digital Growth Platform.");

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip / Chat Banner */}
      {showTooltip && (
        <div className="mb-3 w-72 bg-slate-900 border border-emerald-500/30 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-2 duration-200 glass-card">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-white">AI Growth Assistant</span>
            </div>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-300 my-3 leading-relaxed">
            👋 Hi there! Need quick help growing your business with AI? Chat with us instantly on WhatsApp!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-600/30"
          >
            <Send className="w-3.5 h-3.5" />
            Open WhatsApp Chat
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none opacity-75" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500 relative z-10" />
      </a>
    </div>
  );
}
