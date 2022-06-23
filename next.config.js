/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  // headers: {
  //   source: '/',
  //   headers: [
  //     {
  //       key: 'Content-Security-Policy',
  //       value:
  //         "default-src 'self' https: ; script-src 'self' ; object-src 'none'",
  //     },
  //   ],
  // },
  basePath: '/',
  assetPrefix: '/BlogApp',
};

module.exports = nextConfig;
