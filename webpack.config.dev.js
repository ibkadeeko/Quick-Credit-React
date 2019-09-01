const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-source-map',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    stats: 'minimal',
    overlay: true,
    historyApiFallback: true,
    port: 3000,
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'Quick Credit'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|jpeg|eps|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10000 }
          }
        ]
      }
    ]
  }
};
