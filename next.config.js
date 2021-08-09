const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'res.cloudinary.com', 'localhost'
    ]
  },
  webpack5: true,
  i18n: {
    localeDetection: false,
    locales: ['es', 'eu'],
    defaultLocale: 'es'
  },
  port: 3001,
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['pages', 'components', 'containers', 'firebase']
  },
  assetPrefix: 'https://www.googletagmanager.com/gtag/js?id=G-TQRHRT6ZW9'
}

module.exports = withMDX(nextConfig)
