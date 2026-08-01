import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Send, 
  Bot, 
  User, 
  Trash2, 
  Copy, 
  Check, 
  AlertCircle,
  HelpCircle,
  RefreshCw
} from 'lucide-react';
import { sendChatMessage } from '../services/gemini';

export default function Chat() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Hello! I am GrowthBot AI, your dedicated Digital Business Advisor. Ask me anything about local SEO, WhatsApp automation, website conversion, customer acquisition, or digital ads!'
    }
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const suggestedPrompts = [
    'How do I get more 5-star Google Maps reviews?',
    'What is the best WhatsApp marketing strategy for small shops?',
    'How can a modern website help me double local leads?',
    'Which digital ad platform gives highest ROI for ₹10k budget?'
  ];

  const handleSend = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: query
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setError('');
    setIsLoading(true);

    try {
      const aiReply = await sendChatMessage(query, messages);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: aiReply
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      setError(err.message || 'Error connecting to Gemini AI Chat.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: 'Hello! I am GrowthBot AI, your dedicated Digital Business Advisor. Ask me anything about local SEO, WhatsApp automation, website conversion, customer acquisition, or digital ads!'
      }
    ]);
    setError('');
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className={`min-h-screen pt-6 pb-10 md:pt-8 flex flex-col transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col">
        
        {/* Chat Header */}
        <div className={`flex items-center justify-between pb-6 border-b ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <div className={`w-full h-full rounded-[14px] flex items-center justify-center ${
                isDark ? 'bg-slate-950' : 'bg-white'
              }`}>
                <Bot className="w-5 h-5 text-indigo-500" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>GrowthBot AI Chat</h1>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Powered by Google Gemini AI 24/7 Strategy Advisor
              </p>
            </div>
          </div>

          <button
            onClick={handleClear}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              isDark 
                ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' 
                : 'bg-white border-slate-300 text-slate-600 hover:text-slate-900 shadow-sm'
            }`}
            title="Clear Chat History"
          >
            <Trash2 className="w-3.5 h-3.5 text-rose-500" />
            Clear Chat
          </button>
        </div>

        {/* Chat Area Container */}
        <div className={`flex-1 border rounded-3xl my-6 p-4 sm:p-6 flex flex-col min-h-[480px] max-h-[600px] overflow-hidden shadow-2xl transition-colors ${
          isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200/50'
        }`}>
          
          {/* Messages Scroll View */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                  msg.sender === 'user' 
                    ? 'bg-indigo-600 text-white' 
                    : isDark 
                      ? 'bg-slate-800 text-indigo-400 border border-slate-700' 
                      : 'bg-indigo-50 text-indigo-600 border border-indigo-200'
                }`}>
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div className={`group relative max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-tr-none'
                    : isDark
                      ? 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none space-y-2'
                      : 'bg-slate-100 border border-slate-200 text-slate-800 rounded-tl-none space-y-2'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  
                  {msg.sender === 'bot' && (
                    <button
                      onClick={() => handleCopy(msg.text, msg.id)}
                      className={`absolute top-2 right-2 p-1 rounded transition-opacity opacity-0 group-hover:opacity-100 ${
                        isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200'
                      }`}
                      title="Copy message"
                    >
                      {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  isDark ? 'bg-slate-800 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
                }`}>
                  <Bot className="w-4 h-4" />
                </div>
                <div className={`p-4 rounded-2xl text-xs flex items-center gap-2 border ${
                  isDark ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}>
                  <RefreshCw className="w-4 h-4 animate-spin text-indigo-500" />
                  GrowthBot AI is analyzing & generating strategy response...
                </div>
              </div>
            )}

            {error && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts Pill */}
          {messages.length === 1 && (
            <div className={`pt-4 border-t my-3 space-y-2 ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
              <p className={`text-[11px] font-semibold flex items-center gap-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <HelpCircle className="w-3.5 h-3.5 text-indigo-500" /> Suggested Quick Prompts:
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    className={`text-xs px-3 py-1.5 rounded-xl border transition-all text-left ${
                      isDark 
                        ? 'bg-slate-950 hover:bg-slate-800 border-slate-800 text-indigo-300' 
                        : 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200 text-indigo-700'
                    }`}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Box Bar */}
          <div className={`pt-3 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask GrowthBot AI about website, SEO, ads, or sales automation..."
                className={`flex-1 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
                  isDark 
                    ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500' 
                    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
                }`}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:opacity-95 text-white font-bold text-sm flex items-center gap-1.5 shadow-lg shadow-indigo-600/30 transition-all disabled:opacity-40 cursor-pointer"
              >
                <span>Send</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
