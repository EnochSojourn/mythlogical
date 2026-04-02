import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mythological | AI Consulting That Pays for Itself",
  description:
    "We evaluate your business, implement AI solutions, and you pay a fraction of what you save. Zero risk, maximum ROI.",
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
    title: "Mythological | AI Consulting That Pays for Itself",
    description:
      "We evaluate your business, implement AI solutions, and you pay a fraction of what you save.",
    url: "https://mythlogical.com",
    siteName: "Mythological",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mythological — We Find Your AI Savings. You Keep Most of Them.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mythological | AI Consulting That Pays for Itself",
    description:
      "We evaluate your business, implement AI solutions, and you pay a fraction of what you save.",
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
    name: "Mythological",
    url: "https://mythlogical.com",
    description:
      "AI consulting that pays for itself. We evaluate your business, implement AI solutions, and you pay a fraction of what you save.",
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
