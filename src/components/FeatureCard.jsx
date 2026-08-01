import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function FeatureCard({ title, description, icon: Icon, badge, color = 'indigo', onClick }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Color theme map for cards in Dark and Light modes
  const colorStyles = {
    indigo: {
      bgDark: 'from-indigo-500/10 to-indigo-600/5 bg-slate-900/80 border-indigo-500/20 hover:border-indigo-500/50',
      bgLight: 'from-indigo-50/80 to-white bg-white border-slate-200 hover:border-indigo-300 hover:shadow-indigo-500/10',
      iconBg: 'bg-indigo-500/20 text-indigo-500',
      badgeBgDark: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
      badgeBgLight: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      btnText: 'text-indigo-500 hover:text-indigo-600'
    },
    cyan: {
      bgDark: 'from-cyan-500/10 to-blue-600/5 bg-slate-900/80 border-cyan-500/20 hover:border-cyan-500/50',
      bgLight: 'from-cyan-50/80 to-white bg-white border-slate-200 hover:border-cyan-300 hover:shadow-cyan-500/10',
      iconBg: 'bg-cyan-500/20 text-cyan-500',
      badgeBgDark: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      badgeBgLight: 'bg-cyan-100 text-cyan-700 border-cyan-200',
      btnText: 'text-cyan-600 hover:text-cyan-700'
    },
    purple: {
      bgDark: 'from-purple-500/10 to-pink-600/5 bg-slate-900/80 border-purple-500/20 hover:border-purple-500/50',
      bgLight: 'from-purple-50/80 to-white bg-white border-slate-200 hover:border-purple-300 hover:shadow-purple-500/10',
      iconBg: 'bg-purple-500/20 text-purple-500',
      badgeBgDark: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
      badgeBgLight: 'bg-purple-100 text-purple-700 border-purple-200',
      btnText: 'text-purple-600 hover:text-purple-700'
    },
    emerald: {
      bgDark: 'from-emerald-500/10 to-teal-600/5 bg-slate-900/80 border-emerald-500/20 hover:border-emerald-500/50',
      bgLight: 'from-emerald-50/80 to-white bg-white border-slate-200 hover:border-emerald-300 hover:shadow-emerald-500/10',
      iconBg: 'bg-emerald-500/20 text-emerald-500',
      badgeBgDark: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
      badgeBgLight: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      btnText: 'text-emerald-600 hover:text-emerald-700'
    },
    amber: {
      bgDark: 'from-amber-500/10 to-orange-600/5 bg-slate-900/80 border-amber-500/20 hover:border-amber-500/50',
      bgLight: 'from-amber-50/80 to-white bg-white border-slate-200 hover:border-amber-300 hover:shadow-amber-500/10',
      iconBg: 'bg-amber-500/20 text-amber-500',
      badgeBgDark: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
      badgeBgLight: 'bg-amber-100 text-amber-800 border-amber-200',
      btnText: 'text-amber-600 hover:text-amber-700'
    },
    rose: {
      bgDark: 'from-rose-500/10 to-pink-600/5 bg-slate-900/80 border-rose-500/20 hover:border-rose-500/50',
      bgLight: 'from-rose-50/80 to-white bg-white border-slate-200 hover:border-rose-300 hover:shadow-rose-500/10',
      iconBg: 'bg-rose-500/20 text-rose-500',
      badgeBgDark: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
      badgeBgLight: 'bg-rose-100 text-rose-700 border-rose-200',
      btnText: 'text-rose-600 hover:text-rose-700'
    }
  };

  const style = colorStyles[color] || colorStyles.indigo;

  return (
    <div 
      onClick={onClick}
      className={`group relative rounded-2xl p-6 bg-gradient-to-br border cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-xl hover:-translate-y-1 ${
        isDark ? style.bgDark : style.bgLight
      }`}
    >
      <div>
        {/* Header with icon & badge */}
        <div className="flex items-center justify-between mb-5">
          <div className={`w-12 h-12 rounded-xl ${style.iconBg} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
            {Icon && <Icon className="w-6 h-6" />}
          </div>
          {badge && (
            <span className={`text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${
              isDark ? style.badgeBgDark : style.badgeBgLight
            }`}>
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`text-xl font-bold mb-2.5 transition-colors ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-6 ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          {description}
        </p>
      </div>

      {/* Footer Link */}
      <div className={`pt-2 flex items-center text-sm font-bold ${style.btnText} gap-1.5`}>
        <span>Explore Solution</span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </div>
  );
}
