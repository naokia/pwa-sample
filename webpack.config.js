var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var vue = require("vue-loader");
const path = require('path');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
  entry: {
    app: "./app/scripts/main.js"
  },
  output: {
    path: path.resolve(__dirname, "public/assets"),
    publicPath: path.resolve(__dirname, "public"),
    filename: "main.min.js"

  },
  plugins: [
    new ExtractTextPlugin("./styles/main.css"),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, 'public/sw.js'),
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    publicPath: '/assets/',
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devtool: "#source-map"
}