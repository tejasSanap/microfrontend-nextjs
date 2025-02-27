import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/microfrontends.js",
        // source: "/microfrontends/:path*",
        
        // source: "/lib/index.js",
        // headers: [
        //   {
        //     key: "Access-Control-Allow-Origin",
        //     value: "*", // Allow all origins (or specify your Vite app's origin)
        //   },
        // ],
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Allow requests from any origin
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
