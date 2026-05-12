export type TechnologyItem = {
  title: string;
  description: string;
  benefit: string;
  icon: string;
  image: string;
};

export const technologies: TechnologyItem[] = [
  {
    title: "Digital X-Ray",
    description:
      "High-resolution digital imaging that provides instant, detailed views of teeth, roots, and jawbone with up to 90% less radiation than traditional X-rays.",
    benefit: "Faster diagnosis with minimal radiation exposure",
    icon: "ScanLine",
    image: "/images/technology/digital-xray.svg",
  },
  {
    title: "Rotary Endodontics",
    description:
      "Advanced motorized instruments for root canal procedures that are faster, more precise, and significantly more comfortable than manual methods.",
    benefit: "Painless, efficient root canal treatment",
    icon: "Settings",
    image: "/images/technology/rotary-endo.svg",
  },
  {
    title: "3D Dental Scanner",
    description:
      "State-of-the-art intraoral scanning creates precise 3D digital impressions for crowns, aligners, and implant planning without uncomfortable molds.",
    benefit: "Accurate, comfortable digital impressions",
    icon: "Box",
    image: "/images/technology/3d-scanner.svg",
  },
  {
    title: "Laser Dentistry",
    description:
      "Dental lasers enable minimally invasive procedures with less bleeding, faster healing, and reduced discomfort for treatments like gum contouring and cavity removal.",
    benefit: "Minimally invasive with faster recovery",
    icon: "Zap",
    image: "/images/technology/laser-dentistry.svg",
  },
  {
    title: "Painless Injection Technology",
    description:
      "Computer-controlled anaesthesia delivery systems that administer local anaesthetic slowly and precisely, virtually eliminating injection pain.",
    benefit: "Anxiety-free, comfortable dental experience",
    icon: "Syringe",
    image: "/images/technology/painless-injection.svg",
  },
];
