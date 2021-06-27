const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx"],
  images: {
    domains: ["lh3.googleusercontent.com", "localhost"],
  },
  webpack5: true,
  i18n: {
    localeDetection: false,
    locales: ['es', 'eu'],
    defaultLocale: 'es'
  },
  eslit: {
    dirs: ['pages', 'components', 'containers', 'firebase']
  },
}

module.exports = withMDX(nextConfig)