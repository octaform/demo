const webpack = require('webpack');
const merge = require('webpack-merge');
const configBase = require('./config.base');

module.exports = merge(configBase, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      test: /\.js$/,
      exclude: /node_modules/,
      sourceMap: false,
      minimize: true,
      extractComments: true,
      ecma: 5,
      warnings: false,
      compress: {
        drop_console: true,
        drop_debugger: true,
        toplevel: true,
        pure_getters: true,
        warnings: false,
      },
      mangle: false,
      ie8: true,
      safari10: true,
      toplevel: true,
    })
  ],
});
