const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const webpack = require('webpack');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname,'/bin'),
        filename: "app.bundle.js"
    },
    module: {
        rules: [
            {
              test: /\.js/,
              use:[
                  {
                      loader: "babel-loader",
                      options: { presets: ["es2015"]}
                  }
              ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/app.html'
        }),
        new CleanWebpackPlugin(['bin']),
        new ExtractTextWebpackPlugin('style.css'),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
      ]
};