/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/BlogApp",
  assetPrefix: "/BlogApp"
}

module.exports = nextConfig;
 