const path = require('path');
const webpack = require('webpack');

const newConfig = {};

if (process.env.NODE_ENV) {
  const directory = path.resolve(__dirname, './configs');
  const environment = process.env.NODE_ENV.toLowerCase();

  const filePath = path.resolve(directory, `${environment}.config.js`);

  const environmentConfig = require(filePath);

  Object.keys(environmentConfig).forEach((item) => {
    newConfig[item] = JSON.stringify(environmentConfig[item]);
  });
}

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  resolve: {
    descriptionFiles: ['package.json'],
    extensions: ['.js', '.scss'],
    alias: {
      App: path.resolve(__dirname, 'app/'),
      Components: path.resolve(__dirname, 'app/components/'),
      Views: path.resolve(__dirname, 'app/views/'),
      Store: path.resolve(__dirname, 'app/store/'),
      Routes: path.resolve(__dirname, 'app/routes/'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': newConfig,
    }),
  ],
};
