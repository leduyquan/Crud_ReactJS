const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    __dirname + "/src/index.js",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: { 
    //modules: ['node_modules'],
    //Automatically resolve certain extensions. 
    //Ex: import SomeFile from './somefile.ext'
    extensions: ['.js', '.jsx', '.css', '.scss', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ],
          fallback: "style-loader"
        })
      },
    ]
  },
  plugins: [
    //Automatically reload whenever there are any changes from the files
    new webpack.HotModuleReplacementPlugin(),
    //It will create a html file and load all your bundles
    new HtmlWebpackPlugin({
      inject: true,
      template: __dirname + '/public/index.html'
    }),
    //It moves all the required *.css modules in entry chunks into a separate CSS file.
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
  })
  ],
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}