const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name]-[chunkhash:8].bundle.js',
  },
  module: {
    rules: [
      {
        test: '\.js$',
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      }
    })
  ]
}