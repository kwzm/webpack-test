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
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ],
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: 'css-loader', options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          { loader: 'css-loader', options: { importLoaders: 1 } },
          "postcss-loader",
          "less-loader"
        ]
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