import React, { useState } from 'react';
import { ArrowLeftRight, Check, Info } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  treatment: string;
  duration: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeSvg: React.ReactNode;
  afterSvg: React.ReactNode;
  clinicalNotes: string;
}

export const BeforeAfterGallery: React.FC = () => {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100

  const cases: CaseStudy[] = [
    {
      id: 'cerec-crown',
      title: 'Molar Restoration & Fracture Repair',
      treatment: 'CEREC® Single-Visit Ceramic Crown',
      duration: '1 visit (85 minutes)',
      description: 'Patient presented with a fractured upper first molar and old, failing amalgam restoration. Dr. Rey scanned the prep with iTero, milled a high-translucency ceramic crown, and bonded it permanently the same day.',
      beforeLabel: 'Before: Fractured cusps & recurrent decay',
      afterLabel: 'After: High-strength CEREC porcelain crown',
      clinicalNotes: 'Restored 100% natural chewing function with seamless margin integration and exact shade match.',
      beforeSvg: (
        <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-900">
          <rect width="400" height="300" fill="#0f172a" />
          {/* Gums */}
          <path d="M 50 180 Q 200 210 350 180 L 350 300 L 50 300 Z" fill="#991b1b" opacity="0.6" />
          {/* Cracked Molar */}
          <path d="M 140 180 C 130 110, 150 90, 180 85 C 200 90, 210 90, 230 85 C 260 90, 280 110, 270 180 Z" fill="#e2e8f0" />
          {/* Old dark amalgam filling with fracture lines */}
          <ellipse cx="205" cy="115" rx="35" ry="20" fill="#475569" />
          <path d="M 180 110 L 160 145" stroke="#1e293b" strokeWidth="3" />
          <path d="M 225 120 L 255 155" stroke="#1e293b" strokeWidth="4" />
          {/* Callout */}
          <text x="200" y="260" fill="#cbd5e1" textAnchor="middle" fontSize="13" fontFamily="sans-serif">
            Amalgam breakdown & structural fracture line
          </text>
        </svg>
      ),
      afterSvg: (
        <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-900">
          <rect width="400" height="300" fill="#0f172a" />
          {/* Healthy pink gums */}
          <path d="M 50 180 Q 200 200 350 180 L 350 300 L 50 300 Z" fill="#b91c1c" opacity="0.4" />
          {/* Beautiful pristine ceramic crown */}
          <path d="M 140 180 C 130 100, 150 75, 180 72 C 200 80, 210 80, 230 72 C 260 75, 280 100, 270 180 Z" fill="#f8fafc" />
          {/* Anatomical occlusal fissures & luster */}
          <path d="M 185 85 Q 205 105 225 85" stroke="#cbd5e1" strokeWidth="2" fill="none" />
          <path d="M 205 95 L 205 125" stroke="#cbd5e1" strokeWidth="2" />
          <ellipse cx="175" cy="110" rx="15" ry="25" fill="#ffffff" opacity="0.7" />
          <text x="200" y="260" fill="#5eead4" textAnchor="middle" fontSize="13" fontFamily="sans-serif">
            Same-day CEREC ceramic crown with lifelike anatomy
          </text>
        </svg>
      )
    },
    {
      id: 'orthofx-alignment',
      title: 'Discreet Orthodontic Correction',
      treatment: 'OrthoFX Clear Aligner Therapy',
      duration: '8 months treatment',
      description: 'Adult patient desired to correct lower anterior crowding and an uneven smile plane without metal wires. OrthoFX provided continuous low-force movement with high patient compliance.',
      beforeLabel: 'Before: Rotated anterior incisors & overlap',
      afterLabel: 'After: Symmetrical arch & balanced smile',
      clinicalNotes: 'Clean alignment, eliminated plaque accumulation traps, improved periodontal probing depths.',
      beforeSvg: (
        <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-900">
          <rect width="400" height="300" fill="#0f172a" />
          {/* Gums */}
          <path d="M 40 220 Q 200 250 360 220 L 360 300 L 40 300 Z" fill="#991b1b" opacity="0.6" />
          {/* Misaligned overlapping front teeth */}
          <rect x="90" y="110" width="45" height="110" rx="12" fill="#cbd5e1" transform="rotate(-12 110 160)" />
          <rect x="145" y="85" width="55" height="135" rx="14" fill="#e2e8f0" transform="rotate(8 170 150)" />
          <rect x="205" y="80" width="55" height="140" rx="14" fill="#e2e8f0" transform="rotate(-6 230 150)" />
          <rect x="265" y="105" width="45" height="115" rx="12" fill="#cbd5e1" transform="rotate(15 280 160)" />
          <text x="200" y="270" fill="#cbd5e1" textAnchor="middle" fontSize="13" fontFamily="sans-serif">
            Moderate anterior crowding and rotation
          </text>
        </svg>
      ),
      afterSvg: (
        <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-900">
          <rect width="400" height="300" fill="#0f172a" />
          {/* Gums */}
          <path d="M 40 220 Q 200 240 360 220 L 360 300 L 40 300 Z" fill="#b91c1c" opacity="0.4" />
          {/* Perfectly aligned symmetric front teeth */}
          <rect x="95" y="100" width="45" height="120" rx="10" fill="#f8fafc" />
          <rect x="145" y="80" width="52" height="140" rx="12" fill="#ffffff" />
          <rect x="203" y="80" width="52" height="140" rx="12" fill="#ffffff" />
          <rect x="260" y="100" width="45" height="120" rx="10" fill="#f8fafc" />
          {/* Clean reflection */}
          <path d="M 100 110 Q 200 95 300 110" stroke="#38bdf8" strokeWidth="1.5" opacity="0.5" fill="none" />
          <text x="200" y="270" fill="#5eead4" textAnchor="middle" fontSize="13" fontFamily="sans-serif">
            Even arch form and ideal contact points
          </text>
        </svg>
      )
    },
    {
      id: 'cosmetic-whitening',
      title: 'In-Office Enamel Brightening',
      treatment: 'Professional Deep Bleaching & Bonding',
      duration: '1 visit (60 minutes)',
      description: 'Patient presented with tetracycline shading and coffee stain saturation. In-office LED activation combined with custom take-home trays lifted the shade 7 values.',
      beforeLabel: 'Before: Shade A3.5 yellow saturation',
      afterLabel: 'After: Bright, natural BL2 porcelain shade',
      clinicalNotes: 'Desensitizing protocol eliminated tooth sensitivity during and after treatment.',
      beforeSvg: (
        <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-900">
          <rect width="400" height="300" fill="#0f172a" />
          <path d="M 60 200 Q 200 230 340 200 L 340 300 L 60 300 Z" fill="#991b1b" opacity="0.5" />
          <rect x="110" y="90" width="40" height="110" rx="8" fill="#d97706" opacity="0.4" />
          <rect x="155" y="80" width="42" height="120" rx="8" fill="#fef08a" opacity="0.75" />
          <rect x="202" y="80" width="42" height="120" rx="8" fill="#fef08a" opacity="0.75" />
          <rect x="248" y="90" width="40" height="110" rx="8" fill="#d97706" opacity="0.4" />
          <text x="200" y="260" fill="#cbd5e1" textAnchor="middle" fontSize="13" fontFamily="sans-serif">
            Noticeable yellow enamel staining and wear
          </text>
        </svg>
      ),
      afterSvg: (
        <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-900">
          <rect width="400" height="300" fill="#0f172a" />
          <path d="M 60 200 Q 200 220 340 200 L 340 300 L 60 300 Z" fill="#b91c1c" opacity="0.4" />
          <rect x="110" y="90" width="40" height="110" rx="8" fill="#f8fafc" />
          <rect x="155" y="80" width="42" height="120" rx="8" fill="#ffffff" />
          <rect x="202" y="80" width="42" height="120" rx="8" fill="#ffffff" />
          <rect x="248" y="90" width="40" height="110" rx="8" fill="#f8fafc" />
          {/* Radiance highlights */}
          <circle cx="170" cy="100" r="3" fill="#38bdf8" />
          <circle cx="225" cy="100" r="3" fill="#38bdf8" />
          <text x="200" y="260" fill="#5eead4" textAnchor="middle" fontSize="13" fontFamily="sans-serif">
            Luminous 7-shade lift with zero sensitivity
          </text>
        </svg>
      )
    }
  ];

  const currentCase = cases[activeCaseIdx];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  return (
    <section id="results" className="py-20 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
            Clinical Case Results
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight text-balance">
            Real smile transformations crafted with precision digital dentistry.
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Drag the interactive slider below to inspect clinical outcomes across same-day CEREC ceramic crowns, clear aligners, and aesthetic restorations.
          </p>
        </div>

        {/* Case Study Selector Tabs */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setActiveCaseIdx(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCaseIdx === idx
                  ? 'bg-teal-800 text-white shadow-sm'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-100'
              }`}
            >
              {c.treatment}
            </button>
          ))}
        </div>

        {/* Interactive Before/After Split Viewer */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Split Canvas */}
          <div className="lg:col-span-7">
            <div
              className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-neutral-800 shadow-xl select-none cursor-ew-resize bg-slate-950"
              onMouseMove={handleSliderMove}
              onTouchMove={handleSliderMove}
            >
              {/* After Layer (Base, full width) */}
              <div className="absolute inset-0">
                {currentCase.afterSvg}
              </div>

              {/* Before Layer (Clipped by slider position) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="absolute inset-0 w-[800px] max-w-none sm:w-[1000px]">
                  {currentCase.beforeSvg}
                </div>
              </div>

              {/* Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-slate-900 shadow-lg flex items-center justify-center border-2 border-teal-700">
                  <ArrowLeftRight className="w-4 h-4 text-teal-800" />
                </div>
              </div>

              {/* Overlaid corner labels */}
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/10 pointer-events-none">
                Before
              </div>
              <div className="absolute top-3 right-3 bg-teal-950/80 backdrop-blur-sm text-teal-200 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-teal-700/40 pointer-events-none">
                After Restoration
              </div>

              {/* Instruction pill */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-slate-300 text-[11px] px-3 py-1 rounded-full pointer-events-none">
                Drag slider left / right to compare
              </div>
            </div>
          </div>

          {/* Case Detail Card */}
          <div className="lg:col-span-5 bg-white p-7 rounded-2xl border border-neutral-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 uppercase tracking-wider">
                <span>Clinical Overview</span>
                <span aria-hidden="true">·</span>
                <span className="text-neutral-500 font-normal">{currentCase.duration}</span>
              </div>

              <h3 className="text-xl font-bold font-display text-neutral-900 mt-2">
                {currentCase.title}
              </h3>

              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                {currentCase.description}
              </p>

              <div className="mt-6 space-y-3 pt-4 border-t border-neutral-100">
                <div className="flex items-start gap-2.5 text-xs text-neutral-700">
                  <Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <span><strong>Assessment:</strong> {currentCase.beforeLabel}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-700">
                  <Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <span><strong>Outcome:</strong> {currentCase.afterLabel}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-700">
                  <Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <span><strong>Clinical Notes:</strong> {currentCase.clinicalNotes}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-[11px] text-neutral-400">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>Individual results vary based on oral health, bone structure, and clinical indications.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
