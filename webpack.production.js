const merge = require('webpack-merge')

const base = require('./webpack.config.js')

module.exports = merge(
  base, {
    mode: 'production',
    devtool: 'hidden-source-map',
    output: {
      sourceMapFilename: '[name].js.map'
    }
  }
)
