const withImages = require('next-images');
const withSass = require('@zeit/next-sass')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})


module.exports = withImages(withBundleAnalyzer(withSass({
  webpack: function (config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: 'preact/compat',
      react$: 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom$': 'preact/compat',
    }

    return config
  },
})));