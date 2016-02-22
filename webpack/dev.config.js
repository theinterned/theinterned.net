var path = require('path');
var webpack = require('webpack');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

var webpackIsomorphicToolsPlugin =
  // webpack-isomorphic-tools settings reside in a separate .js file
  // (because they will be used in the web server code too).
  new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools.config'))
  // also enter development mode since it's a development webpack configuration
  // (see below for explanation)
  .development()

var rootPath = path.resolve(__dirname, '..'); // Relative path from this file to the root of the app
var assetPath = path.resolve(rootPath, '/static/');
var projectPath = path.resolve(rootPath, './dist'); // => `./dist`

module.exports = {
  devtool: 'eval',
  context: path.resolve(__dirname, '..'),
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    filename: 'bundle.js',
    path: projectPath,
    publicPath: assetPath
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        // include: path.join(__dirname, 'src')
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]', 'autoprefixer?browsers=last 2 version', 'sass?outputStyle=expanded&sourceMap']
      }
      // {
      //   test: /\.scss$/,
      //   loaders: ['style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass' ]
      // }
    ]
  }
};
