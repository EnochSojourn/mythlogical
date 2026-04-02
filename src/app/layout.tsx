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
  openGraph: {
    title: "Mythological | AI Consulting That Pays for Itself",
    description:
      "We evaluate your business, implement AI solutions, and you pay a fraction of what you save.",
    url: "https://mythological.com",
    siteName: "Mythological",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
