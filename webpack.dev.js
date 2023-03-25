const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const enviromentConfig = common.plugins[0].definitions['process.env'];

let config = 'window.TODOConfig= { ';

Object.keys(enviromentConfig).map((key, index) => {
  config += `${key}: ${enviromentConfig[key]}`;
  if (Object.keys(enviromentConfig).length > index + 1) {
    config += ', ';
  }
});

config += '}';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
    static: './dist',
    port: 8080,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-ontrol-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      enviroment: `<script>${config}</script>`,
    }),
    new BundleAnalyzerPlugin(),
    new ExtractCssChunks({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: true,
    }),
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
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
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
      },
    ],
  },
});
