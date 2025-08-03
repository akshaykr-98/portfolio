import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*', //http://ots-env.eba-jkmgypkt.us-east-1.elasticbeanstalk.com
      },
    ];
  },
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
