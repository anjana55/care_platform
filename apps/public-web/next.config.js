/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The shared package ships TS source, not a pre-built dist - Next needs
  // to transpile it itself rather than treating it as opaque node_modules.
  transpilePackages: ['@care-platform/shared'],
};

module.exports = nextConfig;
