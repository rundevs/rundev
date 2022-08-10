/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['user-images.githubusercontent.com', 'avatars.githubusercontent.com']
  }
}

module.exports = nextConfig
