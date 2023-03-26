const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');

const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = '/';

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'assets/[name]-[chunkhash].js',
    chunkFilename: 'assets/[name]-[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: buildPath,
  },
  module: {
    rules: [
      {
        test: /\.(css||scss)$/,
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              hot: true,
              modules: true,
              reloadAll: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: false,
              resources: [
                './app/assests/stylesheets/_variables.scss',
                './app/assests/stylesheets/mixins/_media.scss',
                './app/assests/stylesheets/mixins/_mixins.scss',
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          outputPayh: 'assets/',
          publicPath: buildPath,
        },
      },
    ],
  },
  plugins: [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    }),
    new ExtractCssChunks({
      filename: 'assets/[chunkhash].css',
      chunkFilename: 'assets/[chunkhash].css',
      orderWarning: false,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
    }),

    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
});
