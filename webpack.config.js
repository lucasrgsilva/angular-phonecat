const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/app.module.js',
  },
  output: {
    filename: './app/bundle.js',
    // path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: 'file-loader'
      },
      {
        test: /\.css?$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: "./app",
    port: 9000,
  }
};