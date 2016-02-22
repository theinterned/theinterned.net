var path = require('path');
var webpack = require('webpack');

var rootPath = path.resolve(__dirname, '../'); // Relative path from this file to the root of the app
var publicPath = '/static/'
var projectPath = path.resolve(rootPath, './dist'); // => `./dist`

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    filename: 'bundle.js',
    path: projectPath,
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
