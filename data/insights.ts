import { InsightPost, NewsPost, MarketReviewPost } from "@/types";

const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const createDriveEmbedLink = (shareLink: string) => {
  return (
    shareLink
      .replace("/view?usp=sharing", "/preview")
      .replace("/file/d/", "/file/d/") +
    (shareLink.includes("/preview") ? "" : "/preview")
  );
};

const posts: (Omit<NewsPost, "slug"> | Omit<MarketReviewPost, "slug">)[] = [
  {
    id: 1,
    category: "berita-saham",
    title: "Prajogo Pangestu Bawa CDIA IPO ke Bursa",
    date: "23 Juni 2025",
    imageSrc: "/placeholder.svg",
    description:
      "CDIA anak usaha PT Chandra Asri Pacific Tbk (TPIA), buka penawaran IPO...",
    body: "Ini adalah konten lengkap dari berita tentang CDIA IPO...",
  },
  {
    id: 2,
    category: "berita-saham",
    title: "Prajogo Pangestu Bawa CDIA IPO ke Bursa",
    date: "23 Juni 2025",
    imageSrc: "/placeholder.svg",
    description:
      "CDIA anak usaha PT Chandra Asri Pacific Tbk (TPIA), buka penawaran IPO...",
    body: "Ini adalah konten lengkap dari berita tentang CDIA IPO...",
  },
  {
    id: 3,
    category: "berita-saham",
    title: "Prajogo Pangestu Bawa CDIA IPO ke Bursa",
    date: "23 Juni 2025",
    imageSrc: "/placeholder.svg",
    description:
      "CDIA anak usaha PT Chandra Asri Pacific Tbk (TPIA), buka penawaran IPO...",
    body: "Ini adalah konten lengkap dari berita tentang CDIA IPO...",
  },
  {
    id: 4,
    category: "berita-saham",
    title: "Prajogo Pangestu Bawa CDIA IPO ke Bursa",
    date: "23 Juni 2025",
    imageSrc: "/placeholder.svg",
    description:
      "CDIA anak usaha PT Chandra Asri Pacific Tbk (TPIA), buka penawaran IPO...",
    body: "Ini adalah konten lengkap dari berita tentang CDIA IPO...",
  },
  {
    id: 5,
    category: "berita-makroekonomi",
    title: "Inflasi Melandai, BI Tahan Suku Bunga",
    date: "21 Juni 2025",
    imageSrc: "/placeholder.svg",
    description:
      "Bank Indonesia memutuskan untuk mempertahankan suku bunga acuan...",
    body: "Konten lengkap tentang keputusan suku bunga BI...",
  },

  {
    id: 6,
    category: "market-review",
    title: "Market Review ANJAYYYYY",
    description:
      "CDIA anak usaha PT Chandra Asri Pacific Tbk (TPIA), buka penawaran...",
    pdfEmbedLink:
      "https://drive.google.com/file/d/1BOpQraRmJAKZYs6osenUwqbcz635n-Kz/preview",
  },
  {
    id: 7,
    category: "market-review",
    title: "Weekly Market Analysis",
    description:
      "Analisis mendalam tentang pergerakan pasar selama seminggu terakhir.",
    pdfEmbedLink:
      "https://drive.google.com/file/d/1BOpQraRmJAKZYs6osenUwqbcz635n-Kz/preview",
  },
];

export const allInsightPosts: InsightPost[] = posts.map((p) => {
  const slug = createSlug(p.title);
  if (p.category === "market-review") {
    return {
      ...p,
      slug,
      pdfEmbedLink: createDriveEmbedLink(p.pdfEmbedLink),
    };
  }
  return {
    ...p,
    slug,
  };
});
