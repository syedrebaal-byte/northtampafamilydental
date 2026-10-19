import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkles, Shield, HeartPulse, Activity } from 'lucide-react';
import { SERVICES_CATALOG, ServiceItem } from '../data/clinicData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenAppointment: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenAppointment }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Restorative', 'Cosmetic', 'Preventive', 'Orthodontics', 'Emergency & Surgery'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_CATALOG
    : SERVICES_CATALOG.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-20 bg-neutral-100/60 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
            Comprehensive Clinical Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight text-balance">
            Tailored dental treatments designed around your comfort and health.
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            From single-visit ceramic restorations and clear aligner orthodontics to pediatric checkups and same-day emergency relief, Dr. Barbara Rey and our North Tampa clinical team provide modern, conservative dental care.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="mt-8 flex items-center gap-1.5 p-1.5 bg-neutral-200/80 rounded-xl overflow-x-auto no-scrollbar max-w-fit border border-neutral-300/60">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-teal-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/50'
              }`}
            >
              {cat === 'All' ? 'All Services' : cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Services Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group relative bg-white rounded-2xl p-7 border border-neutral-200/90 hover:border-teal-600/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Top Row: Clean human numbering & category metadata (unboxed) */}
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
                  <span className="font-mono font-medium text-teal-700">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span>{service.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-neutral-400">{service.durationEstimate}</span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold font-display text-neutral-900 group-hover:text-teal-800 transition-colors flex items-start justify-between gap-2">
                  <span>{service.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-teal-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </h3>

                {/* Summary */}
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  {service.summary}
                </p>

                {/* Top 3 Benefits Bullet list */}
                <ul className="mt-5 space-y-2">
                  {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                      <Check className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Technology Tag & View Details button */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-neutral-500 truncate max-w-[190px]">
                  {service.technologyUsed}
                </span>
                <span className="font-semibold text-teal-700 group-hover:underline">
                  View Full Details →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Consultation */}
        <div className="mt-12 bg-teal-950 text-white rounded-2xl p-8 sm:p-10 border border-teal-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold font-display">Unsure which treatment is right for your smile?</h3>
            <p className="mt-2 text-sm text-teal-200/90 leading-relaxed">
              Dr. Barbara Rey provides honest, thorough exams with clear digital photographs and zero pressure. Schedule a comprehensive new patient visit to discuss your oral health goals.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenAppointment}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-teal-950 bg-teal-300 hover:bg-teal-200 rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Schedule Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
