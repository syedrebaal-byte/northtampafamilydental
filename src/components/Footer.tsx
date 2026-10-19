import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment, onOpenEmergency }) => {
  return (
    <footer id="contact" className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Bio */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center text-sm font-semibold">
                NT
              </span>
              <span className="text-lg font-bold font-display tracking-tight text-white">
                North Tampa Family Dental
              </span>
            </div>
            
            <p className="mt-4 text-xs text-slate-400 leading-relaxed">
              Compassionate family, cosmetic, and restorative dentistry in Tampa, FL. Led by Dr. Barbara Rey, DDS, AEGD NYU Langone Health graduate.
            </p>

            <div className="mt-5 space-y-2 text-xs text-slate-300">
              <a
                href={CLINIC_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-slate-400 hover:text-teal-300 transition-colors"
              >
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  {CLINIC_INFO.address.street}, {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}
                </span>
              </a>

              <a
                href={CLINIC_INFO.phoneRaw}
                className="flex items-center gap-2 text-slate-300 hover:text-teal-300 transition-colors font-semibold tabular-nums"
              >
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{CLINIC_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-teal-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Hours of Operation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-4 flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>Office Hours</span>
            </h4>
            <div className="space-y-2.5 text-xs">
              {CLINIC_INFO.hours.map((h, idx) => (
                <div key={idx} className="flex justify-between py-1 border-b border-slate-900 text-slate-300">
                  <span className="text-slate-400">{h.days}:</span>
                  <span className="font-medium text-white tabular-nums">{h.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
              <span className="text-amber-300 font-semibold block mb-0.5">Emergency Triage:</span>
              Daily on-call priority available for active tooth trauma and pain.
            </div>
          </div>

          {/* Column 3: Clinical Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-4">
              Featured Treatments
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-teal-300 transition-colors">CEREC® Same-Day Crowns</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">OrthoFX Clear Aligners</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Dental Implant Restorations</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Cosmetic Teeth Whitening</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Gentle Root Canal Therapy</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Nitrous Oxide Anxiety Relief</a></li>
              <li><a href="#savings-plan" className="hover:text-teal-300 transition-colors">In-House Dental Savings Plan</a></li>
            </ul>
          </div>

          {/* Column 4: Quick Action & Directions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-4">
              Appointments & Location
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Welcoming new patients of all ages from North Tampa, Carrollwood, Lutz, Temple Terrace, and USF.
            </p>

            <div className="mt-4 space-y-2.5">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-teal-300 hover:bg-teal-200 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Schedule Appointment
              </button>

              <button
                type="button"
                onClick={onOpenEmergency}
                className="w-full py-2.5 px-4 text-xs font-semibold text-rose-300 hover:text-white bg-slate-900 hover:bg-rose-950/60 border border-rose-900/60 rounded-lg transition-colors cursor-pointer"
              >
                Dental Emergency Care
              </button>

              <a
                href={CLINIC_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xs text-slate-400 hover:text-white underline underline-offset-4 pt-1"
              >
                Get Directions on Google Maps →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Quiet legal, ADA Accessibility & Medical Disclaimer */}
        <div className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} North Tampa Family Dental · All rights reserved. Dr. Barbara Rey, DDS.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span>HIPAA Compliant Practice</span>
            <span aria-hidden="true">·</span>
            <span>ADA Accessible Facility</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500">
              Information provided is educational and does not substitute for an in-person dental diagnosis.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
