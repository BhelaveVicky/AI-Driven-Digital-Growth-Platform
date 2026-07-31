import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function FeatureCard({ title, description, icon: Icon, badge, color = 'indigo', onClick }) {
  // Color theme map for cards
  const colorStyles = {
    indigo: {
      bg: 'from-indigo-500/10 to-indigo-600/5',
      border: 'border-indigo-500/20 group-hover:border-indigo-500/50',
      iconBg: 'bg-indigo-500/20 text-indigo-400',
      badgeBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
      btnText: 'text-indigo-400 group-hover:text-indigo-300'
    },
    cyan: {
      bg: 'from-cyan-500/10 to-blue-600/5',
      border: 'border-cyan-500/20 group-hover:border-cyan-500/50',
      iconBg: 'bg-cyan-500/20 text-cyan-400',
      badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      btnText: 'text-cyan-400 group-hover:text-cyan-300'
    },
    purple: {
      bg: 'from-purple-500/10 to-pink-600/5',
      border: 'border-purple-500/20 group-hover:border-purple-500/50',
      iconBg: 'bg-purple-500/20 text-purple-400',
      badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
      btnText: 'text-purple-400 group-hover:text-purple-300'
    },
    emerald: {
      bg: 'from-emerald-500/10 to-teal-600/5',
      border: 'border-emerald-500/20 group-hover:border-emerald-500/50',
      iconBg: 'bg-emerald-500/20 text-emerald-400',
      badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
      btnText: 'text-emerald-400 group-hover:text-emerald-300'
    },
    amber: {
      bg: 'from-amber-500/10 to-orange-600/5',
      border: 'border-amber-500/20 group-hover:border-amber-500/50',
      iconBg: 'bg-amber-500/20 text-amber-400',
      badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
      btnText: 'text-amber-400 group-hover:text-amber-300'
    },
    rose: {
      bg: 'from-rose-500/10 to-pink-600/5',
      border: 'border-rose-500/20 group-hover:border-rose-500/50',
      iconBg: 'bg-rose-500/20 text-rose-400',
      badgeBg: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
      btnText: 'text-rose-400 group-hover:text-rose-300'
    }
  };

  const style = colorStyles[color] || colorStyles.indigo;

  return (
    <div 
      onClick={onClick}
      className={`group relative rounded-2xl p-6 bg-slate-900/80 bg-gradient-to-br ${style.bg} border ${style.border} glass-card-hover cursor-pointer transition-all duration-300 flex flex-col justify-between`}
    >
      <div>
        {/* Header with icon & badge */}
        <div className="flex items-center justify-between mb-5">
          <div className={`w-12 h-12 rounded-xl ${style.iconBg} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
            {Icon && <Icon className="w-6 h-6" />}
          </div>
          {badge && (
            <span className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border ${style.badgeBg}`}>
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-white transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Footer Link */}
      <div className={`pt-2 flex items-center text-sm font-semibold ${style.btnText} gap-1.5`}>
        <span>Explore Solution</span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </div>
  );
}
