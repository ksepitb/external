import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Tentang KSEP ITB",
  description:
    "Kenali KSEP ITB lebih dalam - visi, misi, dan tim Renaissance yang berdedikasi untuk edukasi ekonomi dan pasar modal. KSEP ITB sebagai rumah pembelajaran dan pengembangan diri yang berdampak.",
  keywords: [
    "tentang KSEP ITB",
    "visi misi KSEP",
    "Renaissance KSEP",
    "tim KSEP ITB",
    "organisasi mahasiswa ITB",
    "kelompok studi ekonomi",
  ],
  openGraph: {
    title: "About - Tentang KSEP ITB | Visi, Misi & Tim",
    description:
      "Kenali KSEP ITB lebih dalam - visi, misi, dan tim Renaissance yang berdedikasi untuk edukasi ekonomi dan pasar modal.",
    images: ["/og-image.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
