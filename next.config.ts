import type { NextConfig } from "next";

const repoName = "techwriter-prashant-resume";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
};

export default nextConfig;