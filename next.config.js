/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ENDPOINT_API: process.env.ENDPOINT_API,
  }
}

module.exports = nextConfig
