import path from 'path';

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'webpack-numbers.js',
    clean: true,
    library: {
      name: 'webpackNumbers',
      type: 'umd',
    },
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
};