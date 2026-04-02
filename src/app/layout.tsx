import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mythlogical | AI Consulting That Delivers Results",
  description:
    "We evaluate your business and implement targeted AI solutions that eliminate waste, accelerate operations, and deliver measurable ROI.",
  keywords: [
    "AI consulting",
    "AI automation",
    "IT infrastructure",
    "cost savings",
    "artificial intelligence",
    "business optimization",
  ],
  metadataBase: new URL("https://mythlogical.com"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Mythlogical | AI Consulting That Delivers Results",
    description:
      "We evaluate your business and implement targeted AI solutions that deliver measurable ROI.",
    url: "https://mythlogical.com",
    siteName: "Mythlogical",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mythlogical — AI Changes Everything. We Show You Where to Start.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mythlogical | AI Consulting That Delivers Results",
    description:
      "We evaluate your business and implement targeted AI solutions that deliver measurable ROI.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mythlogical",
    url: "https://mythlogical.com",
    description:
      "AI consulting that delivers measurable results. We evaluate your business and implement targeted AI solutions that eliminate waste and accelerate operations.",
    email: "hello@mythlogical.com",
    serviceType: [
      "AI Consulting",
      "IT Process Automation",
      "Infrastructure Optimization",
      "AI-Powered Cybersecurity",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
