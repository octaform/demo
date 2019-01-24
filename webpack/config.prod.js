require('webpack');
const merge = require('webpack-merge');
const configBase = require('./config.base');

module.exports = merge(configBase, {
  mode: "production",
  optimization: {
    minimize: true
  }
});
