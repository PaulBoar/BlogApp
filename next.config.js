/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  headers: {
    source: '/',
    headers: [
      {
        key: 'Content-Security-Policy',
        value:
          "default-src 'self' https: ; script-src 'self' ; object-src 'none'",
      },
    ],
  },
  basePath: '/BlogApp',
  assetPrefix: isProd ? '/BlogApp' : '',
};

module.exports = nextConfig;
