import React from 'react';
import { HeartHandshake, Smile, ShieldCheck, Sparkles, VolumeX, Flame } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface PatientExperienceProps {
  onOpenAppointment: () => void;
}

export const PatientExperience: React.FC<PatientExperienceProps> = ({ onOpenAppointment }) => {
  const comfortAmenities = [
    {
      title: 'Nitrous Oxide Sedation',
      desc: 'Gentle laughing gas eases dental anxiety within minutes, allowing you to relax comfortably and drive home safely afterward.'
    },
    {
      title: 'Gentle & Unhurried Care',
      desc: 'Dr. Rey takes time to listen to your concerns, explain each step, and pause whenever you need a breather.'
    },
    {
      title: 'Transparent Upfront Fees',
      desc: 'No unexpected bills. We review all treatment estimates, insurance coverage, and financing options before starting.'
    },
    {
      title: 'Bilingual Team',
      desc: 'Complete consultations and treatment plans available fluently in English and Spanish for clear communication.'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Asset & Trust Banner */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl aspect-[4/3] bg-neutral-100">
              <img
                src={IMAGES.patientCare}
                alt="Compassionate patient consultation at North Tampa Family Dental"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-neutral-200/90 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
                  <Smile className="w-4 h-4 text-teal-700" />
                  <span>Our Patient Promise</span>
                </div>
                <p className="text-xs text-neutral-700 mt-1">
                  "We treat every patient like our own family—with kindness, patience, and meticulous attention to comfort."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Comfort Amenities */}
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
              Comfort-First Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight text-balance">
              Dentistry designed to feel reassuring, calm, and completely stress-free.
            </h2>

            <p className="mt-4 text-base text-neutral-600 leading-relaxed">
              We know dental visits can evoke anxiety. From the welcoming atmosphere of our reception room to state-of-the-art sedation amenities, our entire practice is structured to make you feel safe and in control.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {comfortAmenities.map((amenity, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80">
                  <h4 className="text-sm font-semibold text-neutral-900">{amenity.title}</h4>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">{amenity.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-teal-800 hover:bg-teal-900 rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                Schedule Your Calm Visit
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
