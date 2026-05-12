export type Video = {
  title: string;
  url: string;
  videoId: string;
  badge: string;
  description: string;
};

function extractVideoId(url: string): string {
  const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : "";
}

const rawVideos = [
  {
    title: "Live Tooth Surgery Procedure",
    url: "https://youtube.com/shorts/7IqggPNQNC8",
    badge: "Live Procedure",
    description:
      "Real clinical dental procedure video presented professionally to build patient trust.",
  },
  {
    title: "Dental Treatment Highlight",
    url: "https://youtube.com/shorts/xD0wAuzx1wU",
    badge: "Treatment Video",
    description:
      "Short-form treatment clip that helps patients better understand dental care.",
  },
  {
    title: "Root Canal Treatment Clip",
    url: "https://youtube.com/shorts/prKCkdxzSKc",
    badge: "Treatment Video",
    description:
      "Procedure-based educational short to visually communicate expertise.",
  },
  {
    title: "Implant Procedure Highlight",
    url: "https://youtube.com/shorts/PmWleDjwr-8",
    badge: "Treatment Video",
    description:
      "Clinical treatment highlight that strengthens confidence for new patients.",
  },
  {
    title: "Dental Health Education",
    url: "https://youtube.com/shorts/SBEvU54QRFU",
    badge: "Patient Education",
    description:
      "Educational short video to improve patient understanding before consultation.",
  },
  {
    title: "Advanced Dental Care",
    url: "https://youtube.com/shorts/MlaNEzB_9oE",
    badge: "Treatment Video",
    description:
      "Shorts content that builds authority and clinic brand presence.",
  },
];

export const youtubeVideos: Video[] = rawVideos.map((v) => ({
  ...v,
  videoId: extractVideoId(v.url),
}));
