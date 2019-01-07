const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: "/",
  },
  resolve: { 
    //Tell webpack what directories should be searched when resolving modules
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
    ]
  },
  plugins: [
    //Automatically reload whenever there are any changes from the files
    new webpack.HotModuleReplacementPlugin(),

    //It will create a html file and load all your bundles (dist folder)
    new HtmlWebpackPlugin({
      inject: true,
      template: __dirname + '/public/index.html'
    }),

    //It moves all the required *.css modules based on CommonsChunkPlugin. Display on DOM
    new ExtractCssChunks({
      filename: '[name].css',
    }),
    
    //Optimize \ minimize CSS assets.
    // new OptimizeCssAssetsPlugin({
    //   assetNameRegExp: /\.css$/g,
    //   cssProcessor: require('cssnano'),
    //   cssProcessorPluginOptions: {
    //     preset: ['default', { discardComments: { removeAll: true } }],
    //   },
    //   canPrint: true
    // }),

    //For minify bundle file
    //Must declare in .babelrc
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false, // Suppress uglification warnings
    //     pure_getters: true,
    //     unsafe: true,
    //     unsafe_comps: true,
    //     screw_ie8: true
    //   },
    //   output: {
    //     comments: false
    //   },
    //   sourceMap: true,
    //   exclude: [/\.min\.js$/gi]
    // }),

    //Split the code (bundle) smaller 
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
    })
  ],
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}