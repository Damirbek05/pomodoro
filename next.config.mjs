/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pomodoro',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
