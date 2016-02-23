var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

var rootPath = path.resolve(__dirname, '..'); // Relative path from this file to the root of the app
var assetPath = path.resolve(rootPath, './static/');
var publicPath = path.resolve(rootPath, './dist/'); // => `./dist`


var data = {
  title: 'Ned Schwartz &ndash; The Interned &ndash; Seasoned Front-end developer and designer living in Toronto, Ontario Canada.',
  routes: [
    '/'
  ]
}

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
global.webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools.config'));

module.exports = {
  entry: './webpack/build.js',

  output: {
    filename: 'bundle.js',
    path: assetPath,
    publicPath: publicPath,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
       {
         test: /\.scss$/,
         loader: ExtractTextPlugin.extract(['css?modules&importLoaders=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]', 'autoprefixer?browsers=last 2 version', 'sass?outputStyle=expanded&sourceMap'])
       },
    ]
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  },

  plugins: [
    new ExtractTextPlugin('[name]-[chunkhash].css', {allChunks: true}),
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data),
    webpackIsomorphicToolsPlugin,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    }),
  ]
}
