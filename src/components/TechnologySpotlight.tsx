import React from 'react';
import { Cpu, Scan, ShieldCheck, Zap } from 'lucide-react';
import { OFFICE_TECHNOLOGIES } from '../data/clinicData';
import { IMAGES } from '../assets/images';
import { InteractiveTooth3D } from './InteractiveTooth3D';

interface TechnologySpotlightProps {
  onOpenAppointment: () => void;
}

export const TechnologySpotlight: React.FC<TechnologySpotlightProps> = ({ onOpenAppointment }) => {
  return (
    <section id="technology" className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
            In-House Digital Dentistry
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight text-balance">
            State-of-the-art dental technology engineered for faster, gentler treatments.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            We invest continuously in clinical dental technology so our patients enjoy painless digital scans, single-visit permanent crowns, and minimal time away from work and family.
          </p>
        </div>

        {/* 2-Column Split: Interactive 3D Restoration Model + Technology Image & Details */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive 3D Anatomical & Restoration Model */}
          <div className="lg:col-span-7">
            <InteractiveTooth3D onLearnMore={onOpenAppointment} />
            
            {/* Context callout below 3D model */}
            <div className="mt-6 p-5 rounded-xl bg-slate-800/70 border border-slate-700/70 flex items-start gap-4">
              <Cpu className="w-5 h-5 text-teal-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-white">Why Single-Visit CEREC® Matters to Patients</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Traditional crowns take two to three weeks and require messy alginate putty impressions, numbing twice, and uncomfortable temporary plastic caps that frequently break. With our CEREC diamond milling unit, Dr. Rey creates, cures, and bonds your permanent biocompatible porcelain crown in a single 90-minute visit.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Technology In Action Photo & Tech Grid */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-xl aspect-[4/3] bg-slate-800">
              <img
                src={IMAGES.technologyCerec}
                alt="iTero 3D digital scanner and CEREC milling restoration demonstration at North Tampa Family Dental"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 bg-slate-900/80 p-2.5 rounded-lg border border-slate-700/80 backdrop-blur-sm">
                <span className="font-semibold text-white">iTero® 3D Intraoral Scanning:</span> 6,000 frames/sec for precision crowns & OrthoFX aligners without gagging.
              </div>
            </div>

            {/* 4 Technologies List */}
            <div className="space-y-3">
              {OFFICE_TECHNOLOGIES.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 hover:border-teal-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">{tech.name}</span>
                    <span className="text-teal-400 font-mono text-[11px]">{tech.subtitle}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
