/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.ahsanull.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
