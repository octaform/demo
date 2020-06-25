const webpack = require('webpack');
const merge = require('webpack-merge');
const configBase = require('./config.base');
const path = require('path');

module.exports = merge(configBase, {
  mode: "development",
  devtool: "inline-source-map",
  resolve: {},
  devServer: {
    open: false,
    contentBase: path.join(__dirname, "../src"),
    port: 3000
  },
  plugins: [
    new webpack.DefinePlugin({
      REPO_URL: JSON.stringify('http://dev.localhost:3000')
    }),
  ]
});
