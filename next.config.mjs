/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  distDir: 'docs',
  basePath: '/school-day',
  images: { unoptimized: true },
};

export default nextConfig;
