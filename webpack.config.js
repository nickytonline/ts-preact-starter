const {HotModuleReplacementPlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = 3000;
const context = __dirname + '/src';
const environment = process.env.NODE_ENV;

const webpackConfig = {
  name: 'client',
  target: 'web',
  context,
  entry: {
    app: './index.tsx'
  },
  output: {
    filename: '[name].js',
    path: __dirname + 'dist',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.tsx?$/,
      use: 'tslint-loader',
      exclude: /node_modules/,
      options: {
        configFile: './tslint.json',
        emitErrors: true,
        failOnHint: true
      }
    },
    {
      test: /\.tsx?$/,
        use: "ts-loader",
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      hash: true,
      filename: 'index.html',
      inject: 'body',
    }),
    new HotModuleReplacementPlugin()
  ]
};

if (environment === 'dev') {
  webpackConfig.devServer = {
    port,
    contentBase: context,
    historyApiFallback: true,
    stats: {
      colors: true
    },
    noInfo: false,
    quiet: false,
    hot: true
  }
}

module.exports = webpackConfig;