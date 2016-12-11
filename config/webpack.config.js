const babelConfig = require('./babel.config.js');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '../'),
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './src/index.js'
    ],
  },
  output: {
    filename: '[name].js',
    path: '/build/',
  },
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: 'style!css?modules&localIdentName=[path][name]_[local]_[hash:base64:5]',
        exclude: /node_modules|react-id-swiper/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: babelConfig,
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
