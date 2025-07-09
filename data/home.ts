import {
  GridItem,
  NewsCardData,
  DocumentCardData,
  CompetitionData,
} from "@/types";

// Recent Activites
export const gridItems: GridItem[] = [
  {
    id: 1,
    title: "Annual Gathering",
    description:
      "Our yearly event to bring all members together for fun and bonding.",
    href: "/gallery/annual-gathering",
    imgSrc: "/placeholder.svg",
    className: "md:col-span-2 md:row-span-2",
    gradient: "bg-gradient-to-br from-[#541F34] to-[#100C0E]",
  },
  {
    id: 2,
    title: "Workshop Series",
    description: "Sharpening skills with industry experts.",
    href: "/gallery/workshops",
    imgSrc: "/placeholder.svg",
    gradient: "bg-gradient-to-br from-[#07507A] to-[#091A23]",
  },
  {
    id: 3,
    title: "Charity Drive",
    description: "Giving back to the community that supports us.",
    href: "/gallery/charity-drive",
    imgSrc: "/placeholder.svg",
    gradient: "bg-gradient-to-br from-[#07507A] to-[#091A23]",
  },
  {
    id: 4,
    title: "KSEP Mabar",
    description:
      "Disini kita mabarrrr disini guaa udah guln indo 81 SENGGOL DONG.",
    href: "/gallery/ksep-mabar",
    imgSrc: "/placeholder.svg",
    className: "md:col-span-2",
    gradient: "bg-gradient-to-br from-[#541F34] to-[#100C0E]",
  },
];

// KSEP News
export const newsData: NewsCardData = {
  id: 1,
  category: "Berita Saham",
  date: "23 Juni 2025",
  title: "Prajogo Pangestu Bawa CDIA IPO ke Bursa",
  description:
    "CDIA anak usaha PT Chandra Asri Pacific Tbk (TPIA), buka penawaran IPO dengan potensi market cap Rp21-24 T. Perusahaan ini berfokus pada infrastruktur adsasdasdasdasdasdasdsd",
  imageSrc: "/placeholder.svg",
  link: "/berita/cdia-ipo",
};

// Market Recap
export const documentData: DocumentCardData = {
  id: 1,
  category: "Market Recap",
  title: "Ini nama dokumen dasdasdasda asdasdasdasda asdddddddd dasdasdasd",
  imageSrc: "/placeholder.svg",
  link: "/dokumen/market-recap-juni-25",
};

// Our Achievements
export const competitionData: CompetitionData[] = [
  {
    id: 1,
    year: 2020,
    imageSrc: "/placeholder.svg",
    position: 1,
    positionText: "#1 Place",
    title: "Kompetisi Bersaing dengan Orang Lama",
    university: "Universitas Geming",
    participants: [
      "Farrel Athalla Putra (KSEP'23)",
      "Farrel Athalla Putra (KSEP'23)",
      "Farrel Athalla Putra (KSEP'23)",
    ],
    style: "combination", 
  },
  {
    id: 2,
    year: 2020,
    imageSrc: "/placeholder.svg",
    position: 2,
    positionText: "#2 Place",
    title: "National Investment Challenge",
    university: "University of Economics",
    participants: ["Jane Doe (KSEP'22)", "John Smith (KSEP'22)"],
    style: "combination",
  },
  {
    id: 3,
    year: 2020,
    imageSrc: "/placeholder.svg",
    position: 3,
    positionText: "#3 Place",
    title: "Capital Market Analysis Competition",
    university: "Institute of Finance",
    participants: [
      "Peter Jones (KSEP'24)",
      "Mary Jane (KSEP'24)",
      "Bruce Wayne (KSEP'24)",
    ],
    style: "combination",
  },
];
