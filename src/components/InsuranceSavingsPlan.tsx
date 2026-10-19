import React, { useState } from 'react';
import { ShieldCheck, Check, Calculator, CreditCard, Sparkles, AlertCircle } from 'lucide-react';
import { ACCEPTED_INSURANCES, FINANCING_OPTIONS, SAVINGS_PLAN_DETAILS } from '../data/clinicData';

interface InsuranceSavingsPlanProps {
  onOpenAppointment: () => void;
}

export const InsuranceSavingsPlan: React.FC<InsuranceSavingsPlanProps> = ({ onOpenAppointment }) => {
  const [selectedInsuranceSearch, setSelectedInsuranceSearch] = useState('');
  const [familyMembersCount, setFamilyMembersCount] = useState(1);
  const [needsCrown, setNeedsCrown] = useState(false);
  const [needsFilling, setNeedsFilling] = useState(false);

  // Simple realistic savings estimate calculator
  const baseCostCleanings = familyMembersCount * 420; // 2 cleanings + exams + xrays ~ $420 retail per person
  const procedureCost = (needsCrown ? 1400 : 0) + (needsFilling ? 280 : 0);
  const totalStandardCost = baseCostCleanings + procedureCost;

  // Plan membership cost
  const planAnnualCost = 349 + Math.max(0, familyMembersCount - 1) * 299;
  // Plan covers 100% of cleanings/exams + 20% discount on procedures
  const planProcedureCost = procedureCost * 0.8;
  const totalWithPlan = planAnnualCost + planProcedureCost;
  const estimatedSavings = Math.max(0, totalStandardCost - totalWithPlan);

  const matchedInsurances = ACCEPTED_INSURANCES.filter((ins) =>
    ins.toLowerCase().includes(selectedInsuranceSearch.toLowerCase())
  );

  return (
    <section id="savings-plan" className="py-20 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
            Transparent Pricing & Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight text-balance">
            Affordable, premium dental care — with or without insurance.
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            We believe world-class dentistry should never be accompanied by hidden surprises. We accept most major PPO insurances, submit all paperwork for you, and offer our exclusive In-House Dental Savings Plan for uninsured families.
          </p>
        </div>

        {/* 2-Column Split: In-House Savings Plan vs Insurance & Financing */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: NTFD Dental Savings Plan Card with Interactive Calculator */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-b from-teal-900 to-slate-900 text-white p-7 sm:p-9 shadow-xl border border-teal-800 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-teal-700/60 pb-5">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                    No Dental Insurance? No Problem.
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mt-1">
                    {SAVINGS_PLAN_DETAILS.name}
                  </h3>
                </div>
                <div className="text-right sm:text-right">
                  <span className="text-2xl font-bold font-display text-teal-200 tabular-nums">
                    $349
                  </span>
                  <span className="text-xs text-teal-300 block">/ individual year</span>
                </div>
              </div>

              {/* What is included */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-300 mb-3">
                  Included Every 12 Months:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SAVINGS_PLAN_DETAILS.includes.slice(0, 6).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Plan Savings Calculator */}
              <div className="mt-8 pt-6 border-t border-teal-800/80 bg-teal-950/60 p-5 rounded-xl border border-teal-800/60">
                <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-wider mb-4">
                  <Calculator className="w-4 h-4 text-teal-300" />
                  <span>Estimate Your Annual Savings</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 mb-1.5">Family Members</label>
                    <div className="flex items-center gap-2 bg-slate-900 border border-teal-700/60 rounded-lg p-1.5">
                      <button
                        type="button"
                        onClick={() => setFamilyMembersCount((prev) => Math.max(1, prev - 1))}
                        className="w-7 h-7 rounded bg-teal-800 hover:bg-teal-700 text-white font-bold flex items-center justify-center cursor-pointer"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center font-bold tabular-nums text-sm text-white">
                        {familyMembersCount}
                      </span>
                      <button
                        type="button"
                        onClick={() => setFamilyMembersCount((prev) => Math.min(6, prev + 1))}
                        className="w-7 h-7 rounded bg-teal-800 hover:bg-teal-700 text-white font-bold flex items-center justify-center cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-end">
                    <label className="flex items-center gap-2 cursor-pointer text-slate-200 text-xs py-2">
                      <input
                        type="checkbox"
                        checked={needsCrown}
                        onChange={(e) => setNeedsCrown(e.target.checked)}
                        className="rounded border-teal-600 text-teal-500 focus:ring-teal-400"
                      />
                      <span>Needs a CEREC Crown</span>
                    </label>
                  </div>

                  <div className="flex flex-col justify-end">
                    <label className="flex items-center gap-2 cursor-pointer text-slate-200 text-xs py-2">
                      <input
                        type="checkbox"
                        checked={needsFilling}
                        onChange={(e) => setNeedsFilling(e.target.checked)}
                        className="rounded border-teal-600 text-teal-500 focus:ring-teal-400"
                      />
                      <span>Needs Tooth Filling</span>
                    </label>
                  </div>
                </div>

                {/* Savings summary */}
                <div className="mt-4 pt-4 border-t border-teal-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400">Est. Average Standard Cost: </span>
                    <span className="line-through text-slate-500 tabular-nums">${totalStandardCost}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-teal-300 font-medium">Estimated Net Savings: </span>
                    <span className="text-base font-bold text-white font-display tabular-nums">
                      ${estimatedSavings}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-teal-800/80">
              <span className="text-xs text-teal-300">
                No waiting periods · Starts immediately upon enrollment
              </span>
              <button
                type="button"
                onClick={onOpenAppointment}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-teal-300 hover:bg-teal-200 rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap"
              >
                Enroll In Savings Plan
              </button>
            </div>
          </div>

          {/* Column 2: Insurance Plans & Flexible Financing */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Accepted Insurance Card */}
            <div className="bg-neutral-50 rounded-2xl p-7 border border-neutral-200/90 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>Accepted Dental Insurances</span>
              </div>
              <h4 className="text-lg font-bold font-display text-neutral-900">
                We Maximize Your PPO Benefits
              </h4>
              <p className="mt-1 text-xs text-neutral-600">
                We accept most dental PPO plans and file claims on your behalf. Type your carrier below:
              </p>

              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Check your insurance (e.g. Delta, Cigna, Aetna)..."
                  value={selectedInsuranceSearch}
                  onChange={(e) => setSelectedInsuranceSearch(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-lg border border-neutral-300 bg-white focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                />
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pt-1">
                {matchedInsurances.length > 0 ? (
                  matchedInsurances.map((ins, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white text-neutral-800 px-2.5 py-1 rounded border border-neutral-200"
                    >
                      {ins}
                    </span>
                  ))
                ) : (
                  <p className="text-xs text-neutral-500 py-1">
                    Don't see your plan listed? We accept almost all out-of-network PPO plans and handle the claims for you.
                  </p>
                )}
              </div>
            </div>

            {/* Flexible Financing with CareCredit & Cherry */}
            <div className="bg-neutral-50 rounded-2xl p-7 border border-neutral-200/90 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
                <CreditCard className="w-4 h-4 text-teal-700" />
                <span>Flexible Financing</span>
              </div>
              <h4 className="text-lg font-bold font-display text-neutral-900">
                CareCredit® & Cherry Payment Plans
              </h4>
              
              <div className="mt-3 space-y-3">
                {FINANCING_OPTIONS.slice(0, 2).map((opt, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-xl border border-neutral-200 text-xs">
                    <div className="flex items-center justify-between font-semibold text-neutral-900">
                      <span>{opt.name}</span>
                      <span className="text-teal-700 font-mono text-[11px]">{opt.type}</span>
                    </div>
                    <p className="text-neutral-600 mt-1">{opt.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
