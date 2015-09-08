var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: [
      './client/entry.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, 'server', 'public', 'js'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [ 'babel?optional[]=runtime&optional[]=es7.decorators&optional[]=es7.exportExtensions&stage=2' ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_DEVTOOLS': JSON.stringify(process.env.NODE_DEVTOOLS),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
};
