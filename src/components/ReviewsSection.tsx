import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { PATIENT_REVIEWS } from '../data/clinicData';
import { IMAGES } from '../assets/images';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-100/60 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
              Verified Patient Experiences
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight text-balance">
              Trusted by families across North Tampa and Carrollwood.
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              Read authentic feedback from patients who experience Dr. Barbara Rey’s compassionate chairside manner and precision CEREC single-visit care.
            </p>
          </div>

          {/* Rating Summary Box */}
          <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm flex items-center gap-4 shrink-0">
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs font-semibold text-neutral-800 mt-1">
                5.0 Average Patient Rating
              </div>
            </div>
            <div className="border-l border-neutral-200 pl-4 text-xs text-neutral-500">
              <span>Google & ThreeBestRated</span>
              <span className="block text-teal-700 font-medium">100% Real Reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {PATIENT_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-7 rounded-2xl border border-neutral-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Source */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-neutral-400">{rev.date}</span>
                </div>

                {/* Content */}
                <p className="text-sm text-neutral-700 leading-relaxed italic">
                  "{rev.content}"
                </p>
              </div>

              {/* Author & Treatment */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-neutral-900 flex items-center gap-1.5">
                    <span>{rev.author}</span>
                    {rev.verified && (
                      <span title="Verified Patient Review">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600 inline" />
                      </span>
                    )}
                  </div>
                  <div className="text-neutral-500 text-[11px] mt-0.5">
                    Treatment: {rev.treatment}
                  </div>
                </div>
                <span className="text-[11px] font-medium text-slate-500 bg-neutral-100 px-2 py-0.5 rounded">
                  {rev.source}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
