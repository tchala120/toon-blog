const nextConfig = { pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'] }

module.exports = {
  ...nextConfig,
  env: {
    GA_KEY: process.env.GA_KEY,
  },
}
