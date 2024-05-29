/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.thecatapi.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'api.thecatapi.com',
        port: '',
      },
    ],
  },
}

export default nextConfig;
