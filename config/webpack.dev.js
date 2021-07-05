const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
  },
  devServer: {
    port: 8080,
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    open: true,
  },
});
