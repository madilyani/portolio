import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ['image/webp'],
  },
  experimental: {
    optimizeCss: true, // CSS minification and optimization
  },
};

export default nextConfig;
