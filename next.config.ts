import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      //   port: "1337",
      //   pathname: "/uploads/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "api.example.com",
      //   pathname: "/uploads/**",
      // },
    ],
    localPatterns: [
      {
        pathname: "/api/image-proxy/**",
        // search is omitted, so ?v=123, ?t=456, or no query string are all allowed
      },
    ],
  },
};

export default nextConfig;
