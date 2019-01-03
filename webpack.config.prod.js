const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: "/",
  },
  resolve: { 
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
        use: ExtractCssChunks.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        exclude: [/\.html$/, /\.(js|jsx)$/, /\.css$/,  /\.scss$/, /\.json$/],
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: __dirname + '/public/index.html'
    }),
    new ExtractCssChunks({
      filename: '[name].css',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module, count) {
        var context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'react',
      minChunks(module, count) {
        var context = module.context;
        return context && context.indexOf('node_modules\/react') >= 0;
      },
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    })
  ]
}