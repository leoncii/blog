const { redirect } = require('next/dist/next-server/server/api-utils')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx"],
  images: {
    domains: ["lh3.googleusercontent.com","res.cloudinary.com", "localhost"],
  },
  webpack5: true,
  i18n: {
    localeDetection: false,
    locales: ['es', 'eu'],
    defaultLocale: 'es'
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['pages', 'components', 'containers', 'firebase']
  },
}

module.exports = withMDX(nextConfig)