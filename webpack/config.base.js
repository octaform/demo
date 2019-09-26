require('webpack');
const webpack = require('webpack');
const Package = require('../package.json');
const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');

const gitRevision = new GitRevisionPlugin();

module.exports = {
  resolve: {
    extensions: [".js", ".jpg", ".png", ".svg"]
  },
  entry: {
    bundle: "./src/index.js",
    vendor: Object.keys(Package.dependencies)
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([
          "css-loader", 
          "sass-loader"
        ])
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", 
          "css-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'img/'
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          name: "vendor",
          test: "vendor",
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `Octaform Validate Demo Page`,
      template: "./src/index.html"
    }),
    new ExtractTextPlugin("styles.css"),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: false
    }),
    new webpack.DefinePlugin({
      GIT: {
        VERSION: JSON.stringify(gitRevision.version()),
        COMMIT_HASH: JSON.stringify(gitRevision.commithash()),
        BRANCH: JSON.stringify(gitRevision.branch()),
      }
    })
  ]
};
