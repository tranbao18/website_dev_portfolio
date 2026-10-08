import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray yarn.lock in the home folder made Turbopack pick the wrong workspace root
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
