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
    extensions: ['', '.ts', '.tsx', '.js'],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  devtool: 'source-map',
  module: {
    preLoaders: [{
      test: /\.tsx?$/,
      loader: 'tslint',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  tslint: {
    configFile: './tslint.json',
    emitErrors: true,
    failOnHint: true
  }
};
