/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '', // Can be an empty string
        pathname: '/photo/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '', // Can be an empty string
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
