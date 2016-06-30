// For info about this file refer to webpack and webpack-hot-middleware documentation
import webpack from 'webpack';
import path from 'path';
import NpmInstallPlugin from 'npm-install-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  noInfo: true, // set to false to see a list of every file being bundled.
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web',
  output: { // Note: Only prod environment actually outputs files.
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    // Create HTML file that includes references to bundled CSS and JS.
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      inject: true
    }),

    // Automatically install uninstalled dependencies
    new NpmInstallPlugin({
      dev: function(module) {
        return [
          'babel-preset-react-hmre',
          'webpack-dev-middleware',
          'webpack-hot-middleware'
        ].indexOf(module) !== -1;
      }
    })
  ],
  module: {
    loaders: [
      {test: /(\.js|\.jsx)$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']}
    ]
  },
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js', '.jsx']
  }
};
