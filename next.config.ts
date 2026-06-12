import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    // Pin root — avoids picking ~/package-lock.json over this project
    root: projectRoot,
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
