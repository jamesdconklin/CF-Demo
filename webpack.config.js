const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/entry.jsx',
  output:  {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: {
    alias: {
      Reducers: path.resolve(__dirname, 'src/reducers'),
      Middlewares: path.resolve(__dirname, 'src/middlewares'),
      Actions: path.resolve(__dirname, 'src/actions'),
      Components: path.resolve(__dirname, 'src/components'),
      Utils: path.resolve(__dirname, 'src/utils'),
      Config: path.resolve(__dirname, 'config'),
      Store: path.resolve(__dirname, 'src/store'),
      CSS: path.resolve(__dirname, 'src/css')
    },
    extensions: ['.js', '.jsx', '.css']
  }
};
