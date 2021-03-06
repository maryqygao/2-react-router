const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  devtool: debug ? 'cheap-module-source-map' : null,
  entry: [
    'tether',
    'font-awesome/scss/font-awesome.scss',
    'bootstrap-loader',
    './js/client.js'
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            {
              loader: 'css-loader',
              options: {
                camelCase: true,
                minimize: debug ? true : false,
                importLoaders: 1
              }
            },
            'postcss-loader',
            'resolve-url-loader'
          ]
        })
      },
      {
        test: /\.mcss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                camelCase: true,
                minimize: debug ? true : false,
                importLoaders: 1
              }
            },
            'postcss-loader',
            'resolve-url-loader'
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                camelCase: true,
                minimize: debug ? true : false,
                importLoaders: 3
              }
            },
            'postcss-loader',
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  path.resolve(__dirname, './config/sass-resources.scss')
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.mscss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                camelCase: true,
                minimize: debug ? true : false,
                importLoaders: 3
              }
            },
            'postcss-loader',
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  path.resolve(__dirname, './config/sass-resources.scss')
                ]
              }
            }
          ]
        })
      },
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
        // loader: "url?limit=10000"
        use: 'url-loader'
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader'
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'client.min.js'
  },
  plugins: debug
    ? [
        new ExtractTextPlugin('styles.css'),
        new webpack.ProvidePlugin({
          // $: 'jquery',
          // jQuery: 'jquery',
          // 'window.jQuery': 'jquery',
          Tether: 'tether',
          'window.Tether': 'tether'
          // Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
          // Button: 'exports-loader?Button!bootstrap/js/dist/button',
          // Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
          // Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
          // Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
          // Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
          // Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
          // Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
          // Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
          // Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip',
          // Util: 'exports-loader?Util!bootstrap/js/dist/util'
        })
      ]
    : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
      ]
};
