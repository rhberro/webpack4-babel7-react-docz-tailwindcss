const merge = require('webpack-merge')
const path = require('path')

const base = require('./webpack.config.js')

module.exports = merge(
  base, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, 'build')
    }
  }
)
