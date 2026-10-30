import { execSync } from 'node:child_process';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: false,
  },
};

export default nextConfig;
