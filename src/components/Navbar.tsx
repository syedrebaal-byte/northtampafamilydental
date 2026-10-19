import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment, onOpenEmergency }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Notification / Urgency Triage Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-teal-400 font-medium">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>Mon–Thu 8am–5pm · Fri 8am–12pm</span>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>2526 E Bearss Ave, Tampa, FL</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenEmergency}
              type="button"
              className="text-amber-300 hover:text-amber-200 font-medium text-xs underline underline-offset-2 transition-colors cursor-pointer"
            >
              Dental Emergency? Same-Day Priority
            </button>
            <span className="text-slate-600">·</span>
            <a
              href={CLINIC_INFO.phoneRaw}
              className="font-semibold text-white hover:text-teal-300 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3 h-3 text-teal-400" />
              <span className="tabular-nums">{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation: Follows strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-20">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#"
            className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 hover:text-teal-800 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5 font-display"
          >
            <span className="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center text-sm font-semibold shadow-sm">
              NT
            </span>
            <span>North Tampa Family Dental</span>
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a
              href="#services"
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Services
            </a>
            <a
              href="#doctor"
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Meet Dr. Rey
            </a>
            <a
              href="#technology"
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Technology
            </a>
            <a
              href="#results"
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Results
            </a>
            <a
              href="#savings-plan"
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Insurance & Plans
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAppointment}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-teal-800 hover:bg-teal-900 rounded-lg shadow-sm transition-all hover:shadow active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-teal-200" />
              <span>Request Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenAppointment}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-teal-800 rounded-lg whitespace-nowrap"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-teal-700 transition-colors"
              >
                Services & CEREC Crowns
              </a>
              <a
                href="#doctor"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-teal-700 transition-colors"
              >
                Meet Dr. Barbara Rey, DDS
              </a>
              <a
                href="#technology"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-teal-700 transition-colors"
              >
                Modern Dental Technology
              </a>
              <a
                href="#results"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-teal-700 transition-colors"
              >
                Before & After Gallery
              </a>
              <a
                href="#savings-plan"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-teal-700 transition-colors"
              >
                Insurance & Dental Savings Plan
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-teal-700 transition-colors"
              >
                Hours & Location
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-teal-800 rounded-lg shadow-sm"
              >
                Schedule Online
              </button>
              <a
                href={CLINIC_INFO.phoneRaw}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-teal-800 border border-teal-800/20 bg-teal-50 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
