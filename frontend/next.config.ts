import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
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
