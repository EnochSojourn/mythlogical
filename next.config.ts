import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // serving from custom domain mythlogical.com — no basePath needed
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
