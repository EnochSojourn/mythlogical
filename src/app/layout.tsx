import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MythNet — AI-Native Network Intelligence | Mythlogical",
    template: "%s | MythNet by Mythlogical",
  },
  description:
    "MythNet is an AI-powered network monitoring and security platform. One 15MB binary. Zero dependencies. Drop it in, discover everything, protect everything.",
  keywords: [
    "network monitoring",
    "network security",
    "AI network analysis",
    "mesh networking",
    "network discovery",
    "SNMP monitoring",
    "threat detection",
    "network topology",
    "vulnerability scanning",
    "MythNet",
  ],
  metadataBase: new URL("https://mythlogical.com"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "MythNet — AI-Native Network Intelligence",
    description:
      "One 15MB binary. Zero dependencies. Drop it in, discover everything, protect everything.",
    url: "https://mythlogical.com",
    siteName: "Mythlogical",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "MythNet — AI-Native Network Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MythNet — AI-Native Network Intelligence",
    description:
      "One 15MB binary. Zero dependencies. Drop it in, discover everything, protect everything.",
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
    "@type": "SoftwareApplication",
    name: "MythNet",
    applicationCategory: "NetworkApplication",
    operatingSystem: "Linux, macOS, Windows",
    softwareVersion: "2.5.0",
    description:
      "AI-powered network monitoring and security platform. Autonomous discovery, mesh networking, vulnerability scanning, and Claude AI analysis in a single 15MB binary.",
    url: "https://mythlogical.com",
    downloadUrl: "https://github.com/EnochSojourn/mythnet/releases",
    creator: {
      "@type": "Organization",
      name: "Mythlogical",
      email: "hello@mythlogical.com",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
    },
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
