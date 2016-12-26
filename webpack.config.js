const path = require('path');
const {HotModuleReplacementPlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = 3000;

const webpackConfig = {
  name: 'client',
  target: 'web',
  entry: {
    app: [
      './src/index.tsx',
      `webpack-dev-server/client?http://localhost:${port}/`,
      'webpack/hot/dev-server'
    ],
  },
  output: {
    filename: '[name].js',
    path: 'dist',
    publicPath: ''
  },
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js", "jsx"]
  },
  devtool: 'source-map',
  module: {
    preLoaders: [{
      test: /\.tsx?$/,
      loader: "tslint",
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.tsx?$/,
      loader: "awesome-typescript",
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
      filename: 'index.html',
      inject: 'body',
    }),
    new HotModuleReplacementPlugin()
  ],
  tslint: {
    configFile: './tslint.json',
    emitErrors: true,
    failOnHint: true
  },
  devServer: {
    port,
    contentBase: path.join(process.cwd(), 'src'),
    historyApiFallback: true,
    stats: {
      colors: true
    },
    noInfo: false,
    quiet: false,
    hot: true
  },

};

module.exports = webpackConfig;