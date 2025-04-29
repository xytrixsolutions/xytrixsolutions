import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.2.107"],
  images: {
    remotePatterns: [new URL("https://picsum.photos/400/300")],
  },
};

export default nextConfig;
