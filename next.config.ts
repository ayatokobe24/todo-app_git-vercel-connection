import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
