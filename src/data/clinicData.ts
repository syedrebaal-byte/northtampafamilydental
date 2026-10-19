export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Restorative' | 'Cosmetic' | 'Preventive' | 'Orthodontics' | 'Emergency & Surgery';
  summary: string;
  description: string;
  benefits: string[];
  procedureSteps: string[];
  technologyUsed: string;
  idealFor: string[];
  faqs: { question: string; answer: string }[];
  durationEstimate: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  source: 'Google Review' | 'Verified Patient' | 'ThreeBestRated';
  rating: number;
  date: string;
  treatment: string;
  content: string;
  verified: boolean;
}

export const CLINIC_INFO = {
  name: 'North Tampa Family Dental',
  doctorName: 'Dr. Barbara Rey, DDS',
  doctorTitle: 'Lead Dentist & AEGD General Practitioner',
  doctorBio: {
    degrees: 'DDS, Venezuela · AEGD Residency, NYU Langone Health · Advanced Certificate in Public Health, New York University',
    shortBio: 'Dr. Barbara Rey brings extensive postgraduate hospital and general dental training from NYU Langone Health to Tampa families. Her clinical practice centers on compassionate, anxiety-free dentistry, preventive education, and precision restorations utilizing same-day digital CEREC technology.',
    fullBio: [
      'Dr. Barbara Rey earned her Doctor of Dental Surgery degree in Venezuela before advancing her clinical skills through an intensive Advanced Education in General Dentistry (AEGD) residency program at NYU Langone Health in New York.',
      'Committed to community wellbeing and comprehensive care, she also earned an Advanced Certificate in Public Health from New York University. Her clinical scope includes comprehensive restorative dentistry, single-visit ceramic restorations, gentle endodontics, cosmetic smile makeovers, and clear aligner orthodontics.',
      'Fluent in both English and Spanish, Dr. Rey prioritizes building lasting relationships where patients feel thoroughly heard, educated, and comfortable in the chair. Outside the clinic, she enjoys outdoor adventures with her dog and exploring Tampa Bay’s vibrant culinary scene.'
    ],
    languages: ['English', 'Spanish (Español)'],
  },
  phone: '(813) 773-0192',
  phoneRaw: 'tel:+18137730192',
  email: 'info@northtampafamilydental.com',
  address: {
    street: '2526 E Bearss Ave',
    city: 'Tampa',
    state: 'FL',
    zip: '33613',
    directionsHint: 'Conveniently located near Bearss Ave and Livingston Ave, easily accessible from USF, Carrollwood, and Lutz.',
    googleMapsUrl: 'https://maps.google.com/?q=2526+E+Bearss+Ave,+Tampa,+FL+33613'
  },
  hours: [
    { days: 'Monday – Thursday', time: '8:00 AM – 5:00 PM', isOpenDay: true },
    { days: 'Friday', time: '8:00 AM – 12:00 PM', isOpenDay: true },
    { days: 'Saturday – Sunday', time: 'Closed (Emergency on call)', isOpenDay: false }
  ],
  emergencyNote: 'Experiencing severe tooth pain, facial swelling, or a broken tooth? Call (813) 773-0192 immediately. We provide prompt same-day emergency triage and pain relief.'
};

export const ACCEPTED_INSURANCES = [
  'Delta Dental',
  'Cigna Dental',
  'MetLife',
  'Aetna Dental',
  'Guardian',
  'Florida Blue / BCBS',
  'Humana Dental',
  'UnitedHealthcare Dental',
  'Careington',
  'Principal Life'
];

