const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const  OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

     module.exports = merge(common, {
         devtool: 'source-map',
       plugins: [
           new UglifyJSPlugin({
               sourceMap: true,
               test:/\.js$/
           }),
           new OptimizeCssAssetsWebpackPlugin({
               assetNameRegExp: /\.css$/
           }),
           new BundleAnalyzerPlugin()
       ]
 });