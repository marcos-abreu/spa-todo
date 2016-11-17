var path = require('path');
var webpack = require('webpack');
var ExtractText = require('extract-text-webpack-plugin');

var extractSCSS = new ExtractText('css/styles.css');

var plugins = [];
plugins.push(extractSCSS);

// Always expose NODE_ENV to webpack, you can now use `process.env.NODE_ENV`
// inside your code for any environment checks; UglifyJS will automatically
// drop any unreachable code.
plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
}));

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
      },
      {
        test: /\.(png|jpgeg|jpg|svg|gif)$/,
        loaders: ['file?name=img/[name].[md5:hash:8].[ext]', 'image-webpack']
      }
    ]
  },
  plugins: plugins,
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, 'node_modules', 'foundation-sites', 'scss')
    ]
  }
};

module.exports = config;
