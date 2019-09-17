const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimazeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "js/[name].[contentHash].js",
    path: path.resolve(__dirname, "dist/common"),
    // set static as src="static/main.js as relative path
    publicPath: 'common/'

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '',
      filename: '../index.html',
      template: "./src/index.html",
      chunks: ['main'],
      hash: false,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      title: '',
      filename: '../result.html',
      template: "./src/result.html",
      chunks: ['result'],
      hash: false,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contentHash].css"
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer:
      [new OptimazeCssAssetsPlugin(), new TerserPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
});
