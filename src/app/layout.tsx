import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { WebVitals } from "@/components/web-vitals";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Prevent FOIT (Flash of Invisible Text)
  preload: true,
});

export const metadata: Metadata = {
  title: "Hacked Aging - Science-Backed Longevity for High-Performance 40+",
  description: "AI-powered longevity platform co-founded by Andrés Morales (AI & Automation Expert) and Dr. Talia Henkle (Johns Hopkins PhD, American Cancer Society). Translating Medicine 3.0 breakthroughs into accessible daily protocols.",
  keywords: "longevity, health over 40, medicine 3.0, biohacking, performance optimization, Johns Hopkins, AI automation, Dr. Talia Henkle, Andrés Morales",
  authors: [
    { name: "Andrés Morales", url: "https://linkedin.com/in/andresmoralesc1" },
    { name: "Dr. Talia Henkle, PhD", url: "https://linkedin.com/in/taliahenkle" }
  ],
  creator: "Andrés Morales & Dr. Talia Henkle",
  publisher: "Hacked Aging",
  metadataBase: new URL("https://hacked-aging.vercel.app"),
  openGraph: {
    title: "Hacked Aging - Science-Backed Longevity for High-Performance 40+",
    description: "AI-powered longevity platform co-founded by Andrés Morales and Dr. Talia Henkle (Johns Hopkins PhD, American Cancer Society). Translating Medicine 3.0 into accessible protocols.",
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
    description: "AI-powered platform by Andrés Morales & Dr. Talia Henkle. Translating Medicine 3.0 into accessible protocols.",
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
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Prefetch critical routes */}
        <link rel="prefetch" href="/assessment" />
        <link rel="prefetch" href="/protocols" />

        {/* Viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <WebVitals />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
