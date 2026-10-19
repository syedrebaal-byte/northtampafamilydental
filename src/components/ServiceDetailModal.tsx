import React from 'react';
import { X, Check, Clock, Cpu, HelpCircle, Calendar, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../data/clinicData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-slate-900 text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-wider">
            <span>{service.category} Dentistry</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{service.durationEstimate}</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-2">
            {service.title}
          </h2>

          <p className="mt-2 text-sm text-slate-300 max-w-xl">
            {service.tagline}
          </p>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-neutral-800">
          
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
              Clinical Overview
            </h4>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Procedure Steps */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-3">
              What to Expect During Your Appointment
            </h4>
            <div className="space-y-2.5">
              {service.procedureSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 text-xs">
                  <span className="w-5 h-5 rounded-full bg-teal-800 text-white font-bold flex items-center justify-center shrink-0 text-[11px]">
                    {idx + 1}
                  </span>
                  <span className="text-neutral-700 leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Column: Key Benefits & Technology */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-3">
                Key Patient Benefits
              </h4>
              <ul className="space-y-2">
                {service.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-3">
                Technology & Candidate Criteria
              </h4>
              <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200 text-xs space-y-3">
                <div className="flex items-start gap-2">
                  <Cpu className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-teal-950 block">In-Office Technology:</span>
                    <span className="text-teal-900">{service.technologyUsed}</span>
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-teal-950 block mb-1">Recommended For:</span>
                  <ul className="list-disc list-inside text-teal-900 space-y-0.5 pl-1">
                    {service.idealFor.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-3 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-teal-700" />
                <span>Frequently Asked Questions</span>
              </h4>
              <div className="space-y-3">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs">
                    <div className="font-semibold text-neutral-900 mb-1">{faq.question}</div>
                    <div className="text-neutral-600 leading-relaxed">{faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-neutral-500">
            Accepting major PPOs & Dental Savings Plan
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-medium text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookService(service);
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-teal-800 hover:bg-teal-900 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-teal-200" />
              <span>Book This Service</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
