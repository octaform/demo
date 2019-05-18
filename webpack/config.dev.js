const merge = require('webpack-merge');
const configBase = require('./config.base');
const path = require('path');

module.exports = merge(configBase, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: true,
    contentBase: path.join(__dirname, "../src"),
    port: 3000
  }
});
