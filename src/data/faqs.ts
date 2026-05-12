export type FAQ = {
  question: string;
  answer: string;
  category?: string;
};

export const faqs: FAQ[] = [
  // General Questions
  {
    question: "What are your consultation timings?",
    answer: "OPD consultations are available every Wednesday from 10:00 AM to 1:00 PM. Diagnostic services are available Monday to Saturday from 8:00 AM to 6:00 PM. Sunday closed.",
    category: "General",
  },
  {
    question: "Do I need an appointment for diagnostic tests?",
    answer: "While walk-ins are welcome during working hours, we recommend booking an appointment in advance to avoid waiting time. For home collection services, prior appointment is required.",
    category: "General",
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment by calling us at 7064821268 or 8280600348, sending a WhatsApp message, or using the appointment form on our website. We'll confirm your appointment promptly.",
    category: "General",
  },
  {
    question: "What should I bring for my first visit?",
    answer: "Please bring any previous medical records, prescription from your doctor, and a list of current medications you're taking. For fasting tests, please follow the preparation instructions provided.",
    category: "General",
  },
  
  // Diagnostic Tests
  {
    question: "Do I need to fast before a blood test?",
    answer: "Some blood tests like FBS (Fasting Blood Sugar) and Lipid Profile require 8-12 hours of fasting. Other tests like CBC and Thyroid Profile do not require fasting. Our team will inform you about the specific requirements when you book your test.",
    category: "Diagnostic Tests",
  },
  {
    question: "How long does it take to get test results?",
    answer: "Most routine blood test results are available within 24 hours. Some specialized tests may take 48-72 hours. Reports can be collected from the center or sent via WhatsApp/email as per your preference.",
    category: "Diagnostic Tests",
  },
  {
    question: "What is included in the Basic Health Check-up package?",
    answer: "The Basic Health Check-up package (₹1,099) includes TSH, CBC, FBS, Kidney Profile, Liver Profile, and Lipid Profile. This comprehensive package helps assess your overall health status.",
    category: "Health Packages",
  },
  {
    question: "What is the Vasant Wellness Package?",
    answer: "The Vasant Wellness Package (₹1,299) includes Thyroid Profile, Iron Studies, Kidney Profile, HbA1c, CBC, Liver Profile, and Lipid Profile. It's designed for a more comprehensive health assessment.",
    category: "Health Packages",
  },
  {
    question: "Are these packages available daily?",
    answer: "Yes, all health packages are available on all working days (Monday to Saturday). You can walk in anytime during working hours or book a home collection for the same.",
    category: "Health Packages",
  },
  
  // Home Collection
  {
    question: "How does the home collection service work?",
    answer: "Simply call us to schedule a home collection appointment. Our trained phlebotomist will visit your home at the scheduled time, collect the samples, and send them to our lab. Reports will be shared with you digitally.",
    category: "Home Collection",
  },
  {
    question: "Is there any extra charge for home collection?",
    answer: "No, home collection service is provided free of cost. You only pay for the tests or package you book.",
    category: "Home Collection",
  },
  {
    question: "Which areas are covered for home collection?",
    answer: "Currently, we cover Puri and nearby areas. Please call us to confirm if we provide service at your specific location.",
    category: "Home Collection",
  },
  {
    question: "How do I prepare for a home collection visit?",
    answer: "If your test requires fasting, please follow the instructions provided. Keep your prescription and ID proof ready. Ensure a clean, comfortable space for the sample collection.",
    category: "Home Collection",
  },
  
  // Doctors & Consultation
  {
    question: "Who are the doctors available for consultation?",
    answer: "We have Dr. Sisir Kumar Das (MD & Diabetic Consultant, Retired Senior Consultant) for diabetes and general medicine, and Dr. Sadasiba Padhy (MBBS, MD Pediatrics) for child healthcare. Both are available on Wednesdays from 10 AM to 1 PM.",
    category: "Doctors",
  },
  {
    question: "Is there a consultation fee?",
    answer: "Consultation with our doctors is free when you book any health package or diagnostic test. Please call us for more details about standalone consultation charges.",
    category: "Doctors",
  },
  {
    question: "Do I need a doctor's prescription for tests?",
    answer: "While a doctor's prescription is recommended, you can also opt for our health packages directly without a prescription. However, for specific diagnostic tests, a prescription helps ensure we conduct the right tests for your condition.",
    category: "General",
  },
  
  // Reports & Accuracy
  {
    question: "How accurate are your test results?",
    answer: "We use high-quality, calibrated equipment and follow standard quality control protocols. Our lab technicians are trained professionals who ensure accurate and reliable results.",
    category: "General",
  },
  {
    question: "Can I get my reports digitally?",
    answer: "Yes, all reports are available in digital format. We can share them via WhatsApp or email as per your preference. Physical copies are also available at our center.",
    category: "General",
  },
  {
    question: "Do you accept health insurance?",
    answer: "Please contact us directly to confirm if your health insurance is accepted. We'll assist you with the documentation required for insurance claims.",
    category: "General",
  },
  
  // Emergency & Special Cases
  {
    question: "What if I need urgent test results?",
    answer: "Please inform our team about your urgency when booking. We can prioritize certain tests and provide results on an expedited basis. Additional charges may apply.",
    category: "General",
  },
  {
    question: "Do you provide services for elderly or bedridden patients?",
    answer: "Yes, we provide special assistance for elderly and bedridden patients. Our home collection service is ideal for such cases. Please call us to discuss specific requirements.",
    category: "Home Collection",
  },
];