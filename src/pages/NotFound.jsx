import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-4 py-8 transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
    }`}>
      <div className="max-w-4xl w-full border rounded-3xl overflow-hidden shadow-2xl relative p-6 sm:p-10 transition-colors bg-white text-slate-900 border-slate-200">
        
        {/* Landscape Illustration Container */}
        <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-emerald-50 border border-slate-200 shadow-inner flex items-center justify-center">
          
          {/* SVG Illustration mimicking the 404 Image */}
          <svg className="w-full h-full object-cover" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
              <linearGradient id="cloudGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            {/* Background Sky */}
            <rect width="800" height="500" fill="url(#skyGrad)" />

            {/* Sun Top Left */}
            <g transform="translate(100, 100)">
              <circle cx="0" cy="0" r="35" fill="#eab308" opacity="0.8" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
                <line
                  key={i}
                  x1={Math.cos((ang * Math.PI) / 180) * 42}
                  y1={Math.sin((ang * Math.PI) / 180) * 42}
                  x2={Math.cos((ang * Math.PI) / 180) * 52}
                  y2={Math.sin((ang * Math.PI) / 180) * 52}
                  stroke="#eab308"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              ))}
            </g>

            {/* Soft Clouds */}
            <path d="M500,100 Q530,70 570,90 Q600,60 640,80 Q670,90 680,110 Z" fill="url(#cloudGrad)" />
            <path d="M280,150 Q300,130 330,140 Q350,120 380,135 Q400,140 410,160 Z" fill="url(#cloudGrad)" opacity="0.6" />

            {/* Birds Top Right */}
            <g stroke="#334155" strokeWidth="2.5" fill="none" strokeLinecap="round">
              <path d="M680,140 Q690,130 700,140 Q710,130 720,140" />
              <path d="M725,170 Q735,160 745,170 Q755,160 765,170" />
              <path d="M738,210 Q745,202 752,210 Q759,202 766,210" />
            </g>

            {/* Background Grey Mountains */}
            <polygon points="0,450 120,280 260,450" fill="#475569" />
            <polygon points="100,450 250,180 440,450" fill="#334155" />
            <polygon points="280,450 420,300 560,450" fill="#475569" />
            <polygon points="540,450 680,240 800,450" fill="#334155" />

            {/* Colorful Trees on Left Ground */}
            {/* Purple Tree */}
            <path d="M30,320 C10,320 10,260 30,260 C50,260 50,320 30,320 Z" fill="#6b21a8" />
            <rect x="28" y="320" width="4" height="60" fill="#4a044e" />

            {/* Pink Tree */}
            <path d="M95,220 C60,220 60,340 95,340 C130,340 130,220 95,220 Z" fill="#f43f5e" />
            <rect x="92" y="340" width="6" height="50" fill="#881337" />

            {/* Yellow Tree */}
            <path d="M150,330 C130,330 130,280 150,280 C170,280 170,330 150,330 Z" fill="#eab308" />
            <rect x="148" y="330" width="4" height="40" fill="#713f12" />

            {/* Pink Small Bush */}
            <path d="M220,350 C205,350 205,310 220,310 C235,310 235,350 220,350 Z" fill="#fda4af" />

            {/* Green Foreground Hill */}
            <path d="M0,380 Q200,340 400,390 Q600,430 800,370 L800,500 L0,500 Z" fill="#10b981" />
            <path d="M0,420 Q300,390 800,410 L800,500 L0,500 Z" fill="#059669" />

            {/* Grass Blade Tufts */}
            <g stroke="#047857" strokeWidth="2.5" fill="none" strokeLinecap="round">
              <path d="M60,430 L55,415 M60,430 L63,412 M60,430 L70,418" />
              <path d="M140,410 L135,395 M140,410 L142,392 M140,410 L150,398" />
              <path d="M380,435 L375,420 M380,435 L383,418 M380,435 L390,422" />
              <path d="M470,440 L465,425 M470,440 L473,423 M470,440 L480,427" />
              <path d="M630,425 L625,410 M630,425 L633,408 M630,425 L640,412" />
              <path d="M750,430 L745,415 M750,430 L753,412 M750,430 L760,418" />
            </g>

            {/* Standing Rock for Deer */}
            <polygon points="120,480 150,370 250,390 280,480" fill="#475569" />
            <polygon points="150,370 250,390 230,480 140,470" fill="#64748b" />
            <path d="M190,440 L210,430 L200,450 Z" fill="#f87171" opacity="0.6" />

            {/* Deer Character */}
            <g transform="translate(195, 230)">
              {/* Legs */}
              <rect x="-18" y="100" width="10" height="50" fill="#312e81" rx="3" />
              <rect x="8" y="100" width="10" height="50" fill="#312e81" rx="3" />
              <rect x="-18" y="145" width="10" height="8" fill="#0f172a" />
              <rect x="8" y="145" width="10" height="8" fill="#0f172a" />

              {/* Trousers */}
              <path d="M-22,50 L22,50 L18,105 L-18,105 Z" fill="#4338ca" />
              {/* Suspenders */}
              <line x1="-12" y1="0" x2="-12" y2="50" stroke="#b91c1c" strokeWidth="3" />
              <line x1="12" y1="0" x2="12" y2="50" stroke="#b91c1c" strokeWidth="3" />

              {/* Shirt */}
              <rect x="-20" y="0" width="40" height="52" fill="#ffffff" rx="4" stroke="#cbd5e1" strokeWidth="1" />
              <circle cx="0" cy="18" r="2" fill="#0f172a" />
              <circle cx="0" cy="32" r="2" fill="#0f172a" />

              {/* Bow Tie (Orange with dots) */}
              <polygon points="-10,-4 0,2 10,-4 0,-10" fill="#ea580c" />
              <circle cx="-5" cy="-4" r="1" fill="#ffffff" />
              <circle cx="5" cy="-4" r="1" fill="#ffffff" />

              {/* Head */}
              <ellipse cx="0" cy="-35" rx="22" ry="24" fill="#a7f3d0" />
              {/* Inner ears & Snout */}
              <ellipse cx="0" cy="-25" rx="12" ry="10" fill="#f0fdf4" />
              <ellipse cx="0" cy="-30" rx="3" ry="2" fill="#0f172a" />
              
              {/* Antlers */}
              <path d="M-12,-55 C-18,-75 -30,-85 -25,-95 M-22,-78 C-32,-78 -35,-82 -35,-82" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M12,-55 C18,-75 30,-85 25,-95 M22,-78 C32,-78 35,-82 35,-82" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" fill="none" />

              {/* Glasses */}
              <circle cx="-9" cy="-38" r="8" fill="none" stroke="#0284c7" strokeWidth="2" />
              <circle cx="9" cy="-38" r="8" fill="none" stroke="#0284c7" strokeWidth="2" />
              <line x1="-1" y1="-38" x2="1" y2="-38" stroke="#0284c7" strokeWidth="2" />

              {/* Arm shielding eyes */}
              <path d="M18,10 Q35,5 30,-38 L15,-38" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
              <path d="M18,10 Q35,5 30,-38 L15,-38" fill="none" stroke="#4338ca" strokeWidth="6" strokeLinecap="round" />
              <circle cx="12" cy="-38" r="5" fill="#a7f3d0" />
            </g>

            {/* BIG 404 & PAGE NOT FOUND TEXT OVERLAY RIGHT SIDE */}
            <g transform="translate(420, 150)">
              {/* PAGE NOT FOUND HEADING */}
              <text x="0" y="30" fill="#ea580c" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="38" letterSpacing="2">
                PAGE NOT FOUND
              </text>
              {/* HUGE 404 NUMBERS */}
              <text x="0" y="210" fill="#ea580c" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="190" letterSpacing="-4">
                404
              </text>
            </g>
          </svg>
        </div>

        {/* Action Controls & Description */}
        <div className="mt-8 text-center space-y-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-800">
            Oops! The page you are looking for doesn't exist.
          </h2>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            It looks like you took a wrong turn or entered an invalid URL. Let's get you back to growing your business with AI!
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-rose-500 to-indigo-600 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:opacity-95 transition-all"
            >
              <Home className="w-4 h-4" />
              Back to Home Page
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-sm flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
