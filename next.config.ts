import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force static generation where possible for best crawlability
  output: "standalone",
  
  // Image optimization
  images: {
    domains: ["miarenai.com"],
  },

  // Security headers for production
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirects from old Lovable routes if needed
  async redirects() {
    return [
      // Add any Lovable URL redirects here to preserve link equity
    ];
  },
};

export default nextConfig;
