import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, Shield } from 'lucide-react';
import { SERVICES_CATALOG, ServiceItem } from '../data/clinicData';

interface SmileAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookRecommended: (service: ServiceItem) => void;
}

export const SmileAssessmentModal: React.FC<SmileAssessmentModalProps> = ({
  isOpen,
  onClose,
  onBookRecommended,
}) => {
  const [goal, setGoal] = useState<string>('crown');
  const [timeline, setTimeline] = useState<string>('soon');
  const [showResult, setShowResult] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  const getRecommendedService = (): ServiceItem => {
    if (goal === 'crown') {
      return SERVICES_CATALOG.find((s) => s.id === 'cerec-crowns') || SERVICES_CATALOG[0];
    } else if (goal === 'aligners') {
      return SERVICES_CATALOG.find((s) => s.id === 'orthofx-clear-aligners') || SERVICES_CATALOG[1];
    } else if (goal === 'whitening') {
      return SERVICES_CATALOG.find((s) => s.id === 'cosmetic-whitening-veneers') || SERVICES_CATALOG[4];
    } else if (goal === 'implant') {
      return SERVICES_CATALOG.find((s) => s.id === 'dental-implants') || SERVICES_CATALOG[2];
    }
    return SERVICES_CATALOG.find((s) => s.id === 'preventive-hygiene') || SERVICES_CATALOG[3];
  };

  const recommended = getRecommendedService();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 my-8">
        
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Close assessment"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-300 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-teal-300" />
            <span>Interactive Smile Assessment</span>
          </div>
          <h3 className="text-xl font-bold font-display text-white mt-1">
            Find Your Ideal Treatment Path
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Answer 2 quick questions to see which technology fits your smile goals.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {!showResult ? (
            <form onSubmit={handleCalculate} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-2">
                  1. What is your primary dental or aesthetic goal?
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'crown', label: 'Restore a fractured tooth or failing filling in 1 day', sub: 'CEREC® Single-Visit Restoration' },
                    { id: 'aligners', label: 'Straighten crooked or crowded teeth discreetly', sub: 'OrthoFX Clear Aligners' },
                    { id: 'whitening', label: 'Whiten deep stains & brighten my smile', sub: 'Professional In-Office Bleaching / Veneers' },
                    { id: 'implant', label: 'Permanently replace a missing tooth', sub: 'Dental Implant Restoration' },
                    { id: 'checkup', label: 'Routine family dental checkup & gentle cleaning', sub: 'Comprehensive Preventive Hygiene' }
                  ].map((opt) => (
                    <label
                      key={opt.id}
                      className={`block p-3 rounded-xl border text-xs cursor-pointer transition-colors ${
                        goal === opt.id
                          ? 'border-teal-700 bg-teal-50/80 font-medium text-teal-950'
                          : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="goal"
                        checked={goal === opt.id}
                        onChange={() => setGoal(opt.id)}
                        className="sr-only"
                      />
                      <div className="font-semibold text-neutral-900">{opt.label}</div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">{opt.sub}</div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-100">
                <label className="block text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-2">
                  2. What is your desired timeline?
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setTimeline('soon')}
                    className={`p-2.5 rounded-lg border text-center cursor-pointer ${
                      timeline === 'soon'
                        ? 'border-teal-700 bg-teal-50 text-teal-900 font-semibold'
                        : 'border-neutral-200 text-neutral-700'
                    }`}
                  >
                    As Soon As Possible
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeline('upcoming')}
                    className={`p-2.5 rounded-lg border text-center cursor-pointer ${
                      timeline === 'upcoming'
                        ? 'border-teal-700 bg-teal-50 text-teal-900 font-semibold'
                        : 'border-neutral-200 text-neutral-700'
                    }`}
                  >
                    Within Next Month
                  </button>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-teal-800 hover:bg-teal-900 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  View Tailored Clinical Match →
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4 text-center">
              <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 text-left">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-teal-700">
                  Recommended Treatment Pathway:
                </div>
                <h4 className="text-xl font-bold font-display text-neutral-900 mt-1">
                  {recommended.title}
                </h4>
                <p className="text-xs text-neutral-700 mt-2 leading-relaxed">
                  {recommended.summary}
                </p>

                <div className="mt-4 pt-3 border-t border-teal-200 text-xs text-teal-950 font-medium space-y-1">
                  <div>· Estimated Appointment: {recommended.durationEstimate}</div>
                  <div>· Primary Technology: {recommended.technologyUsed}</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={() => setShowResult(false)}
                  className="w-full sm:w-1/3 py-2.5 text-xs text-neutral-600 hover:text-neutral-900 cursor-pointer"
                >
                  ← Re-assess
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onBookRecommended(recommended);
                  }}
                  className="w-full sm:w-2/3 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-teal-800 hover:bg-teal-900 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Book {recommended.title}
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
