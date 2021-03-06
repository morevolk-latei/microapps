'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    root: './root/application.js',
    'angular-1': './angular-1/application.js',
    'hyperapp-0': './hyperapp-0/application.jsx',
    'react-15': './react-15/application.jsx',
    'surplus-0': './surplus-0/application.jsx',
    'vue-2': './vue-2/application.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[name].[hash].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /root\/.+\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015'
          ]
        }
      },
      {
        test: /angular-1\/.+\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015'
          ],
          plugins: [
            'angularjs-annotate'
          ]
        }
      },
      {
        test: /hyperapp-0\/.+\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015'
          ],
          plugins: [
            [
              'transform-react-jsx',
              {
                pragma: 'h'
              }
            ]
          ]
        }
      },
      {
        test: /react-15\/.+\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015',
            'react'
          ]
        }
      },
      {
        test: /surplus-0\/.+\.jsx?$/,
        loader: 'surplus-loader',
        exclude: /node_modules/
      },
      {
        test: /vue-2\/.+\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015'
          ]
        }
      },
      {
        test: /vue-2\/.+\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'root/index.html',
      filename: 'index.html',
      chunks: [
        'root'
      ]
    }),
    new HtmlWebpackPlugin({
      template: 'angular-1/index.html',
      filename: 'angular-1/index.html',
      chunks: [
        'angular-1'
      ]
    }),
    new HtmlWebpackPlugin({
      template: 'hyperapp-0/index.html',
      filename: 'hyperapp-0/index.html',
      chunks: [
        'hyperapp-0'
      ]
    }),
    new HtmlWebpackPlugin({
      template: 'react-15/index.html',
      filename: 'react-15/index.html',
      chunks: [
        'react-15'
      ]
    }),
    new HtmlWebpackPlugin({
      template: 'surplus-0/index.html',
      filename: 'surplus-0/index.html',
      chunks: [
        'surplus-0'
      ]
    }),
    new HtmlWebpackPlugin({
      template: 'vue-2/index.html',
      filename: 'vue-2/index.html',
      chunks: [
        'vue-2'
      ]
    })
  ]
}
