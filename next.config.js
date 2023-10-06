/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  productionSourceMaps: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
