'use strict';

var path = require('path');
var webpack = require('webpack');

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.optimize.OccurenceOrderPlugin()
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  );
}

var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};

module.exports = {
  entry: {
      app: './src/app.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  devServer: {
     contentBase: "./dist",
     noInfo: true, //  --no-info option
     hot: true,
     inline: true
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
