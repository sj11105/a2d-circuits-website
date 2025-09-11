/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: '',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  // Override the default asset prefix for static hosting
  env: {
    ASSET_PREFIX: '/assets'
  },
  experimental: {
    outputFileTracingRoot: undefined,
  }
}

module.exports = nextConfig
