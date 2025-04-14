import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV == 'production'

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? '/bookstore-frontend' : '', 
  output: 'standalone',
  distDir: 'dist',
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
