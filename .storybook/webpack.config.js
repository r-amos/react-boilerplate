const path = require('path');

module.exports = {
  module: {
      rules: [
          {
              test: /\.scss$/,
              use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
              ]
          },
          {
              test: /\.tsx?$/,
              exclude: /node_modules/,
              use: [ 
                  {loader: 'babel-loader'},
                  {loader: 'ts-loader'},               
              ]
          }
      ]
  },
  resolve: {
      extensions: [ '.tsx', '.ts', '.js', '.scss' ]
  }
};