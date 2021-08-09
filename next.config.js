const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
      'localhost'
    ]
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
  assetPrefix: isProd ? 'https://www.googletagmanager.com/gtag/js?id=G-TQRHRT6ZW9' : ''
}

module.exports = withMDX(nextConfig)
