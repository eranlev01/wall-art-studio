import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      { protocol: "https", hostname: "www.urbanstyle.co.il" },
      { protocol: "https", hostname: "urbanstyle.co.il" },
      { protocol: "https", hostname: "www.itaynevet.com" },
      { protocol: "https", hostname: "itaynevet.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
};

export default nextConfig;
