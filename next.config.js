const { redirect } = require('next/dist/next-server/server/api-utils')

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
  async redirect() {
    return [
      {
        source: 'https://blog-3cu5waq9j-leoncii.vercel.app/api/*',
        destinatiom: "https://simple-pimpumpam.com/",
        permanent: true
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['pages', 'components', 'containers', 'firebase']
  },
}

module.exports = withMDX(nextConfig)