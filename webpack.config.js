const { resolve } = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = 3000;
const context = __dirname + "/src";

module.exports = env => {
  const { NODE_ENV = null } = env;
  const config = {
    name: "client",
    target: "web",
    context,
    entry: {
      app: "./index.tsx"
    },
    output: {
      filename: "[name].js",
      path: resolve(__dirname, "dist")
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", "jsx"]
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.tsx?$/,
          loader: "tslint-loader",
          exclude: /node_modules/,
          options: {
            configFile: resolve(__dirname, "./tslint.json"),
            emitErrors: true,
            failOnHint: true,
            typeCheck: true
          }
        },
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        hash: true,
        filename: "index.html",
        inject: "body"
      }),
      new HotModuleReplacementPlugin()
    ]
  };

  if (NODE_ENV === "dev") {
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
