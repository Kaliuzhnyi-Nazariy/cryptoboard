import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
    domains: [
      "coin-images.coingecko.com",
      "www.gravatar.com",
      "res.cloudinary.com",
      "images.unsplash.com",
      "plus.unsplash.com",
    ],
  },
};

export default nextConfig;
