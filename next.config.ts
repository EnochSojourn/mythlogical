import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath removed — serving from custom domain root (mythlogical.com)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
