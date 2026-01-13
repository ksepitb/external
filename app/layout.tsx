import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

const siteUrl = "https://ksepitb.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KSEP ITB - Kelompok Studi Ekonomi dan Pasar Modal ITB",
    template: "%s | KSEP ITB",
  },
  description:
    "Kelompok Studi Ekonomi dan Pasar Modal Institut Teknologi Bandung (KSEP ITB) adalah organisasi mahasiswa yang berfokus pada edukasi dan pengembangan dalam bidang ekonomi, pasar modal, dan investasi.",
  keywords: [
    "KSEP ITB",
    "Kelompok Studi Ekonomi",
    "Pasar Modal ITB",
    "Institut Teknologi Bandung",
    "Investasi Saham",
    "Capital Market",
    "Market Review",
    "Berita Saham",
    "Berita Makroekonomi",
    "IHSG",
    "Stock Market Indonesia",
    "Student Organization ITB",
  ],
  authors: [{ name: "KSEP ITB" }],
  creator: "KSEP ITB",
  publisher: "KSEP ITB",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "KSEP ITB",
    title: "KSEP ITB - Kelompok Studi Ekonomi dan Pasar Modal ITB",
    description:
      "Kelompok Studi Ekonomi dan Pasar Modal Institut Teknologi Bandung (KSEP ITB) adalah organisasi mahasiswa yang berfokus pada edukasi dan pengembangan dalam bidang ekonomi, pasar modal, dan investasi.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "KSEP ITB - Kelompok Studi Ekonomi dan Pasar Modal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KSEP ITB - Kelompok Studi Ekonomi dan Pasar Modal ITB",
    description:
      "Kelompok Studi Ekonomi dan Pasar Modal Institut Teknologi Bandung (KSEP ITB) adalah organisasi mahasiswa yang berfokus pada edukasi dan pengembangan dalam bidang ekonomi, pasar modal, dan investasi.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@ksep_itb",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <meta name="theme-color" content="#060911" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
