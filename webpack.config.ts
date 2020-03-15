import * as webpack from 'webpack';
import { resolve, join } from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const { HotModuleReplacementPlugin } = webpack;
const port = 3000;
const context = __dirname + '/src';

interface WebpackEnvironment {
  NODE_ENV: string;
}

module.exports = (env: WebpackEnvironment, argv: { mode: string }) => {
  const appEntryPoints = argv.mode === 'production'
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
    devtool: argv.mode === 'production' ? 'source-map' : 'cheap-eval-source-map',
    module: {
      rules: [
        /**
         * ESLINT
         * First, run the linter.
         * It's important to do this before Babel processes the JS.
         * Only testing .ts and .tsx files (React code)
         */
        {
          test: /\.(ts|tsx)$/,
          enforce: 'pre',
          use: [
            {
              options: {
                eslintPath: require.resolve('eslint'),
      
              },
              loader: require.resolve('eslint-loader'),
            },
          ],
          exclude: /node_modules/,
        },
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

  if (argv.mode === 'development') {
    config.devServer = {
      contentBase: join(__dirname, 'dist'),
        compress: true,
        port: 9000
    };
  }

  return config;
};
