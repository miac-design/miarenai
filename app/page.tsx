import type { Metadata } from "next";
import { getWebSiteSchema } from "@/lib/schema";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Miaren AI | AI Visibility Research & Strategy",
  description:
    "Miaren AI studies how organizations become visible, citable, and recommended in AI-powered search systems like ChatGPT, Perplexity, and Google AI Overviews. Founded by Mia Cheraghian, PhD.",
  alternates: {
    canonical: "https://miarenai.com",
  },
  openGraph: {
    title: "Miaren AI | AI Visibility Research & Strategy",
    description:
      "AI visibility research and strategy. Understanding how organizations become discoverable and citable in AI-powered search.",
    url: "https://miarenai.com",
    images: [
      {
        url: "https://miarenai.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Miaren AI | AI Visibility Research & Strategy",
      },
    ],
  },
};

export default function HomePage() {
  const websiteSchema = getWebSiteSchema();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomeContent />
    </>
  );
}
