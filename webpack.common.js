
const path = require("path");
const webpack = require('webpack');
module.exports = {
  entry: {
    main: "./src/js/app.js",
    result: "./src/js/result.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
            publicPath: '../images',
            useRelativePaths: true
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin(
      {
        $: 'jquery',
        jquery: 'jquery'
      }
    )
  ]
}
