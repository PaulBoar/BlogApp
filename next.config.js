/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  headers: {
    source: '/BlogApp',
    headers: [
      {
        key: 'Content-Security-Policy',
        value:
          "default-src 'self' https: ; script-src 'self' ; object-src 'none'",
      },
    ],
  },
  basePath: '/BlogApp',
  assetPrefix: '/BlogApp',
};

module.exports = nextConfig;
