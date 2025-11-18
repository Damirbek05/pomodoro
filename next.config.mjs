/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Если репозиторий не в корне GitHub Pages, раскомментируйте следующую строку
  // basePath: '/pomodoro',
  // trailingSlash: true,
}

export default nextConfig
