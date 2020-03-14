const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})


module.exports = withBundleAnalyzer(withCSS(withImages({
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