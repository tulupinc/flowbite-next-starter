/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  images: {
    domains: ["flowbite.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
