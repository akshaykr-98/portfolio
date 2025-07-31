import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // ✅ enables static export (replaces `next export`)
  images: {
    unoptimized: true, // ✅ disables Image Optimization for static builds
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint during `next build`
  }
};

export default nextConfig;