export const FINANCING_OPTIONS = [
  {
    name: 'CareCredit®',
    type: 'Healthcare Credit Line',
    description: '0% APR promotional financing options for 6 or 12 months on qualifying dental treatments.'
  },
  {
    name: 'Cherry Payment Plans',
    type: 'Fast Digital Approvals',
    description: 'Quick pre-qualification without a hard credit pull, breaking treatment costs into manageable monthly installments.'
  },
  {
    name: 'NTFD Dental Savings Plan',
    type: 'In-House Membership',
    description: 'Designed for patients without dental insurance: covers 2 annual cleanings, exams, X-rays, and 20% off all dental procedures with no deductibles or waiting periods.'
  }
];

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: 'cerec-crowns',
    title: 'CEREC® Same-Day Crowns',
    tagline: 'Permanent ceramic restorations milled in a single visit—no messy putty or temporary crowns.',
    category: 'Restorative',
    summary: 'Precision digital dentistry delivering strong, beautiful, custom ceramic crowns in about 90 minutes.',
    description: 'Using in-office CAD/CAM 3D scanning and computer-controlled diamond milling, Dr. Barbara Rey designs, crafts, and bonds your custom all-ceramic crown during one visit. Say goodbye to uncomfortable impressions and weeks with loose plastic temporary crowns.',
    benefits: [
      'Single 90-minute appointment from start to finish',
      'No gooey impression putty; digital 3D intraoral scanning',
      'No temporary crowns that crack, loosen, or fall off',
      'Biocompatible, high-grade ceramic matched to your natural tooth shade',
      'Preserves maximum healthy natural tooth structure'
    ],
    procedureSteps: [
      'Digital 3D Intraoral Scan: High-precision camera captures your tooth in minutes',
      'Computer-Aided 3D Design: Dr. Rey customizes the crown to your exact bite',
      'Precision Ceramic Milling: On-site milling unit shapes a solid block of medical ceramic',
      'Glazing & Permanent Bonding: Restorative crown is cured and permanently polished in place'
    ],
    technologyUsed: 'CEREC® CAD/CAM Milling Unit & iTero® 3D Intraoral Scanner',
    idealFor: ['Cracked or fractured teeth', 'Large failing mercury fillings', 'Root canal treated teeth', 'Worn down tooth enamel'],
    faqs: [
      {
        question: 'How long do CEREC same-day crowns last?',
        answer: 'With proper oral hygiene and regular cleanings, CEREC ceramic crowns typically last 10 to 15+ years, comparable to traditional laboratory crowns.'
      },
      {
        question: 'Does getting a same-day crown hurt?',
        answer: 'No. Local anesthesia ensures the area is completely numb. Nitrous oxide sedation is also available for total patient relaxation.'
      }
    ],
    durationEstimate: 'Single appointment (~90 minutes)'
  },
  {
    id: 'orthofx-clear-aligners',
    title: 'OrthoFX Clear Aligners',
    tagline: 'Virtually invisible orthodontic alignment with advanced polymer comfort.',
    category: 'Orthodontics',
    summary: 'Custom clear aligners engineered for comfortable, discreet tooth straightening without metal brackets.',
    description: 'OrthoFX aligners offer next-generation polymer technology designed to apply gentle, continuous pressure with minimal soreness. Removable for eating, brushing, and flossing, they fit effortlessly into busy adult and teenage lifestyles.',
    benefits: [
      'Nearly invisible aesthetic during conversation and photos',
      'Removable anytime: eat your favorite foods without restriction',
      'Patented multi-layer polymer maintains tension for predictable results',
      'Digital 3D outcome simulation before you begin treatment'
    ],
    procedureSteps: [
      'Comprehensive 3D Scan & Smile Assessment',
      'Custom Treatment Simulation: Dr. Rey maps tooth movements',
      'Aligner Delivery: Receive your custom series of trays',
      'Check-in Visits: Progress monitoring every 6-8 weeks'
    ],
    technologyUsed: 'iTero® 3D Digital Orthodontic Simulator',
    idealFor: ['Crowded teeth', 'Gaps and spacing', 'Mild to moderate overbites', 'Relapsed orthodontic movement'],
    faqs: [
      {
        question: 'How many hours a day must I wear my aligners?',
        answer: 'You should wear your OrthoFX aligners 20 to 22 hours per day, removing them only to eat, drink non-water beverages, and brush.'
      }
    ],
    durationEstimate: 'Typically 6 to 14 months depending on alignment goals'
  },
  {
    id: 'dental-implants',
    title: 'Dental Implant Restorations',
    tagline: 'Permanent, lifelike tooth replacements anchored securely into the jawbone.',
    category: 'Restorative',
    summary: 'Restore chewing power, speech clarity, and youthful facial bone structure with permanent implant crowns.',
    description: 'A dental implant replaces both the missing root and crown of your natural tooth. Dr. Barbara Rey designs and places custom implant crowns and bridges that look and feel just like your natural teeth.',
    benefits: [
      'Prevents jawbone shrinkage and facial sagging',
      'Restores 99% of natural chewing capability',
      'Protects adjacent teeth from shifting or grinding damage',
      'Will never decay or develop cavities'
    ],
    procedureSteps: [
      'CBCT / Digital X-Ray Assessment & Bone Evaluation',
      'Implant Placement & Osseointegration Healing Period',
      'Custom Abutment & CEREC Porcelain Crown Fabrication',
      'Final Seating & Bite Calibration'
    ],
    technologyUsed: 'Digital Radiography & Custom Ceramic Milling',
    idealFor: ['Single missing tooth', 'Multiple missing teeth', 'Unstable loose partial dentures'],
    faqs: [
      {
        question: 'Are dental implants permanent?',
        answer: 'The titanium implant post fuses permanently with your jawbone and can last a lifetime with diligent brushing, flossing, and regular cleanings.'
      }
    ],
    durationEstimate: 'Multi-stage process over 3-6 months for osseointegration'
  },
  {
    id: 'preventive-hygiene',
    title: 'Comprehensive Preventive & Family Care',
    tagline: 'Gentle cleanings, digital checkups, and proactive gum health for all ages.',
    category: 'Preventive',
    summary: 'The cornerstone of lifelong dental health: ultrasonic cleanings, oral cancer screenings, and pediatric care.',
    description: 'We welcome patients from toddlers receiving their first dental visit to seniors maintaining their natural teeth. Our hygiene visits prioritize comfort, gentle technique, and proactive detection before minor issues become costly emergencies.',
    benefits: [
      'Gentle ultrasonic plaque and tartar removal',
      'Low-radiation digital intraoral radiography',
      'Comprehensive oral cancer screening at every recall',
      'Personalized fluoride therapy and protective sealants for children'
    ],
    procedureSteps: [
      'Digital X-Rays & Periodontal Pocket Measurement',
      'Ultrasonic Scaling & Air Polish',
      'Oral Cancer & Soft Tissue Exam by Dr. Barbara Rey',
      'Preventive Consultation & Home Care Optimization'
    ],
    technologyUsed: 'Low-Dose Digital Sensors & Ultrasonic Cavitron',
    idealFor: ['Routine 6-month checkups', 'Children & teens', 'Gingivitis management', 'New patient baseline health'],
    faqs: [
      {
        question: 'How often should my family visit the dentist?',
        answer: 'The American Dental Association recommends a professional cleaning and examination every six months for most patients, or every 3-4 months for patients with periodontal history.'
      }
    ],
    durationEstimate: '45 to 60 minutes'
  },
  {
    id: 'cosmetic-whitening-veneers',
    title: 'Cosmetic Dentistry & Smile Makeovers',
    tagline: 'Professional in-office whitening, porcelain veneers, and artistic bonding.',
    category: 'Cosmetic',
    summary: 'Transform stained, chipped, or uneven teeth into a radiant, symmetrical smile you love to share.',
    description: 'Whether you want a quick brightness boost for an upcoming milestone or a full smile transformation with handcrafted porcelain veneers, Dr. Rey balances facial aesthetics, tooth proportions, and natural translucency.',
    benefits: [
      'Up to 8 shades whiter in a single office visit',
      'Ultra-thin custom porcelain veneers that resist future staining',
      'Minimally invasive composite resin bonding for minor chips and gaps',
      'Artistic shade matching that looks vibrant and natural, never chalky'
    ],
    procedureSteps: [
      'Aesthetic Smile Analysis & Shade Consultation',
      'Custom Digital Preview / Mock-Up',
      'Gentle Tooth Preparation & Impression Scanning',
      'Permanent Bonding & High-Shine Glazing'
    ],
    technologyUsed: 'High-Intensity LED Whitening & Porcelain Veneers',
    idealFor: ['Stubborn coffee/wine stains', 'Chipped or worn enamel', 'Uneven tooth lengths', 'Gaps between front teeth'],
    faqs: [
      {
        question: 'Will professional whitening make my teeth sensitive?',
        answer: 'We utilize advanced desensitizing agents and customized trays that minimize or eliminate transient sensitivity.'
      }
    ],
    durationEstimate: 'In-office whitening: 60 mins; Veneers: 2 appointments'
  },
  {
    id: 'emergency-dentistry',
    title: 'Same-Day Emergency Dental Care',
    tagline: 'Rapid relief for severe toothaches, cracked teeth, infections, and sports trauma.',
    category: 'Emergency & Surgery',
    summary: 'When dental pain strikes, our Tampa office provides prompt evaluation, diagnosis, and same-day pain relief.',
    description: 'Dental emergencies are stressful and often painful. We keep dedicated time slots open each day for emergency walk-ins and phone triages to diagnose issues, stop severe pain, and protect your teeth from permanent damage.',
    benefits: [
      'Same-day priority appointments',
      'Immediate diagnostic digital X-rays to pinpoint root causes',
      'Sedation options available for anxious patients in acute discomfort',
      'Conservative treatments focused on tooth preservation'
    ],
    procedureSteps: [
      'Immediate Pain Assessment & Triage',
      'Targeted Digital Radiography',
      'Dr. Rey In-Person Diagnosis & Immediate Treatment Plan',
      'Pain Alleviation (Filling, Pulpotomy, Temporary Crown, or Extraction)'
    ],
    technologyUsed: 'Instant Digital X-Rays & Rotary Endodontic Systems',
    idealFor: ['Excruciating toothache', 'Knocked out or broken tooth', 'Lost filling or loose crown', 'Swollen gums or abscess'],
    faqs: [
      {
        question: 'What should I do if a permanent tooth is knocked out?',
        answer: 'Gently hold the tooth by the crown (never touch the root), rinse gently with water if dirty, and try to insert it back into the socket. If not possible, place it in a cup of milk and call us at (813) 773-0192 immediately.'
      }
    ],
    durationEstimate: 'Same-day emergency visit'
  },
  {
    id: 'root-canal-therapy',
    title: 'Gentle Root Canal Therapy',
    tagline: 'Modern rotary endodontics designed to alleviate tooth pain and save your natural tooth.',
    category: 'Restorative',
    summary: 'Save an infected or badly broken tooth with comfortable, high-precision root canal care.',
    description: 'Contrary to old myths, modern root canal therapy does not cause pain—it relieves pain. Using rotary endodontic instruments and effective local anesthesia, Dr. Rey removes infected pulp, sterilizes the canals, and seals the tooth.',
    benefits: [
      'Stops severe throbbing tooth pain and eliminates infection',
      'Allows you to keep your natural tooth and normal chewing function',
      'Can be followed immediately by a custom CEREC same-day crown',
      'High success rate of over 95%'
    ],
    procedureSteps: [
      'Targeted Numbling & Isolation with Rubber Dam',
      'Gentle Removal of Diseased Nerve Tissue',
      'Canal Disinfection & Gutta-Percha Sealing',
      'Placement of Protective Restoration'
    ],
    technologyUsed: 'Electric Rotary Endodontic Instrumentation',
    idealFor: ['Severe tooth sensitivity to hot/cold', 'Spontaneous deep throbbing pain', 'Pimple on the gums (abscess)'],
    faqs: [
      {
        question: 'Does a root canal hurt?',
        answer: 'With modern anesthesia and rotary techniques, the procedure feels remarkably similar to receiving a routine filling.'
      }
    ],
    durationEstimate: 'Single visit (~60-75 minutes)'
  },
  {
    id: 'sedation-anxiety-relief',
    title: 'Nitrous Oxide Sedation & Comfort Care',
    tagline: 'Calm your dental anxiety with gentle laughing gas and patient-first amenities.',
    category: 'Preventive',
    summary: 'Feel completely at ease throughout your dental visit with fast-acting, easily reversible relaxation.',
    description: 'Dental anxiety should never prevent you from getting the healthcare you need. We offer sweet-smelling nitrous oxide (laughing gas) that creates a pleasant, floaty sensation. You remain fully conscious and can safely drive yourself home right after.',
    benefits: [
      'Fast-acting relief within 2 to 3 minutes',
      'Completely adjustable depth of relaxation',
      'Wears off quickly with 100% pure oxygen at the end of the visit',
      'Safe for adults and pediatric patients alike'
    ],
    procedureSteps: [
      'Comfortable nasal mask placement',
      'Gradual titration of nitrous oxide and oxygen',
      'Treatment performed while you rest serenely',
      '5 minutes of pure oxygen flush; resume normal activities immediately'
    ],
    technologyUsed: 'Precision Nitrous Oxide Delivery Unit',
    idealFor: ['Dental phobia or nervousness', 'Sensitive gag reflex', 'Patients needing multiple procedures at once'],
    faqs: [
      {
        question: 'Can I drive myself home after nitrous oxide?',
        answer: 'Yes! Nitrous oxide leaves your system within five minutes of breathing pure oxygen, making it the only sedation option after which you can legally and safely drive.'
      }
    ],
    durationEstimate: 'Available during any scheduled dental appointment'
  }
];

