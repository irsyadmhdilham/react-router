const webpack = require('webpack'),
      path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 7000,
    host: '0.0.0.0',
    stats: 'errors-only',
    overlay: true,
    historyApiFallback: true
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpe?g|gif|svg)/, use: 'file-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.png', '.jpg', 'jpeg', '.gif', '.svg']
  }
}
