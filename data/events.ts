import { MediaItem, DepartmentEvent } from "@/types";
export const mediaData: MediaItem[] = [
  {
    id: 1,
    type: "youtube",
    title: "KSEP ITB Profile Video",
    src: "https://www.youtube.com/embed/D-klseE27Dg?si=DK_JvZzCjrhmMHYp",
  },
  {
    id: 2,
    type: "spotify",
    title: "KSEP ITB Podcast",
    src: "https://open.spotify.com/embed/episode/3N1KOJLExHvTiPPGb2OiK7?utm_source=generator&theme=0",
  },
];

export const externalEvents: DepartmentEvent[] = [
  {
    id: 1,
    title: "Company Visit: McKinsey",
    description:
      "CDIA anak usaha PT Chandra Asri Pacific Tbk (TPIA), buka penawaran IPO dengan potensi market cap Rp21-24 T.",
    imageSrc: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Capital Market Summit",
    description:
      "A national-level summit bringing together experts, practitioners, and students to discuss the future of the capital market.",
    imageSrc: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Global Investment Conference",
    description:
      "An international conference featuring keynote speakers from leading global investment firms.",
    imageSrc: "/placeholder.svg",
  },
];

// Data for the "Operational" department
export const operationalEvents: DepartmentEvent[] = [
  {
    id: 1,
    title: "Operational Handsome",
    description:
      "A workshop focused on optimizing internal processes and improving team efficiency with handsome results.",
    imageSrc: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Team Building 2024",
    description:
      "Strengthening bonds and improving collaboration through a series of fun and challenging team activities.",
    imageSrc: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Internal Skill Sharing",
    description:
      "Members share their expertise and knowledge with each other in a casual and supportive environment.",
    imageSrc: "/placeholder.svg",
  },
];
