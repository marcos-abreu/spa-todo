var ExtractText = require('extract-text-webpack-plugin');
var extractSCSS = new ExtractText('css/styles.css');

var config = {
  devtool: 'source-map',
  entry: [
    './src/index.js',
    './src/assets/styles/app.scss'
  ],
  output: {
    path: './dist',
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: extractSCSS.extract('style', 'css?sourceMap!sass?sourceMap')
      }
    ]
  },
  plugins: [
    extractSCSS
  ]
};

module.exports = config;
