const ENV = (JSON.stringify(process.env.NODE_ENV || 'dev'));
const Package = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react', 
  'react-dom'
];

module.exports = {
	devtool: 'inline-source-map',
	resolve: {
		extensions: [
      '.js', '.jpg', '.png', '.svg'
    ]
	},
	entry: {
		bundle: './src/index.js',
		vendor: VENDOR_LIBS
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract([
				'css-loader',
				'sass-loader',
			]),
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader',
			],
		}, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        'eslint-loader'
      ],
		}],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
		new CircularDependencyPlugin({
			exclude: /node_modules/,
			failOnError: false,
		}),
		new webpack.ProvidePlugin({}),
		new webpack.DefinePlugin({
			VERSION: JSON.stringify(Package.version),
			'process.env.NODE_ENV': ENV,
		}),
	],
};
