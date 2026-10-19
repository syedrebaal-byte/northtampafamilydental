/**
 * North Tampa Family Dental - Premium Practice Website
 * Led by Dr. Barbara Rey, DDS · Tampa, FL
 */

import React, { useState } from 'react';
import { Phone, Calendar, Clock, MapPin, AlertCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { DoctorBioSection } from './components/DoctorBioSection';
import { TechnologySpotlight } from './components/TechnologySpotlight';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { PatientExperience } from './components/PatientExperience';
import { InsuranceSavingsPlan } from './components/InsuranceSavingsPlan';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { SmileAssessmentModal } from './components/SmileAssessmentModal';
import { EmergencyModal } from './components/EmergencyModal';
import { CLINIC_INFO, ServiceItem } from './data/clinicData';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<ServiceItem | null>(null);
  
  const [detailModalService, setDetailModalService] = useState<ServiceItem | null>(null);
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);

  const handleOpenAppointment = (service?: ServiceItem | null) => {
    setSelectedServiceForBooking(service || null);
    setAppointmentModalOpen(true);
  };

  const handleSelectServiceForDetails = (service: ServiceItem) => {
    setDetailModalService(service);
  };

  const handleBookFromDetails = (service: ServiceItem) => {
    setDetailModalService(null);
    handleOpenAppointment(service);
  };

  const handleBookFromAssessment = (service: ServiceItem) => {
    setAssessmentModalOpen(false);
    handleOpenAppointment(service);
  };

  const handleEmergencyRequest = () => {
    setEmergencyModalOpen(false);
    handleOpenAppointment();
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-teal-200 selection:text-teal-950 font-sans">
      
      {/* Navigation Header */}
      <Navbar
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenEmergency={() => setEmergencyModalOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenAppointment={() => handleOpenAppointment()}
          onOpenAssessment={() => setAssessmentModalOpen(true)}
        />

        {/* 2. Comprehensive Services Catalog */}
        <ServicesSection
          onSelectService={handleSelectServiceForDetails}
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* 3. Lead Dentist Bio & Credentials */}
        <DoctorBioSection
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* 4. Advanced Technology & Interactive 3D Restoration Model */}
        <TechnologySpotlight
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* 5. Clinical Case Results & Interactive Before/After Comparison */}
        <BeforeAfterGallery />

        {/* 6. Patient Comfort & Anxiety-Free Experience */}
        <PatientExperience
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* 7. Insurance & In-House Dental Savings Plan Calculator */}
        <InsuranceSavingsPlan
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* 8. Verified Patient Reviews & Testimonials */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenEmergency={() => setEmergencyModalOpen(true)}
      />

      {/* Mobile Sticky Conversion Bar: 15% Mobile Sticky Cap */}
      <div className="lg:hidden sticky bottom-0 z-30 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-3 px-4 shadow-2xl flex items-center justify-between gap-3">
        <a
          href={CLINIC_INFO.phoneRaw}
          className="flex-1 py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-teal-400" />
          <span className="tabular-nums">Call (813) 773-0192</span>
        </a>

        <button
          type="button"
          onClick={() => handleOpenAppointment()}
          className="flex-1 py-2.5 px-3 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5 text-slate-950" />
          <span>Book Visit</span>
        </button>
      </div>

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialService={selectedServiceForBooking}
      />

      <ServiceDetailModal
        service={detailModalService}
        onClose={() => setDetailModalService(null)}
        onBookService={handleBookFromDetails}
      />

      <SmileAssessmentModal
        isOpen={assessmentModalOpen}
        onClose={() => setAssessmentModalOpen(false)}
        onBookRecommended={handleBookFromAssessment}
      />

      <EmergencyModal
        isOpen={emergencyModalOpen}
        onClose={() => setEmergencyModalOpen(false)}
        onRequestEmergencySlot={handleEmergencyRequest}
      />

    </div>
  );
}
