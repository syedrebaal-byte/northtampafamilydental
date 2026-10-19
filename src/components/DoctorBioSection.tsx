import React from 'react';
import { Award, BookOpen, Heart, Languages, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { IMAGES } from '../assets/images';

interface DoctorBioSectionProps {
  onOpenAppointment: () => void;
}

export const DoctorBioSection: React.FC<DoctorBioSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section id="doctor" className="py-20 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Doctor Portrait Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-100 aspect-[3/4]">
                <img
                  src={IMAGES.drBarbaraRey}
                  alt="Dr. Barbara Rey, DDS - Lead General Dentist at North Tampa Family Dental"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Overlaid credentials card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-md">
                  <div className="font-bold text-neutral-900 font-display text-base">
                    Dr. Barbara Rey, DDS
                  </div>
                  <div className="text-xs text-teal-800 font-medium mt-0.5">
                    Lead Dentist & General Practitioner
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-1">
                    AEGD Residency, NYU Langone Health · New York University
                  </div>
                </div>
              </div>

              {/* Languages Spoken Tag */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-600 bg-neutral-50 py-2 px-4 rounded-lg border border-neutral-200">
                <Languages className="w-4 h-4 text-teal-700" />
                <span>Consultations available in <strong>English</strong> and <strong>Spanish (Español)</strong></span>
              </div>
            </div>
          </div>

          {/* Bio & Clinical Credentials Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
              Meet Your Lead Dentist
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight text-balance">
              Compassionate clinical precision guided by patient trust.
            </h2>

            <p className="mt-5 text-base text-neutral-700 leading-relaxed">
              {CLINIC_INFO.doctorBio.shortBio}
            </p>

            <div className="mt-4 space-y-3 text-sm text-neutral-600 leading-relaxed">
              <p>{CLINIC_INFO.doctorBio.fullBio[1]}</p>
              <p>{CLINIC_INFO.doctorBio.fullBio[2]}</p>
            </div>

            {/* Academic & Training Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <div className="flex items-center gap-2.5 text-neutral-900 font-semibold text-sm">
                  <Award className="w-4 h-4 text-teal-700" />
                  <span>Hospital-Based Residency</span>
                </div>
                <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                  Completed rigorous Advanced Education in General Dentistry (AEGD) at NYU Langone Health, managing complex restorative and surgical cases.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <div className="flex items-center gap-2.5 text-neutral-900 font-semibold text-sm">
                  <BookOpen className="w-4 h-4 text-teal-700" />
                  <span>Public Health Focus</span>
                </div>
                <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                  Earned an Advanced Certificate in Public Health from New York University, championing preventive community oral health and patient education.
                </p>
              </div>
            </div>

            {/* Key Clinical Commitments */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Thorough visual explanations with high-definition digital cameras before any treatment begins</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Zero judgment for overdue dental visits or anxious patients</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Single-visit ceramic restorations designed and milled directly under her supervision</span>
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-teal-800 hover:bg-teal-900 rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                Book with Dr. Rey
              </button>
              <a
                href={CLINIC_INFO.phoneRaw}
                className="text-xs font-semibold text-neutral-800 hover:text-teal-700 transition-colors"
              >
                Or Call {CLINIC_INFO.phone}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
