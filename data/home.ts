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
    title: "Company Visit",
    description:
      "Communal visits to  Indonesia Stock Exchange and select company headquarters relevant to our field of study (Capital Market and Finance).",
    href: "/gallery",
    imgSrc: "/gallery1/1.webp",
    className: "md:col-span-2 md:row-span-2",
    gradient: "bg-gradient-to-br from-[#541F34] to-[#100C0E]",
  },
  {
    id: 2,
    title: "Studi Banding",
    description:
      "A casual discussion between capital market student communities to share insights and experiences.",
    href: "/gallery",
    imgSrc: "/gallery2/2.webp",
    gradient: "bg-gradient-to-br from-[#07507A] to-[#091A23]",
  },
  {
    id: 3,
    title: "KSEP Super Day",
    description:
      "A KSEP ITB anniversary event sharing its history through Instagram.",
    href: "/gallery",
    imgSrc: "/gallery3/1.webp",
    gradient: "bg-gradient-to-br from-[#07507A] to-[#091A23]",
  },
  {
    id: 4,
    title: "KSEP Farewell",
    description:
      "Appreciation in the form of a togetherness event or giving souvenirs to KSEP ITB graduates.",
    href: "/gallery",
    imgSrc: "/gallery4/2.webp",
    className: "md:col-span-2",
    gradient: "bg-gradient-to-br from-[#541F34] to-[#100C0E]",
  },
];

// KSEP News
export const newsData: NewsCardData = {
  id: 1,
  category: "Berita Saham",
  date: "9 Januari 2026",
  title: "RLCO ARA 17 Hari Berturut-turut, Emiten Prajogo Pangestu Kalah",
  description:
    "CPasar saham Indonesia kembali dihebohkan oleh fenomena kenaikan harga saham yang luar biasa dari emiten pendatang baru. Saham PT Abadi Lestari Indonesia Tbk (RLCO), yang merupakan perusahaan holding dari merek Realfood, berhasil mencatatkan rekor kenaikan fantastis sebesar 1.810% sejak penawaran umum perdana (IPO). Prestasi ini ditandai dengan pencapaian Auto Reject Atas (ARA) selama 17 hari perdagangan berturut-turut.",
  imageSrc: "/berita/1.webp",
  link: "/insights/berita-saham/rlco-ara-17-hari-berturut-turut-emiten-prajogo-pangestu-kalah",
};

// Market Recap
export const documentData: DocumentCardData = {
  id: 1,
  category: "Market Recap",
  title: "KSEP Market Review #6 (Edisi Desember)",
  imageSrc: "/berita/cover.webp",
  link: "/insights/market-review/ksep-market-review-6-edisi-desember",
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
