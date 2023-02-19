/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  env:{
    MYACCESSTOKEN : process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    MYSPACEID: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  },
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
  assetPrefix:'/BlogApp/'
};

module.exports = nextConfig;
