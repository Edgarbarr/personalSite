const path = require('path');
const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');
const webpack = require('webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');

const client = {
  entry: './client/src/index.jsx',

  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/assets/',
  },
  node: {
    __dirname: false,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|mp4)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-syntax-dynamic-import'],
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },

        ],
      },

    ],

  },
  plugins: [
    new BrotliGzipPlugin({
      asset: '[path].br[query]',
      algorithm: 'brotli',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new BrotliGzipPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new LoadablePlugin(),
    new webpack.IgnorePlugin(/^pg-native$/),

  ],

  devServer: {
    historyApiFallback: true,
  },
};

const server = {
  entry: './server/index.js',
  target: 'node',

  output: {
    path: path.resolve(__dirname, './server'),
    filename: 'serverBundle.js',
  },

  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mp4)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-syntax-dynamic-import', '@loadable/babel-plugin'],
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },

        ],
      },

    ],
  },
  plugins: [
    new BrotliGzipPlugin({
      asset: '[path].br[query]',
      algorithm: 'brotli',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new BrotliGzipPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new webpack.IgnorePlugin(/^pg-native$/),

  ],

  devServer: {
    historyApiFallback: true,
  },
};

module.exports = [server, client];
