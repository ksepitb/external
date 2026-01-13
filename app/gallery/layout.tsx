import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Dokumentasi Kegiatan KSEP ITB",
  description:
    "Lihat dokumentasi kegiatan KSEP ITB, termasuk Company Visit ke Bursa Efek Indonesia, Studi Banding dengan komunitas pasar modal universitas lain, KSEP Super Day, dan KSEP Farewell.",
  keywords: [
    "gallery KSEP ITB",
    "dokumentasi kegiatan",
    "company visit IDX",
    "studi banding",
    "foto KSEP",
    "kegiatan mahasiswa ITB",
  ],
  openGraph: {
    title: "Gallery - Dokumentasi Kegiatan | KSEP ITB",
    description:
      "Lihat dokumentasi kegiatan KSEP ITB, termasuk Company Visit ke Bursa Efek Indonesia dan berbagai kegiatan menarik lainnya.",
    images: ["/og-image.png"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
