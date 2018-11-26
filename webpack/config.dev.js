const merge = require('webpack-merge');
const configBase = require('./config.base');
const path = require('path');

module.exports = merge(configBase, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "../src"),
    port: 3000
  },
})
