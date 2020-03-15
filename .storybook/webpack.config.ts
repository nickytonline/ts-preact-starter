/**
 * This extends the default webpack configuration used in storybook.
 */
import { resolve } from 'path';

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
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
  }
};
