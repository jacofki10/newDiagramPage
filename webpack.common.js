const path = require("path");
const webpack = require('webpack');
module.exports = {
  entry: {
    main: "./src/js/app.js",
    vendor: "./src/js/result.js"
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
            outputPath: "images"
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
