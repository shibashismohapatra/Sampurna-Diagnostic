export const siteConfig = {
  brandName: "Sampurna Diagnostic Center",
  siteUrl: "https://sampurnadiagnosticcenter.in",

  phone: "9123456789",
  phoneSecondary: "9876543210",
  whatsappNumber: "919123456789",

  email: "support@sampurnadiagnosticcenter.in",

  address: "Ainthapali, Sambalpur, Odisha - 768004",
  fullAddress:
    "Sampurna Diagnostic Center, Ainthapali, Sambalpur, Odisha - 768004",

  city: "Sambalpur",
  state: "Odisha",
  country: "India",
  pinCode: "768004",

  timings: {
    opd: "Monday - Saturday: 9:00 AM - 2:00 PM",
    diagnostic: "Monday - Saturday: 7:30 AM - 7:00 PM",
    sunday: "Limited Services (8:00 AM - 12:00 PM)",
  },

  consultationDay: "Monday - Saturday",
  consultationTime: "9:00 AM - 2:00 PM",

  calendlyUrl: "https://calendly.com/sampurnadiagnosticcenter",

  mapEmbedUrl:
    "https://maps.google.com/maps?q=Ainthapali+Sambalpur+Odisha&t=&z=15&ie=UTF8&iwloc=&output=embed",

  Logo: "/logos/sampurnaLogo.png",

  youtubeChannel: "https://youtube.com/@sampurnadiagnosticcenter",
  instagramUrl: "https://instagram.com/sampurnadiagnosticcenter",
  facebookUrl: "https://facebook.com/sampurnadiagnosticcenter",

  // Services offered
  services: [
    "Complete Blood Count (CBC)",
    "Blood Sugar (FBS/PPBS)",
    "Thyroid Profile (T3, T4, TSH)",
    "Liver Function Test (LFT)",
    "Kidney Function Test (KFT)",
    "Lipid Profile",
    "HbA1c (Diabetes Test)",
    "Urine Routine & Microscopy",
    "ECG",
    "Vitamin B12 & D Test",
  ],

  // Health Packages
  healthPackages: [
    {
      name: "Essential Health Checkup",
      price: 999,
      originalPrice: 1999,
      discount: "50% OFF",
      discountPercentage: 50,
      tests: [
        "CBC",
        "FBS",
        "LFT",
        "KFT",
        "Lipid Profile",
        "TSH",
      ],
      slug: "essential-health-checkup",
      popular: true,
    },
    {
      name: "Advanced Wellness Package",
      price: 1499,
      originalPrice: 2999,
      discount: "50% OFF",
      discountPercentage: 50,
      tests: [
        "CBC",
        "HbA1c",
        "LFT",
        "KFT",
        "Lipid Profile",
        "Thyroid Profile",
        "Vitamin D",
        "Vitamin B12",
      ],
      slug: "advanced-wellness-package",
      popular: false,
    },
  ],

  // Home Collection
  homeCollection: {
    available: true,
    contactNumber: "9123456789",
    whatsappNumber: "919123456789",
    areaCovered: "Sambalpur, Burla, Hirakud, and nearby areas",
    charges: "Free for orders above ₹500",
    timing: "7:30 AM - 2:00 PM",
  },

  // Doctors
  doctors: [
    {
      id: "dr-amit-kumar-mishra",
      name: "Dr. Amit Kumar Mishra",
      title: "MD General Medicine",
      tagline: "Senior Physician & Diabetes Specialist",
      specialization: "Diabetes, Hypertension & General Medicine",
      degree: "MBBS, MD",
      image: "/images/doctors/dr-amit.jpg",
      consultationImage: "/images/doctors/dr-amit-consultation.jpg",
      location: "Sampurna Diagnostic Center, Sambalpur",
      bio: "Dr. Amit Kumar Mishra is an experienced physician specializing in diabetes care, hypertension, and chronic disease management with a patient-first approach.",
      highlights: [
        "10+ Years Experience",
        "Diabetes Specialist",
        "Chronic Disease Expert",
        "Preventive Healthcare Advocate",
      ],
      availability: "Monday - Saturday, 9:00 AM - 2:00 PM",
      consultationFee: "₹200",
    },
    {
      id: "dr-priyanka-das",
      name: "Dr. Priyanka Das",
      title: "Consultant Pediatrician",
      tagline: "Child Care & Vaccination Specialist",
      specialization: "Pediatrics & Neonatal Care",
      degree: "MBBS, MD Pediatrics",
      image: "/images/doctors/dr-priyanka.jpg",
      consultationImage: "/images/doctors/dr-priyanka-consultation.jpg",
      location: "Sampurna Diagnostic Center, Sambalpur",
      bio: "Dr. Priyanka Das provides comprehensive healthcare for children, including vaccinations, growth monitoring, and treatment of pediatric illnesses.",
      highlights: [
        "Pediatric Specialist",
        "Vaccination Expert",
        "Newborn Care",
        "Child Growth Monitoring",
      ],
      availability: "Monday - Saturday, 10:00 AM - 1:00 PM",
      consultationFee: "₹300",
    },
  ],

  // Social Media
  social: {
    instagram: "https://instagram.com/sampurnadiagnosticcenter",
    facebook: "https://facebook.com/sampurnadiagnosticcenter",
    youtube: "https://youtube.com/@sampurnadiagnosticcenter",
    twitter: "https://twitter.com/sampurnadiagnostic",
  },

  // SEO
  seo: {
    title:
      "Sampurna Diagnostic Center - Blood Tests, ECG & Health Packages in Sambalpur",
    description:
      "Book affordable blood tests, ECG, and full body checkups in Sambalpur with Sampurna Diagnostic Center. Home sample collection available. Trusted doctors & accurate reports.",
    keywords: [
      "diagnostic center sambalpur",
      "blood test sambalpur",
      "full body checkup sambalpur",
      "ECG test sambalpur",
      "pathology lab sambalpur",
      "home blood collection sambalpur",
    ],
  },
};