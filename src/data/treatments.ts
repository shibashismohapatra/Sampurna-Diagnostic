export type Treatment = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  symptoms: string[];
  process: { step: string; description: string }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  relatedVideo?: string;
};

export const treatments: Treatment[] = [
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    shortDescription:
      "Painless root canal procedures to save infected teeth and relieve toothache using advanced rotary endodontic technology.",
    description:
      "Root canal treatment (endodontic therapy) removes infected or damaged pulp from inside a tooth. At Smiles by Dr. Annu, we use advanced rotary endodontic instruments and modern anaesthesia techniques to make the procedure virtually painless. The treated tooth is then sealed and restored with a crown for long-lasting protection.",
    image: "/images/treatments/root-canal.svg",
    icon: "Stethoscope",
    symptoms: [
      "Severe toothache that worsens at night",
      "Prolonged sensitivity to hot or cold foods",
      "Swelling or tenderness in the gums near a tooth",
      "Darkening or discolouration of a tooth",
      "A persistent pimple on the gums",
    ],
    process: [
      {
        step: "Diagnosis & X-Ray",
        description:
          "Digital X-rays are taken to assess the extent of infection and plan the treatment precisely.",
      },
      {
        step: "Anaesthesia",
        description:
          "Local anaesthesia is applied to ensure a completely pain-free experience.",
      },
      {
        step: "Pulp Removal",
        description:
          "Infected or damaged pulp tissue is carefully removed using rotary instruments.",
      },
      {
        step: "Cleaning & Shaping",
        description:
          "The root canals are thoroughly cleaned, shaped, and disinfected.",
      },
      {
        step: "Filling & Sealing",
        description:
          "The canals are filled with biocompatible material and sealed to prevent reinfection.",
      },
      {
        step: "Crown Restoration",
        description:
          "A dental crown is placed over the treated tooth to restore strength and appearance.",
      },
    ],
    benefits: [
      "Saves your natural tooth",
      "Relieves dental pain instantly",
      "Prevents the spread of infection",
      "Restores normal biting and chewing",
      "Long-lasting results with proper care",
    ],
    faqs: [
      {
        question: "Is root canal treatment painful?",
        answer:
          "With modern anaesthesia and rotary technology, root canal treatment at our clinic is virtually painless. Most patients experience relief immediately after the procedure.",
      },
      {
        question: "How many visits does a root canal require?",
        answer:
          "Most root canal treatments can be completed in 1–2 visits, depending on the severity of the infection.",
      },
      {
        question: "How long does a root canal treated tooth last?",
        answer:
          "With a proper crown and good oral hygiene, a root canal treated tooth can last a lifetime.",
      },
    ],
    relatedVideo: "https://youtube.com/shorts/xD0wAuzx1wU",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription:
      "Permanent tooth replacement with titanium implants that look, feel, and function like natural teeth.",
    description:
      "Dental implants are the gold standard for replacing missing teeth. A biocompatible titanium post is surgically placed into the jawbone, where it fuses naturally over time. A realistic dental crown is then attached, giving you a permanent, natural-looking replacement tooth. Dr. Annu Singh specializes in implant placement with precision and care.",
    image: "/images/treatments/dental-implants.svg",
    icon: "Puzzle",
    symptoms: [
      "One or more missing teeth",
      "Loose or ill-fitting dentures",
      "Difficulty chewing or speaking",
      "Bone loss in the jaw area",
      "Desire for a permanent tooth replacement",
    ],
    process: [
      {
        step: "Consultation & Planning",
        description:
          "Detailed examination and 3D imaging to plan the ideal implant position.",
      },
      {
        step: "Implant Placement",
        description:
          "A titanium implant post is surgically placed into the jawbone under local anaesthesia.",
      },
      {
        step: "Healing Period",
        description:
          "The implant integrates with the bone over 3–6 months (osseointegration).",
      },
      {
        step: "Abutment Attachment",
        description:
          "A connector piece is placed on the implant to support the final crown.",
      },
      {
        step: "Crown Placement",
        description:
          "A custom-made, natural-looking crown is permanently fixed on the abutment.",
      },
    ],
    benefits: [
      "Looks and feels like a natural tooth",
      "Permanent and long-lasting solution",
      "Preserves jawbone and facial structure",
      "No damage to adjacent teeth",
      "Restores full chewing function",
    ],
    faqs: [
      {
        question: "How long do dental implants last?",
        answer:
          "Dental implants can last 20+ years or even a lifetime with proper oral care and regular checkups.",
      },
      {
        question: "Is the implant procedure painful?",
        answer:
          "The procedure is performed under local anaesthesia and is generally not painful. Mild discomfort after surgery is manageable with prescribed medication.",
      },
      {
        question: "Am I a candidate for dental implants?",
        answer:
          "Most adults with adequate bone density are candidates. A consultation with Dr. Annu will determine the best treatment plan for you.",
      },
    ],
    relatedVideo: "https://youtube.com/shorts/7IqggPNQNC8",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortDescription:
      "Professional teeth whitening to safely brighten your smile by several shades in a single visit.",
    description:
      "Professional teeth whitening at Smiles by Dr. Annu uses safe, clinically proven bleaching agents to remove deep stains and discolouration. Unlike over-the-counter products, in-office whitening delivers dramatic results in just one visit, with the entire process supervised by Dr. Annu for safety and effectiveness.",
    image: "/images/treatments/teeth-whitening.svg",
    icon: "Sparkles",
    symptoms: [
      "Yellow or discoloured teeth",
      "Stains from tea, coffee, or tobacco",
      "Dull smile affecting confidence",
      "Desire for a brighter smile for events",
      "Aging-related tooth discolouration",
    ],
    process: [
      {
        step: "Shade Assessment",
        description:
          "Your current tooth shade is measured to track the whitening progress.",
      },
      {
        step: "Teeth Cleaning",
        description:
          "Teeth are cleaned to remove surface plaque and debris before whitening.",
      },
      {
        step: "Gum Protection",
        description:
          "A protective barrier is applied to shield the gums during the procedure.",
      },
      {
        step: "Whitening Application",
        description:
          "Professional-grade whitening gel is applied and activated with a special light.",
      },
      {
        step: "Final Assessment",
        description:
          "Results are evaluated and aftercare instructions are provided.",
      },
    ],
    benefits: [
      "Visibly brighter smile in one visit",
      "Safe and supervised procedure",
      "Boosts confidence and appearance",
      "Long-lasting results with care",
      "Non-invasive and painless",
    ],
    faqs: [
      {
        question: "How long does teeth whitening last?",
        answer:
          "Results typically last 6–12 months depending on diet and oral hygiene habits.",
      },
      {
        question: "Does teeth whitening damage enamel?",
        answer:
          "Professional whitening performed by a dentist is safe and does not damage enamel when done correctly.",
      },
      {
        question: "Will I experience sensitivity after whitening?",
        answer:
          "Some patients experience mild, temporary sensitivity that usually resolves within 24–48 hours.",
      },
    ],
  },
  {
    slug: "braces-and-aligners",
    title: "Braces & Aligners",
    shortDescription:
      "Orthodontic solutions including traditional braces and clear aligners to straighten teeth and correct bite issues.",
    description:
      "Achieve a perfectly aligned smile with our orthodontic treatments. We offer both traditional metal braces and modern clear aligners to suit your lifestyle and preferences. Dr. Annu creates a customized treatment plan to gradually move teeth into their ideal positions for improved aesthetics and bite function.",
    image: "/images/treatments/braces-aligners.svg",
    icon: "AlignCenter",
    symptoms: [
      "Crooked or overlapping teeth",
      "Gaps between teeth",
      "Overbite, underbite, or crossbite",
      "Difficulty cleaning misaligned teeth",
      "Jaw pain from bite misalignment",
    ],
    process: [
      {
        step: "Orthodontic Assessment",
        description:
          "Detailed examination, X-rays, and impressions to create a personalised treatment plan.",
      },
      {
        step: "Treatment Selection",
        description:
          "Choose between traditional braces or clear aligners based on your needs.",
      },
      {
        step: "Fitting / Delivery",
        description:
          "Braces are bonded to teeth or custom aligners are delivered with instructions.",
      },
      {
        step: "Regular Adjustments",
        description:
          "Periodic visits for wire adjustments or new aligner sets to progress treatment.",
      },
      {
        step: "Retention Phase",
        description:
          "Retainers are provided after treatment to maintain the new alignment.",
      },
    ],
    benefits: [
      "Straighter, more attractive smile",
      "Improved bite and jaw alignment",
      "Easier teeth cleaning & hygiene",
      "Clear aligner option available",
      "Boosts self-confidence",
    ],
    faqs: [
      {
        question: "How long does orthodontic treatment take?",
        answer:
          "Treatment duration varies from 6 months to 2 years depending on the complexity of the case.",
      },
      {
        question: "Are clear aligners as effective as braces?",
        answer:
          "Clear aligners are highly effective for mild to moderate cases. Complex cases may still require traditional braces for optimal results.",
      },
      {
        question: "Do braces hurt?",
        answer:
          "You may experience mild discomfort for a few days after fitting and adjustments, but it resolves quickly.",
      },
    ],
  },
  {
    slug: "smile-design",
    title: "Smile Design",
    shortDescription:
      "Comprehensive smile makeover combining veneers, whitening, and contouring for a stunning, personalized smile.",
    description:
      "Smile design is a comprehensive cosmetic approach that combines multiple dental procedures — veneers, whitening, contouring, and bonding — to create your ideal smile. Dr. Annu carefully analyzes your facial structure, lip line, and tooth proportions to design a smile that looks natural and enhances your overall appearance.",
    image: "/images/treatments/smile-design.svg",
    icon: "Smile",
    symptoms: [
      "Chipped, cracked, or uneven teeth",
      "Gaps or spacing issues",
      "Discoloured or mismatched teeth",
      "Asymmetric smile line",
      "Overall dissatisfaction with smile appearance",
    ],
    process: [
      {
        step: "Smile Analysis",
        description:
          "Digital photography and analysis of facial features, lip line, and tooth proportions.",
      },
      {
        step: "Treatment Planning",
        description:
          "A personalised plan combining relevant cosmetic procedures is created.",
      },
      {
        step: "Digital Preview",
        description:
          "Preview your expected results before treatment begins.",
      },
      {
        step: "Phased Treatment",
        description:
          "Procedures are carried out in a planned sequence for optimal results.",
      },
      {
        step: "Final Reveal",
        description:
          "Your new, confident smile is revealed with aftercare guidance.",
      },
    ],
    benefits: [
      "Completely customised smile",
      "Natural-looking results",
      "Combines multiple treatments efficiently",
      "Boosts overall facial aesthetics",
      "Life-changing confidence",
    ],
    faqs: [
      {
        question: "What does a smile design include?",
        answer:
          "Depending on your needs, it may include veneers, whitening, bonding, gum contouring, and alignment correction.",
      },
      {
        question: "How long does the full smile design process take?",
        answer:
          "The complete process typically takes 2–4 weeks depending on the procedures involved.",
      },
      {
        question: "Is smile design only cosmetic?",
        answer:
          "While primarily cosmetic, smile design also improves bite function, oral health, and tooth longevity.",
      },
    ],
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    shortDescription:
      "Gentle, child-friendly dental care including checkups, fillings, fluoride treatments, and preventive dentistry for kids.",
    description:
      "At Smiles by Dr. Annu, we make dental visits fun and comfortable for children. Our pediatric dental services include routine checkups, cavity fillings, fluoride applications, sealants, and early orthodontic assessments. Dr. Annu's gentle approach helps children develop positive associations with dental care from a young age.",
    image: "/images/treatments/pediatric-dentistry.svg",
    icon: "Baby",
    symptoms: [
      "Child's first dental visit needed",
      "Cavities in baby or permanent teeth",
      "Thumb sucking or pacifier habits",
      "Delayed or abnormal tooth eruption",
      "Dental anxiety in children",
    ],
    process: [
      {
        step: "Friendly Introduction",
        description:
          "The child is introduced to the dental environment in a fun, non-threatening way.",
      },
      {
        step: "Gentle Examination",
        description:
          "A thorough but gentle exam checks for cavities, alignment, and gum health.",
      },
      {
        step: "Cleaning & Fluoride",
        description:
          "Professional cleaning followed by fluoride application for cavity prevention.",
      },
      {
        step: "Treatment (if needed)",
        description:
          "Any required fillings or treatments are performed with child-friendly techniques.",
      },
      {
        step: "Education & Guidance",
        description:
          "Parents receive guidance on oral hygiene, diet, and next visit scheduling.",
      },
    ],
    benefits: [
      "Builds positive dental habits early",
      "Prevents cavities and decay",
      "Gentle, anxiety-free experience",
      "Monitors growth and development",
      "Professional fluoride protection",
    ],
    faqs: [
      {
        question: "When should a child first visit the dentist?",
        answer:
          "The first dental visit is recommended by age 1 or within 6 months of the first tooth erupting.",
      },
      {
        question: "Are baby teeth important?",
        answer:
          "Yes! Baby teeth are crucial for speech development, nutrition, and guiding permanent teeth into the correct position.",
      },
      {
        question: "How do you handle dental anxiety in children?",
        answer:
          "We use a gentle, fun approach with age-appropriate explanations and positive reinforcement to make every visit comfortable.",
      },
    ],
  },
  {
    slug: "tooth-extraction",
    title: "Tooth Extraction",
    shortDescription:
      "Safe and painless tooth removal for severely damaged, infected, or impacted teeth, including wisdom teeth extraction.",
    description:
      "When a tooth cannot be saved through other treatments, extraction becomes necessary. At Smiles by Dr. Annu, extractions are performed with advanced techniques and proper anaesthesia to ensure minimal discomfort. We handle simple extractions, surgical extractions, and impacted wisdom tooth removal with precision and care.",
    image: "/images/treatments/tooth-extraction.svg",
    icon: "Minus",
    symptoms: [
      "Severe tooth decay beyond repair",
      "Advanced gum disease causing loose teeth",
      "Impacted or problematic wisdom teeth",
      "Teeth broken at the gum line",
      "Overcrowding requiring extraction for orthodontics",
    ],
    process: [
      {
        step: "Assessment & X-Ray",
        description:
          "Digital X-rays evaluate the tooth root, bone condition, and extraction approach.",
      },
      {
        step: "Anaesthesia",
        description:
          "Local anaesthesia ensures the area is completely numb before the procedure.",
      },
      {
        step: "Extraction",
        description:
          "The tooth is carefully loosened and removed with minimal trauma to surrounding tissue.",
      },
      {
        step: "Wound Care",
        description:
          "Gauze is placed and post-extraction care instructions are provided.",
      },
      {
        step: "Follow-Up",
        description:
          "A follow-up visit ensures proper healing and discusses replacement options.",
      },
    ],
    benefits: [
      "Immediate pain relief",
      "Prevents spread of infection",
      "Minimally invasive technique",
      "Fast recovery with proper care",
      "Opens path for implant or bridge",
    ],
    faqs: [
      {
        question: "Is tooth extraction painful?",
        answer:
          "No, the extraction area is thoroughly numbed. You may feel pressure but not pain during the procedure.",
      },
      {
        question: "How long is recovery after extraction?",
        answer:
          "Most patients recover within 3–5 days. Wisdom tooth extractions may take up to a week.",
      },
      {
        question: "What are my options after extraction?",
        answer:
          "You can replace the missing tooth with a dental implant, bridge, or partial denture. Dr. Annu will guide you on the best option.",
      },
    ],
  },
  {
    slug: "crowns-and-bridges",
    title: "Crowns & Bridges",
    shortDescription:
      "Custom dental crowns to protect damaged teeth and bridges to replace missing teeth with natural-looking restorations.",
    description:
      "Dental crowns cap and protect weakened or damaged teeth, while bridges replace one or more missing teeth by anchoring to adjacent teeth. At Smiles by Dr. Annu, we use high-quality materials including zirconia and porcelain-fused-metal for durable, natural-looking restorations that blend seamlessly with your existing teeth.",
    image: "/images/treatments/crowns-bridges.svg",
    icon: "Crown",
    symptoms: [
      "Cracked, chipped, or weakened tooth",
      "Tooth with a large filling that needs protection",
      "Missing one or more adjacent teeth",
      "Discoloured or misshapen tooth",
      "After root canal treatment (crown needed)",
    ],
    process: [
      {
        step: "Examination & Planning",
        description:
          "Assessment of the damaged or missing teeth and discussion of restoration options.",
      },
      {
        step: "Tooth Preparation",
        description:
          "The tooth is reshaped to accommodate the crown or bridge anchors.",
      },
      {
        step: "Impression Taking",
        description:
          "Precise impressions are taken for the dental lab to craft your custom restoration.",
      },
      {
        step: "Temporary Restoration",
        description:
          "A temporary crown/bridge protects the area while the permanent one is fabricated.",
      },
      {
        step: "Permanent Placement",
        description:
          "The final crown or bridge is fitted, adjusted, and permanently cemented.",
      },
    ],
    benefits: [
      "Restores tooth strength and function",
      "Natural-looking appearance",
      "Prevents further tooth damage",
      "Replaces missing teeth effectively",
      "Durable and long-lasting",
    ],
    faqs: [
      {
        question: "How long do dental crowns last?",
        answer:
          "High-quality dental crowns typically last 10–15 years or longer with good oral hygiene.",
      },
      {
        question: "What materials are used for crowns?",
        answer:
          "We offer zirconia, porcelain-fused-metal (PFM), and full ceramic crowns depending on the location and aesthetic needs.",
      },
      {
        question: "Is a bridge better than an implant?",
        answer:
          "Both are excellent options. Bridges are faster and less invasive, while implants are more long-lasting and don't require altering adjacent teeth. Dr. Annu will recommend the best option for your case.",
      },
    ],
    relatedVideo: "https://youtube.com/shorts/prKCkdxzSKc",
  },
];
