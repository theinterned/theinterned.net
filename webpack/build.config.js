var path = require('path');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
// var data = require('./data')
var data = [];

var rootPath = path.resolve(__dirname, '../'); // Relative path from this file to the root of the app
var publicPath = '/static/'
var projectPath = path.resolve(rootPath, './dist'); // => `./dist`

var data = {
  title: 'Ned Schwartz &ndash; The Interned &ndash; Seasoned Front-end developer and designer living in Toronto, Ontario Canada.',
  routes: [
    '/'
  ]
}

module.exports = {
  entry: './webpack/build.js',

  output: {
    filename: 'bundle.js',
    path: projectPath,
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
        loaders: ['style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass' ]
      }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
  ]
}