export const PATIENT_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Maria C.',
    source: 'Google Review',
    rating: 5,
    date: '3 weeks ago',
    treatment: 'CEREC Same-Day Crown',
    content: 'Dr. Barbara Rey and her team are incredible! I needed a crown and was dreading having to wear a temporary for weeks. She scanned my tooth and milled the permanent crown right in the office while I waited. It fit perfectly on the first try. So grateful to have found this practice!',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'David R.',
    source: 'Google Review',
    rating: 5,
    date: '1 month ago',
    treatment: 'New Patient Exam & Cleaning',
    content: 'Best dental experience I’ve had in Tampa. Everyone is wonderful, polite, and very helpful. The office is clean, modern, and Dr. Rey explained everything clearly without trying to upsell unnecessary work. Highly recommend to anyone seeking an honest family dentist.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Elena G.',
    source: 'Verified Patient',
    rating: 5,
    date: '2 months ago',
    treatment: 'Emergency Care & Pain Relief',
    content: 'I woke up on a Tuesday morning with excruciating tooth pain. I called North Tampa Family Dental and they fit me in right away that afternoon. Dr. Rey was so gentle and completely relieved the pain. Being able to communicate in Spanish made it even more comfortable for me.',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Michael T.',
    source: 'ThreeBestRated',
    rating: 5,
    date: '3 months ago',
    treatment: 'OrthoFX Clear Aligners',
    content: 'Started my OrthoFX clear aligner journey with Dr. Rey. The digital preview showed me exactly how my teeth would shift. Trays are way more comfortable than traditional braces and the progress checkups are quick and efficient.',
    verified: true
  }
];

