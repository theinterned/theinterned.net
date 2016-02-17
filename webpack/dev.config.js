var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
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
        test: /\.scss$/, // sass that's NOT in /app/css/ dir - uses the css-modules plugin
        exclude: [/src\/global.scss/],
        loaders: ['style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass' ]
      },
      {
        test: /\.scss$/, // sass that IS in /app/css/ dir - doesn't transform the class-names with the css-modules plugin
        include: [/src\/global.scss/],
        loaders: [ 'style?sourceMap', 'css', 'sass' ]
      }
    ]
  }
};
