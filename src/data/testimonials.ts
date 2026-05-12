export type Testimonial = {
  name: string;
  rating: number;
  review: string;
  service: string;
  location?: string;
};

export const testimonials: Testimonial[] = [
  // Health Packages
  {
    name: "Bijayalaxmi Patra",
    rating: 5,
    review: "I took the Basic Health Check-up package. The process was smooth, staff was courteous, and I received my reports within 24 hours. Very affordable and reliable service.",
    service: "Basic Health Check-up",
    location: "Puri",
  },
  {
    name: "Sitansu Sekhar Dash",
    rating: 5,
    review: "The Vasant Wellness Package is excellent value for money. All tests were conducted professionally. Highly recommend this diagnostic center in Puri.",
    service: "Vasant Wellness Package",
    location: "Matiapada",
  },
  {
    name: "Rashmirekha Mohapatra",
    rating: 5,
    review: "Great experience with their health checkup packages. The staff explained each test and the reports were detailed and easy to understand.",
    service: "Health Checkup",
    location: "Puri",
  },
  
  // Blood Tests
  {
    name: "Prasant Kumar Sahoo",
    rating: 5,
    review: "Got my blood tests done here. Quick service, clean facility, and very reasonable prices. The reports were accurate and delivered on time.",
    service: "Blood Test",
    location: "Konark Road",
  },
  {
    name: "Lopamudra Swain",
    rating: 5,
    review: "Very professional blood sample collection. The technician was gentle and hygienic. Received digital reports promptly.",
    service: "Blood Test",
    location: "Puri",
  },
  
  // ECG
  {
    name: "Kailash Chandra Behera",
    rating: 5,
    review: "Had my ECG done here. The staff was very helpful and the process was quick. Dr. Sisir explained my results in detail.",
    service: "ECG",
    location: "Matiapada",
  },
  {
    name: "Mamata Mohanty",
    rating: 5,
    review: "Fast and efficient ECG service. The center is well-equipped and the technicians are experienced.",
    service: "ECG",
    location: "Puri",
  },
  
  // Home Collection
  {
    name: "Gitanjali Pattnaik",
    rating: 5,
    review: "The home collection service is a blessing for elderly parents. The phlebotomist arrived on time, was very professional, and collected samples hygienically.",
    service: "Home Collection",
    location: "Puri",
  },
  {
    name: "Saroj Kumar Rout",
    rating: 5,
    review: "Excellent home collection service. No need to travel to the lab. Reports were sent via WhatsApp. Very convenient!",
    service: "Home Collection",
    location: "Near Sea Beach",
  },
  {
    name: "Pravati Dei",
    rating: 5,
    review: "I couldn't visit the lab due to health issues. Their home collection service made it possible for me to get tested. Thank you for your care.",
    service: "Home Collection",
    location: "Puri",
  },
  
  // Thyroid Profile
  {
    name: "Subrat Kumar Dash",
    rating: 5,
    review: "Thyroid profile was done accurately. The reports matched my symptoms perfectly. Dr. Sisir helped me understand my thyroid condition better.",
    service: "Thyroid Profile",
    location: "Puri",
  },
  
  // Diabetes Management
  {
    name: "Narayan Swain",
    rating: 5,
    review: "Dr. Sisir Kumar Das is an excellent diabetic consultant. He explained my condition and helped me manage my blood sugar levels effectively.",
    service: "Diabetic Consultation",
    location: "Matiapada",
  },
  {
    name: "Uma Shankar Patra",
    rating: 5,
    review: "Regular HbA1c tests here have helped me monitor my diabetes well. The staff is very supportive and the reports are always accurate.",
    service: "HbA1c Test",
    location: "Puri",
  },
  
  // Pediatric Care
  {
    name: "Sipra Mallick",
    rating: 5,
    review: "Dr. Sadasiba Padhy is a wonderful pediatrician. He was very patient with my child and explained everything clearly. Highly recommended for children.",
    service: "Pediatric Consultation",
    location: "Puri",
  },
  {
    name: "Ranjita Sahoo",
    rating: 5,
    review: "My child's vaccination schedule is managed here. Dr. Sadasiba is very caring and the staff is always helpful.",
    service: "Pediatric Care",
    location: "Matiapada",
  },
  
  // Kidney & Liver Function
  {
    name: "Bhakta Charan Mohapatra",
    rating: 5,
    review: "Regular kidney function tests here have helped me monitor my health. The reports are detailed and the staff explains everything well.",
    service: "Kidney Function Test",
    location: "Puri",
  },
  {
    name: "Santilata Behera",
    rating: 5,
    review: "Liver function test was done efficiently. The center is clean and well-maintained. Will definitely recommend to others.",
    service: "Liver Function Test",
    location: "Konark Road",
  },
  
  // Lipid Profile
  {
    name: "Debasis Pattanaik",
    rating: 5,
    review: "Lipid profile test helped me understand my cholesterol levels. The doctor suggested lifestyle changes based on the accurate reports.",
    service: "Lipid Profile",
    location: "Puri",
  },
  
  // Overall Experience
  {
    name: "Purnima Tripathy",
    rating: 5,
    review: "Best diagnostic center in Matiapada area. Affordable prices, accurate reports, and very friendly staff. Highly recommended!",
    service: "Overall Diagnostic",
    location: "Matiapada",
  },
  {
    name: "Manas Ranjan Sahoo",
    rating: 5,
    review: "I have been using their services for over a year. Consistent quality, timely reports, and great customer service. 5 stars!",
    service: "Overall Diagnostic",
    location: "Puri",
  },
];