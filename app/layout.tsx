import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getOrganizationSchema, getPersonSchema } from "@/lib/schema";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miarenai.com"),
  title: {
    default: "Miaren AI | AI Visibility Consulting | Be Found Where It Matters Next",
    template: "%s | Miaren AI",
  },
  description:
    "Miaren AI helps businesses become visible, citable, and recommendable in AI-powered search engines like ChatGPT, Perplexity, and Google AI Overviews. Founded by Mia Cheraghian.",
  keywords: [
    "Generative Engine Optimization",
    "GEO",
    "AI search visibility",
    "AI citations",
    "ChatGPT optimization",
    "Perplexity optimization",
    "three-signal methodology",
    "AI visibility audit",
    "Miaren AI",
  ],
  authors: [{ name: "Mia Cheraghian", url: "https://miarenai.com/about" }],
  creator: "Miaren AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://miarenai.com",
    siteName: "Miaren AI",
    title: "Miaren AI | Be found where it matters next.",
    description:
      "GEO consulting that makes your brand visible, citable, and recommendable in AI-powered search engines.",
    images: [
      {
        url: "https://miarenai.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Miaren AI | Be found where it matters next.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miaren AI | Generative Engine Optimization",
    description:
      "Be found where it matters next. GEO consulting for AI search visibility.",
    images: ["https://miarenai.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://miarenai.com",
  },
  verification: {
    other: {
      "msvalidate.01": "4232842774BBD6E839B08127ABF203A5",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationSchema();
  const personSchema = getPersonSchema();

  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
