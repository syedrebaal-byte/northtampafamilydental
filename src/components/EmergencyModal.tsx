import React from 'react';
import { X, Phone, AlertTriangle, Clock, MapPin, ShieldAlert, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestEmergencySlot: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({
  isOpen,
  onClose,
  onRequestEmergencySlot,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-rose-200 overflow-hidden z-10 my-6">
        
        {/* Urgent Header */}
        <div className="p-6 bg-rose-900 text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg bg-rose-950/80 text-rose-200 hover:text-white transition-colors cursor-pointer"
            aria-label="Close emergency info"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-200">
            <ShieldAlert className="w-4 h-4 text-rose-300" />
            <span>Immediate Triage Guidance</span>
          </div>

          <h3 className="text-2xl font-bold font-display text-white mt-1">
            Same-Day Emergency Dental Care
          </h3>

          <p className="text-xs text-rose-100 mt-1">
            If you are experiencing severe oral pain or trauma, call us immediately at (813) 773-0192.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-xs text-neutral-700">
          
          {/* Direct Call Banner */}
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <div className="font-bold text-rose-900 text-sm">Call the Clinic Directly:</div>
              <div className="text-neutral-600 mt-0.5">We keep dedicated daily emergency slots available.</div>
            </div>
            <a
              href={CLINIC_INFO.phoneRaw}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-rose-700 hover:bg-rose-800 rounded-lg shadow-sm flex items-center gap-2 whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>(813) 773-0192</span>
            </a>
          </div>

          {/* Quick First-Aid Guidance */}
          <div>
            <h4 className="font-bold text-neutral-900 uppercase tracking-wider mb-2">
              Critical First-Aid Steps While En Route:
            </h4>
            <div className="space-y-2">
              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                <span className="font-semibold text-neutral-900 block">Knocked-Out Permanent Tooth:</span>
                <span>Hold tooth by the crown (never touch the root). Gently place in a glass of cold milk or saliva and arrive at our office within 60 minutes for the highest chance of re-implantation.</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                <span className="font-semibold text-neutral-900 block">Severe Throbbing Toothache:</span>
                <span>Rinse with warm salt water. Gently floss to dislodge trapped food. Never place aspirin directly on the gums, as this causes chemical tissue burns.</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                <span className="font-semibold text-neutral-900 block">Broken Tooth or Lost Crown:</span>
                <span>Save any fragments. Avoid chewing on that side. Dr. Rey can mill a permanent CEREC replacement crown the same day.</span>
              </div>
            </div>
          </div>

          {/* Address reminder */}
          <div className="pt-2 border-t border-neutral-200 flex items-center gap-2 text-neutral-600">
            <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
            <span>2526 E Bearss Ave, Tampa, FL 33613 (Near Livingston Ave & USF)</span>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-1/3 py-2.5 text-neutral-600 hover:text-neutral-900 cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestEmergencySlot();
              }}
              className="w-full sm:w-2/3 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm cursor-pointer"
            >
              Request Same-Day Emergency Slot Online →
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
