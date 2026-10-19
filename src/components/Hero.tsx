import React from 'react';
import { Calendar, Phone, ShieldCheck, Clock, Award, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onOpenAppointment: () => void;
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment, onOpenAssessment }) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle architectural ambient backdrop */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Proposition & Conversion */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet 1-line text kicker (no pill boxes) */}
            <div className="flex items-center gap-2 text-xs font-medium text-teal-300 tracking-wider uppercase mb-3">
              <span>Tampa Bay Comprehensive Dentistry</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>Led by Dr. Barbara Rey, DDS</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white text-balance leading-[1.12]">
              Advanced, compassionate dental care tailored to your family’s comfort.
            </h1>

            {/* Body Prose */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Experience modern dentistry with heart at 2526 E Bearss Ave. From permanent CEREC® same-day crowns and OrthoFX clear aligners to gentle preventive care, Dr. Barbara Rey combines hospital-grade AEGD training from NYU Langone Health with a genuinely warm, anxiety-free approach.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-teal-300 hover:bg-teal-200 rounded-lg shadow-lg hover:shadow-teal-300/20 transition-all active:scale-95 flex items-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-slate-900" />
                <span>Request Your Appointment</span>
              </button>

              <a
                href={CLINIC_INFO.phoneRaw}
                className="px-5 py-3.5 text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center gap-2.5 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span className="tabular-nums">Call (813) 773-0192</span>
              </a>

              <button
                type="button"
                onClick={onOpenAssessment}
                className="px-4 py-3.5 text-xs font-medium text-slate-400 hover:text-white transition-colors underline underline-offset-4 cursor-pointer whitespace-nowrap"
              >
                Take 30-Sec Smile Assessment →
              </button>
            </div>

            {/* Adjacent Trust Proof - Verified Clinic Facts */}
            <div className="mt-10 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>NYU Langone AEGD Residency Trained</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Single-Visit CEREC® Ceramic Crowns</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Same-Day Emergency Triage</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Focal Carrier Image */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-800 h-80 sm:h-96 lg:h-full min-h-[380px] group">
              <img
                src={IMAGES.heroClinic}
                alt="North Tampa Family Dental pristine modern dental operatory with natural daylight and Florida landscape"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Measured Scrim Overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>

              {/* Informative Image Caption Strip */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 border border-slate-700/70 backdrop-blur-md">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-sm font-semibold text-white">North Tampa Family Dental Suite</h2>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Sunlit, spa-like operatories equipped with CEREC® milling & iTero® 3D scanning.
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-teal-300 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800/80 whitespace-nowrap shrink-0">
                    Tampa, FL
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-Width 4-Column KPI Trust Strip below Hero Split */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-4">
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">90 Min</div>
            <div className="text-xs text-slate-400 mt-1">Single-Visit CEREC® Ceramic Crowns</div>
          </div>
          <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-4">
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">100%</div>
            <div className="text-xs text-slate-400 mt-1">Digital Impressions (No Goop or Trays)</div>
          </div>
          <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-4">
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">English & Sp.</div>
            <div className="text-xs text-slate-400 mt-1">Bilingual Patient Communication</div>
          </div>
          <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-4">
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">Major PPOs</div>
            <div className="text-xs text-slate-400 mt-1">Accepted + In-House Savings Plan</div>
          </div>
        </div>

      </div>
    </section>
  );
};
