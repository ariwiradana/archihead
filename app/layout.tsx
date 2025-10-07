import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/ui/PageLoader";

const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Archihead — Jasa Konsultasi Arsitekur Profesional di Bali & Indonesia",
    template: "%s | Archihead",
  },
  icons: {
    icon: [
      { url: "/32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/180x180.png", sizes: "180x180", type: "image/png" },
      {
        url: "/152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
    ],
  },
  description:
    "Archihead, studio arsitektur profesional di Bali, menghadirkan desain rumah, villa, dan bangunan komersial modern dan fungsional.",
  keywords: [
    "arsitek Bali",
    "jasa arsitek",
    "desain rumah",
    "villa Bali",
    "desain arsitektur modern",
    "studio arsitektur Indonesia",
    "Archihead Bali",
    "arsitek profesional",
    "desain interior",
    "arsitek villa Ubud",
  ],
  authors: [{ name: "Archihead Studio", url: "https://www.archihead.com" }],
  creator: "Archihead Studio",
  publisher: "Archihead Studio",
  metadataBase: new URL("https://www.archihead.com"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.archihead.com",
    title:
      "Archihead — Jasa Konsultasi Arsitekur Profesional di Bali & Indonesia",
    description:
      "Desain rumah, villa, dan bangunan komersial modern dengan pendekatan alami dan fungsional. Archihead menghadirkan arsitektur yang menyatu dengan lingkungan Bali.",
    siteName: "Archihead",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Archihead Bali Architecture Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Archihead — Jasa Arsitek Profesional di Bali & Indonesia",
    description:
      "Desain arsitektur modern & alami di Bali. Studio profesional untuk rumah, villa, dan bangunan komersial.",
    creator: "@archiheadstudio",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.archihead.com",
    languages: {
      "id-ID": "https://www.archihead.com",
      "en-US": "https://www.archihead.com/en",
    },
  },
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
  category: "architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <PageLoader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
