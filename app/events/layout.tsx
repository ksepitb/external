import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - Kegiatan & Program KSEP ITB",
  description:
    "Jelajahi berbagai kegiatan dan program KSEP ITB, mulai dari podcast, company visit, workshop investasi, hingga event tahunan. Bergabunglah dengan komunitas pasar modal terbesar di ITB.",
  keywords: [
    "events KSEP ITB",
    "kegiatan pasar modal",
    "workshop investasi",
    "company visit",
    "podcast ekonomi",
    "external relations",
    "internal relations",
  ],
  openGraph: {
    title: "Events - Kegiatan & Program | KSEP ITB",
    description:
      "Jelajahi berbagai kegiatan dan program KSEP ITB, mulai dari podcast, company visit, workshop investasi, hingga event tahunan.",
    images: ["/og-image.png"],
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