export const OFFICE_TECHNOLOGIES = [
  {
    name: 'CEREC® CAD/CAM 3D Milling',
    subtitle: 'Single-Visit Ceramic Restorations',
    description: 'Creates precision porcelain crowns, inlays, and onlays right inside our office in under 90 minutes. No messy impression putty, no temporary crowns, and no waiting weeks.'
  },
  {
    name: 'iTero® Digital Scanner',
    subtitle: '3D Optical Impressions',
    description: 'Captures 6,000 high-resolution frames per second to construct a photorealistic 3D map of your mouth for aligners, crowns, and diagnostic tracking without gagging.'
  },
  {
    name: 'Ultra-Low Radiation Digital X-Rays',
    subtitle: 'Safe Diagnostic Radiography',
    description: 'Emits up to 80% less radiation than legacy film radiographs while producing crystal-clear instant digital imaging on our treatment room monitors.'
  },
  {
    name: 'Soft-Tissue Laser Dentistry',
    subtitle: 'Minimally Invasive Gum Care',
    description: 'Treats periodontal pockets, contours gum lines, and relieves painful cold sores with minimal bleeding, accelerated healing, and zero stitches.'
  }
];

export const SAVINGS_PLAN_DETAILS = {
  name: 'NTFD In-House Dental Savings Plan',
  annualFeeIndividual: '$349 / year',
  annualFeeFamily: '$299 / each additional member',
  includes: [
    '2 Comprehensive Exams (Periodic & Emergency checkups included)',
    '2 Professional Routine Dental Cleanings per calendar year',
    'All Necessary Diagnostic Digital X-Rays',
    '1 Annual Fluoride Varnish Treatment',
    'Annual Oral Cancer Screening with Dr. Barbara Rey',
    '20% Direct Savings on Fillings, CEREC Crowns, Extractions & Root Canals',
    '15% Savings on OrthoFX Clear Aligner Therapy',
    'NO Deductibles, NO Waiting Periods, NO Pre-Authorizations, NO Yearly Maximums'
  ]
};
