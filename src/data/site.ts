export const siteConfig = {
  brandName: "CrossMed",
  siteUrl: "https://crossmedi.in",

  phone: "9123456789",
  phoneSecondary: "9876543210",
  whatsappNumber: "919123456789",

  email: "support@crossmedi.in",

  address: "Medical Square, VIP Road, Puri, Odisha - 752002",
  fullAddress:
    "CrossMed Diagnostic & Healthcare, Medical Square, VIP Road, Puri, Odisha - 752002",

  city: "Puri",
  state: "Odisha",
  country: "India",
  pinCode: "752002",

  timings: {
    opd: "Monday - Saturday: 9:00 AM - 2:00 PM",
    diagnostic: "Monday - Saturday: 7:30 AM - 7:00 PM",
    sunday: "Limited Services (8:00 AM - 12:00 PM)",
  },

  consultationDay: "Monday - Saturday",
  consultationTime: "9:00 AM - 2:00 PM",

  calendlyUrl: "https://calendly.com/crossmedi",

  mapEmbedUrl:
    "https://maps.google.com/maps?q=VIP+Road+Puri+Odisha&t=&z=15&ie=UTF8&iwloc=&output=embed",

  Logo: "/logos/crossLogo.png",

  youtubeChannel: "https://youtube.com/@crossmedi",
  instagramUrl: "https://instagram.com/crossmedi",
  facebookUrl: "https://facebook.com/crossmedi",

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
    areaCovered: "Puri, Konark, and nearby areas",
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
      location: "CrossMedi, Puri",
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
      location: "CrossMedi, Puri",
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
    instagram: "https://instagram.com/crossmedi",
    facebook: "https://facebook.com/crossmedi",
    youtube: "https://youtube.com/@crossmedi",
    twitter: "https://twitter.com/crossmedi",
  },

  // SEO
  seo: {
    title:
      "CrossMedi Diagnostic Center - Blood Tests, ECG & Health Packages in Puri",
    description:
      "Book affordable blood tests, ECG, and full body checkups in Puri with CrossMedi. Home sample collection available. Trusted doctors & accurate reports.",
    keywords: [
      "diagnostic center puri",
      "blood test puri",
      "full body checkup puri",
      "ECG test puri",
      "pathology lab puri",
      "home blood collection puri",
    ],
  },
};