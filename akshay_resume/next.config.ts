import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // ✅ enables static export (replaces `next export`)
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint during `next build`
  }
};

export default nextConfig;
