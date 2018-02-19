var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var vue = require("vue-loader");
const path = require('path');

module.exports = {
  entry: {
    app: "./app/scripts/main.js"
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "main.min.js"

  },
  plugins: [
    new ExtractTextPlugin("./styles/main.css")
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ]
  },
  devtool: "#source-map"
}