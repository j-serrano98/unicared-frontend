/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
        port: '', // Can be an empty string
        pathname: '/kaijuu-8-gou/**',
      },
    ],
  },
};

export default nextConfig;
