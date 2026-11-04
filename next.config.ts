import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  agentRules: false,
  serverExternalPackages: ['better-sqlite3'],
  // The local review URL is opened at 127.0.0.1, which Next 16 otherwise
  // treats as cross-origin from its dev client and leaves the app unhydrated.
  allowedDevOrigins: ['127.0.0.1'],
  images: {
    unoptimized: true,
    localPatterns: [{ pathname: '/products/**', search: '' }],
  },
};

export default nextConfig;
