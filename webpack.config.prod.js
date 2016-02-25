var path              = require('path');
var webpack           = require('webpack');
var autoprefixer      = require('autoprefixer');
var htmlWebpackPlugin = require('html-webpack-plugin');
var pkg               = require('./package.json');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.'+ pkg.version +'.js',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new htmlWebpackPlugin({
      filename: 'index.html',
      inject: false,
      template: path.join(__dirname, '_index.ejs'),
      title: 'Octoblu - Automation App Store',
      pkg: pkg
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      {
        test: /\.jpg$/,
        loader: "url-loader?limit=10000&minetype=image/jpg"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=10000&minetype=image/png"
      },
      {
        test: /\.svg$/,
        loader: "file-loader"
      }
    ]
  },
  postcss: function (webpack) {
    return [
      autoprefixer
    ];
  }
};
