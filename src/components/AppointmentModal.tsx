import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, Phone, Shield, AlertCircle, ArrowRight } from 'lucide-react';
import { CLINIC_INFO, SERVICES_CATALOG, ServiceItem } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [serviceId, setServiceId] = useState<string>('preventive-hygiene');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<'Morning (8am–12pm)' | 'Afternoon (1pm–5pm)'>('Morning (8am–12pm)');
  const [isEmergency, setIsEmergency] = useState<boolean>(false);
  const [hasAnxiety, setHasAnxiety] = useState<boolean>(false);
  
  // Patient details
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [paymentType, setPaymentType] = useState<'insurance' | 'savings-plan' | 'self-pay'>('insurance');
  const [insuranceName, setInsuranceName] = useState('');
  const [patientNotes, setPatientNotes] = useState('');

  // Submission state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialService) {
      setServiceId(initialService.id);
    }
    // Set default date to tomorrow's date formatted as YYYY-MM-DD
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setPreferredDate(`${yyyy}-${mm}-${dd}`);
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please provide your full name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 7) {
      setErrorMessage('Please provide a valid telephone number.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Generate readable appointment confirmation reference
    const refCode = `NTFD-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionId(refCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  const selectedServiceObj = SERVICES_CATALOG.find((s) => s.id === serviceId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={handleReset}
      ></div>

      {/* Modal Dialog */}
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 my-6 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white relative">
          <button
            type="button"
            onClick={handleReset}
            className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-xs font-semibold text-teal-300 uppercase tracking-wider">
            North Tampa Family Dental · Direct Scheduling
          </div>
          <h2 className="text-2xl font-bold font-display text-white mt-1">
            Request Your Appointment
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            2526 E Bearss Ave, Tampa, FL · Dr. Barbara Rey, DDS
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            /* Confirmation Screen */
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                  Request Received
                </span>
                <h3 className="text-2xl font-bold font-display text-neutral-900 mt-1">
                  Thank You, {fullName}!
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Confirmation Reference: <span className="font-mono font-bold text-neutral-800">{submissionId}</span>
                </p>
              </div>

              <div className="max-w-md mx-auto p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-left text-xs space-y-2 text-neutral-700">
                <div className="flex justify-between py-1 border-b border-neutral-200/60">
                  <span className="text-neutral-500">Service:</span>
                  <span className="font-semibold text-neutral-900">{selectedServiceObj?.title || 'Dental Visit'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-200/60">
                  <span className="text-neutral-500">Requested Date & Time:</span>
                  <span className="font-semibold text-neutral-900">{preferredDate} ({preferredTime})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-200/60">
                  <span className="text-neutral-500">Patient Phone:</span>
                  <span className="font-semibold text-neutral-900">{phone}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500">Payment Preference:</span>
                  <span className="font-semibold text-neutral-900">
                    {paymentType === 'insurance' ? `Insurance (${insuranceName || 'PPO'})` : paymentType === 'savings-plan' ? 'NTFD Savings Plan' : 'Self-Pay'}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 max-w-md mx-auto leading-relaxed">
                <strong>Next Step:</strong> Our patient coordinator will review Dr. Rey's clinical schedule and call/text you at <strong>{phone}</strong> to confirm your exact appointment slot.
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={CLINIC_INFO.phoneRaw}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200 rounded-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>Questions? Call (813) 773-0192</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-lg cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Form Wizard */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Select Service & Urgency */}
              <div>
                <label className="block text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-2">
                  1. What service or care do you need?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES_CATALOG.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setServiceId(s.id)}
                      className={`p-3 text-left rounded-xl border text-xs transition-all cursor-pointer ${
                        serviceId === s.id
                          ? 'border-teal-700 bg-teal-50/80 text-teal-950 font-semibold shadow-sm'
                          : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                      }`}
                    >
                      <div className="font-semibold">{s.title}</div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">{s.durationEstimate}</div>
                    </button>
                  ))}
                </div>

                {/* Emergency / Anxiety Flags */}
                <div className="mt-3 flex flex-wrap gap-4 pt-1">
                  <label className="flex items-center gap-2 text-xs text-rose-800 font-medium cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isEmergency}
                      onChange={(e) => setIsEmergency(e.target.checked)}
                      className="rounded border-rose-300 text-rose-600 focus:ring-rose-500"
                    />
                    <span>This is an urgent dental emergency / acute pain</span>
                  </label>

                  <label className="flex items-center gap-2 text-xs text-teal-900 font-medium cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasAnxiety}
                      onChange={(e) => setHasAnxiety(e.target.checked)}
                      className="rounded border-teal-400 text-teal-600 focus:ring-teal-500"
                    />
                    <span>I have dental anxiety / would like laughing gas</span>
                  </label>
                </div>
              </div>

              {/* Step 2: Preferred Scheduling */}
              <div className="pt-4 border-t border-neutral-200">
                <label className="block text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-2">
                  2. Preferred Date & Time Window
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-neutral-600 mb-1">Target Date</label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      required
                      className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 bg-white focus:outline-none focus:border-teal-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-600 mb-1">Time Preference</label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value as any)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 bg-white focus:outline-none focus:border-teal-600"
                    >
                      <option value="Morning (8am–12pm)">Morning (8:00 AM – 12:00 PM)</option>
                      <option value="Afternoon (1pm–5pm)">Afternoon (1:00 PM – 5:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Contact & Payment Method */}
              <div className="pt-4 border-t border-neutral-200">
                <label className="block text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-2">
                  3. Your Contact Details
                </label>

                {errorMessage && (
                  <div className="mb-3 p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-neutral-600 mb-1">Full Legal Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Maria Gonzalez"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:border-teal-600"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-600 mb-1">Phone Number (Call/Text) *</label>
                    <input
                      type="tel"
                      placeholder="(813) 555-0123"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:border-teal-600"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-neutral-600 mb-1">Email Address *</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:border-teal-600"
                    />
                  </div>

                  {/* Payment Type Selection */}
                  <div className="sm:col-span-2">
                    <label className="block text-neutral-600 mb-1">Coverage / Payment Method</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setPaymentType('insurance')}
                        className={`p-2 rounded-lg border text-xs text-center cursor-pointer ${
                          paymentType === 'insurance'
                            ? 'border-teal-700 bg-teal-50 text-teal-900 font-semibold'
                            : 'border-neutral-200 text-neutral-700'
                        }`}
                      >
                        Dental PPO
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentType('savings-plan')}
                        className={`p-2 rounded-lg border text-xs text-center cursor-pointer ${
                          paymentType === 'savings-plan'
                            ? 'border-teal-700 bg-teal-50 text-teal-900 font-semibold'
                            : 'border-neutral-200 text-neutral-700'
                        }`}
                      >
                        NTFD Savings Plan
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentType('self-pay')}
                        className={`p-2 rounded-lg border text-xs text-center cursor-pointer ${
                          paymentType === 'self-pay'
                            ? 'border-teal-700 bg-teal-50 text-teal-900 font-semibold'
                            : 'border-neutral-200 text-neutral-700'
                        }`}
                      >
                        Self-Pay / CareCredit
                      </button>
                    </div>

                    {paymentType === 'insurance' && (
                      <div className="mt-2">
                        <input
                          type="text"
                          placeholder="Insurance carrier name (e.g. Delta, MetLife, Cigna)"
                          value={insuranceName}
                          onChange={(e) => setInsuranceName(e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-neutral-300 focus:outline-none focus:border-teal-600"
                        />
                      </div>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-neutral-600 mb-1">Additional Notes or Symptoms (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="Any specific tooth pain, aesthetic goals, or past dental concerns..."
                      value={patientNotes}
                      onChange={(e) => setPatientNotes(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 focus:outline-none focus:border-teal-600"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-neutral-500">
                  We respect your privacy · HIPAA Compliant Communications
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-teal-800 hover:bg-teal-900 rounded-lg shadow-md transition-all cursor-pointer whitespace-nowrap"
                >
                  Submit Appointment Request
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
