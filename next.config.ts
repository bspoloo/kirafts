import type { NextConfig } from "next";
import test from "node:test";

const nextConfig: NextConfig = {
  /* config options here */

  reactStrictMode: true,
  distDir: "build",
  output: "standalone",
  turbopack: {},
  webpack(config) {
    config.module.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }]
    });
  },
  
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/pages/card',
      },
      {
        source: '/card/christmas',
        destination: '/pages/card',
      }
    ]
  }
};

export default nextConfig;
