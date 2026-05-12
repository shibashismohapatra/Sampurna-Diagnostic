export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

export const galleryCategories = [
  "All",
  "Diagnostic Center",
  "Blood Test Lab",
  "ECG Room",
  "Sample Collection",
  "Home Collection",
  "Doctors & Staff",
  "Equipment",
] as const;

export const galleryImages: GalleryImage[] = [
  // Diagnostic Center
  {
    src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=600&fit=crop",
    alt: "Maa Mangala Diagnostic Center - Main Entrance",
    category: "Diagnostic Center",
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    alt: "Diagnostic Center Reception Area",
    category: "Diagnostic Center",
  },
  
  // Blood Test Lab
  {
    src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop",
    alt: "Modern Blood Test Laboratory",
    category: "Blood Test Lab",
  },
  {
    src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop",
    alt: "Blood Sample Collection Area",
    category: "Blood Test Lab",
  },
  {
    src: "https://images.pexels.com/photos/4047132/pexels-photo-4047132.jpeg?w=800&h=600&fit=crop",
    alt: "Laboratory Equipment for Blood Analysis",
    category: "Blood Test Lab",
  },
  
  // ECG Room
  {
    src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop",
    alt: "ECG Machine and Testing Room",
    category: "ECG Room",
  },
  {
    src: "https://images.pexels.com/photos/4033337/pexels-photo-4033337.jpeg?w=800&h=600&fit=crop",
    alt: "ECG Test in Progress",
    category: "ECG Room",
  },
  
  // Sample Collection
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
    alt: "Professional Sample Collection by Technician",
    category: "Sample Collection",
  },
  {
    src: "https://images.pexels.com/photos/4047130/pexels-photo-4047130.jpeg?w=800&h=600&fit=crop",
    alt: "Blood Sample Collection Process",
    category: "Sample Collection",
  },
  {
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
    alt: "Urine and Stool Sample Collection Area",
    category: "Sample Collection",
  },
  
  // Home Collection
  {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop",
    alt: "Home Collection Service - Phlebotomist at Patient's Home",
    category: "Home Collection",
  },
  {
    src: "https://images.pexels.com/photos/4057694/pexels-photo-4057694.jpeg?w=800&h=600&fit=crop",
    alt: "Sample Collection Kit for Home Service",
    category: "Home Collection",
  },
  
  // Doctors & Staff
  {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop",
    alt: "Dr. Sisir Kumar Das - MD & Diabetic Consultant",
    category: "Doctors & Staff",
  },
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop",
    alt: "Dr. Sadasiba Padhy - Pediatrician",
    category: "Doctors & Staff",
  },
  {
    src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&h=600&fit=crop",
    alt: "Diagnostic Center Staff Team",
    category: "Doctors & Staff",
  },
  
  // Equipment
  {
    src: "https://images.unsplash.com/photo-1581594658552-2598372605d6?w=800&h=600&fit=crop",
    alt: "Advanced Hematology Analyzer",
    category: "Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=600&fit=crop",
    alt: "Biochemistry Analyzer",
    category: "Equipment",
  },
  {
    src: "https://images.pexels.com/photos/4033116/pexels-photo-4033116.jpeg?w=800&h=600&fit=crop",
    alt: "ECG Machine",
    category: "Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1583912267670-65ca558b0f49?w=800&h=600&fit=crop",
    alt: "Centrifuge Machine for Sample Processing",
    category: "Equipment",
  },
];