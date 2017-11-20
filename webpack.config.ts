import * as webpack from 'webpack';
import { resolve } from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const { HotModuleReplacementPlugin } = webpack;
const port = 3000;
const context = __dirname + '/src';

interface WebpackEnvironment {
  NODE_ENV: string;
}

module.exports = (env: WebpackEnvironment) => {
  const { NODE_ENV = null } = env;
  const isProd = NODE_ENV === 'production';
  const appEntryPoints = isProd
  ? ['./index']
  : [
      `webpack-dev-server/client?http://localhost:${port}`,
      'webpack/hot/only-dev-server',
      './index'
    ];

  const config: webpack.Configuration = {
    name: 'client',
    target: 'web',
    context,
    entry: {
      app: appEntryPoints
    },
    output: {
      filename: '[name].js',
      path: resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'jsx']
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.tsx?$/,
          loader: 'tslint-loader',
          exclude: /node_modules/,
          options: {
            configFile: resolve(__dirname, './tslint.json'),
            emitErrors: true,
            failOnHint: true,
            typeCheck: true
          }
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        hash: true,
        filename: 'index.html',
        inject: 'body'
      }),
      new HotModuleReplacementPlugin()
    ]
  };

  if (NODE_ENV === 'dev') {
    config.devServer = {
      port,
      historyApiFallback: true,
      stats: {
        colors: true
      },
      noInfo: false,
      quiet: false,
      hot: true
    };
  }

  return config;
};
