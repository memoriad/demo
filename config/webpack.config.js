const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/libs/materialize.js',
    './src/themes/elements.scss',
    './src/app/index.js'
  ],
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              sourceMap: true,
              module: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          }, {
            loader: 'sass-loader',
            query: {
              outputStyle: 'expanded',
              sourceMap: true
            }
          },
          'postcss-loader'
        ]
      }, {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader?limit=100000'
        ]
      }, {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
          'url-loader?limit=100000'
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "Hammer": "hammerjs/hammer",
      createDayLabel: "jquery",
      createWeekdayLabel: "jquery"
    }),
    new HtmlWebpackPlugin({
      title: 'demo',
      template: './src/templates/index.html',
      chunksSortMode: 'dependency'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({ options: {postcss: [
      autoprefixer
    ]}})
  ],
  devServer: {
    hot: true,
    inline: false,
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:5000'
      }
    }
  }
};
