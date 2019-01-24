require('webpack');
const merge = require('webpack-merge');
const configBase = require('./config.base');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(configBase, {
  mode: "production",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        extractComments: true
      })
    ]
  }
});
