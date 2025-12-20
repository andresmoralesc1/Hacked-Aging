import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hacked Aging - Science-Backed Longevity for High-Performance 40+",
  description: "Expert-led longevity platform translating Medicine 3.0 breakthroughs into daily protocols. Led by Dr. Talia Chen (Johns Hopkins PhD) and strategic health optimization specialists.",
  keywords: "longevity, health over 40, medicine 3.0, biohacking, performance optimization, Johns Hopkins, Dr. Talia Chen",
  authors: [
    { name: "Dr. Talia Chen, PhD", url: "https://linkedin.com/in/talia-chen-phd-johns-hopkins" },
    { name: "Andrés Morales", url: "https://linkedin.com/in/andres-morales-hacked-aging" }
  ],
  creator: "Hacked Aging Team",
  publisher: "Hacked Aging",
  metadataBase: new URL("https://hacked-aging.vercel.app"),
  openGraph: {
    title: "Hacked Aging - Science-Backed Longevity for High-Performance 40+",
    description: "Expert-led longevity platform translating Medicine 3.0 breakthroughs into daily protocols. Led by Dr. Talia Chen (Johns Hopkins PhD) and strategic health optimization specialists.",
    url: "https://hacked-aging.vercel.app",
    siteName: "Hacked Aging",
    images: [
      {
        url: "/images/pexels-longevity.jpg",
        width: 1200,
        height: 800,
        alt: "Hacked Aging - Expert Longevity Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hacked Aging - Science-Backed Longevity",
    description: "Expert-led longevity platform translating Medicine 3.0 breakthroughs into daily protocols.",
    images: ["/images/pexels-longevity.jpg"],
    creator: "@hackedaging",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
