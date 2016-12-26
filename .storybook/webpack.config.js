module.exports = {
  name: 'client',
  target: 'web',
  entry: {
    app: [
      './src/index.tsx'
    ],
  },
  output: {
    filename: '[name].js',
    path: 'dist',
    publicPath: ''
  },
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js", "jsx"],
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
  tslint: {
    configFile: './tslint.json',
    emitErrors: true,
    failOnHint: true
  }
};